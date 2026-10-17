"""
psychiatry_suicide.py: Acute Psychiatric Risk Assessment (Major Depression with High Suicidal Intent).
Emphasizes empathetic rapport, direct exploration of suicidal intent and preparatory acts, and Mental Health Act escalation.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_PSYCHIATRY_SUICIDE = OSCECase(
    case_id="psych_07",
    specialty="Psychiatry / Crisis Assessment",
    title="Emergency Suicide Risk Assessment in a 49-Year-Old Architect",
    brief=CandidateBrief(
        setting="Emergency Department Psychiatric Interview Room",
        patient_name="James Henderson",
        age=49,
        gender="Male",
        occupation="Architect",
        presenting_complaint="Brought to the hospital by police after being found on the ledge of a bridge at 2 AM",
        triage_vitals={
            "Heart Rate": "78 bpm",
            "Blood Pressure": "130/82 mmHg",
            "Respiratory Rate": "14 /min",
            "Oxygen Saturation": "99% on room air",
            "Temperature": "36.6°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Psychiatric Liaison Registrar / Medical Officer. Conduct a 7-minute risk assessment interview with James. "
            "Establish empathetic rapport, directly assess his suicidal ideation, intent, and planning, "
            "and evaluate his immediate safety. You will then present your risk formulation to the Consultant Psychiatrist."
        )
    ),
    persona=PatientPersona(
        name="James Henderson",
        voice_id="en-GB-RyanNeural",
        speech_rate="-10%",
        pain_level=0, # Psychological agony
        temperament="hopeless",
        behavioral_cues=[
            "Poor eye contact, staring at the floor, slumped posture",
            "Flat affect, slow monotonous speech with prolonged response latency",
            "Sighs deeply, looks exhausted and defeated"
        ]
    ),
    gates=[
        # CIRCUMSTANCES OF PRESENTATION
        InformationGate(
            key="incident_circumstances",
            category=GateCategory.SOCRATES,
            trigger_concepts=["what happened", "bridge", "police", "brought you", "led to this", "car park"],
            response_text="The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step."
        ),
        # DIRECT SUICIDAL INTENT & LETHALITY (MANDATORY SAFETY)
        InformationGate(
            key="suicidal_ideation_intent",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["suicide", "end your life", "kill yourself", "die", "death", "thoughts of ending", "wanting to die"],
            response_text="Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="specific_plans_means",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["plan", "method", "means", "how were you planning", "jumping", "hanging", "overdose"],
            response_text="I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="preparatory_acts_final",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["note", "goodbye", "will", "affairs", "giving away", "belongings", "letters", "preparation"],
            response_text="Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="prior_attempts",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["before", "past", "previous attempt", "ever tried", "history of suicide"],
            response_text="Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
            mandatory_for_safety=True
        ),
        # PRECIPITATING STRESSORS & HOPELESSNESS
        InformationGate(
            key="stressors_divorce_work",
            category=GateCategory.SOCIAL_HISTORY,
            trigger_concepts=["what happened", "stress", "marriage", "wife", "work", "job", "bankruptcy", "money"],
            response_text="My architectural practice collapsed into bankruptcy two months ago, and my wife of 22 years moved out with the children and served divorce papers last month. I've lost my home, my identity, and my family."
        ),
        # ICE & PROTECTIVE FACTORS
        InformationGate(
            key="ice_hopelessness",
            category=GateCategory.ICE,
            trigger_concepts=["hope", "future", "see things getting better", "worried", "feel about being here"],
            response_text="I feel zero hope, doctor. I am an empty shell. I am nothing but a financial and emotional burden to my kids. If I am gone, they can at least claim my life insurance."
        ),
        InformationGate(
            key="protective_factors",
            category=GateCategory.ICE,
            trigger_concepts=["anything keeping you alive", "protective", "reasons to live", "hold you back", "daughter"],
            response_text="The only thing that made me hesitate on that bridge for half an hour was the image of my 16-year-old daughter having to identify my body. But even that is fading under the exhaustion."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Collateral Report from Police & Family",
        description="The ED Liaison Nurse receives collateral telephone history from the patient's ex-wife and attending police officer.",
        findings={
            "Police Report": "Officer reports patient was actively straddling the outer safety railing and required three officers to physically restrain him as he attempted to throw himself forward.",
            "Collateral from Ex-Wife": "Confirms receiving a final 'goodbye and forgive me' text message at 1:45 AM. Confirms patient has a locked cabinet at home containing prescription sleeping tablets (Zolpidem) and alcohol.",
            "Mental State in Room": "Patient quietly states to the nurse: 'You can't keep me here forever. The moment you turn your back, I will finish this.'"
        },
        expected_shifts={
            "Severe Major Depressive Episode with Imminent High Suicidal Risk": 2, # Strongly confirmed
            "Adjustment Disorder with Depressed Mood": -2, # Incompatible with severe pervasive biological depression and high-lethality planned acts
            "Bipolar Affective Disorder (Depressive Phase)": 0,
            "Malingering / Secondary Gain": -2 # Ruled out
        },
        expert_rationale=(
            "The combination of pervasive depressive cognitions, previous high-lethality attempt, explicit irreversible planning, "
            "final acts (will, financial transfers, goodbye letters), violent intent (jumping from bridge), active resistance against police rescue, "
            "and stated intent to complete the act establishes IMMINENT, LIFE-THREATENING SUICIDE RISK requiring immediate formal detention under the Mental Health Act."
        )
    ),
    differentials=[
        Differential(
            name="Severe Major Depressive Episode with Imminent High Suicidal Risk",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Pervasive low mood, severe anhedonia, hopelessness", "High-lethality method (50m bridge jump)", "Final acts completed (will, letters, finances)", "Prior serious suicide attempt", "Multiple severe life stressors (bankruptcy, divorce)", "Ongoing explicit suicidal intent"],
            refuting_features=[],
            prior_probability=0.85,
            posterior_probability=0.99
        ),
        Differential(
            name="Adjustment Disorder with Depressed Mood and Crisis Reaction",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Identifiable acute stressors (divorce, business bankruptcy)"],
            refuting_features=["Severity of vegetative symptoms, prior attempt, and calculated high-lethality planning exceed simple adjustment disorder"],
            prior_probability=0.15,
            posterior_probability=0.01
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second clinical risk formulation to the Consultant Psychiatrist.",
            target_rubric="Comprehensive formulation: 49yo male with severe depression and previous suicide attempt, presenting with imminent high-lethality suicide attempt (bridge jumping, finalized will, goodbye note, ongoing stated intent).",
            max_marks=10,
            key_points_required=["49yo male presenting following high-lethality suicide attempt (bridge jumping)", "Key static risk factors: male, middle-aged, previous overdose attempt, recent divorce/bankruptcy", "Key dynamic risk factors: high hopelessness, finalized affairs/suicide notes, stated ongoing intent", "Risk stratification: Imminent / High risk of completed suicide"]
        ),
        VivaQuestion(
            prompt="If the patient demands to leave the emergency department right now, what is your legal and immediate management approach?",
            target_rubric="Immediately detain the patient under the relevant Mental Health legislation (e.g. Mental Health Act / Form 1 / Section 5(2) or Common Law duty of care for imminent life preservation), initiate 1-to-1 continuous visual observation, search and remove all sharps/ligatures.",
            max_marks=10,
            key_points_required=["Cannot allow patient to self-discharge (imminent threat to life)", "Invoke emergency detention under the Mental Health Act (or Common Law duty of care / doctrine of necessity)", "Immediate continuous 1:1 visual nursing observation within arm's reach", "Environmental safety: remove all sharps, belts, shoelaces, ligature points", "Transfer to a secure, locked psychiatric inpatient facility"]
        ),
        VivaQuestion(
            prompt="Outline your bio-psycho-social management plan once admitted to the inpatient psychiatric unit.",
            target_rubric="Biological: Antidepressant initiation (SSRI/SNRI) +/- short-term sedative/anxiolytic, consider ECT for severe refractory suicidality; Psychological: Supportive psychotherapy, DBT/CBT distress tolerance once stabilized; Social: Family engagement, social work support for bankruptcy/housing.",
            max_marks=10,
            key_points_required=["Biological: Antidepressant therapy (e.g. Sertraline/Venlafaxine) with short-term anxiolytic cover, consider ECT if life-threatening refractory suicidality", "Psychological: Safety planning, cognitive behavioral therapy / suicide prevention counseling once crisis abates", "Social: Involve family/support network, social work liaison for financial/legal assistance", "Regular multi-disciplinary risk re-assessments"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="The Myth of 'Planting the Idea' (Hesitation to Ask Directly About Suicide)",
            description="Using vague euphemisms like 'Are you feeling down?' instead of directly asking 'Are you having thoughts of killing yourself?'.",
            trigger_condition="Candidate avoids direct questioning about suicidal ideation and methods.",
            remediation_advice="Robust psychiatric evidence proves that asking directly and compassionately about suicide does NOT increase suicidal behavior. It validates the patient's profound distress and is essential to preserve life."
        ),
        CognitiveTrap(
            trap_name="False Reassurance & Relying on Verbal 'Contracts for Safety'",
            description="Accepting a patient's casual promise ('I promise I won't do it again') and allowing them to go home without formal psychiatric detention.",
            trigger_condition="Candidate considers outpatient discharge based solely on patient's verbal promise.",
            remediation_advice="'Contracts for safety' have NO legal or clinical validity in high-risk suicidal crises. Patients with high intent and completed preparations require involuntary inpatient containment."
        )
    ]
)
