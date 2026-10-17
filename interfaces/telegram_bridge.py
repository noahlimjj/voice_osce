"""
telegram_bridge.py: Telegram Bot interface for hands-free voice OSCE practice.
Enables practice via Telegram voice notes with faster-whisper STT and edge-tts audio voice notes.
"""

from __future__ import annotations
import asyncio
import io
import logging
import os
import tempfile
from pathlib import Path
from typing import Dict, Optional

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    Application, CommandHandler, MessageHandler, CallbackQueryHandler,
    ContextTypes, filters
)

from voice_osce.cases import get_case, list_cases
from voice_osce.cases.case_schema import OSCECase
from voice_osce.engine.patient_agent import StandardizedPatientAgent
from voice_osce.engine.practicum_engine import PracticumScriptEngine
from voice_osce.engine.examiner_agent import ExaminerAgent
from voice_osce.engine.rubric_evaluator import RubricEvaluator
from voice_osce.engine.audio_transcriber import get_transcriber
from voice_osce.engine.speech_synthesizer import get_synthesizer

logger = logging.getLogger("VoiceOSCE.TelegramBridge")


class TelegramOSCESession:
    """State for a single candidate practicing a station on Telegram."""

    def __init__(self, case: OSCECase):
        self.case = case
        self.patient_agent = StandardizedPatientAgent(case)
        self.practicum_engine = PracticumScriptEngine(case)
        self.examiner_agent = ExaminerAgent(case)
        self.phase = "consultation" # "consultation", "perturbation", "viva", "completed"
        self.transcriber = get_transcriber()
        self.synthesizer = get_synthesizer()


# In-memory session store (chat_id -> TelegramOSCESession)
_ACTIVE_SESSIONS: Dict[int, TelegramOSCESession] = {}


async def cmd_start_osce(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """List available cases and render inline keyboard."""
    cases = list_cases()
    keyboard = [
        [InlineKeyboardButton(f"{c['specialty']}: {c['title']}", callback_data=f"start_case:{c['id']}")]
        for c in cases
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "🏥 *VoiceOSCE Clinical Simulation Bot*\n\n"
        "Practice clinical stations hands-free using Telegram voice notes.\n"
        "Select an OSCE station to begin:",
        reply_markup=reply_markup,
        parse_mode="Markdown"
    )


async def callback_case_selected(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Handle case selection from inline keyboard."""
    query = update.callback_query
    await query.answer()

    case_id = query.data.split(":")[1]
    case = get_case(case_id)
    chat_id = query.message.chat_id

    session = TelegramOSCESession(case)
    _ACTIVE_SESSIONS[chat_id] = session

    brief_text = (
        f"📋 *STATION BRIEF: {case.title.upper()}*\n"
        f"• *Specialty:* {case.specialty}\n"
        f"• *Setting:* {case.brief.setting}\n"
        f"• *Patient:* {case.brief.patient_name}, {case.brief.age}yo {case.brief.gender} ({case.brief.occupation})\n"
        f"• *Complaint:* {case.brief.presenting_complaint}\n\n"
        f"*Vitals:*\n"
        + "\n".join([f"  - {k}: {v}" for k, v in case.brief.triage_vitals.items()])
        + f"\n\n*Instructions:*\n_{case.brief.instructions}_\n\n"
        f"🎙️ *Consultation Started!* Hold the mic button and send voice notes to speak to the patient. "
        f"When ready to present to the examiner, type `/viva`."
    )

    await query.edit_message_text(brief_text, parse_mode="Markdown")


async def handle_voice_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Transcribe voice note and handle OSCE dialogue."""
    chat_id = update.message.chat_id
    session = _ACTIVE_SESSIONS.get(chat_id)

    if not session:
        await update.message.reply_text("No active OSCE station. Type `/osce` to choose a station.")
        return

    # Download voice note audio
    voice_file = await update.message.voice.get_file()
    voice_bytes = await voice_file.download_as_bytearray()

    # Transcribe with faster-whisper (< 0.5s)
    candidate_text = session.transcriber.transcribe(io.BytesIO(voice_bytes))
    await update.message.reply_text(f"🗣️ *You:* _{candidate_text}_", parse_mode="Markdown")

    await process_candidate_turn(update, session, candidate_text)


async def handle_text_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Allow typed text as an alternative to voice."""
    chat_id = update.message.chat_id
    session = _ACTIVE_SESSIONS.get(chat_id)

    if not session:
        await update.message.reply_text("No active OSCE station. Type `/osce` to start a station.")
        return

    candidate_text = update.message.text.strip()
    await process_candidate_turn(update, session, candidate_text)


async def process_candidate_turn(update: Update, session: TelegramOSCESession, candidate_text: str):
    """Route candidate input through state machine."""
    case = session.case

    if session.phase == "consultation":
        # Check if Practicum Script Perturbation triggers
        if session.patient_agent.turn_count == 3:
            session.phase = "perturbation"
            pert_msg = session.practicum_engine.get_perturbation_announcement()
            await update.message.reply_text(pert_msg)
            return

        # Patient responds
        reply_text = session.patient_agent.respond(candidate_text)
        await send_spoken_reply(update, session, reply_text, case.persona.voice_id, case.persona.speech_rate)

    elif session.phase == "perturbation":
        # Candidate reasoning shift
        score, matched, traps = session.practicum_engine.evaluate_reasoning_shift(
            candidate_text,
            session.patient_agent.unlocked_gate_keys
        )
        session.phase = "consultation" # Return to history taking
        await update.message.reply_text(
            f"✅ *Practicum Script Delphi Concordance:* {score}%\n"
            + ("\n".join([f"• {m}" for m in matched]) if matched else "")
            + "\n\n_You may continue asking the patient questions or type `/viva` to present._",
            parse_mode="Markdown"
        )

    elif session.phase == "viva":
        q = session.examiner_agent.get_current_question()
        if q:
            awarded, matched, summary = session.examiner_agent.evaluate_answer(candidate_text)
            await update.message.reply_text(f"📝 *Examiner Assessment:* {summary}")

        next_q = session.examiner_agent.get_current_question()
        if next_q:
            await send_spoken_reply(
                update,
                session,
                next_q.prompt,
                ExaminerAgent.EXAMINER_VOICE,
                "+0%"
            )
        else:
            # Viva completed -> Generate Scorecard
            session.phase = "completed"
            await generate_and_send_scorecard(update, session)


async def send_spoken_reply(update: Update, session: TelegramOSCESession, text: str, voice_id: str, rate: str):
    """Synthesize voice note with edge-tts and send back to Telegram."""
    audio_bytes = await session.synthesizer.synthesize_to_bytes(text=text, voice=voice_id, rate=rate)
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
        tmp.write(audio_bytes)
        tmp_path = Path(tmp.name)

    try:
        with open(tmp_path, "rb") as audio:
            await update.message.reply_voice(voice=audio, caption=f"💬 {text}")
    finally:
        if tmp_path.exists():
            try:
                tmp_path.unlink()
            except Exception:
                pass


async def cmd_viva(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Transition consultation immediately to Examiner Viva."""
    chat_id = update.message.chat_id
    session = _ACTIVE_SESSIONS.get(chat_id)
    if not session:
        await update.message.reply_text("No active station. Type `/osce` first.")
        return

    session.phase = "viva"
    q = session.examiner_agent.get_current_question()
    await update.message.reply_text("🔔 *Time is up! Patient has stepped out. Senior Examiner steps in.*")
    if q:
        await send_spoken_reply(update, session, q.prompt, ExaminerAgent.EXAMINER_VOICE, "+0%")


async def generate_and_send_scorecard(update: Update, session: TelegramOSCESession):
    """Render and send final OSCE Scorecard."""
    viva_awarded, viva_max = session.examiner_agent.get_total_viva_score()
    scorecard = RubricEvaluator.evaluate(
        case=session.case,
        unlocked_gate_keys=session.patient_agent.unlocked_gate_keys,
        viva_awarded=viva_awarded,
        viva_max=viva_max,
        concordance_score=session.practicum_engine.concordance_score or 75.0,
        triggered_traps=session.practicum_engine.triggered_traps
    )
    await update.message.reply_text(scorecard.to_markdown(), parse_mode="Markdown")


def register_osce_handlers(app: Application):
    """Register VoiceOSCE command and message handlers on any python-telegram-bot Application."""
    app.add_handler(CommandHandler("osce", cmd_start_osce))
    app.add_handler(CommandHandler("viva", cmd_viva))
    app.add_handler(CallbackQueryHandler(callback_case_selected, pattern=r"^start_case:"))
    app.add_handler(MessageHandler(filters.VOICE, handle_voice_message))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_text_message))
