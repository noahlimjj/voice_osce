/**
 * app.js: OSCEBlitz — High-Velocity Clinical Reasoning & Red-Flag Trainer
 * 100% Standalone Browser Engine (<10ms instant evaluation) + Cloud API Hybrid.
 * Built for LKCMedicine • NUS YLLSoM • Duke-NUS & MBBS Finals.
 */

// -------------------------------------------------------------
// SINGAPORE CLASSICS FALLBACK REGISTRY (Merged with window.VOICE_OSCE_CASES)
// Guarantees all 15 stations (including the 5 SG Classics) work 100% offline/client-side
// -------------------------------------------------------------
const SG_CLASSIC_IDS = new Set(["id_11", "gastro_12", "ent_13", "med_14", "surg_15"]);

const FALLBACK_SG_CASES = {
  "id_11": {
    "case_id": "id_11",
    "specialty": "Infectious Diseases / Emergency Medicine",
    "title": "BMTC Pulau Tekong Recruit with Day 5 Fever & Abdominal Pain (Dengue Shock)",
    "brief": {
      "setting": "Changi General Hospital (CGH) Emergency Department Resus Bay",
      "patient_name": "REC Ryan Koh",
      "age": 19,
      "gender": "Male",
      "occupation": "Full-Time National Serviceman (NSF Recruit, BMTC Pulau Tekong)",
      "presenting_complaint": "5 days of high fever, retro-orbital headache, now defervescing with severe abdominal pain and postural dizziness",
      "triage_vitals": {
        "Heart Rate": "118 bpm (Sinus tachycardia, thready radial pulse)",
        "Blood Pressure": "96/82 mmHg (Narrowed pulse pressure = 14 mmHg!)",
        "Respiratory Rate": "24 /min",
        "Oxygen Saturation": "98% on room air",
        "Temperature": "36.9°C (Down from 39.8°C yesterday — Critical Phase defervescence)",
        "Capillary Refill": "3.5 seconds, cool clammy extremities"
      },
      "instructions": "Take a rapid history from REC Koh, screen for Dengue Warning Signs & Critical Phase plasma leakage, interpret his STAT FBC/Hct perturbation, and formulate his fluid resuscitation protocol."
    },
    "persona": {
      "name": "REC Ryan Koh",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+0%",
      "pain_level": 7,
      "temperament": "exhausted",
      "behavioral_cues": [
        "Lethargic, clutching epigastrium, gums slightly oozing blood",
        "Dizzy whenever trying to sit up on the trolley"
      ]
    },
    "gates": [
      {
        "key": "fever_defervescence_timeline",
        "category": "socrates",
        "trigger_concepts": ["onset", "start", "fever", "days", "temperature", "when", "timing", "defervescence"],
        "response_text": "My high fever started 5 days ago during field camp in Pulau Tekong—hit 39.8°C with bone-breaking body aches and pain behind my eyes. Today the fever suddenly broke, which I thought meant I was recovering, but I actually feel ten times worse!",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "abdominal_pain_persistent_vomiting",
        "category": "red_flag",
        "trigger_concepts": ["abdomen", "abdominal", "tummy", "stomach", "pain", "character", "vomit", "nausea", "warning", "severity"],
        "response_text": "My upper tummy and right side under my ribs hurt constantly (7/10), and I've vomited 6 times since this morning—I can't keep even sips of water down.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "mucosal_bleeding_gum_epistaxis",
        "category": "red_flag",
        "trigger_concepts": ["bleed", "bleeding", "gum", "nosebleed", "stool", "melena", "black", "rash", "petechiae", "bruise"],
        "response_text": "When I brushed my teeth in Tekong bunk this morning my gums wouldn't stop oozing blood, and I noticed a fine red rash with tiny blood spots on my shins.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "postural_syncope_lethargy_oliguria",
        "category": "red_flag",
        "trigger_concepts": ["dizzy", "faint", "syncope", "stand", "urine", "pee", "drowsy", "lethargy", "thirst", "neuro"],
        "response_text": "When I stood up to go to the toilet I nearly blacked out. I haven't passed urine since last night.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "tekong_mosquito_epi_cluster",
        "category": "social",
        "trigger_concepts": ["tekong", "camp", "army", "bmt", "mosquito", "bite", "bunk", "travel", "occupation", "leptospirosis", "water", "soil"],
        "response_text": "Three other recruits in my Pulau Tekong platoon were evacuated with confirmed Dengue fever this week. I got bitten badly by Aedes mosquitoes near the training shed. We didn't swim in rivers or drink untreated water.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "nsaid_meds_history",
        "category": "drug_history",
        "trigger_concepts": ["medication", "meds", "drug", "panadol", "nsaid", "ibuprofen", "brufen", "aspirin", "allergy", "past medical"],
        "response_text": "The MO gave me Paracetamol, which I took, and no drug allergies. My buddy offered me Ibuprofen yesterday—thankfully I didn't take it.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "bedside_exam_hepatomegaly_ascites",
        "category": "systemic",
        "trigger_concepts": ["exam", "examination", "abdomen", "chest", "lungs", "liver", "vitals", "pulse", "tourniquet"],
        "response_text": "[Bedside Exam]: Tender 3cm hepatomegaly, dullness at right lung base (pleural effusion), petechial rash on lower limbs, narrow pulse pressure 96/82 mmHg (14 mmHg), postural drop.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT Full Blood Count, Hematocrit & Dengue NS1/IgM Panel",
      "description": "Bedside FBC, serial hematocrit, and rapid Dengue antigen/serology results return:",
      "findings": {
        "Hemoglobin & Hematocrit (Hct)": "Hb 17.8 g/dL, Hematocrit 53.5% (Baseline at enlistment was 42% -> >25% hemoconcentration!)",
        "Platelet Count": "18 x 10^9/L (Severe thrombocytopenia)",
        "Total White Cell Count": "2.1 x 10^9/L (Leukopenia)",
        "Dengue Rapid Duo": "Dengue NS1 Antigen POSITIVE, Dengue IgM POSITIVE, IgG POSITIVE (Secondary Dengue infection)",
        "Venous Lactate & Liver Enzymes": "Lactate 3.4 mmol/L, AST 340 U/L, ALT 210 U/L"
      },
      "expected_shifts": {
        "Dengue Shock Syndrome (Severe Dengue in Critical Phase with Plasma Leakage)": 2,
        "Uncomplicated Classic Dengue Fever": -2,
        "Melioidosis / Leptospirosis Sepsis": -1
      },
      "expert_rationale": "At Day 5 defervescence, the patient has entered the Critical Phase of Severe Dengue (Dengue Shock Syndrome). Severe plasma leakage is proven by >20% rise in Hematocrit (42% to 53.5%), pleural effusion, tender hepatomegaly, and narrowed pulse pressure (<20 mmHg: 96/82 = 14 mmHg). Immediate isotonic crystalloid bolus (10-20 mL/kg) titrated to serial Hematocrit—NOT prophylactic platelet transfusion—is life-saving."
    },
    "differentials": [
      {
        "name": "Severe Dengue / Dengue Shock Syndrome (Critical Phase Plasma Leakage)",
        "tier": "primary",
        "supporting_features": [
          "Day 5 defervescence with warning signs (severe abdominal pain, persistent vomiting, mucosal bleeding, hepatomegaly)",
          "Narrowed pulse pressure 14 mmHg (96/82 mmHg) & tachycardia 118 bpm",
          "Hematocrit surge >20% (53.5% vs baseline 42%) + platelets 18 + NS1 positive"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Acute Melioidosis / Leptospirosis (Tekong Field Exposure)",
        "tier": "secondary",
        "supporting_features": ["Pulau Tekong military recruit with fever and hepatomegaly"],
        "refuting_features": ["Positive Dengue NS1 and classic hemoconcentration/plasma leakage at defervescence"],
        "prior_probability": 0.10,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "Synthesize why this recruit's BP of 96/82 mmHg is a medical emergency and state the WHO Dengue Warning Signs present.",
        "target_rubric": "Severe Dengue / Dengue Shock Syndrome in Critical Phase (Day 5 defervescence); pulse pressure narrowed to 14 mmHg (<20 mmHg criterion for compensated dengue shock); warning signs: abdominal pain, persistent vomiting, mucosal bleeding, tender hepatomegaly, rising Hct (53.5%) with rapid platelet drop (18).",
        "max_marks": 10,
        "key_points_required": [
          "Dengue Shock Syndrome / Severe Dengue in Critical Phase at defervescence",
          "Narrowed pulse pressure <= 20 mmHg (96/82 = 14 mmHg) indicates compensated hypovolemic shock from plasma leakage",
          "WHO Warning Signs: severe abdominal pain, persistent vomiting, mucosal gum bleeding, lethargy, tender hepatomegaly",
          "Hemoconcentration (Hematocrit rose >20% to 53.5%) with severe thrombocytopenia (18)"
        ]
      },
      {
        "prompt": "Outline your immediate fluid resuscitation protocol and explain whether you would transfuse platelets right now.",
        "target_rubric": "IV isotonic crystalloid (0.9% Normal Saline or Hartmann's) 10-20 mL/kg bolus over 15-30 mins, repeat and step down guided by serial Hematocrit and urine output (target 0.5-1 mL/kg/h); if Hct drops suddenly while still in shock, suspect occult hemorrhage and transfuse packed red cells/whole blood; DO NOT give prophylactic platelet transfusion (causes fluid overload and does not prevent bleeding); strictly avoid NSAIDs/IM injections.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate IV isotonic crystalloid bolus (0.9% Saline / Hartmann's 10-20 mL/kg) titrated to serial Hematocrit",
          "Monitor urine output (target >= 0.5 mL/kg/h) and repeat Hct after fluid bolus",
          "If shock persists but Hematocrit FALLS abruptly, suspect concealed internal bleeding and transfuse PRBC/whole blood",
          "Do NOT give prophylactic platelet transfusion despite plt 18 (ARCH trial: no benefit, risks fluid overload/pulmonary edema)",
          "Strictly avoid NSAIDs, aspirin, and intramuscular injections"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Prophylactic Platelet Transfusion Trap in Dengue",
        "description": "Ordering prophylactic platelet transfusions for thrombocytopenia without major active bleeding.",
        "trigger_condition": "Candidate orders prophylactic platelet transfusion.",
        "remediation_advice": "Singapore MOH & WHO Dengue Guidelines (backed by the Singapore-led ARCH RCT): Prophylactic platelet transfusion in dengue thrombocytopenia does NOT reduce bleeding and increases fluid overload/pulmonary edema.",
        "trigger_keywords": ["transfuse platelets", "give platelets", "platelet transfusion"],
        "absent_keywords": [],
        "missed_gate_keys": ["abdominal_pain_persistent_vomiting"]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },

  "gastro_12": {
    "case_id": "gastro_12",
    "specialty": "Gastroenterology / Hepatology / ID",
    "title": "Diabetic Hawker Uncle with Fever, RUQ Pain & Blurred Right Eye (Invasive Klebsiella Syndrome)",
    "brief": {
      "setting": "Tan Tock Seng Hospital (TTSH) Emergency Department",
      "patient_name": "Mr. Lim Ah Seng",
      "age": 62,
      "gender": "Male",
      "occupation": "Char Kway Teow Hawker Stall Owner",
      "presenting_complaint": "4 days of spiking fever, rigors, right upper quadrant ache, and sudden painful blurring of right eye vision since last night",
      "triage_vitals": {
        "Heart Rate": "114 bpm (Sinus tachycardia)",
        "Blood Pressure": "104/64 mmHg",
        "Respiratory Rate": "22 /min",
        "Oxygen Saturation": "96% on room air",
        "Temperature": "39.4°C",
        "Capillary Blood Glucose": "21.8 mmol/L"
      },
      "instructions": "Take a focused history from Mr. Lim, screen for metastatic septic complications, interpret his abdominal CT & eye findings, and outline urgent multi-disciplinary management."
    },
    "persona": {
      "name": "Mr. Lim Ah Seng",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "-5%",
      "pain_level": 8,
      "temperament": "stoic",
      "behavioral_cues": [
        "Shivering with rigors, rubbing his inflamed right eye",
        "Holding his right upper abdomen"
      ]
    },
    "gates": [
      {
        "key": "fever_rigors_ruq_pain",
        "category": "socrates",
        "trigger_concepts": ["onset", "start", "pain", "where", "character", "radiate", "shoulder", "fever", "chills", "rigors", "severity"],
        "response_text": "Four days ago I started having violent shivering chills and 39.5°C fever with a deep, constant ache under my right ribcage that goes to my right shoulder (8/10).",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "endophthalmitis_visual_loss_red_flag",
        "category": "red_flag",
        "trigger_concepts": ["eye", "vision", "blur", "blind", "sight", "floaters", "red eye", "pus", "hypopyon", "photophobia"],
        "response_text": "Since last night my right eye became terribly painful, red, and swollen—now I can barely see shadows out of my right eye! It looks like there's a yellowish layer inside my pupil.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cns_meningitis_pulmonary_septic_emboli",
        "category": "red_flag",
        "trigger_concepts": ["headache", "neck", "stiff", "confusion", "neuro", "cough", "breathless", "chest", "weakness"],
        "response_text": "I have a mild frontal headache and dry cough, though no neck stiffness or limb weakness yet.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "uncontrolled_dm_poor_compliance",
        "category": "past_history",
        "trigger_concepts": ["diabetes", "sugar", "past medical", "pmhx", "medication", "meds", "metformin", "insulin", "compliance", "allergy"],
        "response_text": "I was told I had Type 2 diabetes 8 years ago at polyclinic, but I've been too busy at my hawker stall to take my Metformin or Glipizide for the past two years. No drug allergies.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "biliary_jaundice_travel_amoebic",
        "category": "social",
        "trigger_concepts": ["jaundice", "yellow", "stool", "urine", "travel", "alcohol", "smoking", "hawker", "occupation", "gallstone"],
        "response_text": "My eyes aren't yellow, no gallstones before, I haven't traveled outside Singapore, and I don't drink alcohol.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "bedside_exam_hypopyon_hepatomegaly",
        "category": "systemic",
        "trigger_concepts": ["exam", "examination", "abdomen", "liver", "pupils", "acuity", "vitals"],
        "response_text": "[Bedside Exam]: Markedly tender smooth hepatomegaly (punch tenderness positive over right costal margin). Right eye shows conjunctival chemosis, 2mm layering hypopyon in anterior chamber, and visual acuity reduced to Hand Movements (HM)!",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "Contrast CT Abdomen/Pelvis & Blood Culture Gram Stain",
      "description": "Urgent CECT Abdomen and preliminary blood culture notifications arrive:",
      "findings": {
        "CECT Abdomen": "Large 7.2 x 6.5 cm multiloculated hypodense abscess in Segment VII/VIII of the right hepatic lobe with rim enhancement and internal gas locules ('turquoise cluster sign'). Normal gallbladder and biliary tree.",
        "Blood Cultures (2 sets)": "Gram-negative bacilli growing in <8 hours — hypermucoviscous string-test POSITIVE (Hypermucoviscous Klebsiella pneumoniae serotype K1/K2).",
        "Liver Panel & Inflammatory Markers": "CRP 312 mg/L, Procalcitonin 28 ng/mL, ALP 285 U/L, Bilirubin 24 umol/L, HbA1c 11.4%."
      },
      "expected_shifts": {
        "Invasive Klebsiella pneumoniae Liver Abscess Syndrome with Metastatic Endogenous Endophthalmitis": 2,
        "Amoebic Liver Abscess (Entamoeba histolytica)": -2,
        "Ascending Cholangitis (Charcot's Triad)": -2
      },
      "expert_rationale": "Classic East Asian / Singapore Invasive Klebsiella pneumoniae (K1/K2 hypervirulent strain) Syndrome in a poorly controlled diabetic: primary cryptogenic gas-forming pyogenic liver abscess complicated by hematogenous endogenous endophthalmitis (hypopyon + vision loss). Requires STAT Ophthalmology intravitreal antibiotics (Vancomycin + Ceftazidime) to save vision, IV Ceftriaxone, and interventional radiology percutaneous drainage."
    },
    "differentials": [
      {
        "name": "Invasive Klebsiella pneumoniae Liver Abscess Syndrome with Endogenous Endophthalmitis",
        "tier": "primary",
        "supporting_features": [
          "Poorly controlled diabetic (HbA1c 11.4%) presenting with fever, rigors, RUQ pain",
          "Right eye hypopyon and visual loss (endogenous endophthalmitis)",
          "7.2 cm multiloculated gas-forming right lobe liver abscess + hypermucoviscous Gram-negative rods"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Ascending Cholangitis",
        "tier": "secondary",
        "supporting_features": ["Fever and RUQ pain"],
        "refuting_features": ["Non-dilated biliary tree on CT and presence of metastatic endophthalmitis + parenchymal abscess"],
        "prior_probability": 0.10,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "State the complete unifying diagnosis and explain why the eye finding is an ophthalmological emergency.",
        "target_rubric": "Invasive hypervirulent Klebsiella pneumoniae (K1/K2) pyogenic liver abscess syndrome complicated by metastatic endogenous endophthalmitis in a poorly controlled Type 2 diabetic; endogenous endophthalmitis causes rapid irreversible blindness/evisceration within hours unless emergency intravitreal antibiotics are injected.",
        "max_marks": 10,
        "key_points_required": [
          "Invasive Klebsiella pneumoniae Liver Abscess Syndrome (hypervirulent K1/K2 strain)",
          "Metastatic Endogenous Endophthalmitis (right eye hypopyon and visual loss)",
          "Predisposing risk factor: poorly controlled Type 2 Diabetes Mellitus (impaired neutrophil phagocytosis)",
          "Sight-threatening emergency requiring immediate Ophthalmology intervention to prevent permanent blindness"
        ]
      },
      {
        "prompt": "Detail your immediate antimicrobial, interventional radiology, and ophthalmological management plan.",
        "target_rubric": "Sepsis 6 bundle + blood cultures; IV Ceftriaxone 2g q12h (high CNS/ocular penetration) + IV Metronidazole (to cover anaerobes/Entamoeba initially); STAT Ophthalmology review for vitreous tap and intravitreal Ceftazidime + Vancomycin (+/- vitrectomy); Interventional Radiology ultrasound/CT-guided percutaneous pigtail catheter drainage (abscess > 5cm); IV insulin sliding scale for glycemic control; screen for other metastatic foci (brain abscess, septic pulmonary emboli, prostate).",
        "max_marks": 10,
        "key_points_required": [
          "Empiric IV Ceftriaxone (good ocular/CNS penetration) + IV Metronidazole after blood cultures",
          "STAT Ophthalmology referral for intravitreal antibiotics (Ceftazidime + Vancomycin) and vitreous tap/vitrectomy",
          "Interventional Radiology (IR) percutaneous catheter drainage of the 7.2cm liver abscess",
          "Strict inpatient glycemic control with IV insulin",
          "Screen for other metastatic seeding (CNS meningitis/brain abscess, septic pulmonary emboli)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Missing Metastatic Endogenous Endophthalmitis in Pyogenic Liver Abscess",
        "description": "Focusing exclusively on the abdomen/sepsis and dismissing the red blurred eye as conjunctivitis.",
        "trigger_condition": "Candidate fails to examine the eye or urgently refer to Ophthalmology for intravitreal antibiotics.",
        "remediation_advice": "In Singapore, any patient with a Klebsiella liver abscess who complains of blurred vision or red eye has Endogenous Endophthalmitis until proven otherwise. Systemic IV antibiotics alone cannot cross the blood-ocular barrier adequately—emergency intravitreal injection is mandatory!",
        "trigger_keywords": ["chloramphenicol eye drops", "conjunctivitis"],
        "absent_keywords": ["intravitreal", "ophthalmology", "eye"],
        "missed_gate_keys": ["endophthalmitis_visual_loss_red_flag"]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },

  "ent_13": {
    "case_id": "ent_13",
    "specialty": "ENT / Otorhinolaryngology / Oncology",
    "title": "54yo Cantonese Roast Meat Chef with Unilateral Neck Lump, Tinnitus & Diplopia (NPC)",
    "brief": {
      "setting": "Singapore General Hospital (SGH) ENT Specialist Outpatient Clinic",
      "patient_name": "Mr. Ho Kwok Wing",
      "age": 54,
      "gender": "Male",
      "occupation": "Cantonese Roast Meat & Salted Fish Chef",
      "presenting_complaint": "Painless left upper neck lump for 2 months, blocked left ear, morning blood-stained saliva, and 1 week of double vision when looking left",
      "triage_vitals": {
        "Heart Rate": "76 bpm",
        "Blood Pressure": "132/80 mmHg",
        "Respiratory Rate": "14 /min",
        "Oxygen Saturation": "99% on room air",
        "Temperature": "36.6°C"
      },
      "instructions": "Take a targeted ENT & cranial nerve history from Mr. Ho, recognize the classic anatomical triad of Nasopharyngeal Carcinoma (NPC), interpret the nasoendoscopy/MRI findings, and outline staging and treatment."
    },
    "persona": {
      "name": "Mr. Ho Kwok Wing",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+0%",
      "pain_level": 2,
      "temperament": "anxious",
      "behavioral_cues": [
        "Touches a firm 4cm left Level II/VA neck mass",
        "Turns head slightly to the left to compensate for horizontal diplopia"
      ]
    },
    "gates": [
      {
        "key": "neck_lump_level_ii_v",
        "category": "socrates",
        "trigger_concepts": ["lump", "neck", "swelling", "where", "onset", "start", "pain", "size", "growing"],
        "response_text": "I noticed this firm lump under my left ear angle about two months ago. It doesn't hurt at all, so I ignored it, but it's grown to the size of a golf ball.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "nasal_postnasal_blood_epistaxis",
        "category": "red_flag",
        "trigger_concepts": ["nose", "nasal", "bleed", "epistaxis", "blood", "saliva", "phlegm", "sputum", "blocked"],
        "response_text": "Every morning when I hawk back phlegm from the back of my nose, there are streaks of fresh blood in my saliva, and my left nostril feels blocked.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "otologic_unilateral_ome_tinnitus",
        "category": "red_flag",
        "trigger_concepts": ["ear", "hearing", "deaf", "tinnitus", "ringing", "muffled", "fluid", "otalgia"],
        "response_text": "My left ear has felt muffled and underwater for 6 weeks with a constant low ringing sound, like after taking an airplane.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "skull_base_cranial_nerve_vi_v_palsy",
        "category": "red_flag",
        "trigger_concepts": ["double vision", "diplopia", "eye", "vision", "numb", "face", "facial", "headache", "cranial", "swallow", "hoarse"],
        "response_text": "For the past week I've been seeing double whenever I look to the left, and the left side of my cheek feels slightly numb and tingly.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cantonese_salted_fish_ebv_family_hx",
        "category": "social",
        "trigger_concepts": ["cantonese", "diet", "salted fish", "preserved", "family", "brother", "father", "cancer", "smoking", "alcohol", "occupation"],
        "response_text": "My family is Cantonese—we grew up eating salted fish since childhood, and my older brother was treated for nose cancer (NPC) at NCCS three years ago. I smoke 10 cigarettes a day.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "bedside_exam_cn6_serous_otitis_neck_node",
        "category": "systemic",
        "trigger_concepts": ["exam", "examination", "neuro", "pupils", "ear", "otoscopy", "tuning fork", "rinne", "weber", "neck"],
        "response_text": "[Bedside Exam]: 4x3cm firm nontender left Level II & VA cervical lymphadenopathy. Otoscopy: Left dull retracted tympanic membrane with serous middle ear effusion (Weber lateralizes to left, Rinne negative on left = conductive hearing loss). Cranial Nerves: Left Lateral Rectus (CN VI) palsy on left lateral gaze + decreased sensation over left maxillary (CN V2) distribution!",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "Flexible Nasoendoscopy, Biopsy & MRI Nasopharynx/Skull Base",
      "description": "Clinic flexible nasoendoscopy and contrast MRI Nasopharynx results return:",
      "findings": {
        "Flexible Nasoendoscopy & Biopsy": "Exophytic, friable ulcerative mass obliterating the left Fossa of Rosenmüller and compressing the torus tubarius (Eustachian tube orifice). Biopsy: Non-keratinizing undifferentiated carcinoma (WHO Type III), EBER (EBV-encoded RNA) in-situ hybridization strongly POSITIVE.",
        "MRI Nasopharynx & Neck": "Left nasopharyngeal mass invading superiorly through foramen lacerum into the left cavernous sinus (encasing CN V2 and CN VI), with ipsilateral Level II and Level VA nodal metastases (Stage T4 N1 M0, Stage IVA).",
        "Plasma EBV DNA Load": "14,200 copies/mL."
      },
      "expected_shifts": {
        "Locally Advanced Nasopharyngeal Carcinoma (NPC, Stage T4N1M0) with Skull Base & Cavernous Sinus Invasion": 2,
        "Benign Adult Otitis Media with Effusion & Reactive Lymphadenitis": -2,
        "Primary Parotid / Salivary Gland Malignancy": -2
      },
      "expert_rationale": "In Singapore/Southern Chinese adults, the classic triad of 1. Cervical lymphadenopathy (most common presenting sign, 75%), 2. Otologic symptoms (unilateral serous otitis media from Eustachian tube obstruction at the Fossa of Rosenmüller), and 3. Nasal symptoms (morning blood-stained post-nasal drip) is Nasopharyngeal Carcinoma (NPC) until proven otherwise. Invasion through foramen lacerum into the cavernous sinus explains the CN VI (lateral rectus diplopia) and CN V2 (cheek numbness) palsies."
    },
    "differentials": [
      {
        "name": "Nasopharyngeal Carcinoma (NPC) originating from Fossa of Rosenmüller with Cavernous Sinus Invasion",
        "tier": "primary",
        "supporting_features": [
          "Classic NPC triad: painless Level II/VA neck node, unilateral middle ear effusion, morning blood-stained saliva",
          "Left CN VI (abducens) and CN V2 (maxillary) palsy from foramen lacerum / cavernous sinus extension",
          "High-risk Cantonese ethnicity, salted fish diet, positive first-degree family history, EBV positive"
        ],
        "refuting_features": [],
        "prior_probability": 0.90,
        "posterior_probability": 0.99
      },
      {
        "name": "Head & Neck Lymphoma",
        "tier": "secondary",
        "supporting_features": ["Painless cervical lymphadenopathy"],
        "refuting_features": ["Biopsy confirms WHO Type III undifferentiated NPC with EBER positivity"],
        "prior_probability": 0.08,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "Explain the anatomical basis of Mr. Ho's conductive hearing loss, cheek numbness, and horizontal diplopia.",
        "target_rubric": "Tumor arises in the Fossa of Rosenmüller (lateral pharyngeal recess) -> obstructs Eustachian tube (torus tubarius) causing negative middle ear pressure and unilateral Otitis Media with Effusion (conductive hearing loss); superior extension through Foramen Lacerum into the Cavernous Sinus compresses CN VI (Abducens nerve -> lateral rectus palsy -> diplopia on ipsilateral gaze) and CN V2 (Maxillary division of Trigeminal nerve -> cheek paresthesia).",
        "max_marks": 10,
        "key_points_required": [
          "Origin in Fossa of Rosenmüller obstructing Eustachian tube -> unilateral Otitis Media with Effusion (conductive deafness)",
          "Superior skull base invasion via Foramen Lacerum into the Cavernous Sinus",
          "CN VI (Abducens nerve) compression -> left lateral rectus palsy and horizontal diplopia",
          "CN V2 (Maxillary branch of trigeminal nerve) involvement -> left cheek numbness"
        ]
      },
      {
        "prompt": "How do you confirm the diagnosis, stage this patient, and treat Stage IVA (T4N1M0) NPC?",
        "target_rubric": "NEVER perform excisional biopsy of the neck node first (causes tumor seeding/violates tissue planes); confirm via Flexible Nasoendoscopy with direct endoscopic biopsy of the Fossa of Rosenmüller primary mass; MRI Nasopharynx & Neck for local/skull base T&N staging + CT Thorax/Abdomen or PET-CT for distant metastases + quantitative plasma EBV DNA for prognostication/surveillance; primary treatment for Stage IVA (T4N1M0) is Induction Chemotherapy (Gemcitabine + Cisplatin) followed by Concurrent Chemo-Radiotherapy (IMRT + Cisplatin), NOT upfront surgery.",
        "max_marks": 10,
        "key_points_required": [
          "Flexible nasoendoscopy and endoscopic biopsy of the nasopharyngeal primary in Fossa of Rosenmüller",
          "Do NOT perform open excisional biopsy of the cervical lymph node (risk of tumor spillage and worse prognosis)",
          "MRI Nasopharynx/Skull Base + PET-CT (or CT TAP) staging + Plasma EBV DNA viral load",
          "Definitive treatment: Concurrent Chemo-Radiotherapy (IMRT + Cisplatin) with Induction Gemcitabine-Cisplatin (radiosensitive tumor; surgery reserved only for salvage)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Open Excisional Biopsy of Suspected NPC Cervical Node",
        "description": "Booking an open excisional lymph node biopsy in the neck before performing nasoendoscopy.",
        "trigger_condition": "Candidate orders excisional biopsy of the neck lump first.",
        "remediation_advice": "NEVER do an open excisional biopsy of an adult lateral neck mass before flexible nasoendoscopy! Open biopsy violates fascial planes, causes local tumor seeding, and compromises definitive radiotherapy.",
        "trigger_keywords": ["excisional biopsy of neck", "excise the lymph node", "remove the neck lump"],
        "absent_keywords": [],
        "missed_gate_keys": ["skull_base_cranial_nerve_vi_v_palsy"]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },

  "med_14": {
    "case_id": "med_14",
    "specialty": "Emergency Medicine / Critical Care",
    "title": "OCS Officer Cadet Collapsing at 9.5km Route March with Core Temp 41.4°C (Exertional Heat Stroke)",
    "brief": {
      "setting": "SAFTI Military Institute Medical Centre -> Ng Teng Fong General Hospital (NTFGH) ED Resus",
      "patient_name": "OCT Marcus Lim (Collat. History from Safety Medic)",
      "age": 20,
      "gender": "Male",
      "occupation": "SAF Officer Cadet (OCS Infantry Term)",
      "presenting_complaint": "Collapsed in delirium at the 9.5km mark of a 10km fast march in full battle order; core rectal temperature 41.4°C",
      "triage_vitals": {
        "Heart Rate": "152 bpm (Sinus tachycardia)",
        "Blood Pressure": "88/46 mmHg",
        "Respiratory Rate": "34 /min (Hyperventilating)",
        "Oxygen Saturation": "97% on High-Flow O2",
        "Core Rectal Temperature": "41.4°C (106.5°F)",
        "GCS": "9/15 (E2 V3 M4 — agitated, combative, incoherent)"
      },
      "instructions": "Obtain rapid collateral history from the accompanying SAF Medic, exclude mimics, interpret the STAT VBG/CK/coagulation panel, and direct immediate life-saving resuscitation."
    },
    "persona": {
      "name": "CPL Amir (Accompanying SAF Medic)",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+5%",
      "pain_level": 9,
      "temperament": "urgent",
      "behavioral_cues": [
        "Patient is flushed, hot, tachycardic, and agitated on the resuscitation trolley",
        "Medic has field vitals log and water parade records ready"
      ]
    },
    "gates": [
      {
        "key": "collapse_exertion_wet_bulb_context",
        "category": "socrates",
        "trigger_concepts": ["onset", "start", "happen", "march", "collapse", "where", "timing", "heat", "humidity", "occupation", "army"],
        "response_text": "Doctor, OCT Marcus was at the 9.5km mark of a 10km timed route march carrying 22kg full battle order in high humidity. He started staggering, shouting incoherently, and collapsed onto the track 25 minutes ago.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "cns_dysfunction_seizure_delirium",
        "category": "red_flag",
        "trigger_concepts": ["neuro", "gcs", "confusion", "delirium", "seizure", "fit", "agitated", "coma", "headache", "behavior"],
        "response_text": "Before collapsing he was disoriented and combative, didn't recognize his platoon commander, and had a brief 30-second generalized tonic-clonic seizure in the safety vehicle!",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "prodromal_viral_illness_sleep_debt",
        "category": "past_history",
        "trigger_concepts": ["sick", "fever", "flu", "cold", "diarrhea", "sleep", "rest", "hydration", "water", "past medical"],
        "response_text": "His buddy just admitted that Marcus had a mild sore throat and runny nose for 2 days and only slept 4 hours last night, but hid it because he didn't want to fall out of his commissioning milestone march.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "supplements_preworkout_drugs_anticholinergics",
        "category": "drug_history",
        "trigger_concepts": ["medication", "meds", "supplement", "pre-workout", "caffeine", "ephedrine", "drug", "antihistamine", "allergy"],
        "response_text": "He took two scoops of a high-caffeine pre-workout powder this morning and an over-the-counter sedating antihistamine (Chlorpheniramine) last night for his runny nose! No drug allergies.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "rhabdomyolysis_dark_urine_coagulopathy",
        "category": "red_flag",
        "trigger_concepts": ["urine", "dark", "tea", "cola", "bleed", "rhabdo", "muscle", "kidney", "vomiting"],
        "response_text": "When we inserted the urinary catheter in Resus, only 30 mL of dark reddish-brown 'Coca-Cola' colored urine drained out, and he is oozing blood around his IV cannula site.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "bedside_exam_core_temp_skin",
        "category": "systemic",
        "trigger_concepts": ["exam", "examination", "skin", "sweat", "pupils", "chest", "abdomen", "vitals", "rectal"],
        "response_text": "[Bedside Exam]: Core rectal temp 41.4°C, profuse diaphoresis (wet skin in Exertional Heat Stroke!), equal reactive pupils, no meningism, oozing from venepuncture sites, dark myoglobinuric urine.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT Resuscitation Blood Gas, Creatine Kinase & Coagulation Profile",
      "description": "Point-of-care VBG, biochemistry, and urinalysis results arrive:",
      "findings": {
        "Blood Gas & Lactate": "pH 7.18, Lactate 7.8 mmol/L, HCO3 14 mmol/L, Glucose 4.6 mmol/L",
        "Creatine Kinase (CK) & Renal Panel": "CK 48,500 U/L (Severe Rhabdomyolysis), Potassium 6.3 mmol/L (Hyperkalemia!), Creatinine 198 umol/L (Acute Kidney Injury)",
        "Urinalysis": "Dipstick 3+ Blood, 0-1 RBC/hpf on microscopy (Classic Myoglobinuria)",
        "Coagulation & Liver Panel": "INR 2.1, APTT 58s, Platelets 68 x 10^9/L, Fibrinogen 1.1 g/L (Early DIC), AST 680 U/L, ALT 540 U/L (Ischemic/thermal hepatitis)"
      },
      "expected_shifts": {
        "Exertional Heat Stroke (EHS) complicated by Rhabdomyolysis, Hyperkalemia, AKI & Early DIC": 2,
        "Simple Heat Exhaustion": -2,
        "Hypoglycemic Seizure": -2
      },
      "expert_rationale": "Diagnostic hallmark of Exertional Heat Stroke (EHS) vs Heat Exhaustion is Core Temperature > 40.0°C PLUS Central Nervous System dysfunction (delirium, coma, seizure). Note that patients with EHS frequently still sweat profusely! Multi-organ complications include severe rhabdomyolysis (CK 48,500, myoglobinuria, K+ 6.3), AKI, acute hepatic injury, and DIC. Antipyretics (Paracetamol/NSAIDs) and Dantrolene are INEFFECTIVE and harmful."
    },
    "differentials": [
      {
        "name": "Exertional Heat Stroke (EHS) with Rhabdomyolysis, Hyperkalemia & Early DIC",
        "tier": "primary",
        "supporting_features": [
          "Core rectal temperature 41.4°C (>40°C) + CNS dysfunction (GCS 9, seizure, delirium)",
          "Precipitants: 10km route march, intercurrent URTI, sleep deprivation, antihistamine + pre-workout",
          "CK 48,500 U/L, tea-colored myoglobinuria (dipstick + blood, 0 RBCs), K+ 6.3 mmol/L, INR 2.1"
        ],
        "refuting_features": [],
        "prior_probability": 0.90,
        "posterior_probability": 0.99
      },
      {
        "name": "Heat Exhaustion",
        "tier": "secondary",
        "supporting_features": ["Exertional hyperthermia during route march"],
        "refuting_features": ["Presence of severe CNS dysfunction (GCS 9, seizure) and temp >40°C defines Heat Stroke, not Heat Exhaustion"],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "What is your #1 priority intervention within the Golden 30 Minutes, and what target core temperature do you stop active cooling at?",
        "target_rubric": "Immediate rapid physical cooling ('Cool First, Transport Second') aiming to reduce core rectal temperature below 39.0°C within 30 minutes (cooling rate >0.15°C/min) using Cold/Ice Water Immersion (gold standard) or Body Cooling Unit / evaporative misting + fans + ice packs to axillae/groin/neck + cooled IV 0.9% Normal Saline; STOP active ice cooling at 38.6°C - 39.0°C to prevent overshoot hypothermia.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate rapid physical cooling: Ice/Cold Water Immersion (gold standard) or evaporative cooling + ice packs to neck/axillae/groin",
          "Continuous core rectal or esophageal temperature monitoring",
          "Target core temperature < 39.0°C within 30 minutes",
          "Stop active cooling at 38.6°C - 39.0°C to prevent iatrogenic overshoot hypothermia"
        ]
      },
      {
        "prompt": "How will you manage his rhabdomyolysis, K+ of 6.3 mmol/L, and why must you avoid Paracetamol and NSAIDs?",
        "target_rubric": "Treat hyperkalemia (K+ 6.3) immediately: 10mL 10% IV Calcium Gluconate for cardiac membrane stabilization + IV Insulin 10U with 50mL 50% Dextrose; aggressive IV crystalloid hydration (0.9% Normal Saline, avoid potassium-containing Hartmann's initially) titrated to urine output 200-300 mL/h (2-3 mL/kg/h) to flush myoglobin casts; strictly avoid Paracetamol (worsens acute hypoxic/thermal liver failure and does not work on non-pyrogenic hypothalamic hyperthermia) and NSAIDs (worsen acute kidney injury).",
        "max_marks": 10,
        "key_points_required": [
          "Hyperkalemia treatment: IV 10% Calcium Gluconate + IV Insulin/Dextrose shift",
          "Aggressive IV Normal Saline hydration targeting high urine output (200-300 mL/hr) to prevent myoglobinuric renal failure",
          "Benzodiazepines (IV Lorazepam/Midazolam) for seizures and to suppress shivering",
          "Strictly AVOID Paracetamol (ineffective in heat stroke and worsens acute hepatic necrosis) and NSAIDs (nephrotoxic in AKI)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Giving Paracetamol or NSAIDs for Exertional Heat Stroke",
        "description": "Administering IV Paracetamol or NSAIDs to lower the 41.4°C temperature.",
        "trigger_condition": "Candidate orders Paracetamol or Ibuprofen/Diclofenac.",
        "remediation_advice": "Exertional Heat Stroke is caused by overwhelmed thermoregulatory heat dissipation, NOT hypothalamic PGE2 set-point elevation. Paracetamol has ZERO antipyretic effect here and precipitates fulminant hepatic failure on top of thermal liver injury!",
        "trigger_keywords": ["give paracetamol", "iv paracetamol", "administer paracetamol", "give nsaid", "ibuprofen"],
        "absent_keywords": [],
        "missed_gate_keys": ["rhabdomyolysis_dark_urine_coagulopathy"]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },

  "surg_15": {
    "case_id": "surg_15",
    "specialty": "General Surgery / Vascular Surgery",
    "title": "72yo Retiree with Atrial Fibrillation & 'Pain Out of Proportion' to Exam (Acute SMA Embolism)",
    "brief": {
      "setting": "National University Hospital (NUH) Emergency Department",
      "patient_name": "Mdm. Tan Swee Lan",
      "age": 72,
      "gender": "Female",
      "occupation": "Retired Seamstress",
      "presenting_complaint": "Sudden, agonizing 10/10 central abdominal pain for 3 hours with forceful vomiting, but abdomen feels surprisingly soft",
      "triage_vitals": {
        "Heart Rate": "124 bpm (Irregularly irregular)",
        "Blood Pressure": "108/68 mmHg",
        "Respiratory Rate": "26 /min",
        "Oxygen Saturation": "95% on room air",
        "Temperature": "36.7°C",
        "Pain Score": "10/10"
      },
      "instructions": "Take a focused surgical history from Mdm. Tan, identify the classic vascular emergency, interpret the ABG/CT Angiogram perturbation, and outline urgent surgical and endovascular management."
    },
    "persona": {
      "name": "Mdm. Tan Swee Lan",
      "voice_id": "en-SG-LunaNeural",
      "speech_rate": "-5%",
      "pain_level": 10,
      "temperament": "distressed",
      "behavioral_cues": [
        "Writhing in agony on the trolley, unable to find a comfortable position",
        "Abdomen looks unremarkable and feels soft despite 10/10 pain"
      ]
    },
    "gates": [
      {
        "key": "sudden_severe_pain_out_of_proportion",
        "category": "socrates",
        "trigger_concepts": ["onset", "start", "pain", "where", "character", "severity", "radiate", "worse", "better", "timing"],
        "response_text": "Doctor, it hit me like a lightning bolt three hours ago right around my belly button! It's 10 out of 10 agony—the worst pain of my life—nothing relieves it.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "gut_emptying_vomiting_bloody_diarrhea",
        "category": "red_flag",
        "trigger_concepts": ["vomit", "nausea", "diarrhea", "bowel", "stool", "blood", "melena", "hematochezia", "currant"],
        "response_text": "Right after the pain started I had a sudden urgent bowel movement and threw up three times. Half an hour ago I passed dark maroon, blood-stained watery stool.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "atrial_fibrillation_anticoagulation_noncompliance",
        "category": "drug_history",
        "trigger_concepts": ["atrial fibrillation", "heart", "palpitation", "irregular", "blood thinner", "apixaban", "rivaroxaban", "warfarin", "medication", "meds", "compliance", "stop"],
        "response_text": "I have an irregular heartbeat (Atrial Fibrillation) and hypertension. I'm supposed to take Apixaban (Eliquis) twice a day, but I ran out of pills 10 days ago and didn't refill them because I felt fine!",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "vascular_history_aaa_mi",
        "category": "past_history",
        "trigger_concepts": ["past medical", "pmhx", "surgery", "stroke", "claudication", "smoking", "alcohol", "allergy", "peptic", "gallstone"],
        "response_text": "I had a minor TIA two years ago, no previous abdominal surgeries, non-smoker, and no drug allergies.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "bedside_exam_soft_abdomen_absent_peritonism",
        "category": "systemic",
        "trigger_concepts": ["exam", "examination", "abdomen", "guarding", "rebound", "peritonism", "bowel sounds", "pr", "rectal", "pulse", "vitals"],
        "response_text": "[Bedside Exam]: Pulse 124 bpm irregularly irregular. Abdomen is SOFT and non-distended with only mild vague periumbilical tenderness and NO guarding or rebound ('Pain out of proportion to physical examination findings'!). Bowel sounds hypoactive; PR exam shows maroon blood on glove.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT Arterial Blood Gas & Triphasic CT Mesenteric Angiogram (CTA)",
      "description": "Bedside ABG and urgent CT Mesenteric Angiogram results return:",
      "findings": {
        "Arterial Blood Gas": "pH 7.21, HCO3 13.2 mmol/L, Base Excess -13.5, Arterial Lactate 6.8 mmol/L (Severe High Anion Gap Lactic Acidosis)",
        "Total White Cell Count": "23.4 x 10^9/L (Marked leukocytosis), Serum Amylase 140 U/L (Normal)",
        "CT Mesenteric Angiogram (CTA)": "Abrupt thromboembolic occlusion of the Superior Mesenteric Artery (SMA) 4 cm distal to its ostium (just beyond the middle colic artery origin). Jejunal and ileal loops show hypo-enhancing bowel wall ('paper-thin wall'), without pneumatosis intestinalis or free air yet."
      },
      "expected_shifts": {
        "Acute Mesenteric Ischemia (Cardioembolic SMA Occlusion secondary to un-anticoagulated Atrial Fibrillation)": 2,
        "Acute Pancreatitis": -2,
        "Perforated Peptic Ulcer": -2
      },
      "expert_rationale": "The cardinal clinical triad of Acute Mesenteric Ischemia (SMA Embolism) is: 1. Severe acute abdominal pain out of proportion to physical exam (soft abdomen because ischemia begins at the mucosa before reaching the parietal peritoneum), 2. Embolic source (un-anticoagulated Atrial Fibrillation), and 3. Gut emptying (vomiting/maroon stool) with severe lactic acidosis (Lactate 6.8). Immediate IV unfractionated heparin, broad-spectrum antibiotics, fluid resuscitation, and emergency revascularization (embolectomy + laparotomy to inspect bowel viability) are mandatory."
    },
    "differentials": [
      {
        "name": "Acute Mesenteric Ischemia (Superior Mesenteric Artery Thromboembolism)",
        "tier": "primary",
        "supporting_features": [
          "Classic 'pain out of proportion to physical examination' (10/10 pain with soft abdomen)",
          "Atrial fibrillation with 10-day omission of Apixaban",
          "Lactate 6.8 mmol/L + CTA showing abrupt SMA occlusion 4cm from ostium"
        ],
        "refuting_features": [],
        "prior_probability": 0.90,
        "posterior_probability": 0.99
      },
      {
        "name": "Ruptured Abdominal Aortic Aneurysm (AAA)",
        "tier": "must_not_miss",
        "supporting_features": ["Elderly patient with sudden severe abdominal pain"],
        "refuting_features": ["Normal aorta and isolated SMA embolus demonstrated on CTA"],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Why does this patient have 10/10 abdominal pain despite a soft, non-peritonitic abdomen, and why did the embolus lodge 4cm distal to the SMA origin?",
        "target_rubric": "Ischemia progresses from the inner metabolically active mucosa outward toward the serosa; visceral pain fibers are stimulated immediately by mucosal ischemia (causing agonizing colicky/constant periumbilical pain), whereas somatic parietal peritonism (guarding/rigidity) only appears late when full-thickness transmural infarction/gangrene occurs; the SMA arises from the aorta at an acute oblique angle (~45 degrees) and narrows just distal to the origin of the middle colic artery (3-8 cm from ostium), where cardiogenic emboli classically lodge.",
        "max_marks": 10,
        "key_points_required": [
          "Bowel ischemia starts at the inner mucosa (visceral pain) before reaching the outer serosa/parietal peritoneum",
          "Peritonism (guarding/rebound) is a LATE sign indicating transmural bowel infarction/necrosis",
          "SMA branches off the abdominal aorta at an oblique angle, making it the #1 target for cardiogenic emboli",
          "Emboli typically lodge 3-8 cm from the SMA ostium just distal to the middle colic artery takeoff (sparing proximal jejunum)"
        ]
      },
      {
        "prompt": "Outline your immediate resuscitation and definitive surgical/vascular management plan.",
        "target_rubric": "NBM, NG tube decompression, aggressive IV crystalloid resuscitation (correct massive third-space fluid losses), avoid vasopressors if possible (worsen splanchnic vasoconstriction); start immediate therapeutic IV Unfractionated Heparin bolus + infusion to prevent thrombus propagation; broad-spectrum IV antibiotics (Ceftriaxone + Metronidazole or Piperacillin-Tazobactam) against bacterial translocation; emergency Vascular & General Surgery intervention: open SMA embolectomy (via Fogarty catheter) or hybrid endovascular aspiration thrombectomy PLUS exploratory laparotomy to assess bowel viability, resect frankly necrotic segments, and plan a 'Second-Look Laparotomy' at 24-48 hours.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate therapeutic IV Unfractionated Heparin infusion to halt clot propagation",
          "Aggressive IV crystalloid resuscitation + broad-spectrum IV antibiotics (against mucosal bacterial translocation)",
          "Gold-standard imaging is Triphasic CT Mesenteric Angiogram (CTA)",
          "Emergency revascularization (SMA Fogarty embolectomy / endovascular thrombectomy) + Laparotomy to assess bowel viability",
          "Planned Second-Look Laparotomy in 24-48 hours before definitive anastomosis"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "False Reassurance from a Soft Abdomen & Normal Amylase",
        "description": "Waiting for guarding/rebound tenderness or ordering plain X-rays before getting a CT Mesenteric Angiogram.",
        "trigger_condition": "Candidate delays CTA or discharges/observes because the abdomen is soft.",
        "remediation_advice": "In Acute Mesenteric Ischemia, waiting for peritonism means waiting for dead bowel (>80% mortality). Any AF patient with sudden abdominal pain out of proportion to exam needs an immediate CT Mesenteric Angiogram!",
        "trigger_keywords": ["discharge", "observe overnight", "wait for peritonism"],
        "absent_keywords": ["heparin", "angiogram", "embolectomy"],
        "missed_gate_keys": ["atrial_fibrillation_anticoagulation_noncompliance"]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  }
};

// -------------------------------------------------------------
// APPLICATION STATE
// -------------------------------------------------------------
let ALL_CASES_MAP = {};
let currentCases = [];
let activeFilterCategory = "all";
let currentSearchQuery = "";

let activeSessionId = null;
let activeCase = null;
let timerInterval = null;
let timeRemainingSec = 420;
let isAudioMuted = false;
let interactionMode = "blitz"; // 'blitz' (Instant Bullet Feed) | 'spoken' (Spoken Patient Audio)
let revealMissedClues = false;
let currentAudioElement = null;
let latestMarkdownReport = "";

// Browser Client-Side Session State (0ms Latency Standalone Engine)
let clientSession = {
  unlockedGateKeys: new Set(),
  turnCount: 0,
  perturbationTriggered: false,
  perturbationConcordance: 80.0,
  perturbationReasoning: "",
  triggeredTraps: [],
  vivaIndex: 0,
  vivaScores: {},
  vivaAnswers: []
};

// Browser SpeechRecognition + MediaRecorder Fallback State
let speechRecognizer = null;
let isRecording = false;
let isVivaRecording = false;
let mediaRecorder = null;
let audioChunks = [];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  await loadCases();
  initSpeechRecognitionStatus();

  const textInput = document.getElementById("candidate-text-input");
  if (textInput) {
    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendCandidateMessage();
      }
    });
  }
});

function showView(viewId) {
  const views = ["cases-view", "brief-view", "consultation-view", "viva-view", "scorecard-view"];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) el.classList.remove("hidden");
      else el.classList.add("hidden");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setInteractionMode(mode) {
  interactionMode = mode === "spoken" ? "spoken" : "blitz";
  const blitzBtn = document.getElementById("mode-btn-blitz");
  const audioBtn = document.getElementById("mode-btn-audio");
  const feedLabel = document.getElementById("feed-mode-label");

  if (interactionMode === "blitz") {
    if (blitzBtn) blitzBtn.className = "px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white shadow-sm transition flex items-center space-x-1";
    if (audioBtn) audioBtn.className = "px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition flex items-center space-x-1";
    if (feedLabel) feedLabel.innerText = "⚡ Blitz Bullet Feed (Instant <10ms Clinical Facts)";
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (currentAudioElement) currentAudioElement.pause();
  } else {
    if (audioBtn) audioBtn.className = "px-2.5 py-1.5 rounded-lg bg-cyan-600 text-white shadow-sm transition flex items-center space-x-1";
    if (blitzBtn) blitzBtn.className = "px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition flex items-center space-x-1";
    if (feedLabel) feedLabel.innerText = "🗣️ Spoken Patient Audio Mode (1.4x High-Speed Voice + Findings)";
  }
}

// -------------------------------------------------------------
// CASE LOADING & STATION SELECTOR FILTER BAR
// -------------------------------------------------------------
async function loadCases() {
  // 1. Merge fallback SG Classics + window.VOICE_OSCE_CASES from cases_data.js
  const rawMap = Object.assign({}, FALLBACK_SG_CASES, window.VOICE_OSCE_CASES || {});
  ALL_CASES_MAP = {};

  Object.entries(rawMap).forEach(([id, c]) => {
    ALL_CASES_MAP[id] = JSON.parse(JSON.stringify(c));
  });

  // 2. If running against live FastAPI backend, also check /api/cases for any extra server cases
  try {
    const res = await fetch("/api/cases");
    if (res.ok) {
      const apiList = await res.json();
      if (Array.isArray(apiList)) {
        for (const item of apiList) {
          if (!ALL_CASES_MAP[item.id]) {
            const detailRes = await fetch(`/api/cases/${item.id}`);
            if (detailRes.ok) {
              const detail = await detailRes.json();
              ALL_CASES_MAP[item.id] = detail;
            }
          }
        }
      }
    }
  } catch (_) {
    // 100% Standalone mode (GitHub Pages / Offline iPad)
  }

  currentCases = Object.values(ALL_CASES_MAP).map(c => {
    const gates = c.gates || [];
    const redFlagsCount = gates.filter(g => g.category === "red_flag" || g.mandatory_for_safety).length;
    const clinicalGatesCount = gates.filter(g => g.category !== "ice").length;
    return {
      id: c.case_id || c.id,
      specialty: c.specialty,
      title: c.title,
      patient: `${c.persona?.name || c.brief?.patient_name} (${c.brief?.age}yo ${c.brief?.gender})`,
      setting: c.brief?.setting || "Hospital Setting",
      complaint: c.brief?.presenting_complaint || "",
      isSgClassic: SG_CLASSIC_IDS.has(c.case_id || c.id),
      redFlagsCount,
      clinicalGatesCount
    };
  });

  renderCasesGrid(getFilteredCases());
}

function isCaseMatchingFilter(c, filterKey) {
  const id = c.id;
  const spec = (c.specialty || "").toLowerCase();
  if (filterKey === "all") return true;
  if (filterKey === "sg_classics") return SG_CLASSIC_IDS.has(id);
  if (filterKey === "emergency") {
    return spec.includes("emergency") || spec.includes("acute") || spec.includes("critical") ||
      ["cardio_01", "neuro_03", "resp_04", "endo_10", "id_11", "med_14", "surg_15"].includes(id);
  }
  if (filterKey === "medicine") {
    return spec.includes("cardio") || spec.includes("neuro") || spec.includes("respiratory") ||
      spec.includes("gastro") || spec.includes("endo") || spec.includes("infectious") ||
      ["cardio_01", "neuro_03", "resp_04", "gastro_05", "endo_10", "id_11", "gastro_12", "med_14"].includes(id);
  }
  if (filterKey === "surgery") {
    return spec.includes("ortho") || spec.includes("surg") || spec.includes("ent") || spec.includes("otorhino") ||
      ["ortho_02", "ortho_09", "ent_13", "surg_15", "gastro_12", "gastro_05"].includes(id);
  }
  if (filterKey === "obgyn_peds_psych") {
    return spec.includes("obstetric") || spec.includes("gyn") || spec.includes("pediatric") || spec.includes("psych") ||
      ["obgyn_06", "psych_07", "peds_08"].includes(id);
  }
  return spec.includes(filterKey.toLowerCase());
}

function getFilteredCases() {
  return currentCases.filter(c => {
    const matchesTab = isCaseMatchingFilter(c, activeFilterCategory);
    if (!matchesTab) return false;
    if (!currentSearchQuery) return true;
    const q = currentSearchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.specialty.toLowerCase().includes(q) ||
      c.complaint.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q) ||
      c.patient.toLowerCase().includes(q)
    );
  });
}

function filterCases(category) {
  activeFilterCategory = category;
  document.querySelectorAll(".filter-tab").forEach(tab => {
    if (tab.dataset.specialty === category) {
      tab.classList.remove("text-slate-400", "text-rose-300", "bg-rose-500/10");
      tab.classList.add("bg-emerald-600", "text-white", "shadow-sm");
    } else {
      tab.classList.remove("bg-emerald-600", "text-white", "shadow-sm");
      if (tab.dataset.specialty === "sg_classics") {
        tab.classList.add("text-rose-300", "bg-rose-500/10");
      } else {
        tab.classList.add("text-slate-400");
      }
    }
  });
  renderCasesGrid(getFilteredCases());
}

function handleStationSearch(query) {
  currentSearchQuery = (query || "").trim();
  renderCasesGrid(getFilteredCases());
}

function renderCasesGrid(cases) {
  const grid = document.getElementById("cases-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (cases.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full glassmorphism rounded-2xl p-8 text-center text-slate-400 border border-slate-800">
        No stations matched your filter. <button onclick="filterCases('all')" class="text-emerald-400 underline font-bold ml-1">Reset filters</button>
      </div>
    `;
    return;
  }

  cases.forEach(c => {
    const card = document.createElement("div");
    const sgBorder = c.isSgClassic ? "border-rose-500/40 hover:border-rose-400" : "border-slate-800 hover:border-emerald-500/50";
    card.className = `glassmorphism rounded-2xl p-5 border ${sgBorder} transition duration-200 flex flex-col justify-between space-y-4 group shadow-lg relative overflow-hidden`;

    const specialtyBadgeColor = getSpecialtyBadgeClass(c.specialty);
    const sgBadgeHtml = c.isSgClassic
      ? `<span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm">🇸🇬 SG Classic</span>`
      : "";

    card.innerHTML = `
      <div class="space-y-3 cursor-pointer" onclick="selectCaseForBrief('${escapeHtml(c.id)}')">
        <div class="flex flex-wrap items-center justify-between gap-1.5">
          <div class="flex flex-wrap items-center gap-1.5">
            ${sgBadgeHtml}
            <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${specialtyBadgeColor}">
              ${escapeHtml(c.specialty)}
            </span>
          </div>
          <span class="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">${escapeHtml(c.id)}</span>
        </div>

        <div>
          <h3 class="font-extrabold text-base text-white group-hover:text-emerald-400 transition leading-snug">${escapeHtml(c.title)}</h3>
          <p class="text-[11px] text-slate-400 mt-1 flex items-center space-x-1.5">
            <i class="fa-solid fa-hospital text-emerald-400"></i>
            <span class="truncate">${escapeHtml(c.setting)}</span>
          </p>
        </div>

        <div class="bg-slate-950/90 p-3 rounded-xl border border-slate-800/90 space-y-1 text-xs">
          <div class="flex justify-between text-slate-300">
            <span class="text-slate-500">Patient:</span>
            <span class="font-semibold">${escapeHtml(c.patient)}</span>
          </div>
          <p class="text-amber-300/95 font-medium line-clamp-2 pt-0.5 text-[11px] leading-relaxed">${escapeHtml(c.complaint)}</p>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 text-[10px] font-bold">
          <span class="text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-md">
            🚨 ${c.redFlagsCount} Red Flags
          </span>
          <span class="text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
            🔓 ${c.clinicalGatesCount} Clues
          </span>
        </div>

        <div class="flex items-center gap-1.5">
          <button onclick="selectCaseForBrief('${escapeHtml(c.id)}')" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold transition" title="View Door Brief & Vitals">
            Brief
          </button>
          <button onclick="launchInstantBlitz('${escapeHtml(c.id)}')" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-extrabold transition flex items-center space-x-1 shadow-sm" title="Skip reading time & jump straight into Blitz Mode">
            <i class="fa-solid fa-bolt text-[10px]"></i>
            <span>Blitz Start</span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function getSpecialtyBadgeClass(specialty) {
  const s = (specialty || "").toLowerCase();
  if (s.includes("cardio")) return "bg-rose-500/20 text-rose-300 border border-rose-500/30";
  if (s.includes("ortho") || s.includes("surg")) return "bg-amber-500/20 text-amber-300 border border-amber-500/30";
  if (s.includes("neuro")) return "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30";
  if (s.includes("respiratory")) return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
  if (s.includes("gastro") || s.includes("hepat")) return "bg-orange-500/20 text-orange-300 border border-orange-500/30";
  if (s.includes("obstetric")) return "bg-pink-500/20 text-pink-300 border border-pink-500/30";
  if (s.includes("psych")) return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
  if (s.includes("pediatric")) return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
  if (s.includes("endo")) return "bg-teal-500/20 text-teal-300 border border-teal-500/30";
  if (s.includes("infectious") || s.includes("emergency")) return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
  if (s.includes("ent") || s.includes("oncology")) return "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30";
  return "bg-slate-800 text-slate-300 border border-slate-700";
}

// -------------------------------------------------------------
// CANDIDATE BRIEF & INSTANT BLITZ LAUNCH
// -------------------------------------------------------------
function getFreshCaseCopy(caseId) {
  const template = ALL_CASES_MAP[caseId];
  if (!template) return null;
  const copy = JSON.parse(JSON.stringify(template));
  copy.id = copy.case_id || caseId;
  return copy;
}

async function selectCaseForBrief(caseId) {
  activeCase = getFreshCaseCopy(caseId);
  if (!activeCase) {
    alert("Case not found: " + caseId);
    return;
  }

  document.getElementById("brief-case-title").innerText = activeCase.title;
  document.getElementById("brief-specialty-badge").innerText = activeCase.specialty;
  const sgBadge = document.getElementById("brief-sg-badge");
  if (sgBadge) {
    if (SG_CLASSIC_IDS.has(activeCase.id)) sgBadge.classList.remove("hidden");
    else sgBadge.classList.add("hidden");
  }

  document.getElementById("brief-setting").querySelector("span").innerText = activeCase.brief.setting;
  document.getElementById("brief-patient-demo").innerText =
    `${activeCase.brief.patient_name} (${activeCase.brief.age}yo ${activeCase.brief.gender}, ${activeCase.brief.occupation})`;
  document.getElementById("brief-complaint").innerText = activeCase.brief.presenting_complaint;
  document.getElementById("brief-instructions").innerText = activeCase.brief.instructions;

  const vitalsGrid = document.getElementById("brief-vitals-grid");
  vitalsGrid.innerHTML = "";
  Object.entries(activeCase.brief.triage_vitals || {}).forEach(([key, val]) => {
    const vCard = document.createElement("div");
    vCard.className = "bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex flex-col justify-between";
    vCard.innerHTML = `
      <span class="text-slate-500 text-[10px] uppercase font-bold">${escapeHtml(key)}</span>
      <span class="font-extrabold text-slate-100 mt-0.5 text-xs">${escapeHtml(val)}</span>
    `;
    vitalsGrid.appendChild(vCard);
  });

  showView("brief-view");
}

async function launchInstantBlitz(caseId) {
  activeCase = getFreshCaseCopy(caseId);
  if (!activeCase) return;
  await startConsultationSession();
}

// -------------------------------------------------------------
// CONSULTATION ROOM & STANDALONE + CLOUD HYBRID STATE MACHINE
// -------------------------------------------------------------
async function startConsultationSession() {
  if (!activeCase) return;
  // Reset fresh copy so unlocked state is clean
  activeCase = getFreshCaseCopy(activeCase.id);
  revealMissedClues = false;
  updateRevealButtonUI();

  const candidateName = document.getElementById("candidate-name-input")?.value.trim() || "Dr. Noah Lim";
  activeSessionId = `blitz-${activeCase.id}-${Date.now()}`;

  clientSession = {
    unlockedGateKeys: new Set(),
    turnCount: 0,
    perturbationTriggered: false,
    perturbationConcordance: 85.0,
    perturbationReasoning: "",
    triggeredTraps: [],
    vivaIndex: 0,
    vivaScores: {},
    vivaAnswers: [],
    candidateName
  };

  // Non-blocking cloud session sync if server is running
  fetch("/api/sessions/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ case_id: activeCase.id, candidate_name: candidateName })
  }).then(r => r.ok ? r.json() : null).then(data => {
    if (data && data.session_id) activeSessionId = data.session_id;
  }).catch(() => {});

  // Set Top Status Bar
  document.getElementById("consult-patient-name").innerText = activeCase.persona.name;
  document.getElementById("consult-patient-avatar").innerText = activeCase.persona.name[0];
  document.getElementById("consult-station-title").innerText = activeCase.title;
  document.getElementById("consult-pain-badge").innerText = `Pain ${activeCase.persona.pain_level}/10`;

  const sgBadge = document.getElementById("consult-sg-badge");
  if (sgBadge) {
    if (SG_CLASSIC_IDS.has(activeCase.id)) sgBadge.classList.remove("hidden");
    else sgBadge.classList.add("hidden");
  }

  // Inline Triage Vitals Strip
  const vitalsStrip = document.getElementById("consult-vitals-strip");
  if (vitalsStrip) {
    vitalsStrip.innerHTML = Object.entries(activeCase.brief.triage_vitals || {})
      .slice(0, 4)
      .map(([k, v]) => `<span class="text-slate-400"><strong class="text-slate-200">${escapeHtml(k.replace(" Pressure", "").replace(" Rate", "").replace(" Saturation", ""))}:</strong> ${escapeHtml(String(v).split("(")[0].trim())}</span>`)
      .join('<span class="text-slate-700">|</span>');
  }

  // Initial Opening Blitz Card in Feed
  const chatContainer = document.getElementById("chat-messages");
  const vitalsPillsHtml = Object.entries(activeCase.brief.triage_vitals || {})
    .map(([k, v]) => `<span class="bg-slate-900 border border-slate-800 px-2 py-1 rounded-lg text-[11px]"><strong class="text-slate-400">${escapeHtml(k)}:</strong> <span class="text-emerald-300 font-semibold">${escapeHtml(v)}</span></span>`)
    .join("");

  chatContainer.innerHTML = `
    <div class="bg-slate-950/90 border border-emerald-500/30 rounded-2xl p-4 space-y-2.5 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <i class="fa-solid fa-bolt"></i>
          <span>Triage Handover &bull; ${escapeHtml(activeCase.brief.setting)}</span>
        </span>
        <span class="text-[11px] text-slate-400 font-mono">${escapeHtml(activeCase.brief.patient_name)}, ${activeCase.brief.age}yo ${escapeHtml(activeCase.brief.gender)} (${escapeHtml(activeCase.brief.occupation)})</span>
      </div>
      <div class="text-xs sm:text-sm font-bold text-amber-300">
        Chief Complaint: "${escapeHtml(activeCase.brief.presenting_complaint)}"
      </div>
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${vitalsPillsHtml}
      </div>
      <div class="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
        💡 <strong>Blitz Tip:</strong> Click any <strong>1-Tap Rapid Question Burst Chip</strong> below or spam multiple keywords at once (e.g. <code class="text-emerald-300">onset character radiation fever meds allergies travel</code>) for instant &lt;10ms clinical findings!
      </div>
    </div>
  `;

  startConsultationTimer(activeCase.consultation_time_limit_sec || activeCase.consultation_time_sec || 420);
  renderGateChecklist();
  showView("consultation-view");

  setTimeout(() => {
    document.getElementById("candidate-text-input")?.focus();
  }, 100);
}

function startConsultationTimer(seconds) {
  clearInterval(timerInterval);
  timeRemainingSec = seconds;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeRemainingSec--;
    updateTimerDisplay();
    if (timeRemainingSec <= 0) {
      clearInterval(timerInterval);
      endConsultationEarly();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemainingSec / 60);
  const secs = timeRemainingSec % 60;
  const timerEl = document.getElementById("consult-timer");
  if (!timerEl) return;
  timerEl.innerText = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  if (timeRemainingSec <= 60) {
    timerEl.className = "font-mono text-sm sm:text-base font-extrabold text-rose-500 animate-pulse";
  } else if (timeRemainingSec <= 120) {
    timerEl.className = "font-mono text-sm sm:text-base font-extrabold text-amber-400";
  } else {
    timerEl.className = "font-mono text-sm sm:text-base font-extrabold text-emerald-400";
  }
}

// -------------------------------------------------------------
// <10ms CLIENT-SIDE BLITZ GATE MATCHING & SPAM ENGINE
// -------------------------------------------------------------
function conceptMatchesText(concept, textLower) {
  const c = String(concept || "").toLowerCase().trim();
  if (!c) return false;
  const escaped = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}(?:s|es|ed|d|ing|y|ly)?\\b`, "i");
  if (regex.test(textLower)) return true;
  // Also allow substring match for multi-word clinical phrases or >4 char medical stems
  if (c.length >= 5 && textLower.includes(c)) return true;
  return false;
}

const GENERAL_NEGATIVE_EXCLUSIONS = {
  "fever": "Afebrile / No unexplained systemic fever reported outside primary presentation",
  "weight loss": "No unintentional weight loss or cachexia",
  "night sweats": "No drenching constitutional night sweats",
  "syncope": "No frank loss of consciousness / syncopal episode",
  "bleeding": "No other spontaneous mucocutaneous bleeding or melena",
  "travel": "No other recent high-risk international travel history",
  "allergies": "No other known drug or food allergies (NKDA)",
  "smoking": "No additional tobacco exposure beyond stated history",
  "alcohol": "No acute alcohol intoxication or withdrawal",
  "family history": "No other relevant hereditary conditions reported",
  "chest": "Chest clear to auscultation / no additional pleuritic chest findings",
  "abdomen": "No additional acute surgical tenderness outside stated gates",
  "neuro": "No other focal cranial or peripheral neurological deficits",
  "rash": "No other generalized exanthem or purpuric rash"
};

function evaluateBlitzQueryClientSide(queryText, forcedCategories = null) {
  if (!activeCase) return null;
  const textLower = queryText.toLowerCase();
  const newlyUnlocked = [];
  const previouslyUnlocked = [];

  (activeCase.gates || []).forEach(gate => {
    const matchesCategoryMacro = forcedCategories && forcedCategories.includes(gate.category);
    const matchesSafetyMacro = forcedCategories && forcedCategories.includes("safety_mandatory") && gate.mandatory_for_safety;
    const matchesConcept = (gate.trigger_concepts || []).some(c => conceptMatchesText(c, textLower)) ||
      textLower.includes(gate.key.replace(/_/g, " ").toLowerCase());

    if (matchesCategoryMacro || matchesSafetyMacro || matchesConcept) {
      if (!clientSession.unlockedGateKeys.has(gate.key)) {
        gate.unlocked = true;
        clientSession.unlockedGateKeys.add(gate.key);
        newlyUnlocked.push(gate);
      } else {
        previouslyUnlocked.push(gate);
      }
    }
  });

  // Compute Pertinent Negative Exclusions for keywords in the query that weren't in newlyUnlocked
  const matchedTextCombined = [...newlyUnlocked, ...previouslyUnlocked]
    .map(g => `${g.key} ${(g.trigger_concepts || []).join(" ")} ${g.response_text}`)
    .join(" ")
    .toLowerCase();

  const pertinentNegatives = [];
  Object.entries(GENERAL_NEGATIVE_EXCLUSIONS).forEach(([kw, negText]) => {
    if (textLower.includes(kw) && !matchedTextCombined.includes(kw)) {
      pertinentNegatives.push({ keyword: kw.toUpperCase(), detail: negText });
    }
  });

  clientSession.turnCount += 1;

  // Trigger perturbation automatically on turn 3 (or if >= 65% of clinical gates are unlocked)
  const totalClin = (activeCase.gates || []).filter(g => g.category !== "ice").length;
  const unlockedClin = (activeCase.gates || []).filter(g => g.category !== "ice" && clientSession.unlockedGateKeys.has(g.key)).length;
  let shouldTriggerPerturbation = false;
  if (!clientSession.perturbationTriggered && (clientSession.turnCount >= 3 || unlockedClin >= Math.ceil(totalClin * 0.7))) {
    clientSession.perturbationTriggered = true;
    shouldTriggerPerturbation = true;
  }

  return {
    newlyUnlocked,
    previouslyUnlocked,
    pertinentNegatives,
    shouldTriggerPerturbation
  };
}

// 1-Tap Rapid Question Burst Chips ("Spam Bar")
function fireSpamMacro(macroType) {
  if (!activeCase) return;

  let macroQuery = "";
  let forcedCategories = [];
  let macroTitle = "";

  if (macroType === "socrates") {
    macroTitle = "⚡ SOCRATES Sweep";
    macroQuery = "site onset character radiation associated symptoms timing exacerbating relieving severity?";
    forcedCategories = ["socrates"];
  } else if (macroType === "red_flags") {
    macroTitle = "🚨 Red Flag Sweep";
    const caseRedFlagTerms = (activeCase.gates || [])
      .filter(g => g.category === "red_flag" || g.mandatory_for_safety)
      .map(g => (g.trigger_concepts || [])[0] || g.key.replace(/_/g, " "))
      .join(" ");
    macroQuery = `${caseRedFlagTerms} fever weight loss night sweats neuro deficits syncope bleeding?`.trim();
    forcedCategories = ["red_flag", "safety_mandatory"];
  } else if (macroType === "pmhx_meds") {
    macroTitle = "💊 PMHx / Meds / Allergies";
    macroQuery = "past medical history diabetes hypertension surgery medications blood thinners allergies compliance?";
    forcedCategories = ["past_history", "drug_history"];
  } else if (macroType === "social_epi") {
    macroTitle = "🇸🇬 Social / Epi / Travel";
    macroQuery = "occupation army camp tekong travel hawker food smoking alcohol sexual history family history?";
    forcedCategories = ["social"];
  } else if (macroType === "exam_vitals") {
    macroTitle = "🩺 Bedside Exam / Vitals";
    macroQuery = "physical examination abdomen chest neuro pupils joints rash vitals?";
    forcedCategories = ["systemic"];
  } else if (macroType === "all_clinical") {
    macroTitle = "🔥 Full Clinical & Red-Flag Sweep";
    macroQuery = "site onset character radiation severity red flags past medical history medications allergies social travel physical examination vitals?";
    forcedCategories = ["socrates", "red_flag", "safety_mandatory", "past_history", "drug_history", "social", "systemic"];
  }

  executeBlitzTurn(macroQuery, forcedCategories, macroTitle);
}

// Unlock a specific gate directly when clicked in the sidebar
function unlockSingleGateByClick(gateKey) {
  if (!activeCase) return;
  const gate = (activeCase.gates || []).find(g => g.key === gateKey);
  if (!gate) return;
  const triggerWord = (gate.trigger_concepts && gate.trigger_concepts[0]) || gate.key.replace(/_/g, " ");
  executeBlitzTurn(`Targeted inquiry: ${triggerWord}?`, null, `🎯 Gate Inquiry: ${formatGateTitle(gate.key)}`);
}

async function sendCandidateMessage() {
  const input = document.getElementById("candidate-text-input");
  const text = input ? input.value.trim() : "";
  if (!text || !activeCase) return;
  input.value = "";
  executeBlitzTurn(text, null, null);
}

function executeBlitzTurn(queryText, forcedCategories = null, macroBadge = null) {
  const t0 = performance.now();
  const result = evaluateBlitzQueryClientSide(queryText, forcedCategories);
  const elapsedMs = Math.max(1, Math.round(performance.now() - t0));

  // Append Candidate Query Pill
  appendCandidateQueryBubble(queryText, macroBadge, elapsedMs);

  // Render Instant Clinical Findings Card
  appendBlitzFindingsCard(result, queryText);

  // Update Red-Flag & Gate Tracker Sidebar
  renderGateChecklist();

  // Speak response if in Spoken Audio mode (and not muted)
  if (interactionMode === "spoken" && !isAudioMuted) {
    const spokenText = result.newlyUnlocked.length > 0
      ? result.newlyUnlocked.map(g => g.response_text).join(" ")
      : (result.previouslyUnlocked.length > 0
          ? result.previouslyUnlocked[0].response_text
          : `Regarding ${queryText}, everything else is unremarkable, doctor.`);
    speakPatientText(spokenText);
  }

  // Trigger perturbation notification banner (non-intrusive button + optional modal)
  if (result.shouldTriggerPerturbation && activeCase.perturbation) {
    appendPerturbationAlertBanner(activeCase.perturbation);
  }
}

function formatGateTitle(key) {
  return String(key || "").replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

function getCategoryBadgeHtml(gate) {
  if (gate.mandatory_for_safety || gate.category === "red_flag") {
    return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/40">🚨 RED FLAG / SAFETY</span>`;
  }
  const cat = String(gate.category || "").toLowerCase();
  if (cat === "socrates") return `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">⚡ SOCRATES</span>`;
  if (cat === "drug_history" || cat === "past_history") return `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">💊 PMHx / MEDS</span>`;
  if (cat === "social") return `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">🇸🇬 SOCIAL / EPI</span>`;
  if (cat === "systemic") return `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">🩺 EXAM / SYSTEMIC</span>`;
  return `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">INFO</span>`;
}

function appendCandidateQueryBubble(queryText, macroBadge, elapsedMs) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "flex justify-end";
  const badgeHtml = macroBadge
    ? `<span class="bg-emerald-950/80 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded text-[10px] font-extrabold mr-1.5">${escapeHtml(macroBadge)}</span>`
    : "";

  div.innerHTML = `
    <div class="max-w-[90%] sm:max-w-[80%] bg-emerald-600/25 border border-emerald-500/40 text-emerald-100 rounded-2xl rounded-br-none px-4 py-2.5 text-xs shadow-sm">
      <div class="flex items-center justify-between gap-3 mb-0.5">
        <div class="flex items-center">${badgeHtml}<span class="font-bold text-[11px] text-emerald-300">Doctor Query</span></div>
        <span class="text-[10px] font-mono text-emerald-400/90">⚡ ${elapsedMs}ms</span>
      </div>
      <p class="font-medium text-slate-100">${escapeHtml(queryText)}</p>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendBlitzFindingsCard(result, queryText) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const card = document.createElement("div");
  card.className = "bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-md";

  let sectionsHtml = "";

  // 1. Newly Unlocked Positive Findings
  if (result.newlyUnlocked.length > 0) {
    const itemsHtml = result.newlyUnlocked.map(g => `
      <div class="bg-slate-950/90 border ${g.mandatory_for_safety || g.category === 'red_flag' ? 'border-rose-500/40' : 'border-emerald-500/30'} rounded-xl p-3 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="font-extrabold text-xs text-white flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check text-emerald-400"></i>
            <span>${escapeHtml(formatGateTitle(g.key))}</span>
          </span>
          ${getCategoryBadgeHtml(g)}
        </div>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed pl-5">"${escapeHtml(g.response_text)}"</p>
      </div>
    `).join("");

    sectionsHtml += `
      <div class="space-y-2">
        <div class="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
          <span>✅ +${result.newlyUnlocked.length} Clinical Clue(s) Unlocked</span>
          <button data-role="speak-card" class="text-[10px] text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded flex items-center gap-1">
            <i class="fa-solid fa-volume-high"></i><span>Speak (1.4x)</span>
          </button>
        </div>
        ${itemsHtml}
      </div>
    `;
  }

  // 2. Previously Unlocked Clues Matched Again
  if (result.previouslyUnlocked.length > 0 && result.newlyUnlocked.length === 0) {
    const prevHtml = result.previouslyUnlocked.map(g => `
      <div class="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-300">
        <strong class="text-emerald-400">${escapeHtml(formatGateTitle(g.key))}:</strong> "${escapeHtml(g.response_text)}"
      </div>
    `).join("");
    sectionsHtml += `
      <div class="space-y-1.5">
        <div class="text-[11px] font-bold text-slate-400">🔄 Already Unlocked Finding(s):</div>
        ${prevHtml}
      </div>
    `;
  }

  // 3. Pertinent Negative Exclusions (or Bedside Vitals summary if Exam queried)
  if (result.pertinentNegatives.length > 0) {
    const negPills = result.pertinentNegatives.map(n => `
      <div class="bg-slate-950/80 border border-slate-800/90 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-300 flex items-center gap-2">
        <span class="font-bold text-sky-400">[-] ${escapeHtml(n.keyword)}:</span>
        <span class="text-slate-400">${escapeHtml(n.detail)}</span>
      </div>
    `).join("");
    sectionsHtml += `
      <div class="space-y-1.5 pt-1">
        <div class="text-[10px] font-extrabold uppercase tracking-wider text-sky-400">🛡️ Pertinent Negative Exclusions Verified:</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">${negPills}</div>
      </div>
    `;
  }

  // 4. If neither positive gates nor known negative keywords matched
  if (result.newlyUnlocked.length === 0 && result.previouslyUnlocked.length === 0 && result.pertinentNegatives.length === 0) {
    sectionsHtml += `
      <div class="text-xs text-slate-300 flex items-center justify-between gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
        <div>
          <span class="font-bold text-sky-400">🛡️ Pertinent Negative / Unremarkable:</span>
          <span class="text-slate-300 ml-1">No positive abnormality reported for "${escapeHtml(queryText)}". Try tapping a <strong>1-Tap Sweep Chip</strong> below or click <strong>Reveal Missed Clues</strong> on the right!</span>
        </div>
      </div>
    `;
  }

  card.innerHTML = sectionsHtml;
  const speakBtn = card.querySelector('[data-role="speak-card"]');
  if (speakBtn) {
    const textToSpeak = result.newlyUnlocked.map(g => g.response_text).join(" ");
    speakBtn.addEventListener("click", () => speakPatientText(textToSpeak));
  }

  container.appendChild(card);
  container.scrollTop = container.scrollHeight;
}

function appendPerturbationAlertBanner(pert) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const banner = document.createElement("div");
  banner.className = "bg-gradient-to-r from-cyan-950/80 via-slate-900 to-emerald-950/80 border border-cyan-500/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg";
  banner.innerHTML = `
    <div class="space-y-1">
      <div class="text-xs font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
        <i class="fa-solid fa-flask-vial"></i>
        <span>⚡ New Interim Investigation / Bedside Result Arrived!</span>
      </div>
      <div class="text-xs sm:text-sm font-bold text-white">${escapeHtml(pert.title)}</div>
      <p class="text-[11px] text-slate-300">${escapeHtml(pert.description)}</p>
    </div>
    <button onclick="triggerManualPerturbation()" class="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shrink-0 transition shadow-md">
      Inspect Results &amp; Pivot &rarr;
    </button>
  `;
  container.appendChild(banner);
  container.scrollTop = container.scrollHeight;
}

// -------------------------------------------------------------
// SPEECH SYNTHESIS (1.4x BROWSER TTS + EDGE NEURAL HYBRID)
// -------------------------------------------------------------
function speakPatientText(text) {
  if (!text || isAudioMuted) return;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.4; // Fast 1.4x speed for OSCEBlitz efficiency
    utter.lang = "en-SG";
    window.speechSynthesis.speak(utter);
  }
}

function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;
  const icon = document.getElementById("mute-icon");
  if (isAudioMuted) {
    if (icon) icon.className = "fa-solid fa-volume-xmark text-sm text-slate-500";
    if (currentAudioElement) currentAudioElement.pause();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } else {
    if (icon) icon.className = "fa-solid fa-volume-high text-sm text-emerald-400";
  }
}

// -------------------------------------------------------------
// BROWSER NATIVE SPEECH RECOGNITION (100% CLIENT-SIDE) + FALLBACK
// -------------------------------------------------------------
function initSpeechRecognitionStatus() {
  const badge = document.getElementById("voice-status-badge");
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR && badge) {
    badge.innerHTML = `<i class="fa-solid fa-microphone-lines text-emerald-400 mr-1"></i>Live Browser Voice Ready`;
  } else if (badge) {
    badge.innerHTML = `<i class="fa-solid fa-keyboard text-amber-400 mr-1"></i>Keyword Spam Ready`;
  }
}

function toggleMicrophoneRecord() {
  if (isRecording) {
    stopVoiceRecognition();
  } else {
    startVoiceRecognition(false);
  }
}

function toggleVivaVoiceInput() {
  if (isVivaRecording) {
    stopVoiceRecognition();
  } else {
    startVoiceRecognition(true);
  }
}

function startVoiceRecognition(forViva = false) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    try {
      speechRecognizer = new SR();
      speechRecognizer.continuous = true;
      speechRecognizer.interimResults = true;
      speechRecognizer.lang = "en-SG";

      if (forViva) {
        isVivaRecording = true;
        updateVivaMicUI(true);
      } else {
        isRecording = true;
        updateConsultMicUI(true);
      }

      speechRecognizer.onresult = (event) => {
        let interim = "";
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + " ";
          } else {
            interim += transcript;
          }
        }

        if (forViva) {
          const vivaBox = document.getElementById("viva-answer-input");
          if (vivaBox && finalTranscript.trim()) {
            vivaBox.value = (vivaBox.value + " " + finalTranscript.trim()).trim();
          }
        } else {
          const input = document.getElementById("candidate-text-input");
          if (input) {
            input.value = (finalTranscript || interim).trim();
          }
          if (finalTranscript.trim()) {
            input.value = finalTranscript.trim();
            sendCandidateMessage();
          }
        }
      };

      speechRecognizer.onerror = () => {
        stopVoiceRecognition();
      };

      speechRecognizer.onend = () => {
        if (isRecording || isVivaRecording) {
          stopVoiceRecognition();
        }
      };

      speechRecognizer.start();
      return;
    } catch (e) {
      console.warn("SpeechRecognition fallback:", e);
    }
  }

  // Fallback to MediaRecorder + /api/sessions/.../audio-interact if SpeechRecognition unavailable
  startMediaRecorderFallback();
}

function stopVoiceRecognition() {
  isRecording = false;
  isVivaRecording = false;
  updateConsultMicUI(false);
  updateVivaMicUI(false);
  if (speechRecognizer) {
    try { speechRecognizer.stop(); } catch (_) {}
    speechRecognizer = null;
  }
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    try { mediaRecorder.stop(); } catch (_) {}
  }
}

function updateConsultMicUI(active) {
  const micBtn = document.getElementById("mic-record-btn");
  const micIcon = document.getElementById("mic-icon");
  const badge = document.getElementById("voice-status-badge");
  if (!micBtn || !micIcon) return;

  if (active) {
    micBtn.className = "p-3.5 rounded-xl bg-rose-600 text-white border border-rose-400 recording-pulse transition flex items-center justify-center shrink-0 shadow-lg";
    micIcon.className = "fa-solid fa-stop text-lg";
    if (badge) badge.innerHTML = `<span class="text-rose-400 font-bold animate-pulse">🔴 Listening Live — Speak keywords now...</span>`;
  } else {
    micBtn.className = "p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 border border-rose-500/40 transition flex items-center justify-center shrink-0 shadow-sm";
    micIcon.className = "fa-solid fa-microphone text-lg";
    if (badge) badge.innerHTML = `<i class="fa-solid fa-microphone-lines text-emerald-400 mr-1"></i>Live Browser Voice Ready`;
  }
}

function updateVivaMicUI(active) {
  const btn = document.getElementById("viva-mic-btn");
  const label = document.getElementById("viva-mic-label");
  if (!btn || !label) return;
  if (active) {
    btn.className = "text-xs bg-rose-600 text-white border border-rose-400 px-3 py-1 rounded-lg font-bold flex items-center space-x-1.5 recording-pulse";
    label.innerText = "Stop Dictation";
  } else {
    btn.className = "text-xs bg-slate-800 hover:bg-slate-700 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-lg font-bold flex items-center space-x-1.5 transition";
    label.innerText = "Dictate Answer";
  }
}

async function startMediaRecorderFallback() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Browser speech recognition is not supported on this browser. Use the 1-Tap Rapid Question Burst Chips or type keywords below!");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];
    mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || "audio/webm" });
      stream.getTracks().forEach(t => t.stop());
      const formData = new FormData();
      formData.append("file", audioBlob, "voice.webm");
      if (activeCase) formData.append("case_id", activeCase.id);
      try {
        const res = await fetch(`/api/sessions/${activeSessionId}/audio-interact`, { method: "POST", body: formData });
        if (res.ok) {
          const data = await res.json();
          if (data.candidate_transcript) {
            executeBlitzTurn(data.candidate_transcript);
          }
        }
      } catch (_) {}
    };
    mediaRecorder.start();
    isRecording = true;
    updateConsultMicUI(true);
  } catch (err) {
    alert("Microphone error: " + err.message);
  }
}

// -------------------------------------------------------------
// LIVE RED-FLAG & GATE TRACKER SIDEBAR + "REVEAL MISSED CLUES"
// -------------------------------------------------------------
function toggleRevealMissedClues() {
  revealMissedClues = !revealMissedClues;
  updateRevealButtonUI();
  renderGateChecklist();
}

function updateRevealButtonUI() {
  const btn = document.getElementById("reveal-clues-btn");
  if (!btn) return;
  if (revealMissedClues) {
    btn.className = "px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 border border-amber-400 text-[11px] font-extrabold transition flex items-center space-x-1 shadow-sm";
    btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i><span>Hide Clues</span>`;
  } else {
    btn.className = "px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-[11px] font-bold transition flex items-center space-x-1";
    btn.innerHTML = `<i class="fa-regular fa-eye"></i><span>Reveal Missed Clues</span>`;
  }
}

function renderGateChecklist() {
  if (!activeCase) return;
  const container = document.getElementById("gates-checklist-container");
  if (!container) return;
  container.innerHTML = "";

  // Filter out pure ICE fluff gates from the clinical gate numerator/denominator
  // so 100% of the sidebar focuses on Clinical Reasoning & Red Flags!
  const clinicalGates = (activeCase.gates || []).filter(g => g.category !== "ice");
  const redFlagGates = clinicalGates.filter(g => g.mandatory_for_safety || g.category === "red_flag");

  let unlockedClinicalCount = 0;
  let unlockedRedFlagCount = 0;

  // Sort Red Flags / Safety Gates to the top of the tracker
  const sortedGates = [...clinicalGates].sort((a, b) => {
    const aRed = (a.mandatory_for_safety || a.category === "red_flag") ? 1 : 0;
    const bRed = (b.mandatory_for_safety || b.category === "red_flag") ? 1 : 0;
    return bRed - aRed;
  });

  sortedGates.forEach(g => {
    const isUnlocked = clientSession.unlockedGateKeys.has(g.key);
    const isRedFlag = g.mandatory_for_safety || g.category === "red_flag";
    if (isUnlocked) {
      unlockedClinicalCount++;
      if (isRedFlag) unlockedRedFlagCount++;
    }

    const item = document.createElement("div");
    let borderClass = isUnlocked
      ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-200"
      : (isRedFlag ? "border-rose-500/30 bg-rose-950/15 text-slate-300 hover:border-rose-500/60" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700");

    item.className = `p-2.5 rounded-xl border ${borderClass} transition duration-150 cursor-pointer space-y-1.5`;
    item.title = isUnlocked ? "Unlocked!" : "Click to ask & unlock this clinical gate immediately";
    item.onclick = () => unlockSingleGateByClick(g.key);

    const cleanTitle = formatGateTitle(g.key);
    const sampleTriggers = (g.trigger_concepts || []).slice(0, 4).join(", ");

    let clueDetailHtml = "";
    if (isUnlocked) {
      clueDetailHtml = `<p class="text-[11px] text-slate-300 leading-snug pl-5 border-l-2 border-emerald-500/40 ml-1">"${escapeHtml(g.response_text)}"</p>`;
    } else if (revealMissedClues) {
      clueDetailHtml = `
        <div class="pl-5 space-y-1 border-l-2 border-amber-500/40 ml-1">
          <div class="text-[10px] text-amber-300 font-mono">🔑 Triggers: ${escapeHtml(sampleTriggers)}</div>
          <p class="text-[11px] text-slate-300 leading-snug italic">"${escapeHtml(g.response_text)}"</p>
        </div>
      `;
    }

    item.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center space-x-2">
          <i class="fa-solid ${isUnlocked ? 'fa-circle-check text-emerald-400' : (isRedFlag ? 'fa-shield-halved text-rose-400/80' : 'fa-lock text-slate-600')} text-xs"></i>
          <span class="${isUnlocked ? 'font-bold text-white' : 'font-semibold'} text-xs">${escapeHtml(cleanTitle)}</span>
        </div>
        ${getCategoryBadgeHtml(g)}
      </div>
      ${clueDetailHtml}
    `;

    container.appendChild(item);
  });

  // Update Red Flags Counter & Progress Bar
  const rfCounter = document.getElementById("red-flags-counter");
  const rfBar = document.getElementById("red-flags-bar");
  const rfPct = redFlagGates.length > 0 ? Math.round((unlockedRedFlagCount / redFlagGates.length) * 100) : 100;
  if (rfCounter) rfCounter.innerText = `${unlockedRedFlagCount}/${redFlagGates.length} Cleared`;
  if (rfBar) rfBar.style.width = `${rfPct}%`;

  // Update Clinical Gates Counter & Progress Bar
  const cgCounter = document.getElementById("gates-unlocked-counter");
  const cgBar = document.getElementById("clinical-gates-bar");
  const cgPct = clinicalGates.length > 0 ? Math.round((unlockedClinicalCount / clinicalGates.length) * 100) : 100;
  if (cgCounter) cgCounter.innerText = `${unlockedClinicalCount}/${clinicalGates.length} Unlocked`;
  if (cgBar) cgBar.style.width = `${cgPct}%`;
}

// -------------------------------------------------------------
// PRACTICUM SCRIPT PERTURBATION (CLIENT-SIDE BAYESIAN EVALUATOR)
// -------------------------------------------------------------
function triggerManualPerturbation() {
  if (!activeCase || !activeCase.perturbation) return;
  clientSession.perturbationTriggered = true;
  showPerturbationModal(activeCase.perturbation);
}

function closePerturbationModal() {
  document.getElementById("perturbation-modal")?.classList.add("hidden");
}

function showPerturbationModal(pertData) {
  document.getElementById("pert-title").innerText = pertData.title || "Interim Clinical Finding";
  document.getElementById("pert-description").innerText = pertData.description || "";

  const findingsList = document.getElementById("pert-findings-list");
  findingsList.innerHTML = "";
  Object.entries(pertData.findings || {}).forEach(([k, v]) => {
    const li = document.createElement("div");
    li.innerHTML = `<strong class="text-cyan-300">• ${escapeHtml(k)}:</strong> <span class="text-slate-200">${escapeHtml(v)}</span>`;
    findingsList.appendChild(li);
  });

  // Populate 1-Tap Hypothesis Shift Builder Chips
  const chipsContainer = document.getElementById("pert-hypotheses-chips");
  if (chipsContainer) {
    chipsContainer.innerHTML = "";
    Object.keys(pertData.expected_shifts || {}).forEach(hyp => {
      const btnConfirm = document.createElement("button");
      btnConfirm.type = "button";
      btnConfirm.className = "px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold transition";
      btnConfirm.innerText = `✅ Confirm: ${hyp.split("(")[0].trim()} (+2)`;
      btnConfirm.onclick = () => appendToPerturbationBox(`${hyp} is strongly confirmed/reinforced (+2); `);

      const btnRuleOut = document.createElement("button");
      btnRuleOut.type = "button";
      btnRuleOut.className = "px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-[11px] font-bold transition";
      btnRuleOut.innerText = `❌ Rule Out: ${hyp.split("(")[0].trim()} (-2)`;
      btnRuleOut.onclick = () => appendToPerturbationBox(`${hyp} is ruled out/unlikely (-2); `);

      chipsContainer.appendChild(btnConfirm);
      chipsContainer.appendChild(btnRuleOut);
    });
  }

  document.getElementById("pert-reasoning-input").value = clientSession.perturbationReasoning || "";
  document.getElementById("perturbation-modal").classList.remove("hidden");
}

function appendToPerturbationBox(snippet) {
  const box = document.getElementById("pert-reasoning-input");
  if (!box) return;
  box.value = (box.value ? box.value.trim() + " " : "") + snippet;
  box.focus();
}

function evaluatePerturbationClientSide(reasoningText) {
  const pert = activeCase?.perturbation;
  if (!pert || !pert.expected_shifts) return { score: 85.0, matchedPoints: [] };

  const clauses = reasoningText.toLowerCase().split(/[.;!?,\n]|\band\b|\bbut\b|\bwhereas\b|\bwhile\b/).map(s => s.trim()).filter(Boolean);
  const entries = Object.entries(pert.expected_shifts).filter(([, v]) => v !== 0);
  if (entries.length === 0) return { score: 100.0, matchedPoints: [] };

  let hits = 0;
  const matchedPoints = [];
  const negRe = /\b(rul(e|es|ed|ing)\s*out|unlikely|less\s+likely|exclud\w*|against|weaken\w*|not\b)|-\s*[12]\b/i;
  const posRe = /\b(confirm\w*|support\w*|reinforc\w*|likely|consistent|diagnos\w*|strongly|suggest\w*|shows?)|\+\s*[12]\b/i;

  entries.forEach(([hyp, expectedVal]) => {
    const hypWords = hyp.toLowerCase().replace(/\(.*?\)/g, "").split(/[^a-z0-9]+/).filter(w => w.length >= 4 && !["acute", "with", "syndrome", "severe", "disease"].includes(w));
    for (const clause of clauses) {
      const mentioned = hypWords.some(w => clause.includes(w.slice(0, 5))) || clause.includes(hyp.toLowerCase().slice(0, 12));
      if (!mentioned) continue;
      const isNeg = negRe.test(clause);
      const isPos = posRe.test(clause) && !isNeg;
      if (expectedVal > 0 && isPos) {
        hits++;
        matchedPoints.push(`✅ Reinforced (+${expectedVal}): ${hyp}`);
        break;
      }
      if (expectedVal < 0 && isNeg) {
        hits++;
        matchedPoints.push(`✅ Ruled Out (${expectedVal}): ${hyp}`);
        break;
      }
    }
  });

  const score = Math.round((hits / entries.length) * 100);
  return { score: Math.max(score, reasoningText.length > 15 ? 50 : 0), matchedPoints };
}

async function submitPerturbationReasoning() {
  const reasoning = document.getElementById("pert-reasoning-input").value.trim();
  if (!reasoning || !activeCase) return;

  clientSession.perturbationReasoning = reasoning;
  const evalResult = evaluatePerturbationClientSide(reasoning);
  clientSession.perturbationConcordance = evalResult.score;

  document.getElementById("perturbation-modal").classList.add("hidden");

  // Append Instant Perturbation Audit Card in Feed
  const container = document.getElementById("chat-messages");
  if (container) {
    const div = document.createElement("div");
    div.className = "bg-cyan-950/40 border border-cyan-500/40 rounded-2xl p-4 space-y-2 text-xs shadow-md";
    div.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-extrabold text-cyan-300 uppercase tracking-wider">🧠 Practicum Script Pivot Benchmark: ${evalResult.score}% Expert Concordance</span>
      </div>
      <div class="text-slate-200 space-y-1">
        ${evalResult.matchedPoints.length ? evalResult.matchedPoints.map(p => `<div>${escapeHtml(p)}</div>`).join("") : "<div>Reasoning recorded for final scoring.</div>"}
      </div>
      <div class="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 text-[11px] leading-relaxed">
        <strong class="text-emerald-400">Expert Rationale:</strong> ${escapeHtml(activeCase.perturbation.expert_rationale || "")}
      </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }
}

// -------------------------------------------------------------
// POST-STATION EXAMINER VIVA (100% STANDALONE + HYBRID)
// -------------------------------------------------------------
function endConsultationEarly() {
  clearInterval(timerInterval);
  stopVoiceRecognition();
  startExaminerViva();
}

function startExaminerViva() {
  if (!activeCase) return;
  clientSession.vivaIndex = 0;
  showView("viva-view");
  renderCurrentVivaQuestion();
}

function renderCurrentVivaQuestion() {
  const questions = activeCase?.viva_questions || [];
  if (clientSession.vivaIndex >= questions.length) {
    loadFinalScorecard();
    return;
  }

  const q = questions[clientSession.vivaIndex];
  document.getElementById("viva-progress").innerText = `Question ${clientSession.vivaIndex + 1}/${questions.length}`;
  document.getElementById("viva-question-prompt").innerText = q.prompt;
  document.getElementById("viva-answer-input").value = "";

  // Populate Study Hint Box
  const hintBox = document.getElementById("viva-rubric-hint-box");
  const hintList = document.getElementById("viva-hint-list");
  if (hintBox) hintBox.classList.add("hidden");
  if (hintList) {
    hintList.innerHTML = (q.key_points_required || []).map(kp => `<li>${escapeHtml(kp)}</li>`).join("");
  }

  if (interactionMode === "spoken" && !isAudioMuted) {
    speakPatientText(q.prompt);
  }
}

function toggleVivaRubricHint() {
  const hintBox = document.getElementById("viva-rubric-hint-box");
  if (hintBox) hintBox.classList.toggle("hidden");
}

function fillVivaWithModelAnswer() {
  const questions = activeCase?.viva_questions || [];
  const q = questions[clientSession.vivaIndex];
  if (!q) return;
  const box = document.getElementById("viva-answer-input");
  if (box) {
    box.value = (q.key_points_required || []).join("; ");
    box.focus();
  }
}

function replayExaminerAudio() {
  const questions = activeCase?.viva_questions || [];
  const q = questions[clientSession.vivaIndex];
  if (q) speakPatientText(q.prompt);
}

function evaluateSingleVivaAnswerClientSide(q, answerText) {
  const words = (answerText || "").toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2);
  const stopwords = new Set(["and", "the", "with", "for", "due", "from", "into", "than", "this", "that", "only", "per", "via", "all", "any", "are", "not"]);
  const matched = [];

  (q.key_points_required || []).forEach(kp => {
    const terms = kp.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 2 && !stopwords.has(t));
    if (terms.length === 0) return;
    const hits = terms.filter(t => {
      const stem = t.length > 5 ? t.slice(0, t.length - 2) : t;
      return words.some(w => w.startsWith(stem) || stem.startsWith(w));
    }).length;
    const needed = terms.length === 1 ? 1 : (terms.length <= 4 ? 1 : Math.max(2, Math.ceil(terms.length * 0.25)));
    if (hits >= needed) matched.push(kp);
  });

  const ratio = matched.length / Math.max(1, (q.key_points_required || []).length);
  const awarded = Math.round(ratio * (q.max_marks || 10) * 10) / 10;
  return { awarded, matched };
}

function submitVivaAnswer() {
  const answer = document.getElementById("viva-answer-input").value.trim();
  if (!answer || !activeCase) return;

  stopVoiceRecognition();
  const questions = activeCase.viva_questions || [];
  const q = questions[clientSession.vivaIndex];
  if (q) {
    const res = evaluateSingleVivaAnswerClientSide(q, answer);
    clientSession.vivaScores[clientSession.vivaIndex] = res.awarded;
    clientSession.vivaAnswers.push({ prompt: q.prompt, answer, awarded: res.awarded, max: q.max_marks || 10 });
  }

  clientSession.vivaIndex += 1;
  if (clientSession.vivaIndex < questions.length) {
    renderCurrentVivaQuestion();
  } else {
    loadFinalScorecard();
  }
}

function finishVivaImmediately() {
  stopVoiceRecognition();
  const currentAns = document.getElementById("viva-answer-input")?.value.trim();
  const questions = activeCase?.viva_questions || [];
  if (currentAns && clientSession.vivaIndex < questions.length) {
    const q = questions[clientSession.vivaIndex];
    const res = evaluateSingleVivaAnswerClientSide(q, currentAns);
    clientSession.vivaScores[clientSession.vivaIndex] = res.awarded;
    clientSession.vivaAnswers.push({ prompt: q.prompt, answer: currentAns, awarded: res.awarded, max: q.max_marks || 10 });
  }
  loadFinalScorecard();
}

// -------------------------------------------------------------
// ZERO-FLUFF CLINICAL REASONING EVALUATION (40% / 20% / 25% / 15%)
// 0% Bedside Manner / ICE Penalty!
// -------------------------------------------------------------
function detectCognitiveTrapsClientSide() {
  if (!activeCase || !activeCase.cognitive_traps) return [];
  const fullText = [
    clientSession.perturbationReasoning || "",
    ...clientSession.vivaAnswers.map(a => a.answer)
  ].join(" ").toLowerCase();

  const negRe = /\b(avoid\w*|no|not|never|don'?t|do not|contraindicat\w*|withhold|without|instead of)\b/i;
  const triggered = [];

  activeCase.cognitive_traps.forEach(trap => {
    let fired = false;
    if (trap.missed_gate_keys && trap.missed_gate_keys.length > 0) {
      const anyUnlocked = trap.missed_gate_keys.some(k => clientSession.unlockedGateKeys.has(k));
      if (!anyUnlocked) fired = true;
    }
    if (trap.trigger_keywords && trap.trigger_keywords.length > 0 && fullText) {
      for (const kw of trap.trigger_keywords) {
        const kwLower = kw.toLowerCase();
        if (fullText.includes(kwLower) && !negRe.test(fullText.replace(kwLower, " "))) {
          fired = true;
          break;
        }
      }
    }
    if (trap.absent_keywords && trap.absent_keywords.length > 0 && fullText.length > 10) {
      const anyPresent = trap.absent_keywords.some(k => fullText.includes(k.toLowerCase()));
      if (!anyPresent) fired = true;
    }
    if (fired) {
      triggered.push({
        name: trap.trap_name || trap.name,
        description: trap.description,
        remediation: trap.remediation_advice || trap.remediation
      });
    }
  });

  return triggered;
}

function computeZeroFluffScorecard() {
  const gates = activeCase.gates || [];
  const redFlagGates = gates.filter(g => g.mandatory_for_safety || g.category === "red_flag");
  const clinicalTriggerGates = gates.filter(g => g.category !== "ice" && !g.mandatory_for_safety && g.category !== "red_flag");

  const missedSafety = [];
  gates.forEach(g => {
    if (g.mandatory_for_safety && !clientSession.unlockedGateKeys.has(g.key)) {
      missedSafety.push(`${formatGateTitle(g.key)} (${g.category})`);
    }
  });
  const safetyPass = missedSafety.length === 0;

  // 1. Red Flag Clearance (40%)
  const rfUnlocked = redFlagGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;
  const rfRatio = redFlagGates.length > 0 ? rfUnlocked / redFlagGates.length : 1.0;
  const rfScore = Math.round(rfRatio * 40 * 10) / 10;

  // 2. Clinical Trigger Coverage (20%) — Excludes ICE so 0% bedside fluff penalty!
  const ctUnlocked = clinicalTriggerGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;
  const ctRatio = clinicalTriggerGates.length > 0 ? ctUnlocked / clinicalTriggerGates.length : 1.0;
  const ctScore = Math.round(ctRatio * 20 * 10) / 10;

  // 3. Differential Diagnosis & Perturbation Pivot (25%)
  const traps = detectCognitiveTrapsClientSide();
  const rawPivotScore = (clientSession.perturbationConcordance / 100.0) * 25.0;
  const pivotScore = Math.max(0, Math.round((rawPivotScore - traps.length * 2.5) * 10) / 10);

  // 4. Viva Investigation & Management Plan (15%)
  const vivaMaxTotal = (activeCase.viva_questions || []).reduce((acc, q) => acc + (q.max_marks || 10), 0) || 30;
  const vivaAwardedTotal = Object.values(clientSession.vivaScores).reduce((acc, v) => acc + v, 0);
  const vivaRatio = vivaAwardedTotal / Math.max(1, vivaMaxTotal);
  const vivaScore = Math.round(vivaRatio * 15 * 10) / 10;

  const totalScore = Math.round((rfScore + ctScore + pivotScore + vivaScore) * 10) / 10;
  const overallPct = totalScore;

  let grade = "Clear Pass";
  if (!safetyPass) grade = "Critical Safety Fail";
  else if (overallPct >= 85) grade = "Pass with Distinction";
  else if (overallPct >= 65) grade = "Clear Pass";
  else if (overallPct >= 55) grade = "Borderline Pass";
  else grade = "Clear Fail";

  const domains = [
    {
      name: "1. Red Flag Clearance (40%)",
      score: rfScore,
      max_score: 40,
      percentage: Math.round(rfRatio * 100),
      feedback: [`Cleared ${rfUnlocked}/${redFlagGates.length} life/limb-threatening red flag & safety gates.`]
    },
    {
      name: "2. Clinical Trigger Coverage (20%)",
      score: ctScore,
      max_score: 20,
      percentage: Math.round(ctRatio * 100),
      feedback: [`Unlocked ${ctUnlocked}/${clinicalTriggerGates.length} diagnostic history & exam triggers (0% penalty for skipping bedside ICE).`]
    },
    {
      name: "3. Differential Diagnosis & Perturbation Pivot (25%)",
      score: pivotScore,
      max_score: 25,
      percentage: Math.round((pivotScore / 25) * 100),
      feedback: [`${clientSession.perturbationConcordance}% Bayesian alignment with specialist panel.`]
    },
    {
      name: "4. Viva Investigation & Management Plan (15%)",
      score: vivaScore,
      max_score: 15,
      percentage: Math.round(vivaRatio * 100),
      feedback: [`Scored ${vivaAwardedTotal}/${vivaMaxTotal} raw viva marks on acute investigations & management.`]
    }
  ];

  const remediation = [];
  if (!safetyPass) {
    remediation.push(`Always clear mandatory red-flag gates first: ${missedSafety.join(", ")}. Use the 🚨 Red Flag Sweep chip to drill these exclusions.`);
  }
  if (ctRatio < 0.75) {
    remediation.push("Unlock all core SOCRATES, PMHx/Meds, and Singapore Epidemiological triggers to build a complete diagnostic picture.");
  }
  if (vivaRatio < 0.75) {
    remediation.push("Review the Gold-Standard Viva Marking Key below to tighten your specific drug doses, target thresholds, and emergency protocols.");
  }
  traps.forEach(t => remediation.push(t.remediation));
  if (remediation.length === 0) {
    remediation.push("⚡ Flawless high-velocity clinical reasoning and red-flag exclusion. Distinction standard for MBBS Finals!");
  }

  // Generate Markdown Report
  const mdLines = [
    `# ⚡ OSCEBlitz Clinical Reasoning & Safety Audit`,
    `> **⚡ Blitz Rubric:** 0% Bedside Fluff • 100% Pure Clinical Reasoning & Red Flags`,
    ``,
    `**Station:** ${activeCase.title}`,
    `**Candidate:** ${clientSession.candidateName || "Dr. Noah Lim"}`,
    `**Overall Score:** **${overallPct}% (${grade})**`,
    `**Mandatory Safety Gate:** ${safetyPass ? "✅ SAFE" : "🚨 CRITICAL SAFETY BREACH"}`,
    ``,
    `## Zero-Fluff Domain Breakdown`,
    `| Domain | Score | Weight | Completion |`,
    `| :--- | :--- | :--- | :--- |`,
    ...domains.map(d => `| **${d.name}** | ${d.score}/${d.max_score} | ${d.max_score}% | ${d.percentage}% |`),
    ``,
    `## Actionable Clinical Remediation`,
    ...remediation.map(r => `- ${r}`)
  ];

  return {
    case_title: activeCase.title,
    candidate_name: clientSession.candidateName || "Dr. Noah Lim",
    overall_percentage: overallPct,
    grade,
    safety_pass: safetyPass,
    missed_safety_gates: missedSafety,
    domains,
    cognitive_traps: traps,
    remediation,
    markdown_report: mdLines.join("\n")
  };
}

async function loadFinalScorecard() {
  if (!activeCase) return;

  const card = computeZeroFluffScorecard();
  latestMarkdownReport = card.markdown_report;

  document.getElementById("card-case-title").innerText = card.case_title;
  document.getElementById("card-candidate-name").innerText = `Candidate: ${card.candidate_name}`;

  const gradeBadge = document.getElementById("card-grade-badge");
  gradeBadge.innerText = `${card.grade.toUpperCase()} (${card.overall_percentage}%)`;
  if (!card.safety_pass) {
    gradeBadge.className = "px-5 py-2.5 rounded-xl text-center font-black tracking-wide text-sm bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-500/10";
  } else if (card.overall_percentage >= 85) {
    gradeBadge.className = "px-5 py-2.5 rounded-xl text-center font-black tracking-wide text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10";
  } else {
    gradeBadge.className = "px-5 py-2.5 rounded-xl text-center font-black tracking-wide text-sm bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-lg";
  }

  // Safety Alert Box
  const safetyBox = document.getElementById("card-safety-alert");
  if (card.safety_pass) {
    safetyBox.className = "bg-emerald-950/30 border border-emerald-500/40 rounded-xl p-4 text-xs sm:text-sm flex items-start space-x-3 text-emerald-300";
    safetyBox.innerHTML = `
      <i class="fa-solid fa-shield-halved text-emerald-400 text-lg mt-0.5"></i>
      <div>
        <span class="font-bold">MANDATORY SAFETY STATUS: SAFE (ALL RED FLAGS CLEARED).</span>
        <p class="text-slate-300 text-xs mt-0.5">All life-threatening exclusions and mandatory safety gates were properly screened.</p>
      </div>
    `;
  } else {
    safetyBox.className = "bg-rose-950/40 border border-rose-500/50 rounded-xl p-4 text-xs sm:text-sm flex items-start space-x-3 text-rose-300";
    safetyBox.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation text-rose-400 text-lg mt-0.5"></i>
      <div>
        <span class="font-bold">CRITICAL PATIENT SAFETY BREACH:</span>
        <p class="text-rose-200 text-xs mt-0.5">Missed mandatory safety red flags: ${escapeHtml(card.missed_safety_gates.join(", "))}.</p>
        <p class="text-slate-400 text-[11px] mt-1">In LKCMedicine / NUS / Duke-NUS MBBS Finals, omitting these critical red flags triggers a station safety alert.</p>
      </div>
    `;
  }

  // Domain Breakdown Bars
  const domainsContainer = document.getElementById("card-domains-container");
  domainsContainer.innerHTML = "";
  card.domains.forEach(d => {
    const dDiv = document.createElement("div");
    dDiv.className = "bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5";
    dDiv.innerHTML = `
      <div class="flex justify-between text-xs">
        <span class="font-extrabold text-slate-200">${escapeHtml(d.name)}</span>
        <span class="font-mono font-bold text-emerald-400">${d.score} / ${d.max_score} pts (${d.percentage}%)</span>
      </div>
      <div class="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
        <div class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2.5 rounded-full transition-all duration-500" style="width: ${d.percentage}%"></div>
      </div>
      <p class="text-[11px] text-slate-400">${escapeHtml((d.feedback || [])[0] || "")}</p>
    `;
    domainsContainer.appendChild(dDiv);
  });

  // Cognitive Traps
  const trapsSec = document.getElementById("card-traps-section");
  const trapsContainer = document.getElementById("card-traps-container");
  trapsContainer.innerHTML = "";
  if (card.cognitive_traps && card.cognitive_traps.length > 0) {
    trapsSec.classList.remove("hidden");
    card.cognitive_traps.forEach(t => {
      const tDiv = document.createElement("div");
      tDiv.className = "bg-amber-950/30 border border-amber-500/30 rounded-xl p-3.5 text-xs space-y-1 text-amber-200";
      tDiv.innerHTML = `
        <div class="font-bold text-amber-400 flex items-center space-x-1.5">
          <i class="fa-solid fa-brain"></i>
          <span>Cognitive Trap: ${escapeHtml(t.name)}</span>
        </div>
        <p class="text-slate-300">${escapeHtml(t.description)}</p>
        <p class="text-emerald-300 text-[11px] font-medium pt-0.5">💡 Fix: ${escapeHtml(t.remediation)}</p>
      `;
      trapsContainer.appendChild(tDiv);
    });
  } else {
    trapsSec.classList.add("hidden");
  }

  // Gold-Standard Case Synthesis & Viva Marking Key
  const modelContainer = document.getElementById("card-model-answers-container");
  if (modelContainer) {
    const diffsHtml = (activeCase.differentials || []).map(d => `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${escapeHtml(d.name)}</span>
          <span class="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">${escapeHtml(d.tier)}</span>
        </div>
        <p class="text-[11px] text-slate-400 mt-1"><strong>Supporting:</strong> ${escapeHtml((d.supporting_features || []).join(" • "))}</p>
      </div>
    `).join("");

    const vivaKeyHtml = (activeCase.viva_questions || []).map((vq, idx) => `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
        <div class="font-bold text-purple-300">Q${idx + 1}: ${escapeHtml(vq.prompt)}</div>
        <ul class="list-disc list-inside text-[11px] text-slate-300 space-y-0.5">
          ${(vq.key_points_required || []).map(kp => `<li>${escapeHtml(kp)}</li>`).join("")}
        </ul>
      </div>
    `).join("");

    modelContainer.innerHTML = `
      <div class="space-y-2">
        <div class="text-[11px] font-bold uppercase text-slate-400">Ranked Differential Diagnosis:</div>
        ${diffsHtml}
      </div>
      <div class="space-y-2 pt-2">
        <div class="text-[11px] font-bold uppercase text-slate-400">Examiner Viva Gold-Standard Key Points:</div>
        ${vivaKeyHtml}
      </div>
    `;
  }

  // Remediation list
  const remList = document.getElementById("card-remediation-list");
  remList.innerHTML = "";
  card.remediation.forEach(r => {
    const li = document.createElement("li");
    li.innerText = r;
    remList.appendChild(li);
  });

  showView("scorecard-view");
}

function copyMarkdownReport() {
  if (!latestMarkdownReport) return;
  navigator.clipboard.writeText(latestMarkdownReport).then(() => {
    alert("📋 OSCEBlitz Scorecard copied to clipboard in GitHub Markdown format!");
  });
}
