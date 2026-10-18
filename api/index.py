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
from web.server import app


@app.api_route("/{path_name:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def catch_all_debug(request: Request, path_name: str):
    # Test if path_name is a known api endpoint
    # E.g. if path_name is 'health' or 'api/health' or 'api/index.py'
    matched = request.headers.get("x-matched-path", "")
    return {
        "catch_all": True,
        "path_name": path_name,
        "scope_path": request.scope.get("path"),
        "url_path": request.url.path,
        "x_matched_path": matched,
        "headers": {k: v for k, v in request.headers.items() if "auth" not in k.lower()}
    }


__all__ = ["app"]
