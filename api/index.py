"""
Vercel Python Serverless Function entrypoint for VoiceOSCE / OSCEBlitz.
Exposes the FastAPI `app` from `web.server`.
"""

from pathlib import Path
import sys

_REPO_ROOT = Path(__file__).resolve().parent.parent
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))
if str(_REPO_ROOT.parent) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT.parent))

from web.server import app

@app.middleware("http")
async def vercel_request_normalizer(request, call_next):
    matched = request.headers.get("x-matched-path", "")
    if matched and matched.startswith("/api"):
        request.scope["path"] = matched
    return await call_next(request)

__all__ = ["app"]
