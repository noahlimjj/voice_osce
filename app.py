"""
app.py: Single-command application launcher for VoiceOSCE.
Starts the high-speed FastAPI web server and opens the interactive clinical simulator in the user's browser.
"""

from __future__ import annotations
import argparse
import sys
import threading
import time
import webbrowser
from pathlib import Path

# Fix Windows console UTF-8 encoding
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Ensure project root is in sys.path and self-bootstrap voice_osce package
import types
_ROOT = Path(__file__).resolve().parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))
if str(_ROOT.parent) not in sys.path:
    sys.path.insert(0, str(_ROOT.parent))
if "voice_osce" not in sys.modules:
    _pkg = types.ModuleType("voice_osce")
    _pkg.__path__ = [str(_ROOT)]
    sys.modules["voice_osce"] = _pkg

import uvicorn
from web.server import app


def open_browser(url: str, delay_sec: float = 1.2):
    """Open user browser after a short delay to allow Uvicorn to bind."""
    time.sleep(delay_sec)
    try:
        webbrowser.open(url)
    except Exception:
        pass


def main():
    parser = argparse.ArgumentParser(description="VoiceOSCE Web Application Launcher")
    parser.add_argument("--host", default="127.0.0.1", help="Host interface to bind (default: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8000, help="Port to listen on (default: 8000)")
    parser.add_argument("--no-browser", action="store_true", help="Do not automatically launch web browser")

    args = parser.parse_args()

    url = f"http://{args.host}:{args.port}"
    print("\n" + "=" * 70)
    print("🏥 VoiceOSCE: Cognitive Clinical Examination Simulator")
    print("=" * 70)
    print(f"🚀 Server launching at: {url}")
    print("🎙️ Real-time edge-tts audio synthesis & faster-whisper speech recognition ready.")
    print("=" * 70 + "\n")

    if not args.no_browser:
        threading.Thread(target=open_browser, args=(url,), daemon=True).start()

    uvicorn.run(app, host=args.host, port=args.port, log_level="info")


if __name__ == "__main__":
    main()
