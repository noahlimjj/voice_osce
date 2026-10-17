"""
case_schema.py: Data models for VoiceOSCE clinical stations.
Enforces structured clinical ground truth, gated disclosures, Practicum Script perturbations,
and objective marking criteria.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import Dict, List, Optional


class GateCategory(str, Enum):
    SOCRATES = "socrates"         # Site, Onset, Character, Radiation, Associations, Timing, Exacerbating/Relieving, Severity
    ICE = "ice"                   # Ideas, Concerns, Expectations (Calgary-Cambridge)
    RED_FLAG = "red_flag"         # Life/limb-threatening exclusion criteria
    PAST_HISTORY = "past_history" # PMHx, PSHx
    DRUG_HISTORY = "drug_history" # Meds, allergies, compliance
    SOCIAL_HISTORY = "social"     # Occupation, smoking, alcohol, living setup
    SYSTEMIC = "systemic"         # Review of systems


class DifferentialTier(str, Enum):
    PRIMARY = "primary"           # Most likely working diagnosis
    SECONDARY = "secondary"       # Plausible differential
    MUST_NOT_MISS = "must_not_miss" # Low probability but catastrophic if missed (e.g. Aortic Dissection, Cauda Equina)
    UNLIKELY = "unlikely"         # Incompatible with clinical presentation


@dataclass
class InformationGate:
    """A gated clinical fact that the patient will only disclose if specifically queried."""
    key: str
    category: GateCategory
    trigger_concepts: List[str]   # Synonyms, keywords, or semantic triggers
    response_text: str            # What the patient says in character
    unlocked: bool = False
    mandatory_for_safety: bool = False # Failing to ask this fails the safety gate


@dataclass
class CandidateBrief:
    """The printed sheet pinned outside the OSCE consultation room."""
    setting: str                  # e.g. "Emergency Department Resus Bay", "GP Clinic"
    patient_name: str
    age: int
    gender: str
    occupation: str
    presenting_complaint: str
    triage_vitals: Dict[str, str] # HR, BP, RR, SpO2, Temp, GCS
    instructions: str             # e.g. "Take a focused 7-minute history. Be prepared to present to the examiner."


@dataclass
class PatientPersona:
    """Voice, emotional state, and vocal behavior of the simulated patient."""
    name: str
    voice_id: str                 # Edge-TTS voice (e.g. 'en-SG-WayneNeural', 'en-GB-RyanNeural')
    speech_rate: str = "+0%"      # Pitch/rate adjustments (e.g. "-10%" for breathless/elderly)
    pain_level: int = 5           # 1 to 10
    temperament: str = "anxious"  # anxious, reluctant, stoic, irritable, confused
    behavioral_cues: List[str] = field(default_factory=list) # e.g. "Grimaces, clutches chest, pauses between sentences"


@dataclass
class PerturbationData:
    """Practicum Script style unexpected interim investigation or clinical shift."""
    trigger_turn: int = 5         # Injected after turn N or on candidate request
    title: str = "Interim Investigation Result"
    description: str = ""         # e.g. "12-lead ECG and bedside troponin results arrive"
    findings: Dict[str, str] = field(default_factory=dict)
    # Expected Bayesian shifts on hypotheses: [-2: Excluded, -1: Weakened, 0: Neutral, +1: Reinforced, +2: Confirmed]
    expected_shifts: Dict[str, int] = field(default_factory=dict)
    expert_rationale: str = ""


@dataclass
class Differential:
    """Diagnostic possibility scored against expert consensus."""
    name: str
    tier: DifferentialTier
    supporting_features: List[str]
    refuting_features: List[str]
    prior_probability: float      # Before investigations (0.0 to 1.0)
    posterior_probability: float  # After investigations (0.0 to 1.0)


@dataclass
class VivaQuestion:
    """Post-station examiner oral interrogation."""
    prompt: str
    target_rubric: str
    max_marks: int
    key_points_required: List[str]


@dataclass
class CognitiveTrap:
    """Cognitive error identified in Practicum Script debrief."""
    trap_name: str                # e.g. "Premature Closure", "Anchoring", "Framing Bias"
    description: str
    trigger_condition: str        # e.g. "Fixated on musculoskeletal strain without testing lower limb reflexes"
    remediation_advice: str
    # Machine-checkable detection rules (any one firing triggers the trap):
    trigger_keywords: List[str] = field(default_factory=list)   # Phrases in the candidate's reasoning (ignored when negated, e.g. "avoid nitrates")
    absent_keywords: List[str] = field(default_factory=list)    # Fires if the reasoning mentions none of these (errors of omission)
    missed_gate_keys: List[str] = field(default_factory=list)   # Fires if every one of these history gates was left unexplored


@dataclass
class OSCECase:
    """Complete definition of an objective structured clinical examination station."""
    case_id: str
    specialty: str
    title: str
    brief: CandidateBrief
    persona: PatientPersona
    gates: List[InformationGate]
    perturbation: PerturbationData
    differentials: List[Differential]
    viva_questions: List[VivaQuestion]
    cognitive_traps: List[CognitiveTrap]
    consultation_time_limit_sec: int = 420 # 7 minutes standard
    viva_time_limit_sec: int = 120         # 2 minutes viva
