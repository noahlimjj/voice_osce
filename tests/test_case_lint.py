import importlib.util
from pathlib import Path

_spec = importlib.util.spec_from_file_location(
    "lint_cases", Path(__file__).resolve().parent.parent / "scripts" / "lint_cases.py"
)
lint_cases = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(lint_cases)


def test_case_bank_has_no_content_problems():
    problems = lint_cases.lint()
    assert problems == [], "\n".join(problems[:30])
