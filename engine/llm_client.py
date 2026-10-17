"""
llm_client.py: Universal clinical LLM client supporting Google GenAI, Antigravity IDE, Ollama, and Clinical Rule fallback.
"""

from __future__ import annotations
import os
import json
import logging
from typing import Optional, Dict, Any, List

logger = logging.getLogger("VoiceOSCE.LLMClient")


class UniversalLLMClient:
    """Multi-backend LLM client for clinical patient simulation and examiner evaluation."""

    def __init__(self):
        self.api_key = os.environ.get("GEMINI_API_KEY")
        self._genai_client = None
        if self.api_key:
            try:
                from google import genai
                self._genai_client = genai.Client(api_key=self.api_key)
            except Exception as e:
                logger.warning(f"Could not initialize google-genai client: {e}")
        self._ollama_checked = False
        self._ollama_available = False

    def _check_ollama(self) -> bool:
        if not self._ollama_checked:
            self._ollama_checked = True
            try:
                import httpx
                r = httpx.get("http://localhost:11434/api/tags", timeout=0.2)
                self._ollama_available = (r.status_code == 200)
            except Exception:
                self._ollama_available = False
        return self._ollama_available

    def generate(
        self,
        system_instruction: str,
        prompt: str,
        temperature: float = 0.3,
        model: str = "gemini-2.5-flash"
    ) -> str:
        """Generate response across available backends."""
        # 1. Try Google GenAI SDK if API key available
        if self._genai_client:
            try:
                response = self._genai_client.models.generate_content(
                    model=model,
                    contents=prompt,
                    config={
                        "system_instruction": system_instruction,
                        "temperature": temperature
                    }
                )
                if response and response.text:
                    return response.text.strip()
            except Exception as e:
                logger.warning(f"Google GenAI generate failed: {e}. Trying fallbacks...")

        # 2. Try Ollama if running locally and confirmed reachable
        if self._check_ollama():
            try:
                import httpx
                r = httpx.post(
                    "http://localhost:11434/api/generate",
                    json={
                        "model": "mistral",
                        "prompt": f"{system_instruction}\n\nCandidate: {prompt}\nResponse:",
                        "stream": False
                    },
                    timeout=2.0
                )
                if r.status_code == 200:
                    data = r.json()
                    if "response" in data and data["response"].strip():
                        return data["response"].strip()
            except Exception:
                pass

        # 3. Rule-based / Structured Fallback handled by caller agents
        return ""


_llm_client_instance: Optional[UniversalLLMClient] = None

def get_llm_client() -> UniversalLLMClient:
    global _llm_client_instance
    if _llm_client_instance is None:
        _llm_client_instance = UniversalLLMClient()
    return _llm_client_instance
