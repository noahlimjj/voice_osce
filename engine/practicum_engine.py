"""
practicum_engine.py: Practicum Script cognitive evaluation engine.
Assesses clinical reasoning under uncertainty, Bayesian probability vector shifts,
Delphi expert consensus concordance, and cognitive bias traps.
"""

from __future__ import annotations
import re
from typing import Dict, List, Optional, Set, Tuple
from voice_osce.cases.case_schema import OSCECase, CognitiveTrap

# Words too generic to identify a specific hypothesis
_HYPOTHESIS_STOPWORDS = {
    "acute", "with", "and", "the", "type", "disease", "syndrome", "involvement",
    "primary", "secondary", "chronic", "severe", "early", "of", "for", "from",
}

_NEGATION_RE = re.compile(
    r"\b(avoid|avoiding|no|not|never|don'?t|do not|contraindicated|contraindication|withhold|without|instead of|rather than"
    r"|exclud\w*|rul(e|es|ed|ing)\s*out|unlikely|less\s+likely)\b"
)
_NEGATIVE_SHIFT_RE = re.compile(
    r"\b(rul(e|es|ed|ing)\s*out|unlikely|less\s+likely|exclud\w*|against|weaken\w*|reduc\w*|decreas\w*|lower\w*|not\b)"
    r"|-\s*[12]\b"
)
_POSITIVE_SHIFT_RE = re.compile(
    r"\b(confirm\w*|support\w*|reinforc\w*|likely|consistent|diagnos\w*|increas\w*|strongly|in keeping|suggest\w*|shows?|evidence)\b"
    r"|\+\s*[12]\b"
)


def split_clauses(text: str) -> List[str]:
    """Split free text into short clauses so cues are attributed to the right hypothesis."""
    parts = re.split(r"[.;!?,\n]|\band\b|\bbut\b|\bwhereas\b|\bwhile\b", text.lower())
    return [p.strip() for p in parts if p and p.strip()]


def _hypothesis_terms(hypothesis: str) -> List[str]:
    terms = [w for w in re.findall(r"[a-z0-9]{3,}", hypothesis.lower()) if w not in _HYPOTHESIS_STOPWORDS]
    # Accept the usual initialism for short names (e.g. "PE" for Pulmonary Embolism)
    head = re.sub(r"\(.*?\)", "", hypothesis.lower())
    head_terms = [w for w in re.findall(r"[a-z]{3,}", head) if w not in _HYPOTHESIS_STOPWORDS]
    if 2 <= len(head_terms) <= 3:
        terms.append("".join(w[0] for w in head_terms))
    # Term patterns: prefix match for words, exact match for the initialism
    return [r"\b" + re.escape(t) + (r"\b" if i == len(terms) - 1 and 2 <= len(head_terms) <= 3 else "")
            for i, t in enumerate(terms)]


def keyword_hit(text: str, keywords: List[str], respect_negation: bool = True) -> Optional[str]:
    """Return the first keyword present in a non-negated clause of text (or None)."""
    for clause in split_clauses(text):
        for kw in keywords:
            if kw.lower() in clause:
                if respect_negation and _NEGATION_RE.search(clause.replace(kw.lower(), " ")):
                    continue
                return kw
    return None


def detect_traps(
    case: OSCECase,
    reasoning_text: Optional[str],
    unlocked_gate_keys: Set[str],
) -> List[CognitiveTrap]:
    """Apply each trap's detection rules. Text-based rules only run when reasoning text exists."""
    triggered: List[CognitiveTrap] = []
    for trap in case.cognitive_traps:
        fired = False
        if trap.missed_gate_keys and not any(k in unlocked_gate_keys for k in trap.missed_gate_keys):
            fired = True
        if reasoning_text:
            text_lower = reasoning_text.lower()
            if trap.trigger_keywords and keyword_hit(reasoning_text, trap.trigger_keywords):
                fired = True
            if trap.absent_keywords and not any(k.lower() in text_lower for k in trap.absent_keywords):
                fired = True
        if fired:
            triggered.append(trap)
    return triggered


class PracticumScriptEngine:
    """Evaluates candidate clinical reasoning trajectory under uncertainty."""

    def __init__(self, case: OSCECase):
        self.case = case
        self.reasoning_text: Optional[str] = None
        self.concordance_score: float = 0.0
        self.attempted: bool = False
        self.triggered_traps: List[CognitiveTrap] = []

    def get_perturbation_announcement(self) -> str:
        """Returns the clinical update text when interim results arrive."""
        p = self.case.perturbation
        findings_formatted = "\n".join([f"  • {k}: {v}" for k, v in p.findings.items()])
        return (
            f"🔔 [PRACTICUM SCRIPT INTERIM PERTURBATION]\n"
            f"TITLE: {p.title}\n"
            f"{p.description}\n\n"
            f"FINDINGS:\n{findings_formatted}\n\n"
            f"CLINICAL REASONING QUESTION:\n"
            f"How does this new data alter your diagnostic hypotheses? "
            f"State which conditions are reinforced (+1/+2) or ruled out (-1/-2)."
        )

    def evaluate_reasoning_shift(
        self,
        candidate_response: str,
        unlocked_gate_keys: Set[str]
    ) -> Tuple[float, List[str], List[CognitiveTrap]]:
        """Score candidate's interpretation against the Delphi expert panel.

        A hypothesis earns credit only when it is named in a clause that also carries a
        shift cue in the expert's direction (e.g. "PE is ruled out", "confirms STEMI").
        """
        self.attempted = True
        self.reasoning_text = candidate_response
        clauses = split_clauses(candidate_response)
        matched_points: List[str] = []
        scored = {h: v for h, v in self.case.perturbation.expected_shifts.items() if v != 0}

        hits = 0
        for hypothesis, expected_val in scored.items():
            terms = _hypothesis_terms(hypothesis)
            for clause in clauses:
                if not any(re.search(t, clause) for t in terms):
                    continue
                negative = bool(_NEGATIVE_SHIFT_RE.search(clause))
                positive = bool(_POSITIVE_SHIFT_RE.search(clause)) and not negative
                if expected_val > 0 and positive:
                    hits += 1
                    matched_points.append(f"Correctly identified that {hypothesis} is reinforced.")
                    break
                if expected_val < 0 and negative:
                    hits += 1
                    matched_points.append(f"Correctly recognized that {hypothesis} is weakened or ruled out.")
                    break

        self.concordance_score = round(100.0 * hits / max(1, len(scored)), 1)
        self.triggered_traps = detect_traps(self.case, candidate_response, unlocked_gate_keys)
        return self.concordance_score, matched_points, self.triggered_traps

    def final_traps(self, unlocked_gate_keys: Set[str]) -> List[CognitiveTrap]:
        """Re-evaluate traps at scoring time (history-gate traps apply even without a perturbation answer)."""
        self.triggered_traps = detect_traps(self.case, self.reasoning_text, unlocked_gate_keys)
        return self.triggered_traps
