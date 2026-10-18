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
        # On Vercel, x-matched-path contains the original URL requested by client
        matched = request.headers.get("x-matched-path") or request.headers.get("x-vercel-matched-path")
        if matched:
            normalized = matched.split("?")[0]
            if not normalized.startswith("/api"):
                normalized = f"/api{normalized}"
            request.scope["path"] = normalized
        elif request.scope.get("path", "").startswith("/api/index.py"):
            rest = request.scope.get("path", "")[len("/api/index.py"):]
            if rest:
                request.scope["path"] = rest if rest.startswith("/api") else f"/api{rest}"

        response = await call_next(request)
        return response


app.add_middleware(VercelPathNormalizerMiddleware)


@app.get("/api/debug-vercel")
def debug_vercel(request: Request):
    return {
        "status": "ok",
        "scope_path": request.scope.get("path"),
        "headers": dict(request.headers)
    }


__all__ = ["app"]
