"""
respiratory_pe.py: Acute Pleuritic Chest Pain & Dyspnea (Massive Pulmonary Embolism vs Pneumothorax vs Pneumonia).
Features Wells score stratification, McConnell's sign perturbation, and hemodynamic resuscitation.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_RESPIRATORY_PE = OSCECase(
    case_id="resp_04",
    specialty="Respiratory / Acute Medicine",
    title="Acute Pleuritic Chest Pain and Dyspnea in a 28-Year-Old Traveler",
    brief=CandidateBrief(
        setting="Emergency Department Resuscitation Bay",
        patient_name="Emily Watson",
        age=28,
        gender="Female",
        occupation="Management Consultant",
        presenting_complaint="Sudden right-sided sharp chest pain and shortness of breath for 3 hours",
        triage_vitals={
            "Heart Rate": "118 bpm (Sinus tachycardia)",
            "Blood Pressure": "94/62 mmHg",
            "Respiratory Rate": "28 /min",
            "Oxygen Saturation": "89% on room air (94% on 4L nasal cannula)",
            "Temperature": "37.4°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Acute Medical Officer. Take a focused 7-minute history from Emily. "
            "Characterize her pain and breathing, identify venous thromboembolism risk factors, "
            "and exclude life-threatening causes. An interim bedside finding will arrive."
        )
    ),
    persona=PatientPersona(
        name="Emily Watson",
        voice_id="en-GB-SoniaNeural",
        speech_rate="-5%",
        pain_level=8,
        temperament="anxious",
        behavioral_cues=[
            "Tachypneic, clutching the right lateral aspect of her chest",
            "Winces sharply on inspiration and speaks in short sentences",
            "Appears pale and mildly diaphoretic"
        ]
    ),
    gates=[
        # SOCRATES
        InformationGate(
            key="site_onset",
            category=GateCategory.SOCRATES,
            trigger_concepts=["where", "start", "onset", "when did it happen", "location", "chest pain"],
            response_text="It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest."
        ),
        InformationGate(
            key="character_pleuritic",
            category=GateCategory.SOCRATES,
            trigger_concepts=["describe", "feel like", "sharp", "stabbing", "deep breath", "inspiration", "cough", "pleuritic"],
            response_text="It's like a knife stabbing into my lung every single time I take a breath in or try to cough. I can only manage shallow little breaths."
        ),
        InformationGate(
            key="hemoptysis",
            category=GateCategory.SOCRATES,
            trigger_concepts=["cough", "blood", "phlegm", "spit", "hemoptysis"],
            response_text="Yes! When I coughed an hour ago, I coughed up bright red streaks of blood in my phlegm. That really terrified me."
        ),
        # VTE RISK FACTORS (MANDATORY SAFETY)
        InformationGate(
            key="travel_history",
            category=GateCategory.SOCIAL_HISTORY,
            trigger_concepts=["travel", "flight", "long haul", "plane", "car", "journey", "sitting"],
            response_text="I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="ocp_hormones",
            category=GateCategory.DRUG_HISTORY,
            trigger_concepts=["pill", "contraceptive", "medication", "hormone", "ocp", "birth control"],
            response_text="I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="dvt_signs",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["leg", "calf", "swelling", "clot", "dvt", "tender", "pain in leg"],
            response_text="Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="syncope_collapse",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["faint", "pass out", "blackout", "dizzy", "lightheaded", "syncope"],
            response_text="I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
            mandatory_for_safety=True
        ),
        # ICE
        InformationGate(
            key="ice_ideas_concerns",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "thoughts", "think is causing", "ideas", "afraid"],
            response_text="My partner told me I probably pulled a muscle lifting my heavy luggage off the luggage carousel, but coughing up blood made me wonder if I punctured my lung. Am I in danger?"
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "scan", "treatment"],
            response_text="I need you to tell me why I can't breathe properly and whether I have a blood clot in my lung."
        ),
        # PMHx & FAMILY
        InformationGate(
            key="pmhx_family_clots",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["past history", "family history", "clots", "thrombosis", "embolism", "miscarriages"],
            response_text="I have never had clots before, but my mother had a deep vein thrombosis in her leg after a surgery in her forties."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency Bedside POCUS Echo & CTPA Alert",
        description="Bedside point-of-care ultrasound (POCUS) cardiac scan and D-dimer results are reviewed.",
        findings={
            "Bedside Echo": "Right ventricular dilation with McConnell's sign (akinesia of RV mid-free wall with preserved apical contractility). Estimated RV systolic pressure 48 mmHg.",
            "Bedside D-Dimer": "4,400 ng/mL (Significantly elevated, normal < 500 ng/mL).",
            "12-Lead ECG": "Sinus tachycardia at 118 bpm with S1Q3T3 pattern and T-wave inversion in V1-V3."
        },
        expected_shifts={
            "Acute Submassive / Massive Pulmonary Embolism": 2, # Strongly confirmed
            "Primary Spontaneous Pneumothorax": -2, # Ruled out by RV strain and bilateral lung sliding on POCUS
            "Musculoskeletal Chest Wall Strain": -2, # Ruled out
            "Community-Acquired Pneumonia": -1
        },
        expert_rationale=(
            "The combination of recent long-haul flight, OCP use, unilateral DVT, hemoptysis, sinus tachycardia, "
            "and McConnell's sign on echocardiography establishes Acute Submassive Pulmonary Embolism with right ventricular strain. "
            "Borderline systolic BP (94 mmHg) places her at imminent risk of obstructive shock requiring immediate therapeutic anticoagulation and ICU alert for potential thrombolysis."
        )
    ),
    differentials=[
        Differential(
            name="Acute Submassive Pulmonary Embolism (PE with RV Strain)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Long-haul flight", "Estrogen OCP use", "Pleuritic pain + hemoptysis", "Tachycardia, hypoxia", "Unilateral calf swelling", "McConnell's sign on echo"],
            refuting_features=[],
            prior_probability=0.75,
            posterior_probability=0.98
        ),
        Differential(
            name="Tension / Spontaneous Pneumothorax",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Sudden pleuritic pain, hypoxia, hypotension"],
            refuting_features=["Hemoptysis is atypical, bilateral lung sliding on POCUS, no tracheal deviation"],
            prior_probability=0.15,
            posterior_probability=0.01
        ),
        Differential(
            name="Community-Acquired Pleuropneumonia",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Pleuritic pain, low-grade temperature"],
            refuting_features=["Hyperacute onset, absence of purulent sputum, presence of prominent VTE risk factors"],
            prior_probability=0.08,
            posterior_probability=0.01
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second synthesis to the Acute Medicine Consultant.",
            target_rubric="SBAR presentation of a 28yo woman with multiple VTE risk factors (long-haul flight, OCP, family history) presenting with acute pleuritic pain, hemoptysis, hypoxia, and echo signs of RV strain.",
            max_marks=10,
            key_points_required=["28yo female with high-risk VTE profile (14h flight, OCP)", "Typical pleuritic chest pain with hemoptysis and DVT symptoms", "Hemodynamic compromise (tachycardia 118, BP 94/62, hypoxia 89%)", "Working diagnosis: Acute Pulmonary Embolism with RV strain"]
        ),
        VivaQuestion(
            prompt="Calculate the Wells Score and determine your definitive imaging modality.",
            target_rubric="Wells Score: Clinical signs of DVT (3) + Alternative diagnosis less likely than PE (3) + Tachycardia (1.5) = 7.5 (High probability). Definitive investigation: CT Pulmonary Angiography (CTPA).",
            max_marks=10,
            key_points_required=["Wells Score >= 4 (High risk / PE likely)", "Definitive imaging: CT Pulmonary Angiogram (CTPA)", "Alternative if severe renal failure or anaphylactic contrast allergy: V/Q scan", "Administer immediate therapeutic anticoagulation prior to CTPA"]
        ),
        VivaQuestion(
            prompt="Outline your immediate resuscitation and pharmacological management.",
            target_rubric="Oxygen to target 94-98%, IV access, immediate therapeutic anticoagulation (LMWH or unfractionated heparin), cautious IV fluids (avoid RV overload), thrombolysis readiness (Alteplase) if BP drops < 90.",
            max_marks=10,
            key_points_required=["Immediate anticoagulation (LMWH e.g. Enoxaparin 1.5mg/kg or IV Unfractionated Heparin)", "Oxygen therapy", "Cautious fluid resuscitation (avoid worsening right ventricular failure)", "Monitor for hemodynamic deterioration requiring rescue systemic thrombolysis (Alteplase 50-100mg)", "Discontinue oral contraceptive pill"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Withholding Anticoagulation While Awaiting CTPA",
            trigger_keywords=['wait for ctpa', 'await ctpa', 'awaiting ctpa', 'after ctpa', 'delay anticoag'],
            description="Delaying life-saving anticoagulation in a high-probability PE patient to wait for a scanner slot.",
            trigger_condition="Candidate decides to wait for CTPA confirmation before giving heparin/LMWH.",
            remediation_advice="In high-probability PE patients with hemodynamic compromise and no bleeding contraindications, immediate empirical anticoagulation must be started before imaging."
        ),
        CognitiveTrap(
            trap_name="Anchoring on Musculoskeletal Strain in Young Adults",
            trigger_keywords=['musculoskeletal', 'muscle strain', 'costochondritis', 'msk'],
            description="Attributing pleuritic pain to heavy lifting because the patient is young and otherwise healthy.",
            trigger_condition="Candidate considers muscle strain plausible despite hypoxia, tachycardia, and hemoptysis.",
            remediation_advice="Hemoptysis and hypoxia are NEVER caused by muscular strain. Always calculate the Wells score in unexplained dyspnea."
        )
    ]
)
