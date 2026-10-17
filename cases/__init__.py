"""
Registry of OSCEBlitz Clinical Cases (100 High-Yield MBBS & Singapore Medical School Stations).
"""

import copy
from typing import Dict, List, Any
from voice_osce.cases.case_schema import OSCECase
from voice_osce.cases.cardiology_acs import CASE_CARDIOLOGY_ACS
from voice_osce.cases.orthopedics_cauda import CASE_ORTHOPEDICS_CAUDA
from voice_osce.cases.neurology_sah import CASE_NEUROLOGY_SAH
from voice_osce.cases.respiratory_pe import CASE_RESPIRATORY_PE
from voice_osce.cases.gastro_upper_gi import CASE_GASTRO_UPPER_GI
from voice_osce.cases.obgyn_ectopic import CASE_OBGYN_ECTOPIC
from voice_osce.cases.psychiatry_suicide import CASE_PSYCHIATRY_SUICIDE
from voice_osce.cases.pediatrics_meningitis import CASE_PEDIATRICS_MENINGITIS
from voice_osce.cases.orthopedics_septic_knee import CASE_ORTHOPEDICS_SEPTIC_KNEE
from voice_osce.cases.endocrinology_dka import CASE_ENDOCRINOLOGY_DKA
from voice_osce.cases.sg_classics import (
    CASE_SG_DENGUE,
    CASE_SG_KLEBSIELLA,
    CASE_SG_NPC,
    CASE_SG_HEATSTROKE,
    CASE_SG_MESENTERIC,
)
from voice_osce.cases.hundred_cases_bank import HUNDRED_CASES_LIST
from voice_osce.cases.cases_36_to_55 import CASES_36_TO_55
from voice_osce.cases.cases_56_to_100 import build_remaining_cases

SG_CLASSIC_IDS = {
    "id_11", "gastro_12", "ent_13", "med_14", "surg_15",
    "case_16", "case_17", "case_18", "case_19", "case_20",
    "case_21", "case_22", "case_23", "case_24", "case_25", "case_71"
}

CASE_REGISTRY: Dict[str, OSCECase] = {
    "cardio_01": CASE_CARDIOLOGY_ACS,
    "ortho_02": CASE_ORTHOPEDICS_CAUDA,
    "neuro_03": CASE_NEUROLOGY_SAH,
    "resp_04": CASE_RESPIRATORY_PE,
    "gastro_05": CASE_GASTRO_UPPER_GI,
    "obgyn_06": CASE_OBGYN_ECTOPIC,
    "psych_07": CASE_PSYCHIATRY_SUICIDE,
    "peds_08": CASE_PEDIATRICS_MENINGITIS,
    "ortho_09": CASE_ORTHOPEDICS_SEPTIC_KNEE,
    "endo_10": CASE_ENDOCRINOLOGY_DKA,
    "id_11": CASE_SG_DENGUE,
    "gastro_12": CASE_SG_KLEBSIELLA,
    "ent_13": CASE_SG_NPC,
    "med_14": CASE_SG_HEATSTROKE,
    "surg_15": CASE_SG_MESENTERIC,
}

for _c in HUNDRED_CASES_LIST + CASES_36_TO_55 + build_remaining_cases():
    CASE_REGISTRY[_c.case_id] = _c

CASE_LIBRARY: Dict[str, OSCECase] = CASE_REGISTRY


def get_case(case_id: str) -> OSCECase:
    """Return a fresh copy of the case so per-session gate state never leaks between sessions."""
    if case_id not in CASE_REGISTRY:
        raise ValueError(f"Unknown case_id: {case_id}. Available: {list(CASE_REGISTRY.keys())}")
    return copy.deepcopy(CASE_REGISTRY[case_id])


def list_cases() -> List[Dict[str, Any]]:
    return [
        {
            "id": c.case_id,
            "specialty": c.specialty,
            "title": c.title,
            "patient": f"{c.persona.name} ({c.brief.age}yo {c.brief.gender})",
            "setting": c.brief.setting,
            "complaint": c.brief.presenting_complaint,
            "sg_classic": c.case_id in SG_CLASSIC_IDS,
        }
        for c in CASE_REGISTRY.values()
    ]
