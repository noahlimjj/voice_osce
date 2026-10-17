"""
run_station.py: Primary launcher for VoiceOSCE stations.
"""

from __future__ import annotations
import argparse
import sys
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Ensure package root is in sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

from voice_osce.cases import list_cases
from voice_osce.interfaces.cli_station import run_cli_station


def main():
    parser = argparse.ArgumentParser(description="VoiceOSCE: Voice-First Cognitive Clinical Simulation Engine")
    parser.add_argument("case_id", nargs="?", default="ortho_02", help="Case ID to run (e.g. cardio_01, ortho_02, neuro_03)")
    parser.add_argument("--list", action="store_true", help="List all available OSCE clinical cases")
    parser.add_argument("--no-voice", action="store_true", help="Disable audio voice playback (text-only mode)")
    parser.add_argument("--telegram", action="store_true", help="Launch standalone Telegram Bot listener (requires TELEGRAM_BOT_TOKEN)")

    args = parser.parse_args()

    if args.list:
        print("\nAvailable VoiceOSCE Stations:")
        for c in list_cases():
            print(f"  • [{c['id']}] {c['specialty']}: {c['title']} - {c['patient']}")
        print()
        return

    if args.telegram:
        import os
        from telegram.ext import ApplicationBuilder
        from voice_osce.interfaces.telegram_bridge import register_osce_handlers

        token = os.environ.get("TELEGRAM_BOT_TOKEN")
        if not token:
            print("❌ Error: TELEGRAM_BOT_TOKEN environment variable not set.")
            return

        print("🚀 Starting VoiceOSCE Telegram Bot poller...")
        app = ApplicationBuilder().token(token).build()
        register_osce_handlers(app)
        app.run_polling()
        return

    run_cli_station(case_id=args.case_id, voice_audio_enabled=not args.no_voice)


if __name__ == "__main__":
    main()
