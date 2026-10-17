"""
patient_agent.py: Standardized Patient state machine with gated information disclosure.
Prevents unprompted dumps and enforces authentic emotional, pain, and Calgary-Cambridge dynamics.
"""

from __future__ import annotations
import re
from typing import List, Dict, Tuple, Set
from voice_osce.cases.case_schema import OSCECase, InformationGate, GateCategory
from voice_osce.engine.llm_client import get_llm_client


class StandardizedPatientAgent:
    """Simulates the patient during the 7-minute consultation phase."""

    def __init__(self, case: OSCECase):
        self.case = case
        self.turn_count = 0
        self.conversation_history: List[Tuple[str, str]] = [] # [(speaker, text)]
        self.unlocked_gate_keys: Set[str] = set()
        self.llm = get_llm_client()

    @staticmethod
    def _concept_matches(concept: str, text_lower: str) -> bool:
        # Whole-word match at the start, allowing short inflections ("sweat" -> "sweating"),
        # but not mid-word hits ("arm" in "alarm", "cause" in "because").
        pattern = r"\b" + re.escape(concept.lower()) + r"(?:s|es|ed|d|ing|y|ly)?\b"
        return re.search(pattern, text_lower) is not None

    def _matching_gates(self, candidate_utterance: str) -> List[InformationGate]:
        text_lower = candidate_utterance.lower()
        return [
            g for g in self.case.gates
            if any(self._concept_matches(c, text_lower) for c in g.trigger_concepts)
        ]

    def _check_and_unlock_gates(self, candidate_utterance: str) -> List[InformationGate]:
        """Inspect candidate inquiry and unlock matching information gates."""
        newly_unlocked: List[InformationGate] = []
        for gate in self._matching_gates(candidate_utterance):
            if gate.key in self.unlocked_gate_keys:
                continue
            gate.unlocked = True
            self.unlocked_gate_keys.add(gate.key)
            newly_unlocked.append(gate)
        return newly_unlocked

    def respond(self, candidate_utterance: str) -> str:
        """Process candidate query and generate in-character patient voice response."""
        self.turn_count += 1
        newly_unlocked = self._check_and_unlock_gates(candidate_utterance)

        # Build active context of disclosed facts
        disclosed_snippets = [
            f"[{g.category.value}] {g.response_text}"
            for g in self.case.gates
            if g.unlocked
        ]

        # 1. Try LLM generation with strict persona constraints
        system_prompt = (
            f"You are roleplaying a real medical patient in an OSCE exam.\n"
            f"NAME: {self.case.persona.name}, {self.case.brief.age}yo {self.case.brief.gender}.\n"
            f"OCCUPATION: {self.case.brief.occupation}.\n"
            f"TEMPERAMENT: {self.case.persona.temperament}.\n"
            f"PAIN LEVEL: {self.case.persona.pain_level}/10.\n"
            f"BEHAVIORAL CUES: {', '.join(self.case.persona.behavioral_cues)}.\n\n"
            f"RULES FOR ROLEPLAY:\n"
            f"1. Speak naturally in 1-3 short spoken sentences as a real human. Never use medical jargon.\n"
            f"2. DO NOT volunteer medical facts that the doctor has not specifically asked about.\n"
            f"3. High pain level ({self.case.persona.pain_level}/10): show slight breathlessness or winces.\n"
            f"4. FACTS YOU ARE AUTHORIZED TO DISCLOSE IF ASKED:\n"
            + ("\n".join(disclosed_snippets) if disclosed_snippets else "Only your chief complaint: " + self.case.brief.presenting_complaint)
        )

        history_context = "\n".join([f"{speaker}: {msg}" for speaker, msg in self.conversation_history[-4:]])
        user_prompt = f"{history_context}\nDoctor: {candidate_utterance}\n{self.case.persona.name}:"

        llm_reply = self.llm.generate(
            system_instruction=system_prompt,
            prompt=user_prompt,
            temperature=0.4
        )

        if llm_reply and len(llm_reply.strip()) > 3:
            patient_reply = llm_reply.strip()
        else:
            # Deterministic, high-yield clinical fallback
            repeated = [g for g in self._matching_gates(candidate_utterance) if g not in newly_unlocked]
            if newly_unlocked:
                patient_reply = " ".join([g.response_text for g in newly_unlocked])
            elif repeated:
                # Candidate re-asked something already disclosed: answer consistently again
                patient_reply = "Like I said, doctor... " + repeated[0].response_text
            elif self.turn_count == 1:
                patient_reply = f"Hello doctor... it's this {self.case.brief.presenting_complaint.lower()}. I'm really not feeling well."
            else:
                patient_reply = "I'm not quite sure what you mean, doctor. Could you explain or ask that again?"

        self.conversation_history.append(("Doctor", candidate_utterance))
        self.conversation_history.append((self.case.persona.name, patient_reply))

        return patient_reply

    def get_consultation_transcript(self) -> List[Tuple[str, str]]:
        return list(self.conversation_history)

    def get_gate_coverage(self) -> Dict[str, bool]:
        """Returns map of gate key to whether candidate unlocked it."""
        return {g.key: g.unlocked for g in self.case.gates}
