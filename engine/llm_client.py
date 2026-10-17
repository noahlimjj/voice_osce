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
        self.ollama_url = os.environ.get("OLLAMA_URL", "http://localhost:11434").rstrip("/")
        self.ollama_model = os.environ.get("OLLAMA_MODEL", "mistral")
        self._ollama_checked = False
        self._ollama_available = False

    def _check_ollama(self) -> bool:
        if not self._ollama_checked:
            self._ollama_checked = True
            try:
                import httpx
                r = httpx.get(f"{self.ollama_url}/api/tags", timeout=1.0)
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
        if os.environ.get("VOICE_OSCE_LLM", "").lower() == "off":
            return ""  # Forced scripted / keyword mode (used by tests)
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
                    f"{self.ollama_url}/api/generate",
                    json={
                        "model": self.ollama_model,
                        "system": system_instruction,
                        "prompt": prompt,
                        "stream": False,
                        "options": {"temperature": temperature},
                    },
                    # Local CPU generation routinely takes several seconds; 2s always timed out
                    timeout=float(os.environ.get("OLLAMA_TIMEOUT", "60")),
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
