"""
sg_classics.py: High-Yield Singapore MBBS / OSCE Classic Stations (LKCMedicine, NUS YLLSoM, Duke-NUS).
Includes:
  - id_11: Severe Dengue with Warning Signs / Dengue Shock Syndrome (NSF from Pulau Tekong)
  - gastro_12: Invasive Klebsiella pneumoniae Liver Abscess with Endophthalmitis Risk
  - ent_13: Nasopharyngeal Carcinoma (NPC) with Cranial Nerve VI Palsy & Glue Ear
  - med_14: Exertional Heat Stroke & Rhabdomyolysis (OCS Fast March)
  - surg_15: Acute Mesenteric Ischaemia ('Pain Out of Proportion' in Atrial Fibrillation)
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

# ============================================================================
# CASE 11: SEVERE DENGUE / DENGUE SHOCK SYNDROME (TTSH / NCID)
# ============================================================================
CASE_SG_DENGUE = OSCECase(
    case_id="id_11",
    specialty="Infectious Diseases / Singapore Medicine",
    title="Day 5 Fever Defervescence with Severe Abdominal Pain in a 21yo NSF",
    brief=CandidateBrief(
        setting="Tan Tock Seng Hospital (TTSH) / NCID Screening Centre",
        patient_name="CPL Ryan Teo",
        age=21,
        gender="Male",
        occupation="Full-Time National Serviceman (NSF Infantry)",
        presenting_complaint="Day 5 of high fever (now subsiding), severe continuous abdominal pain, and persistent vomiting",
        triage_vitals={
            "Heart Rate": "116 bpm",
            "Blood Pressure": "96/80 mmHg (Narrowed pulse pressure = 16 mmHg!)",
            "Respiratory Rate": "22 /min",
            "Oxygen Saturation": "98% on room air",
            "Temperature": "37.2°C (Defervescing from 39.8°C yesterday)",
            "Postural BP Drop": "Drops to 82/68 mmHg on standing"
        },
        instructions=(
            "BLITZ MODE: Rapidly screen this 21yo NSF returning from field camp. "
            "Differentiate Dengue from Malaria/Leptospirosis, screen all MOH Dengue Warning Signs, "
            "and recognize the critical defervescence plasma-leakage window."
        )
    ),
    persona=PatientPersona(
        name="Ryan Teo",
        voice_id="en-SG-WayneNeural",
        speech_rate="+5%",
        pain_level=7,
        temperament="exhausted",
        behavioral_cues=[
            "Flush fading on face, generalised blanching macular rash ('islands of white in a sea of red')",
            "Vomited 4 times in the waiting area, clutching his right upper quadrant/epigastrium",
            "Mild gum bleeding noticed after brushing teeth"
        ]
    ),
    gates=[
        InformationGate(
            key="fever_curve_defervescence",
            category=GateCategory.SOCRATES,
            trigger_concepts=["fever", "onset", "when", "days", "temperature", "subsiding", "pattern", "start"],
            response_text="Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker."
        ),
        InformationGate(
            key="warning_abdominal_vomiting",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["abdominal pain", "tummy pain", "stomach pain", "vomit", "vomiting", "persistent vomiting", "nausea", "keep fluids down", "drink"],
            response_text="Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="warning_mucosal_bleeding",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["bleed", "bleeding", "gums", "nosebleed", "epistaxis", "black stool", "melena", "bruise", "rash", "petechiae"],
            response_text="My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="warning_lethargy_postural",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["dizzy", "faint", "standing", "postural", "lethargy", "restless", "drowsy", "urine", "pee"],
            response_text="I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="epi_tekong_leptospirosis_malaria",
            category=GateCategory.SOCIAL_HISTORY,
            trigger_concepts=["camp", "tekong", "jungle", "outfield", "mosquito", "bites", "soil", "river", "water", "travel", "cluster"],
            response_text="I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="pmhx_nsaids_prior_dengue",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["past", "previous dengue", "second time", "meds", "panadol", "ibuprofen", "nsaid", "aspirin"],
            response_text="I had Dengue Serotype 1 when I was 14 years old! So this is my second dengue infection. I only took Panadol—the MO warned us never to take Ibuprofen or Ponstan."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="STAT FBC & Dengue NS1 / IgM / IgG Panel",
        description="Rapid bedside FBC compared with Day 2 polyclinic baseline:",
        findings={
            "Haematocrit (Hct)": "52.5% (Up from 41.0% baseline = >20% haemoconcentration confirming severe plasma leakage!)",
            "Platelet Count": "18,000 /mcL (Dropped rapidly from 110,000 /mcL)",
            "WBC": "2.1 x 10^9/L (Leukopenia)",
            "Dengue Point-of-Care": "NS1 Ag Positive, Dengue IgG Strongly Positive (Secondary Dengue Infection)"
        },
        expected_shifts={
            "Severe Dengue / Compensated Dengue Shock Syndrome (Critical Plasma Leakage Phase)": 2,
            "Uncomplicated Dengue Fever": -2,
            "Plasmodium knowlesi / vivax Malaria": -2,
            "Acute Leptospirosis (Weil's Disease)": -1
        },
        expert_rationale=(
            "Secondary dengue infection (heterotypic antibody-dependent enhancement) entering the Critical Phase at defervescence (Day 5). "
            "Narrowed pulse pressure (96/80 = 16 mmHg, threshold <=20 mmHg) + >20% haematocrit rise (41% -> 52.5%) + warning signs (abdominal pain, persistent vomiting, mucosal bleeding) "
            "confirms Compensated Dengue Shock Syndrome. Immediate titrated isotonic crystalloid resuscitation (5-7 mL/kg/h) tracking Hct is required—NOT blind prophylactic platelet transfusion!"
        )
    ),
    differentials=[
        Differential(
            name="Severe Dengue / Compensated Dengue Shock Syndrome (Critical Phase)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Secondary dengue (antibody-dependent enhancement)", "Defervescence Day 5 deterioration", "Narrow pulse pressure <20 mmHg (96/80)", "Haemoconcentration >20% (Hct 52.5%)", "Warning signs: severe abdominal pain, persistent vomiting, gum bleeding"],
            refuting_features=[],
            prior_probability=0.80,
            posterior_probability=0.99
        ),
        Differential(
            name="Malaria (Plasmodium knowlesi / vivax acquired in Tekong)",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Outfield jungle training in Pulau Tekong with mosquito exposure, fever + thrombocytopenia"],
            refuting_features=["NS1 positive, classic sea-of-red rash and haemoconcentration; still send blood film for malaria parasites to exclude co-infection"],
            prior_probability=0.12,
            posterior_probability=0.01
        ),
        Differential(
            name="Acute Melioidosis or Leptospirosis",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Military outfield exposure in Singapore"],
            refuting_features=["No soil inoculation pneumonia or freshwater immersion; positive Dengue NS1"],
            prior_probability=0.08,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Summarize the diagnosis and list the MOH Dengue Warning Signs present in this patient.",
            target_rubric="21yo NSF with Secondary Dengue in the Critical Phase with Compensated Dengue Shock (pulse pressure 16 mmHg). Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, postural hypotension/lethargy, rising Hct with rapid platelet drop.",
            max_marks=10,
            key_points_required=["Secondary Dengue / Compensated Dengue Shock Syndrome", "Critical defervescence phase (Day 5)", "Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy", "Haemoconcentration (rising Hct 52.5%) and narrowed pulse pressure <=20 mmHg"]
        ),
        VivaQuestion(
            prompt="How will you manage his fluid resuscitation, and will you transfuse platelets right now for his platelet count of 18,000?",
            target_rubric="Titrated IV isotonic crystalloid (0.9% NaCl or Hartmann's at 5-7 mL/kg/h for 1-2h, then step down to 3-5 mL/kg/h guided by serial Hct and urine output 0.5-1 mL/kg/h). DO NOT give prophylactic platelet transfusion (causes fluid overload without reducing bleeding unless severe active major haemorrhage).",
            max_marks=10,
            key_points_required=["Titrated IV isotonic crystalloid (0.9% Saline / Hartmann's) guided by serial Haematocrit", "Avoid excessive hypotonic fluids (worsens third-space pleural/ascitic effusions)", "NO prophylactic platelet transfusion despite platelets 18k", "Rationale: RCTs (ARCH trial in SG) show prophylactic platelets do not prevent bleeding and increase fluid overload/pulmonary oedema", "Strict avoidance of NSAIDs/Aspirin and IM injections"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="False Reassurance When Fever Drops ('Fever Down = Patient Recovering')",
            description="Assuming the patient is recovering on Day 4-6 because their temperature normalized.",
            trigger_condition="Candidate fails to recognize that defervescence is the most dangerous 24-48h window for capillary plasma leakage.",
            remediation_advice="In Dengue, the Critical Phase begins right when the fever subsides (Day 4-6). Always check for narrowed pulse pressure (<20 mmHg) and rising Haematocrit."
        ),
        CognitiveTrap(
            trap_name="Reflexive Prophylactic Platelet Transfusion",
            description="Ordering platelet transfusions simply because platelets dropped below 20,000 /mcL.",
            trigger_condition="Candidate orders prophylactic platelets without active major bleeding.",
            remediation_advice="The landmark Singapore-led ARCH trial demonstrated that prophylactic platelet transfusion in dengue does NOT reduce clinical bleeding and significantly increases transfusion reactions and fluid overload."
        )
    ]
)

# ============================================================================
# CASE 12: INVASIVE KLEBSIELLA LIVER ABSCESS SYNDROME (NUH / SGH)
# ============================================================================
CASE_SG_KLEBSIELLA = OSCECase(
    case_id="gastro_12",
    specialty="Gastroenterology / Hepatobiliary (SG Classic)",
    title="High Swinging Fever, RUQ Pain & Blurry Vision in a 62yo Diabetic",
    brief=CandidateBrief(
        setting="National University Hospital (NUH) Emergency Department",
        patient_name="Mdm Siti Aminah",
        age=62,
        gender="Female",
        occupation="Homemaker",
        presenting_complaint="5 days of high spiking fevers with rigors, dull right upper abdominal ache, and new blurred vision in the right eye",
        triage_vitals={
            "Heart Rate": "114 bpm",
            "Blood Pressure": "106/64 mmHg",
            "Respiratory Rate": "20 /min",
            "Oxygen Saturation": "97% on room air",
            "Temperature": "39.4°C",
            "Capillary Blood Glucose": "21.8 mmol/L"
        },
        instructions=(
            "BLITZ MODE: Evaluate this 62yo diabetic woman with fever and RUQ pain. "
            "Uncover the classic East/Southeast Asian hypervirulent syndrome and screen for metastatic septic complications."
        )
    ),
    persona=PatientPersona(
        name="Mdm Siti Aminah",
        voice_id="en-SG-LunaNeural",
        speech_rate="-5%",
        pain_level=6,
        temperament="unwell",
        behavioral_cues=[
            "Shivering with rigors, holding her right subcostal margin",
            "Right eye appears injected (red) with decreased visual acuity",
            "Not overtly jaundiced"
        ]
    ),
    gates=[
        InformationGate(
            key="ruq_fever_rigors",
            category=GateCategory.SOCRATES,
            trigger_concepts=["pain", "where", "fever", "chills", "rigors", "right upper", "liver", "onset"],
            response_text="For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening."
        ),
        InformationGate(
            key="endophthalmitis_eye_red_flag",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["eye", "vision", "blur", "blurry", "blind", "floaters", "red eye", "sight"],
            response_text="Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="cns_meningitis_pulmonary",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["headache", "neck stiffness", "confusion", "cough", "breathless", "chest"],
            response_text="I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="charcot_jaundice_biliary",
            category=GateCategory.SOCRATES,
            trigger_concepts=["jaundice", "yellow", "dark urine", "tea", "pale stool", "gallstones", "travel", "dysentery", "diarrhea"],
            response_text="My eyes haven't turned yellow, no pale stools, and no recent overseas travel or bloody diarrhea."
        ),
        InformationGate(
            key="poorly_controlled_dm",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["diabetes", "sugar", "medications", "hba1c", "past medical", "insulin"],
            response_text="I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
            mandatory_for_safety=True
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="Bedside Hepatobiliary Ultrasound & Contrast CT Abdomen",
        description="Emergency ultrasound and CT abdomen/pelvis findings:",
        findings={
            "CT Liver": "6.8 cm multiloculated, septated hypodense abscess in Segment VII/VIII of the right hepatic lobe with rim enhancement and internal gas bubbles. Bile ducts are NOT dilated.",
            "Slit-Lamp Eye Exam": "Right eye hypopyon and vitritis consistent with endogenous bacterial endophthalmitis.",
            "Labs": "TWBC 22.6 x 10^9/L, CRP 310 mg/L, ALP 285 U/L, Bilirubin 24 mcmol/L, HbA1c 11.8%."
        },
        expected_shifts={
            "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (with Endogenous Endophthalmitis)": 2,
            "Ascending Cholangitis (Charcot's Triad)": -2,
            "Amoebic Liver Abscess (Entamoeba histolytica)": -2,
            "Hepatocellular Carcinoma (HCC)": -2
        },
        expert_rationale=(
            "In Singapore and East Asia, hypervirulent K1/K2 capsular serotype Klebsiella pneumoniae is the #1 cause of pyogenic liver abscess, strongly associated with poorly controlled Diabetes Mellitus. "
            "It classically causes metastatic septic seeding: Endogenous Endophthalmitis (vision-threatening emergency!), meningitis, and septic pulmonary emboli."
        )
    ),
    differentials=[
        Differential(
            name="Invasive Klebsiella pneumoniae Pyogenic Liver Abscess with Endogenous Endophthalmitis",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Poorly controlled DM (HbA1c 11.8%)", "Swinging fever + RUQ pain", "Septated gas-forming right lobe liver abscess", "Metastatic right eye hypopyon/endophthalmitis"],
            refuting_features=[],
            prior_probability=0.80,
            posterior_probability=0.99
        ),
        Differential(
            name="Acute Ascending Cholangitis",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Fever + RUQ pain"],
            refuting_features=["Non-dilated biliary tree on CT, absence of obstructive jaundice"],
            prior_probability=0.15,
            posterior_probability=0.01
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="What is the unified diagnosis and the pathognomonic microbiological syndrome?",
            target_rubric="Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (serotype K1/K2) in a poorly controlled diabetic, complicated by metastatic endogenous endophthalmitis.",
            max_marks=10,
            key_points_required=["Klebsiella pneumoniae pyogenic liver abscess", "Invasive syndrome / metastatic seeding", "Endogenous endophthalmitis (right eye)", "Predisposing risk factor: poorly controlled Diabetes Mellitus"]
        ),
        VivaQuestion(
            prompt="Outline your immediate multidisciplinary management and long-term GI follow-up.",
            target_rubric="1. Empirical IV Ceftriaxone + Metronidazole; 2. Interventional Radiology percutaneous pigtail catheter drainage (abscess >5cm); 3. STAT Ophthalmology referral for intravitreal antibiotics/vitrectomy to save sight; 4. Insulin glycemic control; 5. Outpatient colonoscopy once resolved to exclude occult colonic neoplasia.",
            max_marks=10,
            key_points_required=["IV Ceftriaxone (good CNS/ocular penetration) + Metronidazole", "IR-guided percutaneous catheter drainage of abscess (>5cm)", "STAT Ophthalmology consultation for intravitreal antibiotics (sight-saving emergency)", "Strict inpatient insulin glycemic control", "Follow-up interval Colonoscopy (cryptogenic Klebsiella liver abscess is associated with occult colorectal carcinoma/adenoma)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Missing Metastatic Endophthalmitis in Liver Abscess",
            description="Focusing only on the abdomen and ignoring visual complaints, resulting in permanent blindness.",
            trigger_condition="Candidate fails to examine the eyes or call STAT Ophthalmology.",
            remediation_advice="In Singapore finals, ANY diabetic with a pyogenic liver abscess MUST be screened for blurry vision (endophthalmitis) and neck stiffness (meningitis)."
        ),
        CognitiveTrap(
            trap_name="Forgetting Interval Colonoscopy After Cryptogenic Pyogenic Liver Abscess",
            description="Treating the liver abscess without investigating the colonic mucosal barrier portal of entry.",
            trigger_condition="Candidate omits outpatient colonoscopy from follow-up plan.",
            remediation_advice="Cryptogenic Klebsiella liver abscesses have a well-established association with occult colorectal malignancy disrupting the gut mucosal barrier; always schedule an interval colonoscopy."
        )
    ]
)

# ============================================================================
# CASE 13: NASOPHARYNGEAL CARCINOMA (NPC) (SGH ENT CLINIC)
# ============================================================================
CASE_SG_NPC = OSCECase(
    case_id="ent_13",
    specialty="ENT / Oncology (SG Classic)",
    title="Unilateral Neck Lump, Blocked Ear & Double Vision in a 54yo Chef",
    brief=CandidateBrief(
        setting="Singapore General Hospital (SGH) Otorhinolaryngology (ENT) Clinic",
        patient_name="Mr. Lim Boon Huat",
        age=54,
        gender="Male",
        occupation="Cantonese Roast Meat Chef",
        presenting_complaint="Painless right upper neck lump for 2 months and blocked right ear",
        triage_vitals={
            "Heart Rate": "76 bpm",
            "Blood Pressure": "134/82 mmHg",
            "Respiratory Rate": "14 /min",
            "Oxygen Saturation": "99% on room air",
            "Temperature": "36.6°C"
        },
        instructions=(
            "BLITZ MODE: Take a targeted history for this classic Singaporean ENT station. "
            "Elicit all 4 anatomical vectors of local invasion (nasal, otologic, neurological/skull base, nodal) and risk factors."
        )
    ),
    persona=PatientPersona(
        name="Mr. Lim Boon Huat",
        voice_id="en-SG-WayneNeural",
        speech_rate="+0%",
        pain_level=2,
        temperament="stoic",
        behavioral_cues=[
            "Firm, non-tender 3.5cm lymph node palpable in right upper posterior triangle / Level II/V",
            "Turns his head slightly to the right to avoid double vision on right lateral gaze",
            "Asks you to speak slightly louder on his right side"
        ]
    ),
    gates=[
        InformationGate(
            key="nodal_neck_lump",
            category=GateCategory.SOCRATES,
            trigger_concepts=["lump", "neck", "size", "painful", "growing", "how long", "onset"],
            response_text="I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much."
        ),
        InformationGate(
            key="otologic_eustachian_glue_ear",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["ear", "hearing", "deaf", "blocked", "tinnitus", "ringing", "muffled"],
            response_text="My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="nasal_epistaxis_postnasal",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["nosebleed", "epistaxis", "blood in phlegm", "postnasal", "spitting blood", "hawk phlegm", "blood in saliva", "blocked nose", "nasal obstruction"],
            response_text="Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="cranial_nerves_skull_base",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["double vision", "diplopia", "vision", "facial numbness", "numb", "headache", "swallowing", "hoarse"],
            response_text="For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="risk_factors_cantonese_salted_fish_ebv",
            category=GateCategory.SOCIAL_HISTORY,
            trigger_concepts=["family", "cancer", "diet", "salted fish", "preserved", "chinese", "cantonese", "smoke"],
            response_text="I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
            mandatory_for_safety=True
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="Flexible Nasoendoscopy & Cranial Nerve Exam",
        description="In-clinic flexible nasoendoscopy and otoscopy findings:",
        findings={
            "Flexible Nasoendoscopy": "Exophytic, friable, ulcerated mass obliterating the right Fossa of Rosenmüller (pharyngeal recess) and compressing the torus tubarius.",
            "Right Otoscopy": "Dull, retracted tympanic membrane with amber fluid level and air bubbles (Unilateral Adult Otitis Media with Effusion).",
            "Cranial Nerve Exam": "Right Cranial Nerve VI (Abducens) palsy (failure of right eye abduction) + reduced sensation over right V2 (maxillary) distribution."
        },
        expected_shifts={
            "Locally Advanced Nasopharyngeal Carcinoma (NPC, T4N1M0) with Skull Base / Cavernous Sinus Invasion": 2,
            "Infectious Cervical Lymphadenitis / TB Adenitis": -2,
            "Benign Adult Eustachian Tube Dysfunction": -2
        },
        expert_rationale=(
            "CLASSIC SINGAPORE FINALS RULE: Unilateral middle ear effusion (glue ear) in a Chinese adult is Nasopharyngeal Carcinoma (NPC) in the Fossa of Rosenmüller until proven otherwise! "
            "Superior extension through the foramen lacerum into the cavernous sinus explains the CN V2 numbness and CN VI lateral rectus palsy."
        )
    ),
    differentials=[
        Differential(
            name="Nasopharyngeal Carcinoma (NPC — WHO Type III Non-Keratinizing EBV-related)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Cantonese ethnicity, family history, salted fish diet", "Fossa of Rosenmüller mass", "Unilateral conductive hearing loss (OME)", "Morning blood-stained post-nasal drip", "Skull base invasion (CN V2 & CN VI palsy)", "Cervical lymphadenopathy (most common presenting sign)"],
            refuting_features=[],
            prior_probability=0.90,
            posterior_probability=0.99
        ),
        Differential(
            name="Sino-Nasal Lymphoma or Metastatic Squamous Cell Carcinoma",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Nasopharyngeal mass with cervical nodes"],
            refuting_features=["Histology required to differentiate, though NPC is overwhelmingly #1 in Singapore"],
            prior_probability=0.10,
            posterior_probability=0.01
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Explain the anatomical basis for each of Mr. Lim's 4 symptoms.",
            target_rubric="1. Mass in Fossa of Rosenmüller -> morning blood-stained post-nasal drip; 2. Obstruction of Eustachian tube opening (torus tubarius) -> unilateral serous otitis media; 3. Superior spread via foramen lacerum into cavernous sinus -> CN VI (diplopia) & CN V2 (cheek numbness); 4. Rich lymphatic drainage -> Level II/V cervical lymphadenopathy.",
            max_marks=10,
            key_points_required=["Fossa of Rosenmüller primary site", "Eustachian tube obstruction causing unilateral otitis media with effusion", "Foramen lacerum / cavernous sinus skull base invasion causing CN VI & V2 palsies", "Cervical lymph node metastasis (Level II / posterior triangle)"]
        ),
        VivaQuestion(
            prompt="What is your diagnostic and staging workup, and what is the primary curative treatment modality for NPC?",
            target_rubric="Diagnostic: Endoscopic-guided biopsy of the nasopharyngeal mass (NOT open excisional biopsy of the neck node!). Staging: Plasma EBV DNA titre, MRI Nasopharynx & Neck (for skull base/soft tissue), PET-CT (for distant bone/lung/liver mets). Treatment: Concurrent Chemoradiotherapy (IMRT + Cisplatin) — NPC is highly radiosensitive, NOT primary surgery!",
            max_marks=10,
            key_points_required=["Endoscopic punch biopsy of primary Fossa of Rosenmüller mass", "AVOID open excisional neck node biopsy (violates tissue planes and worsens prognosis)", "MRI Nasopharynx & Neck + PET-CT staging + Plasma EBV DNA viral load", "Primary treatment is Radiotherapy / Concurrent Chemoradiotherapy (NOT primary surgery)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Performing Open Excisional Biopsy of the Neck Node First",
            description="Booking the patient for an open surgical excision of the neck lump before examining and biopsying the nasopharynx.",
            trigger_condition="Candidate suggests excisional biopsy of the cervical lymph node.",
            remediation_advice="NEVER perform an open excisional biopsy on a suspected metastatic neck node before endoscopic ENT evaluation! Biopsy the primary Fossa of Rosenmüller mass endoscopically (or FNAC of the node if needed)."
        ),
        CognitiveTrap(
            trap_name="Treating Unilateral Adult Glue Ear with Antibiotics/Grommets Alone",
            description="Missing the nasopharyngeal tumour obstructing the Eustachian tube.",
            trigger_condition="Candidate fails to inspect the Fossa of Rosenmüller in an adult with unilateral OME.",
            remediation_advice="Every adult presenting with unilateral serous otitis media MUST undergo flexible nasoendoscopy to rule out NPC."
        )
    ]
)

# ============================================================================
# CASE 14: EXERTIONAL HEAT STROKE & RHABDOMYOLYSIS (CGH ED)
# ============================================================================
CASE_SG_HEATSTROKE = OSCECase(
    case_id="med_14",
    specialty="Acute Medicine / Military Medicine (SG Classic)",
    title="Collapse, Delirium & Core Temp 41.2°C After 10km Fast March",
    brief=CandidateBrief(
        setting="Changi General Hospital (CGH) Emergency Resuscitation Bay",
        patient_name="2LT Ethan Ng (Collateral from Medical Orderly)",
        age=20,
        gender="Male",
        occupation="Officer Cadet (OCS)",
        presenting_complaint="Collapsed at the 9km mark of a load-bearing road march; agitated and confused",
        triage_vitals={
            "Heart Rate": "148 bpm (Sinus tachycardia)",
            "Blood Pressure": "92/54 mmHg",
            "Respiratory Rate": "34 /min",
            "Oxygen Saturation": "97% on non-rebreather mask",
            "Rectal Core Temperature": "41.2°C (Extreme hyperthermia!)",
            "GCS": "11/15 (E3 V3 M5 — Agitated, disoriented)"
        },
        instructions=(
            "BLITZ MODE: Rapidly obtain collateral history from the accompanying SAF Medical Orderly, "
            "differentiate Exertional Heat Stroke from Heat Exhaustion, and execute immediate cooling & hyperkalaemia/rhabdo management."
        )
    ),
    persona=PatientPersona(
        name="CPL Danish (SAF Medical Orderly)",
        voice_id="en-SG-WayneNeural",
        speech_rate="+5%",
        pain_level=0,
        temperament="urgent",
        behavioral_cues=[
            "Patient is hot, flushed, tachycardic, and incoherent on the trolley",
            "Urinary catheter bag shows 40 mL of dark Coca-Cola / tea-coloured urine",
            "Medical orderly has field vital signs chart ready"
        ]
    ),
    gates=[
        InformationGate(
            key="collapse_cns_dysfunction",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["collapse", "what happened", "confused", "gcs", "behaviour", "seizure", "delirium", "march"],
            response_text="At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="pre_existing_viral_prodrome",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["sick", "unwell", "fever", "sleep", "hydration", "water", "supplements", "pre-workout", "caffeine"],
            response_text="His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="rhabdo_dark_urine",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["urine", "colour", "color", "tea", "coca cola", "dark", "muscle", "cramps", "rhabdo"],
            response_text="When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="field_cooling_measures",
            category=GateCategory.SOCRATES,
            trigger_concepts=["cooled", "ice", "body cooling unit", "strip", "treatment", "given"],
            response_text="We stripped off his uniform and webbing immediately, placed ice packs in his neck, axillae, and groin, sprayed him with water, and started 1L cold normal saline en route."
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="STAT Resus Bloods, ECG & Urine Dipstick",
        description="Point-of-care biochemical and ECG results:",
        findings={
            "Serum Potassium (K+)": "6.6 mmol/L (Severe hyperkalaemia from massive myocyte lysis!)",
            "Creatine Kinase (CK)": "54,200 U/L (Severe Exertional Rhabdomyolysis)",
            "12-Lead ECG": "Sinus tachycardia 146 bpm with tall, tented peaked T-waves across precordial leads.",
            "Urine Dipstick & Microscopy": "Dipstick 4+ Blood, but Urine Microscopy shows <2 RBC/hpf (Confirms Myoglobinuria!).",
            "Renal & Coag": "Creatinine 218 mcmol/L (AKI), AST 640 U/L, INR 1.6."
        },
        expected_shifts={
            "Exertional Heat Stroke complicated by Severe Rhabdomyolysis, Myoglobinuric AKI & Hyperkalaemia": 2,
            "Simple Heat Exhaustion": -2,
            "Neuroleptic Malignant Syndrome / Malignant Hyperthermia": -2
        },
        expert_rationale=(
            "DISTINCTION RULE: Exertional Heat Stroke = Hyperthermia (>40°C) + CNS Dysfunction (delirium/ataxia/coma/seizures). "
            "Urine dipstick positive for blood with negative RBCs on microscopy is pathognomonic for Myoglobinuria. "
            "Immediate priority: rapid evaporative/ice-water cooling to <38.5-39.0°C within 30 minutes + IV 10% Calcium Gluconate for hyperkalaemic ECG changes!"
        )
    ),
    differentials=[
        Differential(
            name="Exertional Heat Stroke with Rhabdomyolysis & Myoglobinuric AKI",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Core temp >40°C (41.2°C) + CNS dysfunction (GCS 11)", "Exertional trigger in high wet-bulb globe temperature", "CK 54,200 U/L + Coca-Cola urine (dipstick blood+, microscopy RBC-)", "Hyperkalaemia 6.6 mmol/L with peaked T-waves"],
            refuting_features=[],
            prior_probability=0.95,
            posterior_probability=0.99
        ),
        Differential(
            name="Heat Exhaustion",
            tier=DifferentialTier.UNLIKELY,
            supporting_features=["Exertional heat illness"],
            refuting_features=["Presence of CNS dysfunction (delirium, GCS 11) and core temp >40°C defines Heat Stroke, NOT Heat Exhaustion"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="How do you clinically distinguish Heat Exhaustion from Exertional Heat Stroke, and why does his urine dipstick show 4+ blood with no RBCs on microscopy?",
            target_rubric="Exertional Heat Stroke is defined by Core Temp >40°C PLUS Central Nervous System dysfunction (delirium, ataxia, seizures, coma). Urine dipstick orthotoluidine reaction cannot distinguish haemoglobin from myoglobin—positive dipstick blood with absent RBCs on microscopy confirms Myoglobinuria from rhabdomyolysis.",
            max_marks=10,
            key_points_required=["Core temperature >40°C PLUS CNS dysfunction defines Heat Stroke", "Myoglobinuria explains positive dipstick blood with negative microscopic RBCs", "Massive skeletal muscle breakdown (CK 54,200) releasing myoglobin and intracellular potassium"]
        ),
        VivaQuestion(
            prompt="Outline your immediate resuscitation: cooling target, hyperkalaemia treatment, and why Paracetamol/Dantrolene are NOT indicated.",
            target_rubric="1. Rapid cooling (Body Cooling Unit / ice water immersion / mist + fan + ice packs to groin/axilla/neck) to target rectal temp <38.5-39.0°C within 30 mins (stop active cooling at 38.5-39°C to prevent overshoot hypothermia); 2. Hyperkalaemia: 10mL 10% IV Calcium Gluconate (stabilize myocardium) + IV Insulin 10U in 50mL D50; 3. Aggressive IV 0.9% NaCl to maintain urine output >200-300 mL/h; 4. AVOID Paracetamol (ineffective as hypothalamic set-point is normal, and worsens hepatic injury!)",
            max_marks=10,
            key_points_required=["Rapid physical cooling (evaporative mist+fan / BCU / ice immersion) targeting <38.5-39.0°C within 30 minutes", "10mL 10% IV Calcium Gluconate for peaked T-waves + Insulin/Dextrose shift", "Aggressive IV crystalloid hydration targeting urine output 200-300 mL/h to flush myoglobin casts", "AVOID Paracetamol/NSAIDs (hypothalamic set-point is not elevated; paracetamol worsens acute hypoxic hepatitis, NSAIDs worsen renal failure)"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Prescribing Paracetamol or NSAIDs for Heat Stroke",
            description="Giving antipyretics to lower temperature in exertional heat stroke.",
            trigger_condition="Candidate orders IV Paracetamol or Ibuprofen.",
            remediation_advice="Antipyretics work by resetting PGE2 in the hypothalamus during infection—they do NOTHING in heat stroke, and Paracetamol accelerates fulminant hepatic failure while NSAIDs precipitate acute tubular necrosis!"
        )
    ]
)

# ============================================================================
# CASE 15: ACUTE MESENTERIC ISCHAEMIA (TTSH GENERAL SURGERY)
# ============================================================================
CASE_SG_MESENTERIC = OSCECase(
    case_id="surg_15",
    specialty="General Surgery / Vascular (SG Classic)",
    title="Sudden Agonizing Abdominal Pain with a Soft Abdomen in a 68yo Male",
    brief=CandidateBrief(
        setting="Tan Tock Seng Hospital (TTSH) Emergency Department",
        patient_name="Mr. S. Krishnan",
        age=68,
        gender="Male",
        occupation="Retired Bus Captain",
        presenting_complaint="Sudden 10/10 diffuse abdominal pain for 4 hours after lunch",
        triage_vitals={
            "Heart Rate": "118 bpm (Irregularly irregular!)",
            "Blood Pressure": "112/70 mmHg",
            "Respiratory Rate": "26 /min",
            "Oxygen Saturation": "96% on room air",
            "Temperature": "36.9°C"
        },
        instructions=(
            "BLITZ MODE: Evaluate this 68yo man with sudden agonizing abdominal pain. "
            "Recognize the classic clinical paradox and cardiovascular embolic substrate before bowel gangrene sets in."
        )
    ),
    persona=PatientPersona(
        name="Mr. S. Krishnan",
        voice_id="en-SG-WayneNeural",
        speech_rate="-5%",
        pain_level=10,
        temperament="writhing",
        behavioral_cues=[
            "Writhing in agony on the bed, unable to find a comfortable position",
            "Yet when you palpate his abdomen, it is surprisingly soft with no guarding or rebound tenderness!",
            "Pulse is irregularly irregular"
        ]
    ),
    gates=[
        InformationGate(
            key="pain_out_of_proportion",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["out of proportion", "pain out of proportion", "palpate", "pressing", "soft abdomen", "guarding", "tenderness on palpation", "peritonism"],
            response_text="It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. But when the doctor pressed on my stomach, it didn't hurt much more—it felt totally soft to her touch, even though inside it feels like it's dying.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="gut_emptying_bloody_stool",
            category=GateCategory.SOCRATES,
            trigger_concepts=["vomit", "diarrhea", "bowel", "stool", "blood", "currant jelly"],
            response_text="Right after the pain hit, I had a sudden urgent bowel movement and vomited twice. An hour ago I passed a small amount of dark maroon, foul-smelling bloody stool."
        ),
        InformationGate(
            key="afib_anticoagulation_noncompliance",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["heart", "irregular", "palpitations", "atrial fibrillation", "af", "blood thinner", "apixaban", "warfarin", "meds"],
            response_text="I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
            mandatory_for_safety=True
        ),
        InformationGate(
            key="vascular_differentials_aaa",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["back pain", "tearing", "pulsatile", "aneurysm", "smoking", "claudication"],
            response_text="The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
            mandatory_for_safety=True
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=3,
        title="STAT Arterial Blood Gas (ABG) & CT Mesenteric Angiogram",
        description="Urgent ABG and Biphasic CT Mesenteric Angiogram findings:",
        findings={
            "Arterial Blood Gas": "pH 7.19, HCO3 11.2 mmol/L, Base Excess -15.4, Serum Lactate 5.9 mmol/L (Severe lactic acidosis!).",
            "ECG": "Atrial Fibrillation with rapid ventricular response at 118 bpm.",
            "CT Mesenteric Angiogram": "Abrupt thromboembolic occlusion of the Superior Mesenteric Artery (SMA) 4 cm distal to its origin, with hypo-enhancing jejunal and ileal loops. No pneumatosis intestinalis or free air yet."
        },
        expected_shifts={
            "Acute Thromboembolic Superior Mesenteric Artery (SMA) Ischaemia": 2,
            "Perforated Peptic Ulcer": -2,
            "Acute Pancreatitis": -2,
            "Simple Acute Gastroenteritis": -2
        },
        expert_rationale=(
            "CLASSIC SURGICAL TRIAD FOR ACUTE MESENTERIC ISCHAEMIA: "
            "1. Severe 'pain out of proportion' to a soft abdomen; 2. Embolic source (unanticoagulated Atrial Fibrillation); 3. Rapid gut emptying + high anion gap lactic acidosis. "
            "Remember: peritonism/guarding is a LATE sign indicating full-thickness bowel necrosis/infarction!"
        )
    ),
    differentials=[
        Differential(
            name="Acute Superior Mesenteric Artery (SMA) Thromboembolism",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Pain out of proportion to physical exam", "Irregularly irregular pulse (AF off Apixaban)", "Severe lactic acidosis (5.9 mmol/L)", "SMA occlusion on CT Angiogram"],
            refuting_features=[],
            prior_probability=0.85,
            posterior_probability=0.99
        ),
        Differential(
            name="Ruptured Abdominal Aortic Aneurysm (AAA) or Perforated Viscus",
            tier=DifferentialTier.MUST_NOT_MISS,
            supporting_features=["Sudden catastrophic abdominal pain in older vascular patient"],
            refuting_features=["CT angiogram shows an intact aorta and no pneumoperitoneum", "Soft abdomen early: pain out of proportion to signs fits mesenteric ischaemia"],
            prior_probability=0.15,
            posterior_probability=0.01
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="What is the classic clinical hallmark of early Acute Mesenteric Ischaemia, and why is his abdomen soft despite 10/10 agony?",
            target_rubric="'Pain out of proportion to physical examination.' Early ischaemia is confined to the visceral mucosa (innervated by autonomic visceral fibres causing severe poorly localized colicky/constant pain), whereas the parietal peritoneum (somatic innervation causing guarding/rebound) is only irritated late once transmural bowel gangrene occurs.",
            max_marks=10,
            key_points_required=["Pain out of proportion to clinical examination", "Mucosal ischaemia precedes transmural infarction (visceral vs somatic peritoneum)", "Cardioembolic source: Atrial Fibrillation off Apixaban", "High lactate (5.9 mmol/L) and metabolic acidosis"]
        ),
        VivaQuestion(
            prompt="What is the gold-standard investigation and your immediate medical and surgical management?",
            target_rubric="Gold standard: Biphasic CT Mesenteric Angiogram (CTMA). Immediate management: 1. NPO, NG tube decompression, aggressive IV crystalloid resuscitation; 2. Immediate IV Unfractionated Heparin infusion; 3. Broad-spectrum IV antibiotics (Cefazolin/Ceftriaxone + Metronidazole for bacterial translocation); 4. Urgent Vascular + General Surgery intervention: SMA embolectomy / endovascular thrombectomy + exploratory laparotomy to assess bowel viability (and relook laparotomy at 24-48h).",
            max_marks=10,
            key_points_required=["Biphasic CT Mesenteric Angiogram (CTMA)", "Immediate systemic anticoagulation with IV Unfractionated Heparin", "Broad-spectrum IV antibiotics (gut bacterial translocation)", "Urgent revascularization (open SMA embolectomy or endovascular aspiration) + laparotomy to resect non-viable bowel"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="Reassurance by a 'Soft, Non-Tender Abdomen'",
            description="Dismissing a patient with 10/10 abdominal pain and Atrial Fibrillation because they have no guarding or rebound tenderness.",
            trigger_condition="Candidate delays CT angiogram because the abdomen is soft.",
            remediation_advice="If you wait for guarding and rebound tenderness in Acute Mesenteric Ischaemia, the bowel is already dead (gangrenous) and mortality exceeds 70%. Diagnose it in the 'soft abdomen' phase!"
        )
    ]
)
