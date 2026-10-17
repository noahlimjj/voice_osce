"""
practicum_engine.py: Practicum Script cognitive evaluation engine.
Assesses clinical reasoning under uncertainty, Bayesian probability vector shifts,
Delphi expert consensus concordance, and cognitive bias traps.
"""

from __future__ import annotations
from typing import Dict, List, Tuple
from voice_osce.cases.case_schema import OSCECase, PerturbationData, CognitiveTrap


class PracticumScriptEngine:
    """Evaluates candidate clinical reasoning trajectory under uncertainty."""

    def __init__(self, case: OSCECase):
        self.case = case
        self.prior_hypotheses: List[str] = []
        self.posterior_hypotheses: List[str] = []
        self.candidate_shifts: Dict[str, int] = {} # hypothesis -> [-2, +2]
        self.concordance_score: float = 0.0
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
        unlocked_gate_keys: set[str]
    ) -> Tuple[float, List[str], List[CognitiveTrap]]:
        """Score candidate's interpretation against the Delphi expert panel."""
        text_lower = candidate_response.lower()
        matched_points: List[str] = []
        expert_shifts = self.case.perturbation.expected_shifts

        score_hits = 0
        total_possible = len(expert_shifts)

        # 1. Evaluate alignment with expected shifts
        for hypothesis, expected_val in expert_shifts.items():
            # Strip punctuation and keep clean words of length >= 3
            import re
            key_words = re.findall(r"[a-z]{3,}", hypothesis.lower())
            hypothesis_mentioned = any(kw in text_lower for kw in key_words if kw not in ("with", "acute", "type"))

            if expected_val > 0: # Reinforced/Confirmed
                has_positive_cue = bool(re.search(
                    r"\b(confirm|confirms|confirmed|support|supports|supported|reinforce|reinforces|likely|stemi|positive|emergency|retention|infarct|infarction)\b",
                    text_lower
                ))
                if hypothesis_mentioned and has_positive_cue:
                    score_hits += 1
                    matched_points.append(f"Correctly identified that {hypothesis} is reinforced.")
            elif expected_val < 0: # Weakened/Ruled out
                has_negative_cue = bool(re.search(
                    r"\b(rule\s*out|rules\s*out|ruled\s*out|unlikely|exclude|excludes|excluded|less\s+likely|not|reduces|reduced)\b",
                    text_lower
                ))
                if hypothesis_mentioned and has_negative_cue:
                    score_hits += 1
                    matched_points.append(f"Correctly recognized that {hypothesis} is weakened or ruled out.")

        # Concordance scored on evaluated items with baseline scaling
        hit_ratio = score_hits / max(1, min(len(expert_shifts), 3))
        self.concordance_score = round(min(100.0, max(50.0, hit_ratio * 100.0)), 1)

        # 2. Check for Cognitive Traps
        self.triggered_traps = []
        for trap in self.case.cognitive_traps:
            # Check specific trap criteria
            if "nitrate" in trap.trap_name.lower():
                if "nitrate" in text_lower or "gtn" in text_lower:
                    self.triggered_traps.append(trap)
            elif "cauda equina" in trap.trap_name.lower() or "saddle" in trap.trap_name.lower():
                # If candidate failed to unlock bladder or saddle gate
                if "red_flag_bladder" not in unlocked_gate_keys and "red_flag_saddle" not in unlocked_gate_keys:
                    self.triggered_traps.append(trap)
            elif "negative head ct" in trap.trap_name.lower() or "discharge" in trap.trap_name.lower():
                if "discharge" in text_lower or ("normal" in text_lower and "lumbar" not in text_lower and "lp" not in text_lower):
                    self.triggered_traps.append(trap)

        return self.concordance_score, matched_points, self.triggered_traps
