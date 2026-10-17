"""
gastro_upper_gi.py: Acute Upper GI Bleeding in Cirrhosis (Variceal Bleed vs Peptic Ulcer).
Tests restrictive transfusion principles, vasoactive therapy (Terlipressin), and urgent endoscopic escalation.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_GASTRO_UPPER_GI = OSCECase(
    case_id="gastro_05",
    specialty="Gastroenterology / Emergency Medicine",
    title="Massive Upper Gastrointestinal Bleed in a 58-Year-Old Male",
    brief=CandidateBrief(
        setting="Emergency Department Resuscitation Bay",
        patient_name="Robert Chen",
        age=58,
        gender="Male",
        occupation="Retired Warehouse Supervisor",
        presenting_complaint="Vomiting large volumes of fresh red blood and dark stools for 6 hours",
        triage_vitals={
            "Heart Rate": "122 bpm (Sinus tachycardia)",
            "Blood Pressure": "86/52 mmHg (Hypotensive)",
            "Respiratory Rate": "24 /min",
            "Oxygen Saturation": "96% on room air",
            "Temperature": "36.2°C",
            "GCS": "14/15 (Mildly lethargic)"
        },
        instructions=(
            "You are the Emergency Medical Registrar. Take a rapid 7-minute history from Robert. "
            "Quantify blood loss, screen for underlying chronic liver disease and coagulopathy, "
            "and address resuscitation priorities. You will then present your emergency plan to the Consultant."
        )
    ),
    persona=PatientPersona(
        name="Robert Chen",
        voice_id="en-SG-WayneNeural",
        speech_rate="-10%",
        pain_level=6,
        temperament="lethargic",
        behavioral_cues=[
            "Pale, cool clammy skin, jaundiced sclera",
            "Weak, hoarse voice, dry oral mucous membranes",
            "Mild flap / asterixis noticeable when arms are extended"
        ]
    ),
    gates=[
        # NATURE & QUANTITY OF BLEEDING
        InformationGate(
            key="hematemesis_volume",
            category=GateCategory.SOCRATES,
            trigger_concepts=["vomit", "blood", "how much", "cup", "bowl", "fresh", "clots", "coffee ground", "hematemesis"],
            response_text="I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably."
        ),
        InformationGate(
            key="melena_stools",
            category=GateCategory.SOCRATES,
            trigger_concepts=["stool", "bowel", "poop", "black", "tarry", "melena", "dark"],
            response_text="Yes, yesterday my stools turned pitch black, foul-smelling, and sticky like road tar. I went three times."
        ),
        # RED FLAGS & HEMODYNAMIC COLLAPSE (MANDATORY SAFETY)
        InformationGate(
            key="syncope_shock",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["faint", "pass out", "collapse", "dizzy", "blackout", "postural", "syncope"],
            response_text="When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="chronic_liver_alcohol",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["alcohol", "drink", "beer", "whisky", "cirrhosis", "liver", "hepatitis", "jaundice"],
            response_text="I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="nsaids_anticoagulants",
            category=GateCategory.DRUG_HISTORY,
            trigger_concepts=["painkillers", "nsaids", "aspirin", "ibuprofen", "blood thinners", "warfarin", "medications"],
            response_text="I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="encephalopathy_confusion",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["confusion", "sleep", "memory", "day night", "orientation", "flapping"],
            response_text="My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days."
        ),
        # ICE
        InformationGate(
            key="ice_ideas_concerns",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "fear", "thoughts", "afraid"],
            response_text="Doctor... am I going to bleed to death? I know my drinking caused this, and I feel terribly guilty. I just want to survive to see my son graduate university next year."
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "transfusion", "blood", "camera"],
            response_text="Do I need a blood transfusion right now? Will you put a camera down my stomach to seal the bleed?"
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="STAT Resus Blood Panel & Liver Function Test",
        description="Emergency laboratory results return from the hospital laboratory.",
        findings={
            "Full Blood Count": "Hemoglobin 6.7 g/dL (Severe anemia), Platelets 54,000 /mcL (Thrombocytopenia).",
            "Coagulation Profile": "Prothrombin Time (PT) 22.4s, INR 1.95 (Severe coagulopathy).",
            "Renal Panel": "Urea 19.8 mmol/L, Creatinine 88 mcmol/L (Urea-to-Creatinine ratio > 200 confirming massive upper GI blood breakdown).",
            "Liver Function": "Total Bilirubin 62 mcmol/L, Albumin 24 g/L."
        },
        expected_shifts={
            "Bleeding Esophageal / Gastric Varices secondary to Portal Hypertension": 2, # Strongly supported
            "Bleeding Peptic Ulcer Disease (NSAID-induced)": 1, # Co-existing etiology
            "Lower GI Hemorrhage (Diverticular / Colonic)": -2, # Ruled out by hematemesis and high urea ratio
            "Mallory-Weiss Tear": -2 # Bleeding is far too massive and persistent for simple mucosal tear
        },
        expert_rationale=(
            "The combination of massive hematemesis, signs of decompensated alcoholic cirrhosis (coagulopathy, thrombocytopenia, jaundice), "
            "and profound hemodynamic shock confirms Acute Variceal Hemorrhage (or severe peptic ulcer). "
            "Resuscitation must adopt a RESTRICTIVE blood transfusion strategy (target Hb 7.0-8.0 g/dL) because over-transfusion raises portal venous pressure and causes fatal rebound hemorrhage."
        )
    ),
    differentials=[
        Differential(
            name="Acute Esophageal / Gastric Variceal Hemorrhage",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Massive painless hematemesis with clots", "History of chronic alcohol excess and cirrhosis", "Thrombocytopenia (splenomegaly/hypersplenism)", "Elevated INR", "High urea:creatinine ratio"],
            refuting_features=[],
            prior_probability=0.70,
            posterior_probability=0.85
        ),
        Differential(
            name="Bleeding Peptic Ulcer Disease (Gastric / Duodenal)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["High-dose daily NSAID use (Ibuprofen) for 2 months", "Melena and hematemesis"],
            refuting_features=["Patient has known portal hypertension; varices remain primary suspect, though dual pathology is possible"],
            prior_probability=0.25,
            posterior_probability=0.15
        ),
        Differential(
            name="Lower Gastrointestinal Hemorrhage",
            tier=DifferentialTier.UNLIKELY,
            supporting_features=["Melena"],
            refuting_features=["Frank hematemesis of 2 basins and elevated blood urea definitively confirm an upper GI source proximal to ligament of Treitz"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second SBAR appraisal to the Gastroenterology Consultant on-call.",
            target_rubric="SBAR presentation: 58yo male with alcoholic cirrhosis presenting with life-threatening upper GI bleed, hemorrhagic shock (BP 86/52, HR 122), Hb 6.7, and coagulopathy.",
            max_marks=10,
            key_points_required=["58yo male with chronic alcoholic liver disease", "Massive hematemesis and melena with syncope", "Hemodynamic instability / Class III hemorrhagic shock (BP 86/52, HR 122)", "Working diagnosis: Acute Variceal Hemorrhage vs Bleeding Peptic Ulcer"]
        ),
        VivaQuestion(
            prompt="What is your immediate resuscitation protocol and transfusion target threshold?",
            target_rubric="Two large-bore 16G IV cannulae, blood crossmatch 4 units, RESTRICTIVE transfusion strategy (target Hb 7-8 g/dL), correct coagulopathy with FFP/Platelets, reversal of hypothermia.",
            max_marks=10,
            key_points_required=["Two large-bore peripheral cannulae (14G or 16G) or central venous access", "Crossmatch 4-6 units packed red blood cells", "RESTRICTIVE transfusion strategy (Target Hemoglobin 7.0 - 8.0 g/dL)", "Explain rationale: avoiding over-transfusion which elevates portal pressure and worsens variceal bleeding", "Correct severe coagulopathy (FFP, Platelets, Vitamin K)"]
        ),
        VivaQuestion(
            prompt="What pharmacological triad will you start immediately, and what is the definitive intervention?",
            target_rubric="1. Vasoactive drug (Terlipressin 2mg IV or Octreotide); 2. Prophylactic antibiotic (Ceftriaxone 1g IV); 3. High-dose IV PPI (Pantoprazole); Definitive: Urgent Endoscopy (OGD) within 12 hours for band ligation.",
            max_marks=10,
            key_points_required=["Vasoactive therapy: IV Terlipressin (2mg IV bolus) or Somatostatin/Octreotide", "Antibiotic prophylaxis: IV Ceftriaxone 1g (reduces mortality and spontaneous bacterial peritonitis in cirrhotics)", "IV Proton Pump Inhibitor (Pantoprazole/Omeprazole 80mg bolus + 8mg/h infusion)", "Urgent Gastroscopy / OGD within 12 hours (Endoscopic Band Ligation or sclerotherapy)", "Balloon tamponade (Sengstaken-Blakemore tube) on standby for refractory exsanguination"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="The Over-Transfusion Trap ('Normalizing' Hemoglobin to > 10 g/dL)",
            trigger_keywords=['above 10', 'over 10', '> 10', 'hb 10', 'hb of 10', 'normalise', 'normalize', 'liberal transfusion'],
            description="Transfusing blood aggressively to reach normal hemoglobin levels in a cirrhotic patient.",
            trigger_condition="Candidate sets a transfusion target of Hb > 9 or 10 g/dL.",
            remediation_advice="Groundbreaking RCT evidence (Villanueva et al., NEJM) proved that liberal transfusion (Hb > 9) significantly INCREASES mortality and re-bleeding rates by raising portal hydrostatic pressure and disrupting clot formation. Target strictly Hb 7-8 g/dL."
        ),
        CognitiveTrap(
            trap_name="Omission of Prophylactic Antibiotics in Cirrhotic Bleed",
            absent_keywords=['antibiotic', 'ceftriaxone', 'co-amoxiclav', 'tazocin', 'piperacillin', 'ciprofloxacin', 'quinolone'],
            description="Focusing solely on blood and PPIs while forgetting prophylactic IV antibiotics.",
            trigger_condition="Candidate fails to order IV Ceftriaxone.",
            remediation_advice="Cirrhotic patients undergoing GI bleeds have severe bacterial translocation. Prophylactic Ceftriaxone reduces bacteremia, SBP, re-bleeding, and all-cause mortality."
        )
    ]
)
