"""
orthopedics_cauda.py: Acute Low Back Pain in an Athlete (Disc Herniation vs Cauda Equina Syndrome).
Highlights mandatory red-flag safety screening (saddle anesthesia, bladder retention) and surgical emergency escalation.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_ORTHOPEDICS_CAUDA = OSCECase(
    case_id="ortho_02",
    specialty="Orthopedics / Spine Surgery",
    title="Acute Lumbar Pain with Radiculopathy in a 32-Year-Old Athlete",
    brief=CandidateBrief(
        setting="Orthopedic Acute Triage Clinic",
        patient_name="Marcus Lee",
        age=32,
        gender="Male",
        occupation="Strength Coach & BJJ Competitor",
        presenting_complaint="Severe lower back pain radiating down the left leg for 24 hours",
        triage_vitals={
            "Heart Rate": "82 bpm",
            "Blood Pressure": "128/78 mmHg",
            "Respiratory Rate": "16 /min",
            "Oxygen Saturation": "99% on room air",
            "Temperature": "36.7°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Orthopedic House Officer / Resident. Take a 7-minute history from Marcus. "
            "Characterize his symptoms, perform mandatory neurological safety screening, and address his expectations. "
            "You will then present your clinical appraisal and management decisions to the Consultant."
        )
    ),
    persona=PatientPersona(
        name="Marcus Lee",
        voice_id="en-SG-WayneNeural",
        speech_rate="+0%",
        pain_level=7,
        temperament="stoic",
        behavioral_cues=[
            "Standing awkwardly, shifting weight onto his right leg",
            "Winces when attempting to sit down in the chair",
            "Frustrated that an injury might derail his upcoming competition"
        ]
    ),
    gates=[
        # SOCRATES
        InformationGate(
            key="site_onset",
            category=GateCategory.SOCRATES,
            trigger_concepts=["where", "start", "onset", "how did it happen", "injury", "deadlift", "mechanism"],
            response_text="It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm."
        ),
        InformationGate(
            key="radiation",
            category=GateCategory.SOCRATES,
            trigger_concepts=["radiate", "shoot", "down the leg", "thigh", "calf", "foot", "sciatica"],
            response_text="Yes, it's shooting down my left buttock, through the back of my thigh, into the outside of my calf and all the way to my little toe. It feels like an electric shock."
        ),
        InformationGate(
            key="exacerbating_relieving",
            category=GateCategory.SOCRATES,
            trigger_concepts=["worse", "better", "cough", "sneeze", "sitting", "walking", "bending"],
            response_text="Sitting is agonizing; standing and pacing is slightly more bearable. When I sneezed this morning, a vicious jolt shot straight down my leg."
        ),
        # MANDATORY RED FLAGS (CAUDA EQUINA SYNDROME)
        InformationGate(
            key="red_flag_bladder",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["urinate", "urine", "bladder", "peeing", "water", "incontinence", "flow", "retention", "stream", "hesitancy"],
            response_text="Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_saddle",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["numb", "saddle", "perineum", "wiping", "toilet paper", "groin", "genitals", "buttocks"],
            response_text="Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_bowel",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["bowel", "stool", "feces", "poop", "accident", "soiling", "anal control"],
            response_text="I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_motor_weakness",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["weakness", "trip", "tripping", "foot drop", "heel", "toe", "power", "limp"],
            response_text="My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="red_flag_fever_weightloss",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["fever", "chills", "sweats", "weight loss", "cancer", "malignancy", "night pain"],
            response_text="No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
            mandatory_for_safety=False
        ),
        # ICE (CALGARY-CAMBRIDGE)
        InformationGate(
            key="ice_ideas",
            category=GateCategory.ICE,
            trigger_concepts=["what do you think", "ideas", "cause"],
            response_text="I figured it's just an acute L5/S1 disc bulge or bad facet joint lock. I've had minor back twinges before that resolved in a week."
        ),
        InformationGate(
            key="ice_concerns_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["worried", "concern", "expectations", "goals", "competition", "compete"],
            response_text="My main worry is the Asian Championships in 3 weeks. I've cut weight and trained for 6 months for this. Can't you just give me a high-dose steroid shot or strong analgesics so I can keep training?"
        ),
        # PAST MEDICAL & DRUGS
        InformationGate(
            key="pmhx_drugs",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["past history", "medications", "supplements", "steroids", "illness"],
            response_text="Fit and healthy, no chronic medical conditions. I take creatine, whey protein, and I took 400mg Ibuprofen this morning which barely took the edge off. No known drug allergies."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Bedside Post-Void Bladder Ultrasound Scan",
        description="You perform a quick bedside point-of-care bladder ultrasound immediately after the patient attempts to void.",
        findings={
            "Pre-void bladder volume": "720 mL",
            "Voided volume": "40 mL (weak dribble)",
            "Post-Void Residual (PVR)": "680 mL (Significant painless urinary retention, normal < 50-100 mL)."
        },
        expected_shifts={
            "Cauda Equina Syndrome (CES-R / with retention)": 2, # Strongly confirmed surgical emergency
            "Uncomplicated Lumbar Radiculopathy / Sciatica": -2, # Red flag bladder dysfunction excludes benign treatment
            "Mechanical Musculoskeletal Back Strain": -2 # Ruled out
        },
        expert_rationale=(
            "A post-void residual urine volume > 200 mL in the presence of saddle numbness, bilateral/radicular neurological deficits, "
            "and severe back pain establishes Cauda Equina Syndrome with Retention (CES-R). This is an absolute surgical emergency requiring immediate emergent MRI whole spine and urgent decompression within 24-48 hours to prevent irreversible neurological and sphincter disability."
        )
    ),
    differentials=[
        Differential(
            name="Cauda Equina Syndrome (CES-R secondary to massive central lumbar disc prolapse)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=[
                "Saddle anesthesia (numbness when wiping)",
                "Urinary retention with overflow (PVR 680 mL)",
                "Objective motor weakness (foot drop/L5 weakness)",
                "Radicular pain shooting down S1 dermatome",
                "Acute mechanical trigger (heavy spinal loading in flexion/rotation)"
            ],
            refuting_features=[],
            prior_probability=0.40,
            posterior_probability=0.99
        ),
        Differential(
            name="Uncomplicated Lumbar Disc Herniation (L5/S1 Radiculopathy)",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Dermatomal shooting pain, positive Valsalva jolt"],
            refuting_features=["Cannot account for urinary retention and bilateral saddle anesthesia (involvement of S2-S4 cauda equina roots)"],
            prior_probability=0.55,
            posterior_probability=0.01
        ),
        Differential(
            name="Spinal Epidural Abscess or Hematoma",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Rapid onset cauda equina compression"],
            refuting_features=["Afebrile, no IV drug use, no spinal interventions, normal inflammatory markers"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your clinical synthesis and primary diagnosis in 60 seconds to the Orthopedic Consultant.",
            target_rubric="Clear identification of Cauda Equina Syndrome with urinary retention secondary to acute lumbar disc herniation in a 32yo athlete, highlighting saddle anesthesia and 680mL PVR.",
            max_marks=10,
            key_points_required=["32yo athlete presenting with acute lumbar radiculopathy", "Presence of definitive cauda equina red flags (saddle anesthesia, urinary retention with 680mL PVR, motor weakness)", "Primary diagnosis: Cauda Equina Syndrome with retention (CES-R)", "Recognition as an orthopedic/spinal surgical emergency"]
        ),
        VivaQuestion(
            prompt="What is your immediate diagnostic investigation of choice, and what is the target timeframe?",
            target_rubric="Emergent Non-contrast MRI Whole Spine (or Lumbar Spine) performed within 4 hours.",
            max_marks=10,
            key_points_required=["Emergent MRI Whole Spine (or Lumbar Spine)", "Urgent imaging window (immediately / within 4-6 hours)", "Check for contraindications to MRI (pacemakers, metal foreign bodies)"]
        ),
        VivaQuestion(
            prompt="How will you counsel Marcus regarding his desire to compete in 3 weeks, and what is the operative plan?",
            target_rubric="Firm, empathetic counseling explaining the risk of permanent paralysis and sexual/bladder dysfunction if untreated; strict non-weight bearing, emergent surgical decompression (microdiscectomy/laminectomy).",
            max_marks=10,
            key_points_required=["Break difficult news empathetically but firmly: competition is impossible and unsafe", "Explain permanent risks of non-intervention (permanent urinary/bowel incontinence, loss of sexual function, motor paralysis)", "Immediate pre-op preparation: NPO/fasting, urinary catheterization with careful monitoring, urgent spinal surgery team booking for decompression"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Omission of Cauda Equina Screen in Young Fit Athletes",
            missed_gate_keys=['red_flag_bladder', 'red_flag_saddle'],
            description="Assuming young, heavily muscled athletes only have musculoskeletal strain and failing to directly ask about saddle numbness or bladder control.",
            trigger_condition="Candidate fails to inquire about urine/bowel habits or saddle anesthesia.",
            remediation_advice="EVERY patient with acute back pain and radiculopathy must be asked explicit red-flag questions for cauda equina syndrome. Missing CES can result in permanent catastrophic neurological disability and immediate medicolegal failure."
        ),
        CognitiveTrap(
            trap_name="Compliance Bias / Downplaying Patient Symptoms to Please Them",
            trigger_keywords=['physiotherapy', 'physio', 'send home', 'discharge', 'simple analgesia'],
            description="Agreeing to patient's plea for painkillers or steroid shots to allow them to compete.",
            trigger_condition="Candidate suggests conservative management or injections instead of urgent MRI.",
            remediation_advice="Never compromise patient safety for sports deadlines. Explain the irreversible pathology clearly."
        )
    ]
)
