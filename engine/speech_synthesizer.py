"""
speech_synthesizer.py: High-fidelity multi-accent neural text-to-speech using edge-tts.
"""

from __future__ import annotations
import asyncio
import io
import os
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Optional

try:
    import edge_tts
    _HAS_EDGE_TTS = True
except ImportError:
    _HAS_EDGE_TTS = False


class SpeechSynthesizer:
    """Multi-accent neural TTS engine for patient personas and examiner interrogation."""

    EXAMINER_VOICE = "en-GB-ThomasNeural" # Formal British examiner voice

    def __init__(self, default_voice: str = "en-GB-RyanNeural"):
        self.default_voice = default_voice

    async def synthesize_to_file(
        self,
        text: str,
        output_path: Path | str,
        voice: Optional[str] = None,
        rate: str = "+0%",
        pitch: str = "+0Hz"
    ) -> Path:
        """Synthesize text to an mp3 file."""
        if not _HAS_EDGE_TTS:
            raise RuntimeError("edge-tts is not installed. Run `pip install edge-tts`.")

        selected_voice = voice or self.default_voice
        clean_text = text.strip()
        if not clean_text:
            clean_text = "..."

        communicate = edge_tts.Communicate(
            text=clean_text,
            voice=selected_voice,
            rate=rate,
            pitch=pitch
        )
        out = Path(output_path)
        out.parent.mkdir(parents=True, exist_ok=True)
        await communicate.save(str(out))
        return out

    async def synthesize_to_bytes(
        self,
        text: str,
        voice: Optional[str] = None,
        rate: str = "+0%",
        pitch: str = "+0Hz"
    ) -> bytes:
        """Synthesize text directly into in-memory bytes."""
        with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
            tmp_path = Path(tmp.name)
        try:
            await self.synthesize_to_file(text, tmp_path, voice=voice, rate=rate, pitch=pitch)
            return tmp_path.read_bytes()
        finally:
            if tmp_path.exists():
                try:
                    tmp_path.unlink()
                except Exception:
                    pass

    def synthesize_sync(
        self,
        text: str,
        output_path: Path | str,
        voice: Optional[str] = None,
        rate: str = "+0%",
        pitch: str = "+0Hz"
    ) -> Path:
        """Synchronous wrapper for file synthesis."""
        return asyncio.run(self.synthesize_to_file(text, output_path, voice=voice, rate=rate, pitch=pitch))

    def play_audio(self, audio_path: Path | str) -> None:
        """Play synthesized audio file on Windows using Windows Media Player background player."""
        path = str(Path(audio_path).resolve())
        if sys.platform == "win32":
            # Fire Windows PowerShell sound player for non-blocking or synchronous playback
            cmd = (
                f'$player = New-Object System.Media.SoundPlayer; '
                f'Add-Type -AssemblyName presentationCore; '
                f'$mediaPlayer = New-Object System.Windows.Media.MediaPlayer; '
                f'$mediaPlayer.Open([System.Uri]"{path}"); '
                f'$mediaPlayer.Play(); '
                f'Start-Sleep -Milliseconds 1500'
            )
            try:
                subprocess.run(["powershell", "-NoProfile", "-Command", cmd], capture_output=True, timeout=10)
            except Exception:
                pass


_synthesizer_instance: Optional[SpeechSynthesizer] = None

def get_synthesizer() -> SpeechSynthesizer:
    global _synthesizer_instance
    if _synthesizer_instance is None:
        _synthesizer_instance = SpeechSynthesizer()
    return _synthesizer_instance
