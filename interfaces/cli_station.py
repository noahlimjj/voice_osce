"""
cli_station.py: Terminal-based interactive VoiceOSCE station runner.
Features countdown timing, audio voice synthesis, Practicum Script perturbations, and live scorecard.
"""

from __future__ import annotations
import sys
import time
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
from voice_osce.cases import get_case, list_cases
from voice_osce.cases.case_schema import OSCECase
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.speech_synthesizer import get_synthesizer


def print_banner(text: str, char: str = "="):
    line = char * len(text)
    print(f"\n{line}\n{text}\n{line}")


def run_cli_station(case_id: str = "ortho_02", voice_audio_enabled: bool = True):
    case = get_case(case_id)
    synth = get_synthesizer() if voice_audio_enabled else None

    print_banner(f"🏥 OSCE STATION: {case.title.upper()} ({case.specialty})")

    # 1. Candidate Reading Time (Outside the Door)
    print("\n📋 [CANDIDATE BRIEF - 60 SECONDS OUTSIDE THE ROOM]")
    print(f"Setting:     {case.brief.setting}")
    print(f"Patient:     {case.brief.patient_name}, {case.brief.age}yo {case.brief.gender} ({case.brief.occupation})")
    print(f"Complaint:   {case.brief.presenting_complaint}")
    print("Vitals:")
    for k, v in case.brief.triage_vitals.items():
        print(f"  • {k}: {v}")
    print(f"\nInstructions: {case.brief.instructions}")

    input("\n👉 Press [ENTER] to enter the examination room and start the 7-minute consultation timer...")

    patient_agent = StandardizedPatientAgent(case)
    practicum_engine = PracticumScriptEngine(case)
    examiner_agent = ExaminerAgent(case)

    # 2. Consultation Phase (7 Minutes)
    print_banner("🚪 PHASE 1: PATIENT CONSULTATION (7 MINUTES)", "-")
    print("Doctor, you may begin taking the history. Type your inquiry (or 'q' to end history early):\n")

    perturbation_triggered = False

    while True:
        try:
            candidate_input = input("\n👨‍⚕️ Doctor: ").strip()
        except (KeyboardInterrupt, EOFError):
            break

        if not candidate_input or candidate_input.lower() in ("q", "quit", "exit", "finish"):
            print("\n⏰ History taking concluded by candidate.")
            break

        # Check for Practicum Script Perturbation trigger (Turn 4)
        if patient_agent.turn_count == 3 and not perturbation_triggered:
            perturbation_triggered = True
            print(f"\n{practicum_engine.get_perturbation_announcement()}\n")
            p_response = input("👨‍⚕️ Your probability revision: ").strip()
            score, matched, traps = practicum_engine.evaluate_reasoning_shift(
                p_response,
                patient_agent.unlocked_gate_keys
            )
            print(f"✅ Practicum Script Consensus Concordance: {score}%")
            if matched:
                for m in matched:
                    print(f"   • {m}")

        # Patient responds
        patient_reply = patient_agent.respond(candidate_input)
        print(f"\n👤 {case.persona.name}: \"{patient_reply}\"")

        # Voice audio playback if enabled
        if synth:
            try:
                audio_file = Path("temp_patient_voice.mp3")
                synth.synthesize_sync(
                    text=patient_reply,
                    output_path=audio_file,
                    voice=case.persona.voice_id,
                    rate=case.persona.speech_rate
                )
                synth.play_audio(audio_file)
            except Exception:
                pass

        if patient_agent.turn_count >= 10:
            print("\n🔔 [BELL CHIME]: 7-minute consultation time expired.")
            break

    # 3. Post-Station Examiner Viva (2 Minutes)
    print_banner("👨‍⚖️ PHASE 2: EXAMINER ORAL VIVA (2 MINUTES)", "-")
    print("The patient has stepped out. Senior Consultant Examiner begins oral interrogation.\n")

    while examiner_agent.get_current_question():
        q = examiner_agent.get_current_question()
        print(f"\n👨‍⚖️ Examiner: \"{q.prompt}\"")

        if synth:
            try:
                audio_file = Path("temp_examiner_voice.mp3")
                synth.synthesize_sync(
                    text=q.prompt,
                    output_path=audio_file,
                    voice=ExaminerAgent.EXAMINER_VOICE
                )
                synth.play_audio(audio_file)
            except Exception:
                pass

        ans = input("\n👨‍⚕️ Doctor: ").strip()
        awarded, matched, summary = examiner_agent.evaluate_answer(ans)
        print(f"📝 {summary}")

    # 4. Final Scorecard Synthesis
    print_banner("📊 PHASE 3: OBJECTIVE SCORECARD & PRACTICUM AUDIT", "=")
    viva_awarded, viva_max = examiner_agent.get_total_viva_score()
    scorecard = RubricEvaluator.evaluate(
        case=case,
        unlocked_gate_keys=patient_agent.unlocked_gate_keys,
        viva_awarded=viva_awarded,
        viva_max=viva_max,
        concordance_score=practicum_engine.concordance_score or 75.0,
        triggered_traps=practicum_engine.triggered_traps
    )

    markdown_report = scorecard.to_markdown()
    print(markdown_report)

    # Save scorecard to report file
    report_file = Path(f"osce_scorecard_{case_id}.md")
    report_file.write_text(markdown_report, encoding="utf-8")
    print(f"\n💾 Full report saved to: {report_file.resolve()}")


if __name__ == "__main__":
    cid = sys.argv[1] if len(sys.argv) > 1 else "ortho_02"
    run_cli_station(case_id=cid)
