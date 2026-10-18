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

from web.server import app as _fastapi_app


class VercelPathNormalizerASGI:
    """Pure ASGI middleware that normalizes scope['path'] BEFORE FastAPI routing."""
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        if scope.get("type") == "http":
            p = scope.get("path", "")
            if p.startswith("/api/index.py"):
                rest = p[len("/api/index.py"):]
                scope["path"] = f"/api{rest}" if not rest.startswith("/api") else rest
            elif not p.startswith("/api") and p != "/":
                scope["path"] = f"/api{p}"
        await self.app(scope, receive, send)


app = VercelPathNormalizerASGI(_fastapi_app)

__all__ = ["app"]
