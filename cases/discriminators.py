"""
Real differential discriminators and lay red-flag dialogue, layered over the generated case banks.

The bulk-built cases (16-100) came out of a template that filled must-not-miss / secondary
differentials with placeholder text and put examiner-style findings in the patient's mouth.
This module holds the hand-written replacements and is applied once when CASE_REGISTRY is built.

Shape:
    DISCRIMINATORS[case_id] = {
        "mnm": (supporting, refuting),   # must-not-miss differential
        "sec": (supporting, refuting),   # secondary differential
        "rf":  {gate_key: {"say": lay line the patient/relative speaks,
                           "trig": specific trigger words}},
    }
For "rf" gates, the old response_text (examiner shorthand) moves to examiner_note so the
finding card can still show it under "Exam:".
"""
from typing import Dict

from voice_osce.cases.case_schema import DifferentialTier, GateCategory

DISCRIMINATORS: Dict[str, dict] = {
    # ------------------------------------------------------------------ 16-55: differentials
    "case_16": {
        "sec": (["Klebsiella liver abscess with metastatic spread in diabetics", "Gram-negative bacteraemia"],
                ["Bipolar 'safety-pin' Gram-negative rods are not Klebsiella", "Soil inoculation history and splenic/prostatic microabscesses favour melioidosis"]),
    },
    "case_17": {
        "sec": (["Prolonged fever, headache and relative bradycardia", "Transaminitis"],
                ["Necrotic eschar is not a feature of typhoid", "Scrub exposure rather than contaminated food/water"]),
    },
    "case_18": {
        "mnm": (["Haemoptysis with falling haemoglobin", "Severe leptospirosis with thrombocytopenia"],
                ["Needs urgent CXR/SpO2 to exclude; currently small-volume haemoptysis only"]),
        "sec": (["Fever, jaundice and RUQ discomfort (Charcot's triad mimic)"],
                ["No dilated bile ducts expected; conjugated bilirubin with only modest transaminases plus AKI, high CK and conjunctival suffusion point to Weil's disease"]),
    },
    "case_19": {
        "sec": (["Painful red eye with photophobia"],
                ["Uveitis gives a small irregular pupil and normal/low IOP, not a fixed mid-dilated pupil with IOP 58", "No halos or corneal oedema in uveitis"]),
    },
    "case_20": {
        "mnm": (["K+ 1.7 mmol/L with U waves and QU prolongation", "Risk of VT/VF and respiratory muscle weakness"],
                ["Currently sinus rhythm; needs continuous cardiac monitoring during cautious K+ replacement"]),
        "sec": (["Acute symmetrical flaccid weakness"],
                ["Abrupt onset after carbohydrate load, not ascending over days", "Profound hypokalaemia with thyrotoxic features; no preceding infection"]),
    },
    "case_21": {
        "mnm": (["Haematuria with RBC casts and rising creatinine", "Pulmonary-renal syndrome must be excluded"],
                ["Creatinine only 118 with eGFR 72", "ANCA and anti-GBM negative"]),
        "sec": (["Haematuria after a throat infection", "RBC casts"],
                ["PSGN follows URTI by 1-3 weeks, not within 1-2 days", "Normal C3 (low in PSGN) and negative ASOT"]),
    },
    "case_22": {
        "mnm": (["Massive intravascular haemolysis with haemoglobinuria", "Pigment nephropathy causing AKI"],
                ["Needs urgent renal panel and urine output monitoring; aggressive IV fluids are protective"]),
        "sec": (["Acute anaemia with raised LDH, bilirubin and reticulocytes"],
                ["Direct Coombs test is NEGATIVE", "Bite and blister cells with Heinz bodies, not spherocytes", "Clear oxidant trigger (co-trimoxazole, fava beans)"]),
    },
    "case_23": {
        "mnm": (["Heavy smoker with weight loss and haemoptysis", "Cavitating mass can be squamous cell carcinoma"],
                ["AFB smear 3+ and Xpert MTB detected", "Night sweats and TB contact history"]),
        "sec": (["Diabetic with cavitary upper lobe disease"],
                ["Xpert identifies M. tuberculosis complex, not NTM or Burkholderia", "No soil/monsoon exposure"]),
    },
    "case_24": {
        "mnm": (["Fever >7 days with headache and transaminitis", "Can mimic rickettsial illness"],
                ["Blood cultures negative", "Rat-flea warehouse exposure and positive R. typhi IFA"]),
        "sec": (["Rat exposure with fever, thrombocytopenia and transaminitis"],
                ["No conjunctival suffusion, calf tenderness or AKI", "Leptospira serology not positive; R. typhi IFA >=1:400"]),
    },
    "case_25": {
        "mnm": (["Fever, RUQ pain and shock in a biliary patient"],
                ["Ultrasound shows a dilated CBD with a stone, not an intrahepatic collection"]),
        "sec": (["RUQ pain and fever", "Murphy's sign"],
                ["Cholecystitis does not cause obstructive jaundice with ALP 540 and a 14 mm CBD", "Confusion and shock indicate cholangitis (Reynolds' pentad)"]),
    },
    "case_26": {
        "mnm": (["Sudden abdominal pain with haemorrhagic shock", "Older patient"],
                ["FAST shows haemoperitoneum around the liver; CT shows a bleeding hepatic mass, aorta not aneurysmal"]),
        "sec": (["Sudden upper abdominal pain with shoulder-tip radiation"],
                ["Tap aspirates frank blood, not enteric content", "No free air; known HBV with AFP 4,850"]),
    },
    "case_27": {
        "mnm": (["Collapse in an 82yo with cardiovascular risk factors", "Risk of sudden cardiac death or structural valve disease"],
                ["Normal 12-lead ECG without conduction blocks or arrhythmia", "No exertional syncope or cardiac murmurs; clear postural trigger upon standing"]),
        "sec": (["Unsteadiness and recurrent falls in an older adult"],
                ["No urinary incontinence or progressive memory impairment (triad of NPH absent)", "No head trauma, focal neurological deficit or anticoagulation (subdural excluded)"]),
        "rf": {
            "rf_orthostatic_polypharmacy": {
                "say": "I take Amlodipine, Hydrochlorothiazide, Amitriptyline for nerve pain, and Zolpidem for sleep. My daughter noticed I stagger right after taking my morning pills.",
                "trig": ["medications", "pills", "amlodipine", "hydrochlorothiazide", "amitriptyline", "zolpidem", "sedative", "sleeping tablet", "water pill"],
            },
            "rf_syncope_head_injury_anticoag": {
                "say": "I did not hit my head, no loss of consciousness or palpitations, no headache or vomiting, and I do not take blood thinners like warfarin.",
                "trig": ["hit head", "loss of consciousness", "blackout", "headache", "vomit", "warfarin", "blood thinner", "anticoagulant", "chest pain", "palpitations"],
            },
        },
    },
    "case_28": {
        "mnm": (["Chest pain after viral illness with pericardial inflammation", "Myocarditis or tamponade would change management"],
                ["Troponin normal; trivial effusion with no tamponade physiology on echo"]),
        "sec": (["Chest pain with ST elevation"],
                ["Concave, widespread ST elevation with PR depression and no reciprocal change", "Pain is positional and pleuritic; troponin normal"]),
    },
    "case_29": {
        "mnm": (["Dissection flap can extend into coronary, pericardial or carotid territory", "Pulse deficit and new AR already present"],
                ["ECG shows no ST elevation; needs echo for tamponade and serial neuro checks"]),
        "sec": (["Severe chest pain with hypertension"],
                ["Instantaneous tearing pain radiating to the back", "Inter-arm BP difference 42 mmHg, widened mediastinum, intimal flap on CT"]),
    },
    "case_30": {
        "mnm": (["Endocarditis on the aortic valve", "PR interval prolongation (228 ms)"],
                ["TTE shows no root abscess yet; urgent TOE needed to confirm"]),
        "sec": (["Fever, arthralgia and a murmur"],
                ["3/3 blood cultures grow Strep sanguinis", "Oscillating vegetation; no recent strep throat or Jones criteria; no SLE serology features"]),
    },
    "case_31": {
        "mnm": (["Elderly diabetic with acute heart failure", "Ischaemia can present without chest pain"],
                ["Troponin at chronic baseline with no dynamic ST changes; clear precipitant (stopping frusemide, salt load)"]),
        "sec": (["Breathlessness with bilateral crackles"],
                ["No fever or purulent sputum", "Orthopnoea, PND, raised JVP, S3, oedema and NT-proBNP 8,450"]),
    },
    "case_32": {
        "mnm": (["AF with CHA2DS2-VASc 6 and prior TIA", "Any new neurological deficit means embolic stroke"],
                ["Currently no focal deficit; anticoagulation needed to prevent it"]),
        "sec": (["New fast AF"],
                ["TSH 1.8 mIU/L (normal)", "No tremor, heat intolerance or weight loss"]),
    },
    "case_33": {
        "mnm": (["Acute confusion, fever and fluctuating consciousness in an 84yo", "Intracranial infection or space-occupying haemorrhage must be excluded"],
                ["Symmetrical neurological examination, no neck stiffness, photophobia or focal signs", "CT head clear; clear peripheral septic and obstructive precipitants identified"]),
        "sec": (["Pre-existing mild cognitive impairment presenting with hallucinations"],
                ["Abrupt onset over 48 hours rather than insidious decline over months", "Marked inattention and perceptual disturbance which fluctuates markedly (CAM positive)"]),
        "rf": {
            "rf_cam_fluctuating_confusion": {
                "say": "(Daughter): His confusion came on overnight and changes throughout the day. At lunch he recognized me, but by evening he didn't know where he was and couldn't keep his attention for ten seconds.",
                "trig": ["fluctuate", "sundown", "attention", "acute", "cam", "4at", "hallucinating", "drowsy"],
            },
            "rf_precipitant_urosepsis_constipation": {
                "say": "(Nurse): His urine is cloudy and foul-smelling. He has not passed motion for 5 days, and on palpation his lower abdomen is dull and distended with a palpable bladder.",
                "trig": ["urine", "smell", "cloudy", "foul", "catheter", "constipation", "bowel", "stool", "tummy", "abdomen", "dysuria", "belly"],
            },
        },
    },
    "case_34": {
        "mnm": (["Wide-complex ventricular escape at 32 bpm can fail to asystole", "Bradycardia predisposes to torsades"],
                ["Currently perfusing; needs pacing pads on and transcutaneous pacing ready"]),
        "sec": (["Transient loss of consciousness with injury"],
                ["No tonic-clonic movements, tongue biting, incontinence or post-ictal confusion", "Rapid recovery with complete AV dissociation on ECG"]),
    },
    "case_35": {
        "mnm": (["Exertional syncope with a family history of sudden death at 28", "LVOT gradient 68 mmHg"],
                ["Not in arrest now; needs ICD risk stratification and avoidance of vasodilators and inotropes"]),
        "sec": (["Ejection systolic murmur with exertional syncope"],
                ["Murmur louder on Valsalva and softer on squatting (fixed AS murmur behaves the opposite way)", "Echo shows asymmetric septal hypertrophy with SAM, not a calcified valve"]),
    },
    "case_36": {
        "sec": (["Chest trauma with shock and reduced breath sounds"],
                ["Hyper-resonant percussion (haemothorax is stony dull)", "Distended neck veins and tracheal deviation away from the injured side"]),
    },
    "case_37": {
        "sec": (["Acute severe breathlessness with wheeze"],
                ["No urticaria, angioedema or allergen exposure", "Known asthma pattern with silent chest and rising CO2"]),
    },
    "case_38": {
        "sec": (["COPD with sudden deterioration"],
                ["Bilateral air entry, no hyper-resonance; CXR shows no pneumothorax", "Picture fits CO2 narcosis from high-flow oxygen"]),
    },
    "case_39": {
        "sec": (["Fever, cough and consolidation in an older patient"],
                ["Acute illness with rusty sputum and lobar consolidation, no weeks of weight loss or night sweats", "Responds to standard CAP management"]),
    },
    "case_40": {
        "sec": (["Lymphocytic exudate is common in TB pleuritis"],
                ["Turbid fluid with pH 7.08 and glucose 1.4 after pneumonia", "Septations on US; swinging fevers despite antibiotics"]),
    },
    "case_41": {
        "mnm": (["Overwhelming emotional distress and despair upon receiving life-altering cancer diagnosis", "Risk of acute self-harm or catastrophic adjustment reaction"],
                ["Validating emotions and direct screening confirms no active suicidal intent or plan", "Strong family support present with protective goals (daughter's upcoming wedding)"]),
        "sec": (["Sigmoid mass on colonoscopy without confirmed distant spread"],
                ["Staging CT TAP confirms multiple bilateral hypodense hepatic lesions with rim enhancement", "CEA markedly elevated; lesions are non-cystic and characteristic of metastatic adenocarcinoma"]),
        "rf": {
            "rf_spikes_invitation_warning": {
                "say": "I want to know the truth, doctor. Don't sugarcoat it. But please tell me honestly—is it cancer?",
                "trig": ["truth", "detail", "cancer", "malignant", "honest", "full story", "straight"],
            },
            "rf_suicide_despair_screen": {
                "say": "(Sobs into tissue): My daughter is getting married in December... I don't know if I can bear living through chemotherapy or dying before the wedding.",
                "trig": ["end it all", "suicide", "hopeless", "bear", "harm", "give up", "worth living"],
            },
        },
    },
    "case_42": {
        "mnm": (["Mediastinal mass with stridor", "Airway may close on lying flat or with sedation"],
                ["Needs urgent airway assessment; avoid general anaesthesia without airway plan"]),
        "sec": (["Raised JVP with breathlessness"],
                ["JVP is non-pulsatile and fixed (tamponade gives a pulsatile, raised JVP with Kussmaul's sign)", "Facial swelling worse on bending forward; collaterals over the chest wall"]),
    },
    "case_43": {
        "mnm": (["Angioedema of lips and tongue"],
                ["Urticaria present (absent in HAE)", "Clear allergen trigger and rapid response to IM adrenaline"]),
        "sec": (["Wheeze and breathlessness"],
                ["Urticaria, angioedema and hypotension after shellfish", "No prior asthma"]),
    },
    "case_44": {
        "mnm": (["Speech absence and lack of vocal response to parental calls in a toddler", "Must exclude undiagnosed sensory deficit before neurodevelopmental diagnosis"],
                ["Formal audiometry / automated ABR demonstrates normal bilateral sensorineural hearing thresholds", "Normal tympanometry excludes persistent middle ear effusion / glue ear"]),
        "sec": (["Delayed expressive speech in an 18-month-old boy with normal motor milestones"],
                ["Persistent lack of joint attention and protodeclarative pointing (normal in isolated speech delay)", "Restricted repetitive patterns: lining up toys, severe distress at minor environmental change, tiptoe walking"]),
        "rf": {
            "rf_hearing_loss_screen": {
                "say": "(Mother): He had three ear infections in his first year. When loud pots drop in the kitchen he does not flinch, but he notices if the cartoon on TV turns on. He hasn't had a hearing test since birth.",
                "trig": ["hearing", "ears", "sound", "flinch", "audiometry", "hearing test", "otitis", "ear infection"],
            },
            "rf_autism_red_flags": {
                "say": "(Mother): He never points to show me things (no protodeclarative pointing), doesn't make eye contact, walks on his tiptoes, and spends hours lining up his toy cars in straight rows. If I move one car, he screams inconsolably.",
                "trig": ["point", "pointing", "eye contact", "repetitive", "line up", "routine", "cars", "spin", "joint attention"],
            },
        },
    },
    "case_45": {
        "mnm": (["Severe epigastric pain radiating to the back with raised amylase"],
                ["Free air on erect CXR indicates perforation", "Board-like rigidity with absent bowel sounds"]),
        "sec": (["Sudden severe abdominal pain with shock risk in an older patient"],
                ["Free subdiaphragmatic air", "Heavy NSAID use; no pulsatile mass"]),
    },
    "case_46": {
        "mnm": (["Woman of reproductive age with lower abdominal pain"],
                ["Urine b-hCG negative", "No sudden onset with vomiting; ovaries normal on imaging"]),
        "sec": (["RIF pain with fever after viral illness / urinary symptoms"],
                ["Migratory pain to McBurney's point with Rovsing's sign", "Non-compressible 9 mm appendix with appendicolith"]),
    },
    "case_47": {
        "mnm": (["Gallstones with RUQ pain and fever"],
                ["Bilirubin normal, CBD 4 mm", "No jaundice, confusion or shock"]),
        "sec": (["Gallstones with epigastric/RUQ pain"],
                ["Amylase normal", "Pain localised to the RUQ with Murphy's sign"]),
    },
    "case_48": {
        "mnm": (["Epigastric pain in an older patient may be inferior MI or a leaking AAA"],
                ["ECG and troponin needed; lipase 4,200 and gallstones explain the picture"]),
        "sec": (["Severe epigastric pain with shock"],
                ["No free air on erect CXR", "Lipase >3x ULN with raised ALT"]),
    },
    "case_49": {
        "mnm": (["Elderly thin woman with SBO may have an obturator hernia (Howship-Romberg sign)"],
                ["Visible irreducible femoral lump below and lateral to the pubic tubercle explains the obstruction"]),
        "sec": (["Vomiting with abdominal pain"],
                ["Absolute constipation, not diarrhoea", "Dilated small bowel loops on AXR and raised lactate"]),
    },
    "case_50": {
        "mnm": (["Perimenopausal abnormal uterine bleeding with enlarged uterus", "Endometrial malignancy or rapidly growing leiomyosarcoma must be excluded"],
                ["No intermenstrual (IMB) or postcoital bleeding (PCB); Pap smears normal", "Endometrial thickness 7 mm with regular margins; TVUS shows well-circumscribed leiomyomata without atypical vascularity"]),
        "sec": (["Heavy menstrual bleeding with globally enlarged uterus in a multiparous woman"],
                ["Uterus is firm, mobile, and irregularly lobulated (adenomyosis typically causes a uniformly globular, tender uterus)", "TVUS demonstrates discrete well-defined submucosal/intramural myomas rather than diffuse junctional zone thickening"]),
        "rf": {
            "rf_malignancy_screen": {
                "say": "No bleeding between periods (no IMB), no bleeding after intercourse (no PCB), no foul vaginal discharge, and my cervical Pap smears have been normal every 3 years.",
                "trig": ["intermenstrual", "between", "postcoital", "sex", "intercourse", "pap", "smear", "cervical", "loss of weight"],
            },
            "rf_severe_anemia_instability": {
                "say": "My heart pounds in my ears, I feel lightheaded when standing quickly, and the polyclinic blood test showed my haemoglobin dropped to 6.4 g/dL.",
                "trig": ["dizzy", "faint", "syncope", "chest pain", "breathless", "palpitations", "hemoglobin", "hb"],
            },
        },
    },
    "case_51": {
        "mnm": (["Transverse colon 5.2 cm in severe colitis", "Recent antibiotics would raise C. difficile risk"],
                ["Not yet >6 cm; stool C. difficile toxin and serial AXR needed"]),
        "sec": (["Bloody diarrhoea with fever"],
                ["Known UC with relapse pattern", "Stool cultures pending; no travel or sick contacts"]),
    },
    "case_52": {
        "mnm": (["Cirrhosis with ascites and rising creatinine", "SBP is the commonest trigger of HRS-AKI"],
                ["Must give IV albumin; HRS diagnosis only after volume challenge fails"]),
        "sec": (["Peritonitis in a cirrhotic"],
                ["Single organism expected; no free air", "Ascitic glucose and LDH not suggestive of perforation (Runyon criteria)"]),
    },
    "case_53": {
        "mnm": (["Severe chest pain radiating to the back"],
                ["Pain started after forceful vomiting", "Pneumomediastinum and contrast leak from the oesophagus"]),
        "sec": (["Chest pain after retching"],
                ["Mallory-Weiss gives haematemesis, not subcutaneous emphysema or pneumomediastinum", "Patient is systemically unwell"]),
    },
    "case_54": {
        "mnm": (["Groin pain with vomiting may come from a strangulated inguinal hernia"],
                ["Inguinal canal empty; the tender mass is the testis itself"]),
        "sec": (["Scrotal pain and swelling"],
                ["Sudden onset with vomiting, not gradual over days", "Absent cremasteric reflex; no urinary symptoms or STI risk; Prehn's sign negative"]),
    },
    "case_55": {
        "mnm": (["Revascularisation of an ischaemic limb", "Calf tenderness and pain on passive stretch after reperfusion"],
                ["Not yet revascularised; monitor compartments closely after embolectomy"]),
        "sec": (["Acute limb ischaemia in an older patient"],
                ["Sudden onset over 3 hours with AF off anticoagulation", "Normal contralateral pulses; no claudication history"]),
    },

    # ------------------------------------------------------------------ 56-100: full overlay
    "case_56": {
        "mnm": (["Sudden focal deficit", "AF patient: intracerebral bleed must be excluded before thrombolysis"],
                ["Non-contrast CT shows no haemorrhage", "Not anticoagulated"]),
        "sec": (["Hypoglycaemia can cause focal weakness"],
                ["Bedside glucose is normal", "CTA shows an M1 occlusion"]),
        "rf": {
            "rf_last_known_well": {"say": "(Wife) He was fine at breakfast. At eight o'clock his cup dropped and his face went to one side. That was about an hour and a half ago.",
                                   "trig": ["last known well", "last seen well", "exact time", "what time", "clock", "how long ago", "wake up with"]},
            "rf_bleed_anticoag": {"say": "(Wife) He has an irregular heartbeat but he never started the blood thinner. No falls, no operations.",
                                  "trig": ["warfarin", "apixaban", "rivaroxaban", "blood thinner", "anticoagulant", "recent surgery", "head injury", "bleeding"]},
        },
    },
    "case_57": {
        "mnm": (["Curtain over one eye"],
                ["Vision fully recovered within minutes", "Arm weakness at the same time localises to the carotid territory"]),
        "sec": (["Transient visual disturbance"],
                ["Monocular black curtain, not positive zigzags spreading over 20 minutes", "No headache; first episode at 64 with motor deficit"]),
        "rf": {
            "rf_crescendo_carotid": {"say": "Twice since yesterday a black curtain came down over my left eye, and my right hand went clumsy at the same time.",
                                     "trig": ["curtain", "shade", "one eye", "twice", "how many times", "repeated", "hand weakness"]},
            "rf_abcd2": {"say": "It lasted about twenty-five minutes. I've got diabetes and my blood pressure is always high.",
                         "trig": ["how long did it last", "duration", "diabetes", "blood pressure", "hypertension"]},
        },
    },
    "case_58": {
        "mnm": (["Prolonged seizure-like activity"],
                ["Eyes open during PNES; here eyes rolled back, cyanosis and SpO2 89%", "Known epilepsy with missed medication"]),
        "sec": (["Seizure with fever or confusion"],
                ["Afebrile with no neck stiffness or rash", "Clear precipitant: ran out of levetiracetam"]),
        "rf": {
            "rf_duration_hypoxia": {"say": "(Flatmate) He's been shaking non-stop for about twelve minutes and his lips are going blue. He hasn't woken up at all.",
                                    "trig": ["minutes", "how long has he", "still shaking", "stopped", "blue", "lips", "woken up"]},
            "rf_aed_noncompliance": {"say": "(Flatmate) He has epilepsy. He ran out of his Keppra four days ago because he's been working late.",
                                     "trig": ["epilepsy", "keppra", "levetiracetam", "seizure medication", "ran out", "missed"]},
        },
    },
    "case_59": {
        "mnm": (["Bilateral leg weakness", "Cord lesion must be excluded"],
                ["No sensory level or early bladder involvement", "Areflexia; CSF albuminocytologic dissociation"]),
        "sec": (["Bulbar and respiratory weakness"],
                ["Ascending weakness with areflexia (MG keeps reflexes; botulism is descending with dilated pupils)", "Preceding diarrhoeal illness"]),
        "rf": {
            "rf_fvc_bulbar": {"say": "I keep choking when I drink water, and I can't take a deep breath or cough properly.",
                              "trig": ["swallow", "choke", "choking", "breathe", "breathless", "cough", "fvc", "vital capacity"]},
            "rf_campylobacter": {"say": "About two weeks ago I had bad diarrhoea for three days, some blood in it, after eating chicken at a barbecue.",
                                 "trig": ["diarrhoea", "diarrhea", "stomach bug", "chicken", "recent infection", "vaccine", "flu jab"]},
        },
    },
    "case_60": {
        "mnm": (["Acute weakness with bulbar and respiratory involvement"],
                ["Reflexes and sensation intact", "Fatigable ptosis with positive ice pack test"]),
        "sec": (["Bulbar weakness and double vision"],
                ["No sudden onset, vertigo, ataxia or long-tract signs", "Weakness fluctuates and worsens with use"]),
        "rf": {
            "rf_cipro_crisis": {"say": "The GP gave me ciprofloxacin for a urine infection two days ago. Since then I'm struggling to swallow and breathe.",
                                "trig": ["antibiotic", "ciprofloxacin", "gentamicin", "new medication", "swallow", "breathe"]},
            "rf_fatigability": {"say": "My eyelids droop more and more as the day goes on. If I look up for a while they close completely.",
                                "trig": ["worse as the day", "end of the day", "look up", "upward gaze", "droop", "eyelids", "tired muscles", "fatigue"]},
        },
    },
    "case_61": {
        "mnm": (["Unilateral facial pain"],
                ["Pain is a constant temporal ache with scalp tenderness, not electric-shock paroxysms", "ESR 98 and jaw claudication"]),
        "sec": (["Jaw pain on chewing"],
                ["Pain builds with continued chewing (claudication) rather than clicking or locking", "Visual symptoms and raised ESR/CRP"]),
        "rf": {
            "rf_visual_jaw": {"say": "My jaw aches if I chew for a while, and twice my right eye went dark for a few minutes. Combing my hair hurts my scalp.",
                              "trig": ["vision", "eyesight", "go dark", "jaw", "chew", "comb", "scalp"]},
            "rf_pmr": {"say": "For two months my shoulders and hips have been stiff every morning, and I've lost three kilos.",
                       "trig": ["shoulder", "hips", "morning stiffness", "weight loss"]},
        },
    },
    "case_62": {
        "mnm": (["Fever, headache and neck stiffness"],
                ["Viral meningitis rarely causes drowsiness (GCS 13)", "CSF: neutrophils, high protein, low glucose, Gram-positive diplococci"]),
        "sec": (["Severe headache with neck stiffness"],
                ["Gradual onset over a day with fever, not a thunderclap", "Ear infection as a source"]),
        "rf": {
            "rf_meningism_icp": {"say": "(Partner) He can't bend his neck, the light hurts his eyes, and he's getting really sleepy and muddled. No rash that I can see.",
                                 "trig": ["neck stiff", "stiff neck", "light", "photophobia", "drowsy", "sleepy", "confused", "seizure", "fit", "rash"]},
            "rf_otitis_sinusitis": {"say": "(Partner) He's had a painful right ear with gunk coming out for almost a week. He never saw anyone.",
                                    "trig": ["ear", "discharge", "sinus", "immune", "spleen"]},
        },
    },
    "case_63": {
        "mnm": (["Acute facial weakness"],
                ["Forehead involved (LMN pattern)", "No limb weakness, speech or cerebellar signs"]),
        "sec": (["LMN facial palsy"],
                ["No ear pain, vesicles in the ear canal or palate, hearing loss or vertigo"]),
        "rf": {
            "rf_forehead_lmn": {"say": "I can't raise my right eyebrow or close my right eye properly. My arms and legs feel completely normal.",
                                "trig": ["forehead", "eyebrow", "close your eye", "wrinkle", "arm weakness", "leg weakness", "limbs"]},
            "rf_ramsay_hunt_vesicles": {"say": "No ear pain, no blisters anywhere, and my hearing is the same as always.",
                                        "trig": ["ear pain", "blister", "rash", "vesicle", "hearing", "dizziness"]},
        },
    },
    "case_64": {
        "mnm": (["Raised ICP headache in a young woman", "Hormonal contraception is a risk factor"],
                ["MR venogram shows patent sinuses"]),
        "sec": (["Progressive headache with papilloedema"],
                ["MRI shows no mass", "No focal deficit or seizures; normal CSF constituents"]),
        "rf": {
            "rf_papilloedema_icp": {"say": "The headache is worst when I lie down or cough. My vision greys out for a few seconds when I stand, and I hear a whooshing in my ears.",
                                    "trig": ["lying down", "cough", "bend", "strain", "vision", "blurry", "grey out", "whoosh", "double vision"]},
            "rf_cvt_drugs": {"say": "I've put on about ten kilos this year. I've been taking doxycycline for acne and I'm on the pill.",
                             "trig": ["the pill", "contraceptive", "weight gain", "doxycycline", "tetracycline", "isotretinoin", "vitamin a"]},
        },
    },
    "case_65": {
        "mnm": (["Shuffling gait in an older man"],
                ["Arm swing preserved, no rest tremor or cogwheel rigidity", "Urinary incontinence early and gait improves after CSF tap"]),
        "sec": (["Cognitive decline in an older adult"],
                ["Gait problem came first, then incontinence, then cognitive slowing", "Memory loss is subcortical slowing rather than early amnesia"]),
        "rf": {
            "rf_hakims_triad": {"say": "(Daughter) Her walking went first, like her feet are stuck to the floor. Then she started wetting herself, and now she's slow and forgetful.",
                                "trig": ["walking", "gait", "feet stuck", "incontinence", "wetting", "bladder", "memory", "forgetful"]},
            "rf_parkinson_exclusion": {"say": "(Daughter) No shaking hands at all, and her arms still swing when she walks.",
                                       "trig": ["tremor", "shaking", "rigidity", "arm swing", "stiffness"]},
        },
    },
    "case_66": {
        "mnm": (["Post-fracture calf swelling and pain", "Immobilisation"],
                ["Pain on passive toe stretch and first webspace numbness point to compartment syndrome", "Duplex if doubt persists"]),
        "sec": (["Post-operative pain with swelling"],
                ["Within hours of injury, no fever, wound not red or discharging"]),
        "rf": {
            "rf_passive_stretch": {"say": "The pain is unbearable, even with the morphine. When the nurse moved my toes down I screamed.",
                                   "trig": ["morphine", "painkiller", "out of proportion", "toes", "move your toes", "stretch"]},
            "rf_deep_peroneal_pulse": {"say": "The skin between my big toe and second toe has gone numb. The nurse said she could still feel the pulse in my foot.",
                                       "trig": ["numb", "pins and needles", "tingling", "big toe", "pulse in the foot"]},
        },
    },
    "case_67": {
        "mnm": (["Short, externally rotated leg after a fall"],
                ["X-ray shows an intracapsular (not trochanteric) fracture line"]),
        "sec": (["Painful shortened leg after a fall"],
                ["Leg externally rotated (posterior dislocation is flexed, adducted and internally rotated)", "Low-energy fall, no previous hip replacement"]),
        "rf": {
            "rf_vascular_avascular": {"say": "My right leg looks shorter and my foot points outwards. I can't stand on it, and the groin hurts if anyone moves it.",
                                      "trig": ["shorter", "rotated", "foot points", "groin", "weight bear", "stand on"]},
            "rf_syncope_fall": {"say": "I got up from the chair and went light-headed, then I was on the floor. I don't think I tripped.",
                                "trig": ["dizzy", "light-headed", "blackout", "faint", "palpitations", "chest pain", "trip"]},
        },
    },
    "case_68": {
        "mnm": (["FOOSH injury with wrist pain"],
                ["No dinner-fork deformity", "Tenderness localised to the snuffbox, not the distal radius"]),
        "sec": (["Radial-sided wrist pain"],
                ["Acute injury, not overuse", "Finkelstein's negative; tenderness over the scaphoid"]),
        "rf": {
            "rf_snuffbox": {"say": "It hurts most in the hollow at the base of my thumb. Pushing my thumb inwards or gripping makes it worse.",
                            "trig": ["snuffbox", "base of thumb", "thumb", "press", "grip"]},
            "rf_normal_xray_trap": {"say": "The walk-in clinic X-rayed it yesterday and said it was normal, just a sprain.",
                                    "trig": ["x-ray", "xray", "sprain", "told it was normal", "previous scan"]},
        },
    },
    "case_69": {
        "mnm": (["Acute vestibular syndrome with nausea and gait unsteadiness in a 52yo with vascular risk factors", "PICA/AICA territory cerebellar or brainstem infarction can mimic peripheral vertigo"],
                ["HINTS exam exhibits classic peripheral features (abnormal head impulse with corrective saccade, unidirectional nystagmus, no skew deviation)", "No hearing loss, facial numbness, dysarthria, limb ataxia or Horner's syndrome; MRI DWI excludes posterior fossa stroke"]),
        "sec": (["Severe episodic vertigo and vomiting aggravated by head movement"],
                ["Vertigo is continuous and unrelenting for >14 hours even while lying motionless (BPPV vertigo occurs in brief paroxysms <60 seconds triggered by position change)", "Spontaneous horizontal-torsional nystagmus present without Dix-Hallpike positioning"]),
        "rf": {
            "rf_hints_central_vs_peripheral": {
                "say": "Doctor, the room has been spinning non-stop since 4 AM. Every time I open my eyes I throw up. The spinning doesn't stop even when I lie completely still.",
                "trig": ["hints", "head impulse", "saccade", "nystagmus", "direction", "skew", "cover test", "infarct", "spinning"],
            },
            "rf_stroke_red_flags": {
                "say": "My hearing is fine in both ears, no ringing or muffled sound, no numbness in my face or arms, and I can move both arms and legs without clumsiness.",
                "trig": ["hearing", "deaf", "tinnitus", "speech", "swallow", "numbness", "limb", "finger nose", "ataxia", "weakness"],
            },
        },
    },
    "case_70": {
        "mnm": (["Hot swollen single joint"],
                ["Gram stain negative with urate crystals", "Low-grade fever, no rigors or skin breach (crystals and sepsis can coexist, so culture still matters)"]),
        "sec": (["Acute crystal monoarthritis"],
                ["Needle-shaped negatively birefringent crystals (CPPD is rhomboid, positively birefringent)", "First MTP joint, not knee or wrist"]),
        "rf": {
            "rf_septic_joint_exclusion": {"say": "I feel a bit warm but no shivering or shakes. No cuts or injections near the toe.",
                                          "trig": ["fever", "temperature", "rigors", "shivering", "cut", "wound", "injection"]},
            "rf_gout_triggers": {"say": "My doctor started me on a water tablet three weeks ago. Last night I had prawns, liver and four beers.",
                                 "trig": ["beer", "alcohol", "seafood", "prawns", "diet", "water tablet", "diuretic", "hydrochlorothiazide"]},
        },
    },
    "case_71": {
        "mnm": (["Widespread skin peeling"],
                ["Mucosal surfaces involved (SSSS spares mucosa)", "Clear drug trigger, adult with no staphylococcal focus"]),
        "sec": (["Blistering with mucosal erosions"],
                ["Acute onset over days after a new drug, with fever and skin pain", "Pemphigus is chronic and not drug-timed"]),
        "rf": {
            "rf_nikolsky_mucosa": {"say": "My mouth is full of bleeding sores, my eyes are red and stuck, and it stings to pass urine. The skin on my chest comes off if anyone touches it.",
                                   "trig": ["mouth", "eyes", "genital", "pass urine", "peel", "blister", "skin coming off"]},
            "rf_allopurinol_hlab5801": {"say": "About two weeks ago I started allopurinol because my uric acid was high. Nobody did a gene test.",
                                        "trig": ["allopurinol", "new medicine", "started", "gene test", "hla"]},
        },
    },
    "case_72": {
        "mnm": (["Low back pain in a young man"],
                ["No sciatica or dermatomal deficit", "Stiffness improves with exercise, not rest"]),
        "sec": (["Back pain with night pain"],
                ["No fever, weight loss, IV drug use or recent procedure", "Bilateral sacroiliitis with HLA-B27"]),
        "rf": {
            "rf_inflammatory_back_pain": {"say": "It's been going on for six months. I'm stiff for an hour every morning, it eases when I exercise, and it wakes me in the early hours.",
                                          "trig": ["morning stiffness", "how long", "rest", "exercise", "wakes you", "night"]},
            "rf_extra_articular_as": {"say": "My left eye has gone red and painful and bright light hurts it. The back of my heel is sore too.",
                                      "trig": ["eye", "red eye", "uveitis", "heel", "achilles", "psoriasis", "bowel"]},
        },
    },
    "case_73": {
        "mnm": (["Hand numbness and clumsiness in RA"],
                ["Brisk reflexes, upgoing plantars and Lhermitte's sign (CTS is LMN and median-only)"]),
        "sec": (["Sensory symptoms on methotrexate"],
                ["UMN signs rather than glove-and-stocking loss with absent ankle jerks"]),
        "rf": {
            "rf_c1c2_myelopathy": {"say": "The back of my neck aches, and when I bend my head forward an electric shock goes down my back. My hands are clumsy and I'm unsteady walking.",
                                   "trig": ["neck", "electric shock", "bend forward", "clumsy", "unsteady", "walking", "balance"]},
            "rf_airway_intubation_danger": {"say": "I'm booked for a knee replacement under general anaesthetic next week.",
                                            "trig": ["surgery", "operation", "anaesthetic", "anesthetic", "intubation"]},
        },
    },
    "case_74": {
        "mnm": (["Hyperglycaemic emergency"],
                ["pH 7.36 and ketones 0.8 (DKA needs pH <7.3, ketones >3)", "Insidious over days in an older type 2 diabetic"]),
        "sec": (["Drowsiness in an older vascular patient"],
                ["No focal deficit; deficit fluctuates with hyperosmolality"]),
        "rf": {
            "rf_severe_hyperosmolarity": {"say": "(Daughter) She's been drinking water non-stop and weeing all the time for days. Now she's very sleepy and barely talking.",
                                          "trig": ["thirsty", "drinking", "weeing", "urine", "drowsy", "sleepy", "glucose", "sugar"]},
            "rf_precipitant_thrombosis": {"say": "(Daughter) It started with a cough and fever last week. She's hardly moved from bed since.",
                                          "trig": ["cough", "fever", "infection", "bedbound", "leg swelling", "clot"]},
        },
    },
    "case_75": {
        "mnm": (["Shock with abdominal pain"],
                ["Soft abdomen, no peritonism", "Hypoglycaemia, hyponatraemia and hyperkalaemia after stopping steroids"]),
        "sec": (["Vomiting and diarrhoea with dehydration"],
                ["Shock out of proportion to fluid losses and refractory to fluids", "Long-term prednisolone stopped abruptly"]),
        "rf": {
            "rf_steroid_withdrawal": {"say": "I've taken prednisolone 15 mg for my arthritis for three years. I stopped it four days ago because I was vomiting.",
                                      "trig": ["steroid", "prednisolone", "stopped", "tcm", "traditional medicine"]},
            "rf_electrolytes_hypoglycemia": {"say": "I'm so dizzy I can't stand, and I feel shaky and sweaty like my sugar is low.",
                                             "trig": ["dizzy", "faint", "shaky", "sweaty", "sugar", "glucose", "salt craving"]},
        },
    },
    "case_76": {
        "mnm": (["Fever, tachycardia and hypotension"],
                ["Free T4 >100 with suppressed TSH", "Known Graves' off carbimazole"]),
        "sec": (["Agitation, hyperthermia and tachycardia"],
                ["No drug use", "Goitre and thyroid eye signs; thyrotoxic biochemistry"]),
        "rf": {
            "rf_burch_wartofsky": {"say": "(Sister) She's burning hot, her heart is racing, she keeps vomiting and she's not making sense.",
                                   "trig": ["temperature", "fever", "racing heart", "palpitations", "agitated", "confused", "vomiting", "diarrhoea"]},
            "rf_carbimazole_default": {"say": "(Sister) She has Graves'. She stopped the carbimazole about six weeks ago, and she got a sore throat three days ago.",
                                       "trig": ["graves", "thyroid", "carbimazole", "stopped", "sore throat"]},
        },
    },
    "case_77": {
        "mnm": (["Episodic palpitations, sweating and fear"],
                ["BP 230/130 during attacks", "Got worse after propranolol; metanephrines >10x ULN"]),
        "sec": (["Sweating, palpitations and tremor"],
                ["Paroxysmal, not continuous", "Normal TFTs, no goitre or weight loss"]),
        "rf": {
            "rf_classic_triad_beta_trap": {"say": "I get attacks of pounding headache, drenching sweat and a racing heart. My GP started propranolol and today's attack was the worst ever.",
                                           "trig": ["headache", "sweating", "palpitations", "attacks", "propranolol", "beta blocker"]},
            "rf_men2_family": {"say": "My mum had thyroid cancer, the medullary type.",
                               "trig": ["family", "mother", "thyroid cancer", "calcium", "men2"]},
        },
    },
    "case_78": {
        "mnm": (["Bradycardia with broad complexes"],
                ["K+ 7.4 explains the ECG; changes reverse with calcium and insulin-dextrose"]),
        "sec": (["Generalised weakness"],
                ["No preceding infection or ascending pattern; weakness tracks the potassium"]),
        "rf": {
            "rf_hyperkalemia_ecg": {"say": "(Husband) She's so weak she can't lift her arms, and she hasn't passed urine since yesterday.",
                                    "trig": ["weak", "passed urine", "urine output", "potassium", "ecg", "heartbeat slow"]},
            "rf_triple_whammy": {"say": "(Husband) She kept taking her ramipril and spironolactone even with the diarrhoea, and she took ibuprofen for her back.",
                                 "trig": ["ramipril", "spironolactone", "ibuprofen", "nsaid", "blood pressure tablets", "painkillers"]},
        },
    },
    "case_79": {
        "mnm": (["Loin-to-groin pain", "Same stone, without infection, would be managed conservatively"],
                ["Fever 39.6 with rigors and BP 86/52: this is no longer uncomplicated colic"]),
        "sec": (["Flank pain with hypotension in a middle-aged adult"],
                ["Aged 49 with no pulsatile mass", "CT shows an obstructing ureteric stone and a normal aorta"]),
        "rf": {
            "rf_infected_obstructed": {"say": "On top of the pain I've had shaking chills, I'm burning up and I feel faint when I stand.",
                                       "trig": ["fever", "rigors", "chills", "shivering", "faint", "temperature"]},
            "rf_solitary_renal": {"say": "I had a kidney stone three years ago. As far as I know I have two kidneys.",
                                  "trig": ["kidney stone", "previous stone", "one kidney", "single kidney", "gout"]},
        },
    },
    "case_80": {
        "mnm": (["Urinary retention"],
                ["No back pain, saddle anaesthesia or leg weakness", "Normal anal tone on PR"]),
        "sec": (["Older man with lower urinary tract symptoms"],
                ["Smooth enlarged prostate on PR; PSA interpret after catheter settles"]),
        "rf": {
            "rf_anticholinergic_bph": {"say": "My stream's been weak for two years and I'm up four times a night. Yesterday I took Piriton for a cold and now nothing comes out.",
                                       "trig": ["stream", "nocturia", "night", "piriton", "antihistamine", "cold medicine"]},
            "rf_cauda_renal": {"say": "No back pain, and no numbness down below or in my legs.",
                               "trig": ["back pain", "saddle", "numb", "legs", "bowel"]},
        },
    },
    "case_81": {
        "mnm": (["Generalised oedema"],
                ["JVP not raised, no orthopnoea", "Heavy proteinuria with albumin 16"]),
        "sec": (["Oedema with low albumin"],
                ["No alcohol excess or stigmata of liver disease", "Normal INR and bilirubin"]),
        "rf": {
            "rf_nephrotic_triad": {"say": "My urine has gone really frothy, and my face is puffy every morning. Now my legs and belly are swollen too.",
                                   "trig": ["frothy", "foamy", "puffy", "face", "swelling", "albumin"]},
            "rf_renal_vein_thrombosis": {"say": "This morning I got a sudden pain in my left side and my urine went red.",
                                         "trig": ["flank", "side pain", "blood in urine", "red urine", "loin", "clot"]},
        },
    },
    "case_82": {
        "mnm": (["Acute behavioural disturbance with paranoia, agitation and insomnia in a university student", "Amphetamine/cannabis-induced psychosis is common in young adults"],
                ["Urine toxicology screen negative for amphetamines, cannabinoids, opioids, and synthetic drugs", "Symptoms have developed insidiously over 3-4 weeks rather than acute intoxication window"]),
        "sec": (["New-onset psychosis and auditory hallucinations in a young patient"],
                ["No autonomic instability, seizures, orofacial dyskinesias, or fluctuating consciousness", "Normal inflammatory markers, autoimmune panel, and CSF anti-NMDA receptor antibodies negative"]),
        "rf": {
            "rf_schneiderian_first_rank": {
                "say": "I hear two voices, a man and a woman, talking about me in the third person: 'Look, he's tying his shoes, he's going to make a mistake.' They echo inside my head, and the campus WiFi controls my arm movements.",
                "trig": ["voices", "talking", "thoughts", "broadcast", "controlled", "command", "insertion", "passivity"],
            },
            "rf_suicide_violence_substance": {
                "say": "The voices told me yesterday that my roommate is an operative sent to poison my food, but I have no intention to harm him or myself; I only barricaded my room door. I have never smoked weed or taken ice.",
                "trig": ["harm", "hurt", "kill", "suicide", "roommate", "poison", "substance", "ice", "meth", "cannabis", "weed", "recreational"],
            },
        },
    },
    "case_83": {
        "mnm": (["Thunderclap headache"],
                ["Visual field defect and ophthalmoplegia point to the sella", "MRI shows haemorrhage into a pituitary mass"]),
        "sec": (["Headache with CN III palsy"],
                ["No fever, proptosis or chemosis", "No facial infection"]),
        "rf": {
            "rf_chiasm_cavernous": {"say": "I keep bumping into things on both sides. My right eyelid has dropped and I'm seeing double.",
                                    "trig": ["vision", "both sides", "bumping into", "double vision", "eyelid", "droop"]},
            "rf_acth_shock": {"say": "I feel faint every time I sit up, and I'm sweaty and shaky.",
                              "trig": ["faint", "dizzy", "shaky", "sugar", "cortisol", "libido"]},
        },
    },
    "case_84": {
        "mnm": (["Third-trimester RUQ pain with abnormal LFTs"],
                ["Severe hypertension and proteinuria", "Normal glucose and no marked coagulopathy"]),
        "sec": (["RUQ pain with abnormal LFTs"],
                ["Haemolysis and low platelets", "No fever; ultrasound gallbladder normal"]),
        "rf": {
            "rf_impending_eclampsia": {"say": "I've got a terrible headache at the front, and I keep seeing flashing lights.",
                                       "trig": ["headache", "flashing", "lights", "vision", "blurry", "twitching"]},
            "rf_hellp_epigastric": {"say": "There's a pain under my right ribs going into the top of my tummy. It feels like a tight band.",
                                    "trig": ["under the ribs", "upper tummy", "epigastric", "right side", "heartburn"]},
        },
    },
    "case_85": {
        "mnm": (["Antepartum haemorrhage"],
                ["Painful, hard uterus (praevia is painless with a soft uterus)", "Fundal placenta at 20 weeks"]),
        "sec": (["Pain, bleeding and fetal distress"],
                ["No previous caesarean or uterine surgery", "Not in labour on oxytocin"]),
        "rf": {
            "rf_woody_uterus_fetal_distress": {"say": "The pain is constant and my tummy has gone rock hard. The baby has stopped kicking.",
                                               "trig": ["constant", "hard", "tummy", "baby moving", "kicks", "kicking", "contractions"]},
            "rf_praevia_risk_factors": {"say": "My 20-week scan said the placenta was at the top. My blood pressure's been high this pregnancy.",
                                        "trig": ["scan", "placenta", "blood pressure", "smoking", "trauma", "fall"]},
        },
    },
    "case_86": {
        "mnm": (["Bleeding after delivery"],
                ["Uterus soft and boggy; bleeding slows with fundal massage", "Genital tract inspection still needed"]),
        "sec": (["PPH with shock"],
                ["Fundus palpable above the umbilicus (absent or dimpled in inversion)", "No mass at the introitus"]),
        "rf": {
            "rf_boggy_uterus_atony": {"say": "(Midwife) The womb feels soft and high above the belly button. It was a long labour and a 4.2 kg baby, her fourth.",
                                      "trig": ["fundus", "womb", "soft", "boggy", "big baby", "long labour", "fourth"]},
            "rf_four_ts": {"say": "(Midwife) The placenta came out complete. She hasn't passed urine since delivery and her bladder is full.",
                           "trig": ["placenta", "tear", "bladder", "clotting", "complete"]},
        },
    },
    "case_87": {
        "mnm": (["Acute unilateral pelvic pain in a young woman"],
                ["b-hCG negative"]),
        "sec": (["Right iliac fossa pain with vomiting"],
                ["Abrupt onset during exercise, not migratory", "Adnexal mass on ultrasound, normal appendix"]),
        "rf": {
            "rf_torsion_vomiting": {"say": "It came on suddenly at the gym, like a knife on the right side. I've vomited four times. I was told I have a cyst on that ovary.",
                                    "trig": ["sudden", "gym", "exercise", "vomit", "cyst", "ovary"]},
            "rf_ectopic_exclusion_torsion": {"say": "My period was two weeks ago and it was normal. No bleeding now.",
                                             "trig": ["period", "pregnant", "pregnancy test", "bleeding"]},
        },
    },
    "case_88": {
        "mnm": (["Pelvic pain in a sexually active woman"],
                ["b-hCG negative", "Ultrasound shows no adnexal mass or free fluid"]),
        "sec": (["RUQ pain worse on breathing"],
                ["Pelvic pain, discharge and cervical motion tenderness", "Gallbladder normal on ultrasound"]),
        "rf": {
            "rf_chandelier_ruq": {"say": "I've had a smelly discharge and pain low down on both sides. Now there's a sharp pain under my right ribs when I breathe in.",
                                  "trig": ["discharge", "lower tummy", "pain during sex", "under the ribs", "breathe in"]},
            "rf_sti_history": {"say": "I've had a new partner for three weeks. We haven't used condoms.",
                               "trig": ["partner", "condom", "sexual", "sti"]},
        },
    },
    "case_89": {
        "mnm": (["Postmenopausal bleeding with vaginal dryness"],
                ["Endometrium 14 mm (atrophy gives a thin <4 mm lining)"]),
        "sec": (["Postmenopausal or post-coital bleeding"],
                ["Normal cervix on speculum and up-to-date smears", "Thickened endometrium"]),
        "rf": {
            "rf_pmb_cancer_rule": {"say": "My periods stopped eleven years ago, but in the last month I've had spotting three times.",
                                   "trig": ["menopause", "periods stopped", "bleeding", "spotting"]},
            "rf_unopposed_oestrogen": {"say": "I never had children. My periods stopped late, at 52. I'm overweight and I have diabetes.",
                                       "trig": ["children", "pregnancies", "weight", "diabetes", "tamoxifen", "hrt", "hormone"]},
        },
    },
    "case_90": {
        "mnm": (["Infant with bilious vomiting", "Malrotation with volvulus can infarct the whole midgut within hours"],
                ["Sausage-shaped mass with target sign on ultrasound", "Redcurrant jelly stool"]),
        "sec": (["Vomiting and irritability in an infant"],
                ["Episodic screaming with drawing up of legs and pallor between attacks", "No diarrhoea"]),
        "rf": {
            "rf_sausage_jelly": {"say": "(Mum) Every fifteen minutes he screams and pulls his knees up, then goes floppy and pale. He's vomiting green, and his nappy had red jelly in it.",
                                 "trig": ["screaming", "knees", "jelly", "blood in nappy", "green vomit", "vomit"]},
            "rf_viral_lead_point": {"say": "(Mum) He had a cold last week.",
                                    "trig": ["cold", "virus", "runny nose", "recent illness"]},
        },
    },
    "case_91": {
        "mnm": (["Neonatal vomiting"],
                ["Vomit is milky, not green (bilious vomiting suggests obstruction distal to the ampulla)"]),
        "sec": (["Vomiting after feeds"],
                ["Projectile, increasing and with dehydration and weight loss", "Metabolic alkalosis and olive mass"]),
        "rf": {
            "rf_non_bilious_hungry": {"say": "(Mum) He vomits right across the room after every feed. It's just milk, never green, and he wants to feed again straight away.",
                                      "trig": ["green", "bilious", "projectile", "across the room", "hungry"]},
            "rf_erythromycin_dehydration": {"say": "(Mum) Only one wet nappy since yesterday. He had erythromycin for sticky eyes when he was a week old.",
                                            "trig": ["nappies", "wet nappy", "antibiotics", "erythromycin"]},
        },
    },
    "case_92": {
        "mnm": (["Fever, rash and strawberry tongue"],
                ["Conjunctivitis and swollen hands and feet (absent in scarlet fever)", "No sandpaper rash or exudative tonsillitis"]),
        "sec": (["Fever, rash, red eyes"],
                ["Fully vaccinated; no cough, coryza or Koplik spots", "Non-exudative conjunctivitis"]),
        "rf": {
            "rf_crash_and_burn": {"say": "(Dad) He's had a fever for six days. His eyes are red, his lips are cracked, there's a rash, his hands and feet are puffy, and there's a lump in his neck.",
                                  "trig": ["days of fever", "how many days", "red eyes", "lips", "tongue", "hands", "feet", "lump in neck", "rash"]},
            "rf_coronary_aneurysm": {"say": "(Dad) No one has checked his heart or done an echocardiogram yet.",
                                     "trig": ["coronary", "aneurysm", "echo", "echocardiogram", "aspirin", "ivig", "scan of the heart", "heart scan"]},
        },
    },
    "case_93": {
        "mnm": (["Stridor in a young child"],
                ["Barking cough; not drooling, not toxic", "Hib vaccinated"]),
        "sec": (["Stridor in a toddler"],
                ["Gradual onset after a cold, no choking episode", "Bilateral equal air entry"]),
        "rf": {
            "rf_stridor_at_rest": {"say": "(Mum) He has a cough like a seal, and he makes a loud noise breathing in even when he's sitting quietly. His ribs are sucking in.",
                                   "trig": ["stridor", "noisy breathing", "at rest", "barking", "seal", "ribs", "sucking in"]},
            "rf_epiglottitis_exclusion": {"say": "(Mum) He's drinking okay and he isn't dribbling. He's had all his jabs.",
                                          "trig": ["drooling", "dribbling", "swallow", "drinking", "vaccinations", "jabs", "hib"]},
        },
    },
    "case_94": {
        "mnm": (["Fever with seizure"],
                ["Back to normal within 30 minutes, supple neck, no rash", "Clear source (otitis media); fully immunised"]),
        "sec": (["Seizure with fever"],
                ["Generalised, 3 minutes, single episode in 24 hours"]),
        "rf": {
            "rf_simple_vs_complex_criteria": {"say": "(Mum) Her whole body shook for about three minutes. Both sides the same, and it hasn't happened again.",
                                              "trig": ["how long", "minutes", "both sides", "one side", "happened again", "twice"]},
            "rf_meningitis_exclusion": {"say": "(Mum) She's back to her normal self, moving her neck fine, no rash. All her jabs are done.",
                                        "trig": ["neck", "rash", "drowsy", "back to normal", "vaccinations", "jabs", "fontanelle"]},
        },
    },
    "case_95": {
        "mnm": (["Wheeze in an infant"],
                ["Age 4 months, first episode with coryza and widespread crackles", "No atopy or recurrent episodes"]),
        "sec": (["Fever and respiratory distress"],
                ["Bilateral crackles and wheeze, low-grade fever", "No focal consolidation"]),
        "rf": {
            "rf_admission_criteria_bronchiolitis": {"say": "(Mum) He's taking less than half his usual milk, and this morning he stopped breathing for a few seconds and went blue.",
                                                    "trig": ["feeds", "feeding", "milk", "stopped breathing", "apnoea", "blue", "pauses"]},
            "rf_chd_screen": {"say": "(Mum) He was born early, at 33 weeks. No one has mentioned a heart murmur.",
                              "trig": ["premature", "born early", "weeks", "heart murmur", "heart problem"]},
        },
    },
    "case_96": {
        "mnm": (["Deliberate overdose"],
                ["Denies aspirin; no tinnitus, hyperventilation or acid-base disturbance", "Salicylate level needed in every overdose"]),
        "sec": (["Raised transaminases"],
                ["Clear ingestion history and paracetamol level above the treatment line"]),
        "rf": {
            "rf_toxic_dose_timing": {"say": "I took 48 tablets of 500 mg all at once, about five hours ago.",
                                     "trig": ["how many tablets", "tablets", "grams", "what time", "all at once", "staggered"]},
            "rf_king_college_suicide": {"say": "Just the paracetamol, no alcohol. I sent my sister a goodbye message.",
                                        "trig": ["anything else", "alcohol", "suicide", "end your life", "goodbye", "note"]},
        },
    },
    "case_97": {
        "mnm": (["Hyperthermia, rigidity and altered mental state"],
                ["No antipsychotic exposure; onset within 24 hours", "Clonus and hyperreflexia (NMS gives lead-pipe rigidity and hyporeflexia)"]),
        "sec": (["Agitation, hyperthermia and dilated pupils"],
                ["Sweating, diarrhoea and clonus (anticholinergic toxicity gives dry skin, retention and normal reflexes)"]),
        "rf": {
            "rf_hunter_clonus": {"say": "My legs keep jerking on their own and I can't stop shaking. I'm sweating and I've had diarrhoea all afternoon.",
                                 "trig": ["jerking", "twitching", "clonus", "shaking", "sweating", "diarrhoea"]},
            "rf_serotonergic_drugs": {"say": "I take escitalopram 20 mg. Last week I started St John's Wort, and today I took tramadol for my ankle.",
                                      "trig": ["escitalopram", "ssri", "antidepressant", "tramadol", "st john", "herbal"]},
        },
    },
    "case_98": {
        "mnm": (["Confusion in a heavy drinker with recent falls"],
                ["No focal neurology", "CT head normal"]),
        "sec": (["Confusion in an alcoholic"],
                ["No jaundice, ascites or asterixis", "Tremor, sweating and visual hallucinations 72 hours after the last drink"]),
        "rf": {
            "rf_dt_timeline_autonomic": {"say": "(Nurse) Her last drink was three days ago when she came in with her wrist. She had a fit on day one. Now she's sweating and seeing insects on the walls.",
                                         "trig": ["last drink", "when did she stop", "days", "fit", "seizure", "insects", "hallucinating", "sweating"]},
            "rf_wernicke_triad": {"say": "(Nurse) She's very thin, her eyes flick from side to side, and she can't walk straight.",
                                  "trig": ["eyes", "nystagmus", "walk", "unsteady", "thiamine", "malnourished"]},
        },
    },
    "case_99": {
        "mnm": (["Agitation, insomnia and grandiosity"],
                ["Urine toxicology negative", "Symptoms for over a week rather than hours"]),
        "sec": (["Insomnia, agitation and racing thoughts"],
                ["TFTs normal; no tremor or weight loss"]),
        "rf": {
            "rf_digfast_mania": {"say": "I barely need sleep, one hour is plenty. I've got a plan to fix the economy and I've put eighty thousand into it this week.",
                                 "trig": ["sleep", "energy", "racing thoughts", "spend", "money", "special powers", "plans"]},
            "rf_ssri_switch_tox": {"say": "Three weeks ago the GP started me on sertraline for depression. No drugs, I swear.",
                                   "trig": ["sertraline", "antidepressant", "recreational", "meth", "cocaine", "thyroid"]},
        },
    },
    "case_100": {
        "mnm": (["Sudden painless monocular visual loss"],
                ["Pale retina with cherry-red spot (CRVO shows widespread haemorrhages)"]),
        "sec": (["Older patient with sudden visual loss"],
                ["No headache, scalp tenderness or jaw claudication; ESR/CRP must still be checked"]),
        "rf": {
            "rf_painless_rapd_cherry": {"say": "Out of nowhere the vision in my right eye went black. It didn't hurt at all. I can only tell light from dark.",
                                        "trig": ["painless", "sudden", "went black", "vision", "light", "one eye"]},
            "rf_gca_carotid_screen": {"say": "No headache or tender scalp, and chewing is fine. I have an irregular heartbeat and I smoke.",
                                      "trig": ["temple", "headache", "jaw", "scalp", "irregular heartbeat", "stroke", "smoke"]},
        },
    },
}


def apply_overrides(registry) -> None:
    """Apply DISCRIMINATORS to the built cases, in place."""
    tier_key = {DifferentialTier.MUST_NOT_MISS: "mnm", DifferentialTier.SECONDARY: "sec"}
    for case_id, spec in DISCRIMINATORS.items():
        case = registry.get(case_id)
        if case is None:
            continue
        for d in case.differentials:
            key = tier_key.get(d.tier)
            if key and key in spec:
                sup, ref = spec[key]
                d.supporting_features = list(sup)
                d.refuting_features = list(ref)
        for key, rf in spec.get("rf", {}).items():
            gate = case.gates.get(key) if isinstance(case.gates, dict) else next((g for g in case.gates if g.key == key), None)
            if gate is None:
                raise KeyError(f"{case_id}: unknown gate {key}")
            if not gate.examiner_note:
                gate.examiner_note = gate.response_text
            gate.response_text = rf["say"]
            if rf.get("trig"):
                gate.trigger_concepts = list(dict.fromkeys(t.lower() for t in rf["trig"]))
