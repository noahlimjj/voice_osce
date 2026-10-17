"""
endocrinology_dka.py: Acute Diabetic Ketoacidosis in Type 1 Diabetes (DKA vs HHS vs Sepsis).
Tests diagnostic triad, fluid resuscitation math, potassium replacement rules, and cerebral edema vigilance.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_ENDOCRINOLOGY_DKA = OSCECase(
    case_id="endo_10",
    specialty="Endocrinology / Acute Medicine",
    title="Intractable Vomiting and Tachypnea in a 19-Year-Old Type 1 Diabetic",
    brief=CandidateBrief(
        setting="Acute Medical Admission Unit (AMAU)",
        patient_name="Liam Wright",
        age=19,
        gender="Male",
        occupation="Undergraduate Student",
        presenting_complaint="Persistent vomiting, diffuse abdominal cramps, and deep rapid breathing for 24 hours",
        triage_vitals={
            "Heart Rate": "128 bpm (Sinus tachycardia)",
            "Blood Pressure": "98/62 mmHg",
            "Respiratory Rate": "32 /min (Deep, sighing Kussmaul respirations)",
            "Oxygen Saturation": "99% on room air",
            "Temperature": "36.8°C",
            "GCS": "14/15 (Drowsy, responds slowly to questions)"
        },
        instructions=(
            "You are the Medical Registrar / FY1 on-call. Take a focused 7-minute history from Liam. "
            "Identify the precipitating trigger, evaluate his hydration status, and screen for acute complications. "
            "An emergency venous blood gas report will arrive, followed by your presentation."
        )
    ),
    persona=PatientPersona(
        name="Liam Wright",
        voice_id="en-GB-RyanNeural",
        speech_rate="-10%",
        pain_level=7,
        temperament="lethargic",
        behavioral_cues=[
            "Breathing deeply and rapidly with noticeable effort (Kussmaul breathing)",
            "Dry, cracked lips, sunken eyes, dry oral tongue",
            "Holding his abdomen in discomfort, sweet pear-drop / acetone breath"
        ]
    ),
    gates=[
        # DIABETIC HISTORY & INSULIN OMISSION (MANDATORY SAFETY)
        InformationGate(
            key="type1_insulin_omission",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["diabetes", "type 1", "insulin", "injections", "missed", "omitted", "dose", "pens", "medications"],
            response_text="I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
            mandatory_for_safety=True
        ),
        # OSMOTIC SYMPTOMS (POLYURIA / POLYDIPSIA)
        InformationGate(
            key="polyuria_polydipsia",
            category=GateCategory.SOCRATES,
            trigger_concepts=["thirsty", "drinking", "water", "polydipsia", "urine", "peeing", "polyuria", "bathroom"],
            response_text="I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
            mandatory_for_safety=True
        ),
        # ABDOMINAL PAIN & VOMITING
        InformationGate(
            key="abdominal_pain_vomiting",
            category=GateCategory.SOCRATES,
            trigger_concepts=["tummy", "abdomen", "stomach", "cramp", "vomit", "throwing up", "nausea"],
            response_text="I've thrown up more than ten times today—mostly green bile. And my whole tummy is cramping severely with a deep, generalized ache."
        ),
        # KUSSMAUL BREATHING & NEUROLOGICAL RED FLAGS (MANDATORY SAFETY)
        InformationGate(
            key="kussmaul_cerebral_edema",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["breathing", "heavy", "rapid", "deep", "short of breath", "headache", "drowsy", "vision"],
            response_text="I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
            mandatory_for_safety=True
        ),
        # PRECIPITATING INFECTION / ILLNESS
        InformationGate(
            key="precipitating_infection",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["infection", "fever", "cough", "urine burn", "cold", "flu", "diarrhea", "wound"],
            response_text="It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm."
        ),
        # ICE
        InformationGate(
            key="ice_ideas_fears",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "fear", "thoughts", "afraid"],
            response_text="I feel so exhausted, doctor... I feel like my body is shutting down. Is this ketoacidosis? I heard in diabetic clinic that ketoacidosis can put you in a coma."
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "drip", "fluids", "insulin"],
            response_text="Can you put me on a saline drip right away to stop this awful thirst?"
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency STAT Venous Blood Gas & Metabolic Panel",
        description="The point-of-care venous blood gas (VBG) and capillary ketone analyzer results arrive.",
        findings={
            "Venous Blood Gas (VBG)": "pH 7.11 (Severe uncompensated metabolic acidosis), HCO3 8.6 mmol/L, pCO2 22 mmHg (Respiratory compensation), Base Excess -18.4 mmol/L.",
            "Capillary Blood Ketones": "6.4 mmol/L (Severe hyperketonemia, diagnostic cutoff > 3.0 mmol/L).",
            "Capillary Blood Glucose": "29.2 mmol/L (Severe hyperglycemia).",
            "Serum Electrolytes": "Sodium 131 mmol/L, Potassium 4.9 mmol/L, Chloride 96 mmol/L, Anion Gap 26.4 mmol/L (High Anion Gap Metabolic Acidosis)."
        },
        expected_shifts={
            "Severe Diabetic Ketoacidosis (DKA) triggered by insulin omission and gastroenteritis": 2, # Strongly confirmed
            "Hyperosmolar Hyperglycemic State (HHS)": -2, # Ruled out (HHS occurs in older T2D with pH > 7.30 and mild/absent ketones)
            "Acute Surgical Peritonitis / Appendicitis": -2, # Abdominal pain is secondary to ketoacidosis (pseudoperitonitis)
            "Lactic Acidosis / Sepsis": -1
        },
        expert_rationale=(
            "The clinical and laboratory findings satisfy the definitive diagnostic triad of Diabetic Ketoacidosis: "
            "1. Hyperglycemia (29.2 mmol/L), 2. Ketosis (blood ketones 6.4 mmol/L), 3. Acidosis (pH 7.11, HCO3 8.6 mmol/L). "
            "Although serum potassium is currently 4.9 mmol/L, insulin deficiency and extracellular shift mask SEVERE TOTAL BODY POTASSIUM DEPLETION. "
            "Administering insulin will drive potassium into cells, precipitating fatal cardiac arrhythmias unless potassium is replenished proactively."
        )
    ),
    differentials=[
        Differential(
            name="Severe Diabetic Ketoacidosis (DKA)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Known Type 1 Diabetes with 48h insulin omission", "Classic osmotic symptoms (polyuria, polydipsia)", "Kussmaul breathing with sweet acetone breath", "Diagnostic triad: glucose 29.2, ketones 6.4, pH 7.11 with HCO3 8.6"],
            refuting_features=[],
            prior_probability=0.90,
            posterior_probability=0.99
        ),
        Differential(
            name="Hyperosmolar Hyperglycemic State (HHS)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Severe hyperglycemia and dehydration"],
            refuting_features=["HHS typically occurs in elderly Type 2 diabetics without significant acidosis (pH > 7.30, HCO3 > 18) or heavy ketosis"],
            prior_probability=0.08,
            posterior_probability=0.01
        ),
        Differential(
            name="Acute Surgical Abdomen (Appendicitis / Perforation)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Severe abdominal cramping and vomiting"],
            refuting_features=["Abdominal pain is a classic non-surgical manifestation of severe ketoacidosis (ileus/pseudoperitonitis) that resolves with rehydration and insulin"],
            prior_probability=0.02,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second SBAR appraisal and primary working diagnosis to the Consultant Endocrinologist.",
            target_rubric="SBAR: 19yo male with Type 1 Diabetes presenting with severe DKA triggered by insulin omission during gastroenteritis, with Kussmaul respiration, pH 7.11, ketones 6.4, glucose 29.2, and estimated 5-6L fluid deficit.",
            max_marks=10,
            key_points_required=["19yo male with known Type 1 Diabetes", "Precipitating cause: insulin omission during intercurrent viral gastroenteritis", "Severe clinical DKA with dehydration and Kussmaul breathing", "Confirmed diagnostic triad: Hyperglycemia (29.2), Ketosis (6.4), Acidosis (pH 7.11, HCO3 8.6)"]
        ),
        VivaQuestion(
            prompt="What is your immediate fluid resuscitation protocol and critical potassium replacement rule?",
            target_rubric="IV 0.9% Normal Saline (1L over 1h, then 1L over 2h, then 1L over 2h with KCl); NEVER administer insulin without knowing potassium level; add 20-40 mmol/L KCl into fluids once potassium drops < 5.5 mmol/L.",
            max_marks=10,
            key_points_required=["Immediate aggressive crystalloid resuscitation: 1L 0.9% Normal Saline in 1st hour", "Assess total fluid deficit (typically 5 to 7 liters)", "Critical Potassium Rule: Do NOT start insulin if K+ < 3.5 mmol/L until repleted", "Add 20-40 mmol KCl per liter of IV fluid once K+ < 5.5 mmol/L (to anticipate massive intracellular shift)", "Continuous cardiac telemetry monitoring"]
        ),
        VivaQuestion(
            prompt="Outline your insulin administration protocol and when you must add 10% Dextrose.",
            target_rubric="Fixed Rate Intravenous Insulin Infusion (FRIII) at 0.1 units/kg/h; continue long-acting basal insulin; start 10% Dextrose (125 mL/h) alongside saline once blood glucose drops < 14 mmol/L to allow continued insulin clearance of ketones without causing hypoglycemia; monitor for cerebral edema.",
            max_marks=10,
            key_points_required=["Fixed Rate IV Insulin Infusion (FRIII) at 0.1 units/kg/hour", "Continue patient's background long-acting basal insulin (e.g. Lantus/Degludec)", "Target reduction: blood ketones drop by 0.5 mmol/L/h, glucose drop 3 mmol/L/h", "Add 10% Dextrose when blood glucose falls below 14 mmol/L (prevents hypoglycemia while continuing insulin to clear ketoacidosis)", "Vigilance for Cerebral Edema (headache, bradycardia, falling GCS; treat with IV Mannitol or 3% Hypertonic Saline)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Stopping Insulin When Glucose Falls < 14 While Ketones Persist",
            trigger_keywords=['stop insulin', 'stop the insulin', 'stopping insulin', 'stop the infusion', 'switch off insulin'],
            description="Turning off the insulin infusion because blood sugar has normalized, even though the patient remains in ketoacidosis.",
            trigger_condition="Candidate stops insulin when glucose drops, instead of adding 10% dextrose.",
            remediation_advice="INSULIN CLEARS KETONES, NOT JUST GLUCOSE. When blood glucose drops < 14 mmol/L, keep the insulin infusion running and run 10% Dextrose alongside it until the blood ketones drop < 0.6 mmol/L and venous pH > 7.30."
        ),
        CognitiveTrap(
            trap_name="The 'Sick Day Rules' Knowledge Deficit",
            missed_gate_keys=['type1_insulin_omission'],
            description="Failing to educate the patient that insulin requirements actually INCREASE during acute illness.",
            trigger_condition="Candidate overlooks patient counseling on diabetic sick day rules.",
            remediation_advice="Never stop insulin during intercurrent illness! Infection releases counter-regulatory stress hormones (cortisol, adrenaline) that increase insulin resistance. Patients must check ketones and take supplemental rapid-acting insulin."
        )
    ]
)
