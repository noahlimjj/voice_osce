"""
llm_marker.py: Optional LLM-based semantic marking.
Returns None whenever no LLM is available or its output can't be parsed,
so callers fall back to deterministic keyword marking.
"""

from __future__ import annotations
import json
import re
from typing import List, Optional, Set

from voice_osce.engine.llm_client import get_llm_client

_SYSTEM = (
    "You are a strict senior medical OSCE examiner. Decide which rubric items the candidate's answer "
    "genuinely covers. Accept synonyms, abbreviations and paraphrases, but do not award items that are "
    "merely hinted at, contradicted, or negated. Reply with JSON only: {\"covered\": [item numbers]}."
)


def judge_items(question: str, answer: str, items: List[str]) -> Optional[Set[int]]:
    """Return the 0-based indices of rubric items covered by the answer, or None if no LLM verdict."""
    if not items or not answer.strip():
        return None
    numbered = "\n".join(f"{i + 1}. {item}" for i, item in enumerate(items))
    prompt = f"QUESTION:\n{question}\n\nRUBRIC ITEMS:\n{numbered}\n\nCANDIDATE ANSWER:\n{answer}\n\nJSON:"
    raw = get_llm_client().generate(system_instruction=_SYSTEM, prompt=prompt, temperature=0.0)
    if not raw:
        return None
    match = re.search(r"\{.*\}", raw, re.DOTALL)
    if not match:
        return None
    try:
        covered = json.loads(match.group(0)).get("covered", [])
        return {int(n) - 1 for n in covered if 1 <= int(n) <= len(items)}
    except (ValueError, TypeError, AttributeError):
        return None
