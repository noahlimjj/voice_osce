"""
Content lint for the OSCE case bank.

Catches the template artefacts that slipped into the bulk-generated cases: placeholder
differential text, empty discriminators, joined-up/truncated strings, duplicate or generic
red-flag triggers, and examiner jargon in what the patient says.

    python scripts/lint_cases.py        # exits 1 and lists problems if any
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT.parent))

from voice_osce.cases import CASE_REGISTRY  # noqa: E402
from voice_osce.cases.case_schema import DifferentialTier, GateCategory  # noqa: E402

PLACEHOLDERS = ("Excluded by definitive", "Excluded by ", "Overlapping acute presentation", "Initial differential consideration")
GLITCHES = (re.compile(r"[a-z],[A-Z]"), re.compile(r" of ,"), re.compile(r",,"), re.compile(r" ,"))
# Words so common that matching them says nothing about clinical reasoning
GENERIC_TRIGGERS = {
    "what", "when", "where", "how", "describe", "drug", "drugs", "symptoms", "history", "medical", "past",
    "start", "onset", "long", "time", "any", "other", "feel", "doctor", "meds", "head", "pain", "age",
    "heart", "blood", "back",
}
JARGON = ("BSA", "Nikolsky", "mmHg", "ABCD2", "->", "RAPD", "(+", "NASCET", "ASPECTS")


def lint(registry=CASE_REGISTRY):
    problems = []
    for cid, case in registry.items():
        for d in case.differentials:
            feats = d.supporting_features + d.refuting_features
            for f in feats:
                if any(p in f for p in PLACEHOLDERS):
                    problems.append(f"{cid}: placeholder in differential '{d.name}': {f}")
            if d.tier in (DifferentialTier.MUST_NOT_MISS, DifferentialTier.SECONDARY):
                if not d.supporting_features or not d.refuting_features:
                    problems.append(f"{cid}: '{d.name}' ({d.tier.value}) lacks supporting or refuting features")

        texts = [case.title, (case.perturbation.description if case.perturbation and case.perturbation.description else "")] + [g.response_text for g in case.gates]
        texts += [f for d in case.differentials for f in d.supporting_features + d.refuting_features]
        for t in texts:
            for rx in GLITCHES:
                if rx.search(t or ""):
                    problems.append(f"{cid}: text glitch /{rx.pattern}/ in: {t[:80]}")

        for g in case.gates:
            lowered = [t.lower().strip() for t in g.trigger_concepts]
            if len(set(lowered)) != len(lowered):
                problems.append(f"{cid}.{g.key}: duplicate trigger concepts")
            if g.category == GateCategory.RED_FLAG:
                generic = sorted(set(lowered) & GENERIC_TRIGGERS)
                if generic:
                    problems.append(f"{cid}.{g.key}: generic red-flag triggers {generic}")
                for j in JARGON:
                    if j in g.response_text:
                        problems.append(f"{cid}.{g.key}: examiner jargon '{j}' in patient speech")
    return problems


if __name__ == "__main__":
    found = lint()
    for p in found:
        print(p)
    print(f"{len(found)} problem(s) across {len(CASE_REGISTRY)} cases")
    sys.exit(1 if found else 0)
