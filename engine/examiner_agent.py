"""
examiner_agent.py: Senior OSCE Examiner agent for the post-station viva.
Conducts structured oral interrogation, grades differential justifications, and assesses acute management.
"""

from __future__ import annotations
import math
import re
from typing import List, Dict, Tuple
from voice_osce.cases.case_schema import OSCECase, VivaQuestion
from voice_osce.engine.llm_marker import judge_items
from voice_osce.engine.practicum_engine import stem


class ExaminerAgent:
    """Authoritative Senior Consultant examiner for the 2-minute viva."""

    EXAMINER_VOICE = "en-GB-ThomasNeural" # Senior consultant voice

    def __init__(self, case: OSCECase):
        self.case = case
        self.current_q_index = 0
        self.question_scores: Dict[int, float] = {}
        self.question_feedback: Dict[int, List[str]] = {}
        self.transcript: List[Tuple[str, str]] = []

    _STOPWORDS = {
        "and", "the", "with", "for", "due", "from", "into", "than", "this", "that", "only",
        "per", "via", "all", "any", "are", "not", "use", "using", "min", "mins", "hour", "hours",
    }

    @classmethod
    def _key_point_covered(cls, key_point: str, answer_words: List[str]) -> bool:
        """A key point counts when enough of its distinctive terms appear (stem-matched) in the answer."""
        terms = [t for t in re.findall(r"[a-z0-9]+", key_point.lower()) if len(t) > 2 and t not in cls._STOPWORDS]
        if not terms:
            return False
        hits = sum(1 for t in terms if any(w.startswith(stem(t)) for w in answer_words))
        needed = 1 if len(terms) == 1 else (2 if len(terms) <= 4 else max(2, math.ceil(len(terms) * 0.3)))
        return hits >= needed

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

        # Prefer semantic LLM marking; fall back to keyword marking when no LLM is available
        covered = judge_items(q.prompt, candidate_answer, q.key_points_required)
        if covered is not None:
            matched_points = [kp for i, kp in enumerate(q.key_points_required) if i in covered]
        else:
            answer_words = re.findall(r"[a-z0-9]+", text_lower)
            matched_points = [kp for kp in q.key_points_required if self._key_point_covered(kp, answer_words)]

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
