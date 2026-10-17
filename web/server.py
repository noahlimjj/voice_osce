"""
server.py: FastAPI backend server for the VoiceOSCE Web Application.
Serves interactive OSCE stations, real-time audio transcription, edge-tts speech synthesis,
and objective scoring endpoints.
"""

from __future__ import annotations
import base64
import io
import os
import sys
import tempfile
import uuid
from pathlib import Path
from typing import Dict, Optional, Any, List

from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.concurrency import run_in_threadpool
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

# Ensure package root is in sys.path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from voice_osce.cases import get_case, list_cases
from voice_osce.cases.case_schema import OSCECase, GateCategory
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.audio_transcriber import get_transcriber
from voice_osce.engine.speech_synthesizer import get_synthesizer

app = FastAPI(
    title="VoiceOSCE API",
    description="Cognitive Clinical Simulation Engine API",
    version="1.5.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ActiveStationSession:
    def __init__(self, case: OSCECase, candidate_name: str = "Dr. Noah Lim"):
        self.session_id = str(uuid.uuid4())
        self.case = case
        self.candidate_name = candidate_name
        self.patient_agent = StandardizedPatientAgent(case)
        self.practicum_engine = PracticumScriptEngine(case)
        self.examiner_agent = ExaminerAgent(case)
        self.perturbation_triggered = False
        self.phase = "consultation" # "consultation", "viva", "completed"


# In-memory store of active sessions
SESSIONS: Dict[str, ActiveStationSession] = {}
MAX_SESSIONS = 200


# Pydantic Request Models
class StartSessionRequest(BaseModel):
    case_id: str
    candidate_name: Optional[str] = "Dr. Noah Lim"


class TextQueryRequest(BaseModel):
    text: str


class PerturbationRequest(BaseModel):
    reasoning: str


class VivaAnswerRequest(BaseModel):
    answer: str


# -------------------------------------------------------------
# REST ENDPOINTS
# -------------------------------------------------------------

@app.get("/api/cases")
def api_list_cases():
    """List all available clinical OSCE cases."""
    return list_cases()


@app.get("/api/cases/{case_id}")
def api_get_case(case_id: str):
    """Get full case brief, patient persona, vitals, and instructions."""
    try:
        case = get_case(case_id)
    except ValueError:
        raise HTTPException(status_code=404, detail=f"Case {case_id} not found.")

    return {
        "id": case.case_id,
        "specialty": case.specialty,
        "title": case.title,
        "brief": {
            "setting": case.brief.setting,
            "patient_name": case.brief.patient_name,
            "age": case.brief.age,
            "gender": case.brief.gender,
            "occupation": case.brief.occupation,
            "presenting_complaint": case.brief.presenting_complaint,
            "triage_vitals": case.brief.triage_vitals,
            "instructions": case.brief.instructions,
        },
        "persona": {
            "name": case.persona.name,
            "pain_level": case.persona.pain_level,
            "temperament": case.persona.temperament,
            "behavioral_cues": case.persona.behavioral_cues,
        },
        "gates_count": len(case.gates),
        "consultation_time_sec": case.consultation_time_limit_sec,
    }


@app.post("/api/sessions/start")
def api_start_session(req: StartSessionRequest):
    """Start an interactive consultation session for a case."""
    try:
        case = get_case(req.case_id)
    except ValueError:
        raise HTTPException(status_code=404, detail=f"Case {req.case_id} not found.")

    session = ActiveStationSession(case, req.candidate_name or "Dr. Noah Lim")
    SESSIONS[session.session_id] = session
    # Bound memory: drop the oldest sessions (dicts preserve insertion order)
    while len(SESSIONS) > MAX_SESSIONS:
        SESSIONS.pop(next(iter(SESSIONS)))

    return {
        "session_id": session.session_id,
        "case_id": case.case_id,
        "title": case.title,
        "consultation_time_sec": case.consultation_time_limit_sec,
    }


@app.post("/api/sessions/{session_id}/interact")
async def api_interact_text(session_id: str, req: TextQueryRequest):
    """Submit a text query to the patient."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    candidate_text = req.text.strip()
    if not candidate_text:
        raise HTTPException(status_code=400, detail="Empty question.")
    if session.phase != "consultation":
        raise HTTPException(status_code=409, detail="The consultation phase has ended.")
    # LLM generation is blocking; keep it off the event loop
    reply = await run_in_threadpool(session.patient_agent.respond, candidate_text)

    # Trigger the perturbation at the turn the case author specified
    trigger_perturbation = False
    perturbation_data = None
    if session.patient_agent.turn_count >= session.case.perturbation.trigger_turn and not session.perturbation_triggered:
        session.perturbation_triggered = True
        trigger_perturbation = True
        p = session.case.perturbation
        perturbation_data = {
            "title": p.title,
            "description": p.description,
            "findings": p.findings,
            "question": "How does this new data alter your diagnostic hypotheses? State which conditions are reinforced (+1/+2) or ruled out (-1/-2)."
        }

    # Generate edge-tts audio URL
    synth = get_synthesizer()
    audio_base64 = None
    try:
        audio_bytes = await synth.synthesize_to_bytes(
            text=reply,
            voice=session.case.persona.voice_id,
            rate=session.case.persona.speech_rate
        )
        audio_base64 = f"data:audio/mp3;base64,{base64.b64encode(audio_bytes).decode('ascii')}"
    except Exception:
        pass

    unlocked_gates = [
        {
            "key": g.key,
            "category": g.category.value,
            "mandatory": g.mandatory_for_safety,
            "unlocked": g.unlocked
        }
        for g in session.case.gates
    ]

    return {
        "candidate_text": candidate_text,
        "patient_reply": reply,
        "audio_url": audio_base64,
        "turn_count": session.patient_agent.turn_count,
        "unlocked_gates": unlocked_gates,
        "trigger_perturbation": trigger_perturbation,
        "perturbation_data": perturbation_data
    }


@app.post("/api/sessions/{session_id}/audio-interact")
async def api_interact_audio(session_id: str, file: UploadFile = File(...)):
    """Transcribe browser microphone audio blob and generate patient response."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    audio_bytes = await file.read()
    transcriber = get_transcriber()

    try:
        candidate_text = await run_in_threadpool(transcriber.transcribe, io.BytesIO(audio_bytes))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Speech transcription failed: {e}")
    if not candidate_text.strip():
        raise HTTPException(status_code=422, detail="No speech detected. Please try again or type.")

    # Reuse interaction logic
    return await api_interact_text(session_id, TextQueryRequest(text=candidate_text))


@app.post("/api/sessions/{session_id}/perturbation")
def api_submit_perturbation(session_id: str, req: PerturbationRequest):
    """Submit Practicum Script hypothesis revision."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    score, matched, traps = session.practicum_engine.evaluate_reasoning_shift(
        req.reasoning,
        session.patient_agent.unlocked_gate_keys
    )

    return {
        "concordance_score": score,
        "matched_points": matched,
        "cognitive_traps": [
            {
                "name": t.trap_name,
                "description": t.description,
                "remediation": t.remediation_advice
            }
            for t in traps
        ]
    }


@app.get("/api/sessions/{session_id}/viva/next")
async def api_get_viva_question(session_id: str):
    """Get next examiner viva oral question."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    session.phase = "viva"
    q = session.examiner_agent.get_current_question()
    if not q:
        return {"completed": True}

    synth = get_synthesizer()
    audio_base64 = None
    try:
        audio_bytes = await synth.synthesize_to_bytes(
            text=q.prompt,
            voice=ExaminerAgent.EXAMINER_VOICE,
            rate="+0%"
        )
        audio_base64 = f"data:audio/mp3;base64,{base64.b64encode(audio_bytes).decode('ascii')}"
    except Exception:
        pass

    return {
        "completed": False,
        "question_index": session.examiner_agent.current_q_index + 1,
        "total_questions": len(session.case.viva_questions),
        "prompt": q.prompt,
        "audio_url": audio_base64,
        "max_marks": q.max_marks
    }


@app.post("/api/sessions/{session_id}/viva/answer")
def api_answer_viva(session_id: str, req: VivaAnswerRequest):
    """Submit oral viva answer and get examiner assessment."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    awarded, matched, summary = session.examiner_agent.evaluate_answer(req.answer)

    next_q = session.examiner_agent.get_current_question()
    return {
        "awarded_marks": awarded,
        "matched_competencies": matched,
        "feedback_summary": summary,
        "has_next_question": next_q is not None
    }


@app.get("/api/sessions/{session_id}/scorecard")
def api_get_scorecard(session_id: str):
    """Generate final comprehensive objective scorecard and cognitive audit."""
    session = SESSIONS.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")

    session.phase = "completed"
    viva_awarded, viva_max = session.examiner_agent.get_total_viva_score()
    unlocked = session.patient_agent.unlocked_gate_keys
    scorecard = RubricEvaluator.evaluate(
        case=session.case,
        unlocked_gate_keys=unlocked,
        viva_awarded=viva_awarded,
        viva_max=viva_max,
        # No free marks: an unanswered perturbation scores 0
        concordance_score=session.practicum_engine.concordance_score,
        triggered_traps=session.practicum_engine.final_traps(
            unlocked, " ".join(ans for _, ans in session.examiner_agent.transcript)
        ),
        candidate_name=session.candidate_name
    )

    return {
        "case_title": scorecard.case_title,
        "candidate_name": scorecard.candidate_name,
        "overall_percentage": scorecard.overall_percentage,
        "grade": scorecard.grade,
        "safety_pass": scorecard.safety_pass,
        "missed_safety_gates": scorecard.missed_safety_gates,
        "domains": [
            {
                "name": d.name,
                "score": d.score,
                "max_score": d.max_score,
                "percentage": d.percentage,
                "feedback": d.feedback
            }
            for d in scorecard.domains
        ],
        "cognitive_traps": [
            {
                "name": t.trap_name,
                "description": t.description,
                "remediation": t.remediation_advice
            }
            for t in scorecard.cognitive_traps_identified
        ],
        "remediation": scorecard.actionable_remediation,
        "markdown_report": scorecard.to_markdown()
    }


# Mount Static Files
static_dir = Path(__file__).parent / "static"
if static_dir.exists():
    app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

    @app.get("/", response_class=HTMLResponse)
    def serve_index():
        index_file = static_dir / "index.html"
        return index_file.read_text(encoding="utf-8")
