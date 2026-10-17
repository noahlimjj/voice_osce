"""
test_voice_osce.py: Comprehensive unit and integration test suite for VoiceOSCE.
Validates case definitions, gated disclosure state machine, Practicum Script cognitive scoring,
and safety failure assertions.
"""

import sys
import unittest
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

from voice_osce.cases import get_case, list_cases
from voice_osce.cases.case_schema import GateCategory
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.speech_synthesizer import get_synthesizer


class TestVoiceOSCE(unittest.TestCase):

    def test_01_case_registry(self):
        cases = list_cases()
        self.assertGreaterEqual(len(cases), 3)
        case_ids = [c["id"] for c in cases]
        self.assertIn("cardio_01", case_ids)
        self.assertIn("ortho_02", case_ids)
        self.assertIn("neuro_03", case_ids)

    def test_02_gated_disclosure_and_ice(self):
        case = get_case("ortho_02")
        patient = StandardizedPatientAgent(case)

        # 1. Asking generic question should NOT unlock saddle or bladder gates
        reply1 = patient.respond("Hello, how are you feeling?")
        self.assertNotIn("red_flag_saddle", patient.unlocked_gate_keys)
        self.assertNotIn("red_flag_bladder", patient.unlocked_gate_keys)

        # 2. Specifically asking about bladder function unlocks the mandatory gate
        reply2 = patient.respond("Have you had any trouble peeing or emptying your bladder?")
        self.assertIn("red_flag_bladder", patient.unlocked_gate_keys)
        self.assertIn("toilet", reply2.lower())

        # 3. Specifically asking ICE unlocks patient's competition worry
        reply3 = patient.respond("What are your main worries and expectations for this?")
        self.assertIn("ice_concerns_expectations", patient.unlocked_gate_keys)
        self.assertIn("championship", reply3.lower())

    def test_03_critical_safety_gate_enforcement(self):
        case = get_case("ortho_02")
        patient = StandardizedPatientAgent(case)

        # Candidate asks about pain and onset, but FAILS to screen saddle anesthesia or bladder
        patient.respond("Where does it hurt? Does it shoot down the leg?")

        scorecard = RubricEvaluator.evaluate(
            case=case,
            unlocked_gate_keys=patient.unlocked_gate_keys,
            viva_awarded=28.0,
            viva_max=30.0,
            concordance_score=90.0,
            triggered_traps=[]
        )

        # Must trigger safety fail despite high marks elsewhere
        self.assertFalse(scorecard.safety_pass)
        self.assertEqual(scorecard.grade, "Critical Safety Fail")
        self.assertIn("Red Flag Bladder (red_flag)", scorecard.missed_safety_gates)

    def test_04_practicum_script_concordance(self):
        case = get_case("cardio_01")
        engine = PracticumScriptEngine(case)

        # Candidate recognizes STEMI confirmation and rules out PE
        candidate_eval = (
            "The ECG shows clear inferior STEMI with ST elevation in II, III, aVF. "
            "This strongly confirms acute myocardial infarction and rules out pulmonary embolism."
        )

        score, matched, traps = engine.evaluate_reasoning_shift(candidate_eval, set())
        self.assertGreaterEqual(score, 60.0)
        self.assertGreater(len(matched), 0)

    def test_05_examiner_viva_grading(self):
        case = get_case("cardio_01")
        examiner = ExaminerAgent(case)

        q1 = examiner.get_current_question()
        self.assertIsNotNone(q1)

        # Candidate gives structured SBAR presentation
        ans1 = (
            "This is a 56yo male driver with CV risk factors including hypertension and smoking, "
            "presenting with typical ischemic chest pain and an inferior STEMI on ECG."
        )
        awarded, matched, summary = examiner.evaluate_answer(ans1)
        self.assertGreaterEqual(awarded, 5.0)
        self.assertGreater(len(matched), 1)

    def test_06_neural_tts_generation(self):
        synth = get_synthesizer()
        test_out = Path("test_audio_eval.mp3")
        try:
            synth.synthesize_sync(
                text="Good morning Doctor Lim. Please take a seat.",
                output_path=test_out,
                voice="en-GB-ThomasNeural"
            )
            self.assertTrue(test_out.exists())
            self.assertGreater(test_out.stat().st_size, 1000)
        finally:
            if test_out.exists():
                test_out.unlink()


if __name__ == "__main__":
    unittest.main()
