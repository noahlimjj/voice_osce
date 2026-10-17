"""
rubric_evaluator.py: OSCEBlitz Rapid-Fire Clinical Reasoning & Red Flag Scorecard Evaluator.
Zero bedside-manner / ICE penalty. 100% focused on speed-run diagnostic accuracy & patient safety:
  - Red Flags & Pertinent Negatives Cleared: 40%
  - Clinical History & Trigger Coverage: 20%
  - Differential Diagnosis & Perturbation Pivot: 25%
  - Viva Investigation & Management Plan: 15%
"""

from __future__ import annotations
from dataclasses import dataclass
from typing import Dict, List, Set
from voice_osce.cases.case_schema import OSCECase, GateCategory, CognitiveTrap


@dataclass
class ScorecardDomain:
    name: str
    score: float
    max_score: float
    percentage: float
    feedback: List[str]


@dataclass
class FinalScorecard:
    case_title: str
    candidate_name: str
    overall_percentage: float
    grade: str  # Pass with Distinction, Clear Pass, Borderline Pass, Clear Fail, Critical Safety Fail
    safety_pass: bool
    missed_safety_gates: List[str]
    domains: List[ScorecardDomain]
    cognitive_traps_identified: List[CognitiveTrap]
    actionable_remediation: List[str]

    def to_markdown(self) -> str:
        """Render GitHub-style markdown report for OSCEBlitz."""
        status_badge = "🟢 PASS (DISTINCTION)" if "Distinction" in self.grade else (
            "🟢 CLEAR PASS" if "Clear Pass" in self.grade else (
                "🟡 BORDERLINE" if "Borderline" in self.grade else "🔴 FAIL"
            )
        )
        if not self.safety_pass:
            status_badge = "🚨 CRITICAL SAFETY FAIL"

        md = [
            f"# ⚡ OSCEBlitz Rapid-Fire Clinical Scorecard",
            f"**Case:** {self.case_title}",
            f"**Candidate:** {self.candidate_name}",
            f"**Overall Grade:** {status_badge} ({self.overall_percentage}%)\n",
            f"---",
            f"## 1. Objective Blitz Domain Breakdown (Zero ICE Penalty)\n",
            f"| Assessment Domain | Score | Weight | Result |",
            f"| :--- | :--- | :--- | :--- |",
        ]

        for d in self.domains:
            pct_bar = "🟩" * int(d.percentage / 20) + "⬜" * (5 - int(d.percentage / 20))
            md.append(f"| **{d.name}** | {d.score}/{d.max_score} | {int(d.max_score)}% | {pct_bar} ({d.percentage}%) |")

        md.append("\n---\n## 2. Mandatory Patient Safety Gates\n")
        if self.safety_pass:
            md.append("✅ **Safety Status: SAFE.** All mandatory red flags and life-threatening exclusions were cleared.")
        else:
            md.append("⚠️ **Safety Status: CRITICAL SAFETY BREACH.** The following mandatory safety checks were omitted:")
            for m in self.missed_safety_gates:
                md.append(f"  * ❌ **{m}**")
            md.append("\n> [!CAUTION]\n> Failing to screen for life-threatening red flag exclusions results in an automatic station failure regardless of total marks.")

        if self.cognitive_traps_identified:
            md.append("\n---\n## 3. Practicum Script Cognitive Bias Audit\n")
            for t in self.cognitive_traps_identified:
                md.append(f"> [!WARNING]\n> **Cognitive Trap Identified: {t.trap_name}**\n> *Trigger:* {t.trigger_condition}\n> *Remediation:* {t.remediation_advice}\n")

        md.append("\n---\n## 4. Actionable Clinical Remediation\n")
        for tip in self.actionable_remediation:
            md.append(f"- {tip}")

        return "\n".join(md)


class RubricEvaluator:
    """Computes final OSCEBlitz multi-domain scores (zero ICE / empathy penalty)."""

    WEIGHTS: Dict[str, float] = {
        "red_flags": 40.0,
        "clinical_history": 20.0,
        "perturbation_pivot": 25.0,
        "viva_management": 15.0,
    }

    @staticmethod
    def evaluate(
        case: OSCECase,
        unlocked_gate_keys: Set[str],
        viva_awarded: float,
        viva_max: float,
        concordance_score: float,
        triggered_traps: List[CognitiveTrap],
        candidate_name: str = "Candidate"
    ) -> FinalScorecard:
        # 1. Mandatory Safety Gates Check (ICE gates never block safety or penalize marks)
        missed_safety: List[str] = []
        for g in case.gates:
            if g.mandatory_for_safety and g.category != GateCategory.ICE and g.key not in unlocked_gate_keys:
                missed_safety.append(f"{g.key.replace('_', ' ').title()} ({g.category.value})")

        safety_pass = len(missed_safety) == 0

        # Non-ICE clinical gates
        clinical_gates = [g for g in case.gates if g.category != GateCategory.ICE]
        red_flag_gates = [
            g for g in clinical_gates
            if g.category == GateCategory.RED_FLAG or g.mandatory_for_safety
        ]
        if not red_flag_gates:
            red_flag_gates = clinical_gates

        # Domain 1: Red Flags & Pertinent Negatives Cleared (40%)
        rf_unlocked = sum(1 for g in red_flag_gates if g.key in unlocked_gate_keys)
        rf_ratio = rf_unlocked / max(1, len(red_flag_gates))
        domain_red_flags = ScorecardDomain(
            name="Red Flags & Pertinent Negatives Cleared",
            score=round(rf_ratio * 40.0, 1),
            max_score=40.0,
            percentage=round(rf_ratio * 100, 1),
            feedback=[
                f"Cleared {rf_unlocked}/{len(red_flag_gates)} critical red-flag & safety gates."
            ]
        )

        # Domain 2: Clinical History & Trigger Coverage (20%) — excludes ICE so zero bedside-manner penalty
        clin_unlocked = sum(1 for g in clinical_gates if g.key in unlocked_gate_keys)
        clin_ratio = clin_unlocked / max(1, len(clinical_gates))
        domain_history = ScorecardDomain(
            name="Clinical History & Trigger Coverage",
            score=round(clin_ratio * 20.0, 1),
            max_score=20.0,
            percentage=round(clin_ratio * 100, 1),
            feedback=[
                f"Unlocked {clin_unlocked}/{len(clinical_gates)} clinical history triggers (ICE/small-talk penalty disabled)."
            ]
        )

        # Domain 3: Differential Diagnosis & Perturbation Pivot (25%)
        cog_raw = round((concordance_score / 100.0) * 25.0, 1)
        trap_penalty = len(triggered_traps) * 3.0
        cog_score = max(0.0, round(cog_raw - trap_penalty, 1))
        domain_pivot = ScorecardDomain(
            name="Differential Diagnosis & Perturbation Pivot",
            score=cog_score,
            max_score=25.0,
            percentage=round((cog_score / 25.0) * 100, 1),
            feedback=[
                f"Demonstrated {concordance_score}% diagnostic pivot alignment with specialist consensus."
            ]
        )

        # Domain 4: Viva Investigation & Management Plan (15%)
        viva_ratio = min(1.0, max(0.0, viva_awarded / max(1.0, viva_max)))
        viva_scaled = round(viva_ratio * 15.0, 1)
        domain_viva = ScorecardDomain(
            name="Viva Investigation & Management Plan",
            score=viva_scaled,
            max_score=15.0,
            percentage=round(viva_ratio * 100, 1),
            feedback=[
                "Crisp, high-yield investigation and acute management synthesis."
                if viva_ratio > 0.6 else
                "Tighten rapid-fire investigation and definitive management priorities."
            ]
        )

        domains = [domain_red_flags, domain_history, domain_pivot, domain_viva]
        total_score = sum(d.score for d in domains)
        total_max = sum(d.max_score for d in domains)  # 100.0
        overall_pct = round((total_score / total_max) * 100, 1)

        # Determine Final Grade
        if not safety_pass:
            grade = "Critical Safety Fail"
        elif overall_pct >= 85:
            grade = "Pass with Distinction"
        elif overall_pct >= 65:
            grade = "Clear Pass"
        elif overall_pct >= 55:
            grade = "Borderline Pass"
        else:
            grade = "Clear Fail"

        # Actionable Clinical Remediation (pure clinical reasoning, never penalizes skipping ICE)
        remediation: List[str] = []
        if not safety_pass:
            remediation.append("Run a rapid mental red-flag exclusion sweep for every acute presentation.")
        if clin_ratio < 0.7:
            remediation.append("Use compound Blitz bursts (SOCRATES + PMHx + DHx + SHx + Red Flags) to unlock all clinical triggers rapidly.")
        if viva_ratio < 0.7:
            remediation.append("Structure your Viva around immediate resuscitation, gold-standard diagnostic imaging/labs, and definitive therapy.")
        if triggered_traps:
            for t in triggered_traps:
                remediation.append(t.remediation_advice)
        if not remediation:
            remediation.append("Elite OSCEBlitz clinical reasoning. Fast, safe, and ready for finals.")

        return FinalScorecard(
            case_title=case.title,
            candidate_name=candidate_name,
            overall_percentage=overall_pct,
            grade=grade,
            safety_pass=safety_pass,
            missed_safety_gates=missed_safety,
            domains=domains,
            cognitive_traps_identified=triggered_traps,
            actionable_remediation=remediation
        )
