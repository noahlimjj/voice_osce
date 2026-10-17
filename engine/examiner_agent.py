"""
examiner_agent.py: Senior OSCE Examiner agent for the post-station viva.
Conducts structured oral interrogation, grades differential justifications, and assesses acute management.
"""

from __future__ import annotations
from typing import List, Dict, Tuple
from voice_osce.cases.case_schema import OSCECase, VivaQuestion
from voice_osce.engine.speech_synthesizer import SpeechSynthesizer


class ExaminerAgent:
    """Authoritative Senior Consultant examiner for the 2-minute viva."""

    EXAMINER_VOICE = "en-GB-ThomasNeural" # Senior consultant voice

    def __init__(self, case: OSCECase):
        self.case = case
        self.current_q_index = 0
        self.question_scores: Dict[int, float] = {}
        self.question_feedback: Dict[int, List[str]] = {}
        self.transcript: List[Tuple[str, str]] = []

    def get_current_question(self) -> VivaQuestion | None:
        if self.current_q_index < len(self.case.viva_questions):
            return self.case.viva_questions[self.current_q_index]
        return None

    def evaluate_answer(self, candidate_answer: str) -> Tuple[float, List[str], str]:
        """Grade candidate's spoken viva answer against gold-standard rubric."""
        q = self.get_current_question()
        if not q:
            return 0.0, [], "Viva completed."

        text_lower = candidate_answer.lower()
        matched_points: List[str] = []

        for kp in q.key_points_required:
            kp_words = [w.lower() for w in kp.split() if len(w) > 3]
            # Match if key tokens exist in answer
            if any(w in text_lower for w in kp_words):
                matched_points.append(kp)

        # Proportion of key points matched
        score_ratio = len(matched_points) / max(1, len(q.key_points_required))
        awarded_marks = round(score_ratio * q.max_marks, 1)

        self.question_scores[self.current_q_index] = awarded_marks
        self.question_feedback[self.current_q_index] = matched_points
        self.transcript.append((q.prompt, candidate_answer))

        feedback_summary = (
            f"Awarded {awarded_marks}/{q.max_marks} marks. "
            f"Key competencies demonstrated: {len(matched_points)}/{len(q.key_points_required)}."
        )

        self.current_q_index += 1
        return awarded_marks, matched_points, feedback_summary

    def get_total_viva_score(self) -> Tuple[float, float]:
        """Returns (awarded_marks, total_possible_marks)."""
        awarded = sum(self.question_scores.values())
        total = sum(q.max_marks for q in self.case.viva_questions)
        return awarded, total
