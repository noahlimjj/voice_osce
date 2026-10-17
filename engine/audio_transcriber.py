"""
audio_transcriber.py: High-speed local voice transcription via faster-whisper.
"""

from __future__ import annotations
import io
import os
import sys
from pathlib import Path
from typing import Optional, Union

# PyAV compatibility patch
try:
    import av
    _orig_open = av.open
    def _patched_open(*args, **kwargs):
        kwargs.pop("metadata_errors", None)
        return _orig_open(*args, **kwargs)
    av.open = _patched_open
except Exception:
    pass

try:
    from faster_whisper import WhisperModel
    _HAS_WHISPER = True
except ImportError:
    _HAS_WHISPER = False


class AudioTranscriber:
    """Wrapper around faster-whisper for sub-second clinical speech recognition."""

    def __init__(self, model_size: str = "base", device: str = "cpu", compute_type: str = "int8", threads: int = 6):
        self.model_size = model_size
        self.device = device
        self.compute_type = compute_type
        self.threads = threads
        self._model = None

    def _load_model(self):
        if not _HAS_WHISPER:
            raise RuntimeError("faster-whisper is not installed. Run `pip install faster-whisper`.")
        if self._model is None:
            self._model = WhisperModel(
                self.model_size,
                device=self.device,
                compute_type=self.compute_type,
                cpu_threads=self.threads
            )
        return self._model

    def transcribe(self, audio_source: Union[str, Path, io.BytesIO, bytes]) -> str:
        """Transcribe audio to English text."""
        model = self._load_model()

        if isinstance(audio_source, bytes):
            audio_input = io.BytesIO(audio_source)
        elif isinstance(audio_source, (str, Path)):
            audio_input = str(audio_source)
        else:
            audio_input = audio_source

        segments, info = model.transcribe(
            audio_input,
            beam_size=3,
            language="en",
            condition_on_previous_text=False
        )
        text_parts = [segment.text.strip() for segment in segments]
        return " ".join(text_parts).strip()


# Singleton instance
_transcriber_instance: Optional[AudioTranscriber] = None

def get_transcriber() -> AudioTranscriber:
    global _transcriber_instance
    if _transcriber_instance is None:
        _transcriber_instance = AudioTranscriber()
    return _transcriber_instance
