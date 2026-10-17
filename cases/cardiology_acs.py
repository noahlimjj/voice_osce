"""
cardiology_acs.py: Acute Chest Pain Station (Acute Coronary Syndrome vs Aortic Dissection vs PE).
Demonstrates Practicum Script Bayesian shift upon ECG disclosure and Calgary-Cambridge ICE unlocking.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_CARDIOLOGY_ACS = OSCECase(
    case_id="cardio_01",
    specialty="Cardiology / Acute Medicine",
    title="Acute Central Chest Pain in a 56-Year-Old Driver",
    brief=CandidateBrief(
        setting="Emergency Department Acute Assessment Unit",
        patient_name="Mr. David Tan",
        age=56,
        gender="Male",
        occupation="Grab / Taxi Driver",
        presenting_complaint="Severe retrosternal chest tightness for 2 hours",
        triage_vitals={
            "Heart Rate": "98 bpm (Sinus)",
            "Blood Pressure": "144/88 mmHg (Right arm), 142/86 mmHg (Left arm)",
            "Respiratory Rate": "22 /min",
            "Oxygen Saturation": "96% on room air",
            "Temperature": "36.8°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the FY1/ED Medical Officer. Take a focused 7-minute history from Mr. Tan. "
            "Explore his symptoms, risk factors, and concerns. An interim investigation may arrive. "
            "You will then present your synthesis, differential diagnosis, and acute management plan to the Examiner."
        )
    ),
    persona=PatientPersona(
        name="Mr. David Tan",
        voice_id="en-SG-WayneNeural", # Authentic Singaporean male voice
        speech_rate="-5%",
        pain_level=8,
        temperament="anxious",
        behavioral_cues=[
            "Holds a clenched fist over his sternum (Levine's sign)",
            "Sweating mildly, breathing shallowly due to discomfort",
            "Reluctant to take long breaths, speaks in brief sentences"
        ]
    ),
    gates=[
        # SOCRATES
        InformationGate(
            key="site_onset",
            category=GateCategory.SOCRATES,
            trigger_concepts=["where", "start", "onset", "when did it happen", "location", "chest"],
            response_text="It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down."
        ),
        InformationGate(
            key="character_severity",
            category=GateCategory.SOCRATES,
            trigger_concepts=["feel like", "describe", "sharp", "dull", "heavy", "crushing", "scale", "severity", "pain score", "out of 10"],
            response_text="It feels like an elephant sitting on my chest, doctor. A heavy, squeezing pressure. On a scale of 1 to 10, it's definitely an 8."
        ),
        InformationGate(
            key="radiation",
            category=GateCategory.SOCRATES,
            trigger_concepts=["radiate", "spread", "move", "arm", "jaw", "neck", "back", "shoulder"],
            response_text="Yes! It's radiating up into my left jaw and down the inside of my left arm. It doesn't shoot to my back, though."
        ),
        InformationGate(
            key="associations",
            category=GateCategory.SOCRATES,
            trigger_concepts=["sweat", "clammy", "nausea", "vomit", "breathless", "short of breath", "dizzy", "lightheaded"],
            response_text="I've been sweating buckets even with the air conditioning on full blast, and I felt quite nauseous, almost threw up in the cab."
        ),
        InformationGate(
            key="exacerbating_relieving",
            category=GateCategory.SOCRATES,
            trigger_concepts=["worse", "better", "breathing", "cough", "posture", "lying down", "walking"],
            response_text="Nothing seems to make it better. Taking a deep breath doesn't make it sharper, it just stays heavy and crushing."
        ),
        # ICE (CALGARY-CAMBRIDGE)
        InformationGate(
            key="ice_ideas",
            category=GateCategory.ICE,
            trigger_concepts=["what do you think", "your thoughts", "cause", "ideas"],
            response_text="Doctor... I tried telling myself it was just gastric indigestion from the oily chicken rice, but deep down I'm terrified it's my heart."
        ),
        InformationGate(
            key="ice_concerns",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "concern", "afraid", "fear", "scared"],
            response_text="My older brother had a massive heart attack when he was just 52 and didn't make it. I'm terrified the same thing is happening to me. My daughter is getting married in two months..."
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "want us to do", "expectations"],
            response_text="I just want to know if I'm having a heart attack, and whether you can give me something to stop this crushing pain."
        ),
        # RED FLAGS (MANDATORY SAFETY)
        InformationGate(
            key="red_flag_aortic_tear",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["tearing", "ripping", "between shoulder blades", "scapula", "back pain", "tearing pain"],
            response_text="No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_syncope",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["faint", "pass out", "blackout", "collapse", "loss of consciousness", "syncope"],
            response_text="No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_pe_hemoptysis",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["cough blood", "blood in spit", "hemoptysis", "leg swelling", "calf pain", "dvt", "clot"],
            response_text="No blood in my phlegm, and neither of my calves is swollen or sore.",
            mandatory_for_safety=True
        ),
        # PAST MEDICAL & DRUGS & SOCIAL
        InformationGate(
            key="pmhx_drugs",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["past medical", "medical history", "illness", "conditions", "blood pressure", "diabetes", "cholesterol", "medications", "tablets", "allergies"],
            response_text="I have high blood pressure and high cholesterol diagnosed 5 years ago. I'm prescribed Amlodipine 5mg and Atorvastatin 20mg, but honestly, I often forget to take them during long taxi shifts. No allergies to any medications."
        ),
        InformationGate(
            key="social_smoking",
            category=GateCategory.SOCIAL_HISTORY,
            trigger_concepts=["smoke", "cigarettes", "alcohol", "drink", "diet", "lifestyle", "exercise"],
            response_text="I smoke about a pack a day for the past 30 years—helps with driving fatigue. I don't drink alcohol much, just a beer on weekends. Exercise? Hard to find time when driving 12 hours a day."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency 12-Lead ECG & Bedside Point-of-Care Troponin",
        description="The ED nurse hands you the freshly printed 12-lead ECG and bedside high-sensitivity troponin result.",
        findings={
            "ECG": "Sinus rhythm at 96 bpm. 2.5 mm convex ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in I and aVL.",
            "V4R Lead": "1 mm ST elevation in right-sided lead V4R (suggests Right Ventricular involvement).",
            "Bedside hs-cTnT": "48 ng/L (Elevated, baseline < 14 ng/L)."
        },
        expected_shifts={
            "Acute ST-Elevation Myocardial Infarction (Inferior STEMI with RV involvement)": 2, # Strongly confirmed
            "Acute Aortic Dissection Type A": -1, # Much less likely given clear focal inferior STEMI pattern without mediastinal widening
            "Pulmonary Embolism": -2, # Ruled out by definitive STEMI criteria
            "Gastroesophageal Reflux Disease (GERD)": -2 # Ruled out
        },
        expert_rationale=(
            "The 12-lead ECG definitively demonstrates an acute Inferior STEMI (ST elevation in II, III, aVF with reciprocal depressions). "
            "Critically, ST elevation in lead V4R flags right ventricular infarction, meaning the patient is preload-dependent and nitrates/morphine must be used with extreme caution to avoid catastrophic hypotension."
        )
    ),
    differentials=[
        Differential(
            name="Acute Inferior STEMI (with Right Ventricular Infarction)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Crushing retrosternal pain radiating to jaw/left arm", "Diaphoresis, nausea", "ST elevation in II, III, aVF", "Elevated hs-cTnT", "Heavy smoking history and untreated hypertension"],
            refuting_features=[],
            prior_probability=0.75,
            posterior_probability=0.98
        ),
        Differential(
            name="Acute Aortic Dissection (Stanford Type A involving RCA ostium)",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Severe acute chest pain in male with chronic hypertension", "Can present as inferior STEMI if dissection flap occludes right coronary artery ostium"],
            refuting_features=["Equal bilateral arm blood pressures", "Absence of tearing pain radiating to interscapular region", "No new aortic regurgitation murmur"],
            prior_probability=0.15,
            posterior_probability=0.01
        ),
        Differential(
            name="Acute Pulmonary Embolism",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Tachypnea, sudden chest discomfort in sedentary taxi driver"],
            refuting_features=["Pain is non-pleuritic", "No hemoptysis, no DVT signs", "Definitive STEMI ECG rather than S1Q3T3 / sinus tach"],
            prior_probability=0.08,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Please present a concise 60-second summary of this patient to the Cardiology Registrar.",
            target_rubric="Structured SBAR summary: 56yo male with CV risk factors presenting with acute crushing retrosternal chest pain, vegetative symptoms, and inferior STEMI on ECG with RV involvement.",
            max_marks=10,
            key_points_required=["56yo male driver", "Cardiovascular risk factors (hypertension, hyperlipidemia, 30 pack-year smoking)", "Typical ischemic symptoms (crushing, radiating to left arm/jaw, diaphoresis)", "Inferior STEMI confirmed on ECG"]
        ),
        VivaQuestion(
            prompt="What is your primary working diagnosis and two key differential diagnoses?",
            target_rubric="Primary: Acute Inferior STEMI with RV involvement. Differentials: Aortic dissection (Type A with RCA occlusion), Acute Pulmonary Embolism.",
            max_marks=10,
            key_points_required=["Inferior STEMI", "Right Ventricular involvement", "Aortic dissection", "Pulmonary embolism"]
        ),
        VivaQuestion(
            prompt="Outline your immediate acute management plan in the next 15 minutes.",
            target_rubric="Dual antiplatelet therapy (Aspirin 300mg + Ticagrelor 180mg), urgent cardiac cath lab activation for primary PCI, oxygen only if SpO2 < 94%, IV access, cautious fluid bolus for RV infarction, AVOID nitrates.",
            max_marks=10,
            key_points_required=["Activate Cath Lab / Primary PCI (< 90-120 min door-to-balloon)", "Dual antiplatelet therapy (Aspirin 300mg + P2Y12 inhibitor)", "IV access and baseline labs (FBC, U&E, Coag, Crossmatch)", "CAUTION/AVOID nitrates due to Right Ventricular preload dependence", "Analgesia (cautious IV morphine/antiemetic)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Reflexive Nitrate Administration in RV Infarction",
            trigger_keywords=['nitrate', 'gtn', 'glyceryl trinitrate'],
            description="Prescribing GTN spray or IV nitrates automatically for inferior chest pain without inspecting V4R lead.",
            trigger_condition="Candidate orders sublingual GTN despite inferior STEMI with RV involvement.",
            remediation_advice="Always obtain right-sided lead V4R in inferior STEMIs. RV infarction leads to preload-dependence; nitrates cause sudden profound hypotension."
        ),
        CognitiveTrap(
            trap_name="Premature Closure on Musculoskeletal / Gastric Pain",
            trigger_keywords=['indigestion', 'gastritis', 'reflux', 'gerd', 'antacid'],
            description="Accepting patient's initial explanation of 'gastric indigestion after oily lunch'.",
            trigger_condition="Candidate anchors on indigestion because pain started after eating.",
            remediation_advice="In patients over 50 with cardiovascular risk factors, epigastric/lower chest discomfort must be treated as acute coronary syndrome until an ECG proves otherwise."
        )
    ]
)
