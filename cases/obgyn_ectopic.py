"""
obgyn_ectopic.py: Acute Early Pregnancy Pelvic Pain (Ruptured Ectopic Pregnancy vs Miscarriage).
Enforces mandatory beta-hCG testing, recognition of referred shoulder tip pain (hemoperitoneum), and Anti-D prophylaxis.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_OBGYN_ECTOPIC = OSCECase(
    case_id="obgyn_06",
    specialty="Obstetrics & Gynecology / Emergency Medicine",
    title="Acute Left Iliac Fossa Pain & Spotting in a 26-Year-Old Woman",
    brief=CandidateBrief(
        setting="Early Pregnancy Assessment Unit (EPAU) / ED",
        patient_name="Chloe Lim",
        age=26,
        gender="Female",
        occupation="Primary School Teacher",
        presenting_complaint="Severe sharp left lower abdominal pain and dark vaginal spotting for 8 hours",
        triage_vitals={
            "Heart Rate": "108 bpm",
            "Blood Pressure": "98/64 mmHg",
            "Respiratory Rate": "20 /min",
            "Oxygen Saturation": "98% on room air",
            "Temperature": "37.0°C",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Gynecology Resident on-call. Take a 7-minute focused history from Chloe. "
            "Determine her menstrual history, assess hemodynamic stability, and screen for surgical emergencies. "
            "An interim bedside scan will arrive, followed by your presentation to the Consultant."
        )
    ),
    persona=PatientPersona(
        name="Chloe Lim",
        voice_id="en-SG-LunaNeural", # Singapore female voice
        speech_rate="-5%",
        pain_level=8,
        temperament="distressed",
        behavioral_cues=[
            "Curled up on the examination couch, guarding her left lower quadrant",
            "Pale, anxious, clutching a tissue",
            "Frightened that she is losing a deeply desired pregnancy"
        ]
    ),
    gates=[
        # MENSTRUAL HISTORY & LMP (MANDATORY SAFETY)
        InformationGate(
            key="lmp_pregnancy_status",
            category=GateCategory.SOCRATES,
            trigger_concepts=["period", "last menstrual period", "lmp", "pregnant", "pregnancy test", "missed period", "cycle", "bleeding"],
            response_text="My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
            mandatory_for_safety=True
        ),
        # PAIN CHARACTERISTICS
        InformationGate(
            key="pain_location_severity",
            category=GateCategory.SOCRATES,
            trigger_concepts=["where", "describe", "sharp", "cramping", "scale", "severity", "pain score", "stabbing"],
            response_text="It's a vicious, stabbing, constant pain located deep on the left side of my lower tummy. On a scale of 1 to 10, it's definitely an 8. It started as a dull ache yesterday and suddenly became excruciating this morning."
        ),
        InformationGate(
            key="vaginal_bleeding",
            category=GateCategory.SOCRATES,
            trigger_concepts=["bleeding", "spotting", "pads", "clots", "color", "brown", "red"],
            response_text="It's dark brownish spotting, like prune juice. Not heavy like a normal period—just enough to soak two pantyliners, but with small dark specks."
        ),
        # CRITICAL RED FLAGS (HEMOPERITONEUM / RUPTURE)
        InformationGate(
            key="shoulder_tip_pain",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["shoulder", "shoulder tip", "neck", "collarbone", "referred pain"],
            response_text="Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="syncope_dizziness",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["dizzy", "lightheaded", "faint", "pass out", "collapse", "blackout"],
            response_text="When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="tenesmus_rectal",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["bowel", "poop", "rectal", "pressure", "tenesmus", "toilet"],
            response_text="I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
            mandatory_for_safety=True
        ),
        # RISK FACTORS (PID, TUBAL SURGERY)
        InformationGate(
            key="risk_factors_pid",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["infection", "chlamydia", "gonorrhea", "pid", "pelvic infection", "stis", "coil", "iud", "ivf"],
            response_text="Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
            mandatory_for_safety=True
        ),
        # ICE
        InformationGate(
            key="ice_ideas_concerns",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "fear", "thoughts", "afraid"],
            response_text="My husband and I have been actively trying to conceive for over a year and a half. I'm terrified that this means I'm having a miscarriage, or that something is dangerously wrong with my ovaries."
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "ultrasound", "scan", "save"],
            response_text="Can you do an ultrasound to see if the baby is still inside my womb? Please do everything you can to save my fertility."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency Bedside Transvaginal Ultrasound (TVS) Result",
        description="The gynecologist performs an immediate point-of-care transvaginal ultrasound in the EPAU bay.",
        findings={
            "Uterine Cavity": "Empty uterus with decidual cast reaction (endometrial thickness 14 mm). No intrauterine gestational sac identified.",
            "Left Adnexa": "3.4 cm complex, heterogenous adnexal mass with high-velocity peripheral vascular ring ('ring of fire') within the left fallopian tube.",
            "Free Fluid": "Significant hypoechoic free fluid in the Pouch of Douglas and extending into the perihepatic space (Morison's pouch), consistent with active hemoperitoneum."
        },
        expected_shifts={
            "Ruptured Tubal Ectopic Pregnancy": 2, # Strongly confirmed surgical emergency
            "Threatened / Incomplete Miscarriage": -2, # Ruled out by empty uterus and adnexal mass with hemoperitoneum
            "Ovarian Cyst Torsion": -1, # Unlikely given tubal mass and positive pregnancy
            "Acute Appendicitis": -2 # Ruled out (left-sided, positive beta-hCG, free blood)
        },
        expert_rationale=(
            "The combination of 6 weeks amenorrhea, positive pregnancy test, severe unilateral pain, referred shoulder tip pain, "
            "and ultrasound evidence of an empty uterus, complex left tubal mass, and free fluid in Morison's pouch definitively establishes "
            "a Ruptured Tubal Ectopic Pregnancy with hemoperitoneum. This is a life-threatening surgical emergency requiring immediate laparoscopy."
        )
    ),
    differentials=[
        Differential(
            name="Ruptured Left Tubal Ectopic Pregnancy with Hemoperitoneum",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["6 weeks amenorrhea, positive beta-hCG", "Unilateral LIF stabbing pain with spotting", "Referred shoulder tip pain (diaphragmatic blood)", "Syncope / hemodynamic instability", "Prior PID history", "Empty uterus + complex adnexal mass + free fluid"],
            refuting_features=[],
            prior_probability=0.75,
            posterior_probability=0.99
        ),
        Differential(
            name="Threatened or Incomplete Miscarriage",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Early pregnancy bleeding and lower abdominal cramping"],
            refuting_features=["Pain is strictly lateralized, presence of shoulder tip pain, TVS shows empty uterus and prominent tubal mass"],
            prior_probability=0.20,
            posterior_probability=0.01
        ),
        Differential(
            name="Ruptured Corpus Luteum Cyst or Ovarian Torsion",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Acute pelvic pain and free fluid"],
            refuting_features=["Does not explain adnexal tubal mass and positive pregnancy test"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second SBAR synthesis and primary diagnosis to the Gynecology Consultant.",
            target_rubric="SBAR: 26yo female, 6 weeks amenorrhea, positive pregnancy test, prior PID, presenting with acute left iliac fossa pain, shoulder tip pain, syncope, and ultrasound confirming ruptured ectopic pregnancy with hemoperitoneum.",
            max_marks=10,
            key_points_required=["26yo female, 6 weeks gestation, prior PID risk factor", "Presents with classic triad: amenorrhea, unilateral pelvic pain, vaginal spotting", "Signs of hemoperitoneum: shoulder tip pain, presyncope, tachycardia, free fluid in Morison's pouch", "Primary diagnosis: Ruptured Ectopic Pregnancy"]
        ),
        VivaQuestion(
            prompt="Is this patient eligible for medical management with Methotrexate? Justify your decision.",
            target_rubric="NO, strictly contraindicated. Indications for emergency surgical intervention include: hemodynamic instability, severe pain, free fluid/rupture, adnexal mass > 3.5cm, or beta-hCG > 5000.",
            max_marks=10,
            key_points_required=["Contraindicated for Methotrexate", "Justification: signs of rupture / hemoperitoneum (shoulder tip pain, free fluid)", "Hemodynamic borderline stability (HR 108, BP 98/64)", "Requires immediate emergency operative intervention (Laparoscopic Salpingectomy)"]
        ),
        VivaQuestion(
            prompt="Outline your immediate preoperative resus protocol and essential hematological testing.",
            target_rubric="Two 16G IV cannulae, fluid bolus, group and save / crossmatch 2 units, baseline FBC, Coagulation, Serum beta-hCG, emergency theatre booking for laparoscopy, and RHESUS STATUS with Anti-D Immunoglobulin if Rh-negative.",
            max_marks=10,
            key_points_required=["Two large-bore IV access and crossmatch 2-4 units", "NPO / fasting for emergency laparoscopy (Salpingectomy)", "Baseline serum beta-hCG level", "Mandatory Rhesus typing and administration of Anti-D Immunoglobulin if Rhesus negative", "Empathetic fertility and bereavement counseling"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Omitting Pregnancy Test in Women of Childbearing Age",
            description="Treating pelvic pain as UTI, gastroenteritis, or muscular strain without performing an immediate urine or serum pregnancy test.",
            trigger_condition="Candidate fails to verify pregnancy status in a 26-year-old woman with abdominal pain.",
            remediation_advice="RULE OF THUMB IN ACUTE CARE: Every female patient of reproductive age presenting with lower abdominal or pelvic pain is pregnant with an ectopic pregnancy until a beta-hCG test proves otherwise."
        ),
        CognitiveTrap(
            trap_name="Missing the Significance of Shoulder Tip Pain",
            description="Dismissing shoulder ache as unrelated musculoskeletal posture pain.",
            trigger_condition="Candidate ignores or fails to explore shoulder tip pain.",
            remediation_advice="Shoulder tip pain (Kehr's sign) indicates blood in the peritoneal cavity irritating the phrenic nerve (C3-C5), which shares dermatomes with the supraclavicular nerves. It is a hallmark of intraperitoneal rupture."
        )
    ]
)
