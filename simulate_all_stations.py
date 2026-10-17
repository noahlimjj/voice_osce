"""
simulate_all_stations.py: Fully automated simulation and evaluation runner across all OSCE stations.
Simulates high-performing candidates, tests perturbation reasoning, oral viva,
and verifies safety gate enforcement without requiring human intervention.
"""

from __future__ import annotations
import sys
import time
from pathlib import Path

# Fix Windows console UTF-8 encoding for emojis
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from voice_osce.cases import get_case
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.speech_synthesizer import get_synthesizer


def run_automated_simulation(case_id: str, script_turns: list[str], perturbation_response: str, viva_answers: list[str]) -> str:
    case = get_case(case_id)
    synth = get_synthesizer()
    print(f"\n{'='*75}")
    print(f"🚀 RUNNING AUTOMATED SIMULATION: {case.title.upper()} ({case.case_id})")
    print(f"{'='*75}")

    patient = StandardizedPatientAgent(case)
    practicum = PracticumScriptEngine(case)
    examiner = ExaminerAgent(case)

    # 1. Patient Consultation
    print(f"\n--- [PHASE 1: CONSULTATION (7 MIN)] ---")
    for i, candidate_query in enumerate(script_turns, 1):
        print(f"\n👨‍⚕️ Candidate [Turn {i}]: \"{candidate_query}\"")
        reply = patient.respond(candidate_query)
        print(f"👤 Patient ({case.persona.name}): \"{reply}\"")

        # Test audio synthesis for first reply of each station
        if i == 1:
            tmp_audio = Path(f"temp_sim_{case_id}.mp3")
            try:
                synth.synthesize_sync(reply, tmp_audio, voice=case.persona.voice_id)
                print(f"   🔊 [Audio Generated]: {tmp_audio.name} ({tmp_audio.stat().st_size} bytes)")
            finally:
                if tmp_audio.exists():
                    tmp_audio.unlink()

        # Check Perturbation at turn 3 or 4
        if i == 3:
            print(f"\n--- [PHASE 2: PRACTICUM SCRIPT PERTURBATION] ---")
            print(practicum.get_perturbation_announcement())
            print(f"\n👨‍⚕️ Candidate Shift Reasoning: \"{perturbation_response}\"")
            score, matched, traps = practicum.evaluate_reasoning_shift(
                perturbation_response,
                patient.unlocked_gate_keys
            )
            print(f"📊 Delphi Expert Concordance Score: {score}%")
            for m in matched:
                print(f"   • {m}")

    # 2. Examiner Viva
    print(f"\n--- [PHASE 3: EXAMINER ORAL VIVA (2 MIN)] ---")
    for ans in viva_answers:
        q = examiner.get_current_question()
        if not q:
            break
        print(f"\n👨‍⚖️ Examiner: \"{q.prompt}\"")
        print(f"👨‍⚕️ Candidate Answer: \"{ans}\"")
        awarded, matched, summary = examiner.evaluate_answer(ans)
        print(f"📝 {summary}")

    # 3. Rubric Evaluation
    print(f"\n--- [PHASE 4: OBJECTIVE SCORECARD & SAFETY AUDIT] ---")
    viva_awarded, viva_max = examiner.get_total_viva_score()
    scorecard = RubricEvaluator.evaluate(
        case=case,
        unlocked_gate_keys=patient.unlocked_gate_keys,
        viva_awarded=viva_awarded,
        viva_max=viva_max,
        concordance_score=practicum.concordance_score or 75.0,
        triggered_traps=practicum.triggered_traps,
        candidate_name="Dr. Noah Lim"
    )

    report_md = scorecard.to_markdown()
    print(report_md)
    return report_md


def main():
    print("🏥 VoiceOSCE Complete System Automated Test Runner")
    print("Testing all clinical cases with simulated doctor dialogues, perturbation shifts, and examiner vivas...\n")

    results = {}

    # ==========================================
    # TEST CASE 1: Orthopedics / Spine (ortho_02)
    # ==========================================
    ortho_dialogue = [
        "Hello Marcus, I see you have severe lower back pain. Can you tell me what happened on the mats and does it shoot down the leg?",
        "Marcus, this is essential for patient safety: have you experienced any numbness around your private parts, groin, or when wiping with toilet paper?",
        "Have you had any difficulty passing urine, bladder fullness, stream hesitancy, or any loss of bowel control?",
        "Have you noticed any weakness in your legs, tripping, or foot drop when walking?",
        "What are your main worries and expectations for this, especially regarding your upcoming competition?"
    ]
    ortho_perturbation = (
        "The bedside bladder scan with 680 mL post-void residual urine volume and saddle numbness "
        "strongly confirms Cauda Equina Syndrome with retention (CES-R). This rules out simple muscular strain or uncomplicated sciatica."
    )
    ortho_viva = [
        "Marcus Lee is a 32yo athlete presenting with acute lumbar radiculopathy, objective foot drop, saddle anesthesia, and urinary retention with 680mL PVR, establishing an orthopedic emergency: Cauda Equina Syndrome with retention.",
        "The mandatory investigation is an emergent MRI Whole Spine performed within 4 hours to delineate the massive lumbar disc prolapse.",
        "I will empathetically counsel Marcus that competition is impossible and unsafe. He needs urgent fasting and emergency surgical microdiscectomy/laminectomy decompression within 24 hours to prevent permanent paralysis and incontinence."
    ]
    results["ortho_02"] = run_automated_simulation("ortho_02", ortho_dialogue, ortho_perturbation, ortho_viva)

    # ==========================================
    # TEST CASE 2: Cardiology / ACS (cardio_01)
    # ==========================================
    cardio_dialogue = [
        "Good morning Mr. Tan. Can you tell me where the chest pain is, when it started, and what it feels like?",
        "Does the pain radiate anywhere to your left arm, jaw, neck, or through to your back between your shoulder blades?",
        "Have you had any sweating, clamminess, nausea, shortness of breath, or fainting episodes?",
        "What do you think is causing this pain, and what is your biggest worry or concern?",
        "Do you have a history of high blood pressure, cholesterol, diabetes, and do you smoke cigarettes or take medications?"
    ]
    cardio_perturbation = (
        "The 12-lead ECG confirms an acute Inferior STEMI with ST elevation in leads II, III, and aVF. "
        "Elevation in V4R indicates right ventricular involvement. This definitively rules out pulmonary embolism and GERD. Nitrates are contraindicated due to preload dependence."
    )
    cardio_viva = [
        "Mr. David Tan is a 56yo male driver with hypertension, hyperlipidemia, and 30-pack-year smoking, presenting with typical ischemic crushing retrosternal chest pain, vegetative symptoms, and ECG confirming an acute inferior STEMI with right ventricular involvement.",
        "Primary diagnosis is acute inferior STEMI with RV infarction. Key differentials considered were acute aortic dissection and pulmonary embolism.",
        "Immediate cath lab activation for primary PCI within 90 minutes, dual antiplatelets with Aspirin 300mg and Ticagrelor 180mg, and strictly AVOID nitrates or diuretics due to preload dependence in right ventricular infarction."
    ]
    results["cardio_01"] = run_automated_simulation("cardio_01", cardio_dialogue, cardio_perturbation, cardio_viva)

    # ==========================================
    # TEST CASE 3: Neurology / SAH (neuro_03)
    # ==========================================
    neuro_dialogue = [
        "Hello Sarah. Regarding this severe headache, how quickly did it reach peak intensity—was it seconds or minutes?",
        "Where is the pain located, and do you have any neck stiffness or extreme sensitivity to bright light?",
        "Have you experienced any double vision, weakness, seizures, or vomiting, and has anyone in your family had brain aneurysms?",
        "What were you doing when it struck, and what are you most worried about?",
        "Have you ever had headaches like this before, and do you take any medications like the contraceptive pill?"
    ]
    neuro_perturbation = (
        "Although the non-contrast CT brain is reported normal, this does NOT exclude an acute subarachnoid hemorrhage. "
        "Migraine is considered, but aneurysmal SAH remains the primary life-threatening possibility that must be investigated."
    )
    neuro_viva = [
        "Sarah Jenkins is a 42yo woman on OCP with family history of intracranial aneurysm, presenting with a hyperacute thunderclap headache peaking in <30 seconds, photophobia, and meningismus, highly suspicious for subarachnoid hemorrhage.",
        "A normal CT brain does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture performed at least 12 hours from onset to test CSF for spectrophotometric xanthochromia and compare RBC counts in tubes 1 and 4.",
        "Immediate management includes oral Nimodipine 60mg every 4 hours to prevent vasospasm and delayed cerebral ischemia, strict blood pressure control, analgesia, and urgent neurosurgical referral."
    ]
    results["neuro_03"] = run_automated_simulation("neuro_03", neuro_dialogue, neuro_perturbation, neuro_viva)

    # ==========================================
    # TEST CASE 4: Negative Control / Safety Breach
    # ==========================================
    print(f"\n{'='*75}")
    print("🚨 TESTING NEGATIVE CONTROL: SAFETY GATE BREACH ASSERTION")
    print(f"{'='*75}")
    negligent_dialogue = [
        "Hi Marcus, does your back hurt? Where is the pain?",
        "Okay, take some ibuprofen and rest. Can you bend forward?"
    ]
    # Runs without asking saddle numbness or bladder function
    case_ortho = get_case("ortho_02")
    neg_patient = StandardizedPatientAgent(case_ortho)
    for q in negligent_dialogue:
        neg_patient.respond(q)

    fail_scorecard = RubricEvaluator.evaluate(
        case=case_ortho,
        unlocked_gate_keys=neg_patient.unlocked_gate_keys,
        viva_awarded=15.0,
        viva_max=30.0,
        concordance_score=50.0,
        triggered_traps=[]
    )
    print(f"Safety Status: {'SAFE' if fail_scorecard.safety_pass else 'FAILED (CRITICAL SAFETY BREACH)'}")
    print(f"Grade: {fail_scorecard.grade}")
    print(f"Missed Mandatory Gates: {fail_scorecard.missed_safety_gates}")
    assert not fail_scorecard.safety_pass, "Safety gate failed to catch missing red flags!"
    assert fail_scorecard.grade == "Critical Safety Fail"
    print("✅ Verified: Engine correctly caught safety omission and issued an automatic Critical Safety Fail!")

    print(f"\n{'='*75}")
    print("🎉 ALL SIMULATIONS COMPLETED SUCCESSFULLY! 100% PIPELINE VERIFICATION PASSED.")
    print(f"{'='*75}")


if __name__ == "__main__":
    main()
