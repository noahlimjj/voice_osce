"""
pediatrics_meningitis.py: Pediatric Fever with Non-Blanching Rash (Meningococcal Septicemia vs ITP vs Viral Exanthem).
Enforces the Glass Tumbler test, zero-delay antibiotic administration, and contraindications to LP in septic shock.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_PEDIATRICS_MENINGITIS = OSCECase(
    case_id="peds_08",
    specialty="Pediatrics / Infectious Diseases",
    title="Fever and Spreading Non-Blanching Purpura in an 11-Month-Old Infant",
    brief=CandidateBrief(
        setting="Pediatric Emergency Resuscitation Area",
        patient_name="Baby Lucas Koh (Mother: Mrs. Jenny Koh)",
        age=1, # 11 months old
        gender="Male",
        occupation="Infant",
        presenting_complaint="High fever, extreme drowsiness, and spreading purple rash on legs for 6 hours",
        triage_vitals={
            "Heart Rate": "178 bpm (Severe tachycardia)",
            "Blood Pressure": "72/42 mmHg (Hypotensive for age)",
            "Respiratory Rate": "52 /min (Tachypnea with subcostal recession)",
            "Oxygen Saturation": "92% on room air",
            "Temperature": "39.6°C (Core pyrexia)",
            "GCS": "10/15 (Eyes open only to pain, weak whimpering cry)"
        },
        instructions=(
            "You are the Pediatric Resuscitation Officer. Take a focused 7-minute history from Lucas's mother, Jenny. "
            "Characterize the onset and progression of the rash, evaluate signs of meningism and septic shock, "
            "and address parental anxiety. An emergency blood gas result will arrive, followed by your presentation."
        )
    ),
    persona=PatientPersona(
        name="Mrs. Jenny Koh (Mother)",
        voice_id="en-SG-LunaNeural",
        speech_rate="+5%",
        pain_level=0, # Highly distressed mother
        temperament="panicked",
        behavioral_cues=[
            "Crying, trembling, clutching her baby's favorite blanket",
            "Speaking rapidly and breathlessly, terrified her baby is dying",
            "Pointing frantically to the dark purple spots on the baby's thighs"
        ]
    ),
    gates=[
        # RASH CHARACTERISTICS & GLASS TUMBLER TEST (MANDATORY SAFETY)
        InformationGate(
            key="rash_glass_test",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["rash", "spots", "purple", "glass", "tumbler", "fade", "blanch", "press", "non-blanching"],
            response_text="The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
            mandatory_for_safety=True
        ),
        # PERFUSION & SEPTIC SHOCK (MANDATORY SAFETY)
        InformationGate(
            key="perfusion_cold_extremities",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["hands", "feet", "cold", "capillary refill", "perfusion", "mottling", "skin color"],
            response_text="His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
            mandatory_for_safety=True
        ),
        # NEUROLOGICAL RED FLAGS & MENINGISM
        InformationGate(
            key="neurological_lethargy",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["alert", "awake", "drowsy", "lethargic", "floppy", "fontanelle", "soft spot", "cry", "neck"],
            response_text="He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
            mandatory_for_safety=True
        ),
        # SYSTEMIC & URINE OUTPUT
        InformationGate(
            key="urine_nappies",
            category=GateCategory.SOCRATES,
            trigger_concepts=["nappy", "wet", "diaper", "urine", "pee", "feeding", "vomiting"],
            response_text="He hasn't had a single wet nappy since 7 AM this morning, and every time I tried to give him breastmilk or water he vomited it right back up."
        ),
        # IMMUNIZATION & CONTACT HISTORY
        InformationGate(
            key="immunization_contacts",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["vaccine", "immunization", "jabs", "meningitis vaccine", "contact", "sick", "daycare"],
            response_text="He is up to date on his standard Singapore childhood vaccines, but he hasn't had the optional Meningococcal B jab yet. Two days ago one of the children at his infant-care center was taken to hospital with a high fever."
        ),
        # ICE (MOTHER'S TERROR)
        InformationGate(
            key="ice_mother_fears",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "fear", "afraid", "thoughts"],
            response_text="Doctor... is this blood poisoning? Is it meningitis? My grandmother told me stories of babies losing limbs or dying overnight from purple spots. Please save my boy!"
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "antibiotics", "treatment"],
            response_text="Please give him whatever medicine he needs right now. Don't waste time waiting for routine tests!"
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="Emergency STAT Blood Gas & Coagulation Alert",
        description="The point-of-care capillary blood gas and coagulation analyzer report arrives in resus.",
        findings={
            "Blood Gas (Venous)": "pH 7.14 (Severe metabolic acidosis), Base Excess -14.2 mmol/L, Lactate 6.2 mmol/L (Severe tissue hypoperfusion), Glucose 2.8 mmol/L (Hypoglycemia).",
            "Coagulation Profile": "Prothrombin Time 26s, APTT 68s, Fibrinogen 0.7 g/L (Severe consumptive coagulopathy / DIC).",
            "Full Blood Count": "WBC 28,400 /mcL (90% neutrophils with band forms), Platelets 38,000 /mcL."
        },
        expected_shifts={
            "Meningococcal Septicemia with Disseminated Intravascular Coagulation (Purpura Fulminans)": 2, # Strongly confirmed
            "Immune Thrombocytopenic Purpura (ITP)": -2, # Ruled out (ITP is afebrile and well-appearing)
            "Henoch-Schonlein Purpura (IgA Vasculitis)": -2, # Ruled out by septic shock, severe metabolic acidosis, and infant age
            "Viral Exanthem (Enterovirus / Roseola)": -2 # Ruled out by life-threatening septic shock and non-blanching purpura
        },
        expert_rationale=(
            "The clinical presentation of an infant with non-blanching purpura, severe septic shock (hypotension, CRT 4s, cold peripheries), "
            "profound lactic acidosis (6.2 mmol/L), and consumptive coagulopathy (DIC) is PATHOGNOMONIC for Meningococcal Septicemia (Neisseria meningitidis). "
            "This is an extreme pediatric red alert. Immediate broad-spectrum IV Ceftriaxone (or Cefotaxime) must be administered within minutes. "
            "LUMBAR PUNCTURE IS ABSOLUTELY CONTRAINDICATED in the presence of purpuric rash, septic shock, and DIC."
        )
    ),
    differentials=[
        Differential(
            name="Meningococcal Septicemia / Purpura Fulminans (Neisseria meningitidis)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Non-blanching purple purpura spreading rapidly", "Decompensated septic shock (HR 178, BP 72/42, CRT 4s)", "Severe lactic acidosis (6.2 mmol/L)", "Consumptive coagulopathy (DIC)", "Bulging fontanelle and high-pitched cry"],
            refuting_features=[],
            prior_probability=0.85,
            posterior_probability=0.99
        ),
        Differential(
            name="Immune Thrombocytopenic Purpura (ITP)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Petechiae and thrombocytopenia (Platelets 38k)"],
            refuting_features=["ITP presents as a well, afebrile child without hemodynamic shock, acidosis, or lethargy"],
            prior_probability=0.10,
            posterior_probability=0.00
        ),
        Differential(
            name="Henoch-Schönlein Purpura (HSP / IgA Vasculitis)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Purpuric rash on lower limbs"],
            refuting_features=["HSP occurs in older children (3-10 years), is palpable without thrombocytopenia, and does not cause fulminant septic shock"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second synthesis and primary diagnosis to the Pediatric Consultant on-call.",
            target_rubric="SBAR: 11-month-old infant presenting with rapidly progressive non-blanching purpuric rash, decompensated septic shock (HR 178, BP 72/42, CRT 4s, lactate 6.2), and meningism, establishing Meningococcal Septicemia with DIC.",
            max_marks=10,
            key_points_required=["11-month-old infant with fever and rapidly spreading non-blanching purpuric rash", "Clinical evidence of severe decompensated septic shock: tachycardia 178, hypotension, CRT > 3s", "Severe metabolic acidosis with hyperlactatemia (6.2) and DIC", "Primary diagnosis: Meningococcal Septicemia (Purpura Fulminans)"]
        ),
        VivaQuestion(
            prompt="What is your immediate, life-saving pharmacological intervention, and would you perform a Lumbar Puncture right now?",
            target_rubric="IMMEDIATE IV/IM Ceftriaxone (80-100 mg/kg) or Cefotaxime without a second's delay. Lumbar Puncture is ABSOLUTELY CONTRAINDICATED due to septic shock, purpuric rash, and coagulopathy (risk of cerebral herniation and spinal hematoma).",
            max_marks=10,
            key_points_required=["Immediate administration of third-generation cephalosporin (IV/IO/IM Ceftriaxone 80-100 mg/kg or Cefotaxime)", "DO NOT DELAY antibiotics for any tests, blood cultures, or imaging", "Lumbar Puncture is ABSOLUTELY CONTRAINDICATED right now", "Justify LP contraindication: presence of purpuric rash, hemodynamic shock, and severe coagulopathy/thrombocytopenia"]
        ),
        VivaQuestion(
            prompt="Outline your acute fluid resuscitation and public health contact tracing measures.",
            target_rubric="Fluid resuscitation: 20 mL/kg 0.9% Saline bolus over 5-10 minutes, reassess for fluid overload / hepatomegaly; inotropes (Adrenaline) if fluid refractory; correct hypoglycemia (10% Dextrose); Public Health notification for household chemoprophylaxis (Rifampicin or Ciprofloxacin).",
            max_marks=10,
            key_points_required=["Immediate vascular access (IV or bilateral intraosseous / IO lines if IV fails within 90 seconds)", "Fluid bolus of 20 mL/kg balanced crystalloid / 0.9% normal saline over 5-10 minutes", "Reassess for fluid-refractory shock requiring vasoactive inotropes (Adrenaline / Noradrenaline)", "Correct hypoglycemia (2 mL/kg of 10% Dextrose)", "Urgent statutory notification to Public Health for close contact chemoprophylaxis (oral Rifampicin or Ciprofloxacin for mother, family, daycare)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Delaying Antibiotics for Lumbar Puncture in Suspected Meningococcal Disease",
            trigger_keywords=['lp first', 'lumbar puncture first', 'before antibiotics', 'after the lp', 'after lp', 'await lp', 'wait for lp'],
            description="Insisting on performing a lumbar puncture before administering antibiotics.",
            trigger_condition="Candidate decides to perform an LP before giving IV Ceftriaxone in a purpuric infant in shock.",
            remediation_advice="FATAL ERROR: Never delay antibiotics for investigations in suspected meningococcal disease. Furthermore, performing an LP in a patient with severe coagulopathy or septic shock can cause fatal brainstem herniation or spinal cord hematoma."
        ),
        CognitiveTrap(
            trap_name="Failing to Reassess After Fluid Bolus",
            absent_keywords=['reassess', 're-assess', 're-evaluate', 'repeat assessment', 'review after'],
            description="Administering fluid boluses without actively checking the liver edge and chest auscultation for signs of fluid overload.",
            trigger_condition="Candidate orders multiple fluid boluses without clinical reassessment criteria.",
            remediation_advice="In pediatric septic shock, always reassess heart rate, capillary refill, respiratory effort, and palpate the liver edge after every 10-20 mL/kg bolus before repeating fluids."
        )
    ]
)
