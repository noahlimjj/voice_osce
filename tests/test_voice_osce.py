"""
test_voice_osce.py: Comprehensive unit and integration test suite for VoiceOSCE.
Validates case definitions, gated disclosure state machine, Practicum Script cognitive scoring,
and safety failure assertions.
"""

import os
import sys
import unittest
from pathlib import Path
from unittest import mock

# Keyword marking only, so results don't depend on a local LLM being up
os.environ["VOICE_OSCE_LLM"] = "off"

# Add project root and parent to sys.path so `import voice_osce` works from any cwd
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))


from voice_osce.cases import get_case, list_cases, CASE_LIBRARY, CASE_REGISTRY, SG_CLASSIC_IDS
from voice_osce.cases.case_schema import GateCategory
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.speech_synthesizer import get_synthesizer


class TestVoiceOSCE(unittest.TestCase):

    def test_01_case_registry(self):
        cases = list_cases()
        self.assertEqual(len(cases), 15)
        self.assertEqual(len(CASE_LIBRARY), 15)
        self.assertEqual(len(CASE_REGISTRY), 15)
        case_ids = [c["id"] for c in cases]
        for expected_id in [
            "cardio_01", "ortho_02", "neuro_03", "resp_04", "gastro_05",
            "obgyn_06", "psych_07", "peds_08", "ortho_09", "endo_10",
            "id_11", "gastro_12", "ent_13", "med_14", "surg_15"
        ]:
            self.assertIn(expected_id, case_ids)
        sg_cases = [c for c in cases if c.get("sg_classic")]
        self.assertEqual(len(sg_cases), 5)

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

    def test_02b_osceblitz_rapid_fire_burst(self):
        case = get_case("id_11")
        patient = StandardizedPatientAgent(case)
        burst_q = "onset character radiation fever abdominal pain vomiting bleeding gums dizzy tekong mosquito panadol allergies?"
        matched = patient._match_all_gates(burst_q)
        self.assertGreaterEqual(len(matched), 5)
        reply = patient.ask_patient_burst(burst_q)
        self.assertEqual(len(patient.unlocked_gate_keys), 6)
        self.assertIn("Pertinent Negatives", reply)
        self.assertIn("NKDA", reply)

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

    def test_03b_blitz_rubric_weights_no_ice_penalty(self):
        case = get_case("cardio_01")
        # Unlock all non-ICE gates, skip all ICE gates completely
        non_ice_keys = {g.key for g in case.gates if g.category != GateCategory.ICE}
        scorecard = RubricEvaluator.evaluate(
            case=case,
            unlocked_gate_keys=non_ice_keys,
            viva_awarded=30.0,
            viva_max=30.0,
            concordance_score=100.0,
            triggered_traps=[]
        )
        self.assertTrue(scorecard.safety_pass)
        self.assertEqual([d.max_score for d in scorecard.domains], [40.0, 20.0, 25.0, 15.0])
        self.assertEqual(scorecard.overall_percentage, 100.0)
        self.assertEqual(scorecard.grade, "Pass with Distinction")


    def test_04_practicum_script_concordance(self):
        case = get_case("cardio_01")
        engine = PracticumScriptEngine(case)

        # Candidate recognizes STEMI confirmation and rules out PE
        candidate_eval = (
            "The ECG shows clear inferior STEMI with ST elevation in II, III, aVF. "
            "This strongly confirms acute myocardial infarction and rules out pulmonary embolism."
        )

        score, matched, traps = engine.evaluate_reasoning_shift(candidate_eval, set())
        # 2 of 4 expert shifts addressed (dissection and GERD not mentioned)
        self.assertEqual(score, 50.0)
        self.assertEqual(len(matched), 2)

        # Saying "avoid nitrates" must not trigger the nitrate trap; prescribing GTN must
        _, _, traps = engine.evaluate_reasoning_shift("Confirms inferior STEMI. Avoid nitrates given RV infarct.", set())
        self.assertFalse(any("Nitrate" in t.trap_name for t in traps))
        _, _, traps = engine.evaluate_reasoning_shift("Inferior STEMI likely. Give sublingual GTN for pain.", set())
        self.assertTrue(any("Nitrate" in t.trap_name for t in traps))

    def test_04b_no_credit_for_empty_reasoning(self):
        engine = PracticumScriptEngine(get_case("cardio_01"))
        score, matched, _ = engine.evaluate_reasoning_shift("I am not sure.", set())
        self.assertEqual(score, 0.0)
        self.assertEqual(matched, [])

    def test_04c_sessions_do_not_share_state(self):
        a = StandardizedPatientAgent(get_case("ortho_02"))
        a.respond("Any trouble emptying your bladder?")
        fresh = get_case("ortho_02")
        self.assertFalse(any(g.unlocked for g in fresh.gates))

    def test_04d_no_substring_false_unlocks(self):
        patient = StandardizedPatientAgent(get_case("cardio_01"))
        patient.respond("Is that alarming because of anything?")  # contains "arm" and "cause" mid-word
        self.assertNotIn("radiation", patient.unlocked_gate_keys)
        self.assertNotIn("ice_ideas", patient.unlocked_gate_keys)

    def test_05b_single_shared_word_is_not_credit(self):
        examiner = ExaminerAgent(get_case("cardio_01"))
        awarded, matched, _ = examiner.evaluate_answer("He is a male.")
        self.assertEqual(matched, [])
        self.assertEqual(awarded, 0.0)

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

    def test_05c_word_forms_match(self):
        engine = PracticumScriptEngine(get_case("ortho_09"))
        _, matched, _ = engine.evaluate_reasoning_shift("Septic arthritis confirmed. Gout is now unlikely.", set())
        self.assertTrue(any("Gouty" in m for m in matched))

    def test_05d_llm_marker_used_when_available(self):
        examiner = ExaminerAgent(get_case("cardio_01"))
        with mock.patch("voice_osce.engine.llm_client.UniversalLLMClient.generate",
                        return_value='{"covered": [1, 3]}'), \
             mock.patch.dict(os.environ, {"VOICE_OSCE_LLM": ""}):
            awarded, matched, _ = examiner.evaluate_answer("anything")
        self.assertEqual(len(matched), 2)
        self.assertEqual(awarded, 5.0)

    def test_05e_omission_trap_cleared_by_viva(self):
        engine = PracticumScriptEngine(get_case("gastro_05"))
        engine.evaluate_reasoning_shift("Variceal bleed likely.", set())
        names = lambda ts: [t.trap_name for t in ts]
        self.assertIn("Omission of Prophylactic Antibiotics in Cirrhotic Bleed",
                      names(engine.final_traps(set(), "")))
        self.assertNotIn("Omission of Prophylactic Antibiotics in Cirrhotic Bleed",
                         names(engine.final_traps(set(), "Start IV ceftriaxone and terlipressin.")))

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
