/**
 * app.js: OSCEBlitz — Ultra-Minimalist High-Velocity Clinical Reasoning & Red-Flag Trainer
 * 100% Standalone Browser Engine (<10ms evaluation) + Optional Cloud Hybrid.
 */

// -------------------------------------------------------------
// SYMPTOM APPROACH REFERENCE LIBRARY (Inspired by OSCE Study Reference)
// Structured Textbook Frameworks (Harrison's / Kumar & Clark / Oxford Handbook)
// -------------------------------------------------------------
const SYMPTOM_APPROACH_LIBRARY = {
  chest_pain: {
    label: "Chest Pain",
    source: "Harrison's / ESC Acute Chest Pain Approach",
    framework: "Immediate rule-out of the ' Deadly Six' (ACS, Acute Aortic Syndrome, Pulmonary Embolism, Tension Pneumothorax, Cardiac Tamponade, Esophageal Rupture) before considering benign chest wall or GI mimics.",
    etiology: "Cardiovascular (STEMI/NSTEMI, AoD, Pericarditis, Myocarditis) • Pulmonary (PE, Pneumothorax, Pneumonia/Pleurisy) • GI (Boerhaave's, GERD, Esophageal Spasm, Biliary Colic) • MSK/Other (Costochondritis, Herpes Zoster).",
    red_flags: [
      "Tearing interscapular radiation or pulse/BP differential >20 mmHg (Aortic Dissection)",
      "Syncope, diaphoresis, hypotension, or new heart failure/murmur (Cardiogenic Shock / Mechanical STEMI complication)",
      "Sudden pleuritic pain with hypoxia, hemoptysis, or unilateral leg swelling (Pulmonary Embolism)",
      "Severe vomiting followed by subcutaneous emphysema (Boerhaave Esophageal Perforation)"
    ],
    investigations: "12-Lead ECG within 10 mins (plus V3R-V4R & V7-V9 if inferior/posterior suspected) • Serial High-Sensitivity Troponin • Portable CXR • D-Dimer / CTPA or CTA Aorta as indicated • Bedside POCUS/Echo."
  },
  abdominal_pain: {
    label: "Abdominal Pain",
    source: "Cope's Early Diagnosis of the Acute Abdomen / Zachary Cope",
    framework: "Anatomical quadrant localization + Visceral (dull, poorly localized midline foregut/midgut/hindgut) vs. Parietal/Somatic (sharp, localized peritonism with guarding/rigidity) + Referred pain patterns.",
    etiology: "RUQ (Cholangitis, Cholecystitis, Hepatic Abscess) • Epigastric (Perforated PUD, Acute Pancreatitis, Inferior MI) • Central/Generalized (Acute Mesenteric Ischemia, Ruptured AAA, SBO, Early Appendicitis) • Lower (Appendicitis, Ectopic Pregnancy, Ovarian/Testicular Torsion, Diverticulitis).",
    red_flags: [
      "Pain out of proportion to physical exam in Atrial Fibrillation / vascular disease (Acute Mesenteric Ischemia)",
      "Pulsatile abdominal mass with hypotension or back/flank pain in >60yo (Ruptured AAA)",
      "Board-like rigidity, guarding, and absent bowel sounds (Visceral Perforation / Peritonitis)",
      "Reproductive-age female with lower abdominal pain, amenorrhea, and shoulder-tip pain (Ruptured Ectopic Pregnancy)"
    ],
    investigations: "Urine hCG in all females of childbearing age • Venous Blood Gas & Lactate • FBC, U&E, LFTs, Serum Lipase/Amylase, Group & Save • Erect CXR (free subdiaphragmatic air) / CECT Abdomen & Pelvis (or CT Mesenteric Angiogram)."
  },
  fever: {
    label: "Fever & Tropical Sepsis",
    source: "Singapore MOH / Oxford Handbook of Infectious Diseases",
    framework: "Syndromic localization + Singapore Epidemiological Triad (Pulau Tekong / military soil & water exposure, Aedes mosquito clusters, travel/hawker history, diabetic immunocompromised host) + Sepsis-3 organ dysfunction screen.",
    etiology: "Vector-Borne (Dengue Fever / Dengue Shock Syndrome, Malaria, Chikungunya) • Environmental/Zoonotic (Melioidosis, Leptospirosis, Murine Typhus) • Invasive Pyogenic (Klebsiella K1/K2 Liver Abscess with Endogenous Endophthalmitis, Meningococcemia, Infective Endocarditis, Necrotizing Fasciitis).",
    red_flags: [
      "Day 4–6 defervescence with abdominal pain, persistent vomiting, mucosal bleeding, narrow pulse pressure <=20 mmHg, rising Hct (Dengue Shock Syndrome)",
      "Diabetic with fever, RUQ pain, and blurred vision / hypopyon (Invasive Klebsiella Syndrome with Endogenous Endophthalmitis)",
      "Core temperature >40.0°C with delirium, seizure, or coma after exertion (Exertional Heat Stroke)",
      "Non-blanching petechial/purpuric rash, neck stiffness, or photophobia (Meningococcal Sepsis / Meningitis)"
    ],
    investigations: "FBC with serial Hematocrit & Platelet trend • Dengue NS1 Ag + IgM/IgG • 2 sets of Blood Cultures before antibiotics • Venous Lactate, CRP/Procalcitonin, Renal & Liver panels • CXR & targeted imaging (CECT Abdomen / LP)."
  },
  dyspnea: {
    label: "Dyspnea",
    source: "Kumar & Clark's Clinical Medicine — Breathlessness",
    framework: "Time-course stratification: Instantaneous/Minutes (Pneumothorax, PE, Anaphylaxis, Foreign Body, Flash Pulmonary Edema) vs. Hours/Days (Acute Asthma, IECOPD, Pneumonia, Cardiac Tamponade, Metabolic Acidosis/DKA).",
    etiology: "Airway/Parenchymal (Life-Threatening Asthma, COPD Exacerbation, Severe CAP, ARDS) • Pulmonary Vasculature (Pulmonary Embolism) • Pleural (Tension/Spontaneous Pneumothorax, Massive Effusion) • Cardiac (Acute Decompensated Heart Failure, Arrhythmia, Tamponade) • Metabolic (Kussmaul breathing in DKA/Salicylate).",
    red_flags: [
      "Silent chest, exhaustion, bradycardia, confusion, or normal/rising PaCO2 in asthma (Life-Threatening / Near-Fatal Asthma)",
      "Tracheal deviation, unilateral absent breath sounds, hyperresonance, and shock (Tension Pneumothorax — needle decompress BEFORE CXR)",
      "Stridor, drooling, tripod posture, or muffled 'hot potato' voice (Impending Upper Airway Obstruction)",
      "Hypotension, distended neck veins (JVP), and muffled heart sounds (Beck's Triad — Cardiac Tamponade)"
    ],
    investigations: "Arterial Blood Gas (ABG) • Portable CXR • 12-Lead ECG • Point-of-Care Lung & Cardiac Ultrasound • FBC, U&E, Troponin, BNP, D-Dimer / CTPA."
  },
  headache_neuro: {
    label: "Headache & Neuro",
    source: "Queen Square / Macleod's Neurological Examination Framework",
    framework: "SNOOP4 Red-Flag Screen for secondary headaches + Anatomical Localization (Supratentorial/Cortical vs. Brainstem/Cranial Nerves vs. Cerebellar vs. Spinal Cord vs. Neuromuscular Junction/Peripheral Nerve).",
    etiology: "Vascular (Subarachnoid Hemorrhage, Acute Ischemic Stroke, Intracerebral Hemorrhage, Cerebral Venous Sinus Thrombosis, GCA) • Infective (Bacterial Meningitis, HSV Encephalitis, Brain Abscess) • Compressive/Structural (Raised ICP / Space-Occupying Lesion, Cauda Equina, Pituitary Apoplexy) • Neuromuscular (Guillain-Barré, Myasthenia Gravis Crisis).",
    red_flags: [
      "Thunderclap headache reaching 10/10 intensity in <60 seconds (Subarachnoid Hemorrhage from Berry Aneurysm rupture)",
      "Jaw claudication, scalp tenderness, and transient visual loss (amaurosis fugax) in >50yo (Giant Cell Arteritis — give high-dose steroids immediately)",
      "Fever, neck stiffness, altered mental status, or non-blanching rash (Acute Bacterial Meningitis / Encephalitis)",
      "Ascending symmetrical weakness with hyporeflexia and declining FVC <20 mL/kg (Guillain-Barré Syndrome with impending respiratory failure)"
    ],
    investigations: "Non-Contrast CT Head (within 6h for SAH; immediate for Stroke) • Lumbar Puncture (CSF opening pressure, cell count, protein/glucose, xanthochromia if CT negative) • ESR/CRP (if GCA suspected) • MRI Brain/Spine or CTA/MRV."
  },
  limb_joint: {
    label: "Limb, Spine & Joint",
    source: "Apley's System of Orthopaedics & Trauma",
    framework: "Look, Feel, Move, Neurovascular Status + Exclusion of Orthopaedic & Vascular Emergencies (Septic Arthritis, Cauda Equina Syndrome, Acute Compartment Syndrome, Necrotizing Fasciitis, Acute Limb Ischemia).",
    etiology: "Monoarthritis (Septic Arthritis, Crystal Gout/Pseudogout, Hemarthrosis) • Spine (Cauda Equina Syndrome, Epidural Abscess, Osteoporotic/Metastatic Fracture) • Vascular/Soft Tissue (Acute Limb Ischemia '6 Ps', Compartment Syndrome, Necrotizing Fasciitis, DVT).",
    red_flags: [
      "Acute hot swollen single joint with fever and inability to weight-bear (Septic Arthritis — aspirate joint BEFORE antibiotics)",
      "Bilateral sciatica, saddle anesthesia, and urinary retention/incontinence (Cauda Equina Syndrome — urgent MRI Spine)",
      "Pain out of proportion to injury worsened by passive stretch of toes/fingers (Acute Compartment Syndrome — immediate fasciotomy)",
      "Pale, pulseless, paresthetic, paralyzed, perishingly cold painful limb (Acute Limb Ischemia — 6-hour salvage window)"
    ],
    investigations: "Urgent Synovial Fluid Aspiration (Gram stain, microscopy for crystals, culture, WBC count) • Blood Cultures, FBC, CRP/ESR, Serum Urate • Plain Radiographs (2 orthogonal views) • Urgent MRI Lumbosacral Spine (Cauda Equina) or CT Angiogram."
  },
  obgyn: {
    label: "OBGYN",
    source: "RCOG Green-top Guidelines / Oxford Handbook of O&G",
    framework: "Pregnancy status first (LMP + Urine/Serum beta-hCG) + Trimester-specific emergency screen (1st: Ectopic/Miscarriage; 2nd/3rd: Pre-Eclampsia/Eclampsia, Placental Abruption, Placenta Previa) + Acute Gynecological Pelvis (Ovarian Torsion, PID/TOA).",
    etiology: "Early Pregnancy (Ruptured Ectopic Pregnancy, Miscarriage, Gestational Trophoblastic Disease) • Late Pregnancy (Severe Pre-Eclampsia / HELLP, Placental Abruption, Vasa/Placenta Previa) • Postpartum (Primary PPH: 4 Ts — Tone, Trauma, Tissue, Thrombin) • Gynecology (Ovarian Cyst Torsion, Tubo-Ovarian Abscess, Endometriosis).",
    red_flags: [
      "Amenorrhea + unilateral iliac fossa pain + vaginal spotting + shoulder-tip pain/syncope (Ruptured Ectopic Pregnancy with hemoperitoneum)",
      "Pregnancy >20w with BP >=160/110 mmHg, headache, visual scotomas, epigastric/RUQ pain, hyperreflexia/clonus (Severe Pre-Eclampsia / Impending Eclampsia)",
      "Painless bright red third-trimester vaginal bleeding (Placenta Previa — NEVER perform digital vaginal examination!)",
      "Sudden severe unilateral pelvic pain with vomiting and adnexal mass (Ovarian Torsion — time-critical detorsion)"
    ],
    investigations: "STAT Urine & Quantitative Serum beta-hCG • Transvaginal / Pelvic Ultrasound (Doppler) • FBC, Group & Crossmatch (4 units), Coagulation Profile • Pre-Eclampsia panel (Urine PCR, LFTs, Creatinine, Uric Acid, Peripheral Blood Film) • CTG fetal monitoring."
  },
  pediatrics: {
    label: "Pediatrics",
    source: "Pediatric Assessment Triangle (PAT) & KKH Clinical Guidelines",
    framework: "Pediatric Assessment Triangle (Appearance, Work of Breathing, Circulation to Skin) + Age-specific surgical/infectious mimics + Hydration/Feeds/Wet diapers + Immunization & Developmental screen.",
    etiology: "Respiratory (Bronchiolitis, Croup, Epiglottitis, Foreign Body Aspiration, Viral Wheeze/Asthma) • Surgical Abdomen (Intussusception, Pyloric Stenosis, Malrotation with Volvulus, Appendicitis, Incarcerated Hernia) • Febrile/Systemic (Kawasaki Disease, Febrile Seizure, Meningitis, NAI).",
    red_flags: [
      "Bilious (green) vomiting in a neonate or infant (Intestinal Malrotation with Midgut Volvulus until proven otherwise — urgent Upper GI Contrast Study)",
      "Episodic screaming with drawing up of legs, pallor, 'redcurrant jelly' stools, and RUQ sausage mass (Intussusception)",
      "Fever >=5 days with conjunctivitis, strawberry tongue, rash, extremity changes, cervical node (Kawasaki Disease — risk of Coronary Artery Aneurysms)",
      "Bulging fontanelle, high-pitched cry, non-blanching petechiae, or capillary refill >3s (Pediatric Septic Shock / Meningitis)"
    ],
    investigations: "Bedside Capillary Blood Glucose • Targeted Ultrasound (Abdomen for Intussusception/Pyloric Stenosis; Echocardiogram for Kawasaki) • FBC, CRP, Blood/Urine/CSF Cultures as indicated (avoid throat exam in suspected Epiglottitis)."
  },
  psych: {
    label: "Psychiatry",
    source: "Maudsley Prescribing Guidelines / MSE & Suicide Risk Assessment",
    framework: "Medical/Organic Exclusion First (Delirium, Toxidromes, Thyroid/Metabolic, CNS Infection) + Mental State Examination (ASEPTIC) + Structured Risk Assessment (Suicide, Self-Harm, Harm to Others, Neglect).",
    etiology: "Affective (Major Depressive Episode, Bipolar Mania) • Psychotic (First-Episode Psychosis, Schizophrenia, Drug-Induced Psychosis) • Emergency Toxidromes (Serotonin Syndrome, Neuroleptic Malignant Syndrome, Anticholinergic Toxicity, Lithium Toxicity, Delirium Tremens).",
    red_flags: [
      "Active suicidal ideation with concrete plan, lethal means, preparation/final acts, psychosis, or hopelessness (High Imminent Suicide Risk — 1-to-1 inpatient observation)",
      "Antipsychotic use + lead-pipe muscle rigidity + hyperthermia + autonomic instability + raised CK (Neuroleptic Malignant Syndrome)",
      "SSRI/SNRI/Tramadol/MAOI combination + hyperreflexia, inducible clonus, agitation, diaphoresis (Serotonin Syndrome)",
      "Acute fluctuating confusion, visual hallucinations, and coarse tremor 48–72h after stopping alcohol (Delirium Tremens)"
    ],
    investigations: "Organic screen: Capillary Glucose, FBC, U&E, Calcium, LFTs, TFTs, Creatine Kinase (CK), Urine Toxicology, ECG (QTc interval before antipsychotics), CT Brain if focal neuro/acute delirium."
  },
  ent_eye: {
    label: "ENT & Eye",
    source: "Singapore ENT / SNEC Red Eye & Visual Loss Framework",
    framework: "Sight-Threatening Red Eye / Visual Loss Screen (Acuity, Pupils/RAPD, Intraocular Pressure, Anterior Chamber, Fundus) + Head & Neck Cancer Triad (Nasopharyngeal Carcinoma in Southern Chinese/SG adults).",
    etiology: "ENT (Nasopharyngeal Carcinoma [NPC], Peritonsillar Abscess/Quinsy, Epiglottitis, Ludwig's Angina, Mastoiditis, Vestibular Neuritis vs Posterior Stroke) • Eye (Acute Angle-Closure Glaucoma, Endogenous/Post-Op Endophthalmitis, Central Retinal Artery Occlusion, Retinal Detachment, Microbial Keratitis, Orbital Cellulitis).",
    red_flags: [
      "Unilateral painless cervical node (Level II/VA) + unilateral middle ear effusion + blood-stained morning saliva + CN VI diplopia (Nasopharyngeal Carcinoma — NEVER do open excisional node biopsy first!)",
      "Painful red eye, blurred vision with halos, cloudy cornea, mid-dilated fixed pupil, rock-hard globe (Acute Angle-Closure Glaucoma)",
      "Red eye with hypopyon and decreased acuity in a febrile diabetic (Endogenous Endophthalmitis from Klebsiella liver abscess)",
      "Painful ophthalmoplegia, proptosis, RAPD, and color vision loss after sinusitis (Orbital Cellulitis — sight/cavernous sinus thrombosis risk)"
    ],
    investigations: "Visual Acuity (Snellen) + Pupil RAPD + Slit-lamp & Tonometry (IOP) • Flexible Nasoendoscopy + Biopsy of Fossa of Rosenmüller • Contrast MRI Nasopharynx/Skull Base or CT Orbits/Sinuses + Plasma EBV DNA."
  }
};

// -------------------------------------------------------------
// FALLBACK SINGAPORE CLASSICS (Merged with window.VOICE_OSCE_CASES)
// -------------------------------------------------------------
const SG_CLASSIC_IDS = new Set(["id_11", "gastro_12", "ent_13", "med_14", "surg_15"]);

const FALLBACK_SG_CASES = {
  "id_11": {
    "case_id": "id_11",
    "specialty": "Infectious Diseases / Emergency",
    "symptom_cluster": "fever",
    "sg_classic": true,
    "target_seconds": 90,
    "time_breakdown": "40s History • 25s Red Flags • 25s Dx & Plan",
    "blind_prompt": "19M NSF Recruit • Day 5 fever breaking with severe abdominal pain & postural dizziness",
    "title": "BMTC Pulau Tekong Recruit with Day 5 Fever & Abdominal Pain (Dengue Shock)",
    "brief": {
      "setting": "Changi General Hospital (CGH) ED Resus",
      "patient_name": "REC Ryan Koh",
      "age": 19,
      "gender": "Male",
      "occupation": "NSF Recruit (BMTC Pulau Tekong)",
      "presenting_complaint": "5 days of high fever, retro-orbital headache, now defervescing with severe abdominal pain and postural dizziness",
      "triage_vitals": {
        "Heart Rate": "118 bpm",
        "Blood Pressure": "96/82 mmHg",
        "Respiratory Rate": "24 /min",
        "Oxygen Saturation": "98% RA",
        "Temperature": "36.9°C"
      },
      "instructions": "Take a rapid history, screen for Dengue Warning Signs & plasma leakage, interpret STAT FBC/Hct, and formulate fluid resuscitation."
    },
    "persona": {
      "name": "REC Ryan Koh",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+0%",
      "pain_level": 7,
      "temperament": "exhausted",
      "behavioral_cues": ["Lethargic, clutching epigastrium, gums slightly oozing blood"]
    },
    "gates": [
      {
        "key": "fever_defervescence_timeline",
        "category": "socrates",
        "trigger_concepts": ["onset", "start", "fever", "days", "temperature", "when", "timing", "defervescence"],
        "response_text": "My high fever started 5 days ago during field camp in Pulau Tekong—hit 39.8°C with bone-breaking body aches and pain behind my eyes. Today the fever suddenly broke, which I thought meant I was recovering, but I feel ten times worse.",
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
        "response_text": "When I brushed my teeth this morning my gums wouldn't stop oozing blood, and I noticed a fine red petechial rash on my shins.",
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
        "response_text": "Three other recruits in my Pulau Tekong platoon were evacuated with confirmed Dengue fever this week. I got bitten badly by Aedes mosquitoes near the training shed.",
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
        "response_text": "[Bedside Exam]: Tender 3cm hepatomegaly, dullness at right lung base (pleural effusion), petechial rash on lower limbs, narrow pulse pressure 96/82 mmHg (14 mmHg).",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT FBC, Hematocrit & Dengue NS1/IgM Panel",
      "description": "Bedside FBC, serial hematocrit, and rapid Dengue antigen results return:",
      "findings": {
        "Hb & Hematocrit": "Hb 17.8 g/dL, Hct 53.5% (Baseline 42% -> >25% hemoconcentration!)",
        "Platelets & WBC": "Platelets 18 x 10^9/L, WBC 2.1 x 10^9/L",
        "Dengue Rapid Duo": "NS1 Ag POSITIVE, IgM POSITIVE, IgG POSITIVE",
        "Lactate & Transaminases": "Lactate 3.4 mmol/L, AST 340 U/L, ALT 210 U/L"
      },
      "expected_shifts": {
        "Dengue Shock Syndrome (Severe Dengue in Critical Phase with Plasma Leakage)": 2,
        "Uncomplicated Classic Dengue Fever": -2,
        "Melioidosis / Leptospirosis Sepsis": -1
      },
      "expert_rationale": "At Day 5 defervescence, the patient has entered the Critical Phase of Severe Dengue (Dengue Shock Syndrome). Plasma leakage is proven by >20% rise in Hct (42% to 53.5%), pleural effusion, hepatomegaly, and narrowed pulse pressure (96/82 = 14 mmHg). Immediate isotonic crystalloid bolus (10–20 mL/kg) titrated to serial Hct—NOT prophylactic platelet transfusion—is life-saving."
    },
    "differentials": [
      {
        "name": "Severe Dengue / Dengue Shock Syndrome (Critical Phase Plasma Leakage)",
        "tier": "primary",
        "supporting_features": [
          "Day 5 defervescence with warning signs (abdominal pain, persistent vomiting, mucosal bleeding, hepatomegaly)",
          "Narrowed pulse pressure 14 mmHg (96/82 mmHg) & tachycardia 118 bpm",
          "Hematocrit surge >20% (53.5%) + platelets 18 + NS1 positive"
        ]
      },
      {
        "name": "Acute Melioidosis / Leptospirosis",
        "tier": "secondary",
        "supporting_features": ["Pulau Tekong military recruit with fever and hepatomegaly"]
      }
    ],
    "viva_questions": [
      {
        "prompt": "Synthesize why BP 96/82 mmHg is a medical emergency and state the WHO Dengue Warning Signs present.",
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
        "remediation_advice": "Singapore MOH & WHO Guidelines (ARCH RCT): Prophylactic platelet transfusion in dengue does NOT reduce bleeding and increases fluid overload/pulmonary edema.",
        "trigger_keywords": ["transfuse platelets", "give platelets", "platelet transfusion"],
        "absent_keywords": [],
        "missed_gate_keys": ["abdominal_pain_persistent_vomiting"]
      }
    ]
  }
};

// -------------------------------------------------------------
// APPLICATION STATE
// -------------------------------------------------------------
let ALL_CASES_MAP = {};
let currentCases = [];
let activeFilterCategory = "all";
let currentSearchQuery = "";
let isBlindMode = true; // ON by default so diagnoses aren't spoiled!
let activeApproachCluster = "chest_pain";

let activeSessionId = null;
let activeCase = null;
let timerInterval = null;
let targetSeconds = 90;
let elapsedSeconds = 0;
let isVoiceOutputEnabled = false; // Default: Silent Text
let revealMissedClues = false;
let latestMarkdownReport = "";

let clientSession = {
  unlockedGateKeys: new Set(),
  turnCount: 0,
  perturbationTriggered: false,
  perturbationVoted: false,
  perturbationConcordance: 85.0,
  perturbationReasoning: "",
  vivaScores: {},
  vivaAnswers: []
};

let speechRecognizer = null;
let isRecording = false;

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
  renderSymptomApproachDrawer(activeApproachCluster);

  const textInput = document.getElementById("candidate-text-input");
  if (textInput) {
    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendCandidateMessage();
      }
    });
  }

  // Hotkey support: '/' focuses search, 'Escape' dismisses overlays, 'Ctrl+Enter' grades station
  document.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    const isInputActive = activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable);

    if (e.key === "/" && !isInputActive) {
      const casesView = document.getElementById("cases-view");
      const searchInput = document.getElementById("station-search-input") || document.getElementById("case-search-input");
      if (casesView && !casesView.classList.contains("hidden") && searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === "Escape") {
      const guidePop = document.getElementById("time-guide-popover");
      if (guidePop && !guidePop.classList.contains("hidden")) {
        guidePop.classList.add("hidden");
      }
      const approachDrawer = document.getElementById("symptom-approach-drawer");
      if (approachDrawer && !approachDrawer.classList.contains("hidden")) {
        approachDrawer.classList.add("hidden");
      }
      if (activeEl && (activeEl.id === "station-search-input" || activeEl.id === "case-search-input")) {
        activeEl.blur();
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      const vivaView = document.getElementById("viva-view");
      if (vivaView && !vivaView.classList.contains("hidden")) {
        e.preventDefault();
        gradeStationNow();
      }
    }
  });
});

function showView(viewId) {
  const views = ["cases-view", "consultation-view", "viva-view", "scorecard-view"];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) el.classList.remove("hidden");
      else el.classList.add("hidden");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function exitStationToLibrary() {
  clearInterval(timerInterval);
  stopVoiceRecognition();
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  showView("cases-view");
}

// -------------------------------------------------------------
// HEADER DRAWERS: TIME GUIDE & SYMPTOM APPROACH GENERATOR
// -------------------------------------------------------------
function toggleTimeGuidePopover() {
  const pop = document.getElementById("time-guide-popover");
  const drawer = document.getElementById("symptom-approach-drawer");
  if (drawer) drawer.classList.add("hidden");
  if (pop) pop.classList.toggle("hidden");
}

function toggleSymptomApproachDrawer() {
  const drawer = document.getElementById("symptom-approach-drawer");
  const pop = document.getElementById("time-guide-popover");
  if (pop) pop.classList.add("hidden");
  if (drawer) {
    drawer.classList.toggle("hidden");
    if (!drawer.classList.contains("hidden")) {
      renderSymptomApproachDrawer(activeApproachCluster);
    }
  }
}

function renderSymptomApproachDrawer(clusterKey) {
  activeApproachCluster = clusterKey || "chest_pain";
  const lib = Object.assign({}, SYMPTOM_APPROACH_LIBRARY, window.SYMPTOM_APPROACH_LIBRARY || {});
  const entry = lib[activeApproachCluster] || SYMPTOM_APPROACH_LIBRARY.chest_pain;

  const pillsEl = document.getElementById("approach-cluster-pills");
  if (pillsEl) {
    pillsEl.innerHTML = Object.entries(lib).map(([key, item]) => {
      const active = key === activeApproachCluster;
      const cls = active
        ? "px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-950 transition"
        : "px-2.5 py-1 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-[#090A0F] hairline-border transition";
      return `<button onclick="renderSymptomApproachDrawer('${escapeHtml(key)}')" class="${cls}">${escapeHtml(item.label || key)}</button>`;
    }).join("");
  }

  const contentEl = document.getElementById("approach-reference-content");
  if (contentEl && entry) {
    const rfList = (entry.red_flags || []).map(r => `<li class="flex items-start gap-1.5"><span class="text-rose-400">•</span><span>${escapeHtml(r)}</span></li>`).join("");
    contentEl.innerHTML = `
      <div class="space-y-1">
        <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-500">1. Textbook Framework</div>
        <div class="text-zinc-200 leading-relaxed">${escapeHtml(entry.framework || "")}</div>
        <div class="text-[10px] font-mono text-emerald-400 pt-1">${escapeHtml(entry.source || "")}</div>
      </div>
      <div class="space-y-1">
        <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-500">2. Etiology &amp; Differentials</div>
        <div class="text-zinc-300 leading-relaxed">${escapeHtml(entry.etiology || "")}</div>
      </div>
      <div class="space-y-1">
        <div class="text-[10px] font-mono uppercase tracking-wider text-rose-400">3. Red Flags to Exclude</div>
        <ul class="text-zinc-300 space-y-1 leading-snug">${rfList}</ul>
      </div>
      <div class="space-y-1">
        <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-500">4. First-Line Workup</div>
        <div class="text-zinc-300 leading-relaxed">${escapeHtml(entry.investigations || "")}</div>
      </div>
    `;
  }
}

// -------------------------------------------------------------
// CASE LOADING, SYMPTOM CLUSTERING & BLIND MODE
// -------------------------------------------------------------
function inferSymptomCluster(c) {
  if (c.symptom_cluster) {
    const sc = String(c.symptom_cluster).toLowerCase().replace(/[^a-z0-9]+/g, "_");
    if (sc.includes("chest")) return "chest_pain";
    if (sc.includes("abdom") || sc.includes("gi") || sc.includes("gastro")) return "abdominal_pain";
    if (sc.includes("fever") || sc.includes("infect") || sc.includes("sepsis") || sc.includes("tropical")) return "fever";
    if (sc.includes("dyspn") || sc.includes("breath") || sc.includes("resp") || sc.includes("cough")) return "dyspnea";
    if (sc.includes("head") || sc.includes("neuro") || sc.includes("stroke") || sc.includes("weak") || sc.includes("seiz")) return "headache_neuro";
    if (sc.includes("limb") || sc.includes("joint") || sc.includes("ortho") || sc.includes("back") || sc.includes("spine")) return "limb_joint";
    if (sc.includes("obgyn") || sc.includes("obstet") || sc.includes("gyn") || sc.includes("preg")) return "obgyn";
    if (sc.includes("ped") || sc.includes("paed") || sc.includes("child")) return "pediatrics";
    if (sc.includes("psych") || sc.includes("mental") || sc.includes("mood")) return "psych";
    if (sc.includes("ent") || sc.includes("eye") || sc.includes("ophth") || sc.includes("neck")) return "ent_eye";
  }

  const text = `${c.id || c.case_id || ""} ${c.specialty || ""} ${c.brief?.presenting_complaint || c.chief_complaint || ""} ${c.title || ""}`.toLowerCase();
  if (text.includes("obgyn") || text.includes("obstetric") || text.includes("gynecol") || text.includes("pregnant") || text.includes("ectopic") || text.includes("preeclampsia") || text.includes("postpartum")) return "obgyn";
  if (text.includes("peds") || text.includes("pediatric") || text.includes("paediatric") || text.includes("infant") || text.includes("kawasaki") || text.includes("intussusception") || text.includes("bronchiolitis") || text.includes("croup")) return "pediatrics";
  if (text.includes("psych") || text.includes("suicid") || text.includes("mania") || text.includes("delirium") || text.includes("serotonin") || text.includes("neuroleptic") || text.includes("depression")) return "psych";
  if (text.includes("ent") || text.includes("otorhino") || text.includes("ophthalm") || text.includes("eye") || text.includes("diplopia") || text.includes("glaucoma") || text.includes("epistaxis") || text.includes("neck lump") || text.includes("tinnitus") || text.includes("hoarse") || text.includes("vertigo")) return "ent_eye";
  if (text.includes("chest pain") || text.includes("retrosternal") || text.includes("stemi") || text.includes("pericarditis") || text.includes("dissection") || text.includes("palpitation") || text.includes("cardio")) return "chest_pain";
  if (text.includes("dyspnea") || text.includes("breathless") || text.includes("shortness of breath") || text.includes("wheez") || text.includes("asthma") || text.includes("copd") || text.includes("pneumothorax") || text.includes("hemoptysis") || text.includes("respiratory")) return "dyspnea";
  if (text.includes("back pain") || text.includes("cauda equina") || text.includes("knee") || text.includes("joint") || text.includes("arthritis") || text.includes("gout") || text.includes("fracture") || text.includes("compartment") || text.includes("limb") || text.includes("ortho")) return "limb_joint";
  if (text.includes("headache") || text.includes("thunderclap") || text.includes("weakness") || text.includes("slurred") || text.includes("seizure") || text.includes("meningitis") || text.includes("neuro") || text.includes("stroke")) return "headache_neuro";
  if (text.includes("abdom") || text.includes("epigastric") || text.includes("ruq") || text.includes("rif") || text.includes("hematemesis") || text.includes("melena") || text.includes("jaundice") || text.includes("bowel") || text.includes("pancreat") || text.includes("appendic") || text.includes("mesenteric")) return "abdominal_pain";
  if (text.includes("fever") || text.includes("dengue") || text.includes("malaria") || text.includes("melioid") || text.includes("leptospir") || text.includes("rigors") || text.includes("heat stroke") || text.includes("dka") || text.includes("thyroid")) return "fever";
  return "fever";
}

function getClusterLabel(clusterKey) {
  const labels = {
    chest_pain: "Chest Pain",
    abdominal_pain: "Abdominal Pain",
    fever: "Fever / Systemic",
    dyspnea: "Dyspnea",
    headache_neuro: "Headache & Neuro",
    limb_joint: "Limb & Joint",
    obgyn: "OBGYN",
    pediatrics: "Pediatrics",
    psych: "Psychiatry",
    ent_eye: "ENT & Eye"
  };
  return labels[clusterKey] || "Clinical";
}

function buildBlindPrompt(c) {
  if (c.blind_prompt) return c.blind_prompt;
  const age = c.brief?.age ?? c.age ?? "";
  const genderRaw = String(c.brief?.gender || c.gender || "");
  const sexShort = genderRaw.toLowerCase().startsWith("f") ? "F" : (genderRaw.toLowerCase().startsWith("m") ? "M" : "");
  const occ = c.brief?.occupation || c.occupation || "";
  const occShort = occ.length > 26 ? occ.split("(")[0].trim() : occ;
  const complaint = c.brief?.presenting_complaint || c.presenting_complaint || c.chief_complaint || "Acute presentation";
  const prefix = `${age}${sexShort}${occShort ? " " + occShort : ""}`.trim();
  return prefix ? `${prefix} • ${complaint}` : complaint;
}

function formatCompactVitals(vitalsObj) {
  if (!vitalsObj) return "Vitals at triage";
  const parts = [];
  Object.entries(vitalsObj).forEach(([k, v]) => {
    const kl = k.toLowerCase();
    const valClean = String(v).split("(")[0].trim();
    if (kl.includes("blood pressure") || kl === "bp") parts.push(`BP ${valClean.replace("mmHg", "").trim()}`);
    else if (kl.includes("heart rate") || kl === "hr" || kl.includes("pulse")) parts.push(`HR ${valClean.replace("bpm", "").trim()}`);
    else if (kl.includes("temp")) parts.push(`T ${valClean}`);
    else if (kl.includes("oxygen") || kl.includes("spo2")) parts.push(`SpO2 ${valClean.replace("on room air", "RA").trim()}`);
    else if (kl.includes("respiratory") || kl === "rr") parts.push(`RR ${valClean.replace("/min", "").trim()}`);
  });
  return parts.slice(0, 4).join(" • ") || "Vitals recorded";
}

function formatTargetBadge(sec) {
  const s = Number(sec) || 90;
  return `⏱️ ${s}s`;
}

async function loadCases() {
  const rawMap = Object.assign({}, FALLBACK_SG_CASES, window.VOICE_OSCE_CASES || {});
  ALL_CASES_MAP = {};

  Object.entries(rawMap).forEach(([id, c]) => {
    ALL_CASES_MAP[id] = JSON.parse(JSON.stringify(c));
  });

  try {
    const res = await fetch("/api/cases");
    if (res.ok) {
      const apiList = await res.json();
      if (Array.isArray(apiList)) {
        for (const item of apiList) {
          if (!ALL_CASES_MAP[item.id]) {
            const detailRes = await fetch(`/api/cases/${item.id}`);
            if (detailRes.ok) {
              ALL_CASES_MAP[item.id] = await detailRes.json();
            }
          }
        }
      }
    }
  } catch (_) {
    // 100% Standalone mode
  }

  currentCases = Object.values(ALL_CASES_MAP).map(c => {
    const id = c.case_id || c.id;
    const cluster = inferSymptomCluster(c);
    const isSg = Boolean(c.sg_classic || SG_CLASSIC_IDS.has(id));
    const targetSec = Number(c.target_seconds) || (isSg ? 90 : 90);
    const shortSpecialty = String(c.specialty || "Medicine").split("/")[0].trim();

    return {
      id,
      specialty: c.specialty || "Medicine",
      shortSpecialty,
      cluster,
      clusterLabel: getClusterLabel(cluster),
      title: c.title,
      blindPrompt: buildBlindPrompt(c),
      setting: c.brief?.setting || c.setting || "Emergency Department",
      complaint: c.brief?.presenting_complaint || c.presenting_complaint || c.chief_complaint || "",
      compactVitals: formatCompactVitals(c.brief?.triage_vitals || c.triage_vitals),
      isSgClassic: isSg,
      targetSeconds: targetSec
    };
  });

  // Update Header Case Count
  const countEl = document.getElementById("header-case-count");
  if (countEl) {
    countEl.innerText = `${currentCases.length} Clinical Reasoning Cases`;
  }

  updateFilterTabCounts();
  renderCasesGrid(getFilteredCases());
}

function updateFilterTabCounts() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    const cat = tab.dataset.specialty;
    const count = currentCases.filter(c => isCaseMatchingFilter(c, cat)).length;
    const baseLabels = {
      all: "All",
      sg_classics: "🇸🇬 SG Classics",
      chest_pain: "Chest Pain",
      abdominal_pain: "Abdominal Pain",
      fever: "Fever",
      dyspnea: "Dyspnea",
      headache_neuro: "Headache & Neuro",
      limb_joint: "Limb & Joint",
      obgyn: "OBGYN",
      pediatrics: "Pediatrics",
      psych: "Psych",
      ent_eye: "ENT & Eye"
    };
    const label = baseLabels[cat] || cat;
    tab.innerText = count > 0 ? `${label} (${count})` : label;
  });
}

function isCaseMatchingFilter(c, filterKey) {
  if (!filterKey || filterKey === "all") return true;
  if (filterKey === "sg_classics") return c.isSgClassic;
  return c.cluster === filterKey;
}

function getFilteredCases() {
  return currentCases.filter(c => {
    if (!isCaseMatchingFilter(c, activeFilterCategory)) return false;
    if (!currentSearchQuery) return true;
    const q = currentSearchQuery.toLowerCase();
    return (
      c.blindPrompt.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.specialty.toLowerCase().includes(q) ||
      c.clusterLabel.toLowerCase().includes(q) ||
      c.complaint.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });
}

function filterCases(category) {
  activeFilterCategory = category;
  document.querySelectorAll(".filter-tab").forEach(tab => {
    if (tab.dataset.specialty === category) {
      tab.className = "filter-tab shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-950 transition";
    } else {
      tab.className = "filter-tab shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 card-surface transition";
    }
  });

  // Also sync Symptom Approach drawer if user selected a symptom cluster
  if (SYMPTOM_APPROACH_LIBRARY[category]) {
    activeApproachCluster = category;
    renderSymptomApproachDrawer(category);
  }

  renderCasesGrid(getFilteredCases());
}

function handleStationSearch(query) {
  currentSearchQuery = (query || "").trim();
  renderCasesGrid(getFilteredCases());
}

function toggleBlindMode() {
  isBlindMode = !isBlindMode;
  const icon = document.getElementById("blind-mode-icon");
  const label = document.getElementById("blind-mode-label");
  const pill = document.getElementById("blind-mode-pill");

  if (isBlindMode) {
    if (icon) icon.innerText = "🔒";
    if (label) label.innerText = "Blind Mode (Hide Diagnoses)";
    if (pill) {
      pill.innerText = "ON";
      pill.className = "px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30";
    }
  } else {
    if (icon) icon.innerText = "🔓";
    if (label) label.innerText = "Show Diagnoses";
    if (pill) {
      pill.innerText = "OFF";
      pill.className = "px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700";
    }
  }
  renderCasesGrid(getFilteredCases());
}

function renderCasesGrid(cases) {
  const grid = document.getElementById("cases-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (cases.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full card-surface rounded-xl p-8 text-center text-zinc-400 text-xs">
        No cases matched your search.
        <button onclick="filterCases('all'); document.getElementById('station-search-input').value=''; handleStationSearch('');" class="text-emerald-400 underline ml-1 font-medium">Reset filters</button>
      </div>
    `;
    return;
  }

  cases.forEach(c => {
    const card = document.createElement("div");
    card.className = "card-surface-interactive rounded-xl p-4 flex flex-col justify-between gap-3.5 cursor-pointer group";
    card.onclick = () => launchInstantBlitz(c.id);

    const topTag = c.isSgClassic
      ? `<span class="text-[11px] font-medium text-zinc-300">🇸🇬 SG • ${escapeHtml(c.clusterLabel)}</span>`
      : `<span class="text-[11px] font-medium text-zinc-400">${escapeHtml(c.shortSpecialty)} • ${escapeHtml(c.clusterLabel)}</span>`;

    const displayTitle = isBlindMode ? c.blindPrompt : c.title;
    const subtitleHtml = isBlindMode
      ? `<p class="text-[11px] text-zinc-500 mt-1 truncate">${escapeHtml(c.setting)}</p>`
      : `<p class="text-[11px] text-zinc-400 mt-1 line-clamp-1">${escapeHtml(c.blindPrompt)}</p>`;

    card.innerHTML = `
      <div class="space-y-2.5">
        <!-- 1. Top Row: Specialty/Symptom Tag + Target Time Pill -->
        <div class="flex items-center justify-between gap-2">
          ${topTag}
          <span class="font-mono text-[11px] text-zinc-400 bg-[#090A0F] hairline-border px-2 py-0.5 rounded">
            ${escapeHtml(formatTargetBadge(c.targetSeconds))}
          </span>
        </div>

        <!-- 2. Center Title: Unspoiled Presenting Complaint (or Diagnosis if Blind Mode off) -->
        <div>
          <h3 class="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition leading-snug">
            ${escapeHtml(displayTitle)}
          </h3>
          ${subtitleHtml}
        </div>
      </div>

      <!-- 3. Subtle Footer: Vitals Preview + Start -> -->
      <div class="pt-2.5 hairline-border-t flex items-center justify-between gap-2 text-[11px]">
        <span class="font-mono text-zinc-500 truncate">${escapeHtml(c.compactVitals)}</span>
        <span class="font-medium text-zinc-300 group-hover:text-emerald-400 shrink-0 transition">Start →</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function startRandomCase() {
  const pool = getFilteredCases().length > 0 ? getFilteredCases() : currentCases;
  if (pool.length === 0) return;
  const candidates = pool.length > 1 && activeCase
    ? pool.filter(c => c.id !== activeCase.id)
    : pool;
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  if (pick) launchInstantBlitz(pick.id);
}

// -------------------------------------------------------------
// VIEW 2: ACTIVE STATION WORKSPACE (SINGLE FOCUSED COLUMN)
// -------------------------------------------------------------
function getFreshCaseCopy(caseId) {
  const template = ALL_CASES_MAP[caseId];
  if (!template) return null;
  const copy = JSON.parse(JSON.stringify(template));
  copy.id = copy.case_id || caseId;
  return copy;
}

async function launchInstantBlitz(caseId) {
  activeCase = getFreshCaseCopy(caseId);
  if (!activeCase) return;
  await startConsultationSession();
}

async function startConsultationSession() {
  if (!activeCase) return;
  activeCase = getFreshCaseCopy(activeCase.id);
  revealMissedClues = false;
  updateRevealButtonUI();

  activeSessionId = `blitz-${activeCase.id}-${Date.now()}`;
  targetSeconds = Number(activeCase.target_seconds) || 90;
  elapsedSeconds = 0;

  clientSession = {
    unlockedGateKeys: new Set(),
    turnCount: 0,
    perturbationTriggered: false,
    perturbationVoted: false,
    perturbationConcordance: 85.0,
    perturbationReasoning: "",
    vivaScores: {},
    vivaAnswers: []
  };

  // Optional non-blocking backend session start
  fetch("/api/sessions/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ case_id: activeCase.id, candidate_name: "Candidate" })
  }).then(r => r.ok ? r.json() : null).then(data => {
    if (data && data.session_id) activeSessionId = data.session_id;
  }).catch(() => {});

  // 1. Compact Top Bar: Demographics + Vitals Strip
  const age = activeCase.brief?.age ?? activeCase.age ?? "";
  const genderRaw = String(activeCase.brief?.gender || activeCase.gender || "");
  const sexShort = genderRaw.toLowerCase().startsWith("f") ? "F" : "M";
  const occ = (activeCase.brief?.occupation || activeCase.occupation || "").split("(")[0].trim();
  const vitalsCompact = formatCompactVitals(activeCase.brief?.triage_vitals || activeCase.triage_vitals);

  const vitalsStrip = document.getElementById("consult-vitals-strip");
  if (vitalsStrip) {
    vitalsStrip.innerText = `${age}${sexShort} ${occ} • ${vitalsCompact}`;
  }

  const timerBox = document.getElementById("consult-timer-box");
  if (timerBox) {
    timerBox.title = activeCase.time_breakdown || "40s History • 25s Red Flags • 25s Dx & Plan";
  }

  // 2. Patient Opening Card
  const pName = activeCase.brief?.patient_name || activeCase.patient_name || activeCase.persona?.name || "Patient";
  document.getElementById("consult-patient-demo").innerText = `${pName} (${age}${sexShort}, ${occ})`;
  document.getElementById("consult-setting-tag").innerText = `• ${activeCase.brief?.setting || activeCase.setting || "ED"}`;

  const openingQuote = activeCase.opening_statement ||
    (activeCase.gates && activeCase.gates[0]?.response_text) ||
    activeCase.brief?.presenting_complaint ||
    activeCase.chief_complaint || "";
  document.getElementById("consult-opening-quote").innerText = `"${openingQuote}"`;

  const cue = (activeCase.persona?.behavioral_cues || [])[0] || "";
  document.getElementById("consult-behavioral-cue").innerText = cue ? `[${cue}]` : "";

  // Reset Twist Banner & Findings Stream
  const twistBanner = document.getElementById("inline-twist-banner");
  if (twistBanner) twistBanner.classList.add("hidden");

  const chatContainer = document.getElementById("chat-messages");
  if (chatContainer) chatContainer.innerHTML = "";

  const bottomSummary = document.getElementById("bottom-bar-summary");
  if (bottomSummary) {
    bottomSummary.innerText = activeCase.time_breakdown || "Target: 40s History • 25s Red Flags • 25s Dx & Plan";
  }

  startTargetCountdownTimer();
  renderGateChecklist();
  showView("consultation-view");

  setTimeout(() => {
    document.getElementById("candidate-text-input")?.focus();
  }, 80);
}

function startTargetCountdownTimer() {
  clearInterval(timerInterval);
  elapsedSeconds = 0;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function formatSecondsMMSS(sec) {
  const abs = Math.abs(sec);
  const m = Math.floor(abs / 60);
  const s = abs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("consult-timer");
  if (!timerEl) return;

  const remaining = targetSeconds - elapsedSeconds;
  if (remaining >= 0) {
    timerEl.innerText = formatSecondsMMSS(remaining);
    if (remaining <= 20) {
      timerEl.className = "font-semibold text-amber-400";
    } else {
      timerEl.className = "font-semibold text-emerald-400";
    }
  } else {
    // Gently show overtime without kicking the user out
    timerEl.innerText = `+${formatSecondsMMSS(Math.abs(remaining))}`;
    timerEl.className = "font-semibold text-amber-400";
  }
}

// -------------------------------------------------------------
// <10ms CLIENT-SIDE KEYWORD SPAM & SWEEP ENGINE
// -------------------------------------------------------------
function conceptMatchesText(concept, textLower) {
  const c = String(concept || "").toLowerCase().trim();
  if (!c) return false;
  const escaped = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}(?:s|es|ed|d|ing|y|ly)?\\b`, "i");
  if (regex.test(textLower)) return true;
  if (c.length >= 5 && textLower.includes(c)) return true;
  return false;
}

const GENERAL_NEGATIVE_EXCLUSIONS = {
  "fever": "Afebrile / No unexplained fever outside primary complaint",
  "weight loss": "No unintentional weight loss",
  "night sweats": "No drenching night sweats",
  "syncope": "No frank loss of consciousness",
  "bleeding": "No other spontaneous bleeding or melena",
  "travel": "No recent high-risk international travel",
  "allergies": "No known drug allergies (NKDA)",
  "smoking": "No additional tobacco exposure",
  "alcohol": "No acute alcohol intoxication",
  "family history": "No other relevant hereditary conditions",
  "chest": "Chest clear / no additional pleuritic findings",
  "abdomen": "No other surgical tenderness outside stated findings",
  "neuro": "No other focal neurological deficits",
  "rash": "No other generalized rash"
};

function evaluateBlitzQueryClientSide(queryText, forcedCategories = null) {
  if (!activeCase) return null;
  const textLower = queryText.toLowerCase();
  const newlyUnlocked = [];
  const previouslyUnlocked = [];

  (activeCase.gates || []).forEach(gate => {
    const matchesCategoryMacro = forcedCategories && forcedCategories.includes(gate.category);
    const matchesSafetyMacro = forcedCategories && forcedCategories.includes("safety_mandatory") && gate.mandatory_for_safety;
    const triggers = gate.trigger_concepts || gate.triggers || [];
    const matchesConcept = triggers.some(c => conceptMatchesText(c, textLower)) ||
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

  const matchedTextCombined = [...newlyUnlocked, ...previouslyUnlocked]
    .map(g => `${g.key} ${(g.trigger_concepts || g.triggers || []).join(" ")} ${g.response_text || g.response || ""}`)
    .join(" ")
    .toLowerCase();

  const pertinentNegatives = [];
  Object.entries(GENERAL_NEGATIVE_EXCLUSIONS).forEach(([kw, negText]) => {
    if (textLower.includes(kw) && !matchedTextCombined.includes(kw)) {
      pertinentNegatives.push({ keyword: kw, detail: negText });
    }
  });

  clientSession.turnCount += 1;

  const totalClin = (activeCase.gates || []).filter(g => g.category !== "ice").length;
  const unlockedClin = (activeCase.gates || []).filter(g => g.category !== "ice" && clientSession.unlockedGateKeys.has(g.key)).length;
  let shouldTriggerPerturbation = false;
  if (!clientSession.perturbationTriggered && (clientSession.turnCount >= 3 || unlockedClin >= Math.ceil(totalClin * 0.65))) {
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

function fireSpamMacro(macroType) {
  if (!activeCase) return;

  let macroQuery = "";
  let forcedCategories = [];
  let macroTitle = "";

  if (macroType === "socrates") {
    macroTitle = "⚡ SOCRATES";
    macroQuery = "site onset character radiation associated symptoms timing exacerbating relieving severity";
    forcedCategories = ["socrates"];
  } else if (macroType === "red_flags") {
    macroTitle = "🚨 Red Flags";
    const caseRedFlagTerms = (activeCase.gates || [])
      .filter(g => g.category === "red_flag" || g.mandatory_for_safety)
      .map(g => (g.trigger_concepts || g.triggers || [])[0] || g.key.replace(/_/g, " "))
      .join(" ");
    macroQuery = `${caseRedFlagTerms} fever weight loss night sweats neuro deficits syncope bleeding`.trim();
    forcedCategories = ["red_flag", "safety_mandatory"];
  } else if (macroType === "pmhx_meds") {
    macroTitle = "💊 PMHx & Meds";
    macroQuery = "past medical history diabetes hypertension surgery medications blood thinners allergies compliance";
    forcedCategories = ["past_history", "drug_history"];
  } else if (macroType === "social_epi") {
    macroTitle = "🇸🇬 Social & Epi";
    macroQuery = "occupation army camp tekong travel hawker food smoking alcohol family history";
    forcedCategories = ["social"];
  } else if (macroType === "exam_vitals") {
    macroTitle = "🩺 Exam & Vitals";
    macroQuery = "physical examination abdomen chest neuro pupils joints rash vitals";
    forcedCategories = ["systemic"];
  } else if (macroType === "all_clinical") {
    macroTitle = "Sweep All";
    macroQuery = "site onset character radiation severity red flags past medical history medications allergies social travel physical examination vitals";
    forcedCategories = ["socrates", "red_flag", "safety_mandatory", "past_history", "drug_history", "social", "systemic"];
  }

  executeBlitzTurn(macroQuery, forcedCategories, macroTitle);
}

function unlockSingleGateByClick(gateKey) {
  if (!activeCase) return;
  const gate = (activeCase.gates || []).find(g => g.key === gateKey);
  if (!gate) return;
  const triggerWord = (gate.trigger_concepts || gate.triggers || [])[0] || gate.key.replace(/_/g, " ");
  executeBlitzTurn(triggerWord, null, formatGateTitle(gate.key));
}

function sendCandidateMessage() {
  const input = document.getElementById("candidate-text-input");
  const text = input ? input.value.trim() : "";
  if (!text || !activeCase) return;
  input.value = "";
  executeBlitzTurn(text, null, null);
}

function executeBlitzTurn(queryText, forcedCategories = null, macroBadge = null) {
  const result = evaluateBlitzQueryClientSide(queryText, forcedCategories);
  if (!result) return;

  appendMinimalistFindingCard(result, queryText, macroBadge);
  renderGateChecklist();

  if (isVoiceOutputEnabled) {
    const spokenText = result.newlyUnlocked.length > 0
      ? result.newlyUnlocked.map(g => g.response_text || g.response).join(" ")
      : (result.previouslyUnlocked.length > 0
          ? (result.previouslyUnlocked[0].response_text || result.previouslyUnlocked[0].response)
          : "Nothing else remarkable there, doctor.");
    speakPatientText(spokenText);
  }

  if (result.shouldTriggerPerturbation && activeCase.perturbation) {
    triggerInlineTwistBanner();
  }
}

function formatGateTitle(key) {
  return String(key || "").replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

function appendMinimalistFindingCard(result, queryText, macroBadge) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const card = document.createElement("div");
  card.className = "card-surface rounded-xl p-3.5 space-y-2 text-xs";

  const labelText = macroBadge ? macroBadge : queryText;
  let itemsHtml = "";

  // Positive findings (✓)
  const positiveGates = result.newlyUnlocked.length > 0 ? result.newlyUnlocked : result.previouslyUnlocked;
  positiveGates.forEach(g => {
    const isRedFlag = g.mandatory_for_safety || g.category === "red_flag";
    const rfTag = isRedFlag
      ? `<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 ml-1.5">Red Flag</span>`
      : "";
    const resp = g.response_text || g.response || "";
    itemsHtml += `
      <div class="flex items-start gap-2.5 leading-relaxed">
        <span class="font-mono text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
        <div class="text-zinc-100">
          <span class="font-medium text-zinc-300">${escapeHtml(formatGateTitle(g.key))}:</span>
          ${rfTag}
          <span class="ml-1 text-zinc-100">${escapeHtml(resp)}</span>
        </div>
      </div>
    `;
  });

  // Pertinent negatives (–)
  result.pertinentNegatives.forEach(n => {
    itemsHtml += `
      <div class="flex items-start gap-2.5 leading-relaxed text-zinc-500">
        <span class="font-mono text-zinc-500 font-bold shrink-0">–</span>
        <div><span class="font-medium text-zinc-400">${escapeHtml(n.keyword)}:</span> ${escapeHtml(n.detail)}</div>
      </div>
    `;
  });

  if (!itemsHtml) {
    itemsHtml = `
      <div class="flex items-start gap-2.5 text-zinc-500">
        <span class="font-mono text-zinc-500 font-bold shrink-0">–</span>
        <span>No additional positive findings for "${escapeHtml(queryText)}".</span>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="flex items-center justify-between text-[11px] text-zinc-500 hairline-border-b pb-1.5">
      <span class="font-mono truncate max-w-md">Query: ${escapeHtml(labelText)}</span>
      <span>${result.newlyUnlocked.length > 0 ? `+${result.newlyUnlocked.length} new` : "reviewed"}</span>
    </div>
    <div class="space-y-1.5 pt-0.5">
      ${itemsHtml}
    </div>
  `;

  // Prepend newest card at top so eyes stay focused near input bar
  container.prepend(card);
}

// -------------------------------------------------------------
// INLINE BEDSIDE TWIST (PERTURBATION) BANNER
// -------------------------------------------------------------
function triggerInlineTwistBanner() {
  if (!activeCase || !activeCase.perturbation) return;
  clientSession.perturbationTriggered = true;

  const pert = activeCase.perturbation;
  const banner = document.getElementById("inline-twist-banner");
  if (!banner) return;

  document.getElementById("twist-title").innerText = pert.title || "Bedside Investigation Result";
  const findingsBox = document.getElementById("twist-findings-box");
  if (findingsBox) {
    findingsBox.innerHTML = Object.entries(pert.findings || {}).map(([k, v]) =>
      `<div><span class="text-zinc-400">${escapeHtml(k)}:</span> <span class="text-zinc-100">${escapeHtml(v)}</span></div>`
    ).join("");
  }

  const primaryHyp = (activeCase.differentials && activeCase.differentials[0]?.name) ||
    Object.keys(pert.expected_shifts || {})[0] ||
    activeCase.title;
  const shortHyp = String(primaryHyp).split("(")[0].trim();
  const targetEl = document.getElementById("twist-target-hypothesis");
  if (targetEl) targetEl.innerText = shortHyp;

  document.getElementById("twist-rationale-box")?.classList.add("hidden");
  banner.classList.remove("hidden");
}

function submitQuickTwistVote(voteType) {
  if (!activeCase || !activeCase.perturbation) return;
  clientSession.perturbationVoted = true;

  const pert = activeCase.perturbation;
  const primaryHyp = Object.keys(pert.expected_shifts || {})[0] || activeCase.title;
  const expectedVal = (pert.expected_shifts && pert.expected_shifts[primaryHyp]) ?? 2;

  const isCorrect =
    (voteType === "supports" && expectedVal > 0) ||
    (voteType === "refutes" && expectedVal < 0) ||
    (voteType === "neutral" && expectedVal === 0);

  clientSession.perturbationConcordance = isCorrect ? 100.0 : 60.0;
  clientSession.perturbationReasoning = `${primaryHyp}: ${voteType}`;

  const statusPill = document.getElementById("twist-status-pill");
  if (statusPill) {
    statusPill.innerText = isCorrect ? "✓ Concordant (+2)" : "Reviewed";
    statusPill.className = isCorrect
      ? "text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400"
      : "text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300";
  }

  const rationaleBox = document.getElementById("twist-rationale-box");
  if (rationaleBox) {
    rationaleBox.innerHTML = `<strong class="text-zinc-200">Clinical Rationale:</strong> ${escapeHtml(pert.expert_rationale || "")}`;
    rationaleBox.classList.remove("hidden");
  }
}

// -------------------------------------------------------------
// PROGRESS COUNTERS & PEEK MISSED CLUES DRAWER
// -------------------------------------------------------------
function toggleRevealMissedClues() {
  revealMissedClues = !revealMissedClues;
  updateRevealButtonUI();
}

function updateRevealButtonUI() {
  const drawer = document.getElementById("gates-checklist-drawer");
  const btn = document.getElementById("reveal-clues-btn");
  if (drawer) {
    if (revealMissedClues) drawer.classList.remove("hidden");
    else drawer.classList.add("hidden");
  }
  if (btn) {
    btn.innerText = revealMissedClues ? "Hide Clues" : "Peek Missed Clues";
  }
}

function renderGateChecklist() {
  if (!activeCase) return;
  const clinicalGates = (activeCase.gates || []).filter(g => g.category !== "ice");
  const redFlagGates = clinicalGates.filter(g => g.mandatory_for_safety || g.category === "red_flag");

  const unlockedClinCount = clinicalGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;
  const unlockedRfCount = redFlagGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;

  const rfCounter = document.getElementById("red-flags-counter");
  if (rfCounter) rfCounter.innerText = `${unlockedRfCount}/${redFlagGates.length}`;

  const cgCounter = document.getElementById("gates-unlocked-counter");
  if (cgCounter) cgCounter.innerText = `${unlockedClinCount}/${clinicalGates.length}`;

  const bottomSummary = document.getElementById("bottom-bar-summary");
  if (bottomSummary) {
    bottomSummary.innerText = `Red Flags: ${unlockedRfCount}/${redFlagGates.length} • Clues: ${unlockedClinCount}/${clinicalGates.length}`;
  }

  const container = document.getElementById("gates-checklist-container");
  if (!container) return;
  container.innerHTML = "";

  clinicalGates.forEach(g => {
    const isUnlocked = clientSession.unlockedGateKeys.has(g.key);
    const isRf = g.mandatory_for_safety || g.category === "red_flag";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.onclick = () => unlockSingleGateByClick(g.key);
    btn.className = isUnlocked
      ? "text-left px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between gap-2 transition"
      : "text-left px-2.5 py-1.5 rounded-lg bg-[#090A0F] hairline-border hover:border-zinc-700 text-zinc-400 text-[11px] flex items-center justify-between gap-2 transition";

    btn.innerHTML = `
      <span class="truncate">${isUnlocked ? "✓" : (isRf ? "🚨" : "+")} ${escapeHtml(formatGateTitle(g.key))}</span>
      <span class="font-mono text-[10px] opacity-70">${escapeHtml(g.category)}</span>
    `;
    container.appendChild(btn);
  });
}

// -------------------------------------------------------------
// SPEECH OUTPUT (1.4x TTS) & BROWSER VOICE INPUT
// -------------------------------------------------------------
function toggleVoiceOutputMode() {
  isVoiceOutputEnabled = !isVoiceOutputEnabled;
  const icon = document.getElementById("voice-mode-icon");
  const label = document.getElementById("voice-mode-label");

  if (isVoiceOutputEnabled) {
    if (icon) icon.innerText = "🔊";
    if (label) label.innerText = "1.4x Voice";
  } else {
    if (icon) icon.innerText = "🔇";
    if (label) label.innerText = "Silent";
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
}

function speakPatientText(text) {
  if (!text || !isVoiceOutputEnabled) return;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.4;
    utter.lang = "en-SG";
    window.speechSynthesis.speak(utter);
  }
}

function toggleMicrophoneRecord() {
  if (isRecording) {
    stopVoiceRecognition();
  } else {
    startVoiceRecognition();
  }
}

function startVoiceRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert("Browser voice recognition is not supported in this browser. Type keywords or use the 1-tap sweep pills!");
    return;
  }
  try {
    speechRecognizer = new SR();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "en-SG";
    isRecording = true;
    updateMicUI(true);

    speechRecognizer.onresult = (event) => {
      let interim = "";
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += t + " ";
        else interim += t;
      }
      const input = document.getElementById("candidate-text-input");
      if (input) input.value = (finalTranscript || interim).trim();
      if (finalTranscript.trim()) {
        if (input) input.value = finalTranscript.trim();
        sendCandidateMessage();
      }
    };
    speechRecognizer.onerror = () => stopVoiceRecognition();
    speechRecognizer.onend = () => { if (isRecording) stopVoiceRecognition(); };
    speechRecognizer.start();
  } catch (_) {
    stopVoiceRecognition();
  }
}

function stopVoiceRecognition() {
  isRecording = false;
  updateMicUI(false);
  if (speechRecognizer) {
    try { speechRecognizer.stop(); } catch (_) {}
    speechRecognizer = null;
  }
}

function updateMicUI(active) {
  const btn = document.getElementById("mic-record-btn");
  const icon = document.getElementById("mic-icon");
  if (!btn || !icon) return;
  if (active) {
    btn.className = "w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/50 text-rose-400 mic-listening flex items-center justify-center shrink-0 transition";
    icon.className = "fa-solid fa-stop text-xs";
  } else {
    btn.className = "w-9 h-9 rounded-lg bg-[#090A0F] hairline-border hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 flex items-center justify-center shrink-0 transition";
    icon.className = "fa-solid fa-microphone text-xs";
  }
}

// -------------------------------------------------------------
// VIEW 3: CLEAN DIAGNOSIS & VIVA STEP (TAKES 20 SECONDS)
// -------------------------------------------------------------
function openDiagnosisAndVivaStep() {
  stopVoiceRecognition();
  if (!activeCase) return;

  const dxInput = document.getElementById("dx-input");
  const vivaInput = document.getElementById("viva-answer-input");
  if (dxInput) dxInput.value = "";
  if (vivaInput) vivaInput.value = "";

  // Populate Quick-Tap Diagnosis Suggestion Chips (Case differentials + unspoiled options)
  const chipsEl = document.getElementById("dx-suggestion-chips");
  if (chipsEl) {
    const diffs = (activeCase.differentials || []).map(d => d.name.split("(")[0].trim());
    const pertHyps = Object.keys(activeCase.perturbation?.expected_shifts || {}).map(h => h.split("(")[0].trim());
    const fallbackDistractors = ["Acute Sepsis", "Pulmonary Embolism", "Acute Coronary Syndrome", "Viral Syndrome"];
    const uniqueChips = Array.from(new Set([...diffs, ...pertHyps, ...fallbackDistractors])).slice(0, 5);

    chipsEl.innerHTML = uniqueChips.map(chip => `
      <button
        type="button"
        onclick="appendDiagnosisChip('${escapeHtml(chip)}')"
        class="px-2.5 py-1 rounded-md bg-[#090A0F] hairline-border hover:border-zinc-600 text-[11px] text-zinc-300 transition"
      >
        + ${escapeHtml(chip)}
      </button>
    `).join("");
  }

  // Populate Examiner Prompts Helper
  const promptsEl = document.getElementById("viva-prompts-helper");
  if (promptsEl) {
    promptsEl.classList.add("hidden");
    const questions = activeCase.viva_questions || activeCase.post_encounter_viva || [];
    promptsEl.innerHTML = questions.map((q, idx) => `
      <div>
        <div class="font-medium text-zinc-200">Q${idx + 1}: ${escapeHtml(q.prompt || q.question || "")}</div>
        <div class="text-[11px] text-zinc-500 mt-0.5">Key points: ${escapeHtml((q.key_points_required || q.key_points || []).join(" • "))}</div>
      </div>
    `).join("");
  }

  showView("viva-view");
}

function appendDiagnosisChip(chipText) {
  const dxInput = document.getElementById("dx-input");
  if (!dxInput) return;
  const current = dxInput.value.trim();
  dxInput.value = current ? `${current}; ${chipText}` : chipText;
  dxInput.focus();
}

function toggleVivaPromptsHelper() {
  const el = document.getElementById("viva-prompts-helper");
  if (el) el.classList.toggle("hidden");
}

function autoFillModelPlan() {
  if (!activeCase) return;
  const dxInput = document.getElementById("dx-input");
  const vivaInput = document.getElementById("viva-answer-input");

  const diffs = (activeCase.differentials || []).map(d => d.name).join("; ");
  if (dxInput) {
    dxInput.value = diffs || activeCase.title;
  }

  const questions = activeCase.viva_questions || activeCase.post_encounter_viva || [];
  const allKeyPoints = questions.flatMap(q => q.key_points_required || q.key_points || []);
  if (vivaInput) {
    vivaInput.value = allKeyPoints.join("; ");
  }
}

function gradeStationNow() {
  clearInterval(timerInterval);
  if (!activeCase) return;

  const dxText = document.getElementById("dx-input")?.value.trim() || "";
  const planText = document.getElementById("viva-answer-input")?.value.trim() || "";
  const combinedText = `${dxText} ${planText}`.trim();

  // Evaluate diagnosis concordance if twist wasn't manually voted
  const primaryDiff = (activeCase.differentials && activeCase.differentials[0]?.name) || activeCase.title || "";
  const primaryWords = primaryDiff.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length >= 4);
  const dxMentioned = primaryWords.some(w => combinedText.toLowerCase().includes(w));
  if (dxMentioned && !clientSession.perturbationVoted) {
    clientSession.perturbationConcordance = 95.0;
  } else if (!dxMentioned && !clientSession.perturbationVoted && dxText.length === 0) {
    clientSession.perturbationConcordance = 50.0;
  }

  // Evaluate Viva Questions against combinedText
  const questions = activeCase.viva_questions || activeCase.post_encounter_viva || [];
  clientSession.vivaScores = {};
  clientSession.vivaAnswers = [];

  questions.forEach((q, idx) => {
    const res = evaluateSingleVivaAnswerClientSide(q, combinedText);
    clientSession.vivaScores[idx] = res.awarded;
    clientSession.vivaAnswers.push({
      prompt: q.prompt || q.question,
      answer: combinedText,
      awarded: res.awarded,
      max: q.max_marks || 10
    });
  });

  renderFinalScorecard(dxText, planText);
  showView("scorecard-view");
}

function evaluateSingleVivaAnswerClientSide(q, answerText) {
  const words = (answerText || "").toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2);
  const stopwords = new Set(["and", "the", "with", "for", "due", "from", "into", "than", "this", "that", "only", "per", "via", "all", "any", "are", "not"]);
  const matched = [];
  const kps = q.key_points_required || q.key_points || [];

  kps.forEach(kp => {
    const terms = kp.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 2 && !stopwords.has(t));
    if (terms.length === 0) return;
    const hits = terms.filter(t => {
      const stem = t.length > 5 ? t.slice(0, t.length - 2) : t;
      return words.some(w => w.startsWith(stem) || stem.startsWith(w));
    }).length;
    const needed = terms.length === 1 ? 1 : (terms.length <= 4 ? 1 : Math.max(2, Math.ceil(terms.length * 0.25)));
    if (hits >= needed) matched.push(kp);
  });

  const ratio = matched.length / Math.max(1, kps.length);
  const awarded = Math.round(ratio * (q.max_marks || 10) * 10) / 10;
  return { awarded, matched };
}

// -------------------------------------------------------------
// VIEW 4: MINIMALIST SCORECARD & TEXTBOOK APPROACH SHEET
// -------------------------------------------------------------
function detectCognitiveTrapsClientSide(combinedAnswerText) {
  if (!activeCase || !activeCase.cognitive_traps) return [];
  const fullText = `${clientSession.perturbationReasoning || ""} ${combinedAnswerText || ""}`.toLowerCase();
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
    if (fired) {
      triggered.push({
        name: trap.trap_name || trap.name,
        remediation: trap.remediation_advice || trap.remediation || trap.description
      });
    }
  });

  return triggered;
}

function renderFinalScorecard(dxText, planText) {
  const gates = activeCase.gates || [];
  const redFlagGates = gates.filter(g => g.mandatory_for_safety || g.category === "red_flag");
  const clinicalTriggerGates = gates.filter(g => g.category !== "ice" && !g.mandatory_for_safety && g.category !== "red_flag");

  const rfUnlocked = redFlagGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;
  const rfRatio = redFlagGates.length > 0 ? rfUnlocked / redFlagGates.length : 1.0;
  const rfScore = Math.round(rfRatio * 40 * 10) / 10;

  const ctUnlocked = clinicalTriggerGates.filter(g => clientSession.unlockedGateKeys.has(g.key)).length;
  const ctRatio = clinicalTriggerGates.length > 0 ? ctUnlocked / clinicalTriggerGates.length : 1.0;
  const ctScore = Math.round(ctRatio * 20 * 10) / 10;

  const traps = detectCognitiveTrapsClientSide(`${dxText} ${planText}`);
  const rawPivotScore = (clientSession.perturbationConcordance / 100.0) * 25.0;
  const pivotScore = Math.max(0, Math.round((rawPivotScore - traps.length * 2.5) * 10) / 10);

  const questions = activeCase.viva_questions || activeCase.post_encounter_viva || [];
  const vivaMaxTotal = questions.reduce((acc, q) => acc + (q.max_marks || 10), 0) || 20;
  const vivaAwardedTotal = Object.values(clientSession.vivaScores).reduce((acc, v) => acc + v, 0);
  const vivaRatio = vivaAwardedTotal / Math.max(1, vivaMaxTotal);
  const vivaScore = Math.round(vivaRatio * 15 * 10) / 10;

  const totalScore = Math.round(rfScore + ctScore + pivotScore + vivaScore);
  const safetyPass = redFlagGates.filter(g => g.mandatory_for_safety && !clientSession.unlockedGateKeys.has(g.key)).length === 0;

  let grade = "Clear Pass";
  if (!safetyPass) grade = "Safety Alert";
  else if (totalScore >= 85) grade = "Distinction";
  else if (totalScore >= 65) grade = "Clear Pass";
  else if (totalScore >= 50) grade = "Borderline";
  else grade = "Review Needed";

  // 1. Header
  document.getElementById("card-case-title").innerText = activeCase.title;
  document.getElementById("scorecard-specialty-tag").innerText = `• ${activeCase.specialty || ""}`;
  const primaryDiff = (activeCase.differentials && activeCase.differentials[0]?.name) || activeCase.title;
  document.getElementById("card-primary-dx").innerText = `Primary Diagnosis: ${primaryDiff}`;

  const scorePctEl = document.getElementById("card-score-pct");
  if (scorePctEl) {
    scorePctEl.innerText = `${totalScore}%`;
    scorePctEl.className = safetyPass
      ? "font-mono text-2xl sm:text-3xl font-bold text-emerald-400"
      : "font-mono text-2xl sm:text-3xl font-bold text-amber-400";
  }

  const gradeBadge = document.getElementById("card-grade-badge");
  if (gradeBadge) {
    gradeBadge.innerText = grade;
    gradeBadge.className = safetyPass
      ? "text-xs font-medium px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300"
      : "text-xs font-medium px-2 py-0.5 rounded bg-amber-500/15 text-amber-300";
  }

  const timeComp = document.getElementById("card-time-comparison");
  if (timeComp) {
    timeComp.innerText = `Time: ${formatSecondsMMSS(elapsedSeconds)} / ${formatSecondsMMSS(targetSeconds)} target`;
  }

  // 2. 4 Clean Metric Pills
  const metricsGrid = document.getElementById("card-metrics-grid");
  if (metricsGrid) {
    const metrics = [
      { label: "Red Flags (40%)", val: `${rfScore}/40`, sub: `${rfUnlocked}/${redFlagGates.length} cleared` },
      { label: "History (20%)", val: `${ctScore}/20`, sub: `${ctUnlocked}/${clinicalTriggerGates.length} clues` },
      { label: "Dx & Twist (25%)", val: `${pivotScore}/25`, sub: `${Math.round((pivotScore / 25) * 100)}% align` },
      { label: "Management (15%)", val: `${vivaScore}/15`, sub: `${Math.round(vivaRatio * 100)}% key pts` }
    ];
    metricsGrid.innerHTML = metrics.map(m => `
      <div class="bg-[#090A0F] hairline-border rounded-lg p-3 space-y-0.5">
        <div class="text-[11px] text-zinc-400">${escapeHtml(m.label)}</div>
        <div class="font-mono text-sm font-semibold text-zinc-100">${escapeHtml(m.val)}</div>
        <div class="text-[10px] font-mono text-zinc-500">${escapeHtml(m.sub)}</div>
      </div>
    `).join("");
  }

  // 3. Red Flags List
  const rfListEl = document.getElementById("card-redflags-list");
  if (rfListEl) {
    rfListEl.innerHTML = redFlagGates.map(g => {
      const cleared = clientSession.unlockedGateKeys.has(g.key);
      const resp = g.response_text || g.response || "";
      return `
        <div class="bg-[#090A0F] hairline-border rounded-lg p-2.5 flex items-start gap-2">
          <span class="font-mono font-bold ${cleared ? 'text-emerald-400' : 'text-amber-400'} mt-0.5">${cleared ? '✓' : '!'}</span>
          <div class="space-y-0.5">
            <div class="font-medium ${cleared ? 'text-zinc-200' : 'text-amber-300'}">${escapeHtml(formatGateTitle(g.key))}</div>
            <div class="text-[11px] text-zinc-400 leading-snug">${escapeHtml(resp)}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 4. Cognitive Traps
  const trapsSec = document.getElementById("card-traps-section");
  const trapsContainer = document.getElementById("card-traps-container");
  if (trapsSec && trapsContainer) {
    if (traps.length > 0) {
      trapsSec.classList.remove("hidden");
      trapsContainer.innerHTML = traps.map(t => `
        <div class="bg-[#090A0F] hairline-border rounded-lg p-3 space-y-1">
          <div class="font-medium text-amber-300">⚠️ ${escapeHtml(t.name)}</div>
          <div class="text-zinc-400">${escapeHtml(t.remediation)}</div>
        </div>
      `).join("");
    } else {
      trapsSec.classList.add("hidden");
    }
  }

  // 5. Clinical Approach Summary Card (from OSCE Study Reference + Case Reference)
  const cluster = inferSymptomCluster(activeCase);
  const libEntry = SYMPTOM_APPROACH_LIBRARY[cluster] || SYMPTOM_APPROACH_LIBRARY.fever;
  const caseRef = activeCase.approach_reference || {};

  const sourceBadge = document.getElementById("approach-source-badge");
  if (sourceBadge) {
    sourceBadge.innerText = caseRef.source || libEntry.source || "Finals Approach";
  }

  const diffsHtml = (activeCase.differentials || []).map(d => {
    const feats = (d.supporting_features || []).join("; ");
    return `<li><strong class="text-zinc-200">${escapeHtml(d.name)}</strong>${feats ? ` — <span class="text-zinc-400">${escapeHtml(feats)}</span>` : ""}</li>`;
  }).join("");

  const vivaHtml = questions.map((q, i) => {
    const pts = (q.key_points_required || q.key_points || []).map(p => `<li class="ml-4 list-disc text-zinc-300">${escapeHtml(p)}</li>`).join("");
    return `
      <div class="space-y-1">
        <div class="font-medium text-zinc-200">Q${i + 1}: ${escapeHtml(q.prompt || q.question || "")}</div>
        <ul class="space-y-0.5">${pts}</ul>
      </div>
    `;
  }).join("");

  const sheetEl = document.getElementById("card-approach-sheet");
  if (sheetEl) {
    sheetEl.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-[#090A0F] hairline-border rounded-lg p-3.5 space-y-1">
          <div class="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Textbook Approach Framework</div>
          <p class="text-zinc-300">${escapeHtml(caseRef.framework || libEntry.framework || "")}</p>
        </div>
        <div class="bg-[#090A0F] hairline-border rounded-lg p-3.5 space-y-1">
          <div class="text-[10px] font-mono uppercase tracking-wider text-amber-400">Key Diagnostic Rationale</div>
          <p class="text-zinc-300">${escapeHtml(activeCase.perturbation?.expert_rationale || caseRef.key_features || libEntry.etiology || "")}</p>
        </div>
      </div>

      <div class="bg-[#090A0F] hairline-border rounded-lg p-3.5 space-y-1.5">
        <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Top Differentials &amp; Discriminating Features</div>
        <ul class="space-y-1 list-disc list-inside text-zinc-300">${diffsHtml}</ul>
      </div>

      <div class="bg-[#090A0F] hairline-border rounded-lg p-3.5 space-y-2.5">
        <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Gold-Standard Investigations &amp; Management Key</div>
        ${vivaHtml}
      </div>
    `;
  }

  latestMarkdownReport = [
    `# OSCEBlitz Study Card — ${activeCase.title}`,
    `**Score:** ${totalScore}% (${grade}) | **Time:** ${formatSecondsMMSS(elapsedSeconds)} / ${formatSecondsMMSS(targetSeconds)}`,
    `**Primary Diagnosis:** ${primaryDiff}`,
    ``,
    `## Key Diagnostic Rationale`,
    activeCase.perturbation?.expert_rationale || "",
    ``,
    `## Gold-Standard Management Key`,
    ...questions.flatMap(q => (q.key_points_required || q.key_points || []).map(p => `- ${p}`))
  ].join("\n");
}

function copyMarkdownReport() {
  if (!latestMarkdownReport) return;
  navigator.clipboard.writeText(latestMarkdownReport).then(() => {
    alert("Study summary copied to clipboard!");
  }).catch(() => {});
}
