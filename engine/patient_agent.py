"""
patient_agent.py: Standardized Patient state machine with gated information disclosure.
Upgraded for OSCEBlitz Rapid-Fire Mode:
- 100% deterministic (<1ms response latency, zero local Ollama dependency)
- Compound / spammed multi-question burst matching (_match_all_gates & ask_patient_burst)
- Automatic pertinent negative exclusions for rapid clinical screening
"""

from __future__ import annotations
import re
from typing import List, Dict, Tuple, Set
from voice_osce.cases.case_schema import OSCECase, InformationGate, GateCategory


# Clinical shorthand synonym expansions for rapid-fire Blitz queries
BLITZ_SYNONYM_EXPANSIONS: Dict[str, List[str]] = {
    "site": ["where", "location"],
    "onset": ["start", "when", "onset", "how long", "sudden", "days"],
    "character": ["feel like", "describe", "sharp", "dull", "heavy", "crushing", "ache", "burning"],
    "quality": ["feel like", "describe", "sharp", "dull", "heavy", "crushing"],
    "radiation": ["radiate", "spread", "move", "shoot", "arm", "jaw", "back", "shoulder"],
    "associations": ["sweat", "nausea", "vomit", "breathless", "dizzy", "fever"],
    "associated": ["sweat", "nausea", "vomit", "breathless", "dizzy", "fever"],
    "timing": ["how long", "constant", "intermittent", "pattern", "days"],
    "exacerbating": ["worse", "better", "breathing", "posture", "movement", "food"],
    "relieving": ["worse", "better", "breathing", "posture"],
    "severity": ["scale", "severity", "pain score", "out of 10", "1 to 10"],
    "socrates": [
        "where", "start", "onset", "feel like", "describe", "radiate", "spread",
        "sweat", "nausea", "worse", "better", "scale", "severity", "out of 10"
    ],
    "pmhx": ["past", "medical history", "diabetes", "hypertension", "heart", "previous", "asthma"],
    "pmh": ["past", "medical history", "diabetes", "hypertension", "heart", "previous"],
    "diabetes": ["diabetes", "sugar", "insulin", "metformin", "past", "medical history"],
    "medications": ["meds", "medications", "pills", "tablets", "drugs", "regular", "blood thinner", "nsaid", "panadol", "aspirin"],
    "meds": ["meds", "medications", "pills", "tablets", "drugs", "regular", "blood thinner", "nsaid", "panadol"],
    "dhx": ["meds", "medications", "pills", "tablets", "allergy", "allergies"],
    "allergies": ["allergy", "allergies", "penicillin", "reaction"],
    "social": ["smoke", "smoking", "alcohol", "drink", "occupation", "job", "travel", "camp"],
    "shx": ["smoke", "smoking", "alcohol", "drink", "occupation", "travel"],
    "family": ["family", "father", "mother", "brother", "sister", "cancer", "aneurysm"],
    "fhx": ["family", "father", "mother", "brother", "cancer", "aneurysm"],
}

# Standard negative baselines when a student screens exclusions not present in case gates
PERTINENT_NEGATIVE_EXCLUSIONS: List[Tuple[str, List[str], str]] = [
    ("fever", ["fever", "temperature", "chills", "rigors", "pyrexia"], "No fever, chills, or rigors"),
    ("rash", ["rash", "petechiae", "skin", "bruising"], "No skin rash or petechiae"),
    ("travel", ["travel", "overseas", "abroad", "flight", "tekong", "camp"], "No recent overseas travel or sick contacts"),
    ("trauma", ["trauma", "injury", "fall", "accident", "hit"], "No history of trauma or injury"),
    ("medications", ["medication", "medications", "meds", "pills", "tablets", "drugs", "nsaid", "ibuprofen"], "No other regular medications or recent NSAIDs"),
    ("allergies", ["allergy", "allergies", "allergic", "nkda"], "No known drug allergies (NKDA)"),
    ("smoking", ["smoke", "smoking", "cigarettes", "tobacco", "vape"], "Non-smoker"),
    ("alcohol", ["alcohol", "drinking", "beer", "wine", "spirits"], "No significant alcohol intake"),
    ("family_history", ["family", "fhx", "hereditary"], "No significant family history of note"),
    ("bleeding", ["bleed", "bleeding", "melena", "hematemesis", "hemoptysis", "epistaxis"], "No abnormal bleeding or bruising"),
]


class StandardizedPatientAgent:
    """Simulates the patient during the consultation phase (OSCEBlitz deterministic engine)."""

    def __init__(self, case: OSCECase):
        self.case = case
        self.turn_count = 0
        self.conversation_history: List[Tuple[str, str]] = []  # [(speaker, text)]
        self.unlocked_gate_keys: Set[str] = set()

    @staticmethod
    def _concept_matches(concept: str, text_lower: str) -> bool:
        # Whole-word match at the start, allowing short inflections ("sweat" -> "sweating"),
        # but not mid-word hits ("arm" in "alarm", "cause" in "because").
        pattern = r"\b" + re.escape(concept.lower()) + r"(?:s|es|ed|d|ing|y|ly)?\b"
        return re.search(pattern, text_lower) is not None

    def _expand_blitz_text(self, text_lower: str) -> str:
        """Expand clinical shorthand tokens for compound/spammed Blitz queries."""
        expanded_parts = [text_lower]
        for token, synonyms in BLITZ_SYNONYM_EXPANSIONS.items():
            if self._concept_matches(token, text_lower):
                expanded_parts.extend(synonyms)
        return " ".join(expanded_parts)

    def _match_all_gates(self, question: str) -> List[InformationGate]:
        """Match ALL triggered disclosure gates at once for single or compound/spammed questions."""
        text_lower = question.lower()
        expanded_text = self._expand_blitz_text(text_lower)
        matched: List[InformationGate] = []
        for gate in self.case.gates:
            if any(
                self._concept_matches(c, text_lower) or self._concept_matches(c, expanded_text)
                for c in gate.trigger_concepts
            ):
                matched.append(gate)
        return matched

    def _matching_gates(self, candidate_utterance: str) -> List[InformationGate]:
        return self._match_all_gates(candidate_utterance)

    def _check_and_unlock_gates(self, candidate_utterance: str) -> List[InformationGate]:
        """Inspect candidate inquiry and unlock all matching information gates."""
        newly_unlocked: List[InformationGate] = []
        for gate in self._match_all_gates(candidate_utterance):
            if gate.key in self.unlocked_gate_keys:
                continue
            gate.unlocked = True
            self.unlocked_gate_keys.add(gate.key)
            newly_unlocked.append(gate)
        return newly_unlocked

    def _match_negative_exclusions(self, question: str, matched_gates: List[InformationGate]) -> List[str]:
        """Return pertinent negative baseline statements for queried domains not covered by matched gates."""
        text_lower = question.lower()
        covered_text = " ".join(
            [g.key.lower() + " " + " ".join(g.trigger_concepts).lower() + " " + g.response_text.lower() for g in matched_gates]
        )
        negatives: List[str] = []
        for domain_name, triggers, default_stmt in PERTINENT_NEGATIVE_EXCLUSIONS:
            if any(self._concept_matches(t, text_lower) for t in triggers):
                # Check if any matched gate already addresses this domain
                if not any(self._concept_matches(t, covered_text) for t in triggers):
                    negatives.append(default_stmt)
        return negatives

    def ask_patient_burst(self, question: str) -> str:
        """
        OSCEBlitz Rapid-Fire Mode handler:
        Processes single or spammed multi-part clinical questions in <1ms with zero LLM overhead.
        Unlocks all matched gates at once and appends pertinent negative exclusions.
        """
        self.turn_count += 1
        matched_gates = self._match_all_gates(question)
        newly_unlocked = self._check_and_unlock_gates(question)
        negatives = self._match_negative_exclusions(question, matched_gates)

        if len(matched_gates) > 1 or (matched_gates and negatives) or len(negatives) > 1:
            bullets: List[str] = []
            for g in matched_gates:
                label = g.key.replace("_", " ").title()
                bullets.append(f"• [{label}]: {g.response_text}")
            if negatives:
                bullets.append(f"• [Pertinent Negatives]: {'; '.join(negatives)}.")
            patient_reply = "\n".join(bullets)
        elif len(matched_gates) == 1:
            gate = matched_gates[0]
            if newly_unlocked:
                patient_reply = gate.response_text
            else:
                patient_reply = "Like I said, doctor... " + gate.response_text
        elif len(negatives) == 1:
            patient_reply = f"{negatives[0]}."
        elif self.turn_count == 1:
            patient_reply = f"Hello doctor... it's this {self.case.brief.presenting_complaint.lower()}. I'm really not feeling well."
        else:
            patient_reply = f"Regarding that—nothing specific to report outside of my {self.case.brief.presenting_complaint.lower()}."

        self.conversation_history.append(("Doctor", question))
        self.conversation_history.append((self.case.persona.name, patient_reply))
        return patient_reply

    def ask_patient(self, question: str) -> str:
        """Alias for ask_patient_burst for OSCEBlitz rapid-fire queries."""
        return self.ask_patient_burst(question)

    def respond(self, candidate_utterance: str) -> str:
        """Process candidate query and generate deterministic patient response in <1ms."""
        return self.ask_patient_burst(candidate_utterance)

    def get_consultation_transcript(self) -> List[Tuple[str, str]]:
        return list(self.conversation_history)

    def get_gate_coverage(self) -> Dict[str, bool]:
        """Returns map of gate key to whether candidate unlocked it."""
        return {g.key: g.unlocked for g in self.case.gates}
