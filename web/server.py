"""
server.py: FastAPI backend & Vercel Serverless handler for the VoiceOSCE Web Application.
Supports both stateful local sessions and stateless serverless auto-recovery for Vercel deployments.
"""

from __future__ import annotations
import base64
import io
import os
import sys
import types
import uuid
from pathlib import Path
from typing import Dict, Optional, Any, List

# Self-bootstrap `voice_osce` package so imports work regardless of parent folder name (e.g. /var/task on Vercel)
_REPO_ROOT = Path(__file__).resolve().parent.parent
if str(_REPO_ROOT.parent) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT.parent))
if "voice_osce" not in sys.modules:
    _pkg = types.ModuleType("voice_osce")
    _pkg.__path__ = [str(_REPO_ROOT)]
    sys.modules["voice_osce"] = _pkg

from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

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
    description="Cognitive Clinical Simulation Engine API (Local & Vercel Serverless)",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ActiveStationSession:
    def __init__(self, case: OSCECase, candidate_name: str = "Candidate", session_id: Optional[str] = None):
        self.session_id = session_id or str(uuid.uuid4())
        self.case = case
        self.candidate_name = candidate_name
        self.patient_agent = StandardizedPatientAgent(case)
        self.practicum_engine = PracticumScriptEngine(case)
        self.examiner_agent = ExaminerAgent(case)
        self.perturbation_triggered = False
        self.phase = "consultation"


# In-memory store (auto-recovered on serverless cold start if client passes state)
SESSIONS: Dict[str, ActiveStationSession] = {}


def get_or_restore_session(
    session_id: str,
    case_id: Optional[str] = None,
    candidate_name: Optional[str] = None,
    unlocked_keys: Optional[List[str]] = None,
    turn_count: Optional[int] = None,
    viva_q_index: Optional[int] = None,
    concordance_score: Optional[float] = None,
) -> ActiveStationSession:
    """Retrieve session from memory or reconstruct seamlessly on Vercel serverless cold start."""
    session = SESSIONS.get(session_id)
    if session is None:
        if not case_id:
            raise HTTPException(status_code=404, detail="Session not found and no case_id provided for stateless recovery.")
        try:
            case = get_case(case_id)
        except ValueError:
            raise HTTPException(status_code=404, detail=f"Case {case_id} not found.")
        session = ActiveStationSession(case, candidate_name or "Candidate", session_id=session_id)
        SESSIONS[session_id] = session

    if unlocked_keys is not None:
        for k in unlocked_keys:
            session.patient_agent.unlocked_gate_keys.add(k)
            for g in session.case.gates:
                if g.key in session.patient_agent.unlocked_gate_keys:
                    g.unlocked = True
    if turn_count is not None and turn_count > session.patient_agent.turn_count:
        session.patient_agent.turn_count = turn_count
        if turn_count >= 3:
            session.perturbation_triggered = True
    if viva_q_index is not None:
        session.examiner_agent.current_q_index = viva_q_index
    if concordance_score is not None and concordance_score > 0:
        session.practicum_engine.concordance_score = concordance_score

    return session


# Pydantic Request Models
class StartSessionRequest(BaseModel):
    case_id: str
    candidate_name: Optional[str] = "Candidate"


class TextQueryRequest(BaseModel):
    text: str
    case_id: Optional[str] = None
    candidate_name: Optional[str] = None
    unlocked_keys: Optional[List[str]] = None
    turn_count: Optional[int] = None


class PerturbationRequest(BaseModel):
    reasoning: str
    case_id: Optional[str] = None
    unlocked_keys: Optional[List[str]] = None


class VivaAnswerRequest(BaseModel):
    answer: str
    case_id: Optional[str] = None
    question_index: Optional[int] = None


class TTSRequest(BaseModel):
    text: str
    voice: Optional[str] = "en-GB-RyanNeural"
    rate: Optional[str] = "+0%"


# -------------------------------------------------------------
# REST ENDPOINTS
# -------------------------------------------------------------

@app.get("/api/health")
def api_health():
    return {"status": "ok", "cases_loaded": len( list_cases() )}


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
            "voice_id": case.persona.voice_id,
            "speech_rate": case.persona.speech_rate,
            "pain_level": case.persona.pain_level,
            "temperament": case.persona.temperament,
            "behavioral_cues": case.persona.behavioral_cues,
        },
        "gates_count": len(case.gates),
        "consultation_time_sec": case.consultation_time_limit_sec,
    }


@app.post("/api/tts")
async def api_synthesize_tts(req: TTSRequest):
    """Stateless neural text-to-speech endpoint using Microsoft Edge Neural voices."""
    synth = get_synthesizer()
    try:
        audio_bytes = await synth.synthesize_to_bytes(
            text=req.text,
            voice=req.voice or "en-GB-RyanNeural",
            rate=req.rate or "+0%"
        )
        audio_base64 = f"data:audio/mp3;base64,{base64.b64encode(audio_bytes).decode('ascii')}"
        return {"audio_url": audio_base64}
    except Exception as e:
        return {"audio_url": None, "error": str(e)}


@app.post("/api/sessions/start")
def api_start_session(req: StartSessionRequest):
    """Start an interactive consultation session for a case."""
    try:
        case = get_case(req.case_id)
    except ValueError:
        raise HTTPException(status_code=404, detail=f"Case {req.case_id} not found.")

    session = ActiveStationSession(case, req.candidate_name or "Candidate")
    SESSIONS[session.session_id] = session

    return {
        "session_id": session.session_id,
        "case_id": case.case_id,
        "title": case.title,
        "consultation_time_sec": case.consultation_time_limit_sec,
    }


@app.post("/api/sessions/{session_id}/interact")
async def api_interact_text(session_id: str, req: TextQueryRequest):
    """Submit a spoken/typed query to the patient."""
    session = get_or_restore_session(
        session_id,
        case_id=req.case_id,
        candidate_name=req.candidate_name,
        unlocked_keys=req.unlocked_keys,
        turn_count=req.turn_count,
    )

    candidate_text = req.text.strip()
    reply = session.patient_agent.respond(candidate_text)

    # Check if perturbation should trigger
    trigger_perturbation = False
    perturbation_data = None
    if session.patient_agent.turn_count == 3 and not session.perturbation_triggered:
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
            "unlocked": (g.unlocked or g.key in session.patient_agent.unlocked_gate_keys)
        }
        for g in session.case.gates
    ]

    return {
        "candidate_transcript": candidate_text,
        "patient_reply": reply,
        "audio_url": audio_base64,
        "turn_count": session.patient_agent.turn_count,
        "unlocked_gates": unlocked_gates,
        "trigger_perturbation": trigger_perturbation,
        "perturbation_data": perturbation_data
    }


@app.post("/api/sessions/{session_id}/audio-interact")
async def api_interact_audio(session_id: str, file: UploadFile = File(...), case_id: Optional[str] = Form(None)):
    """Transcribe browser microphone audio blob (local faster-whisper) and generate patient response."""
    session = get_or_restore_session(session_id, case_id=case_id)

    audio_bytes = await file.read()
    transcriber = get_transcriber()

    try:
        candidate_text = transcriber.transcribe(io.BytesIO(audio_bytes))
    except Exception as e:
        raise HTTPException(status_code=501, detail=f"Local faster-whisper unavailable: {e}")

    return await api_interact_text(session_id, TextQueryRequest(text=candidate_text, case_id=session.case.case_id))


@app.post("/api/sessions/{session_id}/perturbation")
def api_submit_perturbation(session_id: str, req: PerturbationRequest):
    """Submit Practicum Script hypothesis revision."""
    session = get_or_restore_session(session_id, case_id=req.case_id, unlocked_keys=req.unlocked_keys)

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
async def api_get_viva_question(session_id: str, case_id: Optional[str] = None, q_index: Optional[int] = None):
    """Get next examiner viva oral question."""
    session = get_or_restore_session(session_id, case_id=case_id, viva_q_index=q_index)

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
    session = get_or_restore_session(session_id, case_id=req.case_id, viva_q_index=req.question_index)

    awarded, matched, summary = session.examiner_agent.evaluate_answer(req.answer)

    next_q = session.examiner_agent.get_current_question()
    return {
        "awarded_marks": awarded,
        "matched_competencies": matched,
        "feedback_summary": summary,
        "has_next_question": next_q is not None
    }


@app.get("/api/sessions/{session_id}/scorecard")
def api_get_scorecard(
    session_id: str,
    case_id: Optional[str] = None,
    candidate_name: Optional[str] = None,
    unlocked_keys: Optional[str] = None,
    viva_awarded: Optional[float] = None,
    concordance_score: Optional[float] = None,
):
    """Generate final comprehensive objective scorecard and cognitive audit."""
    keys_list = [k for k in unlocked_keys.split(",") if k] if unlocked_keys else None
    session = get_or_restore_session(
        session_id,
        case_id=case_id,
        candidate_name=candidate_name,
        unlocked_keys=keys_list,
        concordance_score=concordance_score,
    )

    session.phase = "completed"
    calc_viva_awarded, viva_max = session.examiner_agent.get_total_viva_score()
    if viva_awarded is not None and calc_viva_awarded == 0:
        calc_viva_awarded = viva_awarded

    scorecard = RubricEvaluator.evaluate(
        case=session.case,
        unlocked_gate_keys=session.patient_agent.unlocked_gate_keys,
        viva_awarded=calc_viva_awarded,
        viva_max=viva_max,
        concordance_score=session.practicum_engine.concordance_score or concordance_score or 75.0,
        triggered_traps=session.practicum_engine.triggered_traps,
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

def _resolve_static_file(filename: str) -> Path:
    p = static_dir / filename
    if p.exists():
        return p
    return _REPO_ROOT / filename

if static_dir.exists():
    app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

@app.get("/cases_data.js")
def serve_cases_js():
    return FileResponse(str(_resolve_static_file("cases_data.js")), media_type="application/javascript")

@app.get("/app.js")
def serve_app_js():
    return FileResponse(str(_resolve_static_file("app.js")), media_type="application/javascript")

@app.get("/manifest.json")
def serve_manifest_json():
    p = _resolve_static_file("manifest.json")
    if p.exists():
        return FileResponse(str(p), media_type="application/manifest+json")
    return JSONResponse({"name": "OSCEBlitz", "short_name": "OSCEBlitz", "start_url": "/", "display": "standalone"})

@app.get("/icon-512.png")
def serve_icon_512():
    p = _resolve_static_file("icon-512.png")
    if p.exists():
        return FileResponse(str(p), media_type="image/png")
    raise HTTPException(status_code=404, detail="Icon not found")

@app.get("/", response_class=HTMLResponse)
def serve_index():
    p = _resolve_static_file("index.html")
    return p.read_text(encoding="utf-8")

