"""
rubric_evaluator.py: Generates comprehensive Calgary-Cambridge & GMC/LKCMedicine OSCE Scorecards.
Computes objective marks, checks mandatory safety gates, and synthesizes cognitive feedback.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Dict, List, Tuple
from voice_osce.cases.case_schema import OSCECase, GateCategory, InformationGate, CognitiveTrap


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
    grade: str # Distinction, Clear Pass, Borderline Pass, Fail, Safety Fail
    safety_pass: bool
    missed_safety_gates: List[str]
    domains: List[ScorecardDomain]
    cognitive_traps_identified: List[CognitiveTrap]
    actionable_remediation: List[str]

    def to_markdown(self) -> str:
        """Render beautiful GitHub-style markdown report."""
        status_badge = "🟢 PASS (DISTINCTION)" if "Distinction" in self.grade else (
            "🟢 CLEAR PASS" if "Clear Pass" in self.grade else (
                "🟡 BORDERLINE" if "Borderline" in self.grade else "🔴 FAIL"
            )
        )
        if not self.safety_pass:
            status_badge = "🚨 CRITICAL SAFETY FAIL"

        md = [
            f"# 📋 OSCE Clinical Examination Scorecard",
            f"**Case:** {self.case_title}",
            f"**Candidate:** {self.candidate_name}",
            f"**Overall Grade:** {status_badge} ({self.overall_percentage}%)\n",
            f"---",
            f"## 1. Objective Domain Breakdown\n",
            f"| Assessment Domain | Score | Weight | Result |",
            f"| :--- | :--- | :--- | :--- |",
        ]

        for d in self.domains:
            pct_bar = "🟩" * int(d.percentage / 20) + "⬜" * (5 - int(d.percentage / 20))
            md.append(f"| **{d.name}** | {d.score}/{d.max_score} | {d.percentage}% | {pct_bar} |")

        md.append("\n---\n## 2. Mandatory Patient Safety Gates\n")
        if self.safety_pass:
            md.append("✅ **Safety Status: SAFE.** All mandatory red flags and life-threatening exclusions were explored.")
        else:
            md.append("⚠️ **Safety Status: CRITICAL SAFETY BREACH.** The following mandatory safety checks were omitted:")
            for m in self.missed_safety_gates:
                md.append(f"  * ❌ **{m}**")
            md.append("\n> [!CAUTION]\n> In a real clinical examination, failing to screen for these life-threatening exclusions results in an automatic station failure regardless of total marks.")

        if self.cognitive_traps_identified:
            md.append("\n---\n## 3. Practicum Script Cognitive Bias Audit\n")
            for t in self.cognitive_traps_identified:
                md.append(f"> [!WARNING]\n> **Cognitive Trap Identified: {t.trap_name}**\n> *Trigger:* {t.trigger_condition}\n> *Remediation:* {t.remediation_advice}\n")

        md.append("\n---\n## 4. Actionable Clinical Remediation\n")
        for tip in self.actionable_remediation:
            md.append(f"- {tip}")

        return "\n".join(md)


class RubricEvaluator:
    """Computes final multi-domain scores for an OSCE station."""

    @staticmethod
    def evaluate(
        case: OSCECase,
        unlocked_gate_keys: set[str],
        viva_awarded: float,
        viva_max: float,
        concordance_score: float,
        triggered_traps: List[CognitiveTrap],
        candidate_name: str = "Dr. Noah Lim"
    ) -> FinalScorecard:
        # 1. Mandatory Safety Gates Check
        missed_safety: List[str] = []
        for g in case.gates:
            if g.mandatory_for_safety and g.key not in unlocked_gate_keys:
                missed_safety.append(f"{g.key.replace('_', ' ').title()} ({g.category.value})")

        safety_pass = len(missed_safety) == 0

        # 2. Domain 1: Calgary-Cambridge & ICE (15 pts)
        ice_gates = [g for g in case.gates if g.category == GateCategory.ICE]
        ice_unlocked = sum(1 for g in ice_gates if g.key in unlocked_gate_keys)
        ice_ratio = ice_unlocked / max(1, len(ice_gates))
        domain_ice = ScorecardDomain(
            name="Calgary-Cambridge ICE & Communication",
            score=round(ice_ratio * 15.0, 1),
            max_score=15.0,
            percentage=round(ice_ratio * 100, 1),
            feedback=["Explored patient's ideas, concerns, and expectations." if ice_ratio > 0.5 else "Omitted deep exploration of patient's emotional concerns (ICE)."]
        )

        # 3. Domain 2: Clinical Information Gathering & SOCRATES (35 pts)
        clinical_gates = [g for g in case.gates if g.category != GateCategory.ICE]
        clin_unlocked = sum(1 for g in clinical_gates if g.key in unlocked_gate_keys)
        clin_ratio = clin_unlocked / max(1, len(clinical_gates))
        domain_history = ScorecardDomain(
            name="History Gathering & Red Flag Screening",
            score=round(clin_ratio * 35.0, 1),
            max_score=35.0,
            percentage=round(clin_ratio * 100, 1),
            feedback=[f"Unlocked {clin_unlocked}/{len(clinical_gates)} critical clinical facts."]
        )

        # 4. Domain 3: Post-Station Examiner Viva (30 pts)
        viva_ratio = viva_awarded / max(1.0, viva_max)
        domain_viva = ScorecardDomain(
            name="Clinical Presentation & Oral Viva",
            score=round(viva_awarded, 1),
            max_score=round(viva_max, 1),
            percentage=round(viva_ratio * 100, 1),
            feedback=["Clear oral presentation and structured differential justification." if viva_ratio > 0.6 else "Needs tighter structured synthesis during case presentation."]
        )

        # 5. Domain 4: Practicum Script Cognitive Concordance (20 pts)
        cog_score = round((concordance_score / 100.0) * 20.0, 1)
        # Deduct for cognitive traps
        trap_penalty = len(triggered_traps) * 3.0
        cog_score = max(0.0, cog_score - trap_penalty)
        domain_cog = ScorecardDomain(
            name="Practicum Script Cognitive Reasoning",
            score=cog_score,
            max_score=20.0,
            percentage=round((cog_score / 20.0) * 100, 1),
            feedback=[f"Demonstrated {concordance_score}% alignment with Delphi specialist panel."]
        )

        total_score = domain_ice.score + domain_history.score + domain_viva.score + domain_cog.score
        total_max = domain_ice.max_score + domain_history.max_score + domain_viva.max_score + domain_cog.max_score
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

        # Remediation Advice
        remediation: List[str] = []
        if not safety_pass:
            remediation.append("Integrate a non-negotiable mental red-flag checklist for every acute presentation.")
        if ice_ratio < 0.7:
            remediation.append("Actively ask Calgary-Cambridge ICE questions early: 'What do you think is going on?' and 'Is there anything specific you are worried about?'")
        if viva_ratio < 0.7:
            remediation.append("Practice the standard 60-second SBAR (Situation, Background, Assessment, Recommendation) case summary structure.")
        if triggered_traps:
            for t in triggered_traps:
                remediation.append(t.remediation_advice)
        if not remediation:
            remediation.append("Superb clinical performance. Ready for finals and real-world acute triage.")

        return FinalScorecard(
            case_title=case.title,
            candidate_name=candidate_name,
            overall_percentage=overall_pct,
            grade=grade,
            safety_pass=safety_pass,
            missed_safety_gates=missed_safety,
            domains=[domain_ice, domain_history, domain_viva, domain_cog],
            cognitive_traps_identified=triggered_traps,
            actionable_remediation=remediation
        )
