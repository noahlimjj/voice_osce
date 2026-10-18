"""
Exports all 100 OSCE cases from CASE_REGISTRY into root cases_data.js and web/static/cases_data.js
with full Approach-Based Diagnostic Framework metadata (blind_prompt, symptom_cluster, target_seconds,
time_breakdown, approach_reference) and external OSCE source attribution.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT.parent))

from voice_osce.cases import CASE_REGISTRY, SG_CLASSIC_IDS
from voice_osce.cases.case_schema import GateCategory

TIER_LABEL = {"primary": "Primary", "must_not_miss": "Must-Not-Miss", "secondary": "Secondary", "unlikely": "Unlikely"}


def infer_symptom_cluster(case_id: str, specialty: str, complaint: str, title: str) -> str:
    s = f"{case_id} {specialty} {complaint} {title}".lower()
    if "geriatric" in s or "falls" in s or "delirium" in s or "polypharmacy" in s:
        return "Geriatrics"
    if "communication" in s or "ethics" in s or "spikes" in s or "bad news" in s:
        return "Communication"
    if "obgyn" in case_id or "obstetric" in s or "gynaec" in s or "ectopic" in s or "pregnancy" in s or "postmenopausal" in s or "menstrual" in s or "fibroid" in s:
        return "OBGYN"
    if "peds" in case_id or "paediatric" in s or "infant" in s or "toddler" in s or "kawasaki" in s or "croup" in s or "bronchiolitis" in s or "development" in s or "autism" in s:
        return "Pediatrics"
    if "psych" in case_id or "psychiatry" in s or "toxicology" in s or "overdose" in s or "suicide" in s or "mania" in s or "delirium tremens" in s or "serotonin" in s or "psychosis" in s or "schizophrenia" in s:
        return "Psych"
    if "ent" in case_id or "vertigo" in s or "vestibular" in s or "hints" in s or "ophthalm" in s or "glaucoma" in s or "retinal" in s or "nasopharyngeal" in s:
        return "ENT & Eye"
    if "chest pain" in s or "retrosternal" in s or "stemi" in s or "pericarditis" in s or "dissection" in s or "boerhaave" in s:
        return "Chest Pain"
    if "breathless" in s or "dyspnea" in s or "wheeze" in s or "stridor" in s or "pneumothorax" in s or "pulmonary embolism" in s or "copd" in s or "asthma" in s or "fibrosis" in s or "svco" in s or "anaphylaxis" in s:
        return "Dyspnea"
    if "headache" in s or "stroke" in s or "seizure" in s or "weakness" in s or "neuro" in s or "paralysis" in s or "meningitis" in s or "palsy" in s or "hydrocephalus" in s or "apoplexy" in s or "arteritis" in s:
        return "Headache & Neuro"
    if "knee" in s or "hip" in s or "wrist" in s or "shoulder" in s or "back" in s or "cauda" in s or "compartment" in s or "gout" in s or ("ischemia" in s and "limb" in s) or "spondyl" in s or "rheumatoid" in s:
        return "Limb & Joint"
    if "fever" in s or "rigors" in s or "dengue" in s or "melioidosis" in s or "typhus" in s or "leptospirosis" in s or "endocarditis" in s or "pneumonia" in s or "empyema" in s or "tb" in s or "stevens-johnson" in s or "heat" in s:
        return "Fever"
    if "abdominal" in s or "epigastric" in s or "iliac" in s or "ruq" in s or "vomiting" in s or "jaundice" in s or "hematemesis" in s or "melena" in s or "ascites" in s or "bowel" in s or "scrotal" in s or "loin" in s or "urinary" in s:
        return "Abdominal Pain"
    return "Fever"


def infer_difficulty_and_time(case_id: str, specialty: str, title: str):
    t = f"{case_id} {specialty} {title}".lower()
    hard_kws = [
        "shock", "dissection", "storm", "apoplexy", "boerhaave", "hellp", "abruption",
        "sjs", "mesenteric", "klebsiella", "status epilepticus", "sbp", "tamponade",
        "cauda equina", "phaeochromocytoma", "ruptured", "myasthenia", "perforated",
        "diabetic", "hhs", "hyperkalemia", "compartment", "anaphylac", "strangulated",
        "empyema", "pulmonary embolism", "heat", "tension pneumothorax",
        "massive upper", "hyperacute severe headache", "purpura", "cord myelopathy"
    ]
    easy_kws = [
        "scaphoid", "gout", "bell", "febrile", "croup", "urinary retention",
        "pericarditis", "appendicitis", "cholecystitis", "intussusception", "pyloric",
        "bronchiolitis", "overdose", "uveitis", "vertigo", "radiculopathy",
        "hot swollen right knee", "postmenopausal", "pelvic inflammatory",
        "quadriparesis", "synpharyngitic", "bactrim", "hydrocephalus", "shaking chills"
    ]
    if any(k in t for k in hard_kws):
        return "Hard", 120, "50s History Spam • 30s Bedside Twist • 40s Dx & Plan"
    if any(k in t for k in easy_kws):
        return "Easy", 60, "25s History Spam • 15s Bedside Twist • 20s Dx & Plan"
    return "Intermediate", 90, "40s History Spam • 25s Bedside Twist • 25s Dx & Plan"


def export_all():
    out_list = []
    for idx, (cid, case) in enumerate(CASE_REGISTRY.items(), start=1):
        is_sg = cid in SG_CLASSIC_IDS
        cluster = infer_symptom_cluster(cid, case.specialty, case.brief.presenting_complaint, case.title)
        diff, target_sec, time_brk = infer_difficulty_and_time(cid, case.specialty, case.title)
        gender_short = "M" if case.brief.gender.lower().startswith("m") else "F"
        blind_prompt = f"{case.brief.age}{gender_short} ({case.brief.occupation}) — {case.brief.presenting_complaint}"

        gates_serialized = []
        red_flags_serialized = []
        opening_stmt = case.gates[0].response_text if case.gates else case.brief.presenting_complaint

        for g in case.gates:
            g_dict = {
                "id": g.key,
                "key": g.key,
                "category": g.category.value if hasattr(g.category, "value") else str(g.category),
                "trigger_keywords": g.trigger_concepts,
                "trigger_concepts": g.trigger_concepts,
                "patient_response": g.response_text,
                "response_text": g.response_text,
                "examiner_note": g.examiner_note,
                "clinical_significance": "Critical Red Flag / Safety Gate" if g.mandatory_for_safety else "Core Clinical History Clue",
                "is_red_flag": bool(g.mandatory_for_safety or g.category == GateCategory.RED_FLAG),
                "mandatory_for_safety": bool(g.mandatory_for_safety),
            }
            gates_serialized.append(g_dict)
            if g_dict["is_red_flag"]:
                red_flags_serialized.append({
                    "id": g.key,
                    "name": g.key.replace("red_flag_", "").replace("rf_", "").replace("_", " ").title(),
                    "trigger_keywords": g.trigger_concepts,
                    "patient_response": g.response_text,
                    "examiner_note": g.examiner_note,
                    "clinical_rationale": g.examiner_note or g.response_text,
                })

        diffs_serialized = [
            {
                "diagnosis": d.name,
                "name": d.name,
                "tier": d.tier.value if hasattr(d.tier, "value") else str(d.tier),
                "likelihood": TIER_LABEL.get(d.tier.value if hasattr(d.tier, "value") else str(d.tier), "Secondary"),
                "key_supporting_features": d.supporting_features,
                "supporting_features": d.supporting_features,
                "refuting_features": d.refuting_features,
            }
            for d in case.differentials
        ]

        viva_serialized = [
            {
                "question": v.prompt,
                "prompt": v.prompt,
                "model_answer": v.target_rubric,
                "target_rubric": v.target_rubric,
                "key_concepts": v.key_points_required,
                "key_points_required": v.key_points_required,
                "max_marks": v.max_marks,
            }
            for v in case.viva_questions
        ]

        has_pert = bool(case.perturbation and getattr(case.perturbation, "description", None))
        rationale = (case.perturbation.expert_rationale or case.perturbation.description) if has_pert else (
            case.differentials[0].supporting_features[0] if case.differentials and case.differentials[0].supporting_features else ""
        )
        primary_dx_name = case.differentials[0].name if case.differentials else case.title
        primary_sup = case.differentials[0].supporting_features if case.differentials else [case.brief.presenting_complaint]

        pert_dict = {
            "trigger_turn": 2,
            "title": case.perturbation.title,
            "clinical_update": case.perturbation.description,
            "description": case.perturbation.description,
            "findings": case.perturbation.findings,
            "expected_shifts": case.perturbation.expected_shifts,
            "rationale": rationale,
            "expected_hypothesis_shift": rationale,
        } if has_pert else None

        item = {
            "id": cid,
            "case_id": cid,
            "number": idx,
            "title": case.title,
            "blind_prompt": blind_prompt,
            "specialty": case.specialty,
            "symptom_cluster": cluster,
            "sg_classic": is_sg,
            "difficulty": diff,
            "target_seconds": target_sec,
            "time_breakdown": time_brk,
            "source": "SingHealth / NUHS / MOH SG Classic" if is_sg else "Harrison's / Kumar & Clark / Oxford OSCE Bank",
            "patient_name": case.persona.name,
            "age": case.brief.age,
            "gender": case.brief.gender,
            "occupation": case.brief.occupation,
            "setting": case.brief.setting,
            "voice_preset": case.persona.voice_id,
            "chief_complaint": case.brief.presenting_complaint,
            "opening_statement": opening_stmt,
            "triage_vitals": case.brief.triage_vitals,
            "background_context": case.brief.instructions,
            "baseline_disclosure_gates": gates_serialized,
            "gates": gates_serialized,
            "red_flags": red_flags_serialized,
            "has_perturbation": has_pert,
            "perturbation": pert_dict,
            "expected_differentials": diffs_serialized,
            "differentials": diffs_serialized,
            "post_encounter_viva": viva_serialized,
            "viva_questions": viva_serialized,
            "cognitive_traps": [
                {
                    "trap_name": t.trap_name,
                    "description": t.description,
                    "trigger_condition": t.trigger_condition,
                    "remediation_advice": t.remediation_advice,
                }
                for t in case.cognitive_traps
            ],
            "approach_reference": {
                "framework": f"Kumar & Clark / Harrison's / Oxford Clinical Approach to {cluster}",
                "primary_diagnosis": primary_dx_name,
                "key_features": primary_sup,
                "etiology": rationale,
                "complications": [t.trap_name for t in case.cognitive_traps] + [
                    f"Missed { diffs_serialized[1]['name'] }" if len(diffs_serialized) > 1 else "Delayed resuscitation"
                ],
            },
        }
        out_list.append(item)

    js_payload = (
        "// Auto-generated 100-Station OSCEBlitz Case Library (Browser + Serverless Ready)\n"
        f"const CASES_DATA = {json.dumps(out_list, ensure_ascii=False, indent=2)};\n"
        "if (typeof window !== 'undefined') {\n"
        "  window.VOICE_OSCE_CASES = CASES_DATA;\n"
        "  window.CASES_DATA = CASES_DATA;\n"
        "}\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = CASES_DATA;\n"
        "}\n"
    )

    (ROOT / "cases_data.js").write_text(js_payload, encoding="utf-8")
    (ROOT / "web" / "static" / "cases_data.js").write_text(js_payload, encoding="utf-8")
    print(f"Exported {len(out_list)} cases to cases_data.js and web/static/cases_data.js")


if __name__ == "__main__":
    export_all()
