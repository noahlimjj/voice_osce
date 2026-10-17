#!/usr/bin/env bash
# VoiceOSCE Launcher for macOS and Linux
set -e

echo "========================================================"
echo "  VoiceOSCE: Cognitive Clinical Examination Simulator"
echo "  Launching local web application and browser..."
echo "========================================================"

if ! command -v python3 &> /dev/null; then
    echo "[ERROR] Python 3 was not found in your PATH."
    exit 1
fi

python3 app.py "$@"
