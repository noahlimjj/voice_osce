"""
Vercel Python Serverless Function entrypoint for VoiceOSCE / OSCEBlitz.
Exposes the FastAPI `app` from `web.server`.
"""

from pathlib import Path
import json
import sys

_REPO_ROOT = Path(__file__).resolve().parent.parent
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))
if str(_REPO_ROOT.parent) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT.parent))

from web.server import app as _fastapi_app


class VercelPathNormalizerASGI:
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        if scope.get("type") == "http":
            p = scope.get("path", "")
            headers_list = scope.get("headers", [])
            headers_dict = {k.lower(): v for k, v in headers_list}

            if "debug" in p or b"debug" in str(headers_list).encode():
                debug_info = {
                    "path": p,
                    "raw_path": scope.get("raw_path", b"").decode("latin1", "ignore"),
                    "query_string": scope.get("query_string", b"").decode("latin1", "ignore"),
                    "headers": {k.decode("latin1", "ignore"): v.decode("latin1", "ignore") for k, v in headers_list}
                }
                body = json.dumps(debug_info, indent=2).encode("utf-8")
                await send({
                    "type": "http.response.start",
                    "status": 200,
                    "headers": [[b"content-type", b"application/json"], [b"content-length", str(len(body)).encode("ascii")]]
                })
                await send({"type": "http.response.body", "body": body})
                return

            if p.startswith("/api/index.py"):
                rest = p[len("/api/index.py"):]
                scope["path"] = f"/api{rest}" if not rest.startswith("/api") else rest
            elif not p.startswith("/api") and p != "/":
                scope["path"] = f"/api{p}"

        await self.app(scope, receive, send)


app = VercelPathNormalizerASGI(_fastapi_app)

__all__ = ["app"]
