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

from starlette.requests import Request
from starlette.middleware.base import BaseHTTPMiddleware
from web.server import app


class VercelPathNormalizerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        path = request.scope.get("path", "")
        if path.startswith("/api/index.py"):
            rest = path[len("/api/index.py"):]
            if not rest or rest == "/":
                request.scope["path"] = "/api/health"
            else:
                request.scope["path"] = f"/api{rest}" if not rest.startswith("/api") else rest
        elif not path.startswith("/api") and path != "/":
            request.scope["path"] = f"/api{path}"

        response = await call_next(request)
        return response


app.add_middleware(VercelPathNormalizerMiddleware)

__all__ = ["app"]
