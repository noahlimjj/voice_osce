"""
Registry of VoiceOSCE Clinical Cases.
Comprehensive curriculum across core MBBS and Postgraduate Medical specialties.
"""

from typing import Dict, List
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
}

def get_case(case_id: str) -> OSCECase:
    if case_id not in CASE_REGISTRY:
        raise ValueError(f"Unknown case_id: {case_id}. Available: {list(CASE_REGISTRY.keys())}")
    return CASE_REGISTRY[case_id]

def list_cases() -> List[Dict[str, str]]:
    return [
        {
            "id": c.case_id,
            "specialty": c.specialty,
            "title": c.title,
            "patient": f"{c.persona.name} ({c.brief.age}yo {c.brief.gender})",
            "setting": c.brief.setting,
            "complaint": c.brief.presenting_complaint
        }
        for c in CASE_REGISTRY.values()
    ]
