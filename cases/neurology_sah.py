"""
neurology_sah.py: Thunderclap Headache Station (Subarachnoid Hemorrhage vs Migraine).
Tests recognition of hyperacute onset, Ottawa SAH rule, and the critical LP after negative CT algorithm.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_NEUROLOGY_SAH = OSCECase(
    case_id="neuro_03",
    specialty="Neurology / Emergency Medicine",
    title="Hyperacute Severe Headache in a 42-Year-Old Woman",
    brief=CandidateBrief(
        setting="Emergency Department Urgent Bay",
        patient_name="Sarah Jenkins",
        age=42,
        gender="Female",
        occupation="Secondary School Teacher",
        presenting_complaint="Sudden, excruciating occipital headache that started 3 hours ago",
        triage_vitals={
            "Heart Rate": "104 bpm",
            "Blood Pressure": "162/96 mmHg",
            "Respiratory Rate": "18 /min",
            "Oxygen Saturation": "98% on room air",
            "Temperature": "37.1°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Emergency Medical Officer. Take a focused 7-minute history from Sarah. "
            "Characterize the onset and features of the headache, screen for critical intracranial emergencies, "
            "and address her concerns. An interim result will arrive, followed by your presentation to the Consultant."
        )
    ),
    persona=PatientPersona(
        name="Sarah Jenkins",
        voice_id="en-GB-SoniaNeural", # Clear British female voice
        speech_rate="-5%",
        pain_level=9,
        temperament="distressed",
        behavioral_cues=[
            "Shielding her eyes from room lights (photophobia)",
            "Holding the back of her head and neck, avoiding neck flexion",
            "Nauseous, keeping an emesis bowl nearby"
        ]
    ),
    gates=[
        # SOCRATES
        InformationGate(
            key="onset_timing",
            category=GateCategory.SOCRATES,
            trigger_concepts=["onset", "start", "how fast", "how quickly", "seconds", "minutes", "thunderclap", "peak"],
            response_text="It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="site_character",
            category=GateCategory.SOCRATES,
            trigger_concepts=["where", "describe", "feel like", "throbbing", "dull", "occipital", "neck", "location"],
            response_text="It's concentrated at the base of my skull and the back of my neck. An intense, explosive, throbbing agony."
        ),
        InformationGate(
            key="trigger_valsalva",
            category=GateCategory.SOCRATES,
            trigger_concepts=["what were you doing", "trigger", "activity", "cough", "straining", "exercise", "lifting"],
            response_text="I was lifting a heavy stack of textbooks and coughing during class when it suddenly struck."
        ),
        # RED FLAGS
        InformationGate(
            key="red_flag_meningism",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["neck stiff", "stiffness", "chin to chest", "light", "bright", "photophobia", "eyes"],
            response_text="Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_neuro_deficits",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["vision", "double vision", "blur", "weakness", "arm", "face", "speech", "slur", "seizure", "fit"],
            response_text="I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_systemic",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["fever", "rash", "temperature", "infection", "shivering"],
            response_text="No high fever or purple rashes on my skin."
        ),
        # ICE
        InformationGate(
            key="ice_concerns_ideas",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "afraid", "fear", "thoughts", "what do you think", "family"],
            response_text="Doctor... my mother's sister collapsed and died of a ruptured brain aneurysm when she was 45. Is that what this is? Am I having a brain hemorrhage like my aunt?"
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "scan", "test"],
            response_text="I feel I need a brain scan right away. Please don't tell me this is just a stress migraine."
        ),
        # PAST HISTORY
        InformationGate(
            key="pmhx_headaches",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["previous headache", "migraine", "history of headache", "ever had this before", "medications"],
            response_text="I get occasional tension headaches at the end of a busy school term, but NOTHING ever remotely like this. This is completely different. I don't take regular medications other than the combined contraceptive pill."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency Non-Contrast Head CT Scan Result",
        description="The non-contrast CT brain performed 3.5 hours post-onset is reviewed by the on-call radiologist.",
        findings={
            "CT Brain (Non-contrast)": "No hyperdense blood identified in the basal cisterns, sylvian fissures, or ventricles. Gray-white differentiation preserved. No acute intracranial hemorrhage or mass effect seen."
        },
        expected_shifts={
            "Aneurysmal Subarachnoid Hemorrhage (SAH)": -1, # Reduced, but NOT excluded!
            "Migraine without Aura": 1,
            "Cerebral Venous Sinus Thrombosis (CVST)": 0,
            "Bacterial / Viral Meningitis": 0
        },
        expert_rationale=(
            "While a high-resolution 3rd-generation CT brain within 6 hours has high sensitivity (~98%), it DOES NOT exclude an SAH. "
            "Under international (NICE / ACEP) guidelines, a patient with a convincing thunderclap headache and a negative head CT must undergo a Lumbar Puncture performed at least 12 hours after symptom onset to assess for CSF spectrophotometry / xanthochromia, or CT Angiography."
        )
    ),
    differentials=[
        Differential(
            name="Subarachnoid Hemorrhage (Ruptured Saccular/Berry Aneurysm)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Hyperacute onset (< 1 min to peak)", "Severe occipital pain with meningism and photophobia", "Family history of sudden aneurysm death in 1st/2nd degree relative"],
            refuting_features=["Initial non-contrast CT brain is reported normal (sensitivity ~98% at <6h)"],
            prior_probability=0.70,
            posterior_probability=0.20 # Still cannot be dismissed without LP or CTA!
        ),
        Differential(
            name="Cerebral Venous Sinus Thrombosis (CVST)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Severe headache in female on combined oral contraceptive pill"],
            refuting_features=["Typically more progressive onset rather than thunderclap, normal non-contrast CT"],
            prior_probability=0.15,
            posterior_probability=0.35
        ),
        Differential(
            name="First-Presentation Severe Migraine with Aura",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Photophobia, nausea, visual symptoms"],
            refuting_features=["Thunderclap onset reaching maximum intensity in <1 minute is highly atypical for migraine"],
            prior_probability=0.10,
            posterior_probability=0.40
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second summary and clinical differential to the Emergency Medicine Consultant.",
            target_rubric="SBAR presentation: 42yo woman on OCP with family history of aneurysm presenting with a definitive thunderclap headache (<30s peak), meningism, and photophobia. Top differential remains SAH until excluded.",
            max_marks=10,
            key_points_required=["42yo female", "Thunderclap onset (peak < 1 min)", "Meningismus and photophobia", "Family history of intracranial aneurysm", "Working diagnosis: Subarachnoid Hemorrhage vs CVST"]
        ),
        VivaQuestion(
            prompt="The CT brain was reported as normal. Does this safely exclude a Subarachnoid Hemorrhage? What is your mandatory next diagnostic step?",
            target_rubric="NO, normal CT does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture at least 12 hours post-onset for CSF spectrophotometry (xanthochromia) and cell count in tubes 1 and 4 (to differentiate traumatic tap).",
            max_marks=10,
            key_points_required=["CT does not 100% exclude SAH (small bleed / late presentation)", "Perform Lumbar Puncture", "Timing: at least 12 hours post-headache onset to allow bilirubin formation", "Test CSF for xanthochromia via spectrophotometry", "Compare RBC count between tube 1 and tube 4 to rule out traumatic tap"]
        ),
        VivaQuestion(
            prompt="What acute supportive and preventative pharmacological measures will you initiate right now?",
            target_rubric="Analgesia, IV fluids, antiemetics, blood pressure control, Nimodipine 60mg every 4 hours to prevent vasospasm/delayed cerebral ischemia, neurosurgical alert.",
            max_marks=10,
            key_points_required=["Nimodipine (60mg PO q4h) for vasospasm prevention", "Blood pressure management (avoid severe peaks, maintain SBP < 140-160)", "Analgesia (avoid NSAIDs/aspirin before bleed exclusion; use paracetamol / opioids)", "Antiemetics (e.g. Ondansetron) and IV hydration", "Neurosurgical / Stroke referral"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Premature Closure on Negative Head CT ('CT Negative, Discharge Home')",
            description="Reassuring the patient and discharging them home simply because the initial CT scan is normal.",
            trigger_condition="Candidate decides to discharge patient without discussing lumbar puncture or CTA.",
            remediation_advice="The classic pitfall in emergency neurology: A normal CT does NOT exclude an SAH. Overlooked 'warning leaks' / sentinel headaches carry a devastating risk of re-rupture and death. Always perform an LP at > 12h or CT angiogram."
        ),
        CognitiveTrap(
            trap_name="Dismissing Thunderclap as Migraine",
            description="Assuming the photophobia and nausea justify a diagnosis of simple migraine.",
            trigger_condition="Candidate anchors on migraine without respecting the < 1-minute onset speed.",
            remediation_advice="Any headache reaching 10/10 within 60 seconds is a thunderclap headache and MUST be treated as an intracranial vascular emergency until definitively proven otherwise."
        )
    ]
)
