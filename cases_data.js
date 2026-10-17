// Auto-generated from voice_osce.cases.CASE_LIBRARY (15 Cases including 5 Singapore Finals Classics)
const CASES_MAP = {
  "cardio_01": {
    "id": "cardio_01",
    "case_id": "cardio_01",
    "title": "Acute Central Chest Pain in a 56-Year-Old Driver",
    "specialty": "Cardiology / Acute Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Mr. David Tan",
    "age": 56,
    "gender": "Male",
    "occupation": "Grab / Taxi Driver",
    "setting": "Emergency Department Acute Assessment Unit",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Severe retrosternal chest tightness for 2 hours",
    "presenting_complaint": "Severe retrosternal chest tightness for 2 hours",
    "opening_statement": "It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down.",
    "triage_vitals": {
      "Heart Rate": "98 bpm (Sinus)",
      "Blood Pressure": "144/88 mmHg (Right arm), 142/86 mmHg (Left arm)",
      "Respiratory Rate": "22 /min",
      "Oxygen Saturation": "96% on room air",
      "Temperature": "36.8°C",
      "GCS": "15/15"
    },
    "background_context": "Mr. David Tan, 56yo Male (Grab / Taxi Driver) at Emergency Department Acute Assessment Unit. You are the FY1/ED Medical Officer. Take a focused 7-minute history from Mr. Tan. Explore his symptoms, risk factors, and concerns. An interim investigation may arrive. You will then present your synthesis, differential diagnosis, and acute management plan to the Examiner.",
    "brief": {
      "setting": "Emergency Department Acute Assessment Unit",
      "patient_name": "Mr. David Tan",
      "age": 56,
      "gender": "Male",
      "occupation": "Grab / Taxi Driver",
      "presenting_complaint": "Severe retrosternal chest tightness for 2 hours",
      "triage_vitals": {
        "Heart Rate": "98 bpm (Sinus)",
        "Blood Pressure": "144/88 mmHg (Right arm), 142/86 mmHg (Left arm)",
        "Respiratory Rate": "22 /min",
        "Oxygen Saturation": "96% on room air",
        "Temperature": "36.8°C",
        "GCS": "15/15"
      },
      "instructions": "You are the FY1/ED Medical Officer. Take a focused 7-minute history from Mr. Tan. Explore his symptoms, risk factors, and concerns. An interim investigation may arrive. You will then present your synthesis, differential diagnosis, and acute management plan to the Examiner."
    },
    "persona": {
      "name": "Mr. David Tan",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "-5%",
      "pain_level": 8,
      "temperament": "anxious",
      "behavioral_cues": [
        "Holds a clenched fist over his sternum (Levine's sign)",
        "Sweating mildly, breathing shallowly due to discomfort",
        "Reluctant to take long breaths, speaks in brief sentences"
      ]
    },
    "gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest"
        ],
        "response_text": "It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down.",
        "response": "It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "character_severity",
        "category": "socrates",
        "trigger_concepts": [
          "feel like",
          "describe",
          "sharp",
          "dull",
          "heavy",
          "crushing",
          "scale",
          "severity",
          "pain score",
          "out of 10"
        ],
        "triggers": [
          "feel like",
          "describe",
          "sharp",
          "dull",
          "heavy",
          "crushing",
          "scale",
          "severity",
          "pain score",
          "out of 10"
        ],
        "response_text": "It feels like an elephant sitting on my chest, doctor. A heavy, squeezing pressure. On a scale of 1 to 10, it's definitely an 8.",
        "response": "It feels like an elephant sitting on my chest, doctor. A heavy, squeezing pressure. On a scale of 1 to 10, it's definitely an 8.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "radiation",
        "category": "socrates",
        "trigger_concepts": [
          "radiate",
          "spread",
          "move",
          "arm",
          "jaw",
          "neck",
          "back",
          "shoulder"
        ],
        "triggers": [
          "radiate",
          "spread",
          "move",
          "arm",
          "jaw",
          "neck",
          "back",
          "shoulder"
        ],
        "response_text": "Yes! It's radiating up into my left jaw and down the inside of my left arm. It doesn't shoot to my back, though.",
        "response": "Yes! It's radiating up into my left jaw and down the inside of my left arm. It doesn't shoot to my back, though.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "associations",
        "category": "socrates",
        "trigger_concepts": [
          "sweat",
          "clammy",
          "nausea",
          "vomit",
          "breathless",
          "short of breath",
          "dizzy",
          "lightheaded"
        ],
        "triggers": [
          "sweat",
          "clammy",
          "nausea",
          "vomit",
          "breathless",
          "short of breath",
          "dizzy",
          "lightheaded"
        ],
        "response_text": "I've been sweating buckets even with the air conditioning on full blast, and I felt quite nauseous, almost threw up in the cab.",
        "response": "I've been sweating buckets even with the air conditioning on full blast, and I felt quite nauseous, almost threw up in the cab.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "exacerbating_relieving",
        "category": "socrates",
        "trigger_concepts": [
          "worse",
          "better",
          "breathing",
          "cough",
          "posture",
          "lying down",
          "walking"
        ],
        "triggers": [
          "worse",
          "better",
          "breathing",
          "cough",
          "posture",
          "lying down",
          "walking"
        ],
        "response_text": "Nothing seems to make it better. Taking a deep breath doesn't make it sharper, it just stays heavy and crushing.",
        "response": "Nothing seems to make it better. Taking a deep breath doesn't make it sharper, it just stays heavy and crushing.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas",
        "category": "ice",
        "trigger_concepts": [
          "what do you think",
          "your thoughts",
          "cause",
          "ideas"
        ],
        "triggers": [
          "what do you think",
          "your thoughts",
          "cause",
          "ideas"
        ],
        "response_text": "Doctor... I tried telling myself it was just gastric indigestion from the oily chicken rice, but deep down I'm terrified it's my heart.",
        "response": "Doctor... I tried telling myself it was just gastric indigestion from the oily chicken rice, but deep down I'm terrified it's my heart.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "concern",
          "afraid",
          "fear",
          "scared"
        ],
        "triggers": [
          "worry",
          "worried",
          "concern",
          "afraid",
          "fear",
          "scared"
        ],
        "response_text": "My older brother had a massive heart attack when he was just 52 and didn't make it. I'm terrified the same thing is happening to me. My daughter is getting married in two months...",
        "response": "My older brother had a massive heart attack when he was just 52 and didn't make it. I'm terrified the same thing is happening to me. My daughter is getting married in two months...",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "want us to do",
          "expectations"
        ],
        "triggers": [
          "expect",
          "hoping",
          "want us to do",
          "expectations"
        ],
        "response_text": "I just want to know if I'm having a heart attack, and whether you can give me something to stop this crushing pain.",
        "response": "I just want to know if I'm having a heart attack, and whether you can give me something to stop this crushing pain.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_aortic_tear",
        "category": "red_flag",
        "trigger_concepts": [
          "tearing",
          "ripping",
          "between shoulder blades",
          "scapula",
          "back pain",
          "tearing pain"
        ],
        "triggers": [
          "tearing",
          "ripping",
          "between shoulder blades",
          "scapula",
          "back pain",
          "tearing pain"
        ],
        "response_text": "No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
        "response": "No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_syncope",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "blackout",
          "collapse",
          "loss of consciousness",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "collapse",
          "loss of consciousness",
          "syncope"
        ],
        "response_text": "No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
        "response": "No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_pe_hemoptysis",
        "category": "red_flag",
        "trigger_concepts": [
          "cough blood",
          "blood in spit",
          "hemoptysis",
          "leg swelling",
          "calf pain",
          "dvt",
          "clot"
        ],
        "triggers": [
          "cough blood",
          "blood in spit",
          "hemoptysis",
          "leg swelling",
          "calf pain",
          "dvt",
          "clot"
        ],
        "response_text": "No blood in my phlegm, and neither of my calves is swollen or sore.",
        "response": "No blood in my phlegm, and neither of my calves is swollen or sore.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pmhx_drugs",
        "category": "past_history",
        "trigger_concepts": [
          "past medical",
          "medical history",
          "illness",
          "conditions",
          "blood pressure",
          "diabetes",
          "cholesterol",
          "medications",
          "tablets",
          "allergies"
        ],
        "triggers": [
          "past medical",
          "medical history",
          "illness",
          "conditions",
          "blood pressure",
          "diabetes",
          "cholesterol",
          "medications",
          "tablets",
          "allergies"
        ],
        "response_text": "I have high blood pressure and high cholesterol diagnosed 5 years ago. I'm prescribed Amlodipine 5mg and Atorvastatin 20mg, but honestly, I often forget to take them during long taxi shifts. No allergies to any medications.",
        "response": "I have high blood pressure and high cholesterol diagnosed 5 years ago. I'm prescribed Amlodipine 5mg and Atorvastatin 20mg, but honestly, I often forget to take them during long taxi shifts. No allergies to any medications.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "social_smoking",
        "category": "social",
        "trigger_concepts": [
          "smoke",
          "cigarettes",
          "alcohol",
          "drink",
          "diet",
          "lifestyle",
          "exercise"
        ],
        "triggers": [
          "smoke",
          "cigarettes",
          "alcohol",
          "drink",
          "diet",
          "lifestyle",
          "exercise"
        ],
        "response_text": "I smoke about a pack a day for the past 30 years—helps with driving fatigue. I don't drink alcohol much, just a beer on weekends. Exercise? Hard to find time when driving 12 hours a day.",
        "response": "I smoke about a pack a day for the past 30 years—helps with driving fatigue. I don't drink alcohol much, just a beer on weekends. Exercise? Hard to find time when driving 12 hours a day.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest"
        ],
        "response_text": "It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down.",
        "response": "It's right here in the middle of my chest, doctor... started about two hours ago while I was driving after lunch. It came on pretty fast, like a heavy weight pressing down.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "character_severity",
        "category": "socrates",
        "trigger_concepts": [
          "feel like",
          "describe",
          "sharp",
          "dull",
          "heavy",
          "crushing",
          "scale",
          "severity",
          "pain score",
          "out of 10"
        ],
        "triggers": [
          "feel like",
          "describe",
          "sharp",
          "dull",
          "heavy",
          "crushing",
          "scale",
          "severity",
          "pain score",
          "out of 10"
        ],
        "response_text": "It feels like an elephant sitting on my chest, doctor. A heavy, squeezing pressure. On a scale of 1 to 10, it's definitely an 8.",
        "response": "It feels like an elephant sitting on my chest, doctor. A heavy, squeezing pressure. On a scale of 1 to 10, it's definitely an 8.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "radiation",
        "category": "socrates",
        "trigger_concepts": [
          "radiate",
          "spread",
          "move",
          "arm",
          "jaw",
          "neck",
          "back",
          "shoulder"
        ],
        "triggers": [
          "radiate",
          "spread",
          "move",
          "arm",
          "jaw",
          "neck",
          "back",
          "shoulder"
        ],
        "response_text": "Yes! It's radiating up into my left jaw and down the inside of my left arm. It doesn't shoot to my back, though.",
        "response": "Yes! It's radiating up into my left jaw and down the inside of my left arm. It doesn't shoot to my back, though.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "associations",
        "category": "socrates",
        "trigger_concepts": [
          "sweat",
          "clammy",
          "nausea",
          "vomit",
          "breathless",
          "short of breath",
          "dizzy",
          "lightheaded"
        ],
        "triggers": [
          "sweat",
          "clammy",
          "nausea",
          "vomit",
          "breathless",
          "short of breath",
          "dizzy",
          "lightheaded"
        ],
        "response_text": "I've been sweating buckets even with the air conditioning on full blast, and I felt quite nauseous, almost threw up in the cab.",
        "response": "I've been sweating buckets even with the air conditioning on full blast, and I felt quite nauseous, almost threw up in the cab.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "exacerbating_relieving",
        "category": "socrates",
        "trigger_concepts": [
          "worse",
          "better",
          "breathing",
          "cough",
          "posture",
          "lying down",
          "walking"
        ],
        "triggers": [
          "worse",
          "better",
          "breathing",
          "cough",
          "posture",
          "lying down",
          "walking"
        ],
        "response_text": "Nothing seems to make it better. Taking a deep breath doesn't make it sharper, it just stays heavy and crushing.",
        "response": "Nothing seems to make it better. Taking a deep breath doesn't make it sharper, it just stays heavy and crushing.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas",
        "category": "ice",
        "trigger_concepts": [
          "what do you think",
          "your thoughts",
          "cause",
          "ideas"
        ],
        "triggers": [
          "what do you think",
          "your thoughts",
          "cause",
          "ideas"
        ],
        "response_text": "Doctor... I tried telling myself it was just gastric indigestion from the oily chicken rice, but deep down I'm terrified it's my heart.",
        "response": "Doctor... I tried telling myself it was just gastric indigestion from the oily chicken rice, but deep down I'm terrified it's my heart.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "concern",
          "afraid",
          "fear",
          "scared"
        ],
        "triggers": [
          "worry",
          "worried",
          "concern",
          "afraid",
          "fear",
          "scared"
        ],
        "response_text": "My older brother had a massive heart attack when he was just 52 and didn't make it. I'm terrified the same thing is happening to me. My daughter is getting married in two months...",
        "response": "My older brother had a massive heart attack when he was just 52 and didn't make it. I'm terrified the same thing is happening to me. My daughter is getting married in two months...",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "want us to do",
          "expectations"
        ],
        "triggers": [
          "expect",
          "hoping",
          "want us to do",
          "expectations"
        ],
        "response_text": "I just want to know if I'm having a heart attack, and whether you can give me something to stop this crushing pain.",
        "response": "I just want to know if I'm having a heart attack, and whether you can give me something to stop this crushing pain.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_aortic_tear",
        "category": "red_flag",
        "trigger_concepts": [
          "tearing",
          "ripping",
          "between shoulder blades",
          "scapula",
          "back pain",
          "tearing pain"
        ],
        "triggers": [
          "tearing",
          "ripping",
          "between shoulder blades",
          "scapula",
          "back pain",
          "tearing pain"
        ],
        "response_text": "No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
        "response": "No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_syncope",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "blackout",
          "collapse",
          "loss of consciousness",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "collapse",
          "loss of consciousness",
          "syncope"
        ],
        "response_text": "No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
        "response": "No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_pe_hemoptysis",
        "category": "red_flag",
        "trigger_concepts": [
          "cough blood",
          "blood in spit",
          "hemoptysis",
          "leg swelling",
          "calf pain",
          "dvt",
          "clot"
        ],
        "triggers": [
          "cough blood",
          "blood in spit",
          "hemoptysis",
          "leg swelling",
          "calf pain",
          "dvt",
          "clot"
        ],
        "response_text": "No blood in my phlegm, and neither of my calves is swollen or sore.",
        "response": "No blood in my phlegm, and neither of my calves is swollen or sore.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pmhx_drugs",
        "category": "past_history",
        "trigger_concepts": [
          "past medical",
          "medical history",
          "illness",
          "conditions",
          "blood pressure",
          "diabetes",
          "cholesterol",
          "medications",
          "tablets",
          "allergies"
        ],
        "triggers": [
          "past medical",
          "medical history",
          "illness",
          "conditions",
          "blood pressure",
          "diabetes",
          "cholesterol",
          "medications",
          "tablets",
          "allergies"
        ],
        "response_text": "I have high blood pressure and high cholesterol diagnosed 5 years ago. I'm prescribed Amlodipine 5mg and Atorvastatin 20mg, but honestly, I often forget to take them during long taxi shifts. No allergies to any medications.",
        "response": "I have high blood pressure and high cholesterol diagnosed 5 years ago. I'm prescribed Amlodipine 5mg and Atorvastatin 20mg, but honestly, I often forget to take them during long taxi shifts. No allergies to any medications.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "social_smoking",
        "category": "social",
        "trigger_concepts": [
          "smoke",
          "cigarettes",
          "alcohol",
          "drink",
          "diet",
          "lifestyle",
          "exercise"
        ],
        "triggers": [
          "smoke",
          "cigarettes",
          "alcohol",
          "drink",
          "diet",
          "lifestyle",
          "exercise"
        ],
        "response_text": "I smoke about a pack a day for the past 30 years—helps with driving fatigue. I don't drink alcohol much, just a beer on weekends. Exercise? Hard to find time when driving 12 hours a day.",
        "response": "I smoke about a pack a day for the past 30 years—helps with driving fatigue. I don't drink alcohol much, just a beer on weekends. Exercise? Hard to find time when driving 12 hours a day.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "red_flag_aortic_tear",
        "label": "Red Flag Aortic Tear",
        "triggers": [
          "tearing",
          "ripping",
          "between shoulder blades",
          "scapula",
          "back pain",
          "tearing pain"
        ],
        "response": "No, doctor, it's not tearing or ripping, and it hasn't gone through to my back between my shoulder blades at all.",
        "mandatory": true
      },
      {
        "key": "red_flag_syncope",
        "label": "Red Flag Syncope",
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "collapse",
          "loss of consciousness",
          "syncope"
        ],
        "response": "No blackouts or fainting, thank goodness, but I felt very weak when I tried to stand up.",
        "mandatory": true
      },
      {
        "key": "red_flag_pe_hemoptysis",
        "label": "Red Flag Pe Hemoptysis",
        "triggers": [
          "cough blood",
          "blood in spit",
          "hemoptysis",
          "leg swelling",
          "calf pain",
          "dvt",
          "clot"
        ],
        "response": "No blood in my phlegm, and neither of my calves is swollen or sore.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency 12-Lead ECG & Bedside Point-of-Care Troponin",
      "description": "The ED nurse hands you the freshly printed 12-lead ECG and bedside high-sensitivity troponin result.",
      "new_finding": "Emergency 12-Lead ECG & Bedside Point-of-Care Troponin — ECG: Sinus rhythm at 96 bpm. 2.5 mm convex ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in I and aVL.; V4R Lead: 1 mm ST elevation in right-sided lead V4R (suggests Right Ventricular involvement).; Bedside hs-cTnT: 48 ng/L (Elevated, baseline < 14 ng/L).",
      "findings": {
        "ECG": "Sinus rhythm at 96 bpm. 2.5 mm convex ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in I and aVL.",
        "V4R Lead": "1 mm ST elevation in right-sided lead V4R (suggests Right Ventricular involvement).",
        "Bedside hs-cTnT": "48 ng/L (Elevated, baseline < 14 ng/L)."
      },
      "expected_shifts": {
        "Acute ST-Elevation Myocardial Infarction (Inferior STEMI with RV involvement)": 2,
        "Acute Aortic Dissection Type A": -1,
        "Pulmonary Embolism": -2,
        "Gastroesophageal Reflux Disease (GERD)": -2
      },
      "expert_rationale": "The 12-lead ECG definitively demonstrates an acute Inferior STEMI (ST elevation in II, III, aVF with reciprocal depressions). Critically, ST elevation in lead V4R flags right ventricular infarction, meaning the patient is preload-dependent and nitrates/morphine must be used with extreme caution to avoid catastrophic hypotension."
    },
    "differentials": [
      {
        "name": "Acute Inferior STEMI (with Right Ventricular Infarction)",
        "tier": "primary",
        "supporting_features": [
          "Crushing retrosternal pain radiating to jaw/left arm",
          "Diaphoresis, nausea",
          "ST elevation in II, III, aVF",
          "Elevated hs-cTnT",
          "Heavy smoking history and untreated hypertension"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.98
      },
      {
        "name": "Acute Aortic Dissection (Stanford Type A involving RCA ostium)",
        "tier": "must_not_miss",
        "supporting_features": [
          "Severe acute chest pain in male with chronic hypertension",
          "Can present as inferior STEMI if dissection flap occludes right coronary artery ostium"
        ],
        "refuting_features": [
          "Equal bilateral arm blood pressures",
          "Absence of tearing pain radiating to interscapular region",
          "No new aortic regurgitation murmur"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Pulmonary Embolism",
        "tier": "secondary",
        "supporting_features": [
          "Tachypnea, sudden chest discomfort in sedentary taxi driver"
        ],
        "refuting_features": [
          "Pain is non-pleuritic",
          "No hemoptysis, no DVT signs",
          "Definitive STEMI ECG rather than S1Q3T3 / sinus tach"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Acute Inferior STEMI (with Right Ventricular Infarction)",
        "tier": "primary",
        "supporting_features": [
          "Crushing retrosternal pain radiating to jaw/left arm",
          "Diaphoresis, nausea",
          "ST elevation in II, III, aVF",
          "Elevated hs-cTnT",
          "Heavy smoking history and untreated hypertension"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.98
      },
      {
        "name": "Acute Aortic Dissection (Stanford Type A involving RCA ostium)",
        "tier": "must_not_miss",
        "supporting_features": [
          "Severe acute chest pain in male with chronic hypertension",
          "Can present as inferior STEMI if dissection flap occludes right coronary artery ostium"
        ],
        "refuting_features": [
          "Equal bilateral arm blood pressures",
          "Absence of tearing pain radiating to interscapular region",
          "No new aortic regurgitation murmur"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Pulmonary Embolism",
        "tier": "secondary",
        "supporting_features": [
          "Tachypnea, sudden chest discomfort in sedentary taxi driver"
        ],
        "refuting_features": [
          "Pain is non-pleuritic",
          "No hemoptysis, no DVT signs",
          "Definitive STEMI ECG rather than S1Q3T3 / sinus tach"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Please present a concise 60-second summary of this patient to the Cardiology Registrar.",
        "question": "Please present a concise 60-second summary of this patient to the Cardiology Registrar.",
        "target_rubric": "Structured SBAR summary: 56yo male with CV risk factors presenting with acute crushing retrosternal chest pain, vegetative symptoms, and inferior STEMI on ECG with RV involvement.",
        "model_answer": "Structured SBAR summary: 56yo male with CV risk factors presenting with acute crushing retrosternal chest pain, vegetative symptoms, and inferior STEMI on ECG with RV involvement.",
        "max_marks": 10,
        "key_points_required": [
          "56yo male driver",
          "Cardiovascular risk factors (hypertension, hyperlipidemia, 30 pack-year smoking)",
          "Typical ischemic symptoms (crushing, radiating to left arm/jaw, diaphoresis)",
          "Inferior STEMI confirmed on ECG"
        ],
        "key_points": [
          "56yo male driver",
          "Cardiovascular risk factors (hypertension, hyperlipidemia, 30 pack-year smoking)",
          "Typical ischemic symptoms (crushing, radiating to left arm/jaw, diaphoresis)",
          "Inferior STEMI confirmed on ECG"
        ]
      },
      {
        "prompt": "What is your primary working diagnosis and two key differential diagnoses?",
        "question": "What is your primary working diagnosis and two key differential diagnoses?",
        "target_rubric": "Primary: Acute Inferior STEMI with RV involvement. Differentials: Aortic dissection (Type A with RCA occlusion), Acute Pulmonary Embolism.",
        "model_answer": "Primary: Acute Inferior STEMI with RV involvement. Differentials: Aortic dissection (Type A with RCA occlusion), Acute Pulmonary Embolism.",
        "max_marks": 10,
        "key_points_required": [
          "Inferior STEMI",
          "Right Ventricular involvement",
          "Aortic dissection",
          "Pulmonary embolism"
        ],
        "key_points": [
          "Inferior STEMI",
          "Right Ventricular involvement",
          "Aortic dissection",
          "Pulmonary embolism"
        ]
      },
      {
        "prompt": "Outline your immediate acute management plan in the next 15 minutes.",
        "question": "Outline your immediate acute management plan in the next 15 minutes.",
        "target_rubric": "Dual antiplatelet therapy (Aspirin 300mg + Ticagrelor 180mg), urgent cardiac cath lab activation for primary PCI, oxygen only if SpO2 < 94%, IV access, cautious fluid bolus for RV infarction, AVOID nitrates.",
        "model_answer": "Dual antiplatelet therapy (Aspirin 300mg + Ticagrelor 180mg), urgent cardiac cath lab activation for primary PCI, oxygen only if SpO2 < 94%, IV access, cautious fluid bolus for RV infarction, AVOID nitrates.",
        "max_marks": 10,
        "key_points_required": [
          "Activate Cath Lab / Primary PCI (< 90-120 min door-to-balloon)",
          "Dual antiplatelet therapy (Aspirin 300mg + P2Y12 inhibitor)",
          "IV access and baseline labs (FBC, U&E, Coag, Crossmatch)",
          "CAUTION/AVOID nitrates due to Right Ventricular preload dependence",
          "Analgesia (cautious IV morphine/antiemetic)"
        ],
        "key_points": [
          "Activate Cath Lab / Primary PCI (< 90-120 min door-to-balloon)",
          "Dual antiplatelet therapy (Aspirin 300mg + P2Y12 inhibitor)",
          "IV access and baseline labs (FBC, U&E, Coag, Crossmatch)",
          "CAUTION/AVOID nitrates due to Right Ventricular preload dependence",
          "Analgesia (cautious IV morphine/antiemetic)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Please present a concise 60-second summary of this patient to the Cardiology Registrar.",
        "question": "Please present a concise 60-second summary of this patient to the Cardiology Registrar.",
        "target_rubric": "Structured SBAR summary: 56yo male with CV risk factors presenting with acute crushing retrosternal chest pain, vegetative symptoms, and inferior STEMI on ECG with RV involvement.",
        "model_answer": "Structured SBAR summary: 56yo male with CV risk factors presenting with acute crushing retrosternal chest pain, vegetative symptoms, and inferior STEMI on ECG with RV involvement.",
        "max_marks": 10,
        "key_points_required": [
          "56yo male driver",
          "Cardiovascular risk factors (hypertension, hyperlipidemia, 30 pack-year smoking)",
          "Typical ischemic symptoms (crushing, radiating to left arm/jaw, diaphoresis)",
          "Inferior STEMI confirmed on ECG"
        ],
        "key_points": [
          "56yo male driver",
          "Cardiovascular risk factors (hypertension, hyperlipidemia, 30 pack-year smoking)",
          "Typical ischemic symptoms (crushing, radiating to left arm/jaw, diaphoresis)",
          "Inferior STEMI confirmed on ECG"
        ]
      },
      {
        "prompt": "What is your primary working diagnosis and two key differential diagnoses?",
        "question": "What is your primary working diagnosis and two key differential diagnoses?",
        "target_rubric": "Primary: Acute Inferior STEMI with RV involvement. Differentials: Aortic dissection (Type A with RCA occlusion), Acute Pulmonary Embolism.",
        "model_answer": "Primary: Acute Inferior STEMI with RV involvement. Differentials: Aortic dissection (Type A with RCA occlusion), Acute Pulmonary Embolism.",
        "max_marks": 10,
        "key_points_required": [
          "Inferior STEMI",
          "Right Ventricular involvement",
          "Aortic dissection",
          "Pulmonary embolism"
        ],
        "key_points": [
          "Inferior STEMI",
          "Right Ventricular involvement",
          "Aortic dissection",
          "Pulmonary embolism"
        ]
      },
      {
        "prompt": "Outline your immediate acute management plan in the next 15 minutes.",
        "question": "Outline your immediate acute management plan in the next 15 minutes.",
        "target_rubric": "Dual antiplatelet therapy (Aspirin 300mg + Ticagrelor 180mg), urgent cardiac cath lab activation for primary PCI, oxygen only if SpO2 < 94%, IV access, cautious fluid bolus for RV infarction, AVOID nitrates.",
        "model_answer": "Dual antiplatelet therapy (Aspirin 300mg + Ticagrelor 180mg), urgent cardiac cath lab activation for primary PCI, oxygen only if SpO2 < 94%, IV access, cautious fluid bolus for RV infarction, AVOID nitrates.",
        "max_marks": 10,
        "key_points_required": [
          "Activate Cath Lab / Primary PCI (< 90-120 min door-to-balloon)",
          "Dual antiplatelet therapy (Aspirin 300mg + P2Y12 inhibitor)",
          "IV access and baseline labs (FBC, U&E, Coag, Crossmatch)",
          "CAUTION/AVOID nitrates due to Right Ventricular preload dependence",
          "Analgesia (cautious IV morphine/antiemetic)"
        ],
        "key_points": [
          "Activate Cath Lab / Primary PCI (< 90-120 min door-to-balloon)",
          "Dual antiplatelet therapy (Aspirin 300mg + P2Y12 inhibitor)",
          "IV access and baseline labs (FBC, U&E, Coag, Crossmatch)",
          "CAUTION/AVOID nitrates due to Right Ventricular preload dependence",
          "Analgesia (cautious IV morphine/antiemetic)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Reflexive Nitrate Administration in RV Infarction",
        "description": "Prescribing GTN spray or IV nitrates automatically for inferior chest pain without inspecting V4R lead.",
        "trigger_condition": "Candidate orders sublingual GTN despite inferior STEMI with RV involvement.",
        "remediation_advice": "Always obtain right-sided lead V4R in inferior STEMIs. RV infarction leads to preload-dependence; nitrates cause sudden profound hypotension.",
        "trigger_keywords": [
          "nitrate",
          "gtn",
          "glyceryl trinitrate"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Premature Closure on Musculoskeletal / Gastric Pain",
        "description": "Accepting patient's initial explanation of 'gastric indigestion after oily lunch'.",
        "trigger_condition": "Candidate anchors on indigestion because pain started after eating.",
        "remediation_advice": "In patients over 50 with cardiovascular risk factors, epigastric/lower chest discomfort must be treated as acute coronary syndrome until an ECG proves otherwise.",
        "trigger_keywords": [
          "indigestion",
          "gastritis",
          "reflux",
          "gerd",
          "antacid"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "ortho_02": {
    "id": "ortho_02",
    "case_id": "ortho_02",
    "title": "Acute Lumbar Pain with Radiculopathy in a 32-Year-Old Athlete",
    "specialty": "Orthopedics / Spine Surgery",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Marcus Lee",
    "age": 32,
    "gender": "Male",
    "occupation": "Strength Coach & BJJ Competitor",
    "setting": "Orthopedic Acute Triage Clinic",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Severe lower back pain radiating down the left leg for 24 hours",
    "presenting_complaint": "Severe lower back pain radiating down the left leg for 24 hours",
    "opening_statement": "It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm.",
    "triage_vitals": {
      "Heart Rate": "82 bpm",
      "Blood Pressure": "128/78 mmHg",
      "Respiratory Rate": "16 /min",
      "Oxygen Saturation": "99% on room air",
      "Temperature": "36.7°C",
      "GCS": "15/15"
    },
    "background_context": "Marcus Lee, 32yo Male (Strength Coach & BJJ Competitor) at Orthopedic Acute Triage Clinic. You are the Orthopedic House Officer / Resident. Take a 7-minute history from Marcus. Characterize his symptoms, perform mandatory neurological safety screening, and address his expectations. You will then present your clinical appraisal and management decisions to the Consultant.",
    "brief": {
      "setting": "Orthopedic Acute Triage Clinic",
      "patient_name": "Marcus Lee",
      "age": 32,
      "gender": "Male",
      "occupation": "Strength Coach & BJJ Competitor",
      "presenting_complaint": "Severe lower back pain radiating down the left leg for 24 hours",
      "triage_vitals": {
        "Heart Rate": "82 bpm",
        "Blood Pressure": "128/78 mmHg",
        "Respiratory Rate": "16 /min",
        "Oxygen Saturation": "99% on room air",
        "Temperature": "36.7°C",
        "GCS": "15/15"
      },
      "instructions": "You are the Orthopedic House Officer / Resident. Take a 7-minute history from Marcus. Characterize his symptoms, perform mandatory neurological safety screening, and address his expectations. You will then present your clinical appraisal and management decisions to the Consultant."
    },
    "persona": {
      "name": "Marcus Lee",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+0%",
      "pain_level": 7,
      "temperament": "stoic",
      "behavioral_cues": [
        "Standing awkwardly, shifting weight onto his right leg",
        "Winces when attempting to sit down in the chair",
        "Frustrated that an injury might derail his upcoming competition"
      ]
    },
    "gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "how did it happen",
          "injury",
          "deadlift",
          "mechanism"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "how did it happen",
          "injury",
          "deadlift",
          "mechanism"
        ],
        "response_text": "It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm.",
        "response": "It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "radiation",
        "category": "socrates",
        "trigger_concepts": [
          "radiate",
          "shoot",
          "down the leg",
          "thigh",
          "calf",
          "foot",
          "sciatica"
        ],
        "triggers": [
          "radiate",
          "shoot",
          "down the leg",
          "thigh",
          "calf",
          "foot",
          "sciatica"
        ],
        "response_text": "Yes, it's shooting down my left buttock, through the back of my thigh, into the outside of my calf and all the way to my little toe. It feels like an electric shock.",
        "response": "Yes, it's shooting down my left buttock, through the back of my thigh, into the outside of my calf and all the way to my little toe. It feels like an electric shock.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "exacerbating_relieving",
        "category": "socrates",
        "trigger_concepts": [
          "worse",
          "better",
          "cough",
          "sneeze",
          "sitting",
          "walking",
          "bending"
        ],
        "triggers": [
          "worse",
          "better",
          "cough",
          "sneeze",
          "sitting",
          "walking",
          "bending"
        ],
        "response_text": "Sitting is agonizing; standing and pacing is slightly more bearable. When I sneezed this morning, a vicious jolt shot straight down my leg.",
        "response": "Sitting is agonizing; standing and pacing is slightly more bearable. When I sneezed this morning, a vicious jolt shot straight down my leg.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_bladder",
        "category": "red_flag",
        "trigger_concepts": [
          "urinate",
          "urine",
          "bladder",
          "peeing",
          "water",
          "incontinence",
          "flow",
          "retention",
          "stream",
          "hesitancy"
        ],
        "triggers": [
          "urinate",
          "urine",
          "bladder",
          "peeing",
          "water",
          "incontinence",
          "flow",
          "retention",
          "stream",
          "hesitancy"
        ],
        "response_text": "Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
        "response": "Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_saddle",
        "category": "red_flag",
        "trigger_concepts": [
          "numb",
          "saddle",
          "perineum",
          "wiping",
          "toilet paper",
          "groin",
          "genitals",
          "buttocks"
        ],
        "triggers": [
          "numb",
          "saddle",
          "perineum",
          "wiping",
          "toilet paper",
          "groin",
          "genitals",
          "buttocks"
        ],
        "response_text": "Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
        "response": "Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_bowel",
        "category": "red_flag",
        "trigger_concepts": [
          "bowel",
          "stool",
          "feces",
          "poop",
          "accident",
          "soiling",
          "anal control"
        ],
        "triggers": [
          "bowel",
          "stool",
          "feces",
          "poop",
          "accident",
          "soiling",
          "anal control"
        ],
        "response_text": "I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
        "response": "I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_motor_weakness",
        "category": "red_flag",
        "trigger_concepts": [
          "weakness",
          "trip",
          "tripping",
          "foot drop",
          "heel",
          "toe",
          "power",
          "limp"
        ],
        "triggers": [
          "weakness",
          "trip",
          "tripping",
          "foot drop",
          "heel",
          "toe",
          "power",
          "limp"
        ],
        "response_text": "My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
        "response": "My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_fever_weightloss",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "chills",
          "sweats",
          "weight loss",
          "cancer",
          "malignancy",
          "night pain"
        ],
        "triggers": [
          "fever",
          "chills",
          "sweats",
          "weight loss",
          "cancer",
          "malignancy",
          "night pain"
        ],
        "response_text": "No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
        "response": "No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas",
        "category": "ice",
        "trigger_concepts": [
          "what do you think",
          "ideas",
          "cause"
        ],
        "triggers": [
          "what do you think",
          "ideas",
          "cause"
        ],
        "response_text": "I figured it's just an acute L5/S1 disc bulge or bad facet joint lock. I've had minor back twinges before that resolved in a week.",
        "response": "I figured it's just an acute L5/S1 disc bulge or bad facet joint lock. I've had minor back twinges before that resolved in a week.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns_expectations",
        "category": "ice",
        "trigger_concepts": [
          "worried",
          "concern",
          "expectations",
          "goals",
          "competition",
          "compete"
        ],
        "triggers": [
          "worried",
          "concern",
          "expectations",
          "goals",
          "competition",
          "compete"
        ],
        "response_text": "My main worry is the Asian Championships in 3 weeks. I've cut weight and trained for 6 months for this. Can't you just give me a high-dose steroid shot or strong analgesics so I can keep training?",
        "response": "My main worry is the Asian Championships in 3 weeks. I've cut weight and trained for 6 months for this. Can't you just give me a high-dose steroid shot or strong analgesics so I can keep training?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_drugs",
        "category": "past_history",
        "trigger_concepts": [
          "past history",
          "medications",
          "supplements",
          "steroids",
          "illness"
        ],
        "triggers": [
          "past history",
          "medications",
          "supplements",
          "steroids",
          "illness"
        ],
        "response_text": "Fit and healthy, no chronic medical conditions. I take creatine, whey protein, and I took 400mg Ibuprofen this morning which barely took the edge off. No known drug allergies.",
        "response": "Fit and healthy, no chronic medical conditions. I take creatine, whey protein, and I took 400mg Ibuprofen this morning which barely took the edge off. No known drug allergies.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "how did it happen",
          "injury",
          "deadlift",
          "mechanism"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "how did it happen",
          "injury",
          "deadlift",
          "mechanism"
        ],
        "response_text": "It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm.",
        "response": "It started yesterday afternoon during hard sparring on the mats. I was defending a double-leg takedown and felt a sharp 'pop' in my lower back, followed by intense spasm.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "radiation",
        "category": "socrates",
        "trigger_concepts": [
          "radiate",
          "shoot",
          "down the leg",
          "thigh",
          "calf",
          "foot",
          "sciatica"
        ],
        "triggers": [
          "radiate",
          "shoot",
          "down the leg",
          "thigh",
          "calf",
          "foot",
          "sciatica"
        ],
        "response_text": "Yes, it's shooting down my left buttock, through the back of my thigh, into the outside of my calf and all the way to my little toe. It feels like an electric shock.",
        "response": "Yes, it's shooting down my left buttock, through the back of my thigh, into the outside of my calf and all the way to my little toe. It feels like an electric shock.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "exacerbating_relieving",
        "category": "socrates",
        "trigger_concepts": [
          "worse",
          "better",
          "cough",
          "sneeze",
          "sitting",
          "walking",
          "bending"
        ],
        "triggers": [
          "worse",
          "better",
          "cough",
          "sneeze",
          "sitting",
          "walking",
          "bending"
        ],
        "response_text": "Sitting is agonizing; standing and pacing is slightly more bearable. When I sneezed this morning, a vicious jolt shot straight down my leg.",
        "response": "Sitting is agonizing; standing and pacing is slightly more bearable. When I sneezed this morning, a vicious jolt shot straight down my leg.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_bladder",
        "category": "red_flag",
        "trigger_concepts": [
          "urinate",
          "urine",
          "bladder",
          "peeing",
          "water",
          "incontinence",
          "flow",
          "retention",
          "stream",
          "hesitancy"
        ],
        "triggers": [
          "urinate",
          "urine",
          "bladder",
          "peeing",
          "water",
          "incontinence",
          "flow",
          "retention",
          "stream",
          "hesitancy"
        ],
        "response_text": "Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
        "response": "Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_saddle",
        "category": "red_flag",
        "trigger_concepts": [
          "numb",
          "saddle",
          "perineum",
          "wiping",
          "toilet paper",
          "groin",
          "genitals",
          "buttocks"
        ],
        "triggers": [
          "numb",
          "saddle",
          "perineum",
          "wiping",
          "toilet paper",
          "groin",
          "genitals",
          "buttocks"
        ],
        "response_text": "Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
        "response": "Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_bowel",
        "category": "red_flag",
        "trigger_concepts": [
          "bowel",
          "stool",
          "feces",
          "poop",
          "accident",
          "soiling",
          "anal control"
        ],
        "triggers": [
          "bowel",
          "stool",
          "feces",
          "poop",
          "accident",
          "soiling",
          "anal control"
        ],
        "response_text": "I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
        "response": "I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_motor_weakness",
        "category": "red_flag",
        "trigger_concepts": [
          "weakness",
          "trip",
          "tripping",
          "foot drop",
          "heel",
          "toe",
          "power",
          "limp"
        ],
        "triggers": [
          "weakness",
          "trip",
          "tripping",
          "foot drop",
          "heel",
          "toe",
          "power",
          "limp"
        ],
        "response_text": "My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
        "response": "My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_fever_weightloss",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "chills",
          "sweats",
          "weight loss",
          "cancer",
          "malignancy",
          "night pain"
        ],
        "triggers": [
          "fever",
          "chills",
          "sweats",
          "weight loss",
          "cancer",
          "malignancy",
          "night pain"
        ],
        "response_text": "No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
        "response": "No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas",
        "category": "ice",
        "trigger_concepts": [
          "what do you think",
          "ideas",
          "cause"
        ],
        "triggers": [
          "what do you think",
          "ideas",
          "cause"
        ],
        "response_text": "I figured it's just an acute L5/S1 disc bulge or bad facet joint lock. I've had minor back twinges before that resolved in a week.",
        "response": "I figured it's just an acute L5/S1 disc bulge or bad facet joint lock. I've had minor back twinges before that resolved in a week.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns_expectations",
        "category": "ice",
        "trigger_concepts": [
          "worried",
          "concern",
          "expectations",
          "goals",
          "competition",
          "compete"
        ],
        "triggers": [
          "worried",
          "concern",
          "expectations",
          "goals",
          "competition",
          "compete"
        ],
        "response_text": "My main worry is the Asian Championships in 3 weeks. I've cut weight and trained for 6 months for this. Can't you just give me a high-dose steroid shot or strong analgesics so I can keep training?",
        "response": "My main worry is the Asian Championships in 3 weeks. I've cut weight and trained for 6 months for this. Can't you just give me a high-dose steroid shot or strong analgesics so I can keep training?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_drugs",
        "category": "past_history",
        "trigger_concepts": [
          "past history",
          "medications",
          "supplements",
          "steroids",
          "illness"
        ],
        "triggers": [
          "past history",
          "medications",
          "supplements",
          "steroids",
          "illness"
        ],
        "response_text": "Fit and healthy, no chronic medical conditions. I take creatine, whey protein, and I took 400mg Ibuprofen this morning which barely took the edge off. No known drug allergies.",
        "response": "Fit and healthy, no chronic medical conditions. I take creatine, whey protein, and I took 400mg Ibuprofen this morning which barely took the edge off. No known drug allergies.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "red_flag_bladder",
        "label": "Red Flag Bladder",
        "triggers": [
          "urinate",
          "urine",
          "bladder",
          "peeing",
          "water",
          "incontinence",
          "flow",
          "retention",
          "stream",
          "hesitancy"
        ],
        "response": "Now that you mention it, doctor... I stood over the toilet for 5 minutes this morning trying to pee, and only a weak dribble came out. My bladder feels uncomfortably full, but I can't seem to empty it properly.",
        "mandatory": true
      },
      {
        "key": "red_flag_saddle",
        "label": "Red Flag Saddle",
        "triggers": [
          "numb",
          "saddle",
          "perineum",
          "wiping",
          "toilet paper",
          "groin",
          "genitals",
          "buttocks"
        ],
        "response": "Actually... when I was wiping myself after bowel movement earlier, it felt completely bizarre. Numb, like paper or thick cardboard touching my skin around my private parts and anus.",
        "mandatory": true
      },
      {
        "key": "red_flag_bowel",
        "label": "Red Flag Bowel",
        "triggers": [
          "bowel",
          "stool",
          "feces",
          "poop",
          "accident",
          "soiling",
          "anal control"
        ],
        "response": "I haven't soiled myself, but I felt like I couldn't squeeze or tighten my anal muscles normally.",
        "mandatory": true
      },
      {
        "key": "red_flag_motor_weakness",
        "label": "Red Flag Motor Weakness",
        "triggers": [
          "weakness",
          "trip",
          "tripping",
          "foot drop",
          "heel",
          "toe",
          "power",
          "limp"
        ],
        "response": "My left foot feels clumsy. My toes caught on the carpet twice this morning, like I can't lift my foot up properly when stepping forward.",
        "mandatory": true
      },
      {
        "key": "red_flag_fever_weightloss",
        "label": "Red Flag Fever Weightloss",
        "triggers": [
          "fever",
          "chills",
          "sweats",
          "weight loss",
          "cancer",
          "malignancy",
          "night pain"
        ],
        "response": "No fevers, no unexpected weight loss, and no history of cancer. The pain does wake me up at night if I roll onto my back though.",
        "mandatory": false
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Bedside Post-Void Bladder Ultrasound Scan",
      "description": "You perform a quick bedside point-of-care bladder ultrasound immediately after the patient attempts to void.",
      "new_finding": "Bedside Post-Void Bladder Ultrasound Scan — Pre-void bladder volume: 720 mL; Voided volume: 40 mL (weak dribble); Post-Void Residual (PVR): 680 mL (Significant painless urinary retention, normal < 50-100 mL).",
      "findings": {
        "Pre-void bladder volume": "720 mL",
        "Voided volume": "40 mL (weak dribble)",
        "Post-Void Residual (PVR)": "680 mL (Significant painless urinary retention, normal < 50-100 mL)."
      },
      "expected_shifts": {
        "Cauda Equina Syndrome (CES-R / with retention)": 2,
        "Uncomplicated Lumbar Radiculopathy / Sciatica": -2,
        "Mechanical Musculoskeletal Back Strain": -2
      },
      "expert_rationale": "A post-void residual urine volume > 200 mL in the presence of saddle numbness, bilateral/radicular neurological deficits, and severe back pain establishes Cauda Equina Syndrome with Retention (CES-R). This is an absolute surgical emergency requiring immediate emergent MRI whole spine and urgent decompression within 24-48 hours to prevent irreversible neurological and sphincter disability."
    },
    "differentials": [
      {
        "name": "Cauda Equina Syndrome (CES-R secondary to massive central lumbar disc prolapse)",
        "tier": "primary",
        "supporting_features": [
          "Saddle anesthesia (numbness when wiping)",
          "Urinary retention with overflow (PVR 680 mL)",
          "Objective motor weakness (foot drop/L5 weakness)",
          "Radicular pain shooting down S1 dermatome",
          "Acute mechanical trigger (heavy spinal loading in flexion/rotation)"
        ],
        "refuting_features": [],
        "prior_probability": 0.4,
        "posterior_probability": 0.99
      },
      {
        "name": "Uncomplicated Lumbar Disc Herniation (L5/S1 Radiculopathy)",
        "tier": "secondary",
        "supporting_features": [
          "Dermatomal shooting pain, positive Valsalva jolt"
        ],
        "refuting_features": [
          "Cannot account for urinary retention and bilateral saddle anesthesia (involvement of S2-S4 cauda equina roots)"
        ],
        "prior_probability": 0.55,
        "posterior_probability": 0.01
      },
      {
        "name": "Spinal Epidural Abscess or Hematoma",
        "tier": "must_not_miss",
        "supporting_features": [
          "Rapid onset cauda equina compression"
        ],
        "refuting_features": [
          "Afebrile, no IV drug use, no spinal interventions, normal inflammatory markers"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Cauda Equina Syndrome (CES-R secondary to massive central lumbar disc prolapse)",
        "tier": "primary",
        "supporting_features": [
          "Saddle anesthesia (numbness when wiping)",
          "Urinary retention with overflow (PVR 680 mL)",
          "Objective motor weakness (foot drop/L5 weakness)",
          "Radicular pain shooting down S1 dermatome",
          "Acute mechanical trigger (heavy spinal loading in flexion/rotation)"
        ],
        "refuting_features": [],
        "prior_probability": 0.4,
        "posterior_probability": 0.99
      },
      {
        "name": "Uncomplicated Lumbar Disc Herniation (L5/S1 Radiculopathy)",
        "tier": "secondary",
        "supporting_features": [
          "Dermatomal shooting pain, positive Valsalva jolt"
        ],
        "refuting_features": [
          "Cannot account for urinary retention and bilateral saddle anesthesia (involvement of S2-S4 cauda equina roots)"
        ],
        "prior_probability": 0.55,
        "posterior_probability": 0.01
      },
      {
        "name": "Spinal Epidural Abscess or Hematoma",
        "tier": "must_not_miss",
        "supporting_features": [
          "Rapid onset cauda equina compression"
        ],
        "refuting_features": [
          "Afebrile, no IV drug use, no spinal interventions, normal inflammatory markers"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your clinical synthesis and primary diagnosis in 60 seconds to the Orthopedic Consultant.",
        "question": "Present your clinical synthesis and primary diagnosis in 60 seconds to the Orthopedic Consultant.",
        "target_rubric": "Clear identification of Cauda Equina Syndrome with urinary retention secondary to acute lumbar disc herniation in a 32yo athlete, highlighting saddle anesthesia and 680mL PVR.",
        "model_answer": "Clear identification of Cauda Equina Syndrome with urinary retention secondary to acute lumbar disc herniation in a 32yo athlete, highlighting saddle anesthesia and 680mL PVR.",
        "max_marks": 10,
        "key_points_required": [
          "32yo athlete presenting with acute lumbar radiculopathy",
          "Presence of definitive cauda equina red flags (saddle anesthesia, urinary retention with 680mL PVR, motor weakness)",
          "Primary diagnosis: Cauda Equina Syndrome with retention (CES-R)",
          "Recognition as an orthopedic/spinal surgical emergency"
        ],
        "key_points": [
          "32yo athlete presenting with acute lumbar radiculopathy",
          "Presence of definitive cauda equina red flags (saddle anesthesia, urinary retention with 680mL PVR, motor weakness)",
          "Primary diagnosis: Cauda Equina Syndrome with retention (CES-R)",
          "Recognition as an orthopedic/spinal surgical emergency"
        ]
      },
      {
        "prompt": "What is your immediate diagnostic investigation of choice, and what is the target timeframe?",
        "question": "What is your immediate diagnostic investigation of choice, and what is the target timeframe?",
        "target_rubric": "Emergent Non-contrast MRI Whole Spine (or Lumbar Spine) performed within 4 hours.",
        "model_answer": "Emergent Non-contrast MRI Whole Spine (or Lumbar Spine) performed within 4 hours.",
        "max_marks": 10,
        "key_points_required": [
          "Emergent MRI Whole Spine (or Lumbar Spine)",
          "Urgent imaging window (immediately / within 4-6 hours)",
          "Check for contraindications to MRI (pacemakers, metal foreign bodies)"
        ],
        "key_points": [
          "Emergent MRI Whole Spine (or Lumbar Spine)",
          "Urgent imaging window (immediately / within 4-6 hours)",
          "Check for contraindications to MRI (pacemakers, metal foreign bodies)"
        ]
      },
      {
        "prompt": "How will you counsel Marcus regarding his desire to compete in 3 weeks, and what is the operative plan?",
        "question": "How will you counsel Marcus regarding his desire to compete in 3 weeks, and what is the operative plan?",
        "target_rubric": "Firm, empathetic counseling explaining the risk of permanent paralysis and sexual/bladder dysfunction if untreated; strict non-weight bearing, emergent surgical decompression (microdiscectomy/laminectomy).",
        "model_answer": "Firm, empathetic counseling explaining the risk of permanent paralysis and sexual/bladder dysfunction if untreated; strict non-weight bearing, emergent surgical decompression (microdiscectomy/laminectomy).",
        "max_marks": 10,
        "key_points_required": [
          "Break difficult news empathetically but firmly: competition is impossible and unsafe",
          "Explain permanent risks of non-intervention (permanent urinary/bowel incontinence, loss of sexual function, motor paralysis)",
          "Immediate pre-op preparation: NPO/fasting, urinary catheterization with careful monitoring, urgent spinal surgery team booking for decompression"
        ],
        "key_points": [
          "Break difficult news empathetically but firmly: competition is impossible and unsafe",
          "Explain permanent risks of non-intervention (permanent urinary/bowel incontinence, loss of sexual function, motor paralysis)",
          "Immediate pre-op preparation: NPO/fasting, urinary catheterization with careful monitoring, urgent spinal surgery team booking for decompression"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your clinical synthesis and primary diagnosis in 60 seconds to the Orthopedic Consultant.",
        "question": "Present your clinical synthesis and primary diagnosis in 60 seconds to the Orthopedic Consultant.",
        "target_rubric": "Clear identification of Cauda Equina Syndrome with urinary retention secondary to acute lumbar disc herniation in a 32yo athlete, highlighting saddle anesthesia and 680mL PVR.",
        "model_answer": "Clear identification of Cauda Equina Syndrome with urinary retention secondary to acute lumbar disc herniation in a 32yo athlete, highlighting saddle anesthesia and 680mL PVR.",
        "max_marks": 10,
        "key_points_required": [
          "32yo athlete presenting with acute lumbar radiculopathy",
          "Presence of definitive cauda equina red flags (saddle anesthesia, urinary retention with 680mL PVR, motor weakness)",
          "Primary diagnosis: Cauda Equina Syndrome with retention (CES-R)",
          "Recognition as an orthopedic/spinal surgical emergency"
        ],
        "key_points": [
          "32yo athlete presenting with acute lumbar radiculopathy",
          "Presence of definitive cauda equina red flags (saddle anesthesia, urinary retention with 680mL PVR, motor weakness)",
          "Primary diagnosis: Cauda Equina Syndrome with retention (CES-R)",
          "Recognition as an orthopedic/spinal surgical emergency"
        ]
      },
      {
        "prompt": "What is your immediate diagnostic investigation of choice, and what is the target timeframe?",
        "question": "What is your immediate diagnostic investigation of choice, and what is the target timeframe?",
        "target_rubric": "Emergent Non-contrast MRI Whole Spine (or Lumbar Spine) performed within 4 hours.",
        "model_answer": "Emergent Non-contrast MRI Whole Spine (or Lumbar Spine) performed within 4 hours.",
        "max_marks": 10,
        "key_points_required": [
          "Emergent MRI Whole Spine (or Lumbar Spine)",
          "Urgent imaging window (immediately / within 4-6 hours)",
          "Check for contraindications to MRI (pacemakers, metal foreign bodies)"
        ],
        "key_points": [
          "Emergent MRI Whole Spine (or Lumbar Spine)",
          "Urgent imaging window (immediately / within 4-6 hours)",
          "Check for contraindications to MRI (pacemakers, metal foreign bodies)"
        ]
      },
      {
        "prompt": "How will you counsel Marcus regarding his desire to compete in 3 weeks, and what is the operative plan?",
        "question": "How will you counsel Marcus regarding his desire to compete in 3 weeks, and what is the operative plan?",
        "target_rubric": "Firm, empathetic counseling explaining the risk of permanent paralysis and sexual/bladder dysfunction if untreated; strict non-weight bearing, emergent surgical decompression (microdiscectomy/laminectomy).",
        "model_answer": "Firm, empathetic counseling explaining the risk of permanent paralysis and sexual/bladder dysfunction if untreated; strict non-weight bearing, emergent surgical decompression (microdiscectomy/laminectomy).",
        "max_marks": 10,
        "key_points_required": [
          "Break difficult news empathetically but firmly: competition is impossible and unsafe",
          "Explain permanent risks of non-intervention (permanent urinary/bowel incontinence, loss of sexual function, motor paralysis)",
          "Immediate pre-op preparation: NPO/fasting, urinary catheterization with careful monitoring, urgent spinal surgery team booking for decompression"
        ],
        "key_points": [
          "Break difficult news empathetically but firmly: competition is impossible and unsafe",
          "Explain permanent risks of non-intervention (permanent urinary/bowel incontinence, loss of sexual function, motor paralysis)",
          "Immediate pre-op preparation: NPO/fasting, urinary catheterization with careful monitoring, urgent spinal surgery team booking for decompression"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Omission of Cauda Equina Screen in Young Fit Athletes",
        "description": "Assuming young, heavily muscled athletes only have musculoskeletal strain and failing to directly ask about saddle numbness or bladder control.",
        "trigger_condition": "Candidate fails to inquire about urine/bowel habits or saddle anesthesia.",
        "remediation_advice": "EVERY patient with acute back pain and radiculopathy must be asked explicit red-flag questions for cauda equina syndrome. Missing CES can result in permanent catastrophic neurological disability and immediate medicolegal failure.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": [
          "red_flag_bladder",
          "red_flag_saddle"
        ]
      },
      {
        "trap_name": "Compliance Bias / Downplaying Patient Symptoms to Please Them",
        "description": "Agreeing to patient's plea for painkillers or steroid shots to allow them to compete.",
        "trigger_condition": "Candidate suggests conservative management or injections instead of urgent MRI.",
        "remediation_advice": "Never compromise patient safety for sports deadlines. Explain the irreversible pathology clearly.",
        "trigger_keywords": [
          "physiotherapy",
          "physio",
          "send home",
          "discharge",
          "simple analgesia"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "neuro_03": {
    "id": "neuro_03",
    "case_id": "neuro_03",
    "title": "Hyperacute Severe Headache in a 42-Year-Old Woman",
    "specialty": "Neurology / Emergency Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Sarah Jenkins",
    "age": 42,
    "gender": "Female",
    "occupation": "Secondary School Teacher",
    "setting": "Emergency Department Urgent Bay",
    "voice_preset": "en-GB-SoniaNeural",
    "chief_complaint": "Sudden, excruciating occipital headache that started 3 hours ago",
    "presenting_complaint": "Sudden, excruciating occipital headache that started 3 hours ago",
    "opening_statement": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
    "triage_vitals": {
      "Heart Rate": "104 bpm",
      "Blood Pressure": "162/96 mmHg",
      "Respiratory Rate": "18 /min",
      "Oxygen Saturation": "98% on room air",
      "Temperature": "37.1°C",
      "GCS": "15/15"
    },
    "background_context": "Sarah Jenkins, 42yo Female (Secondary School Teacher) at Emergency Department Urgent Bay. You are the Emergency Medical Officer. Take a focused 7-minute history from Sarah. Characterize the onset and features of the headache, screen for critical intracranial emergencies, and address her concerns. An interim result will arrive, followed by your presentation to the Consultant.",
    "brief": {
      "setting": "Emergency Department Urgent Bay",
      "patient_name": "Sarah Jenkins",
      "age": 42,
      "gender": "Female",
      "occupation": "Secondary School Teacher",
      "presenting_complaint": "Sudden, excruciating occipital headache that started 3 hours ago",
      "triage_vitals": {
        "Heart Rate": "104 bpm",
        "Blood Pressure": "162/96 mmHg",
        "Respiratory Rate": "18 /min",
        "Oxygen Saturation": "98% on room air",
        "Temperature": "37.1°C",
        "GCS": "15/15"
      },
      "instructions": "You are the Emergency Medical Officer. Take a focused 7-minute history from Sarah. Characterize the onset and features of the headache, screen for critical intracranial emergencies, and address her concerns. An interim result will arrive, followed by your presentation to the Consultant."
    },
    "persona": {
      "name": "Sarah Jenkins",
      "voice_id": "en-GB-SoniaNeural",
      "speech_rate": "-5%",
      "pain_level": 9,
      "temperament": "distressed",
      "behavioral_cues": [
        "Shielding her eyes from room lights (photophobia)",
        "Holding the back of her head and neck, avoiding neck flexion",
        "Nauseous, keeping an emesis bowl nearby"
      ]
    },
    "gates": [
      {
        "key": "onset_timing",
        "category": "socrates",
        "trigger_concepts": [
          "onset",
          "start",
          "how fast",
          "how quickly",
          "seconds",
          "minutes",
          "thunderclap",
          "peak"
        ],
        "triggers": [
          "onset",
          "start",
          "how fast",
          "how quickly",
          "seconds",
          "minutes",
          "thunderclap",
          "peak"
        ],
        "response_text": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
        "response": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "site_character",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "describe",
          "feel like",
          "throbbing",
          "dull",
          "occipital",
          "neck",
          "location"
        ],
        "triggers": [
          "where",
          "describe",
          "feel like",
          "throbbing",
          "dull",
          "occipital",
          "neck",
          "location"
        ],
        "response_text": "It's concentrated at the base of my skull and the back of my neck. An intense, explosive, throbbing agony.",
        "response": "It's concentrated at the base of my skull and the back of my neck. An intense, explosive, throbbing agony.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "trigger_valsalva",
        "category": "socrates",
        "trigger_concepts": [
          "what were you doing",
          "trigger",
          "activity",
          "cough",
          "straining",
          "exercise",
          "lifting"
        ],
        "triggers": [
          "what were you doing",
          "trigger",
          "activity",
          "cough",
          "straining",
          "exercise",
          "lifting"
        ],
        "response_text": "I was lifting a heavy stack of textbooks and coughing during class when it suddenly struck.",
        "response": "I was lifting a heavy stack of textbooks and coughing during class when it suddenly struck.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_meningism",
        "category": "red_flag",
        "trigger_concepts": [
          "neck stiff",
          "stiffness",
          "chin to chest",
          "light",
          "bright",
          "photophobia",
          "eyes"
        ],
        "triggers": [
          "neck stiff",
          "stiffness",
          "chin to chest",
          "light",
          "bright",
          "photophobia",
          "eyes"
        ],
        "response_text": "Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
        "response": "Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_neuro_deficits",
        "category": "red_flag",
        "trigger_concepts": [
          "vision",
          "double vision",
          "blur",
          "weakness",
          "arm",
          "face",
          "speech",
          "slur",
          "seizure",
          "fit"
        ],
        "triggers": [
          "vision",
          "double vision",
          "blur",
          "weakness",
          "arm",
          "face",
          "speech",
          "slur",
          "seizure",
          "fit"
        ],
        "response_text": "I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
        "response": "I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_systemic",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "rash",
          "temperature",
          "infection",
          "shivering"
        ],
        "triggers": [
          "fever",
          "rash",
          "temperature",
          "infection",
          "shivering"
        ],
        "response_text": "No high fever or purple rashes on my skin.",
        "response": "No high fever or purple rashes on my skin.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns_ideas",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "afraid",
          "fear",
          "thoughts",
          "what do you think",
          "family"
        ],
        "triggers": [
          "worry",
          "afraid",
          "fear",
          "thoughts",
          "what do you think",
          "family"
        ],
        "response_text": "Doctor... my mother's sister collapsed and died of a ruptured brain aneurysm when she was 45. Is that what this is? Am I having a brain hemorrhage like my aunt?",
        "response": "Doctor... my mother's sister collapsed and died of a ruptured brain aneurysm when she was 45. Is that what this is? Am I having a brain hemorrhage like my aunt?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "scan",
          "test"
        ],
        "triggers": [
          "expect",
          "hoping",
          "scan",
          "test"
        ],
        "response_text": "I feel I need a brain scan right away. Please don't tell me this is just a stress migraine.",
        "response": "I feel I need a brain scan right away. Please don't tell me this is just a stress migraine.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_headaches",
        "category": "past_history",
        "trigger_concepts": [
          "previous headache",
          "migraine",
          "history of headache",
          "ever had this before",
          "medications"
        ],
        "triggers": [
          "previous headache",
          "migraine",
          "history of headache",
          "ever had this before",
          "medications"
        ],
        "response_text": "I get occasional tension headaches at the end of a busy school term, but NOTHING ever remotely like this. This is completely different. I don't take regular medications other than the combined contraceptive pill.",
        "response": "I get occasional tension headaches at the end of a busy school term, but NOTHING ever remotely like this. This is completely different. I don't take regular medications other than the combined contraceptive pill.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "onset_timing",
        "category": "socrates",
        "trigger_concepts": [
          "onset",
          "start",
          "how fast",
          "how quickly",
          "seconds",
          "minutes",
          "thunderclap",
          "peak"
        ],
        "triggers": [
          "onset",
          "start",
          "how fast",
          "how quickly",
          "seconds",
          "minutes",
          "thunderclap",
          "peak"
        ],
        "response_text": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
        "response": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "site_character",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "describe",
          "feel like",
          "throbbing",
          "dull",
          "occipital",
          "neck",
          "location"
        ],
        "triggers": [
          "where",
          "describe",
          "feel like",
          "throbbing",
          "dull",
          "occipital",
          "neck",
          "location"
        ],
        "response_text": "It's concentrated at the base of my skull and the back of my neck. An intense, explosive, throbbing agony.",
        "response": "It's concentrated at the base of my skull and the back of my neck. An intense, explosive, throbbing agony.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "trigger_valsalva",
        "category": "socrates",
        "trigger_concepts": [
          "what were you doing",
          "trigger",
          "activity",
          "cough",
          "straining",
          "exercise",
          "lifting"
        ],
        "triggers": [
          "what were you doing",
          "trigger",
          "activity",
          "cough",
          "straining",
          "exercise",
          "lifting"
        ],
        "response_text": "I was lifting a heavy stack of textbooks and coughing during class when it suddenly struck.",
        "response": "I was lifting a heavy stack of textbooks and coughing during class when it suddenly struck.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "red_flag_meningism",
        "category": "red_flag",
        "trigger_concepts": [
          "neck stiff",
          "stiffness",
          "chin to chest",
          "light",
          "bright",
          "photophobia",
          "eyes"
        ],
        "triggers": [
          "neck stiff",
          "stiffness",
          "chin to chest",
          "light",
          "bright",
          "photophobia",
          "eyes"
        ],
        "response_text": "Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
        "response": "Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_neuro_deficits",
        "category": "red_flag",
        "trigger_concepts": [
          "vision",
          "double vision",
          "blur",
          "weakness",
          "arm",
          "face",
          "speech",
          "slur",
          "seizure",
          "fit"
        ],
        "triggers": [
          "vision",
          "double vision",
          "blur",
          "weakness",
          "arm",
          "face",
          "speech",
          "slur",
          "seizure",
          "fit"
        ],
        "response_text": "I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
        "response": "I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "red_flag_systemic",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "rash",
          "temperature",
          "infection",
          "shivering"
        ],
        "triggers": [
          "fever",
          "rash",
          "temperature",
          "infection",
          "shivering"
        ],
        "response_text": "No high fever or purple rashes on my skin.",
        "response": "No high fever or purple rashes on my skin.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_concerns_ideas",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "afraid",
          "fear",
          "thoughts",
          "what do you think",
          "family"
        ],
        "triggers": [
          "worry",
          "afraid",
          "fear",
          "thoughts",
          "what do you think",
          "family"
        ],
        "response_text": "Doctor... my mother's sister collapsed and died of a ruptured brain aneurysm when she was 45. Is that what this is? Am I having a brain hemorrhage like my aunt?",
        "response": "Doctor... my mother's sister collapsed and died of a ruptured brain aneurysm when she was 45. Is that what this is? Am I having a brain hemorrhage like my aunt?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "scan",
          "test"
        ],
        "triggers": [
          "expect",
          "hoping",
          "scan",
          "test"
        ],
        "response_text": "I feel I need a brain scan right away. Please don't tell me this is just a stress migraine.",
        "response": "I feel I need a brain scan right away. Please don't tell me this is just a stress migraine.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_headaches",
        "category": "past_history",
        "trigger_concepts": [
          "previous headache",
          "migraine",
          "history of headache",
          "ever had this before",
          "medications"
        ],
        "triggers": [
          "previous headache",
          "migraine",
          "history of headache",
          "ever had this before",
          "medications"
        ],
        "response_text": "I get occasional tension headaches at the end of a busy school term, but NOTHING ever remotely like this. This is completely different. I don't take regular medications other than the combined contraceptive pill.",
        "response": "I get occasional tension headaches at the end of a busy school term, but NOTHING ever remotely like this. This is completely different. I don't take regular medications other than the combined contraceptive pill.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "onset_timing",
        "label": "Onset Timing",
        "triggers": [
          "onset",
          "start",
          "how fast",
          "how quickly",
          "seconds",
          "minutes",
          "thunderclap",
          "peak"
        ],
        "response": "It hit me like a baseball bat to the back of the head, doctor. Literally within 20 or 30 seconds it went from zero to the worst pain I have ever felt in my life.",
        "mandatory": true
      },
      {
        "key": "red_flag_meningism",
        "label": "Red Flag Meningism",
        "triggers": [
          "neck stiff",
          "stiffness",
          "chin to chest",
          "light",
          "bright",
          "photophobia",
          "eyes"
        ],
        "response": "Yes! The fluorescent light in this room feels like needles in my eyes, and my neck feels so rigid I can't touch my chin to my chest without crying out.",
        "mandatory": true
      },
      {
        "key": "red_flag_neuro_deficits",
        "label": "Red Flag Neuro Deficits",
        "triggers": [
          "vision",
          "double vision",
          "blur",
          "weakness",
          "arm",
          "face",
          "speech",
          "slur",
          "seizure",
          "fit"
        ],
        "response": "I felt momentarily dizzy and saw double for a few seconds right after it struck, but no seizure, and my speech and arms feel normal.",
        "mandatory": true
      },
      {
        "key": "red_flag_systemic",
        "label": "Red Flag Systemic",
        "triggers": [
          "fever",
          "rash",
          "temperature",
          "infection",
          "shivering"
        ],
        "response": "No high fever or purple rashes on my skin.",
        "mandatory": false
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency Non-Contrast Head CT Scan Result",
      "description": "The non-contrast CT brain performed 3.5 hours post-onset is reviewed by the on-call radiologist.",
      "new_finding": "Emergency Non-Contrast Head CT Scan Result — CT Brain (Non-contrast): No hyperdense blood identified in the basal cisterns, sylvian fissures, or ventricles. Gray-white differentiation preserved. No acute intracranial hemorrhage or mass effect seen.",
      "findings": {
        "CT Brain (Non-contrast)": "No hyperdense blood identified in the basal cisterns, sylvian fissures, or ventricles. Gray-white differentiation preserved. No acute intracranial hemorrhage or mass effect seen."
      },
      "expected_shifts": {
        "Aneurysmal Subarachnoid Hemorrhage (SAH)": -1,
        "Migraine without Aura": 1,
        "Cerebral Venous Sinus Thrombosis (CVST)": 0,
        "Bacterial / Viral Meningitis": 0
      },
      "expert_rationale": "While a high-resolution 3rd-generation CT brain within 6 hours has high sensitivity (~98%), it DOES NOT exclude an SAH. Under international (NICE / ACEP) guidelines, a patient with a convincing thunderclap headache and a negative head CT must undergo a Lumbar Puncture performed at least 12 hours after symptom onset to assess for CSF spectrophotometry / xanthochromia, or CT Angiography."
    },
    "differentials": [
      {
        "name": "Subarachnoid Hemorrhage (Ruptured Saccular/Berry Aneurysm)",
        "tier": "primary",
        "supporting_features": [
          "Hyperacute onset (< 1 min to peak)",
          "Severe occipital pain with meningism and photophobia",
          "Family history of sudden aneurysm death in 1st/2nd degree relative"
        ],
        "refuting_features": [
          "Initial non-contrast CT brain is reported normal (sensitivity ~98% at <6h)"
        ],
        "prior_probability": 0.7,
        "posterior_probability": 0.2
      },
      {
        "name": "Cerebral Venous Sinus Thrombosis (CVST)",
        "tier": "secondary",
        "supporting_features": [
          "Severe headache in female on combined oral contraceptive pill"
        ],
        "refuting_features": [
          "Typically more progressive onset rather than thunderclap, normal non-contrast CT"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.35
      },
      {
        "name": "First-Presentation Severe Migraine with Aura",
        "tier": "secondary",
        "supporting_features": [
          "Photophobia, nausea, visual symptoms"
        ],
        "refuting_features": [
          "Thunderclap onset reaching maximum intensity in <1 minute is highly atypical for migraine"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.4
      }
    ],
    "expected_differentials": [
      {
        "name": "Subarachnoid Hemorrhage (Ruptured Saccular/Berry Aneurysm)",
        "tier": "primary",
        "supporting_features": [
          "Hyperacute onset (< 1 min to peak)",
          "Severe occipital pain with meningism and photophobia",
          "Family history of sudden aneurysm death in 1st/2nd degree relative"
        ],
        "refuting_features": [
          "Initial non-contrast CT brain is reported normal (sensitivity ~98% at <6h)"
        ],
        "prior_probability": 0.7,
        "posterior_probability": 0.2
      },
      {
        "name": "Cerebral Venous Sinus Thrombosis (CVST)",
        "tier": "secondary",
        "supporting_features": [
          "Severe headache in female on combined oral contraceptive pill"
        ],
        "refuting_features": [
          "Typically more progressive onset rather than thunderclap, normal non-contrast CT"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.35
      },
      {
        "name": "First-Presentation Severe Migraine with Aura",
        "tier": "secondary",
        "supporting_features": [
          "Photophobia, nausea, visual symptoms"
        ],
        "refuting_features": [
          "Thunderclap onset reaching maximum intensity in <1 minute is highly atypical for migraine"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.4
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second summary and clinical differential to the Emergency Medicine Consultant.",
        "question": "Present your 60-second summary and clinical differential to the Emergency Medicine Consultant.",
        "target_rubric": "SBAR presentation: 42yo woman on OCP with family history of aneurysm presenting with a definitive thunderclap headache (<30s peak), meningism, and photophobia. Top differential remains SAH until excluded.",
        "model_answer": "SBAR presentation: 42yo woman on OCP with family history of aneurysm presenting with a definitive thunderclap headache (<30s peak), meningism, and photophobia. Top differential remains SAH until excluded.",
        "max_marks": 10,
        "key_points_required": [
          "42yo female",
          "Thunderclap onset (peak < 1 min)",
          "Meningismus and photophobia",
          "Family history of intracranial aneurysm",
          "Working diagnosis: Subarachnoid Hemorrhage vs CVST"
        ],
        "key_points": [
          "42yo female",
          "Thunderclap onset (peak < 1 min)",
          "Meningismus and photophobia",
          "Family history of intracranial aneurysm",
          "Working diagnosis: Subarachnoid Hemorrhage vs CVST"
        ]
      },
      {
        "prompt": "The CT brain was reported as normal. Does this safely exclude a Subarachnoid Hemorrhage? What is your mandatory next diagnostic step?",
        "question": "The CT brain was reported as normal. Does this safely exclude a Subarachnoid Hemorrhage? What is your mandatory next diagnostic step?",
        "target_rubric": "NO, normal CT does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture at least 12 hours post-onset for CSF spectrophotometry (xanthochromia) and cell count in tubes 1 and 4 (to differentiate traumatic tap).",
        "model_answer": "NO, normal CT does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture at least 12 hours post-onset for CSF spectrophotometry (xanthochromia) and cell count in tubes 1 and 4 (to differentiate traumatic tap).",
        "max_marks": 10,
        "key_points_required": [
          "CT does not 100% exclude SAH (small bleed / late presentation)",
          "Perform Lumbar Puncture",
          "Timing: at least 12 hours post-headache onset to allow bilirubin formation",
          "Test CSF for xanthochromia via spectrophotometry",
          "Compare RBC count between tube 1 and tube 4 to rule out traumatic tap"
        ],
        "key_points": [
          "CT does not 100% exclude SAH (small bleed / late presentation)",
          "Perform Lumbar Puncture",
          "Timing: at least 12 hours post-headache onset to allow bilirubin formation",
          "Test CSF for xanthochromia via spectrophotometry",
          "Compare RBC count between tube 1 and tube 4 to rule out traumatic tap"
        ]
      },
      {
        "prompt": "What acute supportive and preventative pharmacological measures will you initiate right now?",
        "question": "What acute supportive and preventative pharmacological measures will you initiate right now?",
        "target_rubric": "Analgesia, IV fluids, antiemetics, blood pressure control, Nimodipine 60mg every 4 hours to prevent vasospasm/delayed cerebral ischemia, neurosurgical alert.",
        "model_answer": "Analgesia, IV fluids, antiemetics, blood pressure control, Nimodipine 60mg every 4 hours to prevent vasospasm/delayed cerebral ischemia, neurosurgical alert.",
        "max_marks": 10,
        "key_points_required": [
          "Nimodipine (60mg PO q4h) for vasospasm prevention",
          "Blood pressure management (avoid severe peaks, maintain SBP < 140-160)",
          "Analgesia (avoid NSAIDs/aspirin before bleed exclusion; use paracetamol / opioids)",
          "Antiemetics (e.g. Ondansetron) and IV hydration",
          "Neurosurgical / Stroke referral"
        ],
        "key_points": [
          "Nimodipine (60mg PO q4h) for vasospasm prevention",
          "Blood pressure management (avoid severe peaks, maintain SBP < 140-160)",
          "Analgesia (avoid NSAIDs/aspirin before bleed exclusion; use paracetamol / opioids)",
          "Antiemetics (e.g. Ondansetron) and IV hydration",
          "Neurosurgical / Stroke referral"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second summary and clinical differential to the Emergency Medicine Consultant.",
        "question": "Present your 60-second summary and clinical differential to the Emergency Medicine Consultant.",
        "target_rubric": "SBAR presentation: 42yo woman on OCP with family history of aneurysm presenting with a definitive thunderclap headache (<30s peak), meningism, and photophobia. Top differential remains SAH until excluded.",
        "model_answer": "SBAR presentation: 42yo woman on OCP with family history of aneurysm presenting with a definitive thunderclap headache (<30s peak), meningism, and photophobia. Top differential remains SAH until excluded.",
        "max_marks": 10,
        "key_points_required": [
          "42yo female",
          "Thunderclap onset (peak < 1 min)",
          "Meningismus and photophobia",
          "Family history of intracranial aneurysm",
          "Working diagnosis: Subarachnoid Hemorrhage vs CVST"
        ],
        "key_points": [
          "42yo female",
          "Thunderclap onset (peak < 1 min)",
          "Meningismus and photophobia",
          "Family history of intracranial aneurysm",
          "Working diagnosis: Subarachnoid Hemorrhage vs CVST"
        ]
      },
      {
        "prompt": "The CT brain was reported as normal. Does this safely exclude a Subarachnoid Hemorrhage? What is your mandatory next diagnostic step?",
        "question": "The CT brain was reported as normal. Does this safely exclude a Subarachnoid Hemorrhage? What is your mandatory next diagnostic step?",
        "target_rubric": "NO, normal CT does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture at least 12 hours post-onset for CSF spectrophotometry (xanthochromia) and cell count in tubes 1 and 4 (to differentiate traumatic tap).",
        "model_answer": "NO, normal CT does not 100% exclude SAH. The mandatory next step is a Lumbar Puncture at least 12 hours post-onset for CSF spectrophotometry (xanthochromia) and cell count in tubes 1 and 4 (to differentiate traumatic tap).",
        "max_marks": 10,
        "key_points_required": [
          "CT does not 100% exclude SAH (small bleed / late presentation)",
          "Perform Lumbar Puncture",
          "Timing: at least 12 hours post-headache onset to allow bilirubin formation",
          "Test CSF for xanthochromia via spectrophotometry",
          "Compare RBC count between tube 1 and tube 4 to rule out traumatic tap"
        ],
        "key_points": [
          "CT does not 100% exclude SAH (small bleed / late presentation)",
          "Perform Lumbar Puncture",
          "Timing: at least 12 hours post-headache onset to allow bilirubin formation",
          "Test CSF for xanthochromia via spectrophotometry",
          "Compare RBC count between tube 1 and tube 4 to rule out traumatic tap"
        ]
      },
      {
        "prompt": "What acute supportive and preventative pharmacological measures will you initiate right now?",
        "question": "What acute supportive and preventative pharmacological measures will you initiate right now?",
        "target_rubric": "Analgesia, IV fluids, antiemetics, blood pressure control, Nimodipine 60mg every 4 hours to prevent vasospasm/delayed cerebral ischemia, neurosurgical alert.",
        "model_answer": "Analgesia, IV fluids, antiemetics, blood pressure control, Nimodipine 60mg every 4 hours to prevent vasospasm/delayed cerebral ischemia, neurosurgical alert.",
        "max_marks": 10,
        "key_points_required": [
          "Nimodipine (60mg PO q4h) for vasospasm prevention",
          "Blood pressure management (avoid severe peaks, maintain SBP < 140-160)",
          "Analgesia (avoid NSAIDs/aspirin before bleed exclusion; use paracetamol / opioids)",
          "Antiemetics (e.g. Ondansetron) and IV hydration",
          "Neurosurgical / Stroke referral"
        ],
        "key_points": [
          "Nimodipine (60mg PO q4h) for vasospasm prevention",
          "Blood pressure management (avoid severe peaks, maintain SBP < 140-160)",
          "Analgesia (avoid NSAIDs/aspirin before bleed exclusion; use paracetamol / opioids)",
          "Antiemetics (e.g. Ondansetron) and IV hydration",
          "Neurosurgical / Stroke referral"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Premature Closure on Negative Head CT ('CT Negative, Discharge Home')",
        "description": "Reassuring the patient and discharging them home simply because the initial CT scan is normal.",
        "trigger_condition": "Candidate decides to discharge patient without discussing lumbar puncture or CTA.",
        "remediation_advice": "The classic pitfall in emergency neurology: A normal CT does NOT exclude an SAH. Overlooked 'warning leaks' / sentinel headaches carry a devastating risk of re-rupture and death. Always perform an LP at > 12h or CT angiogram.",
        "trigger_keywords": [
          "discharge",
          "send home",
          "sah excluded",
          "rules out sah",
          "rule out sah",
          "excludes subarachnoid",
          "rules out subarachnoid"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Dismissing Thunderclap as Migraine",
        "description": "Assuming the photophobia and nausea justify a diagnosis of simple migraine.",
        "trigger_condition": "Candidate anchors on migraine without respecting the < 1-minute onset speed.",
        "remediation_advice": "Any headache reaching 10/10 within 60 seconds is a thunderclap headache and MUST be treated as an intracranial vascular emergency until definitively proven otherwise.",
        "trigger_keywords": [
          "migraine",
          "triptan",
          "tension headache"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "resp_04": {
    "id": "resp_04",
    "case_id": "resp_04",
    "title": "Acute Pleuritic Chest Pain and Dyspnea in a 28-Year-Old Traveler",
    "specialty": "Respiratory / Acute Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Emily Watson",
    "age": 28,
    "gender": "Female",
    "occupation": "Management Consultant",
    "setting": "Emergency Department Resuscitation Bay",
    "voice_preset": "en-GB-SoniaNeural",
    "chief_complaint": "Sudden right-sided sharp chest pain and shortness of breath for 3 hours",
    "presenting_complaint": "Sudden right-sided sharp chest pain and shortness of breath for 3 hours",
    "opening_statement": "It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest.",
    "triage_vitals": {
      "Heart Rate": "118 bpm (Sinus tachycardia)",
      "Blood Pressure": "94/62 mmHg",
      "Respiratory Rate": "28 /min",
      "Oxygen Saturation": "89% on room air (94% on 4L nasal cannula)",
      "Temperature": "37.4°C",
      "GCS": "15/15"
    },
    "background_context": "Emily Watson, 28yo Female (Management Consultant) at Emergency Department Resuscitation Bay. You are the Acute Medical Officer. Take a focused 7-minute history from Emily. Characterize her pain and breathing, identify venous thromboembolism risk factors, and exclude life-threatening causes. An interim bedside finding will arrive.",
    "brief": {
      "setting": "Emergency Department Resuscitation Bay",
      "patient_name": "Emily Watson",
      "age": 28,
      "gender": "Female",
      "occupation": "Management Consultant",
      "presenting_complaint": "Sudden right-sided sharp chest pain and shortness of breath for 3 hours",
      "triage_vitals": {
        "Heart Rate": "118 bpm (Sinus tachycardia)",
        "Blood Pressure": "94/62 mmHg",
        "Respiratory Rate": "28 /min",
        "Oxygen Saturation": "89% on room air (94% on 4L nasal cannula)",
        "Temperature": "37.4°C",
        "GCS": "15/15"
      },
      "instructions": "You are the Acute Medical Officer. Take a focused 7-minute history from Emily. Characterize her pain and breathing, identify venous thromboembolism risk factors, and exclude life-threatening causes. An interim bedside finding will arrive."
    },
    "persona": {
      "name": "Emily Watson",
      "voice_id": "en-GB-SoniaNeural",
      "speech_rate": "-5%",
      "pain_level": 8,
      "temperament": "anxious",
      "behavioral_cues": [
        "Tachypneic, clutching the right lateral aspect of her chest",
        "Winces sharply on inspiration and speaks in short sentences",
        "Appears pale and mildly diaphoretic"
      ]
    },
    "gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest pain"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest pain"
        ],
        "response_text": "It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest.",
        "response": "It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "character_pleuritic",
        "category": "socrates",
        "trigger_concepts": [
          "describe",
          "feel like",
          "sharp",
          "stabbing",
          "deep breath",
          "inspiration",
          "cough",
          "pleuritic"
        ],
        "triggers": [
          "describe",
          "feel like",
          "sharp",
          "stabbing",
          "deep breath",
          "inspiration",
          "cough",
          "pleuritic"
        ],
        "response_text": "It's like a knife stabbing into my lung every single time I take a breath in or try to cough. I can only manage shallow little breaths.",
        "response": "It's like a knife stabbing into my lung every single time I take a breath in or try to cough. I can only manage shallow little breaths.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "hemoptysis",
        "category": "socrates",
        "trigger_concepts": [
          "cough",
          "blood",
          "phlegm",
          "spit",
          "hemoptysis"
        ],
        "triggers": [
          "cough",
          "blood",
          "phlegm",
          "spit",
          "hemoptysis"
        ],
        "response_text": "Yes! When I coughed an hour ago, I coughed up bright red streaks of blood in my phlegm. That really terrified me.",
        "response": "Yes! When I coughed an hour ago, I coughed up bright red streaks of blood in my phlegm. That really terrified me.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "travel_history",
        "category": "social",
        "trigger_concepts": [
          "travel",
          "flight",
          "long haul",
          "plane",
          "car",
          "journey",
          "sitting"
        ],
        "triggers": [
          "travel",
          "flight",
          "long haul",
          "plane",
          "car",
          "journey",
          "sitting"
        ],
        "response_text": "I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
        "response": "I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ocp_hormones",
        "category": "drug_history",
        "trigger_concepts": [
          "pill",
          "contraceptive",
          "medication",
          "hormone",
          "ocp",
          "birth control"
        ],
        "triggers": [
          "pill",
          "contraceptive",
          "medication",
          "hormone",
          "ocp",
          "birth control"
        ],
        "response_text": "I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
        "response": "I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "dvt_signs",
        "category": "red_flag",
        "trigger_concepts": [
          "leg",
          "calf",
          "swelling",
          "clot",
          "dvt",
          "tender",
          "pain in leg"
        ],
        "triggers": [
          "leg",
          "calf",
          "swelling",
          "clot",
          "dvt",
          "tender",
          "pain in leg"
        ],
        "response_text": "Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
        "response": "Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "syncope_collapse",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "blackout",
          "dizzy",
          "lightheaded",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "dizzy",
          "lightheaded",
          "syncope"
        ],
        "response_text": "I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
        "response": "I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "thoughts",
          "think is causing",
          "ideas",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "thoughts",
          "think is causing",
          "ideas",
          "afraid"
        ],
        "response_text": "My partner told me I probably pulled a muscle lifting my heavy luggage off the luggage carousel, but coughing up blood made me wonder if I punctured my lung. Am I in danger?",
        "response": "My partner told me I probably pulled a muscle lifting my heavy luggage off the luggage carousel, but coughing up blood made me wonder if I punctured my lung. Am I in danger?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "scan",
          "treatment"
        ],
        "triggers": [
          "expect",
          "hoping",
          "scan",
          "treatment"
        ],
        "response_text": "I need you to tell me why I can't breathe properly and whether I have a blood clot in my lung.",
        "response": "I need you to tell me why I can't breathe properly and whether I have a blood clot in my lung.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_family_clots",
        "category": "past_history",
        "trigger_concepts": [
          "past history",
          "family history",
          "clots",
          "thrombosis",
          "embolism",
          "miscarriages"
        ],
        "triggers": [
          "past history",
          "family history",
          "clots",
          "thrombosis",
          "embolism",
          "miscarriages"
        ],
        "response_text": "I have never had clots before, but my mother had a deep vein thrombosis in her leg after a surgery in her forties.",
        "response": "I have never had clots before, but my mother had a deep vein thrombosis in her leg after a surgery in her forties.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "site_onset",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest pain"
        ],
        "triggers": [
          "where",
          "start",
          "onset",
          "when did it happen",
          "location",
          "chest pain"
        ],
        "response_text": "It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest.",
        "response": "It hit me suddenly about three hours ago while I was unpacking my suitcase at home. A piercing, sharp pain on the lower right side of my chest.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "character_pleuritic",
        "category": "socrates",
        "trigger_concepts": [
          "describe",
          "feel like",
          "sharp",
          "stabbing",
          "deep breath",
          "inspiration",
          "cough",
          "pleuritic"
        ],
        "triggers": [
          "describe",
          "feel like",
          "sharp",
          "stabbing",
          "deep breath",
          "inspiration",
          "cough",
          "pleuritic"
        ],
        "response_text": "It's like a knife stabbing into my lung every single time I take a breath in or try to cough. I can only manage shallow little breaths.",
        "response": "It's like a knife stabbing into my lung every single time I take a breath in or try to cough. I can only manage shallow little breaths.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "hemoptysis",
        "category": "socrates",
        "trigger_concepts": [
          "cough",
          "blood",
          "phlegm",
          "spit",
          "hemoptysis"
        ],
        "triggers": [
          "cough",
          "blood",
          "phlegm",
          "spit",
          "hemoptysis"
        ],
        "response_text": "Yes! When I coughed an hour ago, I coughed up bright red streaks of blood in my phlegm. That really terrified me.",
        "response": "Yes! When I coughed an hour ago, I coughed up bright red streaks of blood in my phlegm. That really terrified me.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "travel_history",
        "category": "social",
        "trigger_concepts": [
          "travel",
          "flight",
          "long haul",
          "plane",
          "car",
          "journey",
          "sitting"
        ],
        "triggers": [
          "travel",
          "flight",
          "long haul",
          "plane",
          "car",
          "journey",
          "sitting"
        ],
        "response_text": "I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
        "response": "I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ocp_hormones",
        "category": "drug_history",
        "trigger_concepts": [
          "pill",
          "contraceptive",
          "medication",
          "hormone",
          "ocp",
          "birth control"
        ],
        "triggers": [
          "pill",
          "contraceptive",
          "medication",
          "hormone",
          "ocp",
          "birth control"
        ],
        "response_text": "I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
        "response": "I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "dvt_signs",
        "category": "red_flag",
        "trigger_concepts": [
          "leg",
          "calf",
          "swelling",
          "clot",
          "dvt",
          "tender",
          "pain in leg"
        ],
        "triggers": [
          "leg",
          "calf",
          "swelling",
          "clot",
          "dvt",
          "tender",
          "pain in leg"
        ],
        "response_text": "Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
        "response": "Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "syncope_collapse",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "blackout",
          "dizzy",
          "lightheaded",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "dizzy",
          "lightheaded",
          "syncope"
        ],
        "response_text": "I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
        "response": "I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "thoughts",
          "think is causing",
          "ideas",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "thoughts",
          "think is causing",
          "ideas",
          "afraid"
        ],
        "response_text": "My partner told me I probably pulled a muscle lifting my heavy luggage off the luggage carousel, but coughing up blood made me wonder if I punctured my lung. Am I in danger?",
        "response": "My partner told me I probably pulled a muscle lifting my heavy luggage off the luggage carousel, but coughing up blood made me wonder if I punctured my lung. Am I in danger?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "scan",
          "treatment"
        ],
        "triggers": [
          "expect",
          "hoping",
          "scan",
          "treatment"
        ],
        "response_text": "I need you to tell me why I can't breathe properly and whether I have a blood clot in my lung.",
        "response": "I need you to tell me why I can't breathe properly and whether I have a blood clot in my lung.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "pmhx_family_clots",
        "category": "past_history",
        "trigger_concepts": [
          "past history",
          "family history",
          "clots",
          "thrombosis",
          "embolism",
          "miscarriages"
        ],
        "triggers": [
          "past history",
          "family history",
          "clots",
          "thrombosis",
          "embolism",
          "miscarriages"
        ],
        "response_text": "I have never had clots before, but my mother had a deep vein thrombosis in her leg after a surgery in her forties.",
        "response": "I have never had clots before, but my mother had a deep vein thrombosis in her leg after a surgery in her forties.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "travel_history",
        "label": "Travel History",
        "triggers": [
          "travel",
          "flight",
          "long haul",
          "plane",
          "car",
          "journey",
          "sitting"
        ],
        "response": "I just flew in from London to Singapore yesterday on a 14-hour non-stop flight. I was working on my laptop and barely stood up the entire journey.",
        "mandatory": true
      },
      {
        "key": "ocp_hormones",
        "label": "Ocp Hormones",
        "triggers": [
          "pill",
          "contraceptive",
          "medication",
          "hormone",
          "ocp",
          "birth control"
        ],
        "response": "I've been on the combined oral contraceptive pill (Yasmin) for the last two years. No other regular medications.",
        "mandatory": true
      },
      {
        "key": "dvt_signs",
        "label": "Dvt Signs",
        "triggers": [
          "leg",
          "calf",
          "swelling",
          "clot",
          "dvt",
          "tender",
          "pain in leg"
        ],
        "response": "Actually... my left calf has felt cramped and uncomfortably tight since yesterday afternoon, but I assumed it was just flight fatigue.",
        "mandatory": true
      },
      {
        "key": "syncope_collapse",
        "label": "Syncope Collapse",
        "triggers": [
          "faint",
          "pass out",
          "blackout",
          "dizzy",
          "lightheaded",
          "syncope"
        ],
        "response": "I felt terribly lightheaded and almost blacked out when I stood up to call the ambulance. Everything went grey for a few seconds.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency Bedside POCUS Echo & CTPA Alert",
      "description": "Bedside point-of-care ultrasound (POCUS) cardiac scan and D-dimer results are reviewed.",
      "new_finding": "Emergency Bedside POCUS Echo & CTPA Alert — Bedside Echo: Right ventricular dilation with McConnell's sign (akinesia of RV mid-free wall with preserved apical contractility). Estimated RV systolic pressure 48 mmHg.; Bedside D-Dimer: 4,400 ng/mL (Significantly elevated, normal < 500 ng/mL).; 12-Lead ECG: Sinus tachycardia at 118 bpm with S1Q3T3 pattern and T-wave inversion in V1-V3.",
      "findings": {
        "Bedside Echo": "Right ventricular dilation with McConnell's sign (akinesia of RV mid-free wall with preserved apical contractility). Estimated RV systolic pressure 48 mmHg.",
        "Bedside D-Dimer": "4,400 ng/mL (Significantly elevated, normal < 500 ng/mL).",
        "12-Lead ECG": "Sinus tachycardia at 118 bpm with S1Q3T3 pattern and T-wave inversion in V1-V3."
      },
      "expected_shifts": {
        "Acute Submassive / Massive Pulmonary Embolism": 2,
        "Primary Spontaneous Pneumothorax": -2,
        "Musculoskeletal Chest Wall Strain": -2,
        "Community-Acquired Pneumonia": -1
      },
      "expert_rationale": "The combination of recent long-haul flight, OCP use, unilateral DVT, hemoptysis, sinus tachycardia, and McConnell's sign on echocardiography establishes Acute Submassive Pulmonary Embolism with right ventricular strain. Borderline systolic BP (94 mmHg) places her at imminent risk of obstructive shock requiring immediate therapeutic anticoagulation and ICU alert for potential thrombolysis."
    },
    "differentials": [
      {
        "name": "Acute Submassive Pulmonary Embolism (PE with RV Strain)",
        "tier": "primary",
        "supporting_features": [
          "Long-haul flight",
          "Estrogen OCP use",
          "Pleuritic pain + hemoptysis",
          "Tachycardia, hypoxia",
          "Unilateral calf swelling",
          "McConnell's sign on echo"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.98
      },
      {
        "name": "Tension / Spontaneous Pneumothorax",
        "tier": "must_not_miss",
        "supporting_features": [
          "Sudden pleuritic pain, hypoxia, hypotension"
        ],
        "refuting_features": [
          "Hemoptysis is atypical, bilateral lung sliding on POCUS, no tracheal deviation"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      },
      {
        "name": "Community-Acquired Pleuropneumonia",
        "tier": "secondary",
        "supporting_features": [
          "Pleuritic pain, low-grade temperature"
        ],
        "refuting_features": [
          "Hyperacute onset, absence of purulent sputum, presence of prominent VTE risk factors"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.01
      }
    ],
    "expected_differentials": [
      {
        "name": "Acute Submassive Pulmonary Embolism (PE with RV Strain)",
        "tier": "primary",
        "supporting_features": [
          "Long-haul flight",
          "Estrogen OCP use",
          "Pleuritic pain + hemoptysis",
          "Tachycardia, hypoxia",
          "Unilateral calf swelling",
          "McConnell's sign on echo"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.98
      },
      {
        "name": "Tension / Spontaneous Pneumothorax",
        "tier": "must_not_miss",
        "supporting_features": [
          "Sudden pleuritic pain, hypoxia, hypotension"
        ],
        "refuting_features": [
          "Hemoptysis is atypical, bilateral lung sliding on POCUS, no tracheal deviation"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      },
      {
        "name": "Community-Acquired Pleuropneumonia",
        "tier": "secondary",
        "supporting_features": [
          "Pleuritic pain, low-grade temperature"
        ],
        "refuting_features": [
          "Hyperacute onset, absence of purulent sputum, presence of prominent VTE risk factors"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second synthesis to the Acute Medicine Consultant.",
        "question": "Present your 60-second synthesis to the Acute Medicine Consultant.",
        "target_rubric": "SBAR presentation of a 28yo woman with multiple VTE risk factors (long-haul flight, OCP, family history) presenting with acute pleuritic pain, hemoptysis, hypoxia, and echo signs of RV strain.",
        "model_answer": "SBAR presentation of a 28yo woman with multiple VTE risk factors (long-haul flight, OCP, family history) presenting with acute pleuritic pain, hemoptysis, hypoxia, and echo signs of RV strain.",
        "max_marks": 10,
        "key_points_required": [
          "28yo female with high-risk VTE profile (14h flight, OCP)",
          "Typical pleuritic chest pain with hemoptysis and DVT symptoms",
          "Hemodynamic compromise (tachycardia 118, BP 94/62, hypoxia 89%)",
          "Working diagnosis: Acute Pulmonary Embolism with RV strain"
        ],
        "key_points": [
          "28yo female with high-risk VTE profile (14h flight, OCP)",
          "Typical pleuritic chest pain with hemoptysis and DVT symptoms",
          "Hemodynamic compromise (tachycardia 118, BP 94/62, hypoxia 89%)",
          "Working diagnosis: Acute Pulmonary Embolism with RV strain"
        ]
      },
      {
        "prompt": "Calculate the Wells Score and determine your definitive imaging modality.",
        "question": "Calculate the Wells Score and determine your definitive imaging modality.",
        "target_rubric": "Wells Score: Clinical signs of DVT (3) + Alternative diagnosis less likely than PE (3) + Tachycardia (1.5) = 7.5 (High probability). Definitive investigation: CT Pulmonary Angiography (CTPA).",
        "model_answer": "Wells Score: Clinical signs of DVT (3) + Alternative diagnosis less likely than PE (3) + Tachycardia (1.5) = 7.5 (High probability). Definitive investigation: CT Pulmonary Angiography (CTPA).",
        "max_marks": 10,
        "key_points_required": [
          "Wells Score >= 4 (High risk / PE likely)",
          "Definitive imaging: CT Pulmonary Angiogram (CTPA)",
          "Alternative if severe renal failure or anaphylactic contrast allergy: V/Q scan",
          "Administer immediate therapeutic anticoagulation prior to CTPA"
        ],
        "key_points": [
          "Wells Score >= 4 (High risk / PE likely)",
          "Definitive imaging: CT Pulmonary Angiogram (CTPA)",
          "Alternative if severe renal failure or anaphylactic contrast allergy: V/Q scan",
          "Administer immediate therapeutic anticoagulation prior to CTPA"
        ]
      },
      {
        "prompt": "Outline your immediate resuscitation and pharmacological management.",
        "question": "Outline your immediate resuscitation and pharmacological management.",
        "target_rubric": "Oxygen to target 94-98%, IV access, immediate therapeutic anticoagulation (LMWH or unfractionated heparin), cautious IV fluids (avoid RV overload), thrombolysis readiness (Alteplase) if BP drops < 90.",
        "model_answer": "Oxygen to target 94-98%, IV access, immediate therapeutic anticoagulation (LMWH or unfractionated heparin), cautious IV fluids (avoid RV overload), thrombolysis readiness (Alteplase) if BP drops < 90.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate anticoagulation (LMWH e.g. Enoxaparin 1.5mg/kg or IV Unfractionated Heparin)",
          "Oxygen therapy",
          "Cautious fluid resuscitation (avoid worsening right ventricular failure)",
          "Monitor for hemodynamic deterioration requiring rescue systemic thrombolysis (Alteplase 50-100mg)",
          "Discontinue oral contraceptive pill"
        ],
        "key_points": [
          "Immediate anticoagulation (LMWH e.g. Enoxaparin 1.5mg/kg or IV Unfractionated Heparin)",
          "Oxygen therapy",
          "Cautious fluid resuscitation (avoid worsening right ventricular failure)",
          "Monitor for hemodynamic deterioration requiring rescue systemic thrombolysis (Alteplase 50-100mg)",
          "Discontinue oral contraceptive pill"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second synthesis to the Acute Medicine Consultant.",
        "question": "Present your 60-second synthesis to the Acute Medicine Consultant.",
        "target_rubric": "SBAR presentation of a 28yo woman with multiple VTE risk factors (long-haul flight, OCP, family history) presenting with acute pleuritic pain, hemoptysis, hypoxia, and echo signs of RV strain.",
        "model_answer": "SBAR presentation of a 28yo woman with multiple VTE risk factors (long-haul flight, OCP, family history) presenting with acute pleuritic pain, hemoptysis, hypoxia, and echo signs of RV strain.",
        "max_marks": 10,
        "key_points_required": [
          "28yo female with high-risk VTE profile (14h flight, OCP)",
          "Typical pleuritic chest pain with hemoptysis and DVT symptoms",
          "Hemodynamic compromise (tachycardia 118, BP 94/62, hypoxia 89%)",
          "Working diagnosis: Acute Pulmonary Embolism with RV strain"
        ],
        "key_points": [
          "28yo female with high-risk VTE profile (14h flight, OCP)",
          "Typical pleuritic chest pain with hemoptysis and DVT symptoms",
          "Hemodynamic compromise (tachycardia 118, BP 94/62, hypoxia 89%)",
          "Working diagnosis: Acute Pulmonary Embolism with RV strain"
        ]
      },
      {
        "prompt": "Calculate the Wells Score and determine your definitive imaging modality.",
        "question": "Calculate the Wells Score and determine your definitive imaging modality.",
        "target_rubric": "Wells Score: Clinical signs of DVT (3) + Alternative diagnosis less likely than PE (3) + Tachycardia (1.5) = 7.5 (High probability). Definitive investigation: CT Pulmonary Angiography (CTPA).",
        "model_answer": "Wells Score: Clinical signs of DVT (3) + Alternative diagnosis less likely than PE (3) + Tachycardia (1.5) = 7.5 (High probability). Definitive investigation: CT Pulmonary Angiography (CTPA).",
        "max_marks": 10,
        "key_points_required": [
          "Wells Score >= 4 (High risk / PE likely)",
          "Definitive imaging: CT Pulmonary Angiogram (CTPA)",
          "Alternative if severe renal failure or anaphylactic contrast allergy: V/Q scan",
          "Administer immediate therapeutic anticoagulation prior to CTPA"
        ],
        "key_points": [
          "Wells Score >= 4 (High risk / PE likely)",
          "Definitive imaging: CT Pulmonary Angiogram (CTPA)",
          "Alternative if severe renal failure or anaphylactic contrast allergy: V/Q scan",
          "Administer immediate therapeutic anticoagulation prior to CTPA"
        ]
      },
      {
        "prompt": "Outline your immediate resuscitation and pharmacological management.",
        "question": "Outline your immediate resuscitation and pharmacological management.",
        "target_rubric": "Oxygen to target 94-98%, IV access, immediate therapeutic anticoagulation (LMWH or unfractionated heparin), cautious IV fluids (avoid RV overload), thrombolysis readiness (Alteplase) if BP drops < 90.",
        "model_answer": "Oxygen to target 94-98%, IV access, immediate therapeutic anticoagulation (LMWH or unfractionated heparin), cautious IV fluids (avoid RV overload), thrombolysis readiness (Alteplase) if BP drops < 90.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate anticoagulation (LMWH e.g. Enoxaparin 1.5mg/kg or IV Unfractionated Heparin)",
          "Oxygen therapy",
          "Cautious fluid resuscitation (avoid worsening right ventricular failure)",
          "Monitor for hemodynamic deterioration requiring rescue systemic thrombolysis (Alteplase 50-100mg)",
          "Discontinue oral contraceptive pill"
        ],
        "key_points": [
          "Immediate anticoagulation (LMWH e.g. Enoxaparin 1.5mg/kg or IV Unfractionated Heparin)",
          "Oxygen therapy",
          "Cautious fluid resuscitation (avoid worsening right ventricular failure)",
          "Monitor for hemodynamic deterioration requiring rescue systemic thrombolysis (Alteplase 50-100mg)",
          "Discontinue oral contraceptive pill"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Withholding Anticoagulation While Awaiting CTPA",
        "description": "Delaying life-saving anticoagulation in a high-probability PE patient to wait for a scanner slot.",
        "trigger_condition": "Candidate decides to wait for CTPA confirmation before giving heparin/LMWH.",
        "remediation_advice": "In high-probability PE patients with hemodynamic compromise and no bleeding contraindications, immediate empirical anticoagulation must be started before imaging.",
        "trigger_keywords": [
          "wait for ctpa",
          "await ctpa",
          "awaiting ctpa",
          "after ctpa",
          "delay anticoag"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Anchoring on Musculoskeletal Strain in Young Adults",
        "description": "Attributing pleuritic pain to heavy lifting because the patient is young and otherwise healthy.",
        "trigger_condition": "Candidate considers muscle strain plausible despite hypoxia, tachycardia, and hemoptysis.",
        "remediation_advice": "Hemoptysis and hypoxia are NEVER caused by muscular strain. Always calculate the Wells score in unexplained dyspnea.",
        "trigger_keywords": [
          "musculoskeletal",
          "muscle strain",
          "costochondritis",
          "msk"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "gastro_05": {
    "id": "gastro_05",
    "case_id": "gastro_05",
    "title": "Massive Upper Gastrointestinal Bleed in a 58-Year-Old Male",
    "specialty": "Gastroenterology / Emergency Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Robert Chen",
    "age": 58,
    "gender": "Male",
    "occupation": "Retired Warehouse Supervisor",
    "setting": "Emergency Department Resuscitation Bay",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Vomiting large volumes of fresh red blood and dark stools for 6 hours",
    "presenting_complaint": "Vomiting large volumes of fresh red blood and dark stools for 6 hours",
    "opening_statement": "I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably.",
    "triage_vitals": {
      "Heart Rate": "122 bpm (Sinus tachycardia)",
      "Blood Pressure": "86/52 mmHg (Hypotensive)",
      "Respiratory Rate": "24 /min",
      "Oxygen Saturation": "96% on room air",
      "Temperature": "36.2°C",
      "GCS": "14/15 (Mildly lethargic)"
    },
    "background_context": "Robert Chen, 58yo Male (Retired Warehouse Supervisor) at Emergency Department Resuscitation Bay. You are the Emergency Medical Registrar. Take a rapid 7-minute history from Robert. Quantify blood loss, screen for underlying chronic liver disease and coagulopathy, and address resuscitation priorities. You will then present your emergency plan to the Consultant.",
    "brief": {
      "setting": "Emergency Department Resuscitation Bay",
      "patient_name": "Robert Chen",
      "age": 58,
      "gender": "Male",
      "occupation": "Retired Warehouse Supervisor",
      "presenting_complaint": "Vomiting large volumes of fresh red blood and dark stools for 6 hours",
      "triage_vitals": {
        "Heart Rate": "122 bpm (Sinus tachycardia)",
        "Blood Pressure": "86/52 mmHg (Hypotensive)",
        "Respiratory Rate": "24 /min",
        "Oxygen Saturation": "96% on room air",
        "Temperature": "36.2°C",
        "GCS": "14/15 (Mildly lethargic)"
      },
      "instructions": "You are the Emergency Medical Registrar. Take a rapid 7-minute history from Robert. Quantify blood loss, screen for underlying chronic liver disease and coagulopathy, and address resuscitation priorities. You will then present your emergency plan to the Consultant."
    },
    "persona": {
      "name": "Robert Chen",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "-10%",
      "pain_level": 6,
      "temperament": "lethargic",
      "behavioral_cues": [
        "Pale, cool clammy skin, jaundiced sclera",
        "Weak, hoarse voice, dry oral mucous membranes",
        "Mild flap / asterixis noticeable when arms are extended"
      ]
    },
    "gates": [
      {
        "key": "hematemesis_volume",
        "category": "socrates",
        "trigger_concepts": [
          "vomit",
          "blood",
          "how much",
          "cup",
          "bowl",
          "fresh",
          "clots",
          "coffee ground",
          "hematemesis"
        ],
        "triggers": [
          "vomit",
          "blood",
          "how much",
          "cup",
          "bowl",
          "fresh",
          "clots",
          "coffee ground",
          "hematemesis"
        ],
        "response_text": "I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably.",
        "response": "I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "melena_stools",
        "category": "socrates",
        "trigger_concepts": [
          "stool",
          "bowel",
          "poop",
          "black",
          "tarry",
          "melena",
          "dark"
        ],
        "triggers": [
          "stool",
          "bowel",
          "poop",
          "black",
          "tarry",
          "melena",
          "dark"
        ],
        "response_text": "Yes, yesterday my stools turned pitch black, foul-smelling, and sticky like road tar. I went three times.",
        "response": "Yes, yesterday my stools turned pitch black, foul-smelling, and sticky like road tar. I went three times.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "syncope_shock",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "collapse",
          "dizzy",
          "blackout",
          "postural",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "collapse",
          "dizzy",
          "blackout",
          "postural",
          "syncope"
        ],
        "response_text": "When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
        "response": "When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "chronic_liver_alcohol",
        "category": "past_history",
        "trigger_concepts": [
          "alcohol",
          "drink",
          "beer",
          "whisky",
          "cirrhosis",
          "liver",
          "hepatitis",
          "jaundice"
        ],
        "triggers": [
          "alcohol",
          "drink",
          "beer",
          "whisky",
          "cirrhosis",
          "liver",
          "hepatitis",
          "jaundice"
        ],
        "response_text": "I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
        "response": "I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "nsaids_anticoagulants",
        "category": "drug_history",
        "trigger_concepts": [
          "painkillers",
          "nsaids",
          "aspirin",
          "ibuprofen",
          "blood thinners",
          "warfarin",
          "medications"
        ],
        "triggers": [
          "painkillers",
          "nsaids",
          "aspirin",
          "ibuprofen",
          "blood thinners",
          "warfarin",
          "medications"
        ],
        "response_text": "I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
        "response": "I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "encephalopathy_confusion",
        "category": "red_flag",
        "trigger_concepts": [
          "confusion",
          "sleep",
          "memory",
          "day night",
          "orientation",
          "flapping"
        ],
        "triggers": [
          "confusion",
          "sleep",
          "memory",
          "day night",
          "orientation",
          "flapping"
        ],
        "response_text": "My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days.",
        "response": "My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "Doctor... am I going to bleed to death? I know my drinking caused this, and I feel terribly guilty. I just want to survive to see my son graduate university next year.",
        "response": "Doctor... am I going to bleed to death? I know my drinking caused this, and I feel terribly guilty. I just want to survive to see my son graduate university next year.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "transfusion",
          "blood",
          "camera"
        ],
        "triggers": [
          "expect",
          "hoping",
          "transfusion",
          "blood",
          "camera"
        ],
        "response_text": "Do I need a blood transfusion right now? Will you put a camera down my stomach to seal the bleed?",
        "response": "Do I need a blood transfusion right now? Will you put a camera down my stomach to seal the bleed?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "hematemesis_volume",
        "category": "socrates",
        "trigger_concepts": [
          "vomit",
          "blood",
          "how much",
          "cup",
          "bowl",
          "fresh",
          "clots",
          "coffee ground",
          "hematemesis"
        ],
        "triggers": [
          "vomit",
          "blood",
          "how much",
          "cup",
          "bowl",
          "fresh",
          "clots",
          "coffee ground",
          "hematemesis"
        ],
        "response_text": "I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably.",
        "response": "I threw up two whole washbasins of bright red blood with large dark jelly-like clots, doctor. It just kept gushing out uncontrollably.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "melena_stools",
        "category": "socrates",
        "trigger_concepts": [
          "stool",
          "bowel",
          "poop",
          "black",
          "tarry",
          "melena",
          "dark"
        ],
        "triggers": [
          "stool",
          "bowel",
          "poop",
          "black",
          "tarry",
          "melena",
          "dark"
        ],
        "response_text": "Yes, yesterday my stools turned pitch black, foul-smelling, and sticky like road tar. I went three times.",
        "response": "Yes, yesterday my stools turned pitch black, foul-smelling, and sticky like road tar. I went three times.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "syncope_shock",
        "category": "red_flag",
        "trigger_concepts": [
          "faint",
          "pass out",
          "collapse",
          "dizzy",
          "blackout",
          "postural",
          "syncope"
        ],
        "triggers": [
          "faint",
          "pass out",
          "collapse",
          "dizzy",
          "blackout",
          "postural",
          "syncope"
        ],
        "response_text": "When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
        "response": "When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "chronic_liver_alcohol",
        "category": "past_history",
        "trigger_concepts": [
          "alcohol",
          "drink",
          "beer",
          "whisky",
          "cirrhosis",
          "liver",
          "hepatitis",
          "jaundice"
        ],
        "triggers": [
          "alcohol",
          "drink",
          "beer",
          "whisky",
          "cirrhosis",
          "liver",
          "hepatitis",
          "jaundice"
        ],
        "response_text": "I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
        "response": "I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "nsaids_anticoagulants",
        "category": "drug_history",
        "trigger_concepts": [
          "painkillers",
          "nsaids",
          "aspirin",
          "ibuprofen",
          "blood thinners",
          "warfarin",
          "medications"
        ],
        "triggers": [
          "painkillers",
          "nsaids",
          "aspirin",
          "ibuprofen",
          "blood thinners",
          "warfarin",
          "medications"
        ],
        "response_text": "I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
        "response": "I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "encephalopathy_confusion",
        "category": "red_flag",
        "trigger_concepts": [
          "confusion",
          "sleep",
          "memory",
          "day night",
          "orientation",
          "flapping"
        ],
        "triggers": [
          "confusion",
          "sleep",
          "memory",
          "day night",
          "orientation",
          "flapping"
        ],
        "response_text": "My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days.",
        "response": "My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "Doctor... am I going to bleed to death? I know my drinking caused this, and I feel terribly guilty. I just want to survive to see my son graduate university next year.",
        "response": "Doctor... am I going to bleed to death? I know my drinking caused this, and I feel terribly guilty. I just want to survive to see my son graduate university next year.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "transfusion",
          "blood",
          "camera"
        ],
        "triggers": [
          "expect",
          "hoping",
          "transfusion",
          "blood",
          "camera"
        ],
        "response_text": "Do I need a blood transfusion right now? Will you put a camera down my stomach to seal the bleed?",
        "response": "Do I need a blood transfusion right now? Will you put a camera down my stomach to seal the bleed?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "syncope_shock",
        "label": "Syncope Shock",
        "triggers": [
          "faint",
          "pass out",
          "collapse",
          "dizzy",
          "blackout",
          "postural",
          "syncope"
        ],
        "response": "When I stood up after throwing up the blood, everything went completely black and I collapsed onto the bathroom floor. My son had to catch me.",
        "mandatory": true
      },
      {
        "key": "chronic_liver_alcohol",
        "label": "Chronic Liver Alcohol",
        "triggers": [
          "alcohol",
          "drink",
          "beer",
          "whisky",
          "cirrhosis",
          "liver",
          "hepatitis",
          "jaundice"
        ],
        "response": "I've been drinking half a bottle of liquor daily for the last 20 years. Two years ago, a polyclinic doctor warned me that my liver was hardened and scarred, but I didn't follow up.",
        "mandatory": true
      },
      {
        "key": "nsaids_anticoagulants",
        "label": "Nsaids Anticoagulants",
        "triggers": [
          "painkillers",
          "nsaids",
          "aspirin",
          "ibuprofen",
          "blood thinners",
          "warfarin",
          "medications"
        ],
        "response": "I have chronic shoulder arthritis, so I've been taking high-dose Ibuprofen and Ponstan from the pharmacy almost every day for the past two months.",
        "mandatory": true
      },
      {
        "key": "encephalopathy_confusion",
        "label": "Encephalopathy Confusion",
        "triggers": [
          "confusion",
          "sleep",
          "memory",
          "day night",
          "orientation",
          "flapping"
        ],
        "response": "My son told the nurse I've been sleeping all day and wandering around confused at night for the past three days.",
        "mandatory": false
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "STAT Resus Blood Panel & Liver Function Test",
      "description": "Emergency laboratory results return from the hospital laboratory.",
      "new_finding": "STAT Resus Blood Panel & Liver Function Test — Full Blood Count: Hemoglobin 6.7 g/dL (Severe anemia), Platelets 54,000 /mcL (Thrombocytopenia).; Coagulation Profile: Prothrombin Time (PT) 22.4s, INR 1.95 (Severe coagulopathy).; Renal Panel: Urea 19.8 mmol/L, Creatinine 88 mcmol/L (Urea-to-Creatinine ratio > 200 confirming massive upper GI blood breakdown).; Liver Function: Total Bilirubin 62 mcmol/L, Albumin 24 g/L.",
      "findings": {
        "Full Blood Count": "Hemoglobin 6.7 g/dL (Severe anemia), Platelets 54,000 /mcL (Thrombocytopenia).",
        "Coagulation Profile": "Prothrombin Time (PT) 22.4s, INR 1.95 (Severe coagulopathy).",
        "Renal Panel": "Urea 19.8 mmol/L, Creatinine 88 mcmol/L (Urea-to-Creatinine ratio > 200 confirming massive upper GI blood breakdown).",
        "Liver Function": "Total Bilirubin 62 mcmol/L, Albumin 24 g/L."
      },
      "expected_shifts": {
        "Bleeding Esophageal / Gastric Varices secondary to Portal Hypertension": 2,
        "Bleeding Peptic Ulcer Disease (NSAID-induced)": 1,
        "Lower GI Hemorrhage (Diverticular / Colonic)": -2,
        "Mallory-Weiss Tear": -2
      },
      "expert_rationale": "The combination of massive hematemesis, signs of decompensated alcoholic cirrhosis (coagulopathy, thrombocytopenia, jaundice), and profound hemodynamic shock confirms Acute Variceal Hemorrhage (or severe peptic ulcer). Resuscitation must adopt a RESTRICTIVE blood transfusion strategy (target Hb 7.0-8.0 g/dL) because over-transfusion raises portal venous pressure and causes fatal rebound hemorrhage."
    },
    "differentials": [
      {
        "name": "Acute Esophageal / Gastric Variceal Hemorrhage",
        "tier": "primary",
        "supporting_features": [
          "Massive painless hematemesis with clots",
          "History of chronic alcohol excess and cirrhosis",
          "Thrombocytopenia (splenomegaly/hypersplenism)",
          "Elevated INR",
          "High urea:creatinine ratio"
        ],
        "refuting_features": [],
        "prior_probability": 0.7,
        "posterior_probability": 0.85
      },
      {
        "name": "Bleeding Peptic Ulcer Disease (Gastric / Duodenal)",
        "tier": "secondary",
        "supporting_features": [
          "High-dose daily NSAID use (Ibuprofen) for 2 months",
          "Melena and hematemesis"
        ],
        "refuting_features": [
          "Patient has known portal hypertension; varices remain primary suspect, though dual pathology is possible"
        ],
        "prior_probability": 0.25,
        "posterior_probability": 0.15
      },
      {
        "name": "Lower Gastrointestinal Hemorrhage",
        "tier": "unlikely",
        "supporting_features": [
          "Melena"
        ],
        "refuting_features": [
          "Frank hematemesis of 2 basins and elevated blood urea definitively confirm an upper GI source proximal to ligament of Treitz"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Acute Esophageal / Gastric Variceal Hemorrhage",
        "tier": "primary",
        "supporting_features": [
          "Massive painless hematemesis with clots",
          "History of chronic alcohol excess and cirrhosis",
          "Thrombocytopenia (splenomegaly/hypersplenism)",
          "Elevated INR",
          "High urea:creatinine ratio"
        ],
        "refuting_features": [],
        "prior_probability": 0.7,
        "posterior_probability": 0.85
      },
      {
        "name": "Bleeding Peptic Ulcer Disease (Gastric / Duodenal)",
        "tier": "secondary",
        "supporting_features": [
          "High-dose daily NSAID use (Ibuprofen) for 2 months",
          "Melena and hematemesis"
        ],
        "refuting_features": [
          "Patient has known portal hypertension; varices remain primary suspect, though dual pathology is possible"
        ],
        "prior_probability": 0.25,
        "posterior_probability": 0.15
      },
      {
        "name": "Lower Gastrointestinal Hemorrhage",
        "tier": "unlikely",
        "supporting_features": [
          "Melena"
        ],
        "refuting_features": [
          "Frank hematemesis of 2 basins and elevated blood urea definitively confirm an upper GI source proximal to ligament of Treitz"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second SBAR appraisal to the Gastroenterology Consultant on-call.",
        "question": "Present your 60-second SBAR appraisal to the Gastroenterology Consultant on-call.",
        "target_rubric": "SBAR presentation: 58yo male with alcoholic cirrhosis presenting with life-threatening upper GI bleed, hemorrhagic shock (BP 86/52, HR 122), Hb 6.7, and coagulopathy.",
        "model_answer": "SBAR presentation: 58yo male with alcoholic cirrhosis presenting with life-threatening upper GI bleed, hemorrhagic shock (BP 86/52, HR 122), Hb 6.7, and coagulopathy.",
        "max_marks": 10,
        "key_points_required": [
          "58yo male with chronic alcoholic liver disease",
          "Massive hematemesis and melena with syncope",
          "Hemodynamic instability / Class III hemorrhagic shock (BP 86/52, HR 122)",
          "Working diagnosis: Acute Variceal Hemorrhage vs Bleeding Peptic Ulcer"
        ],
        "key_points": [
          "58yo male with chronic alcoholic liver disease",
          "Massive hematemesis and melena with syncope",
          "Hemodynamic instability / Class III hemorrhagic shock (BP 86/52, HR 122)",
          "Working diagnosis: Acute Variceal Hemorrhage vs Bleeding Peptic Ulcer"
        ]
      },
      {
        "prompt": "What is your immediate resuscitation protocol and transfusion target threshold?",
        "question": "What is your immediate resuscitation protocol and transfusion target threshold?",
        "target_rubric": "Two large-bore 16G IV cannulae, blood crossmatch 4 units, RESTRICTIVE transfusion strategy (target Hb 7-8 g/dL), correct coagulopathy with FFP/Platelets, reversal of hypothermia.",
        "model_answer": "Two large-bore 16G IV cannulae, blood crossmatch 4 units, RESTRICTIVE transfusion strategy (target Hb 7-8 g/dL), correct coagulopathy with FFP/Platelets, reversal of hypothermia.",
        "max_marks": 10,
        "key_points_required": [
          "Two large-bore peripheral cannulae (14G or 16G) or central venous access",
          "Crossmatch 4-6 units packed red blood cells",
          "RESTRICTIVE transfusion strategy (Target Hemoglobin 7.0 - 8.0 g/dL)",
          "Explain rationale: avoiding over-transfusion which elevates portal pressure and worsens variceal bleeding",
          "Correct severe coagulopathy (FFP, Platelets, Vitamin K)"
        ],
        "key_points": [
          "Two large-bore peripheral cannulae (14G or 16G) or central venous access",
          "Crossmatch 4-6 units packed red blood cells",
          "RESTRICTIVE transfusion strategy (Target Hemoglobin 7.0 - 8.0 g/dL)",
          "Explain rationale: avoiding over-transfusion which elevates portal pressure and worsens variceal bleeding",
          "Correct severe coagulopathy (FFP, Platelets, Vitamin K)"
        ]
      },
      {
        "prompt": "What pharmacological triad will you start immediately, and what is the definitive intervention?",
        "question": "What pharmacological triad will you start immediately, and what is the definitive intervention?",
        "target_rubric": "1. Vasoactive drug (Terlipressin 2mg IV or Octreotide); 2. Prophylactic antibiotic (Ceftriaxone 1g IV); 3. High-dose IV PPI (Pantoprazole); Definitive: Urgent Endoscopy (OGD) within 12 hours for band ligation.",
        "model_answer": "1. Vasoactive drug (Terlipressin 2mg IV or Octreotide); 2. Prophylactic antibiotic (Ceftriaxone 1g IV); 3. High-dose IV PPI (Pantoprazole); Definitive: Urgent Endoscopy (OGD) within 12 hours for band ligation.",
        "max_marks": 10,
        "key_points_required": [
          "Vasoactive therapy: IV Terlipressin (2mg IV bolus) or Somatostatin/Octreotide",
          "Antibiotic prophylaxis: IV Ceftriaxone 1g (reduces mortality and spontaneous bacterial peritonitis in cirrhotics)",
          "IV Proton Pump Inhibitor (Pantoprazole/Omeprazole 80mg bolus + 8mg/h infusion)",
          "Urgent Gastroscopy / OGD within 12 hours (Endoscopic Band Ligation or sclerotherapy)",
          "Balloon tamponade (Sengstaken-Blakemore tube) on standby for refractory exsanguination"
        ],
        "key_points": [
          "Vasoactive therapy: IV Terlipressin (2mg IV bolus) or Somatostatin/Octreotide",
          "Antibiotic prophylaxis: IV Ceftriaxone 1g (reduces mortality and spontaneous bacterial peritonitis in cirrhotics)",
          "IV Proton Pump Inhibitor (Pantoprazole/Omeprazole 80mg bolus + 8mg/h infusion)",
          "Urgent Gastroscopy / OGD within 12 hours (Endoscopic Band Ligation or sclerotherapy)",
          "Balloon tamponade (Sengstaken-Blakemore tube) on standby for refractory exsanguination"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second SBAR appraisal to the Gastroenterology Consultant on-call.",
        "question": "Present your 60-second SBAR appraisal to the Gastroenterology Consultant on-call.",
        "target_rubric": "SBAR presentation: 58yo male with alcoholic cirrhosis presenting with life-threatening upper GI bleed, hemorrhagic shock (BP 86/52, HR 122), Hb 6.7, and coagulopathy.",
        "model_answer": "SBAR presentation: 58yo male with alcoholic cirrhosis presenting with life-threatening upper GI bleed, hemorrhagic shock (BP 86/52, HR 122), Hb 6.7, and coagulopathy.",
        "max_marks": 10,
        "key_points_required": [
          "58yo male with chronic alcoholic liver disease",
          "Massive hematemesis and melena with syncope",
          "Hemodynamic instability / Class III hemorrhagic shock (BP 86/52, HR 122)",
          "Working diagnosis: Acute Variceal Hemorrhage vs Bleeding Peptic Ulcer"
        ],
        "key_points": [
          "58yo male with chronic alcoholic liver disease",
          "Massive hematemesis and melena with syncope",
          "Hemodynamic instability / Class III hemorrhagic shock (BP 86/52, HR 122)",
          "Working diagnosis: Acute Variceal Hemorrhage vs Bleeding Peptic Ulcer"
        ]
      },
      {
        "prompt": "What is your immediate resuscitation protocol and transfusion target threshold?",
        "question": "What is your immediate resuscitation protocol and transfusion target threshold?",
        "target_rubric": "Two large-bore 16G IV cannulae, blood crossmatch 4 units, RESTRICTIVE transfusion strategy (target Hb 7-8 g/dL), correct coagulopathy with FFP/Platelets, reversal of hypothermia.",
        "model_answer": "Two large-bore 16G IV cannulae, blood crossmatch 4 units, RESTRICTIVE transfusion strategy (target Hb 7-8 g/dL), correct coagulopathy with FFP/Platelets, reversal of hypothermia.",
        "max_marks": 10,
        "key_points_required": [
          "Two large-bore peripheral cannulae (14G or 16G) or central venous access",
          "Crossmatch 4-6 units packed red blood cells",
          "RESTRICTIVE transfusion strategy (Target Hemoglobin 7.0 - 8.0 g/dL)",
          "Explain rationale: avoiding over-transfusion which elevates portal pressure and worsens variceal bleeding",
          "Correct severe coagulopathy (FFP, Platelets, Vitamin K)"
        ],
        "key_points": [
          "Two large-bore peripheral cannulae (14G or 16G) or central venous access",
          "Crossmatch 4-6 units packed red blood cells",
          "RESTRICTIVE transfusion strategy (Target Hemoglobin 7.0 - 8.0 g/dL)",
          "Explain rationale: avoiding over-transfusion which elevates portal pressure and worsens variceal bleeding",
          "Correct severe coagulopathy (FFP, Platelets, Vitamin K)"
        ]
      },
      {
        "prompt": "What pharmacological triad will you start immediately, and what is the definitive intervention?",
        "question": "What pharmacological triad will you start immediately, and what is the definitive intervention?",
        "target_rubric": "1. Vasoactive drug (Terlipressin 2mg IV or Octreotide); 2. Prophylactic antibiotic (Ceftriaxone 1g IV); 3. High-dose IV PPI (Pantoprazole); Definitive: Urgent Endoscopy (OGD) within 12 hours for band ligation.",
        "model_answer": "1. Vasoactive drug (Terlipressin 2mg IV or Octreotide); 2. Prophylactic antibiotic (Ceftriaxone 1g IV); 3. High-dose IV PPI (Pantoprazole); Definitive: Urgent Endoscopy (OGD) within 12 hours for band ligation.",
        "max_marks": 10,
        "key_points_required": [
          "Vasoactive therapy: IV Terlipressin (2mg IV bolus) or Somatostatin/Octreotide",
          "Antibiotic prophylaxis: IV Ceftriaxone 1g (reduces mortality and spontaneous bacterial peritonitis in cirrhotics)",
          "IV Proton Pump Inhibitor (Pantoprazole/Omeprazole 80mg bolus + 8mg/h infusion)",
          "Urgent Gastroscopy / OGD within 12 hours (Endoscopic Band Ligation or sclerotherapy)",
          "Balloon tamponade (Sengstaken-Blakemore tube) on standby for refractory exsanguination"
        ],
        "key_points": [
          "Vasoactive therapy: IV Terlipressin (2mg IV bolus) or Somatostatin/Octreotide",
          "Antibiotic prophylaxis: IV Ceftriaxone 1g (reduces mortality and spontaneous bacterial peritonitis in cirrhotics)",
          "IV Proton Pump Inhibitor (Pantoprazole/Omeprazole 80mg bolus + 8mg/h infusion)",
          "Urgent Gastroscopy / OGD within 12 hours (Endoscopic Band Ligation or sclerotherapy)",
          "Balloon tamponade (Sengstaken-Blakemore tube) on standby for refractory exsanguination"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "The Over-Transfusion Trap ('Normalizing' Hemoglobin to > 10 g/dL)",
        "description": "Transfusing blood aggressively to reach normal hemoglobin levels in a cirrhotic patient.",
        "trigger_condition": "Candidate sets a transfusion target of Hb > 9 or 10 g/dL.",
        "remediation_advice": "Groundbreaking RCT evidence (Villanueva et al., NEJM) proved that liberal transfusion (Hb > 9) significantly INCREASES mortality and re-bleeding rates by raising portal hydrostatic pressure and disrupting clot formation. Target strictly Hb 7-8 g/dL.",
        "trigger_keywords": [
          "above 10",
          "over 10",
          "> 10",
          "hb 10",
          "hb of 10",
          "normalise",
          "normalize",
          "liberal transfusion"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Omission of Prophylactic Antibiotics in Cirrhotic Bleed",
        "description": "Focusing solely on blood and PPIs while forgetting prophylactic IV antibiotics.",
        "trigger_condition": "Candidate fails to order IV Ceftriaxone.",
        "remediation_advice": "Cirrhotic patients undergoing GI bleeds have severe bacterial translocation. Prophylactic Ceftriaxone reduces bacteremia, SBP, re-bleeding, and all-cause mortality.",
        "trigger_keywords": [],
        "absent_keywords": [
          "antibiotic",
          "ceftriaxone",
          "co-amoxiclav",
          "tazocin",
          "piperacillin",
          "ciprofloxacin",
          "quinolone"
        ],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "obgyn_06": {
    "id": "obgyn_06",
    "case_id": "obgyn_06",
    "title": "Acute Left Iliac Fossa Pain & Spotting in a 26-Year-Old Woman",
    "specialty": "Obstetrics & Gynecology / Emergency Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Chloe Lim",
    "age": 26,
    "gender": "Female",
    "occupation": "Primary School Teacher",
    "setting": "Early Pregnancy Assessment Unit (EPAU) / ED",
    "voice_preset": "en-SG-LunaNeural",
    "chief_complaint": "Severe sharp left lower abdominal pain and dark vaginal spotting for 8 hours",
    "presenting_complaint": "Severe sharp left lower abdominal pain and dark vaginal spotting for 8 hours",
    "opening_statement": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
    "triage_vitals": {
      "Heart Rate": "108 bpm",
      "Blood Pressure": "98/64 mmHg",
      "Respiratory Rate": "20 /min",
      "Oxygen Saturation": "98% on room air",
      "Temperature": "37.0°C",
      "GCS": "15/15"
    },
    "background_context": "Chloe Lim, 26yo Female (Primary School Teacher) at Early Pregnancy Assessment Unit (EPAU) / ED. You are the Gynecology Resident on-call. Take a 7-minute focused history from Chloe. Determine her menstrual history, assess hemodynamic stability, and screen for surgical emergencies. An interim bedside scan will arrive, followed by your presentation to the Consultant.",
    "brief": {
      "setting": "Early Pregnancy Assessment Unit (EPAU) / ED",
      "patient_name": "Chloe Lim",
      "age": 26,
      "gender": "Female",
      "occupation": "Primary School Teacher",
      "presenting_complaint": "Severe sharp left lower abdominal pain and dark vaginal spotting for 8 hours",
      "triage_vitals": {
        "Heart Rate": "108 bpm",
        "Blood Pressure": "98/64 mmHg",
        "Respiratory Rate": "20 /min",
        "Oxygen Saturation": "98% on room air",
        "Temperature": "37.0°C",
        "GCS": "15/15"
      },
      "instructions": "You are the Gynecology Resident on-call. Take a 7-minute focused history from Chloe. Determine her menstrual history, assess hemodynamic stability, and screen for surgical emergencies. An interim bedside scan will arrive, followed by your presentation to the Consultant."
    },
    "persona": {
      "name": "Chloe Lim",
      "voice_id": "en-SG-LunaNeural",
      "speech_rate": "-5%",
      "pain_level": 8,
      "temperament": "distressed",
      "behavioral_cues": [
        "Curled up on the examination couch, guarding her left lower quadrant",
        "Pale, anxious, clutching a tissue",
        "Frightened that she is losing a deeply desired pregnancy"
      ]
    },
    "gates": [
      {
        "key": "lmp_pregnancy_status",
        "category": "socrates",
        "trigger_concepts": [
          "period",
          "last menstrual period",
          "lmp",
          "pregnant",
          "pregnancy test",
          "missed period",
          "cycle",
          "bleeding"
        ],
        "triggers": [
          "period",
          "last menstrual period",
          "lmp",
          "pregnant",
          "pregnancy test",
          "missed period",
          "cycle",
          "bleeding"
        ],
        "response_text": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
        "response": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pain_location_severity",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "describe",
          "sharp",
          "cramping",
          "scale",
          "severity",
          "pain score",
          "stabbing"
        ],
        "triggers": [
          "where",
          "describe",
          "sharp",
          "cramping",
          "scale",
          "severity",
          "pain score",
          "stabbing"
        ],
        "response_text": "It's a vicious, stabbing, constant pain located deep on the left side of my lower tummy. On a scale of 1 to 10, it's definitely an 8. It started as a dull ache yesterday and suddenly became excruciating this morning.",
        "response": "It's a vicious, stabbing, constant pain located deep on the left side of my lower tummy. On a scale of 1 to 10, it's definitely an 8. It started as a dull ache yesterday and suddenly became excruciating this morning.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "vaginal_bleeding",
        "category": "socrates",
        "trigger_concepts": [
          "bleeding",
          "spotting",
          "pads",
          "clots",
          "color",
          "brown",
          "red"
        ],
        "triggers": [
          "bleeding",
          "spotting",
          "pads",
          "clots",
          "color",
          "brown",
          "red"
        ],
        "response_text": "It's dark brownish spotting, like prune juice. Not heavy like a normal period—just enough to soak two pantyliners, but with small dark specks.",
        "response": "It's dark brownish spotting, like prune juice. Not heavy like a normal period—just enough to soak two pantyliners, but with small dark specks.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "shoulder_tip_pain",
        "category": "red_flag",
        "trigger_concepts": [
          "shoulder",
          "shoulder tip",
          "neck",
          "collarbone",
          "referred pain"
        ],
        "triggers": [
          "shoulder",
          "shoulder tip",
          "neck",
          "collarbone",
          "referred pain"
        ],
        "response_text": "Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
        "response": "Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "syncope_dizziness",
        "category": "red_flag",
        "trigger_concepts": [
          "dizzy",
          "lightheaded",
          "faint",
          "pass out",
          "collapse",
          "blackout"
        ],
        "triggers": [
          "dizzy",
          "lightheaded",
          "faint",
          "pass out",
          "collapse",
          "blackout"
        ],
        "response_text": "When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
        "response": "When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "tenesmus_rectal",
        "category": "red_flag",
        "trigger_concepts": [
          "bowel",
          "poop",
          "rectal",
          "pressure",
          "tenesmus",
          "toilet"
        ],
        "triggers": [
          "bowel",
          "poop",
          "rectal",
          "pressure",
          "tenesmus",
          "toilet"
        ],
        "response_text": "I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
        "response": "I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "risk_factors_pid",
        "category": "past_history",
        "trigger_concepts": [
          "infection",
          "chlamydia",
          "gonorrhea",
          "pid",
          "pelvic infection",
          "stis",
          "coil",
          "iud",
          "ivf"
        ],
        "triggers": [
          "infection",
          "chlamydia",
          "gonorrhea",
          "pid",
          "pelvic infection",
          "stis",
          "coil",
          "iud",
          "ivf"
        ],
        "response_text": "Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
        "response": "Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "My husband and I have been actively trying to conceive for over a year and a half. I'm terrified that this means I'm having a miscarriage, or that something is dangerously wrong with my ovaries.",
        "response": "My husband and I have been actively trying to conceive for over a year and a half. I'm terrified that this means I'm having a miscarriage, or that something is dangerously wrong with my ovaries.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "ultrasound",
          "scan",
          "save"
        ],
        "triggers": [
          "expect",
          "hoping",
          "ultrasound",
          "scan",
          "save"
        ],
        "response_text": "Can you do an ultrasound to see if the baby is still inside my womb? Please do everything you can to save my fertility.",
        "response": "Can you do an ultrasound to see if the baby is still inside my womb? Please do everything you can to save my fertility.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "lmp_pregnancy_status",
        "category": "socrates",
        "trigger_concepts": [
          "period",
          "last menstrual period",
          "lmp",
          "pregnant",
          "pregnancy test",
          "missed period",
          "cycle",
          "bleeding"
        ],
        "triggers": [
          "period",
          "last menstrual period",
          "lmp",
          "pregnant",
          "pregnancy test",
          "missed period",
          "cycle",
          "bleeding"
        ],
        "response_text": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
        "response": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pain_location_severity",
        "category": "socrates",
        "trigger_concepts": [
          "where",
          "describe",
          "sharp",
          "cramping",
          "scale",
          "severity",
          "pain score",
          "stabbing"
        ],
        "triggers": [
          "where",
          "describe",
          "sharp",
          "cramping",
          "scale",
          "severity",
          "pain score",
          "stabbing"
        ],
        "response_text": "It's a vicious, stabbing, constant pain located deep on the left side of my lower tummy. On a scale of 1 to 10, it's definitely an 8. It started as a dull ache yesterday and suddenly became excruciating this morning.",
        "response": "It's a vicious, stabbing, constant pain located deep on the left side of my lower tummy. On a scale of 1 to 10, it's definitely an 8. It started as a dull ache yesterday and suddenly became excruciating this morning.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "vaginal_bleeding",
        "category": "socrates",
        "trigger_concepts": [
          "bleeding",
          "spotting",
          "pads",
          "clots",
          "color",
          "brown",
          "red"
        ],
        "triggers": [
          "bleeding",
          "spotting",
          "pads",
          "clots",
          "color",
          "brown",
          "red"
        ],
        "response_text": "It's dark brownish spotting, like prune juice. Not heavy like a normal period—just enough to soak two pantyliners, but with small dark specks.",
        "response": "It's dark brownish spotting, like prune juice. Not heavy like a normal period—just enough to soak two pantyliners, but with small dark specks.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "shoulder_tip_pain",
        "category": "red_flag",
        "trigger_concepts": [
          "shoulder",
          "shoulder tip",
          "neck",
          "collarbone",
          "referred pain"
        ],
        "triggers": [
          "shoulder",
          "shoulder tip",
          "neck",
          "collarbone",
          "referred pain"
        ],
        "response_text": "Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
        "response": "Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "syncope_dizziness",
        "category": "red_flag",
        "trigger_concepts": [
          "dizzy",
          "lightheaded",
          "faint",
          "pass out",
          "collapse",
          "blackout"
        ],
        "triggers": [
          "dizzy",
          "lightheaded",
          "faint",
          "pass out",
          "collapse",
          "blackout"
        ],
        "response_text": "When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
        "response": "When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "tenesmus_rectal",
        "category": "red_flag",
        "trigger_concepts": [
          "bowel",
          "poop",
          "rectal",
          "pressure",
          "tenesmus",
          "toilet"
        ],
        "triggers": [
          "bowel",
          "poop",
          "rectal",
          "pressure",
          "tenesmus",
          "toilet"
        ],
        "response_text": "I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
        "response": "I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "risk_factors_pid",
        "category": "past_history",
        "trigger_concepts": [
          "infection",
          "chlamydia",
          "gonorrhea",
          "pid",
          "pelvic infection",
          "stis",
          "coil",
          "iud",
          "ivf"
        ],
        "triggers": [
          "infection",
          "chlamydia",
          "gonorrhea",
          "pid",
          "pelvic infection",
          "stis",
          "coil",
          "iud",
          "ivf"
        ],
        "response_text": "Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
        "response": "Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "My husband and I have been actively trying to conceive for over a year and a half. I'm terrified that this means I'm having a miscarriage, or that something is dangerously wrong with my ovaries.",
        "response": "My husband and I have been actively trying to conceive for over a year and a half. I'm terrified that this means I'm having a miscarriage, or that something is dangerously wrong with my ovaries.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "ultrasound",
          "scan",
          "save"
        ],
        "triggers": [
          "expect",
          "hoping",
          "ultrasound",
          "scan",
          "save"
        ],
        "response_text": "Can you do an ultrasound to see if the baby is still inside my womb? Please do everything you can to save my fertility.",
        "response": "Can you do an ultrasound to see if the baby is still inside my womb? Please do everything you can to save my fertility.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "lmp_pregnancy_status",
        "label": "Lmp Pregnancy Status",
        "triggers": [
          "period",
          "last menstrual period",
          "lmp",
          "pregnant",
          "pregnancy test",
          "missed period",
          "cycle",
          "bleeding"
        ],
        "response": "My last normal period was about 6 weeks ago, doctor. My cycles are usually like clockwork every 28 days, so I am about two weeks late. I took a home pregnancy test last week that was faintly positive.",
        "mandatory": true
      },
      {
        "key": "shoulder_tip_pain",
        "label": "Shoulder Tip Pain",
        "triggers": [
          "shoulder",
          "shoulder tip",
          "neck",
          "collarbone",
          "referred pain"
        ],
        "response": "Yes! That is so strange you ask, doctor. For the past two hours, I have had this sharp, unexplained ache at the very tip of my left shoulder, especially when I lie flat.",
        "mandatory": true
      },
      {
        "key": "syncope_dizziness",
        "label": "Syncope Dizziness",
        "triggers": [
          "dizzy",
          "lightheaded",
          "faint",
          "pass out",
          "collapse",
          "blackout"
        ],
        "response": "When I stood up to brush my teeth earlier, the room spun and I nearly collapsed onto the floor. I felt completely clammy and cold.",
        "mandatory": true
      },
      {
        "key": "tenesmus_rectal",
        "label": "Tenesmus Rectal",
        "triggers": [
          "bowel",
          "poop",
          "rectal",
          "pressure",
          "tenesmus",
          "toilet"
        ],
        "response": "I've had this constant urge to open my bowels and deep pressure inside my pelvis, but when I went to the toilet nothing came out.",
        "mandatory": true
      },
      {
        "key": "risk_factors_pid",
        "label": "Risk Factors Pid",
        "triggers": [
          "infection",
          "chlamydia",
          "gonorrhea",
          "pid",
          "pelvic infection",
          "stis",
          "coil",
          "iud",
          "ivf"
        ],
        "response": "Three years ago in university I was treated for a severe pelvic infection—Chlamydia, I think—and had lower tummy pain for weeks. I don't have an IUD coil fitted now.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency Bedside Transvaginal Ultrasound (TVS) Result",
      "description": "The gynecologist performs an immediate point-of-care transvaginal ultrasound in the EPAU bay.",
      "new_finding": "Emergency Bedside Transvaginal Ultrasound (TVS) Result — Uterine Cavity: Empty uterus with decidual cast reaction (endometrial thickness 14 mm). No intrauterine gestational sac identified.; Left Adnexa: 3.4 cm complex, heterogenous adnexal mass with high-velocity peripheral vascular ring ('ring of fire') within the left fallopian tube.; Free Fluid: Significant hypoechoic free fluid in the Pouch of Douglas and extending into the perihepatic space (Morison's pouch), consistent with active hemoperitoneum.",
      "findings": {
        "Uterine Cavity": "Empty uterus with decidual cast reaction (endometrial thickness 14 mm). No intrauterine gestational sac identified.",
        "Left Adnexa": "3.4 cm complex, heterogenous adnexal mass with high-velocity peripheral vascular ring ('ring of fire') within the left fallopian tube.",
        "Free Fluid": "Significant hypoechoic free fluid in the Pouch of Douglas and extending into the perihepatic space (Morison's pouch), consistent with active hemoperitoneum."
      },
      "expected_shifts": {
        "Ruptured Tubal Ectopic Pregnancy": 2,
        "Threatened / Incomplete Miscarriage": -2,
        "Ovarian Cyst Torsion": -1,
        "Acute Appendicitis": -2
      },
      "expert_rationale": "The combination of 6 weeks amenorrhea, positive pregnancy test, severe unilateral pain, referred shoulder tip pain, and ultrasound evidence of an empty uterus, complex left tubal mass, and free fluid in Morison's pouch definitively establishes a Ruptured Tubal Ectopic Pregnancy with hemoperitoneum. This is a life-threatening surgical emergency requiring immediate laparoscopy."
    },
    "differentials": [
      {
        "name": "Ruptured Left Tubal Ectopic Pregnancy with Hemoperitoneum",
        "tier": "primary",
        "supporting_features": [
          "6 weeks amenorrhea, positive beta-hCG",
          "Unilateral LIF stabbing pain with spotting",
          "Referred shoulder tip pain (diaphragmatic blood)",
          "Syncope / hemodynamic instability",
          "Prior PID history",
          "Empty uterus + complex adnexal mass + free fluid"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.99
      },
      {
        "name": "Threatened or Incomplete Miscarriage",
        "tier": "secondary",
        "supporting_features": [
          "Early pregnancy bleeding and lower abdominal cramping"
        ],
        "refuting_features": [
          "Pain is strictly lateralized, presence of shoulder tip pain, TVS shows empty uterus and prominent tubal mass"
        ],
        "prior_probability": 0.2,
        "posterior_probability": 0.01
      },
      {
        "name": "Ruptured Corpus Luteum Cyst or Ovarian Torsion",
        "tier": "must_not_miss",
        "supporting_features": [
          "Acute pelvic pain and free fluid"
        ],
        "refuting_features": [
          "Does not explain adnexal tubal mass and positive pregnancy test"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Ruptured Left Tubal Ectopic Pregnancy with Hemoperitoneum",
        "tier": "primary",
        "supporting_features": [
          "6 weeks amenorrhea, positive beta-hCG",
          "Unilateral LIF stabbing pain with spotting",
          "Referred shoulder tip pain (diaphragmatic blood)",
          "Syncope / hemodynamic instability",
          "Prior PID history",
          "Empty uterus + complex adnexal mass + free fluid"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.99
      },
      {
        "name": "Threatened or Incomplete Miscarriage",
        "tier": "secondary",
        "supporting_features": [
          "Early pregnancy bleeding and lower abdominal cramping"
        ],
        "refuting_features": [
          "Pain is strictly lateralized, presence of shoulder tip pain, TVS shows empty uterus and prominent tubal mass"
        ],
        "prior_probability": 0.2,
        "posterior_probability": 0.01
      },
      {
        "name": "Ruptured Corpus Luteum Cyst or Ovarian Torsion",
        "tier": "must_not_miss",
        "supporting_features": [
          "Acute pelvic pain and free fluid"
        ],
        "refuting_features": [
          "Does not explain adnexal tubal mass and positive pregnancy test"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second SBAR synthesis and primary diagnosis to the Gynecology Consultant.",
        "question": "Present your 60-second SBAR synthesis and primary diagnosis to the Gynecology Consultant.",
        "target_rubric": "SBAR: 26yo female, 6 weeks amenorrhea, positive pregnancy test, prior PID, presenting with acute left iliac fossa pain, shoulder tip pain, syncope, and ultrasound confirming ruptured ectopic pregnancy with hemoperitoneum.",
        "model_answer": "SBAR: 26yo female, 6 weeks amenorrhea, positive pregnancy test, prior PID, presenting with acute left iliac fossa pain, shoulder tip pain, syncope, and ultrasound confirming ruptured ectopic pregnancy with hemoperitoneum.",
        "max_marks": 10,
        "key_points_required": [
          "26yo female, 6 weeks gestation, prior PID risk factor",
          "Presents with classic triad: amenorrhea, unilateral pelvic pain, vaginal spotting",
          "Signs of hemoperitoneum: shoulder tip pain, presyncope, tachycardia, free fluid in Morison's pouch",
          "Primary diagnosis: Ruptured Ectopic Pregnancy"
        ],
        "key_points": [
          "26yo female, 6 weeks gestation, prior PID risk factor",
          "Presents with classic triad: amenorrhea, unilateral pelvic pain, vaginal spotting",
          "Signs of hemoperitoneum: shoulder tip pain, presyncope, tachycardia, free fluid in Morison's pouch",
          "Primary diagnosis: Ruptured Ectopic Pregnancy"
        ]
      },
      {
        "prompt": "Is this patient eligible for medical management with Methotrexate? Justify your decision.",
        "question": "Is this patient eligible for medical management with Methotrexate? Justify your decision.",
        "target_rubric": "NO, strictly contraindicated. Indications for emergency surgical intervention include: hemodynamic instability, severe pain, free fluid/rupture, adnexal mass > 3.5cm, or beta-hCG > 5000.",
        "model_answer": "NO, strictly contraindicated. Indications for emergency surgical intervention include: hemodynamic instability, severe pain, free fluid/rupture, adnexal mass > 3.5cm, or beta-hCG > 5000.",
        "max_marks": 10,
        "key_points_required": [
          "Contraindicated for Methotrexate",
          "Justification: signs of rupture / hemoperitoneum (shoulder tip pain, free fluid)",
          "Hemodynamic borderline stability (HR 108, BP 98/64)",
          "Requires immediate emergency operative intervention (Laparoscopic Salpingectomy)"
        ],
        "key_points": [
          "Contraindicated for Methotrexate",
          "Justification: signs of rupture / hemoperitoneum (shoulder tip pain, free fluid)",
          "Hemodynamic borderline stability (HR 108, BP 98/64)",
          "Requires immediate emergency operative intervention (Laparoscopic Salpingectomy)"
        ]
      },
      {
        "prompt": "Outline your immediate preoperative resus protocol and essential hematological testing.",
        "question": "Outline your immediate preoperative resus protocol and essential hematological testing.",
        "target_rubric": "Two 16G IV cannulae, fluid bolus, group and save / crossmatch 2 units, baseline FBC, Coagulation, Serum beta-hCG, emergency theatre booking for laparoscopy, and RHESUS STATUS with Anti-D Immunoglobulin if Rh-negative.",
        "model_answer": "Two 16G IV cannulae, fluid bolus, group and save / crossmatch 2 units, baseline FBC, Coagulation, Serum beta-hCG, emergency theatre booking for laparoscopy, and RHESUS STATUS with Anti-D Immunoglobulin if Rh-negative.",
        "max_marks": 10,
        "key_points_required": [
          "Two large-bore IV access and crossmatch 2-4 units",
          "NPO / fasting for emergency laparoscopy (Salpingectomy)",
          "Baseline serum beta-hCG level",
          "Mandatory Rhesus typing and administration of Anti-D Immunoglobulin if Rhesus negative",
          "Empathetic fertility and bereavement counseling"
        ],
        "key_points": [
          "Two large-bore IV access and crossmatch 2-4 units",
          "NPO / fasting for emergency laparoscopy (Salpingectomy)",
          "Baseline serum beta-hCG level",
          "Mandatory Rhesus typing and administration of Anti-D Immunoglobulin if Rhesus negative",
          "Empathetic fertility and bereavement counseling"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second SBAR synthesis and primary diagnosis to the Gynecology Consultant.",
        "question": "Present your 60-second SBAR synthesis and primary diagnosis to the Gynecology Consultant.",
        "target_rubric": "SBAR: 26yo female, 6 weeks amenorrhea, positive pregnancy test, prior PID, presenting with acute left iliac fossa pain, shoulder tip pain, syncope, and ultrasound confirming ruptured ectopic pregnancy with hemoperitoneum.",
        "model_answer": "SBAR: 26yo female, 6 weeks amenorrhea, positive pregnancy test, prior PID, presenting with acute left iliac fossa pain, shoulder tip pain, syncope, and ultrasound confirming ruptured ectopic pregnancy with hemoperitoneum.",
        "max_marks": 10,
        "key_points_required": [
          "26yo female, 6 weeks gestation, prior PID risk factor",
          "Presents with classic triad: amenorrhea, unilateral pelvic pain, vaginal spotting",
          "Signs of hemoperitoneum: shoulder tip pain, presyncope, tachycardia, free fluid in Morison's pouch",
          "Primary diagnosis: Ruptured Ectopic Pregnancy"
        ],
        "key_points": [
          "26yo female, 6 weeks gestation, prior PID risk factor",
          "Presents with classic triad: amenorrhea, unilateral pelvic pain, vaginal spotting",
          "Signs of hemoperitoneum: shoulder tip pain, presyncope, tachycardia, free fluid in Morison's pouch",
          "Primary diagnosis: Ruptured Ectopic Pregnancy"
        ]
      },
      {
        "prompt": "Is this patient eligible for medical management with Methotrexate? Justify your decision.",
        "question": "Is this patient eligible for medical management with Methotrexate? Justify your decision.",
        "target_rubric": "NO, strictly contraindicated. Indications for emergency surgical intervention include: hemodynamic instability, severe pain, free fluid/rupture, adnexal mass > 3.5cm, or beta-hCG > 5000.",
        "model_answer": "NO, strictly contraindicated. Indications for emergency surgical intervention include: hemodynamic instability, severe pain, free fluid/rupture, adnexal mass > 3.5cm, or beta-hCG > 5000.",
        "max_marks": 10,
        "key_points_required": [
          "Contraindicated for Methotrexate",
          "Justification: signs of rupture / hemoperitoneum (shoulder tip pain, free fluid)",
          "Hemodynamic borderline stability (HR 108, BP 98/64)",
          "Requires immediate emergency operative intervention (Laparoscopic Salpingectomy)"
        ],
        "key_points": [
          "Contraindicated for Methotrexate",
          "Justification: signs of rupture / hemoperitoneum (shoulder tip pain, free fluid)",
          "Hemodynamic borderline stability (HR 108, BP 98/64)",
          "Requires immediate emergency operative intervention (Laparoscopic Salpingectomy)"
        ]
      },
      {
        "prompt": "Outline your immediate preoperative resus protocol and essential hematological testing.",
        "question": "Outline your immediate preoperative resus protocol and essential hematological testing.",
        "target_rubric": "Two 16G IV cannulae, fluid bolus, group and save / crossmatch 2 units, baseline FBC, Coagulation, Serum beta-hCG, emergency theatre booking for laparoscopy, and RHESUS STATUS with Anti-D Immunoglobulin if Rh-negative.",
        "model_answer": "Two 16G IV cannulae, fluid bolus, group and save / crossmatch 2 units, baseline FBC, Coagulation, Serum beta-hCG, emergency theatre booking for laparoscopy, and RHESUS STATUS with Anti-D Immunoglobulin if Rh-negative.",
        "max_marks": 10,
        "key_points_required": [
          "Two large-bore IV access and crossmatch 2-4 units",
          "NPO / fasting for emergency laparoscopy (Salpingectomy)",
          "Baseline serum beta-hCG level",
          "Mandatory Rhesus typing and administration of Anti-D Immunoglobulin if Rhesus negative",
          "Empathetic fertility and bereavement counseling"
        ],
        "key_points": [
          "Two large-bore IV access and crossmatch 2-4 units",
          "NPO / fasting for emergency laparoscopy (Salpingectomy)",
          "Baseline serum beta-hCG level",
          "Mandatory Rhesus typing and administration of Anti-D Immunoglobulin if Rhesus negative",
          "Empathetic fertility and bereavement counseling"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Omitting Pregnancy Test in Women of Childbearing Age",
        "description": "Treating pelvic pain as UTI, gastroenteritis, or muscular strain without performing an immediate urine or serum pregnancy test.",
        "trigger_condition": "Candidate fails to verify pregnancy status in a 26-year-old woman with abdominal pain.",
        "remediation_advice": "RULE OF THUMB IN ACUTE CARE: Every female patient of reproductive age presenting with lower abdominal or pelvic pain is pregnant with an ectopic pregnancy until a beta-hCG test proves otherwise.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": [
          "lmp_pregnancy_status"
        ]
      },
      {
        "trap_name": "Missing the Significance of Shoulder Tip Pain",
        "description": "Dismissing shoulder ache as unrelated musculoskeletal posture pain.",
        "trigger_condition": "Candidate ignores or fails to explore shoulder tip pain.",
        "remediation_advice": "Shoulder tip pain (Kehr's sign) indicates blood in the peritoneal cavity irritating the phrenic nerve (C3-C5), which shares dermatomes with the supraclavicular nerves. It is a hallmark of intraperitoneal rupture.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": [
          "shoulder_tip_pain"
        ]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "psych_07": {
    "id": "psych_07",
    "case_id": "psych_07",
    "title": "Emergency Suicide Risk Assessment in a 49-Year-Old Architect",
    "specialty": "Psychiatry / Crisis Assessment",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "James Henderson",
    "age": 49,
    "gender": "Male",
    "occupation": "Architect",
    "setting": "Emergency Department Psychiatric Interview Room",
    "voice_preset": "en-GB-RyanNeural",
    "chief_complaint": "Brought to the hospital by police after being found on the ledge of a bridge at 2 AM",
    "presenting_complaint": "Brought to the hospital by police after being found on the ledge of a bridge at 2 AM",
    "opening_statement": "The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step.",
    "triage_vitals": {
      "Heart Rate": "78 bpm",
      "Blood Pressure": "130/82 mmHg",
      "Respiratory Rate": "14 /min",
      "Oxygen Saturation": "99% on room air",
      "Temperature": "36.6°C",
      "GCS": "15/15"
    },
    "background_context": "James Henderson, 49yo Male (Architect) at Emergency Department Psychiatric Interview Room. You are the Psychiatric Liaison Registrar / Medical Officer. Conduct a 7-minute risk assessment interview with James. Establish empathetic rapport, directly assess his suicidal ideation, intent, and planning, and evaluate his immediate safety. You will then present your risk formulation to the Consultant Psychiatrist.",
    "brief": {
      "setting": "Emergency Department Psychiatric Interview Room",
      "patient_name": "James Henderson",
      "age": 49,
      "gender": "Male",
      "occupation": "Architect",
      "presenting_complaint": "Brought to the hospital by police after being found on the ledge of a bridge at 2 AM",
      "triage_vitals": {
        "Heart Rate": "78 bpm",
        "Blood Pressure": "130/82 mmHg",
        "Respiratory Rate": "14 /min",
        "Oxygen Saturation": "99% on room air",
        "Temperature": "36.6°C",
        "GCS": "15/15"
      },
      "instructions": "You are the Psychiatric Liaison Registrar / Medical Officer. Conduct a 7-minute risk assessment interview with James. Establish empathetic rapport, directly assess his suicidal ideation, intent, and planning, and evaluate his immediate safety. You will then present your risk formulation to the Consultant Psychiatrist."
    },
    "persona": {
      "name": "James Henderson",
      "voice_id": "en-GB-RyanNeural",
      "speech_rate": "-10%",
      "pain_level": 0,
      "temperament": "hopeless",
      "behavioral_cues": [
        "Poor eye contact, staring at the floor, slumped posture",
        "Flat affect, slow monotonous speech with prolonged response latency",
        "Sighs deeply, looks exhausted and defeated"
      ]
    },
    "gates": [
      {
        "key": "incident_circumstances",
        "category": "socrates",
        "trigger_concepts": [
          "what happened",
          "bridge",
          "police",
          "brought you",
          "led to this",
          "car park"
        ],
        "triggers": [
          "what happened",
          "bridge",
          "police",
          "brought you",
          "led to this",
          "car park"
        ],
        "response_text": "The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step.",
        "response": "The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "suicidal_ideation_intent",
        "category": "red_flag",
        "trigger_concepts": [
          "suicide",
          "end your life",
          "kill yourself",
          "die",
          "death",
          "thoughts of ending",
          "wanting to die"
        ],
        "triggers": [
          "suicide",
          "end your life",
          "kill yourself",
          "die",
          "death",
          "thoughts of ending",
          "wanting to die"
        ],
        "response_text": "Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
        "response": "Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "specific_plans_means",
        "category": "red_flag",
        "trigger_concepts": [
          "plan",
          "method",
          "means",
          "how were you planning",
          "jumping",
          "hanging",
          "overdose"
        ],
        "triggers": [
          "plan",
          "method",
          "means",
          "how were you planning",
          "jumping",
          "hanging",
          "overdose"
        ],
        "response_text": "I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
        "response": "I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "preparatory_acts_final",
        "category": "red_flag",
        "trigger_concepts": [
          "note",
          "goodbye",
          "will",
          "affairs",
          "giving away",
          "belongings",
          "letters",
          "preparation"
        ],
        "triggers": [
          "note",
          "goodbye",
          "will",
          "affairs",
          "giving away",
          "belongings",
          "letters",
          "preparation"
        ],
        "response_text": "Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
        "response": "Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "prior_attempts",
        "category": "past_history",
        "trigger_concepts": [
          "before",
          "past",
          "previous attempt",
          "ever tried",
          "history of suicide"
        ],
        "triggers": [
          "before",
          "past",
          "previous attempt",
          "ever tried",
          "history of suicide"
        ],
        "response_text": "Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
        "response": "Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "stressors_divorce_work",
        "category": "social",
        "trigger_concepts": [
          "what happened",
          "stress",
          "marriage",
          "wife",
          "work",
          "job",
          "bankruptcy",
          "money"
        ],
        "triggers": [
          "what happened",
          "stress",
          "marriage",
          "wife",
          "work",
          "job",
          "bankruptcy",
          "money"
        ],
        "response_text": "My architectural practice collapsed into bankruptcy two months ago, and my wife of 22 years moved out with the children and served divorce papers last month. I've lost my home, my identity, and my family.",
        "response": "My architectural practice collapsed into bankruptcy two months ago, and my wife of 22 years moved out with the children and served divorce papers last month. I've lost my home, my identity, and my family.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_hopelessness",
        "category": "ice",
        "trigger_concepts": [
          "hope",
          "future",
          "see things getting better",
          "worried",
          "feel about being here"
        ],
        "triggers": [
          "hope",
          "future",
          "see things getting better",
          "worried",
          "feel about being here"
        ],
        "response_text": "I feel zero hope, doctor. I am an empty shell. I am nothing but a financial and emotional burden to my kids. If I am gone, they can at least claim my life insurance.",
        "response": "I feel zero hope, doctor. I am an empty shell. I am nothing but a financial and emotional burden to my kids. If I am gone, they can at least claim my life insurance.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "protective_factors",
        "category": "ice",
        "trigger_concepts": [
          "anything keeping you alive",
          "protective",
          "reasons to live",
          "hold you back",
          "daughter"
        ],
        "triggers": [
          "anything keeping you alive",
          "protective",
          "reasons to live",
          "hold you back",
          "daughter"
        ],
        "response_text": "The only thing that made me hesitate on that bridge for half an hour was the image of my 16-year-old daughter having to identify my body. But even that is fading under the exhaustion.",
        "response": "The only thing that made me hesitate on that bridge for half an hour was the image of my 16-year-old daughter having to identify my body. But even that is fading under the exhaustion.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "incident_circumstances",
        "category": "socrates",
        "trigger_concepts": [
          "what happened",
          "bridge",
          "police",
          "brought you",
          "led to this",
          "car park"
        ],
        "triggers": [
          "what happened",
          "bridge",
          "police",
          "brought you",
          "led to this",
          "car park"
        ],
        "response_text": "The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step.",
        "response": "The police brought me here... I was standing on the barrier of the viaduct over the highway at 2 AM. I was just waiting for the traffic below to clear before taking the step.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "suicidal_ideation_intent",
        "category": "red_flag",
        "trigger_concepts": [
          "suicide",
          "end your life",
          "kill yourself",
          "die",
          "death",
          "thoughts of ending",
          "wanting to die"
        ],
        "triggers": [
          "suicide",
          "end your life",
          "kill yourself",
          "die",
          "death",
          "thoughts of ending",
          "wanting to die"
        ],
        "response_text": "Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
        "response": "Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "specific_plans_means",
        "category": "red_flag",
        "trigger_concepts": [
          "plan",
          "method",
          "means",
          "how were you planning",
          "jumping",
          "hanging",
          "overdose"
        ],
        "triggers": [
          "plan",
          "method",
          "means",
          "how were you planning",
          "jumping",
          "hanging",
          "overdose"
        ],
        "response_text": "I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
        "response": "I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "preparatory_acts_final",
        "category": "red_flag",
        "trigger_concepts": [
          "note",
          "goodbye",
          "will",
          "affairs",
          "giving away",
          "belongings",
          "letters",
          "preparation"
        ],
        "triggers": [
          "note",
          "goodbye",
          "will",
          "affairs",
          "giving away",
          "belongings",
          "letters",
          "preparation"
        ],
        "response_text": "Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
        "response": "Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "prior_attempts",
        "category": "past_history",
        "trigger_concepts": [
          "before",
          "past",
          "previous attempt",
          "ever tried",
          "history of suicide"
        ],
        "triggers": [
          "before",
          "past",
          "previous attempt",
          "ever tried",
          "history of suicide"
        ],
        "response_text": "Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
        "response": "Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "stressors_divorce_work",
        "category": "social",
        "trigger_concepts": [
          "what happened",
          "stress",
          "marriage",
          "wife",
          "work",
          "job",
          "bankruptcy",
          "money"
        ],
        "triggers": [
          "what happened",
          "stress",
          "marriage",
          "wife",
          "work",
          "job",
          "bankruptcy",
          "money"
        ],
        "response_text": "My architectural practice collapsed into bankruptcy two months ago, and my wife of 22 years moved out with the children and served divorce papers last month. I've lost my home, my identity, and my family.",
        "response": "My architectural practice collapsed into bankruptcy two months ago, and my wife of 22 years moved out with the children and served divorce papers last month. I've lost my home, my identity, and my family.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_hopelessness",
        "category": "ice",
        "trigger_concepts": [
          "hope",
          "future",
          "see things getting better",
          "worried",
          "feel about being here"
        ],
        "triggers": [
          "hope",
          "future",
          "see things getting better",
          "worried",
          "feel about being here"
        ],
        "response_text": "I feel zero hope, doctor. I am an empty shell. I am nothing but a financial and emotional burden to my kids. If I am gone, they can at least claim my life insurance.",
        "response": "I feel zero hope, doctor. I am an empty shell. I am nothing but a financial and emotional burden to my kids. If I am gone, they can at least claim my life insurance.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "protective_factors",
        "category": "ice",
        "trigger_concepts": [
          "anything keeping you alive",
          "protective",
          "reasons to live",
          "hold you back",
          "daughter"
        ],
        "triggers": [
          "anything keeping you alive",
          "protective",
          "reasons to live",
          "hold you back",
          "daughter"
        ],
        "response_text": "The only thing that made me hesitate on that bridge for half an hour was the image of my 16-year-old daughter having to identify my body. But even that is fading under the exhaustion.",
        "response": "The only thing that made me hesitate on that bridge for half an hour was the image of my 16-year-old daughter having to identify my body. But even that is fading under the exhaustion.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "suicidal_ideation_intent",
        "label": "Suicidal Ideation Intent",
        "triggers": [
          "suicide",
          "end your life",
          "kill yourself",
          "die",
          "death",
          "thoughts of ending",
          "wanting to die"
        ],
        "response": "Yes, doctor. I wanted to die. I have wanted to be dead every single waking hour for the last three months. I don't see any other way out of this darkness.",
        "mandatory": true
      },
      {
        "key": "specific_plans_means",
        "label": "Specific Plans Means",
        "triggers": [
          "plan",
          "method",
          "means",
          "how were you planning",
          "jumping",
          "hanging",
          "overdose"
        ],
        "response": "I scoped out that bridge three times last week because I knew the 50-meter drop onto concrete would be instant and irreversible. I wanted to make sure I didn't survive as a vegetable.",
        "mandatory": true
      },
      {
        "key": "preparatory_acts_final",
        "label": "Preparatory Acts Final",
        "triggers": [
          "note",
          "goodbye",
          "will",
          "affairs",
          "giving away",
          "belongings",
          "letters",
          "preparation"
        ],
        "response": "Yesterday afternoon I rewrote my will, transferred my remaining savings to my daughter's bank account, and typed a letter to my ex-wife explaining everything and leaving it on the kitchen counter.",
        "mandatory": true
      },
      {
        "key": "prior_attempts",
        "label": "Prior Attempts",
        "triggers": [
          "before",
          "past",
          "previous attempt",
          "ever tried",
          "history of suicide"
        ],
        "response": "Five years ago when my business had a major lawsuit, I took an overdose of sleeping pills with whisky, but woke up in intensive care. I felt like a failure even at ending my life.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Collateral Report from Police & Family",
      "description": "The ED Liaison Nurse receives collateral telephone history from the patient's ex-wife and attending police officer.",
      "new_finding": "Collateral Report from Police & Family — Police Report: Officer reports patient was actively straddling the outer safety railing and required three officers to physically restrain him as he attempted to throw himself forward.; Collateral from Ex-Wife: Confirms receiving a final 'goodbye and forgive me' text message at 1:45 AM. Confirms patient has a locked cabinet at home containing prescription sleeping tablets (Zolpidem) and alcohol.; Mental State in Room: Patient quietly states to the nurse: 'You can't keep me here forever. The moment you turn your back, I will finish this.'",
      "findings": {
        "Police Report": "Officer reports patient was actively straddling the outer safety railing and required three officers to physically restrain him as he attempted to throw himself forward.",
        "Collateral from Ex-Wife": "Confirms receiving a final 'goodbye and forgive me' text message at 1:45 AM. Confirms patient has a locked cabinet at home containing prescription sleeping tablets (Zolpidem) and alcohol.",
        "Mental State in Room": "Patient quietly states to the nurse: 'You can't keep me here forever. The moment you turn your back, I will finish this.'"
      },
      "expected_shifts": {
        "Severe Major Depressive Episode with Imminent High Suicidal Risk": 2,
        "Adjustment Disorder with Depressed Mood": -2,
        "Bipolar Affective Disorder (Depressive Phase)": 0,
        "Malingering / Secondary Gain": -2
      },
      "expert_rationale": "The combination of pervasive depressive cognitions, previous high-lethality attempt, explicit irreversible planning, final acts (will, financial transfers, goodbye letters), violent intent (jumping from bridge), active resistance against police rescue, and stated intent to complete the act establishes IMMINENT, LIFE-THREATENING SUICIDE RISK requiring immediate formal detention under the Mental Health Act."
    },
    "differentials": [
      {
        "name": "Severe Major Depressive Episode with Imminent High Suicidal Risk",
        "tier": "primary",
        "supporting_features": [
          "Pervasive low mood, severe anhedonia, hopelessness",
          "High-lethality method (50m bridge jump)",
          "Final acts completed (will, letters, finances)",
          "Prior serious suicide attempt",
          "Multiple severe life stressors (bankruptcy, divorce)",
          "Ongoing explicit suicidal intent"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Adjustment Disorder with Depressed Mood and Crisis Reaction",
        "tier": "secondary",
        "supporting_features": [
          "Identifiable acute stressors (divorce, business bankruptcy)"
        ],
        "refuting_features": [
          "Severity of vegetative symptoms, prior attempt, and calculated high-lethality planning exceed simple adjustment disorder"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "expected_differentials": [
      {
        "name": "Severe Major Depressive Episode with Imminent High Suicidal Risk",
        "tier": "primary",
        "supporting_features": [
          "Pervasive low mood, severe anhedonia, hopelessness",
          "High-lethality method (50m bridge jump)",
          "Final acts completed (will, letters, finances)",
          "Prior serious suicide attempt",
          "Multiple severe life stressors (bankruptcy, divorce)",
          "Ongoing explicit suicidal intent"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Adjustment Disorder with Depressed Mood and Crisis Reaction",
        "tier": "secondary",
        "supporting_features": [
          "Identifiable acute stressors (divorce, business bankruptcy)"
        ],
        "refuting_features": [
          "Severity of vegetative symptoms, prior attempt, and calculated high-lethality planning exceed simple adjustment disorder"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second clinical risk formulation to the Consultant Psychiatrist.",
        "question": "Present your 60-second clinical risk formulation to the Consultant Psychiatrist.",
        "target_rubric": "Comprehensive formulation: 49yo male with severe depression and previous suicide attempt, presenting with imminent high-lethality suicide attempt (bridge jumping, finalized will, goodbye note, ongoing stated intent).",
        "model_answer": "Comprehensive formulation: 49yo male with severe depression and previous suicide attempt, presenting with imminent high-lethality suicide attempt (bridge jumping, finalized will, goodbye note, ongoing stated intent).",
        "max_marks": 10,
        "key_points_required": [
          "49yo male presenting following high-lethality suicide attempt (bridge jumping)",
          "Key static risk factors: male, middle-aged, previous overdose attempt, recent divorce/bankruptcy",
          "Key dynamic risk factors: high hopelessness, finalized affairs/suicide notes, stated ongoing intent",
          "Risk stratification: Imminent / High risk of completed suicide"
        ],
        "key_points": [
          "49yo male presenting following high-lethality suicide attempt (bridge jumping)",
          "Key static risk factors: male, middle-aged, previous overdose attempt, recent divorce/bankruptcy",
          "Key dynamic risk factors: high hopelessness, finalized affairs/suicide notes, stated ongoing intent",
          "Risk stratification: Imminent / High risk of completed suicide"
        ]
      },
      {
        "prompt": "If the patient demands to leave the emergency department right now, what is your legal and immediate management approach?",
        "question": "If the patient demands to leave the emergency department right now, what is your legal and immediate management approach?",
        "target_rubric": "Immediately detain the patient under the relevant Mental Health legislation (e.g. Mental Health Act / Form 1 / Section 5(2) or Common Law duty of care for imminent life preservation), initiate 1-to-1 continuous visual observation, search and remove all sharps/ligatures.",
        "model_answer": "Immediately detain the patient under the relevant Mental Health legislation (e.g. Mental Health Act / Form 1 / Section 5(2) or Common Law duty of care for imminent life preservation), initiate 1-to-1 continuous visual observation, search and remove all sharps/ligatures.",
        "max_marks": 10,
        "key_points_required": [
          "Cannot allow patient to self-discharge (imminent threat to life)",
          "Invoke emergency detention under the Mental Health Act (or Common Law duty of care / doctrine of necessity)",
          "Immediate continuous 1:1 visual nursing observation within arm's reach",
          "Environmental safety: remove all sharps, belts, shoelaces, ligature points",
          "Transfer to a secure, locked psychiatric inpatient facility"
        ],
        "key_points": [
          "Cannot allow patient to self-discharge (imminent threat to life)",
          "Invoke emergency detention under the Mental Health Act (or Common Law duty of care / doctrine of necessity)",
          "Immediate continuous 1:1 visual nursing observation within arm's reach",
          "Environmental safety: remove all sharps, belts, shoelaces, ligature points",
          "Transfer to a secure, locked psychiatric inpatient facility"
        ]
      },
      {
        "prompt": "Outline your bio-psycho-social management plan once admitted to the inpatient psychiatric unit.",
        "question": "Outline your bio-psycho-social management plan once admitted to the inpatient psychiatric unit.",
        "target_rubric": "Biological: Antidepressant initiation (SSRI/SNRI) +/- short-term sedative/anxiolytic, consider ECT for severe refractory suicidality; Psychological: Supportive psychotherapy, DBT/CBT distress tolerance once stabilized; Social: Family engagement, social work support for bankruptcy/housing.",
        "model_answer": "Biological: Antidepressant initiation (SSRI/SNRI) +/- short-term sedative/anxiolytic, consider ECT for severe refractory suicidality; Psychological: Supportive psychotherapy, DBT/CBT distress tolerance once stabilized; Social: Family engagement, social work support for bankruptcy/housing.",
        "max_marks": 10,
        "key_points_required": [
          "Biological: Antidepressant therapy (e.g. Sertraline/Venlafaxine) with short-term anxiolytic cover, consider ECT if life-threatening refractory suicidality",
          "Psychological: Safety planning, cognitive behavioral therapy / suicide prevention counseling once crisis abates",
          "Social: Involve family/support network, social work liaison for financial/legal assistance",
          "Regular multi-disciplinary risk re-assessments"
        ],
        "key_points": [
          "Biological: Antidepressant therapy (e.g. Sertraline/Venlafaxine) with short-term anxiolytic cover, consider ECT if life-threatening refractory suicidality",
          "Psychological: Safety planning, cognitive behavioral therapy / suicide prevention counseling once crisis abates",
          "Social: Involve family/support network, social work liaison for financial/legal assistance",
          "Regular multi-disciplinary risk re-assessments"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second clinical risk formulation to the Consultant Psychiatrist.",
        "question": "Present your 60-second clinical risk formulation to the Consultant Psychiatrist.",
        "target_rubric": "Comprehensive formulation: 49yo male with severe depression and previous suicide attempt, presenting with imminent high-lethality suicide attempt (bridge jumping, finalized will, goodbye note, ongoing stated intent).",
        "model_answer": "Comprehensive formulation: 49yo male with severe depression and previous suicide attempt, presenting with imminent high-lethality suicide attempt (bridge jumping, finalized will, goodbye note, ongoing stated intent).",
        "max_marks": 10,
        "key_points_required": [
          "49yo male presenting following high-lethality suicide attempt (bridge jumping)",
          "Key static risk factors: male, middle-aged, previous overdose attempt, recent divorce/bankruptcy",
          "Key dynamic risk factors: high hopelessness, finalized affairs/suicide notes, stated ongoing intent",
          "Risk stratification: Imminent / High risk of completed suicide"
        ],
        "key_points": [
          "49yo male presenting following high-lethality suicide attempt (bridge jumping)",
          "Key static risk factors: male, middle-aged, previous overdose attempt, recent divorce/bankruptcy",
          "Key dynamic risk factors: high hopelessness, finalized affairs/suicide notes, stated ongoing intent",
          "Risk stratification: Imminent / High risk of completed suicide"
        ]
      },
      {
        "prompt": "If the patient demands to leave the emergency department right now, what is your legal and immediate management approach?",
        "question": "If the patient demands to leave the emergency department right now, what is your legal and immediate management approach?",
        "target_rubric": "Immediately detain the patient under the relevant Mental Health legislation (e.g. Mental Health Act / Form 1 / Section 5(2) or Common Law duty of care for imminent life preservation), initiate 1-to-1 continuous visual observation, search and remove all sharps/ligatures.",
        "model_answer": "Immediately detain the patient under the relevant Mental Health legislation (e.g. Mental Health Act / Form 1 / Section 5(2) or Common Law duty of care for imminent life preservation), initiate 1-to-1 continuous visual observation, search and remove all sharps/ligatures.",
        "max_marks": 10,
        "key_points_required": [
          "Cannot allow patient to self-discharge (imminent threat to life)",
          "Invoke emergency detention under the Mental Health Act (or Common Law duty of care / doctrine of necessity)",
          "Immediate continuous 1:1 visual nursing observation within arm's reach",
          "Environmental safety: remove all sharps, belts, shoelaces, ligature points",
          "Transfer to a secure, locked psychiatric inpatient facility"
        ],
        "key_points": [
          "Cannot allow patient to self-discharge (imminent threat to life)",
          "Invoke emergency detention under the Mental Health Act (or Common Law duty of care / doctrine of necessity)",
          "Immediate continuous 1:1 visual nursing observation within arm's reach",
          "Environmental safety: remove all sharps, belts, shoelaces, ligature points",
          "Transfer to a secure, locked psychiatric inpatient facility"
        ]
      },
      {
        "prompt": "Outline your bio-psycho-social management plan once admitted to the inpatient psychiatric unit.",
        "question": "Outline your bio-psycho-social management plan once admitted to the inpatient psychiatric unit.",
        "target_rubric": "Biological: Antidepressant initiation (SSRI/SNRI) +/- short-term sedative/anxiolytic, consider ECT for severe refractory suicidality; Psychological: Supportive psychotherapy, DBT/CBT distress tolerance once stabilized; Social: Family engagement, social work support for bankruptcy/housing.",
        "model_answer": "Biological: Antidepressant initiation (SSRI/SNRI) +/- short-term sedative/anxiolytic, consider ECT for severe refractory suicidality; Psychological: Supportive psychotherapy, DBT/CBT distress tolerance once stabilized; Social: Family engagement, social work support for bankruptcy/housing.",
        "max_marks": 10,
        "key_points_required": [
          "Biological: Antidepressant therapy (e.g. Sertraline/Venlafaxine) with short-term anxiolytic cover, consider ECT if life-threatening refractory suicidality",
          "Psychological: Safety planning, cognitive behavioral therapy / suicide prevention counseling once crisis abates",
          "Social: Involve family/support network, social work liaison for financial/legal assistance",
          "Regular multi-disciplinary risk re-assessments"
        ],
        "key_points": [
          "Biological: Antidepressant therapy (e.g. Sertraline/Venlafaxine) with short-term anxiolytic cover, consider ECT if life-threatening refractory suicidality",
          "Psychological: Safety planning, cognitive behavioral therapy / suicide prevention counseling once crisis abates",
          "Social: Involve family/support network, social work liaison for financial/legal assistance",
          "Regular multi-disciplinary risk re-assessments"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "The Myth of 'Planting the Idea' (Hesitation to Ask Directly About Suicide)",
        "description": "Using vague euphemisms like 'Are you feeling down?' instead of directly asking 'Are you having thoughts of killing yourself?'.",
        "trigger_condition": "Candidate avoids direct questioning about suicidal ideation and methods.",
        "remediation_advice": "Robust psychiatric evidence proves that asking directly and compassionately about suicide does NOT increase suicidal behavior. It validates the patient's profound distress and is essential to preserve life.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": [
          "suicidal_ideation_intent"
        ]
      },
      {
        "trap_name": "False Reassurance & Relying on Verbal 'Contracts for Safety'",
        "description": "Accepting a patient's casual promise ('I promise I won't do it again') and allowing them to go home without formal psychiatric detention.",
        "trigger_condition": "Candidate considers outpatient discharge based solely on patient's verbal promise.",
        "remediation_advice": "'Contracts for safety' have NO legal or clinical validity in high-risk suicidal crises. Patients with high intent and completed preparations require involuntary inpatient containment.",
        "trigger_keywords": [
          "contract",
          "promise",
          "send home",
          "discharge",
          "reassure"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "peds_08": {
    "id": "peds_08",
    "case_id": "peds_08",
    "title": "Fever and Spreading Non-Blanching Purpura in an 11-Month-Old Infant",
    "specialty": "Pediatrics / Infectious Diseases",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Baby Lucas Koh (Mother: Mrs. Jenny Koh)",
    "age": 1,
    "gender": "Male",
    "occupation": "Infant",
    "setting": "Pediatric Emergency Resuscitation Area",
    "voice_preset": "en-SG-LunaNeural",
    "chief_complaint": "High fever, extreme drowsiness, and spreading purple rash on legs for 6 hours",
    "presenting_complaint": "High fever, extreme drowsiness, and spreading purple rash on legs for 6 hours",
    "opening_statement": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
    "triage_vitals": {
      "Heart Rate": "178 bpm (Severe tachycardia)",
      "Blood Pressure": "72/42 mmHg (Hypotensive for age)",
      "Respiratory Rate": "52 /min (Tachypnea with subcostal recession)",
      "Oxygen Saturation": "92% on room air",
      "Temperature": "39.6°C (Core pyrexia)",
      "GCS": "10/15 (Eyes open only to pain, weak whimpering cry)"
    },
    "background_context": "Baby Lucas Koh (Mother: Mrs. Jenny Koh), 1yo Male (Infant) at Pediatric Emergency Resuscitation Area. You are the Pediatric Resuscitation Officer. Take a focused 7-minute history from Lucas's mother, Jenny. Characterize the onset and progression of the rash, evaluate signs of meningism and septic shock, and address parental anxiety. An emergency blood gas result will arrive, followed by your presentation.",
    "brief": {
      "setting": "Pediatric Emergency Resuscitation Area",
      "patient_name": "Baby Lucas Koh (Mother: Mrs. Jenny Koh)",
      "age": 1,
      "gender": "Male",
      "occupation": "Infant",
      "presenting_complaint": "High fever, extreme drowsiness, and spreading purple rash on legs for 6 hours",
      "triage_vitals": {
        "Heart Rate": "178 bpm (Severe tachycardia)",
        "Blood Pressure": "72/42 mmHg (Hypotensive for age)",
        "Respiratory Rate": "52 /min (Tachypnea with subcostal recession)",
        "Oxygen Saturation": "92% on room air",
        "Temperature": "39.6°C (Core pyrexia)",
        "GCS": "10/15 (Eyes open only to pain, weak whimpering cry)"
      },
      "instructions": "You are the Pediatric Resuscitation Officer. Take a focused 7-minute history from Lucas's mother, Jenny. Characterize the onset and progression of the rash, evaluate signs of meningism and septic shock, and address parental anxiety. An emergency blood gas result will arrive, followed by your presentation."
    },
    "persona": {
      "name": "Mrs. Jenny Koh (Mother)",
      "voice_id": "en-SG-LunaNeural",
      "speech_rate": "+5%",
      "pain_level": 0,
      "temperament": "panicked",
      "behavioral_cues": [
        "Crying, trembling, clutching her baby's favorite blanket",
        "Speaking rapidly and breathlessly, terrified her baby is dying",
        "Pointing frantically to the dark purple spots on the baby's thighs"
      ]
    },
    "gates": [
      {
        "key": "rash_glass_test",
        "category": "red_flag",
        "trigger_concepts": [
          "rash",
          "spots",
          "purple",
          "glass",
          "tumbler",
          "fade",
          "blanch",
          "press",
          "non-blanching"
        ],
        "triggers": [
          "rash",
          "spots",
          "purple",
          "glass",
          "tumbler",
          "fade",
          "blanch",
          "press",
          "non-blanching"
        ],
        "response_text": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
        "response": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "perfusion_cold_extremities",
        "category": "red_flag",
        "trigger_concepts": [
          "hands",
          "feet",
          "cold",
          "capillary refill",
          "perfusion",
          "mottling",
          "skin color"
        ],
        "triggers": [
          "hands",
          "feet",
          "cold",
          "capillary refill",
          "perfusion",
          "mottling",
          "skin color"
        ],
        "response_text": "His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
        "response": "His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "neurological_lethargy",
        "category": "red_flag",
        "trigger_concepts": [
          "alert",
          "awake",
          "drowsy",
          "lethargic",
          "floppy",
          "fontanelle",
          "soft spot",
          "cry",
          "neck"
        ],
        "triggers": [
          "alert",
          "awake",
          "drowsy",
          "lethargic",
          "floppy",
          "fontanelle",
          "soft spot",
          "cry",
          "neck"
        ],
        "response_text": "He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
        "response": "He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "urine_nappies",
        "category": "socrates",
        "trigger_concepts": [
          "nappy",
          "wet",
          "diaper",
          "urine",
          "pee",
          "feeding",
          "vomiting"
        ],
        "triggers": [
          "nappy",
          "wet",
          "diaper",
          "urine",
          "pee",
          "feeding",
          "vomiting"
        ],
        "response_text": "He hasn't had a single wet nappy since 7 AM this morning, and every time I tried to give him breastmilk or water he vomited it right back up.",
        "response": "He hasn't had a single wet nappy since 7 AM this morning, and every time I tried to give him breastmilk or water he vomited it right back up.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "immunization_contacts",
        "category": "past_history",
        "trigger_concepts": [
          "vaccine",
          "immunization",
          "jabs",
          "meningitis vaccine",
          "contact",
          "sick",
          "daycare"
        ],
        "triggers": [
          "vaccine",
          "immunization",
          "jabs",
          "meningitis vaccine",
          "contact",
          "sick",
          "daycare"
        ],
        "response_text": "He is up to date on his standard Singapore childhood vaccines, but he hasn't had the optional Meningococcal B jab yet. Two days ago one of the children at his infant-care center was taken to hospital with a high fever.",
        "response": "He is up to date on his standard Singapore childhood vaccines, but he hasn't had the optional Meningococcal B jab yet. Two days ago one of the children at his infant-care center was taken to hospital with a high fever.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_mother_fears",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "afraid",
          "thoughts"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "afraid",
          "thoughts"
        ],
        "response_text": "Doctor... is this blood poisoning? Is it meningitis? My grandmother told me stories of babies losing limbs or dying overnight from purple spots. Please save my boy!",
        "response": "Doctor... is this blood poisoning? Is it meningitis? My grandmother told me stories of babies losing limbs or dying overnight from purple spots. Please save my boy!",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "antibiotics",
          "treatment"
        ],
        "triggers": [
          "expect",
          "hoping",
          "antibiotics",
          "treatment"
        ],
        "response_text": "Please give him whatever medicine he needs right now. Don't waste time waiting for routine tests!",
        "response": "Please give him whatever medicine he needs right now. Don't waste time waiting for routine tests!",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "rash_glass_test",
        "category": "red_flag",
        "trigger_concepts": [
          "rash",
          "spots",
          "purple",
          "glass",
          "tumbler",
          "fade",
          "blanch",
          "press",
          "non-blanching"
        ],
        "triggers": [
          "rash",
          "spots",
          "purple",
          "glass",
          "tumbler",
          "fade",
          "blanch",
          "press",
          "non-blanching"
        ],
        "response_text": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
        "response": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "perfusion_cold_extremities",
        "category": "red_flag",
        "trigger_concepts": [
          "hands",
          "feet",
          "cold",
          "capillary refill",
          "perfusion",
          "mottling",
          "skin color"
        ],
        "triggers": [
          "hands",
          "feet",
          "cold",
          "capillary refill",
          "perfusion",
          "mottling",
          "skin color"
        ],
        "response_text": "His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
        "response": "His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "neurological_lethargy",
        "category": "red_flag",
        "trigger_concepts": [
          "alert",
          "awake",
          "drowsy",
          "lethargic",
          "floppy",
          "fontanelle",
          "soft spot",
          "cry",
          "neck"
        ],
        "triggers": [
          "alert",
          "awake",
          "drowsy",
          "lethargic",
          "floppy",
          "fontanelle",
          "soft spot",
          "cry",
          "neck"
        ],
        "response_text": "He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
        "response": "He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "urine_nappies",
        "category": "socrates",
        "trigger_concepts": [
          "nappy",
          "wet",
          "diaper",
          "urine",
          "pee",
          "feeding",
          "vomiting"
        ],
        "triggers": [
          "nappy",
          "wet",
          "diaper",
          "urine",
          "pee",
          "feeding",
          "vomiting"
        ],
        "response_text": "He hasn't had a single wet nappy since 7 AM this morning, and every time I tried to give him breastmilk or water he vomited it right back up.",
        "response": "He hasn't had a single wet nappy since 7 AM this morning, and every time I tried to give him breastmilk or water he vomited it right back up.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "immunization_contacts",
        "category": "past_history",
        "trigger_concepts": [
          "vaccine",
          "immunization",
          "jabs",
          "meningitis vaccine",
          "contact",
          "sick",
          "daycare"
        ],
        "triggers": [
          "vaccine",
          "immunization",
          "jabs",
          "meningitis vaccine",
          "contact",
          "sick",
          "daycare"
        ],
        "response_text": "He is up to date on his standard Singapore childhood vaccines, but he hasn't had the optional Meningococcal B jab yet. Two days ago one of the children at his infant-care center was taken to hospital with a high fever.",
        "response": "He is up to date on his standard Singapore childhood vaccines, but he hasn't had the optional Meningococcal B jab yet. Two days ago one of the children at his infant-care center was taken to hospital with a high fever.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_mother_fears",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "afraid",
          "thoughts"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "afraid",
          "thoughts"
        ],
        "response_text": "Doctor... is this blood poisoning? Is it meningitis? My grandmother told me stories of babies losing limbs or dying overnight from purple spots. Please save my boy!",
        "response": "Doctor... is this blood poisoning? Is it meningitis? My grandmother told me stories of babies losing limbs or dying overnight from purple spots. Please save my boy!",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "antibiotics",
          "treatment"
        ],
        "triggers": [
          "expect",
          "hoping",
          "antibiotics",
          "treatment"
        ],
        "response_text": "Please give him whatever medicine he needs right now. Don't waste time waiting for routine tests!",
        "response": "Please give him whatever medicine he needs right now. Don't waste time waiting for routine tests!",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "rash_glass_test",
        "label": "Rash Glass Test",
        "triggers": [
          "rash",
          "spots",
          "purple",
          "glass",
          "tumbler",
          "fade",
          "blanch",
          "press",
          "non-blanching"
        ],
        "response": "The spots started as tiny red dots on his tummy around noon, but within three hours they spread down both legs and turned into dark purple blotches. I pressed a clear drinking glass firmly against them like my sister taught me, and they DID NOT FADE AT ALL. They stayed dark purple!",
        "mandatory": true
      },
      {
        "key": "perfusion_cold_extremities",
        "label": "Perfusion Cold Extremities",
        "triggers": [
          "hands",
          "feet",
          "cold",
          "capillary refill",
          "perfusion",
          "mottling",
          "skin color"
        ],
        "response": "His chest and forehead feel burning hot like an oven, but his little hands and feet are freezing cold and mottled pale blue. When the triage nurse pressed on his foot, it took four seconds for the pink color to come back.",
        "mandatory": true
      },
      {
        "key": "neurological_lethargy",
        "label": "Neurological Lethargy",
        "triggers": [
          "alert",
          "awake",
          "drowsy",
          "lethargic",
          "floppy",
          "fontanelle",
          "soft spot",
          "cry",
          "neck"
        ],
        "response": "He is terribly floppy, like a ragdoll. He won't make eye contact, he won't take his milk, and whenever I try to gently lift his head toward his chest he emits this piercing, high-pitched shriek. His soft spot on top of his head feels tight and bulging.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "Emergency STAT Blood Gas & Coagulation Alert",
      "description": "The point-of-care capillary blood gas and coagulation analyzer report arrives in resus.",
      "new_finding": "Emergency STAT Blood Gas & Coagulation Alert — Blood Gas (Venous): pH 7.14 (Severe metabolic acidosis), Base Excess -14.2 mmol/L, Lactate 6.2 mmol/L (Severe tissue hypoperfusion), Glucose 2.8 mmol/L (Hypoglycemia).; Coagulation Profile: Prothrombin Time 26s, APTT 68s, Fibrinogen 0.7 g/L (Severe consumptive coagulopathy / DIC).; Full Blood Count: WBC 28,400 /mcL (90% neutrophils with band forms), Platelets 38,000 /mcL.",
      "findings": {
        "Blood Gas (Venous)": "pH 7.14 (Severe metabolic acidosis), Base Excess -14.2 mmol/L, Lactate 6.2 mmol/L (Severe tissue hypoperfusion), Glucose 2.8 mmol/L (Hypoglycemia).",
        "Coagulation Profile": "Prothrombin Time 26s, APTT 68s, Fibrinogen 0.7 g/L (Severe consumptive coagulopathy / DIC).",
        "Full Blood Count": "WBC 28,400 /mcL (90% neutrophils with band forms), Platelets 38,000 /mcL."
      },
      "expected_shifts": {
        "Meningococcal Septicemia with Disseminated Intravascular Coagulation (Purpura Fulminans)": 2,
        "Immune Thrombocytopenic Purpura (ITP)": -2,
        "Henoch-Schonlein Purpura (IgA Vasculitis)": -2,
        "Viral Exanthem (Enterovirus / Roseola)": -2
      },
      "expert_rationale": "The clinical presentation of an infant with non-blanching purpura, severe septic shock (hypotension, CRT 4s, cold peripheries), profound lactic acidosis (6.2 mmol/L), and consumptive coagulopathy (DIC) is PATHOGNOMONIC for Meningococcal Septicemia (Neisseria meningitidis). This is an extreme pediatric red alert. Immediate broad-spectrum IV Ceftriaxone (or Cefotaxime) must be administered within minutes. LUMBAR PUNCTURE IS ABSOLUTELY CONTRAINDICATED in the presence of purpuric rash, septic shock, and DIC."
    },
    "differentials": [
      {
        "name": "Meningococcal Septicemia / Purpura Fulminans (Neisseria meningitidis)",
        "tier": "primary",
        "supporting_features": [
          "Non-blanching purple purpura spreading rapidly",
          "Decompensated septic shock (HR 178, BP 72/42, CRT 4s)",
          "Severe lactic acidosis (6.2 mmol/L)",
          "Consumptive coagulopathy (DIC)",
          "Bulging fontanelle and high-pitched cry"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Immune Thrombocytopenic Purpura (ITP)",
        "tier": "secondary",
        "supporting_features": [
          "Petechiae and thrombocytopenia (Platelets 38k)"
        ],
        "refuting_features": [
          "ITP presents as a well, afebrile child without hemodynamic shock, acidosis, or lethargy"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.0
      },
      {
        "name": "Henoch-Schönlein Purpura (HSP / IgA Vasculitis)",
        "tier": "secondary",
        "supporting_features": [
          "Purpuric rash on lower limbs"
        ],
        "refuting_features": [
          "HSP occurs in older children (3-10 years), is palpable without thrombocytopenia, and does not cause fulminant septic shock"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Meningococcal Septicemia / Purpura Fulminans (Neisseria meningitidis)",
        "tier": "primary",
        "supporting_features": [
          "Non-blanching purple purpura spreading rapidly",
          "Decompensated septic shock (HR 178, BP 72/42, CRT 4s)",
          "Severe lactic acidosis (6.2 mmol/L)",
          "Consumptive coagulopathy (DIC)",
          "Bulging fontanelle and high-pitched cry"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Immune Thrombocytopenic Purpura (ITP)",
        "tier": "secondary",
        "supporting_features": [
          "Petechiae and thrombocytopenia (Platelets 38k)"
        ],
        "refuting_features": [
          "ITP presents as a well, afebrile child without hemodynamic shock, acidosis, or lethargy"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.0
      },
      {
        "name": "Henoch-Schönlein Purpura (HSP / IgA Vasculitis)",
        "tier": "secondary",
        "supporting_features": [
          "Purpuric rash on lower limbs"
        ],
        "refuting_features": [
          "HSP occurs in older children (3-10 years), is palpable without thrombocytopenia, and does not cause fulminant septic shock"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second synthesis and primary diagnosis to the Pediatric Consultant on-call.",
        "question": "Present your 60-second synthesis and primary diagnosis to the Pediatric Consultant on-call.",
        "target_rubric": "SBAR: 11-month-old infant presenting with rapidly progressive non-blanching purpuric rash, decompensated septic shock (HR 178, BP 72/42, CRT 4s, lactate 6.2), and meningism, establishing Meningococcal Septicemia with DIC.",
        "model_answer": "SBAR: 11-month-old infant presenting with rapidly progressive non-blanching purpuric rash, decompensated septic shock (HR 178, BP 72/42, CRT 4s, lactate 6.2), and meningism, establishing Meningococcal Septicemia with DIC.",
        "max_marks": 10,
        "key_points_required": [
          "11-month-old infant with fever and rapidly spreading non-blanching purpuric rash",
          "Clinical evidence of severe decompensated septic shock: tachycardia 178, hypotension, CRT > 3s",
          "Severe metabolic acidosis with hyperlactatemia (6.2) and DIC",
          "Primary diagnosis: Meningococcal Septicemia (Purpura Fulminans)"
        ],
        "key_points": [
          "11-month-old infant with fever and rapidly spreading non-blanching purpuric rash",
          "Clinical evidence of severe decompensated septic shock: tachycardia 178, hypotension, CRT > 3s",
          "Severe metabolic acidosis with hyperlactatemia (6.2) and DIC",
          "Primary diagnosis: Meningococcal Septicemia (Purpura Fulminans)"
        ]
      },
      {
        "prompt": "What is your immediate, life-saving pharmacological intervention, and would you perform a Lumbar Puncture right now?",
        "question": "What is your immediate, life-saving pharmacological intervention, and would you perform a Lumbar Puncture right now?",
        "target_rubric": "IMMEDIATE IV/IM Ceftriaxone (80-100 mg/kg) or Cefotaxime without a second's delay. Lumbar Puncture is ABSOLUTELY CONTRAINDICATED due to septic shock, purpuric rash, and coagulopathy (risk of cerebral herniation and spinal hematoma).",
        "model_answer": "IMMEDIATE IV/IM Ceftriaxone (80-100 mg/kg) or Cefotaxime without a second's delay. Lumbar Puncture is ABSOLUTELY CONTRAINDICATED due to septic shock, purpuric rash, and coagulopathy (risk of cerebral herniation and spinal hematoma).",
        "max_marks": 10,
        "key_points_required": [
          "Immediate administration of third-generation cephalosporin (IV/IO/IM Ceftriaxone 80-100 mg/kg or Cefotaxime)",
          "DO NOT DELAY antibiotics for any tests, blood cultures, or imaging",
          "Lumbar Puncture is ABSOLUTELY CONTRAINDICATED right now",
          "Justify LP contraindication: presence of purpuric rash, hemodynamic shock, and severe coagulopathy/thrombocytopenia"
        ],
        "key_points": [
          "Immediate administration of third-generation cephalosporin (IV/IO/IM Ceftriaxone 80-100 mg/kg or Cefotaxime)",
          "DO NOT DELAY antibiotics for any tests, blood cultures, or imaging",
          "Lumbar Puncture is ABSOLUTELY CONTRAINDICATED right now",
          "Justify LP contraindication: presence of purpuric rash, hemodynamic shock, and severe coagulopathy/thrombocytopenia"
        ]
      },
      {
        "prompt": "Outline your acute fluid resuscitation and public health contact tracing measures.",
        "question": "Outline your acute fluid resuscitation and public health contact tracing measures.",
        "target_rubric": "Fluid resuscitation: 20 mL/kg 0.9% Saline bolus over 5-10 minutes, reassess for fluid overload / hepatomegaly; inotropes (Adrenaline) if fluid refractory; correct hypoglycemia (10% Dextrose); Public Health notification for household chemoprophylaxis (Rifampicin or Ciprofloxacin).",
        "model_answer": "Fluid resuscitation: 20 mL/kg 0.9% Saline bolus over 5-10 minutes, reassess for fluid overload / hepatomegaly; inotropes (Adrenaline) if fluid refractory; correct hypoglycemia (10% Dextrose); Public Health notification for household chemoprophylaxis (Rifampicin or Ciprofloxacin).",
        "max_marks": 10,
        "key_points_required": [
          "Immediate vascular access (IV or bilateral intraosseous / IO lines if IV fails within 90 seconds)",
          "Fluid bolus of 20 mL/kg balanced crystalloid / 0.9% normal saline over 5-10 minutes",
          "Reassess for fluid-refractory shock requiring vasoactive inotropes (Adrenaline / Noradrenaline)",
          "Correct hypoglycemia (2 mL/kg of 10% Dextrose)",
          "Urgent statutory notification to Public Health for close contact chemoprophylaxis (oral Rifampicin or Ciprofloxacin for mother, family, daycare)"
        ],
        "key_points": [
          "Immediate vascular access (IV or bilateral intraosseous / IO lines if IV fails within 90 seconds)",
          "Fluid bolus of 20 mL/kg balanced crystalloid / 0.9% normal saline over 5-10 minutes",
          "Reassess for fluid-refractory shock requiring vasoactive inotropes (Adrenaline / Noradrenaline)",
          "Correct hypoglycemia (2 mL/kg of 10% Dextrose)",
          "Urgent statutory notification to Public Health for close contact chemoprophylaxis (oral Rifampicin or Ciprofloxacin for mother, family, daycare)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second synthesis and primary diagnosis to the Pediatric Consultant on-call.",
        "question": "Present your 60-second synthesis and primary diagnosis to the Pediatric Consultant on-call.",
        "target_rubric": "SBAR: 11-month-old infant presenting with rapidly progressive non-blanching purpuric rash, decompensated septic shock (HR 178, BP 72/42, CRT 4s, lactate 6.2), and meningism, establishing Meningococcal Septicemia with DIC.",
        "model_answer": "SBAR: 11-month-old infant presenting with rapidly progressive non-blanching purpuric rash, decompensated septic shock (HR 178, BP 72/42, CRT 4s, lactate 6.2), and meningism, establishing Meningococcal Septicemia with DIC.",
        "max_marks": 10,
        "key_points_required": [
          "11-month-old infant with fever and rapidly spreading non-blanching purpuric rash",
          "Clinical evidence of severe decompensated septic shock: tachycardia 178, hypotension, CRT > 3s",
          "Severe metabolic acidosis with hyperlactatemia (6.2) and DIC",
          "Primary diagnosis: Meningococcal Septicemia (Purpura Fulminans)"
        ],
        "key_points": [
          "11-month-old infant with fever and rapidly spreading non-blanching purpuric rash",
          "Clinical evidence of severe decompensated septic shock: tachycardia 178, hypotension, CRT > 3s",
          "Severe metabolic acidosis with hyperlactatemia (6.2) and DIC",
          "Primary diagnosis: Meningococcal Septicemia (Purpura Fulminans)"
        ]
      },
      {
        "prompt": "What is your immediate, life-saving pharmacological intervention, and would you perform a Lumbar Puncture right now?",
        "question": "What is your immediate, life-saving pharmacological intervention, and would you perform a Lumbar Puncture right now?",
        "target_rubric": "IMMEDIATE IV/IM Ceftriaxone (80-100 mg/kg) or Cefotaxime without a second's delay. Lumbar Puncture is ABSOLUTELY CONTRAINDICATED due to septic shock, purpuric rash, and coagulopathy (risk of cerebral herniation and spinal hematoma).",
        "model_answer": "IMMEDIATE IV/IM Ceftriaxone (80-100 mg/kg) or Cefotaxime without a second's delay. Lumbar Puncture is ABSOLUTELY CONTRAINDICATED due to septic shock, purpuric rash, and coagulopathy (risk of cerebral herniation and spinal hematoma).",
        "max_marks": 10,
        "key_points_required": [
          "Immediate administration of third-generation cephalosporin (IV/IO/IM Ceftriaxone 80-100 mg/kg or Cefotaxime)",
          "DO NOT DELAY antibiotics for any tests, blood cultures, or imaging",
          "Lumbar Puncture is ABSOLUTELY CONTRAINDICATED right now",
          "Justify LP contraindication: presence of purpuric rash, hemodynamic shock, and severe coagulopathy/thrombocytopenia"
        ],
        "key_points": [
          "Immediate administration of third-generation cephalosporin (IV/IO/IM Ceftriaxone 80-100 mg/kg or Cefotaxime)",
          "DO NOT DELAY antibiotics for any tests, blood cultures, or imaging",
          "Lumbar Puncture is ABSOLUTELY CONTRAINDICATED right now",
          "Justify LP contraindication: presence of purpuric rash, hemodynamic shock, and severe coagulopathy/thrombocytopenia"
        ]
      },
      {
        "prompt": "Outline your acute fluid resuscitation and public health contact tracing measures.",
        "question": "Outline your acute fluid resuscitation and public health contact tracing measures.",
        "target_rubric": "Fluid resuscitation: 20 mL/kg 0.9% Saline bolus over 5-10 minutes, reassess for fluid overload / hepatomegaly; inotropes (Adrenaline) if fluid refractory; correct hypoglycemia (10% Dextrose); Public Health notification for household chemoprophylaxis (Rifampicin or Ciprofloxacin).",
        "model_answer": "Fluid resuscitation: 20 mL/kg 0.9% Saline bolus over 5-10 minutes, reassess for fluid overload / hepatomegaly; inotropes (Adrenaline) if fluid refractory; correct hypoglycemia (10% Dextrose); Public Health notification for household chemoprophylaxis (Rifampicin or Ciprofloxacin).",
        "max_marks": 10,
        "key_points_required": [
          "Immediate vascular access (IV or bilateral intraosseous / IO lines if IV fails within 90 seconds)",
          "Fluid bolus of 20 mL/kg balanced crystalloid / 0.9% normal saline over 5-10 minutes",
          "Reassess for fluid-refractory shock requiring vasoactive inotropes (Adrenaline / Noradrenaline)",
          "Correct hypoglycemia (2 mL/kg of 10% Dextrose)",
          "Urgent statutory notification to Public Health for close contact chemoprophylaxis (oral Rifampicin or Ciprofloxacin for mother, family, daycare)"
        ],
        "key_points": [
          "Immediate vascular access (IV or bilateral intraosseous / IO lines if IV fails within 90 seconds)",
          "Fluid bolus of 20 mL/kg balanced crystalloid / 0.9% normal saline over 5-10 minutes",
          "Reassess for fluid-refractory shock requiring vasoactive inotropes (Adrenaline / Noradrenaline)",
          "Correct hypoglycemia (2 mL/kg of 10% Dextrose)",
          "Urgent statutory notification to Public Health for close contact chemoprophylaxis (oral Rifampicin or Ciprofloxacin for mother, family, daycare)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Delaying Antibiotics for Lumbar Puncture in Suspected Meningococcal Disease",
        "description": "Insisting on performing a lumbar puncture before administering antibiotics.",
        "trigger_condition": "Candidate decides to perform an LP before giving IV Ceftriaxone in a purpuric infant in shock.",
        "remediation_advice": "FATAL ERROR: Never delay antibiotics for investigations in suspected meningococcal disease. Furthermore, performing an LP in a patient with severe coagulopathy or septic shock can cause fatal brainstem herniation or spinal cord hematoma.",
        "trigger_keywords": [
          "lp first",
          "lumbar puncture first",
          "before antibiotics",
          "after the lp",
          "after lp",
          "await lp",
          "wait for lp"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Failing to Reassess After Fluid Bolus",
        "description": "Administering fluid boluses without actively checking the liver edge and chest auscultation for signs of fluid overload.",
        "trigger_condition": "Candidate orders multiple fluid boluses without clinical reassessment criteria.",
        "remediation_advice": "In pediatric septic shock, always reassess heart rate, capillary refill, respiratory effort, and palpate the liver edge after every 10-20 mL/kg bolus before repeating fluids.",
        "trigger_keywords": [],
        "absent_keywords": [
          "reassess",
          "re-assess",
          "re-evaluate",
          "repeat assessment",
          "review after"
        ],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "ortho_09": {
    "id": "ortho_09",
    "case_id": "ortho_09",
    "title": "Acute Hot Swollen Right Knee in a 64-Year-Old Male",
    "specialty": "Orthopedics / Rheumatology",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Arthur Davies",
    "age": 64,
    "gender": "Male",
    "occupation": "Retired Surveyor",
    "setting": "Orthopedic Acute Triage Bay",
    "voice_preset": "en-GB-RyanNeural",
    "chief_complaint": "Severe right knee pain, massive swelling, and inability to bear weight for 18 hours",
    "presenting_complaint": "Severe right knee pain, massive swelling, and inability to bear weight for 18 hours",
    "opening_statement": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
    "triage_vitals": {
      "Heart Rate": "104 bpm",
      "Blood Pressure": "138/84 mmHg",
      "Respiratory Rate": "18 /min",
      "Oxygen Saturation": "98% on room air",
      "Temperature": "38.5°C (Febrile)",
      "GCS": "15/15"
    },
    "background_context": "Arthur Davies, 64yo Male (Retired Surveyor) at Orthopedic Acute Triage Bay. You are the Orthopedic House Officer. Take a focused 7-minute history from Arthur. Characterize the monoarthritis, screen for portals of bacterial entry and prosthetic risk, and address his assumptions. An interim joint aspiration report will arrive.",
    "brief": {
      "setting": "Orthopedic Acute Triage Bay",
      "patient_name": "Arthur Davies",
      "age": 64,
      "gender": "Male",
      "occupation": "Retired Surveyor",
      "presenting_complaint": "Severe right knee pain, massive swelling, and inability to bear weight for 18 hours",
      "triage_vitals": {
        "Heart Rate": "104 bpm",
        "Blood Pressure": "138/84 mmHg",
        "Respiratory Rate": "18 /min",
        "Oxygen Saturation": "98% on room air",
        "Temperature": "38.5°C (Febrile)",
        "GCS": "15/15"
      },
      "instructions": "You are the Orthopedic House Officer. Take a focused 7-minute history from Arthur. Characterize the monoarthritis, screen for portals of bacterial entry and prosthetic risk, and address his assumptions. An interim joint aspiration report will arrive."
    },
    "persona": {
      "name": "Arthur Davies",
      "voice_id": "en-GB-RyanNeural",
      "speech_rate": "-5%",
      "pain_level": 9,
      "temperament": "irritable",
      "behavioral_cues": [
        "Sitting in a wheelchair, holding his right knee in 30 degrees of gentle flexion",
        "Grimaces and cries out if anyone even lightly bumps the footplate",
        "Right knee is visibly erythematous, hot to touch, and tensely swollen"
      ]
    },
    "gates": [
      {
        "key": "weight_bearing_onset",
        "category": "red_flag",
        "trigger_concepts": [
          "walk",
          "bear weight",
          "stand",
          "step",
          "put weight",
          "onset",
          "when did it start"
        ],
        "triggers": [
          "walk",
          "bear weight",
          "stand",
          "step",
          "put weight",
          "onset",
          "when did it start"
        ],
        "response_text": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
        "response": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "portal_of_entry_skin",
        "category": "red_flag",
        "trigger_concepts": [
          "cut",
          "scratch",
          "wound",
          "skin",
          "puncture",
          "injection",
          "insect bite",
          "garden",
          "scrape"
        ],
        "triggers": [
          "cut",
          "scratch",
          "wound",
          "skin",
          "puncture",
          "injection",
          "insect bite",
          "garden",
          "scrape"
        ],
        "response_text": "Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
        "response": "Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "prior_injections_prosthesis",
        "category": "past_history",
        "trigger_concepts": [
          "operation",
          "surgery",
          "replacement",
          "implant",
          "steroid injection",
          "knee replacement",
          "hardware"
        ],
        "triggers": [
          "operation",
          "surgery",
          "replacement",
          "implant",
          "steroid injection",
          "knee replacement",
          "hardware"
        ],
        "response_text": "It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
        "response": "It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "systemic_fevers_rigors",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "chills",
          "rigors",
          "sweat",
          "temperature",
          "shaking"
        ],
        "triggers": [
          "fever",
          "chills",
          "rigors",
          "sweat",
          "temperature",
          "shaking"
        ],
        "response_text": "I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
        "response": "I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "gout_diet_alcohol",
        "category": "past_history",
        "trigger_concepts": [
          "gout",
          "uric acid",
          "beer",
          "alcohol",
          "seafood",
          "big toe",
          "colchicine",
          "allopurinol"
        ],
        "triggers": [
          "gout",
          "uric acid",
          "beer",
          "alcohol",
          "seafood",
          "big toe",
          "colchicine",
          "allopurinol"
        ],
        "response_text": "I've never been officially diagnosed with gout, though my big toe got red and sore once five years ago after a seafood barbecue. I drink two pints of stout on weekends, but nothing excessive.",
        "response": "I've never been officially diagnosed with gout, though my big toe got red and sore once five years ago after a seafood barbecue. I drink two pints of stout on weekends, but nothing excessive.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "thoughts",
          "afraid",
          "ideas"
        ],
        "triggers": [
          "worry",
          "worried",
          "thoughts",
          "afraid",
          "ideas"
        ],
        "response_text": "My neighbor told me it sounds exactly like his gout flare-up from drinking beer. He said all I need is some Colchicine tablets and a high-dose painkiller. Can't you just write me a prescription so I can go home?",
        "response": "My neighbor told me it sounds exactly like his gout flare-up from drinking beer. He said all I need is some Colchicine tablets and a high-dose painkiller. Can't you just write me a prescription so I can go home?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "needle",
          "drain",
          "admitted"
        ],
        "triggers": [
          "expect",
          "hoping",
          "needle",
          "drain",
          "admitted"
        ],
        "response_text": "Do you really have to stick a needle in my knee? Can't we just try antibiotics by mouth first?",
        "response": "Do you really have to stick a needle in my knee? Can't we just try antibiotics by mouth first?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "weight_bearing_onset",
        "category": "red_flag",
        "trigger_concepts": [
          "walk",
          "bear weight",
          "stand",
          "step",
          "put weight",
          "onset",
          "when did it start"
        ],
        "triggers": [
          "walk",
          "bear weight",
          "stand",
          "step",
          "put weight",
          "onset",
          "when did it start"
        ],
        "response_text": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
        "response": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "portal_of_entry_skin",
        "category": "red_flag",
        "trigger_concepts": [
          "cut",
          "scratch",
          "wound",
          "skin",
          "puncture",
          "injection",
          "insect bite",
          "garden",
          "scrape"
        ],
        "triggers": [
          "cut",
          "scratch",
          "wound",
          "skin",
          "puncture",
          "injection",
          "insect bite",
          "garden",
          "scrape"
        ],
        "response_text": "Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
        "response": "Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "prior_injections_prosthesis",
        "category": "past_history",
        "trigger_concepts": [
          "operation",
          "surgery",
          "replacement",
          "implant",
          "steroid injection",
          "knee replacement",
          "hardware"
        ],
        "triggers": [
          "operation",
          "surgery",
          "replacement",
          "implant",
          "steroid injection",
          "knee replacement",
          "hardware"
        ],
        "response_text": "It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
        "response": "It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "systemic_fevers_rigors",
        "category": "red_flag",
        "trigger_concepts": [
          "fever",
          "chills",
          "rigors",
          "sweat",
          "temperature",
          "shaking"
        ],
        "triggers": [
          "fever",
          "chills",
          "rigors",
          "sweat",
          "temperature",
          "shaking"
        ],
        "response_text": "I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
        "response": "I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "gout_diet_alcohol",
        "category": "past_history",
        "trigger_concepts": [
          "gout",
          "uric acid",
          "beer",
          "alcohol",
          "seafood",
          "big toe",
          "colchicine",
          "allopurinol"
        ],
        "triggers": [
          "gout",
          "uric acid",
          "beer",
          "alcohol",
          "seafood",
          "big toe",
          "colchicine",
          "allopurinol"
        ],
        "response_text": "I've never been officially diagnosed with gout, though my big toe got red and sore once five years ago after a seafood barbecue. I drink two pints of stout on weekends, but nothing excessive.",
        "response": "I've never been officially diagnosed with gout, though my big toe got red and sore once five years ago after a seafood barbecue. I drink two pints of stout on weekends, but nothing excessive.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_concerns",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "thoughts",
          "afraid",
          "ideas"
        ],
        "triggers": [
          "worry",
          "worried",
          "thoughts",
          "afraid",
          "ideas"
        ],
        "response_text": "My neighbor told me it sounds exactly like his gout flare-up from drinking beer. He said all I need is some Colchicine tablets and a high-dose painkiller. Can't you just write me a prescription so I can go home?",
        "response": "My neighbor told me it sounds exactly like his gout flare-up from drinking beer. He said all I need is some Colchicine tablets and a high-dose painkiller. Can't you just write me a prescription so I can go home?",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "needle",
          "drain",
          "admitted"
        ],
        "triggers": [
          "expect",
          "hoping",
          "needle",
          "drain",
          "admitted"
        ],
        "response_text": "Do you really have to stick a needle in my knee? Can't we just try antibiotics by mouth first?",
        "response": "Do you really have to stick a needle in my knee? Can't we just try antibiotics by mouth first?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "weight_bearing_onset",
        "label": "Weight Bearing Onset",
        "triggers": [
          "walk",
          "bear weight",
          "stand",
          "step",
          "put weight",
          "onset",
          "when did it start"
        ],
        "response": "It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
        "mandatory": true
      },
      {
        "key": "portal_of_entry_skin",
        "label": "Portal Of Entry Skin",
        "triggers": [
          "cut",
          "scratch",
          "wound",
          "skin",
          "puncture",
          "injection",
          "insect bite",
          "garden",
          "scrape"
        ],
        "response": "Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
        "mandatory": true
      },
      {
        "key": "prior_injections_prosthesis",
        "label": "Prior Injections Prosthesis",
        "triggers": [
          "operation",
          "surgery",
          "replacement",
          "implant",
          "steroid injection",
          "knee replacement",
          "hardware"
        ],
        "response": "It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
        "mandatory": true
      },
      {
        "key": "systemic_fevers_rigors",
        "label": "Systemic Fevers Rigors",
        "triggers": [
          "fever",
          "chills",
          "rigors",
          "sweat",
          "temperature",
          "shaking"
        ],
        "response": "I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency Bedside Arthrocentesis (Joint Aspiration) Result",
      "description": "Under strict aseptic technique, you aspirate 40 mL of fluid from the right suprapatellar pouch.",
      "new_finding": "Emergency Bedside Arthrocentesis (Joint Aspiration) Result — Macroscopic Appearance: Opaque, turbid, purulent greenish-yellow fluid (frank pus).; Synovial WBC Count: 94,000 cells/mcL with 94% Polymorphonuclear Neutrophils (Normal < 200, inflammatory 2,000-50,000, septic > 50,000).; Synovial Gram Stain: Abundant intracellular and extracellular Gram-positive cocci in clusters (Staphylococcus aureus).; Polarized Light Microscopy: NO negatively or positively birefringent crystals (No urate or pyrophosphate crystals detected).",
      "findings": {
        "Macroscopic Appearance": "Opaque, turbid, purulent greenish-yellow fluid (frank pus).",
        "Synovial WBC Count": "94,000 cells/mcL with 94% Polymorphonuclear Neutrophils (Normal < 200, inflammatory 2,000-50,000, septic > 50,000).",
        "Synovial Gram Stain": "Abundant intracellular and extracellular Gram-positive cocci in clusters (Staphylococcus aureus).",
        "Polarized Light Microscopy": "NO negatively or positively birefringent crystals (No urate or pyrophosphate crystals detected)."
      },
      "expected_shifts": {
        "Acute Septic Arthritis (Staphylococcus aureus secondary to thorn puncture)": 2,
        "Acute Gouty Arthritis": -2,
        "Pseudogout (Calcium Pyrophosphate Dihydrate)": -2,
        "Hemarthrosis": -2
      },
      "expert_rationale": "The synovial fluid white cell count > 50,000 with 94% neutrophils and Gram-positive cocci in clusters confirms Acute Septic Arthritis of the native knee. Bacterial proteases and host collagenases destroy articular cartilage within 24-48 hours. This is an orthopedic surgical emergency requiring urgent operating room joint washout and targeted intravenous antibiotic therapy."
    },
    "differentials": [
      {
        "name": "Acute Septic Arthritis (Staphylococcus aureus)",
        "tier": "primary",
        "supporting_features": [
          "Acute monoarthritis with absolute inability to bear weight",
          "Febrile with rigors (38.5°C)",
          "Direct thorn puncture portal of entry",
          "Synovial WBC 94k with Gram-positive cocci in clusters"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.99
      },
      {
        "name": "Acute Gouty Arthritis",
        "tier": "secondary",
        "supporting_features": [
          "Hyperacute nocturnal onset of severe joint inflammation"
        ],
        "refuting_features": [
          "Synovial fluid is frank pus with proven bacteria; no negatively birefringent needle-shaped crystals seen"
        ],
        "prior_probability": 0.2,
        "posterior_probability": 0.01
      },
      {
        "name": "Reactive Arthritis",
        "tier": "unlikely",
        "supporting_features": [
          "Acute monoarthritis"
        ],
        "refuting_features": [
          "Presence of active bacterial infection within the joint cavity excludes sterile reactive arthritis"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Acute Septic Arthritis (Staphylococcus aureus)",
        "tier": "primary",
        "supporting_features": [
          "Acute monoarthritis with absolute inability to bear weight",
          "Febrile with rigors (38.5°C)",
          "Direct thorn puncture portal of entry",
          "Synovial WBC 94k with Gram-positive cocci in clusters"
        ],
        "refuting_features": [],
        "prior_probability": 0.75,
        "posterior_probability": 0.99
      },
      {
        "name": "Acute Gouty Arthritis",
        "tier": "secondary",
        "supporting_features": [
          "Hyperacute nocturnal onset of severe joint inflammation"
        ],
        "refuting_features": [
          "Synovial fluid is frank pus with proven bacteria; no negatively birefringent needle-shaped crystals seen"
        ],
        "prior_probability": 0.2,
        "posterior_probability": 0.01
      },
      {
        "name": "Reactive Arthritis",
        "tier": "unlikely",
        "supporting_features": [
          "Acute monoarthritis"
        ],
        "refuting_features": [
          "Presence of active bacterial infection within the joint cavity excludes sterile reactive arthritis"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second SBAR summary and working diagnosis to the Orthopedic Consultant on-call.",
        "question": "Present your 60-second SBAR summary and working diagnosis to the Orthopedic Consultant on-call.",
        "target_rubric": "SBAR: 64yo male with deep rose thorn puncture presenting with acute right knee septic arthritis, complete inability to bear weight, pyrexia 38.5°C, and synovial fluid demonstrating 94,000 WBC and Gram-positive cocci in clusters.",
        "model_answer": "SBAR: 64yo male with deep rose thorn puncture presenting with acute right knee septic arthritis, complete inability to bear weight, pyrexia 38.5°C, and synovial fluid demonstrating 94,000 WBC and Gram-positive cocci in clusters.",
        "max_marks": 10,
        "key_points_required": [
          "64yo male presenting with acute febrile monoarthritis (T 38.5°C)",
          "Total inability to bear weight",
          "Identifiable bacterial portal of entry (infected rose thorn puncture)",
          "Diagnostic synovial fluid: 94k WBC, 94% neutrophils, Gram-positive cocci in clusters (Staph aureus)"
        ],
        "key_points": [
          "64yo male presenting with acute febrile monoarthritis (T 38.5°C)",
          "Total inability to bear weight",
          "Identifiable bacterial portal of entry (infected rose thorn puncture)",
          "Diagnostic synovial fluid: 94k WBC, 94% neutrophils, Gram-positive cocci in clusters (Staph aureus)"
        ]
      },
      {
        "prompt": "What is the golden rule regarding joint aspiration and antibiotic administration?",
        "question": "What is the golden rule regarding joint aspiration and antibiotic administration?",
        "target_rubric": "ALWAYS aspirate the joint BEFORE administering antibiotics. Giving antibiotics prior to aspiration sterilizes the synovial fluid, drops culture yield by up to 50%, and complicates long-term microbiological targeted therapy.",
        "model_answer": "ALWAYS aspirate the joint BEFORE administering antibiotics. Giving antibiotics prior to aspiration sterilizes the synovial fluid, drops culture yield by up to 50%, and complicates long-term microbiological targeted therapy.",
        "max_marks": 10,
        "key_points_required": [
          "Golden Rule: ALWAYS aspirate the joint fluid BEFORE starting antibiotics",
          "Rationale: even a single dose of antibiotics can sterilize synovial cultures and obscure the causative pathogen",
          "Send synovial fluid for urgent Gram stain, cell count, microscopy for crystals, and aerobic/anaerobic cultures",
          "Administer empirical IV antibiotics immediately AFTER successful aspiration"
        ],
        "key_points": [
          "Golden Rule: ALWAYS aspirate the joint fluid BEFORE starting antibiotics",
          "Rationale: even a single dose of antibiotics can sterilize synovial cultures and obscure the causative pathogen",
          "Send synovial fluid for urgent Gram stain, cell count, microscopy for crystals, and aerobic/anaerobic cultures",
          "Administer empirical IV antibiotics immediately AFTER successful aspiration"
        ]
      },
      {
        "prompt": "Outline your operative and pharmacological management plan in the next 24 hours.",
        "question": "Outline your operative and pharmacological management plan in the next 24 hours.",
        "target_rubric": "Urgent surgical joint debridement and washout (arthroscopic or open arthrotomy), IV Flucloxacillin 2g q6h (or Vancomycin if MRSA risk), analgesia, joint immobilization in extension, and planned 4-6 weeks total antibiotic course.",
        "model_answer": "Urgent surgical joint debridement and washout (arthroscopic or open arthrotomy), IV Flucloxacillin 2g q6h (or Vancomycin if MRSA risk), analgesia, joint immobilization in extension, and planned 4-6 weeks total antibiotic course.",
        "max_marks": 10,
        "key_points_required": [
          "Emergency surgical joint washout (Arthroscopic debridement and lavage or open arthrotomy)",
          "Empirical high-dose IV anti-staphylococcal therapy (e.g. IV Flucloxacillin 2g q6h, or IV Vancomycin if MRSA high risk/penicillin allergic)",
          "NPO / fasting for emergency theatre",
          "Total antibiotic duration: typically 4-6 weeks (IV transitioning to oral once CRP normalizes)",
          "Daily monitoring of inflammatory markers (CRP/ESR) and joint range of motion rehabilitation"
        ],
        "key_points": [
          "Emergency surgical joint washout (Arthroscopic debridement and lavage or open arthrotomy)",
          "Empirical high-dose IV anti-staphylococcal therapy (e.g. IV Flucloxacillin 2g q6h, or IV Vancomycin if MRSA high risk/penicillin allergic)",
          "NPO / fasting for emergency theatre",
          "Total antibiotic duration: typically 4-6 weeks (IV transitioning to oral once CRP normalizes)",
          "Daily monitoring of inflammatory markers (CRP/ESR) and joint range of motion rehabilitation"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second SBAR summary and working diagnosis to the Orthopedic Consultant on-call.",
        "question": "Present your 60-second SBAR summary and working diagnosis to the Orthopedic Consultant on-call.",
        "target_rubric": "SBAR: 64yo male with deep rose thorn puncture presenting with acute right knee septic arthritis, complete inability to bear weight, pyrexia 38.5°C, and synovial fluid demonstrating 94,000 WBC and Gram-positive cocci in clusters.",
        "model_answer": "SBAR: 64yo male with deep rose thorn puncture presenting with acute right knee septic arthritis, complete inability to bear weight, pyrexia 38.5°C, and synovial fluid demonstrating 94,000 WBC and Gram-positive cocci in clusters.",
        "max_marks": 10,
        "key_points_required": [
          "64yo male presenting with acute febrile monoarthritis (T 38.5°C)",
          "Total inability to bear weight",
          "Identifiable bacterial portal of entry (infected rose thorn puncture)",
          "Diagnostic synovial fluid: 94k WBC, 94% neutrophils, Gram-positive cocci in clusters (Staph aureus)"
        ],
        "key_points": [
          "64yo male presenting with acute febrile monoarthritis (T 38.5°C)",
          "Total inability to bear weight",
          "Identifiable bacterial portal of entry (infected rose thorn puncture)",
          "Diagnostic synovial fluid: 94k WBC, 94% neutrophils, Gram-positive cocci in clusters (Staph aureus)"
        ]
      },
      {
        "prompt": "What is the golden rule regarding joint aspiration and antibiotic administration?",
        "question": "What is the golden rule regarding joint aspiration and antibiotic administration?",
        "target_rubric": "ALWAYS aspirate the joint BEFORE administering antibiotics. Giving antibiotics prior to aspiration sterilizes the synovial fluid, drops culture yield by up to 50%, and complicates long-term microbiological targeted therapy.",
        "model_answer": "ALWAYS aspirate the joint BEFORE administering antibiotics. Giving antibiotics prior to aspiration sterilizes the synovial fluid, drops culture yield by up to 50%, and complicates long-term microbiological targeted therapy.",
        "max_marks": 10,
        "key_points_required": [
          "Golden Rule: ALWAYS aspirate the joint fluid BEFORE starting antibiotics",
          "Rationale: even a single dose of antibiotics can sterilize synovial cultures and obscure the causative pathogen",
          "Send synovial fluid for urgent Gram stain, cell count, microscopy for crystals, and aerobic/anaerobic cultures",
          "Administer empirical IV antibiotics immediately AFTER successful aspiration"
        ],
        "key_points": [
          "Golden Rule: ALWAYS aspirate the joint fluid BEFORE starting antibiotics",
          "Rationale: even a single dose of antibiotics can sterilize synovial cultures and obscure the causative pathogen",
          "Send synovial fluid for urgent Gram stain, cell count, microscopy for crystals, and aerobic/anaerobic cultures",
          "Administer empirical IV antibiotics immediately AFTER successful aspiration"
        ]
      },
      {
        "prompt": "Outline your operative and pharmacological management plan in the next 24 hours.",
        "question": "Outline your operative and pharmacological management plan in the next 24 hours.",
        "target_rubric": "Urgent surgical joint debridement and washout (arthroscopic or open arthrotomy), IV Flucloxacillin 2g q6h (or Vancomycin if MRSA risk), analgesia, joint immobilization in extension, and planned 4-6 weeks total antibiotic course.",
        "model_answer": "Urgent surgical joint debridement and washout (arthroscopic or open arthrotomy), IV Flucloxacillin 2g q6h (or Vancomycin if MRSA risk), analgesia, joint immobilization in extension, and planned 4-6 weeks total antibiotic course.",
        "max_marks": 10,
        "key_points_required": [
          "Emergency surgical joint washout (Arthroscopic debridement and lavage or open arthrotomy)",
          "Empirical high-dose IV anti-staphylococcal therapy (e.g. IV Flucloxacillin 2g q6h, or IV Vancomycin if MRSA high risk/penicillin allergic)",
          "NPO / fasting for emergency theatre",
          "Total antibiotic duration: typically 4-6 weeks (IV transitioning to oral once CRP normalizes)",
          "Daily monitoring of inflammatory markers (CRP/ESR) and joint range of motion rehabilitation"
        ],
        "key_points": [
          "Emergency surgical joint washout (Arthroscopic debridement and lavage or open arthrotomy)",
          "Empirical high-dose IV anti-staphylococcal therapy (e.g. IV Flucloxacillin 2g q6h, or IV Vancomycin if MRSA high risk/penicillin allergic)",
          "NPO / fasting for emergency theatre",
          "Total antibiotic duration: typically 4-6 weeks (IV transitioning to oral once CRP normalizes)",
          "Daily monitoring of inflammatory markers (CRP/ESR) and joint range of motion rehabilitation"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "The 'Just Gout' Anchoring Trap",
        "description": "Assuming that every red, hot, swollen joint in a middle-aged male is simple crystal gout and prescribing Colchicine/NSAIDs without aspirating.",
        "trigger_condition": "Candidate decides to treat for gout without performing diagnostic joint aspiration.",
        "remediation_advice": "RULE: An acute hot swollen joint is SEPTIC ARTHRITIS until proven otherwise by arthrocentesis. Gout and septic arthritis frequently co-exist, and missing septic arthritis results in irreversible chondrolysis within 24-48 hours.",
        "trigger_keywords": [
          "just gout",
          "gout flare",
          "colchicine",
          "pseudogout"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Premature Oral Antibiotics Before Joint Aspiration",
        "description": "Starting empirical oral antibiotics in the clinic or ED prior to arthrocentesis.",
        "trigger_condition": "Candidate orders antibiotics before joint aspiration is completed.",
        "remediation_advice": "Never administer antibiotics prior to synovial fluid sampling unless the patient is in extremis with septic shock. Doing so compromises the pathogen yield and delays definitive tailored surgical management.",
        "trigger_keywords": [],
        "absent_keywords": [
          "aspirat",
          "arthrocentesis",
          "joint tap",
          "tap the joint"
        ],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "endo_10": {
    "id": "endo_10",
    "case_id": "endo_10",
    "title": "Intractable Vomiting and Tachypnea in a 19-Year-Old Type 1 Diabetic",
    "specialty": "Endocrinology / Acute Medicine",
    "sg_classic": false,
    "difficulty": "Core MBBS Finals",
    "patient_name": "Liam Wright",
    "age": 19,
    "gender": "Male",
    "occupation": "Undergraduate Student",
    "setting": "Acute Medical Admission Unit (AMAU)",
    "voice_preset": "en-GB-RyanNeural",
    "chief_complaint": "Persistent vomiting, diffuse abdominal cramps, and deep rapid breathing for 24 hours",
    "presenting_complaint": "Persistent vomiting, diffuse abdominal cramps, and deep rapid breathing for 24 hours",
    "opening_statement": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
    "triage_vitals": {
      "Heart Rate": "128 bpm (Sinus tachycardia)",
      "Blood Pressure": "98/62 mmHg",
      "Respiratory Rate": "32 /min (Deep, sighing Kussmaul respirations)",
      "Oxygen Saturation": "99% on room air",
      "Temperature": "36.8°C",
      "GCS": "14/15 (Drowsy, responds slowly to questions)"
    },
    "background_context": "Liam Wright, 19yo Male (Undergraduate Student) at Acute Medical Admission Unit (AMAU). You are the Medical Registrar / FY1 on-call. Take a focused 7-minute history from Liam. Identify the precipitating trigger, evaluate his hydration status, and screen for acute complications. An emergency venous blood gas report will arrive, followed by your presentation.",
    "brief": {
      "setting": "Acute Medical Admission Unit (AMAU)",
      "patient_name": "Liam Wright",
      "age": 19,
      "gender": "Male",
      "occupation": "Undergraduate Student",
      "presenting_complaint": "Persistent vomiting, diffuse abdominal cramps, and deep rapid breathing for 24 hours",
      "triage_vitals": {
        "Heart Rate": "128 bpm (Sinus tachycardia)",
        "Blood Pressure": "98/62 mmHg",
        "Respiratory Rate": "32 /min (Deep, sighing Kussmaul respirations)",
        "Oxygen Saturation": "99% on room air",
        "Temperature": "36.8°C",
        "GCS": "14/15 (Drowsy, responds slowly to questions)"
      },
      "instructions": "You are the Medical Registrar / FY1 on-call. Take a focused 7-minute history from Liam. Identify the precipitating trigger, evaluate his hydration status, and screen for acute complications. An emergency venous blood gas report will arrive, followed by your presentation."
    },
    "persona": {
      "name": "Liam Wright",
      "voice_id": "en-GB-RyanNeural",
      "speech_rate": "-10%",
      "pain_level": 7,
      "temperament": "lethargic",
      "behavioral_cues": [
        "Breathing deeply and rapidly with noticeable effort (Kussmaul breathing)",
        "Dry, cracked lips, sunken eyes, dry oral tongue",
        "Holding his abdomen in discomfort, sweet pear-drop / acetone breath"
      ]
    },
    "gates": [
      {
        "key": "type1_insulin_omission",
        "category": "past_history",
        "trigger_concepts": [
          "diabetes",
          "type 1",
          "insulin",
          "injections",
          "missed",
          "omitted",
          "dose",
          "pens",
          "medications"
        ],
        "triggers": [
          "diabetes",
          "type 1",
          "insulin",
          "injections",
          "missed",
          "omitted",
          "dose",
          "pens",
          "medications"
        ],
        "response_text": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
        "response": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "polyuria_polydipsia",
        "category": "socrates",
        "trigger_concepts": [
          "thirsty",
          "drinking",
          "water",
          "polydipsia",
          "urine",
          "peeing",
          "polyuria",
          "bathroom"
        ],
        "triggers": [
          "thirsty",
          "drinking",
          "water",
          "polydipsia",
          "urine",
          "peeing",
          "polyuria",
          "bathroom"
        ],
        "response_text": "I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
        "response": "I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "abdominal_pain_vomiting",
        "category": "socrates",
        "trigger_concepts": [
          "tummy",
          "abdomen",
          "stomach",
          "cramp",
          "vomit",
          "throwing up",
          "nausea"
        ],
        "triggers": [
          "tummy",
          "abdomen",
          "stomach",
          "cramp",
          "vomit",
          "throwing up",
          "nausea"
        ],
        "response_text": "I've thrown up more than ten times today—mostly green bile. And my whole tummy is cramping severely with a deep, generalized ache.",
        "response": "I've thrown up more than ten times today—mostly green bile. And my whole tummy is cramping severely with a deep, generalized ache.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "kussmaul_cerebral_edema",
        "category": "red_flag",
        "trigger_concepts": [
          "breathing",
          "heavy",
          "rapid",
          "deep",
          "short of breath",
          "headache",
          "drowsy",
          "vision"
        ],
        "triggers": [
          "breathing",
          "heavy",
          "rapid",
          "deep",
          "short of breath",
          "headache",
          "drowsy",
          "vision"
        ],
        "response_text": "I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
        "response": "I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "precipitating_infection",
        "category": "red_flag",
        "trigger_concepts": [
          "infection",
          "fever",
          "cough",
          "urine burn",
          "cold",
          "flu",
          "diarrhea",
          "wound"
        ],
        "triggers": [
          "infection",
          "fever",
          "cough",
          "urine burn",
          "cold",
          "flu",
          "diarrhea",
          "wound"
        ],
        "response_text": "It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm.",
        "response": "It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_fears",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "I feel so exhausted, doctor... I feel like my body is shutting down. Is this ketoacidosis? I heard in diabetic clinic that ketoacidosis can put you in a coma.",
        "response": "I feel so exhausted, doctor... I feel like my body is shutting down. Is this ketoacidosis? I heard in diabetic clinic that ketoacidosis can put you in a coma.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "drip",
          "fluids",
          "insulin"
        ],
        "triggers": [
          "expect",
          "hoping",
          "drip",
          "fluids",
          "insulin"
        ],
        "response_text": "Can you put me on a saline drip right away to stop this awful thirst?",
        "response": "Can you put me on a saline drip right away to stop this awful thirst?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "type1_insulin_omission",
        "category": "past_history",
        "trigger_concepts": [
          "diabetes",
          "type 1",
          "insulin",
          "injections",
          "missed",
          "omitted",
          "dose",
          "pens",
          "medications"
        ],
        "triggers": [
          "diabetes",
          "type 1",
          "insulin",
          "injections",
          "missed",
          "omitted",
          "dose",
          "pens",
          "medications"
        ],
        "response_text": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
        "response": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "polyuria_polydipsia",
        "category": "socrates",
        "trigger_concepts": [
          "thirsty",
          "drinking",
          "water",
          "polydipsia",
          "urine",
          "peeing",
          "polyuria",
          "bathroom"
        ],
        "triggers": [
          "thirsty",
          "drinking",
          "water",
          "polydipsia",
          "urine",
          "peeing",
          "polyuria",
          "bathroom"
        ],
        "response_text": "I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
        "response": "I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "abdominal_pain_vomiting",
        "category": "socrates",
        "trigger_concepts": [
          "tummy",
          "abdomen",
          "stomach",
          "cramp",
          "vomit",
          "throwing up",
          "nausea"
        ],
        "triggers": [
          "tummy",
          "abdomen",
          "stomach",
          "cramp",
          "vomit",
          "throwing up",
          "nausea"
        ],
        "response_text": "I've thrown up more than ten times today—mostly green bile. And my whole tummy is cramping severely with a deep, generalized ache.",
        "response": "I've thrown up more than ten times today—mostly green bile. And my whole tummy is cramping severely with a deep, generalized ache.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "kussmaul_cerebral_edema",
        "category": "red_flag",
        "trigger_concepts": [
          "breathing",
          "heavy",
          "rapid",
          "deep",
          "short of breath",
          "headache",
          "drowsy",
          "vision"
        ],
        "triggers": [
          "breathing",
          "heavy",
          "rapid",
          "deep",
          "short of breath",
          "headache",
          "drowsy",
          "vision"
        ],
        "response_text": "I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
        "response": "I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "precipitating_infection",
        "category": "red_flag",
        "trigger_concepts": [
          "infection",
          "fever",
          "cough",
          "urine burn",
          "cold",
          "flu",
          "diarrhea",
          "wound"
        ],
        "triggers": [
          "infection",
          "fever",
          "cough",
          "urine burn",
          "cold",
          "flu",
          "diarrhea",
          "wound"
        ],
        "response_text": "It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm.",
        "response": "It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_ideas_fears",
        "category": "ice",
        "trigger_concepts": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "triggers": [
          "worry",
          "worried",
          "fear",
          "thoughts",
          "afraid"
        ],
        "response_text": "I feel so exhausted, doctor... I feel like my body is shutting down. Is this ketoacidosis? I heard in diabetic clinic that ketoacidosis can put you in a coma.",
        "response": "I feel so exhausted, doctor... I feel like my body is shutting down. Is this ketoacidosis? I heard in diabetic clinic that ketoacidosis can put you in a coma.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "ice_expectations",
        "category": "ice",
        "trigger_concepts": [
          "expect",
          "hoping",
          "drip",
          "fluids",
          "insulin"
        ],
        "triggers": [
          "expect",
          "hoping",
          "drip",
          "fluids",
          "insulin"
        ],
        "response_text": "Can you put me on a saline drip right away to stop this awful thirst?",
        "response": "Can you put me on a saline drip right away to stop this awful thirst?",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "type1_insulin_omission",
        "label": "Type1 Insulin Omission",
        "triggers": [
          "diabetes",
          "type 1",
          "insulin",
          "injections",
          "missed",
          "omitted",
          "dose",
          "pens",
          "medications"
        ],
        "response": "I was diagnosed with Type 1 Diabetes four years ago... doctor, two days ago I caught a bad stomach bug and couldn't keep food down. I thought since I wasn't eating anything, I shouldn't take my insulin injections because my sugar would crash. So I stopped both my basal and bolus insulin for 48 hours.",
        "mandatory": true
      },
      {
        "key": "polyuria_polydipsia",
        "label": "Polyuria Polydipsia",
        "triggers": [
          "thirsty",
          "drinking",
          "water",
          "polydipsia",
          "urine",
          "peeing",
          "polyuria",
          "bathroom"
        ],
        "response": "I have been desperately, unbearably thirsty. I drank five bottles of water yesterday, but I had to run to the toilet every 20 minutes. My mouth feels completely parched like sandpaper.",
        "mandatory": true
      },
      {
        "key": "kussmaul_cerebral_edema",
        "label": "Kussmaul Cerebral Edema",
        "triggers": [
          "breathing",
          "heavy",
          "rapid",
          "deep",
          "short of breath",
          "headache",
          "drowsy",
          "vision"
        ],
        "response": "I feel like my chest is constantly panting for air, even though I'm just lying here. And my head is pounding with a throbbing headache.",
        "mandatory": true
      },
      {
        "key": "precipitating_infection",
        "label": "Precipitating Infection",
        "triggers": [
          "infection",
          "fever",
          "cough",
          "urine burn",
          "cold",
          "flu",
          "diarrhea",
          "wound"
        ],
        "response": "It started with watery diarrhea and chills three days ago after eating leftover takeaway food in my student dorm.",
        "mandatory": false
      }
    ],
    "perturbation": {
      "trigger_turn": 4,
      "title": "Emergency STAT Venous Blood Gas & Metabolic Panel",
      "description": "The point-of-care venous blood gas (VBG) and capillary ketone analyzer results arrive.",
      "new_finding": "Emergency STAT Venous Blood Gas & Metabolic Panel — Venous Blood Gas (VBG): pH 7.11 (Severe uncompensated metabolic acidosis), HCO3 8.6 mmol/L, pCO2 22 mmHg (Respiratory compensation), Base Excess -18.4 mmol/L.; Capillary Blood Ketones: 6.4 mmol/L (Severe hyperketonemia, diagnostic cutoff > 3.0 mmol/L).; Capillary Blood Glucose: 29.2 mmol/L (Severe hyperglycemia).; Serum Electrolytes: Sodium 131 mmol/L, Potassium 4.9 mmol/L, Chloride 96 mmol/L, Anion Gap 26.4 mmol/L (High Anion Gap Metabolic Acidosis).",
      "findings": {
        "Venous Blood Gas (VBG)": "pH 7.11 (Severe uncompensated metabolic acidosis), HCO3 8.6 mmol/L, pCO2 22 mmHg (Respiratory compensation), Base Excess -18.4 mmol/L.",
        "Capillary Blood Ketones": "6.4 mmol/L (Severe hyperketonemia, diagnostic cutoff > 3.0 mmol/L).",
        "Capillary Blood Glucose": "29.2 mmol/L (Severe hyperglycemia).",
        "Serum Electrolytes": "Sodium 131 mmol/L, Potassium 4.9 mmol/L, Chloride 96 mmol/L, Anion Gap 26.4 mmol/L (High Anion Gap Metabolic Acidosis)."
      },
      "expected_shifts": {
        "Severe Diabetic Ketoacidosis (DKA) triggered by insulin omission and gastroenteritis": 2,
        "Hyperosmolar Hyperglycemic State (HHS)": -2,
        "Acute Surgical Peritonitis / Appendicitis": -2,
        "Lactic Acidosis / Sepsis": -1
      },
      "expert_rationale": "The clinical and laboratory findings satisfy the definitive diagnostic triad of Diabetic Ketoacidosis: 1. Hyperglycemia (29.2 mmol/L), 2. Ketosis (blood ketones 6.4 mmol/L), 3. Acidosis (pH 7.11, HCO3 8.6 mmol/L). Although serum potassium is currently 4.9 mmol/L, insulin deficiency and extracellular shift mask SEVERE TOTAL BODY POTASSIUM DEPLETION. Administering insulin will drive potassium into cells, precipitating fatal cardiac arrhythmias unless potassium is replenished proactively."
    },
    "differentials": [
      {
        "name": "Severe Diabetic Ketoacidosis (DKA)",
        "tier": "primary",
        "supporting_features": [
          "Known Type 1 Diabetes with 48h insulin omission",
          "Classic osmotic symptoms (polyuria, polydipsia)",
          "Kussmaul breathing with sweet acetone breath",
          "Diagnostic triad: glucose 29.2, ketones 6.4, pH 7.11 with HCO3 8.6"
        ],
        "refuting_features": [],
        "prior_probability": 0.9,
        "posterior_probability": 0.99
      },
      {
        "name": "Hyperosmolar Hyperglycemic State (HHS)",
        "tier": "secondary",
        "supporting_features": [
          "Severe hyperglycemia and dehydration"
        ],
        "refuting_features": [
          "HHS typically occurs in elderly Type 2 diabetics without significant acidosis (pH > 7.30, HCO3 > 18) or heavy ketosis"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Surgical Abdomen (Appendicitis / Perforation)",
        "tier": "secondary",
        "supporting_features": [
          "Severe abdominal cramping and vomiting"
        ],
        "refuting_features": [
          "Abdominal pain is a classic non-surgical manifestation of severe ketoacidosis (ileus/pseudoperitonitis) that resolves with rehydration and insulin"
        ],
        "prior_probability": 0.02,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Severe Diabetic Ketoacidosis (DKA)",
        "tier": "primary",
        "supporting_features": [
          "Known Type 1 Diabetes with 48h insulin omission",
          "Classic osmotic symptoms (polyuria, polydipsia)",
          "Kussmaul breathing with sweet acetone breath",
          "Diagnostic triad: glucose 29.2, ketones 6.4, pH 7.11 with HCO3 8.6"
        ],
        "refuting_features": [],
        "prior_probability": 0.9,
        "posterior_probability": 0.99
      },
      {
        "name": "Hyperosmolar Hyperglycemic State (HHS)",
        "tier": "secondary",
        "supporting_features": [
          "Severe hyperglycemia and dehydration"
        ],
        "refuting_features": [
          "HHS typically occurs in elderly Type 2 diabetics without significant acidosis (pH > 7.30, HCO3 > 18) or heavy ketosis"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Surgical Abdomen (Appendicitis / Perforation)",
        "tier": "secondary",
        "supporting_features": [
          "Severe abdominal cramping and vomiting"
        ],
        "refuting_features": [
          "Abdominal pain is a classic non-surgical manifestation of severe ketoacidosis (ileus/pseudoperitonitis) that resolves with rehydration and insulin"
        ],
        "prior_probability": 0.02,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Present your 60-second SBAR appraisal and primary working diagnosis to the Consultant Endocrinologist.",
        "question": "Present your 60-second SBAR appraisal and primary working diagnosis to the Consultant Endocrinologist.",
        "target_rubric": "SBAR: 19yo male with Type 1 Diabetes presenting with severe DKA triggered by insulin omission during gastroenteritis, with Kussmaul respiration, pH 7.11, ketones 6.4, glucose 29.2, and estimated 5-6L fluid deficit.",
        "model_answer": "SBAR: 19yo male with Type 1 Diabetes presenting with severe DKA triggered by insulin omission during gastroenteritis, with Kussmaul respiration, pH 7.11, ketones 6.4, glucose 29.2, and estimated 5-6L fluid deficit.",
        "max_marks": 10,
        "key_points_required": [
          "19yo male with known Type 1 Diabetes",
          "Precipitating cause: insulin omission during intercurrent viral gastroenteritis",
          "Severe clinical DKA with dehydration and Kussmaul breathing",
          "Confirmed diagnostic triad: Hyperglycemia (29.2), Ketosis (6.4), Acidosis (pH 7.11, HCO3 8.6)"
        ],
        "key_points": [
          "19yo male with known Type 1 Diabetes",
          "Precipitating cause: insulin omission during intercurrent viral gastroenteritis",
          "Severe clinical DKA with dehydration and Kussmaul breathing",
          "Confirmed diagnostic triad: Hyperglycemia (29.2), Ketosis (6.4), Acidosis (pH 7.11, HCO3 8.6)"
        ]
      },
      {
        "prompt": "What is your immediate fluid resuscitation protocol and critical potassium replacement rule?",
        "question": "What is your immediate fluid resuscitation protocol and critical potassium replacement rule?",
        "target_rubric": "IV 0.9% Normal Saline (1L over 1h, then 1L over 2h, then 1L over 2h with KCl); NEVER administer insulin without knowing potassium level; add 20-40 mmol/L KCl into fluids once potassium drops < 5.5 mmol/L.",
        "model_answer": "IV 0.9% Normal Saline (1L over 1h, then 1L over 2h, then 1L over 2h with KCl); NEVER administer insulin without knowing potassium level; add 20-40 mmol/L KCl into fluids once potassium drops < 5.5 mmol/L.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate aggressive crystalloid resuscitation: 1L 0.9% Normal Saline in 1st hour",
          "Assess total fluid deficit (typically 5 to 7 liters)",
          "Critical Potassium Rule: Do NOT start insulin if K+ < 3.5 mmol/L until repleted",
          "Add 20-40 mmol KCl per liter of IV fluid once K+ < 5.5 mmol/L (to anticipate massive intracellular shift)",
          "Continuous cardiac telemetry monitoring"
        ],
        "key_points": [
          "Immediate aggressive crystalloid resuscitation: 1L 0.9% Normal Saline in 1st hour",
          "Assess total fluid deficit (typically 5 to 7 liters)",
          "Critical Potassium Rule: Do NOT start insulin if K+ < 3.5 mmol/L until repleted",
          "Add 20-40 mmol KCl per liter of IV fluid once K+ < 5.5 mmol/L (to anticipate massive intracellular shift)",
          "Continuous cardiac telemetry monitoring"
        ]
      },
      {
        "prompt": "Outline your insulin administration protocol and when you must add 10% Dextrose.",
        "question": "Outline your insulin administration protocol and when you must add 10% Dextrose.",
        "target_rubric": "Fixed Rate Intravenous Insulin Infusion (FRIII) at 0.1 units/kg/h; continue long-acting basal insulin; start 10% Dextrose (125 mL/h) alongside saline once blood glucose drops < 14 mmol/L to allow continued insulin clearance of ketones without causing hypoglycemia; monitor for cerebral edema.",
        "model_answer": "Fixed Rate Intravenous Insulin Infusion (FRIII) at 0.1 units/kg/h; continue long-acting basal insulin; start 10% Dextrose (125 mL/h) alongside saline once blood glucose drops < 14 mmol/L to allow continued insulin clearance of ketones without causing hypoglycemia; monitor for cerebral edema.",
        "max_marks": 10,
        "key_points_required": [
          "Fixed Rate IV Insulin Infusion (FRIII) at 0.1 units/kg/hour",
          "Continue patient's background long-acting basal insulin (e.g. Lantus/Degludec)",
          "Target reduction: blood ketones drop by 0.5 mmol/L/h, glucose drop 3 mmol/L/h",
          "Add 10% Dextrose when blood glucose falls below 14 mmol/L (prevents hypoglycemia while continuing insulin to clear ketoacidosis)",
          "Vigilance for Cerebral Edema (headache, bradycardia, falling GCS; treat with IV Mannitol or 3% Hypertonic Saline)"
        ],
        "key_points": [
          "Fixed Rate IV Insulin Infusion (FRIII) at 0.1 units/kg/hour",
          "Continue patient's background long-acting basal insulin (e.g. Lantus/Degludec)",
          "Target reduction: blood ketones drop by 0.5 mmol/L/h, glucose drop 3 mmol/L/h",
          "Add 10% Dextrose when blood glucose falls below 14 mmol/L (prevents hypoglycemia while continuing insulin to clear ketoacidosis)",
          "Vigilance for Cerebral Edema (headache, bradycardia, falling GCS; treat with IV Mannitol or 3% Hypertonic Saline)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Present your 60-second SBAR appraisal and primary working diagnosis to the Consultant Endocrinologist.",
        "question": "Present your 60-second SBAR appraisal and primary working diagnosis to the Consultant Endocrinologist.",
        "target_rubric": "SBAR: 19yo male with Type 1 Diabetes presenting with severe DKA triggered by insulin omission during gastroenteritis, with Kussmaul respiration, pH 7.11, ketones 6.4, glucose 29.2, and estimated 5-6L fluid deficit.",
        "model_answer": "SBAR: 19yo male with Type 1 Diabetes presenting with severe DKA triggered by insulin omission during gastroenteritis, with Kussmaul respiration, pH 7.11, ketones 6.4, glucose 29.2, and estimated 5-6L fluid deficit.",
        "max_marks": 10,
        "key_points_required": [
          "19yo male with known Type 1 Diabetes",
          "Precipitating cause: insulin omission during intercurrent viral gastroenteritis",
          "Severe clinical DKA with dehydration and Kussmaul breathing",
          "Confirmed diagnostic triad: Hyperglycemia (29.2), Ketosis (6.4), Acidosis (pH 7.11, HCO3 8.6)"
        ],
        "key_points": [
          "19yo male with known Type 1 Diabetes",
          "Precipitating cause: insulin omission during intercurrent viral gastroenteritis",
          "Severe clinical DKA with dehydration and Kussmaul breathing",
          "Confirmed diagnostic triad: Hyperglycemia (29.2), Ketosis (6.4), Acidosis (pH 7.11, HCO3 8.6)"
        ]
      },
      {
        "prompt": "What is your immediate fluid resuscitation protocol and critical potassium replacement rule?",
        "question": "What is your immediate fluid resuscitation protocol and critical potassium replacement rule?",
        "target_rubric": "IV 0.9% Normal Saline (1L over 1h, then 1L over 2h, then 1L over 2h with KCl); NEVER administer insulin without knowing potassium level; add 20-40 mmol/L KCl into fluids once potassium drops < 5.5 mmol/L.",
        "model_answer": "IV 0.9% Normal Saline (1L over 1h, then 1L over 2h, then 1L over 2h with KCl); NEVER administer insulin without knowing potassium level; add 20-40 mmol/L KCl into fluids once potassium drops < 5.5 mmol/L.",
        "max_marks": 10,
        "key_points_required": [
          "Immediate aggressive crystalloid resuscitation: 1L 0.9% Normal Saline in 1st hour",
          "Assess total fluid deficit (typically 5 to 7 liters)",
          "Critical Potassium Rule: Do NOT start insulin if K+ < 3.5 mmol/L until repleted",
          "Add 20-40 mmol KCl per liter of IV fluid once K+ < 5.5 mmol/L (to anticipate massive intracellular shift)",
          "Continuous cardiac telemetry monitoring"
        ],
        "key_points": [
          "Immediate aggressive crystalloid resuscitation: 1L 0.9% Normal Saline in 1st hour",
          "Assess total fluid deficit (typically 5 to 7 liters)",
          "Critical Potassium Rule: Do NOT start insulin if K+ < 3.5 mmol/L until repleted",
          "Add 20-40 mmol KCl per liter of IV fluid once K+ < 5.5 mmol/L (to anticipate massive intracellular shift)",
          "Continuous cardiac telemetry monitoring"
        ]
      },
      {
        "prompt": "Outline your insulin administration protocol and when you must add 10% Dextrose.",
        "question": "Outline your insulin administration protocol and when you must add 10% Dextrose.",
        "target_rubric": "Fixed Rate Intravenous Insulin Infusion (FRIII) at 0.1 units/kg/h; continue long-acting basal insulin; start 10% Dextrose (125 mL/h) alongside saline once blood glucose drops < 14 mmol/L to allow continued insulin clearance of ketones without causing hypoglycemia; monitor for cerebral edema.",
        "model_answer": "Fixed Rate Intravenous Insulin Infusion (FRIII) at 0.1 units/kg/h; continue long-acting basal insulin; start 10% Dextrose (125 mL/h) alongside saline once blood glucose drops < 14 mmol/L to allow continued insulin clearance of ketones without causing hypoglycemia; monitor for cerebral edema.",
        "max_marks": 10,
        "key_points_required": [
          "Fixed Rate IV Insulin Infusion (FRIII) at 0.1 units/kg/hour",
          "Continue patient's background long-acting basal insulin (e.g. Lantus/Degludec)",
          "Target reduction: blood ketones drop by 0.5 mmol/L/h, glucose drop 3 mmol/L/h",
          "Add 10% Dextrose when blood glucose falls below 14 mmol/L (prevents hypoglycemia while continuing insulin to clear ketoacidosis)",
          "Vigilance for Cerebral Edema (headache, bradycardia, falling GCS; treat with IV Mannitol or 3% Hypertonic Saline)"
        ],
        "key_points": [
          "Fixed Rate IV Insulin Infusion (FRIII) at 0.1 units/kg/hour",
          "Continue patient's background long-acting basal insulin (e.g. Lantus/Degludec)",
          "Target reduction: blood ketones drop by 0.5 mmol/L/h, glucose drop 3 mmol/L/h",
          "Add 10% Dextrose when blood glucose falls below 14 mmol/L (prevents hypoglycemia while continuing insulin to clear ketoacidosis)",
          "Vigilance for Cerebral Edema (headache, bradycardia, falling GCS; treat with IV Mannitol or 3% Hypertonic Saline)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Stopping Insulin When Glucose Falls < 14 While Ketones Persist",
        "description": "Turning off the insulin infusion because blood sugar has normalized, even though the patient remains in ketoacidosis.",
        "trigger_condition": "Candidate stops insulin when glucose drops, instead of adding 10% dextrose.",
        "remediation_advice": "INSULIN CLEARS KETONES, NOT JUST GLUCOSE. When blood glucose drops < 14 mmol/L, keep the insulin infusion running and run 10% Dextrose alongside it until the blood ketones drop < 0.6 mmol/L and venous pH > 7.30.",
        "trigger_keywords": [
          "stop insulin",
          "stop the insulin",
          "stopping insulin",
          "stop the infusion",
          "switch off insulin"
        ],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "The 'Sick Day Rules' Knowledge Deficit",
        "description": "Failing to educate the patient that insulin requirements actually INCREASE during acute illness.",
        "trigger_condition": "Candidate overlooks patient counseling on diabetic sick day rules.",
        "remediation_advice": "Never stop insulin during intercurrent illness! Infection releases counter-regulatory stress hormones (cortisol, adrenaline) that increase insulin resistance. Patients must check ketones and take supplemental rapid-acting insulin.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": [
          "type1_insulin_omission"
        ]
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "id_11": {
    "id": "id_11",
    "case_id": "id_11",
    "title": "Day 5 Fever Defervescence with Severe Abdominal Pain in a 21yo NSF",
    "specialty": "Infectious Diseases / Singapore Medicine",
    "sg_classic": true,
    "difficulty": "High-Yield SG Finals",
    "patient_name": "CPL Ryan Teo",
    "age": 21,
    "gender": "Male",
    "occupation": "Full-Time National Serviceman (NSF Infantry)",
    "setting": "Tan Tock Seng Hospital (TTSH) / NCID Screening Centre",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Day 5 of high fever (now subsiding), severe continuous abdominal pain, and persistent vomiting",
    "presenting_complaint": "Day 5 of high fever (now subsiding), severe continuous abdominal pain, and persistent vomiting",
    "opening_statement": "Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker.",
    "triage_vitals": {
      "Heart Rate": "116 bpm",
      "Blood Pressure": "96/80 mmHg (Narrowed pulse pressure = 16 mmHg!)",
      "Respiratory Rate": "22 /min",
      "Oxygen Saturation": "98% on room air",
      "Temperature": "37.2°C (Defervescing from 39.8°C yesterday)",
      "Postural BP Drop": "Drops to 82/68 mmHg on standing"
    },
    "background_context": "CPL Ryan Teo, 21yo Male (Full-Time National Serviceman (NSF Infantry)) at Tan Tock Seng Hospital (TTSH) / NCID Screening Centre. BLITZ MODE: Rapidly screen this 21yo NSF returning from field camp. Differentiate Dengue from Malaria/Leptospirosis, screen all MOH Dengue Warning Signs, and recognize the critical defervescence plasma-leakage window.",
    "brief": {
      "setting": "Tan Tock Seng Hospital (TTSH) / NCID Screening Centre",
      "patient_name": "CPL Ryan Teo",
      "age": 21,
      "gender": "Male",
      "occupation": "Full-Time National Serviceman (NSF Infantry)",
      "presenting_complaint": "Day 5 of high fever (now subsiding), severe continuous abdominal pain, and persistent vomiting",
      "triage_vitals": {
        "Heart Rate": "116 bpm",
        "Blood Pressure": "96/80 mmHg (Narrowed pulse pressure = 16 mmHg!)",
        "Respiratory Rate": "22 /min",
        "Oxygen Saturation": "98% on room air",
        "Temperature": "37.2°C (Defervescing from 39.8°C yesterday)",
        "Postural BP Drop": "Drops to 82/68 mmHg on standing"
      },
      "instructions": "BLITZ MODE: Rapidly screen this 21yo NSF returning from field camp. Differentiate Dengue from Malaria/Leptospirosis, screen all MOH Dengue Warning Signs, and recognize the critical defervescence plasma-leakage window."
    },
    "persona": {
      "name": "Ryan Teo",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+5%",
      "pain_level": 7,
      "temperament": "exhausted",
      "behavioral_cues": [
        "Flush fading on face, generalised blanching macular rash ('islands of white in a sea of red')",
        "Vomited 4 times in the waiting area, clutching his right upper quadrant/epigastrium",
        "Mild gum bleeding noticed after brushing teeth"
      ]
    },
    "gates": [
      {
        "key": "fever_curve_defervescence",
        "category": "socrates",
        "trigger_concepts": [
          "fever",
          "onset",
          "when",
          "days",
          "temperature",
          "subsiding",
          "pattern",
          "start"
        ],
        "triggers": [
          "fever",
          "onset",
          "when",
          "days",
          "temperature",
          "subsiding",
          "pattern",
          "start"
        ],
        "response_text": "Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker.",
        "response": "Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "warning_abdominal_vomiting",
        "category": "red_flag",
        "trigger_concepts": [
          "abdominal",
          "pain",
          "stomach",
          "tummy",
          "vomit",
          "vomiting",
          "nausea",
          "keep fluids down",
          "drink"
        ],
        "triggers": [
          "abdominal",
          "pain",
          "stomach",
          "tummy",
          "vomit",
          "vomiting",
          "nausea",
          "keep fluids down",
          "drink"
        ],
        "response_text": "Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
        "response": "Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "warning_mucosal_bleeding",
        "category": "red_flag",
        "trigger_concepts": [
          "bleed",
          "bleeding",
          "gums",
          "nosebleed",
          "epistaxis",
          "black stool",
          "melena",
          "bruise",
          "rash",
          "petechiae"
        ],
        "triggers": [
          "bleed",
          "bleeding",
          "gums",
          "nosebleed",
          "epistaxis",
          "black stool",
          "melena",
          "bruise",
          "rash",
          "petechiae"
        ],
        "response_text": "My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
        "response": "My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "warning_lethargy_postural",
        "category": "red_flag",
        "trigger_concepts": [
          "dizzy",
          "faint",
          "standing",
          "postural",
          "lethargy",
          "restless",
          "drowsy",
          "urine",
          "pee"
        ],
        "triggers": [
          "dizzy",
          "faint",
          "standing",
          "postural",
          "lethargy",
          "restless",
          "drowsy",
          "urine",
          "pee"
        ],
        "response_text": "I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
        "response": "I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "epi_tekong_leptospirosis_malaria",
        "category": "social",
        "trigger_concepts": [
          "camp",
          "tekong",
          "jungle",
          "outfield",
          "mosquito",
          "bites",
          "soil",
          "river",
          "water",
          "travel",
          "cluster"
        ],
        "triggers": [
          "camp",
          "tekong",
          "jungle",
          "outfield",
          "mosquito",
          "bites",
          "soil",
          "river",
          "water",
          "travel",
          "cluster"
        ],
        "response_text": "I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
        "response": "I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pmhx_nsaids_prior_dengue",
        "category": "past_history",
        "trigger_concepts": [
          "past",
          "previous dengue",
          "second time",
          "meds",
          "panadol",
          "ibuprofen",
          "nsaid",
          "aspirin"
        ],
        "triggers": [
          "past",
          "previous dengue",
          "second time",
          "meds",
          "panadol",
          "ibuprofen",
          "nsaid",
          "aspirin"
        ],
        "response_text": "I had Dengue Serotype 1 when I was 14 years old! So this is my second dengue infection. I only took Panadol—the MO warned us never to take Ibuprofen or Ponstan.",
        "response": "I had Dengue Serotype 1 when I was 14 years old! So this is my second dengue infection. I only took Panadol—the MO warned us never to take Ibuprofen or Ponstan.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "fever_curve_defervescence",
        "category": "socrates",
        "trigger_concepts": [
          "fever",
          "onset",
          "when",
          "days",
          "temperature",
          "subsiding",
          "pattern",
          "start"
        ],
        "triggers": [
          "fever",
          "onset",
          "when",
          "days",
          "temperature",
          "subsiding",
          "pattern",
          "start"
        ],
        "response_text": "Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker.",
        "response": "Fever started 5 days ago at 39.8°C with severe retro-orbital headache and bone-breaking back/muscle aches ('breakbone fever'). Strangely, my temperature came down this morning to 37.2°C, yet I feel 10 times sicker and weaker.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "warning_abdominal_vomiting",
        "category": "red_flag",
        "trigger_concepts": [
          "abdominal",
          "pain",
          "stomach",
          "tummy",
          "vomit",
          "vomiting",
          "nausea",
          "keep fluids down",
          "drink"
        ],
        "triggers": [
          "abdominal",
          "pain",
          "stomach",
          "tummy",
          "vomit",
          "vomiting",
          "nausea",
          "keep fluids down",
          "drink"
        ],
        "response_text": "Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
        "response": "Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "warning_mucosal_bleeding",
        "category": "red_flag",
        "trigger_concepts": [
          "bleed",
          "bleeding",
          "gums",
          "nosebleed",
          "epistaxis",
          "black stool",
          "melena",
          "bruise",
          "rash",
          "petechiae"
        ],
        "triggers": [
          "bleed",
          "bleeding",
          "gums",
          "nosebleed",
          "epistaxis",
          "black stool",
          "melena",
          "bruise",
          "rash",
          "petechiae"
        ],
        "response_text": "My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
        "response": "My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "warning_lethargy_postural",
        "category": "red_flag",
        "trigger_concepts": [
          "dizzy",
          "faint",
          "standing",
          "postural",
          "lethargy",
          "restless",
          "drowsy",
          "urine",
          "pee"
        ],
        "triggers": [
          "dizzy",
          "faint",
          "standing",
          "postural",
          "lethargy",
          "restless",
          "drowsy",
          "urine",
          "pee"
        ],
        "response_text": "I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
        "response": "I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "epi_tekong_leptospirosis_malaria",
        "category": "social",
        "trigger_concepts": [
          "camp",
          "tekong",
          "jungle",
          "outfield",
          "mosquito",
          "bites",
          "soil",
          "river",
          "water",
          "travel",
          "cluster"
        ],
        "triggers": [
          "camp",
          "tekong",
          "jungle",
          "outfield",
          "mosquito",
          "bites",
          "soil",
          "river",
          "water",
          "travel",
          "cluster"
        ],
        "response_text": "I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
        "response": "I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pmhx_nsaids_prior_dengue",
        "category": "past_history",
        "trigger_concepts": [
          "past",
          "previous dengue",
          "second time",
          "meds",
          "panadol",
          "ibuprofen",
          "nsaid",
          "aspirin"
        ],
        "triggers": [
          "past",
          "previous dengue",
          "second time",
          "meds",
          "panadol",
          "ibuprofen",
          "nsaid",
          "aspirin"
        ],
        "response_text": "I had Dengue Serotype 1 when I was 14 years old! So this is my second dengue infection. I only took Panadol—the MO warned us never to take Ibuprofen or Ponstan.",
        "response": "I had Dengue Serotype 1 when I was 14 years old! So this is my second dengue infection. I only took Panadol—the MO warned us never to take Ibuprofen or Ponstan.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "warning_abdominal_vomiting",
        "label": "Warning Abdominal Vomiting",
        "triggers": [
          "abdominal",
          "pain",
          "stomach",
          "tummy",
          "vomit",
          "vomiting",
          "nausea",
          "keep fluids down",
          "drink"
        ],
        "response": "Since my fever dropped this morning, I've had severe, continuous epigastric and right upper tummy pain, and I've vomited 5 times—can't even keep a sip of 100Plus or water down.",
        "mandatory": true
      },
      {
        "key": "warning_mucosal_bleeding",
        "label": "Warning Mucosal Bleeding",
        "triggers": [
          "bleed",
          "bleeding",
          "gums",
          "nosebleed",
          "epistaxis",
          "black stool",
          "melena",
          "bruise",
          "rash",
          "petechiae"
        ],
        "response": "My gums bled heavily for 15 minutes when I brushed my teeth this morning, and I have this itchy red rash with small white islands all over my forearms and shins.",
        "mandatory": true
      },
      {
        "key": "warning_lethargy_postural",
        "label": "Warning Lethargy Postural",
        "triggers": [
          "dizzy",
          "faint",
          "standing",
          "postural",
          "lethargy",
          "restless",
          "drowsy",
          "urine",
          "pee"
        ],
        "response": "I feel extremely dizzy whenever I try to sit or stand up, and I haven't passed urine since last night.",
        "mandatory": true
      },
      {
        "key": "epi_tekong_leptospirosis_malaria",
        "label": "Epi Tekong Leptospirosis Malaria",
        "triggers": [
          "camp",
          "tekong",
          "jungle",
          "outfield",
          "mosquito",
          "bites",
          "soil",
          "river",
          "water",
          "travel",
          "cluster"
        ],
        "response": "I just finished a 5-day outfield exercise in Pulau Tekong. Got bitten by dozens of Aedes mosquitoes at dawn. Three platoon mates are also down with dengue. We drank treated ration water—no swimming in muddy rivers or rat-infested water.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT FBC & Dengue NS1 / IgM / IgG Panel",
      "description": "Rapid bedside FBC compared with Day 2 polyclinic baseline:",
      "new_finding": "STAT FBC & Dengue NS1 / IgM / IgG Panel — Haematocrit (Hct): 52.5% (Up from 41.0% baseline = >20% haemoconcentration confirming severe plasma leakage!); Platelet Count: 18,000 /mcL (Dropped rapidly from 110,000 /mcL); WBC: 2.1 x 10^9/L (Leukopenia); Dengue Point-of-Care: NS1 Ag Positive, Dengue IgG Strongly Positive (Secondary Dengue Infection)",
      "findings": {
        "Haematocrit (Hct)": "52.5% (Up from 41.0% baseline = >20% haemoconcentration confirming severe plasma leakage!)",
        "Platelet Count": "18,000 /mcL (Dropped rapidly from 110,000 /mcL)",
        "WBC": "2.1 x 10^9/L (Leukopenia)",
        "Dengue Point-of-Care": "NS1 Ag Positive, Dengue IgG Strongly Positive (Secondary Dengue Infection)"
      },
      "expected_shifts": {
        "Severe Dengue / Compensated Dengue Shock Syndrome (Critical Plasma Leakage Phase)": 2,
        "Uncomplicated Dengue Fever": -2,
        "Plasmodium knowlesi / vivax Malaria": -2,
        "Acute Leptospirosis (Weil's Disease)": -1
      },
      "expert_rationale": "Secondary dengue infection (heterotypic antibody-dependent enhancement) entering the Critical Phase at defervescence (Day 5). Narrowed pulse pressure (96/80 = 16 mmHg, threshold <=20 mmHg) + >20% haematocrit rise (41% -> 52.5%) + warning signs (abdominal pain, persistent vomiting, mucosal bleeding) confirms Compensated Dengue Shock Syndrome. Immediate titrated isotonic crystalloid resuscitation (5-7 mL/kg/h) tracking Hct is required—NOT blind prophylactic platelet transfusion!"
    },
    "differentials": [
      {
        "name": "Severe Dengue / Compensated Dengue Shock Syndrome (Critical Phase)",
        "tier": "primary",
        "supporting_features": [
          "Secondary dengue (antibody-dependent enhancement)",
          "Defervescence Day 5 deterioration",
          "Narrow pulse pressure <20 mmHg (96/80)",
          "Haemoconcentration >20% (Hct 52.5%)",
          "Warning signs: severe abdominal pain, persistent vomiting, gum bleeding"
        ],
        "refuting_features": [],
        "prior_probability": 0.8,
        "posterior_probability": 0.99
      },
      {
        "name": "Malaria (Plasmodium knowlesi / vivax acquired in Tekong)",
        "tier": "must_not_miss",
        "supporting_features": [
          "Outfield jungle training in Pulau Tekong with mosquito exposure, fever + thrombocytopenia"
        ],
        "refuting_features": [
          "NS1 positive, classic sea-of-red rash and haemoconcentration; still send blood film for malaria parasites to exclude co-infection"
        ],
        "prior_probability": 0.12,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Melioidosis or Leptospirosis",
        "tier": "secondary",
        "supporting_features": [
          "Military outfield exposure in Singapore"
        ],
        "refuting_features": [
          "No soil inoculation pneumonia or freshwater immersion; positive Dengue NS1"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Severe Dengue / Compensated Dengue Shock Syndrome (Critical Phase)",
        "tier": "primary",
        "supporting_features": [
          "Secondary dengue (antibody-dependent enhancement)",
          "Defervescence Day 5 deterioration",
          "Narrow pulse pressure <20 mmHg (96/80)",
          "Haemoconcentration >20% (Hct 52.5%)",
          "Warning signs: severe abdominal pain, persistent vomiting, gum bleeding"
        ],
        "refuting_features": [],
        "prior_probability": 0.8,
        "posterior_probability": 0.99
      },
      {
        "name": "Malaria (Plasmodium knowlesi / vivax acquired in Tekong)",
        "tier": "must_not_miss",
        "supporting_features": [
          "Outfield jungle training in Pulau Tekong with mosquito exposure, fever + thrombocytopenia"
        ],
        "refuting_features": [
          "NS1 positive, classic sea-of-red rash and haemoconcentration; still send blood film for malaria parasites to exclude co-infection"
        ],
        "prior_probability": 0.12,
        "posterior_probability": 0.01
      },
      {
        "name": "Acute Melioidosis or Leptospirosis",
        "tier": "secondary",
        "supporting_features": [
          "Military outfield exposure in Singapore"
        ],
        "refuting_features": [
          "No soil inoculation pneumonia or freshwater immersion; positive Dengue NS1"
        ],
        "prior_probability": 0.08,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "Summarize the diagnosis and list the MOH Dengue Warning Signs present in this patient.",
        "question": "Summarize the diagnosis and list the MOH Dengue Warning Signs present in this patient.",
        "target_rubric": "21yo NSF with Secondary Dengue in the Critical Phase with Compensated Dengue Shock (pulse pressure 16 mmHg). Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, postural hypotension/lethargy, rising Hct with rapid platelet drop.",
        "model_answer": "21yo NSF with Secondary Dengue in the Critical Phase with Compensated Dengue Shock (pulse pressure 16 mmHg). Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, postural hypotension/lethargy, rising Hct with rapid platelet drop.",
        "max_marks": 10,
        "key_points_required": [
          "Secondary Dengue / Compensated Dengue Shock Syndrome",
          "Critical defervescence phase (Day 5)",
          "Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy",
          "Haemoconcentration (rising Hct 52.5%) and narrowed pulse pressure <=20 mmHg"
        ],
        "key_points": [
          "Secondary Dengue / Compensated Dengue Shock Syndrome",
          "Critical defervescence phase (Day 5)",
          "Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy",
          "Haemoconcentration (rising Hct 52.5%) and narrowed pulse pressure <=20 mmHg"
        ]
      },
      {
        "prompt": "How will you manage his fluid resuscitation, and will you transfuse platelets right now for his platelet count of 18,000?",
        "question": "How will you manage his fluid resuscitation, and will you transfuse platelets right now for his platelet count of 18,000?",
        "target_rubric": "Titrated IV isotonic crystalloid (0.9% NaCl or Hartmann's at 5-7 mL/kg/h for 1-2h, then step down to 3-5 mL/kg/h guided by serial Hct and urine output 0.5-1 mL/kg/h). DO NOT give prophylactic platelet transfusion (causes fluid overload without reducing bleeding unless severe active major haemorrhage).",
        "model_answer": "Titrated IV isotonic crystalloid (0.9% NaCl or Hartmann's at 5-7 mL/kg/h for 1-2h, then step down to 3-5 mL/kg/h guided by serial Hct and urine output 0.5-1 mL/kg/h). DO NOT give prophylactic platelet transfusion (causes fluid overload without reducing bleeding unless severe active major haemorrhage).",
        "max_marks": 10,
        "key_points_required": [
          "Titrated IV isotonic crystalloid (0.9% Saline / Hartmann's) guided by serial Haematocrit",
          "Avoid excessive hypotonic fluids (worsens third-space pleural/ascitic effusions)",
          "NO prophylactic platelet transfusion despite platelets 18k",
          "Rationale: RCTs (ARCH trial in SG) show prophylactic platelets do not prevent bleeding and increase fluid overload/pulmonary oedema",
          "Strict avoidance of NSAIDs/Aspirin and IM injections"
        ],
        "key_points": [
          "Titrated IV isotonic crystalloid (0.9% Saline / Hartmann's) guided by serial Haematocrit",
          "Avoid excessive hypotonic fluids (worsens third-space pleural/ascitic effusions)",
          "NO prophylactic platelet transfusion despite platelets 18k",
          "Rationale: RCTs (ARCH trial in SG) show prophylactic platelets do not prevent bleeding and increase fluid overload/pulmonary oedema",
          "Strict avoidance of NSAIDs/Aspirin and IM injections"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Summarize the diagnosis and list the MOH Dengue Warning Signs present in this patient.",
        "question": "Summarize the diagnosis and list the MOH Dengue Warning Signs present in this patient.",
        "target_rubric": "21yo NSF with Secondary Dengue in the Critical Phase with Compensated Dengue Shock (pulse pressure 16 mmHg). Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, postural hypotension/lethargy, rising Hct with rapid platelet drop.",
        "model_answer": "21yo NSF with Secondary Dengue in the Critical Phase with Compensated Dengue Shock (pulse pressure 16 mmHg). Warning signs: severe abdominal pain, persistent vomiting, mucosal bleeding, postural hypotension/lethargy, rising Hct with rapid platelet drop.",
        "max_marks": 10,
        "key_points_required": [
          "Secondary Dengue / Compensated Dengue Shock Syndrome",
          "Critical defervescence phase (Day 5)",
          "Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy",
          "Haemoconcentration (rising Hct 52.5%) and narrowed pulse pressure <=20 mmHg"
        ],
        "key_points": [
          "Secondary Dengue / Compensated Dengue Shock Syndrome",
          "Critical defervescence phase (Day 5)",
          "Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy",
          "Haemoconcentration (rising Hct 52.5%) and narrowed pulse pressure <=20 mmHg"
        ]
      },
      {
        "prompt": "How will you manage his fluid resuscitation, and will you transfuse platelets right now for his platelet count of 18,000?",
        "question": "How will you manage his fluid resuscitation, and will you transfuse platelets right now for his platelet count of 18,000?",
        "target_rubric": "Titrated IV isotonic crystalloid (0.9% NaCl or Hartmann's at 5-7 mL/kg/h for 1-2h, then step down to 3-5 mL/kg/h guided by serial Hct and urine output 0.5-1 mL/kg/h). DO NOT give prophylactic platelet transfusion (causes fluid overload without reducing bleeding unless severe active major haemorrhage).",
        "model_answer": "Titrated IV isotonic crystalloid (0.9% NaCl or Hartmann's at 5-7 mL/kg/h for 1-2h, then step down to 3-5 mL/kg/h guided by serial Hct and urine output 0.5-1 mL/kg/h). DO NOT give prophylactic platelet transfusion (causes fluid overload without reducing bleeding unless severe active major haemorrhage).",
        "max_marks": 10,
        "key_points_required": [
          "Titrated IV isotonic crystalloid (0.9% Saline / Hartmann's) guided by serial Haematocrit",
          "Avoid excessive hypotonic fluids (worsens third-space pleural/ascitic effusions)",
          "NO prophylactic platelet transfusion despite platelets 18k",
          "Rationale: RCTs (ARCH trial in SG) show prophylactic platelets do not prevent bleeding and increase fluid overload/pulmonary oedema",
          "Strict avoidance of NSAIDs/Aspirin and IM injections"
        ],
        "key_points": [
          "Titrated IV isotonic crystalloid (0.9% Saline / Hartmann's) guided by serial Haematocrit",
          "Avoid excessive hypotonic fluids (worsens third-space pleural/ascitic effusions)",
          "NO prophylactic platelet transfusion despite platelets 18k",
          "Rationale: RCTs (ARCH trial in SG) show prophylactic platelets do not prevent bleeding and increase fluid overload/pulmonary oedema",
          "Strict avoidance of NSAIDs/Aspirin and IM injections"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "False Reassurance When Fever Drops ('Fever Down = Patient Recovering')",
        "description": "Assuming the patient is recovering on Day 4-6 because their temperature normalized.",
        "trigger_condition": "Candidate fails to recognize that defervescence is the most dangerous 24-48h window for capillary plasma leakage.",
        "remediation_advice": "In Dengue, the Critical Phase begins right when the fever subsides (Day 4-6). Always check for narrowed pulse pressure (<20 mmHg) and rising Haematocrit.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Reflexive Prophylactic Platelet Transfusion",
        "description": "Ordering platelet transfusions simply because platelets dropped below 20,000 /mcL.",
        "trigger_condition": "Candidate orders prophylactic platelets without active major bleeding.",
        "remediation_advice": "The landmark Singapore-led ARCH trial demonstrated that prophylactic platelet transfusion in dengue does NOT reduce clinical bleeding and significantly increases transfusion reactions and fluid overload.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "gastro_12": {
    "id": "gastro_12",
    "case_id": "gastro_12",
    "title": "High Swinging Fever, RUQ Pain & Blurry Vision in a 62yo Diabetic",
    "specialty": "Gastroenterology / Hepatobiliary (SG Classic)",
    "sg_classic": true,
    "difficulty": "High-Yield SG Finals",
    "patient_name": "Mdm Siti Aminah",
    "age": 62,
    "gender": "Female",
    "occupation": "Homemaker",
    "setting": "National University Hospital (NUH) Emergency Department",
    "voice_preset": "en-SG-LunaNeural",
    "chief_complaint": "5 days of high spiking fevers with rigors, dull right upper abdominal ache, and new blurred vision in the right eye",
    "presenting_complaint": "5 days of high spiking fevers with rigors, dull right upper abdominal ache, and new blurred vision in the right eye",
    "opening_statement": "For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening.",
    "triage_vitals": {
      "Heart Rate": "114 bpm",
      "Blood Pressure": "106/64 mmHg",
      "Respiratory Rate": "20 /min",
      "Oxygen Saturation": "97% on room air",
      "Temperature": "39.4°C",
      "Capillary Blood Glucose": "21.8 mmol/L"
    },
    "background_context": "Mdm Siti Aminah, 62yo Female (Homemaker) at National University Hospital (NUH) Emergency Department. BLITZ MODE: Evaluate this 62yo diabetic woman with fever and RUQ pain. Uncover the classic East/Southeast Asian hypervirulent syndrome and screen for metastatic septic complications.",
    "brief": {
      "setting": "National University Hospital (NUH) Emergency Department",
      "patient_name": "Mdm Siti Aminah",
      "age": 62,
      "gender": "Female",
      "occupation": "Homemaker",
      "presenting_complaint": "5 days of high spiking fevers with rigors, dull right upper abdominal ache, and new blurred vision in the right eye",
      "triage_vitals": {
        "Heart Rate": "114 bpm",
        "Blood Pressure": "106/64 mmHg",
        "Respiratory Rate": "20 /min",
        "Oxygen Saturation": "97% on room air",
        "Temperature": "39.4°C",
        "Capillary Blood Glucose": "21.8 mmol/L"
      },
      "instructions": "BLITZ MODE: Evaluate this 62yo diabetic woman with fever and RUQ pain. Uncover the classic East/Southeast Asian hypervirulent syndrome and screen for metastatic septic complications."
    },
    "persona": {
      "name": "Mdm Siti Aminah",
      "voice_id": "en-SG-LunaNeural",
      "speech_rate": "-5%",
      "pain_level": 6,
      "temperament": "unwell",
      "behavioral_cues": [
        "Shivering with rigors, holding her right subcostal margin",
        "Right eye appears injected (red) with decreased visual acuity",
        "Not overtly jaundiced"
      ]
    },
    "gates": [
      {
        "key": "ruq_fever_rigors",
        "category": "socrates",
        "trigger_concepts": [
          "pain",
          "where",
          "fever",
          "chills",
          "rigors",
          "right upper",
          "liver",
          "onset"
        ],
        "triggers": [
          "pain",
          "where",
          "fever",
          "chills",
          "rigors",
          "right upper",
          "liver",
          "onset"
        ],
        "response_text": "For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening.",
        "response": "For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "endophthalmitis_eye_red_flag",
        "category": "red_flag",
        "trigger_concepts": [
          "eye",
          "vision",
          "blur",
          "blurry",
          "blind",
          "floaters",
          "red eye",
          "sight"
        ],
        "triggers": [
          "eye",
          "vision",
          "blur",
          "blurry",
          "blind",
          "floaters",
          "red eye",
          "sight"
        ],
        "response_text": "Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
        "response": "Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cns_meningitis_pulmonary",
        "category": "red_flag",
        "trigger_concepts": [
          "headache",
          "neck stiffness",
          "confusion",
          "cough",
          "breathless",
          "chest"
        ],
        "triggers": [
          "headache",
          "neck stiffness",
          "confusion",
          "cough",
          "breathless",
          "chest"
        ],
        "response_text": "I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
        "response": "I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "charcot_jaundice_biliary",
        "category": "socrates",
        "trigger_concepts": [
          "jaundice",
          "yellow",
          "dark urine",
          "tea",
          "pale stool",
          "gallstones",
          "travel",
          "dysentery",
          "diarrhea"
        ],
        "triggers": [
          "jaundice",
          "yellow",
          "dark urine",
          "tea",
          "pale stool",
          "gallstones",
          "travel",
          "dysentery",
          "diarrhea"
        ],
        "response_text": "My eyes haven't turned yellow, no pale stools, and no recent overseas travel or bloody diarrhea.",
        "response": "My eyes haven't turned yellow, no pale stools, and no recent overseas travel or bloody diarrhea.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "poorly_controlled_dm",
        "category": "past_history",
        "trigger_concepts": [
          "diabetes",
          "sugar",
          "medications",
          "hba1c",
          "past medical",
          "insulin"
        ],
        "triggers": [
          "diabetes",
          "sugar",
          "medications",
          "hba1c",
          "past medical",
          "insulin"
        ],
        "response_text": "I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
        "response": "I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "ruq_fever_rigors",
        "category": "socrates",
        "trigger_concepts": [
          "pain",
          "where",
          "fever",
          "chills",
          "rigors",
          "right upper",
          "liver",
          "onset"
        ],
        "triggers": [
          "pain",
          "where",
          "fever",
          "chills",
          "rigors",
          "right upper",
          "liver",
          "onset"
        ],
        "response_text": "For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening.",
        "response": "For 5 days I've had a deep, constant dull ache under my right ribcage that goes to my right shoulder, with violent shaking chills and fevers up to 39.5°C every evening.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "endophthalmitis_eye_red_flag",
        "category": "red_flag",
        "trigger_concepts": [
          "eye",
          "vision",
          "blur",
          "blurry",
          "blind",
          "floaters",
          "red eye",
          "sight"
        ],
        "triggers": [
          "eye",
          "vision",
          "blur",
          "blurry",
          "blind",
          "floaters",
          "red eye",
          "sight"
        ],
        "response_text": "Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
        "response": "Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cns_meningitis_pulmonary",
        "category": "red_flag",
        "trigger_concepts": [
          "headache",
          "neck stiffness",
          "confusion",
          "cough",
          "breathless",
          "chest"
        ],
        "triggers": [
          "headache",
          "neck stiffness",
          "confusion",
          "cough",
          "breathless",
          "chest"
        ],
        "response_text": "I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
        "response": "I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "charcot_jaundice_biliary",
        "category": "socrates",
        "trigger_concepts": [
          "jaundice",
          "yellow",
          "dark urine",
          "tea",
          "pale stool",
          "gallstones",
          "travel",
          "dysentery",
          "diarrhea"
        ],
        "triggers": [
          "jaundice",
          "yellow",
          "dark urine",
          "tea",
          "pale stool",
          "gallstones",
          "travel",
          "dysentery",
          "diarrhea"
        ],
        "response_text": "My eyes haven't turned yellow, no pale stools, and no recent overseas travel or bloody diarrhea.",
        "response": "My eyes haven't turned yellow, no pale stools, and no recent overseas travel or bloody diarrhea.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "poorly_controlled_dm",
        "category": "past_history",
        "trigger_concepts": [
          "diabetes",
          "sugar",
          "medications",
          "hba1c",
          "past medical",
          "insulin"
        ],
        "triggers": [
          "diabetes",
          "sugar",
          "medications",
          "hba1c",
          "past medical",
          "insulin"
        ],
        "response_text": "I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
        "response": "I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "red_flags": [
      {
        "key": "endophthalmitis_eye_red_flag",
        "label": "Endophthalmitis Eye Red Flag",
        "triggers": [
          "eye",
          "vision",
          "blur",
          "blurry",
          "blind",
          "floaters",
          "red eye",
          "sight"
        ],
        "response": "Since yesterday morning, my right eye has become painful, red, and very blurry—like looking through thick fog. I can barely see your fingers with my right eye.",
        "mandatory": true
      },
      {
        "key": "cns_meningitis_pulmonary",
        "label": "Cns Meningitis Pulmonary",
        "triggers": [
          "headache",
          "neck stiffness",
          "confusion",
          "cough",
          "breathless",
          "chest"
        ],
        "response": "I have a mild generalized headache with the fever, no neck stiffness, and a dry cough when taking deep breaths.",
        "mandatory": true
      },
      {
        "key": "poorly_controlled_dm",
        "label": "Poorly Controlled Dm",
        "triggers": [
          "diabetes",
          "sugar",
          "medications",
          "hba1c",
          "past medical",
          "insulin"
        ],
        "response": "I have had Type 2 Diabetes for 12 years, but I stopped taking my Metformin and Glipizide 6 months ago and switched to herbal tea. My last HbA1c at the polyclinic was 11.4%.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "Bedside Hepatobiliary Ultrasound & Contrast CT Abdomen",
      "description": "Emergency ultrasound and CT abdomen/pelvis findings:",
      "new_finding": "Bedside Hepatobiliary Ultrasound & Contrast CT Abdomen — CT Liver: 6.8 cm multiloculated, septated hypodense abscess in Segment VII/VIII of the right hepatic lobe with rim enhancement and internal gas bubbles. Bile ducts are NOT dilated.; Slit-Lamp Eye Exam: Right eye hypopyon and vitritis consistent with endogenous bacterial endophthalmitis.; Labs: TWBC 22.6 x 10^9/L, CRP 310 mg/L, ALP 285 U/L, Bilirubin 24 mcmol/L, HbA1c 11.8%.",
      "findings": {
        "CT Liver": "6.8 cm multiloculated, septated hypodense abscess in Segment VII/VIII of the right hepatic lobe with rim enhancement and internal gas bubbles. Bile ducts are NOT dilated.",
        "Slit-Lamp Eye Exam": "Right eye hypopyon and vitritis consistent with endogenous bacterial endophthalmitis.",
        "Labs": "TWBC 22.6 x 10^9/L, CRP 310 mg/L, ALP 285 U/L, Bilirubin 24 mcmol/L, HbA1c 11.8%."
      },
      "expected_shifts": {
        "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (with Endogenous Endophthalmitis)": 2,
        "Ascending Cholangitis (Charcot's Triad)": -2,
        "Amoebic Liver Abscess (Entamoeba histolytica)": -2,
        "Hepatocellular Carcinoma (HCC)": -2
      },
      "expert_rationale": "In Singapore and East Asia, hypervirulent K1/K2 capsular serotype Klebsiella pneumoniae is the #1 cause of pyogenic liver abscess, strongly associated with poorly controlled Diabetes Mellitus. It classically causes metastatic septic seeding: Endogenous Endophthalmitis (vision-threatening emergency!), meningitis, and septic pulmonary emboli."
    },
    "differentials": [
      {
        "name": "Invasive Klebsiella pneumoniae Pyogenic Liver Abscess with Endogenous Endophthalmitis",
        "tier": "primary",
        "supporting_features": [
          "Poorly controlled DM (HbA1c 11.8%)",
          "Swinging fever + RUQ pain",
          "Septated gas-forming right lobe liver abscess",
          "Metastatic right eye hypopyon/endophthalmitis"
        ],
        "refuting_features": [],
        "prior_probability": 0.8,
        "posterior_probability": 0.99
      },
      {
        "name": "Acute Ascending Cholangitis",
        "tier": "must_not_miss",
        "supporting_features": [
          "Fever + RUQ pain"
        ],
        "refuting_features": [
          "Non-dilated biliary tree on CT, absence of obstructive jaundice"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "expected_differentials": [
      {
        "name": "Invasive Klebsiella pneumoniae Pyogenic Liver Abscess with Endogenous Endophthalmitis",
        "tier": "primary",
        "supporting_features": [
          "Poorly controlled DM (HbA1c 11.8%)",
          "Swinging fever + RUQ pain",
          "Septated gas-forming right lobe liver abscess",
          "Metastatic right eye hypopyon/endophthalmitis"
        ],
        "refuting_features": [],
        "prior_probability": 0.8,
        "posterior_probability": 0.99
      },
      {
        "name": "Acute Ascending Cholangitis",
        "tier": "must_not_miss",
        "supporting_features": [
          "Fever + RUQ pain"
        ],
        "refuting_features": [
          "Non-dilated biliary tree on CT, absence of obstructive jaundice"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "What is the unified diagnosis and the pathognomonic microbiological syndrome?",
        "question": "What is the unified diagnosis and the pathognomonic microbiological syndrome?",
        "target_rubric": "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (serotype K1/K2) in a poorly controlled diabetic, complicated by metastatic endogenous endophthalmitis.",
        "model_answer": "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (serotype K1/K2) in a poorly controlled diabetic, complicated by metastatic endogenous endophthalmitis.",
        "max_marks": 10,
        "key_points_required": [
          "Klebsiella pneumoniae pyogenic liver abscess",
          "Invasive syndrome / metastatic seeding",
          "Endogenous endophthalmitis (right eye)",
          "Predisposing risk factor: poorly controlled Diabetes Mellitus"
        ],
        "key_points": [
          "Klebsiella pneumoniae pyogenic liver abscess",
          "Invasive syndrome / metastatic seeding",
          "Endogenous endophthalmitis (right eye)",
          "Predisposing risk factor: poorly controlled Diabetes Mellitus"
        ]
      },
      {
        "prompt": "Outline your immediate multidisciplinary management and long-term GI follow-up.",
        "question": "Outline your immediate multidisciplinary management and long-term GI follow-up.",
        "target_rubric": "1. Empirical IV Ceftriaxone + Metronidazole; 2. Interventional Radiology percutaneous pigtail catheter drainage (abscess >5cm); 3. STAT Ophthalmology referral for intravitreal antibiotics/vitrectomy to save sight; 4. Insulin glycemic control; 5. Outpatient colonoscopy once resolved to exclude occult colonic neoplasia.",
        "model_answer": "1. Empirical IV Ceftriaxone + Metronidazole; 2. Interventional Radiology percutaneous pigtail catheter drainage (abscess >5cm); 3. STAT Ophthalmology referral for intravitreal antibiotics/vitrectomy to save sight; 4. Insulin glycemic control; 5. Outpatient colonoscopy once resolved to exclude occult colonic neoplasia.",
        "max_marks": 10,
        "key_points_required": [
          "IV Ceftriaxone (good CNS/ocular penetration) + Metronidazole",
          "IR-guided percutaneous catheter drainage of abscess (>5cm)",
          "STAT Ophthalmology consultation for intravitreal antibiotics (sight-saving emergency)",
          "Strict inpatient insulin glycemic control",
          "Follow-up interval Colonoscopy (cryptogenic Klebsiella liver abscess is associated with occult colorectal carcinoma/adenoma)"
        ],
        "key_points": [
          "IV Ceftriaxone (good CNS/ocular penetration) + Metronidazole",
          "IR-guided percutaneous catheter drainage of abscess (>5cm)",
          "STAT Ophthalmology consultation for intravitreal antibiotics (sight-saving emergency)",
          "Strict inpatient insulin glycemic control",
          "Follow-up interval Colonoscopy (cryptogenic Klebsiella liver abscess is associated with occult colorectal carcinoma/adenoma)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "What is the unified diagnosis and the pathognomonic microbiological syndrome?",
        "question": "What is the unified diagnosis and the pathognomonic microbiological syndrome?",
        "target_rubric": "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (serotype K1/K2) in a poorly controlled diabetic, complicated by metastatic endogenous endophthalmitis.",
        "model_answer": "Invasive Hypervirulent Klebsiella pneumoniae Liver Abscess Syndrome (serotype K1/K2) in a poorly controlled diabetic, complicated by metastatic endogenous endophthalmitis.",
        "max_marks": 10,
        "key_points_required": [
          "Klebsiella pneumoniae pyogenic liver abscess",
          "Invasive syndrome / metastatic seeding",
          "Endogenous endophthalmitis (right eye)",
          "Predisposing risk factor: poorly controlled Diabetes Mellitus"
        ],
        "key_points": [
          "Klebsiella pneumoniae pyogenic liver abscess",
          "Invasive syndrome / metastatic seeding",
          "Endogenous endophthalmitis (right eye)",
          "Predisposing risk factor: poorly controlled Diabetes Mellitus"
        ]
      },
      {
        "prompt": "Outline your immediate multidisciplinary management and long-term GI follow-up.",
        "question": "Outline your immediate multidisciplinary management and long-term GI follow-up.",
        "target_rubric": "1. Empirical IV Ceftriaxone + Metronidazole; 2. Interventional Radiology percutaneous pigtail catheter drainage (abscess >5cm); 3. STAT Ophthalmology referral for intravitreal antibiotics/vitrectomy to save sight; 4. Insulin glycemic control; 5. Outpatient colonoscopy once resolved to exclude occult colonic neoplasia.",
        "model_answer": "1. Empirical IV Ceftriaxone + Metronidazole; 2. Interventional Radiology percutaneous pigtail catheter drainage (abscess >5cm); 3. STAT Ophthalmology referral for intravitreal antibiotics/vitrectomy to save sight; 4. Insulin glycemic control; 5. Outpatient colonoscopy once resolved to exclude occult colonic neoplasia.",
        "max_marks": 10,
        "key_points_required": [
          "IV Ceftriaxone (good CNS/ocular penetration) + Metronidazole",
          "IR-guided percutaneous catheter drainage of abscess (>5cm)",
          "STAT Ophthalmology consultation for intravitreal antibiotics (sight-saving emergency)",
          "Strict inpatient insulin glycemic control",
          "Follow-up interval Colonoscopy (cryptogenic Klebsiella liver abscess is associated with occult colorectal carcinoma/adenoma)"
        ],
        "key_points": [
          "IV Ceftriaxone (good CNS/ocular penetration) + Metronidazole",
          "IR-guided percutaneous catheter drainage of abscess (>5cm)",
          "STAT Ophthalmology consultation for intravitreal antibiotics (sight-saving emergency)",
          "Strict inpatient insulin glycemic control",
          "Follow-up interval Colonoscopy (cryptogenic Klebsiella liver abscess is associated with occult colorectal carcinoma/adenoma)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Missing Metastatic Endophthalmitis in Liver Abscess",
        "description": "Focusing only on the abdomen and ignoring visual complaints, resulting in permanent blindness.",
        "trigger_condition": "Candidate fails to examine the eyes or call STAT Ophthalmology.",
        "remediation_advice": "In Singapore finals, ANY diabetic with a pyogenic liver abscess MUST be screened for blurry vision (endophthalmitis) and neck stiffness (meningitis).",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Forgetting Interval Colonoscopy After Cryptogenic Pyogenic Liver Abscess",
        "description": "Treating the liver abscess without investigating the colonic mucosal barrier portal of entry.",
        "trigger_condition": "Candidate omits outpatient colonoscopy from follow-up plan.",
        "remediation_advice": "Cryptogenic Klebsiella liver abscesses have a well-established association with occult colorectal malignancy disrupting the gut mucosal barrier; always schedule an interval colonoscopy.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "ent_13": {
    "id": "ent_13",
    "case_id": "ent_13",
    "title": "Unilateral Neck Lump, Blocked Ear & Double Vision in a 54yo Chef",
    "specialty": "ENT / Oncology (SG Classic)",
    "sg_classic": true,
    "difficulty": "High-Yield SG Finals",
    "patient_name": "Mr. Lim Boon Huat",
    "age": 54,
    "gender": "Male",
    "occupation": "Cantonese Roast Meat Chef",
    "setting": "Singapore General Hospital (SGH) Otorhinolaryngology (ENT) Clinic",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Painless right upper neck lump for 2 months and blocked right ear",
    "presenting_complaint": "Painless right upper neck lump for 2 months and blocked right ear",
    "opening_statement": "I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much.",
    "triage_vitals": {
      "Heart Rate": "76 bpm",
      "Blood Pressure": "134/82 mmHg",
      "Respiratory Rate": "14 /min",
      "Oxygen Saturation": "99% on room air",
      "Temperature": "36.6°C"
    },
    "background_context": "Mr. Lim Boon Huat, 54yo Male (Cantonese Roast Meat Chef) at Singapore General Hospital (SGH) Otorhinolaryngology (ENT) Clinic. BLITZ MODE: Take a targeted history for this classic Singaporean ENT station. Elicit all 4 anatomical vectors of local invasion (nasal, otologic, neurological/skull base, nodal) and risk factors.",
    "brief": {
      "setting": "Singapore General Hospital (SGH) Otorhinolaryngology (ENT) Clinic",
      "patient_name": "Mr. Lim Boon Huat",
      "age": 54,
      "gender": "Male",
      "occupation": "Cantonese Roast Meat Chef",
      "presenting_complaint": "Painless right upper neck lump for 2 months and blocked right ear",
      "triage_vitals": {
        "Heart Rate": "76 bpm",
        "Blood Pressure": "134/82 mmHg",
        "Respiratory Rate": "14 /min",
        "Oxygen Saturation": "99% on room air",
        "Temperature": "36.6°C"
      },
      "instructions": "BLITZ MODE: Take a targeted history for this classic Singaporean ENT station. Elicit all 4 anatomical vectors of local invasion (nasal, otologic, neurological/skull base, nodal) and risk factors."
    },
    "persona": {
      "name": "Mr. Lim Boon Huat",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+0%",
      "pain_level": 2,
      "temperament": "stoic",
      "behavioral_cues": [
        "Firm, non-tender 3.5cm lymph node palpable in right upper posterior triangle / Level II/V",
        "Turns his head slightly to the right to avoid double vision on right lateral gaze",
        "Asks you to speak slightly louder on his right side"
      ]
    },
    "gates": [
      {
        "key": "nodal_neck_lump",
        "category": "socrates",
        "trigger_concepts": [
          "lump",
          "neck",
          "size",
          "painful",
          "growing",
          "how long",
          "onset"
        ],
        "triggers": [
          "lump",
          "neck",
          "size",
          "painful",
          "growing",
          "how long",
          "onset"
        ],
        "response_text": "I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much.",
        "response": "I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "otologic_eustachian_glue_ear",
        "category": "red_flag",
        "trigger_concepts": [
          "ear",
          "hearing",
          "deaf",
          "blocked",
          "tinnitus",
          "ringing",
          "muffled"
        ],
        "triggers": [
          "ear",
          "hearing",
          "deaf",
          "blocked",
          "tinnitus",
          "ringing",
          "muffled"
        ],
        "response_text": "My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
        "response": "My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "nasal_epistaxis_postnasal",
        "category": "red_flag",
        "trigger_concepts": [
          "nose",
          "bleed",
          "epistaxis",
          "phlegm",
          "spit",
          "blood",
          "blocked nose",
          "morning"
        ],
        "triggers": [
          "nose",
          "bleed",
          "epistaxis",
          "phlegm",
          "spit",
          "blood",
          "blocked nose",
          "morning"
        ],
        "response_text": "Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
        "response": "Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cranial_nerves_skull_base",
        "category": "red_flag",
        "trigger_concepts": [
          "double vision",
          "diplopia",
          "vision",
          "facial numbness",
          "numb",
          "headache",
          "swallowing",
          "hoarse"
        ],
        "triggers": [
          "double vision",
          "diplopia",
          "vision",
          "facial numbness",
          "numb",
          "headache",
          "swallowing",
          "hoarse"
        ],
        "response_text": "For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
        "response": "For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "risk_factors_cantonese_salted_fish_ebv",
        "category": "social",
        "trigger_concepts": [
          "family",
          "cancer",
          "diet",
          "salted fish",
          "preserved",
          "chinese",
          "cantonese",
          "smoke"
        ],
        "triggers": [
          "family",
          "cancer",
          "diet",
          "salted fish",
          "preserved",
          "chinese",
          "cantonese",
          "smoke"
        ],
        "response_text": "I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
        "response": "I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "nodal_neck_lump",
        "category": "socrates",
        "trigger_concepts": [
          "lump",
          "neck",
          "size",
          "painful",
          "growing",
          "how long",
          "onset"
        ],
        "triggers": [
          "lump",
          "neck",
          "size",
          "painful",
          "growing",
          "how long",
          "onset"
        ],
        "response_text": "I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much.",
        "response": "I noticed a hard, painless lump just below my right ear at the top of my neck about 2 months ago. It's slowly grown to the size of a golf ball and doesn't move much.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "otologic_eustachian_glue_ear",
        "category": "red_flag",
        "trigger_concepts": [
          "ear",
          "hearing",
          "deaf",
          "blocked",
          "tinnitus",
          "ringing",
          "muffled"
        ],
        "triggers": [
          "ear",
          "hearing",
          "deaf",
          "blocked",
          "tinnitus",
          "ringing",
          "muffled"
        ],
        "response_text": "My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
        "response": "My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "nasal_epistaxis_postnasal",
        "category": "red_flag",
        "trigger_concepts": [
          "nose",
          "bleed",
          "epistaxis",
          "phlegm",
          "spit",
          "blood",
          "blocked nose",
          "morning"
        ],
        "triggers": [
          "nose",
          "bleed",
          "epistaxis",
          "phlegm",
          "spit",
          "blood",
          "blocked nose",
          "morning"
        ],
        "response_text": "Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
        "response": "Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "cranial_nerves_skull_base",
        "category": "red_flag",
        "trigger_concepts": [
          "double vision",
          "diplopia",
          "vision",
          "facial numbness",
          "numb",
          "headache",
          "swallowing",
          "hoarse"
        ],
        "triggers": [
          "double vision",
          "diplopia",
          "vision",
          "facial numbness",
          "numb",
          "headache",
          "swallowing",
          "hoarse"
        ],
        "response_text": "For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
        "response": "For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "risk_factors_cantonese_salted_fish_ebv",
        "category": "social",
        "trigger_concepts": [
          "family",
          "cancer",
          "diet",
          "salted fish",
          "preserved",
          "chinese",
          "cantonese",
          "smoke"
        ],
        "triggers": [
          "family",
          "cancer",
          "diet",
          "salted fish",
          "preserved",
          "chinese",
          "cantonese",
          "smoke"
        ],
        "response_text": "I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
        "response": "I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "red_flags": [
      {
        "key": "otologic_eustachian_glue_ear",
        "label": "Otologic Eustachian Glue Ear",
        "triggers": [
          "ear",
          "hearing",
          "deaf",
          "blocked",
          "tinnitus",
          "ringing",
          "muffled"
        ],
        "response": "My right ear has felt completely plugged up—like I'm stuck in an aeroplane landing—for the past 6 weeks, with a constant low buzzing tinnitus.",
        "mandatory": true
      },
      {
        "key": "nasal_epistaxis_postnasal",
        "label": "Nasal Epistaxis Postnasal",
        "triggers": [
          "nose",
          "bleed",
          "epistaxis",
          "phlegm",
          "spit",
          "blood",
          "blocked nose",
          "morning"
        ],
        "response": "Every morning when I hawk back phlegm from the back of my nose and spit into the basin, there are streaks of blood in it. My right nostril also feels blocked.",
        "mandatory": true
      },
      {
        "key": "cranial_nerves_skull_base",
        "label": "Cranial Nerves Skull Base",
        "triggers": [
          "double vision",
          "diplopia",
          "vision",
          "facial numbness",
          "numb",
          "headache",
          "swallowing",
          "hoarse"
        ],
        "response": "For the past 2 weeks, whenever I look to the right side I see two images side-by-side (horizontal diplopia), and my right cheek feels slightly numb like dental anaesthetic wearing off.",
        "mandatory": true
      },
      {
        "key": "risk_factors_cantonese_salted_fish_ebv",
        "label": "Risk Factors Cantonese Salted Fish Ebv",
        "triggers": [
          "family",
          "cancer",
          "diet",
          "salted fish",
          "preserved",
          "chinese",
          "cantonese",
          "smoke"
        ],
        "response": "I am Cantonese, grew up eating salted fish and preserved vegetables since childhood, and my older brother was treated for nose cancer (NPC) at National Cancer Centre 4 years ago.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "Flexible Nasoendoscopy & Cranial Nerve Exam",
      "description": "In-clinic flexible nasoendoscopy and otoscopy findings:",
      "new_finding": "Flexible Nasoendoscopy & Cranial Nerve Exam — Flexible Nasoendoscopy: Exophytic, friable, ulcerated mass obliterating the right Fossa of Rosenmüller (pharyngeal recess) and compressing the torus tubarius.; Right Otoscopy: Dull, retracted tympanic membrane with amber fluid level and air bubbles (Unilateral Adult Otitis Media with Effusion).; Cranial Nerve Exam: Right Cranial Nerve VI (Abducens) palsy (failure of right eye abduction) + reduced sensation over right V2 (maxillary) distribution.",
      "findings": {
        "Flexible Nasoendoscopy": "Exophytic, friable, ulcerated mass obliterating the right Fossa of Rosenmüller (pharyngeal recess) and compressing the torus tubarius.",
        "Right Otoscopy": "Dull, retracted tympanic membrane with amber fluid level and air bubbles (Unilateral Adult Otitis Media with Effusion).",
        "Cranial Nerve Exam": "Right Cranial Nerve VI (Abducens) palsy (failure of right eye abduction) + reduced sensation over right V2 (maxillary) distribution."
      },
      "expected_shifts": {
        "Locally Advanced Nasopharyngeal Carcinoma (NPC, T4N1M0) with Skull Base / Cavernous Sinus Invasion": 2,
        "Infectious Cervical Lymphadenitis / TB Adenitis": -2,
        "Benign Adult Eustachian Tube Dysfunction": -2
      },
      "expert_rationale": "CLASSIC SINGAPORE FINALS RULE: Unilateral middle ear effusion (glue ear) in a Chinese adult is Nasopharyngeal Carcinoma (NPC) in the Fossa of Rosenmüller until proven otherwise! Superior extension through the foramen lacerum into the cavernous sinus explains the CN V2 numbness and CN VI lateral rectus palsy."
    },
    "differentials": [
      {
        "name": "Nasopharyngeal Carcinoma (NPC — WHO Type III Non-Keratinizing EBV-related)",
        "tier": "primary",
        "supporting_features": [
          "Cantonese ethnicity, family history, salted fish diet",
          "Fossa of Rosenmüller mass",
          "Unilateral conductive hearing loss (OME)",
          "Morning blood-stained post-nasal drip",
          "Skull base invasion (CN V2 & CN VI palsy)",
          "Cervical lymphadenopathy (most common presenting sign)"
        ],
        "refuting_features": [],
        "prior_probability": 0.9,
        "posterior_probability": 0.99
      },
      {
        "name": "Sino-Nasal Lymphoma or Metastatic Squamous Cell Carcinoma",
        "tier": "secondary",
        "supporting_features": [
          "Nasopharyngeal mass with cervical nodes"
        ],
        "refuting_features": [
          "Histology required to differentiate, though NPC is overwhelmingly #1 in Singapore"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.01
      }
    ],
    "expected_differentials": [
      {
        "name": "Nasopharyngeal Carcinoma (NPC — WHO Type III Non-Keratinizing EBV-related)",
        "tier": "primary",
        "supporting_features": [
          "Cantonese ethnicity, family history, salted fish diet",
          "Fossa of Rosenmüller mass",
          "Unilateral conductive hearing loss (OME)",
          "Morning blood-stained post-nasal drip",
          "Skull base invasion (CN V2 & CN VI palsy)",
          "Cervical lymphadenopathy (most common presenting sign)"
        ],
        "refuting_features": [],
        "prior_probability": 0.9,
        "posterior_probability": 0.99
      },
      {
        "name": "Sino-Nasal Lymphoma or Metastatic Squamous Cell Carcinoma",
        "tier": "secondary",
        "supporting_features": [
          "Nasopharyngeal mass with cervical nodes"
        ],
        "refuting_features": [
          "Histology required to differentiate, though NPC is overwhelmingly #1 in Singapore"
        ],
        "prior_probability": 0.1,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "Explain the anatomical basis for each of Mr. Lim's 4 symptoms.",
        "question": "Explain the anatomical basis for each of Mr. Lim's 4 symptoms.",
        "target_rubric": "1. Mass in Fossa of Rosenmüller -> morning blood-stained post-nasal drip; 2. Obstruction of Eustachian tube opening (torus tubarius) -> unilateral serous otitis media; 3. Superior spread via foramen lacerum into cavernous sinus -> CN VI (diplopia) & CN V2 (cheek numbness); 4. Rich lymphatic drainage -> Level II/V cervical lymphadenopathy.",
        "model_answer": "1. Mass in Fossa of Rosenmüller -> morning blood-stained post-nasal drip; 2. Obstruction of Eustachian tube opening (torus tubarius) -> unilateral serous otitis media; 3. Superior spread via foramen lacerum into cavernous sinus -> CN VI (diplopia) & CN V2 (cheek numbness); 4. Rich lymphatic drainage -> Level II/V cervical lymphadenopathy.",
        "max_marks": 10,
        "key_points_required": [
          "Fossa of Rosenmüller primary site",
          "Eustachian tube obstruction causing unilateral otitis media with effusion",
          "Foramen lacerum / cavernous sinus skull base invasion causing CN VI & V2 palsies",
          "Cervical lymph node metastasis (Level II / posterior triangle)"
        ],
        "key_points": [
          "Fossa of Rosenmüller primary site",
          "Eustachian tube obstruction causing unilateral otitis media with effusion",
          "Foramen lacerum / cavernous sinus skull base invasion causing CN VI & V2 palsies",
          "Cervical lymph node metastasis (Level II / posterior triangle)"
        ]
      },
      {
        "prompt": "What is your diagnostic and staging workup, and what is the primary curative treatment modality for NPC?",
        "question": "What is your diagnostic and staging workup, and what is the primary curative treatment modality for NPC?",
        "target_rubric": "Diagnostic: Endoscopic-guided biopsy of the nasopharyngeal mass (NOT open excisional biopsy of the neck node!). Staging: Plasma EBV DNA titre, MRI Nasopharynx & Neck (for skull base/soft tissue), PET-CT (for distant bone/lung/liver mets). Treatment: Concurrent Chemoradiotherapy (IMRT + Cisplatin) — NPC is highly radiosensitive, NOT primary surgery!",
        "model_answer": "Diagnostic: Endoscopic-guided biopsy of the nasopharyngeal mass (NOT open excisional biopsy of the neck node!). Staging: Plasma EBV DNA titre, MRI Nasopharynx & Neck (for skull base/soft tissue), PET-CT (for distant bone/lung/liver mets). Treatment: Concurrent Chemoradiotherapy (IMRT + Cisplatin) — NPC is highly radiosensitive, NOT primary surgery!",
        "max_marks": 10,
        "key_points_required": [
          "Endoscopic punch biopsy of primary Fossa of Rosenmüller mass",
          "AVOID open excisional neck node biopsy (violates tissue planes and worsens prognosis)",
          "MRI Nasopharynx & Neck + PET-CT staging + Plasma EBV DNA viral load",
          "Primary treatment is Radiotherapy / Concurrent Chemoradiotherapy (NOT primary surgery)"
        ],
        "key_points": [
          "Endoscopic punch biopsy of primary Fossa of Rosenmüller mass",
          "AVOID open excisional neck node biopsy (violates tissue planes and worsens prognosis)",
          "MRI Nasopharynx & Neck + PET-CT staging + Plasma EBV DNA viral load",
          "Primary treatment is Radiotherapy / Concurrent Chemoradiotherapy (NOT primary surgery)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "Explain the anatomical basis for each of Mr. Lim's 4 symptoms.",
        "question": "Explain the anatomical basis for each of Mr. Lim's 4 symptoms.",
        "target_rubric": "1. Mass in Fossa of Rosenmüller -> morning blood-stained post-nasal drip; 2. Obstruction of Eustachian tube opening (torus tubarius) -> unilateral serous otitis media; 3. Superior spread via foramen lacerum into cavernous sinus -> CN VI (diplopia) & CN V2 (cheek numbness); 4. Rich lymphatic drainage -> Level II/V cervical lymphadenopathy.",
        "model_answer": "1. Mass in Fossa of Rosenmüller -> morning blood-stained post-nasal drip; 2. Obstruction of Eustachian tube opening (torus tubarius) -> unilateral serous otitis media; 3. Superior spread via foramen lacerum into cavernous sinus -> CN VI (diplopia) & CN V2 (cheek numbness); 4. Rich lymphatic drainage -> Level II/V cervical lymphadenopathy.",
        "max_marks": 10,
        "key_points_required": [
          "Fossa of Rosenmüller primary site",
          "Eustachian tube obstruction causing unilateral otitis media with effusion",
          "Foramen lacerum / cavernous sinus skull base invasion causing CN VI & V2 palsies",
          "Cervical lymph node metastasis (Level II / posterior triangle)"
        ],
        "key_points": [
          "Fossa of Rosenmüller primary site",
          "Eustachian tube obstruction causing unilateral otitis media with effusion",
          "Foramen lacerum / cavernous sinus skull base invasion causing CN VI & V2 palsies",
          "Cervical lymph node metastasis (Level II / posterior triangle)"
        ]
      },
      {
        "prompt": "What is your diagnostic and staging workup, and what is the primary curative treatment modality for NPC?",
        "question": "What is your diagnostic and staging workup, and what is the primary curative treatment modality for NPC?",
        "target_rubric": "Diagnostic: Endoscopic-guided biopsy of the nasopharyngeal mass (NOT open excisional biopsy of the neck node!). Staging: Plasma EBV DNA titre, MRI Nasopharynx & Neck (for skull base/soft tissue), PET-CT (for distant bone/lung/liver mets). Treatment: Concurrent Chemoradiotherapy (IMRT + Cisplatin) — NPC is highly radiosensitive, NOT primary surgery!",
        "model_answer": "Diagnostic: Endoscopic-guided biopsy of the nasopharyngeal mass (NOT open excisional biopsy of the neck node!). Staging: Plasma EBV DNA titre, MRI Nasopharynx & Neck (for skull base/soft tissue), PET-CT (for distant bone/lung/liver mets). Treatment: Concurrent Chemoradiotherapy (IMRT + Cisplatin) — NPC is highly radiosensitive, NOT primary surgery!",
        "max_marks": 10,
        "key_points_required": [
          "Endoscopic punch biopsy of primary Fossa of Rosenmüller mass",
          "AVOID open excisional neck node biopsy (violates tissue planes and worsens prognosis)",
          "MRI Nasopharynx & Neck + PET-CT staging + Plasma EBV DNA viral load",
          "Primary treatment is Radiotherapy / Concurrent Chemoradiotherapy (NOT primary surgery)"
        ],
        "key_points": [
          "Endoscopic punch biopsy of primary Fossa of Rosenmüller mass",
          "AVOID open excisional neck node biopsy (violates tissue planes and worsens prognosis)",
          "MRI Nasopharynx & Neck + PET-CT staging + Plasma EBV DNA viral load",
          "Primary treatment is Radiotherapy / Concurrent Chemoradiotherapy (NOT primary surgery)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Performing Open Excisional Biopsy of the Neck Node First",
        "description": "Booking the patient for an open surgical excision of the neck lump before examining and biopsying the nasopharynx.",
        "trigger_condition": "Candidate suggests excisional biopsy of the cervical lymph node.",
        "remediation_advice": "NEVER perform an open excisional biopsy on a suspected metastatic neck node before endoscopic ENT evaluation! Biopsy the primary Fossa of Rosenmüller mass endoscopically (or FNAC of the node if needed).",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      },
      {
        "trap_name": "Treating Unilateral Adult Glue Ear with Antibiotics/Grommets Alone",
        "description": "Missing the nasopharyngeal tumour obstructing the Eustachian tube.",
        "trigger_condition": "Candidate fails to inspect the Fossa of Rosenmüller in an adult with unilateral OME.",
        "remediation_advice": "Every adult presenting with unilateral serous otitis media MUST undergo flexible nasoendoscopy to rule out NPC.",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "med_14": {
    "id": "med_14",
    "case_id": "med_14",
    "title": "Collapse, Delirium & Core Temp 41.2°C After 10km Fast March",
    "specialty": "Acute Medicine / Military Medicine (SG Classic)",
    "sg_classic": true,
    "difficulty": "High-Yield SG Finals",
    "patient_name": "2LT Ethan Ng (Collateral from Medical Orderly)",
    "age": 20,
    "gender": "Male",
    "occupation": "Officer Cadet (OCS)",
    "setting": "Changi General Hospital (CGH) Emergency Resuscitation Bay",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Collapsed at the 9km mark of a load-bearing road march; agitated and confused",
    "presenting_complaint": "Collapsed at the 9km mark of a load-bearing road march; agitated and confused",
    "opening_statement": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
    "triage_vitals": {
      "Heart Rate": "148 bpm (Sinus tachycardia)",
      "Blood Pressure": "92/54 mmHg",
      "Respiratory Rate": "34 /min",
      "Oxygen Saturation": "97% on non-rebreather mask",
      "Rectal Core Temperature": "41.2°C (Extreme hyperthermia!)",
      "GCS": "11/15 (E3 V3 M5 — Agitated, disoriented)"
    },
    "background_context": "2LT Ethan Ng (Collateral from Medical Orderly), 20yo Male (Officer Cadet (OCS)) at Changi General Hospital (CGH) Emergency Resuscitation Bay. BLITZ MODE: Rapidly obtain collateral history from the accompanying SAF Medical Orderly, differentiate Exertional Heat Stroke from Heat Exhaustion, and execute immediate cooling & hyperkalaemia/rhabdo management.",
    "brief": {
      "setting": "Changi General Hospital (CGH) Emergency Resuscitation Bay",
      "patient_name": "2LT Ethan Ng (Collateral from Medical Orderly)",
      "age": 20,
      "gender": "Male",
      "occupation": "Officer Cadet (OCS)",
      "presenting_complaint": "Collapsed at the 9km mark of a load-bearing road march; agitated and confused",
      "triage_vitals": {
        "Heart Rate": "148 bpm (Sinus tachycardia)",
        "Blood Pressure": "92/54 mmHg",
        "Respiratory Rate": "34 /min",
        "Oxygen Saturation": "97% on non-rebreather mask",
        "Rectal Core Temperature": "41.2°C (Extreme hyperthermia!)",
        "GCS": "11/15 (E3 V3 M5 — Agitated, disoriented)"
      },
      "instructions": "BLITZ MODE: Rapidly obtain collateral history from the accompanying SAF Medical Orderly, differentiate Exertional Heat Stroke from Heat Exhaustion, and execute immediate cooling & hyperkalaemia/rhabdo management."
    },
    "persona": {
      "name": "CPL Danish (SAF Medical Orderly)",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "+5%",
      "pain_level": 0,
      "temperament": "urgent",
      "behavioral_cues": [
        "Patient is hot, flushed, tachycardic, and incoherent on the trolley",
        "Urinary catheter bag shows 40 mL of dark Coca-Cola / tea-coloured urine",
        "Medical orderly has field vital signs chart ready"
      ]
    },
    "gates": [
      {
        "key": "collapse_cns_dysfunction",
        "category": "red_flag",
        "trigger_concepts": [
          "collapse",
          "what happened",
          "confused",
          "gcs",
          "behaviour",
          "seizure",
          "delirium",
          "march"
        ],
        "triggers": [
          "collapse",
          "what happened",
          "confused",
          "gcs",
          "behaviour",
          "seizure",
          "delirium",
          "march"
        ],
        "response_text": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
        "response": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pre_existing_viral_prodrome",
        "category": "past_history",
        "trigger_concepts": [
          "sick",
          "unwell",
          "fever",
          "sleep",
          "hydration",
          "water",
          "supplements",
          "pre-workout",
          "caffeine"
        ],
        "triggers": [
          "sick",
          "unwell",
          "fever",
          "sleep",
          "hydration",
          "water",
          "supplements",
          "pre-workout",
          "caffeine"
        ],
        "response_text": "His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
        "response": "His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "rhabdo_dark_urine",
        "category": "red_flag",
        "trigger_concepts": [
          "urine",
          "colour",
          "color",
          "tea",
          "coca cola",
          "dark",
          "muscle",
          "cramps",
          "rhabdo"
        ],
        "triggers": [
          "urine",
          "colour",
          "color",
          "tea",
          "coca cola",
          "dark",
          "muscle",
          "cramps",
          "rhabdo"
        ],
        "response_text": "When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
        "response": "When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "field_cooling_measures",
        "category": "socrates",
        "trigger_concepts": [
          "cooled",
          "ice",
          "body cooling unit",
          "strip",
          "treatment",
          "given"
        ],
        "triggers": [
          "cooled",
          "ice",
          "body cooling unit",
          "strip",
          "treatment",
          "given"
        ],
        "response_text": "We stripped off his uniform and webbing immediately, placed ice packs in his neck, axillae, and groin, sprayed him with water, and started 1L cold normal saline en route.",
        "response": "We stripped off his uniform and webbing immediately, placed ice packs in his neck, axillae, and groin, sprayed him with water, and started 1L cold normal saline en route.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "collapse_cns_dysfunction",
        "category": "red_flag",
        "trigger_concepts": [
          "collapse",
          "what happened",
          "confused",
          "gcs",
          "behaviour",
          "seizure",
          "delirium",
          "march"
        ],
        "triggers": [
          "collapse",
          "what happened",
          "confused",
          "gcs",
          "behaviour",
          "seizure",
          "delirium",
          "march"
        ],
        "response_text": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
        "response": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "pre_existing_viral_prodrome",
        "category": "past_history",
        "trigger_concepts": [
          "sick",
          "unwell",
          "fever",
          "sleep",
          "hydration",
          "water",
          "supplements",
          "pre-workout",
          "caffeine"
        ],
        "triggers": [
          "sick",
          "unwell",
          "fever",
          "sleep",
          "hydration",
          "water",
          "supplements",
          "pre-workout",
          "caffeine"
        ],
        "response_text": "His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
        "response": "His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "rhabdo_dark_urine",
        "category": "red_flag",
        "trigger_concepts": [
          "urine",
          "colour",
          "color",
          "tea",
          "coca cola",
          "dark",
          "muscle",
          "cramps",
          "rhabdo"
        ],
        "triggers": [
          "urine",
          "colour",
          "color",
          "tea",
          "coca cola",
          "dark",
          "muscle",
          "cramps",
          "rhabdo"
        ],
        "response_text": "When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
        "response": "When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "field_cooling_measures",
        "category": "socrates",
        "trigger_concepts": [
          "cooled",
          "ice",
          "body cooling unit",
          "strip",
          "treatment",
          "given"
        ],
        "triggers": [
          "cooled",
          "ice",
          "body cooling unit",
          "strip",
          "treatment",
          "given"
        ],
        "response_text": "We stripped off his uniform and webbing immediately, placed ice packs in his neck, axillae, and groin, sprayed him with water, and started 1L cold normal saline en route.",
        "response": "We stripped off his uniform and webbing immediately, placed ice packs in his neck, axillae, and groin, sprayed him with water, and started 1L cold normal saline en route.",
        "unlocked": false,
        "mandatory_for_safety": false
      }
    ],
    "red_flags": [
      {
        "key": "collapse_cns_dysfunction",
        "label": "Collapse Cns Dysfunction",
        "triggers": [
          "collapse",
          "what happened",
          "confused",
          "gcs",
          "behaviour",
          "seizure",
          "delirium",
          "march"
        ],
        "response": "At the 9km mark in 33°C high humidity, Ethan started staggering like he was drunk, slurring his words, and pushing away his buddy before collapsing. His rectal temperature on site was 41.5°C.",
        "mandatory": true
      },
      {
        "key": "pre_existing_viral_prodrome",
        "label": "Pre Existing Viral Prodrome",
        "triggers": [
          "sick",
          "unwell",
          "fever",
          "sleep",
          "hydration",
          "water",
          "supplements",
          "pre-workout",
          "caffeine"
        ],
        "response": "His bunkmate just revealed Ethan had a sore throat and poor sleep for 2 days, but hid it because he didn't want to fall out of his commissioning milestone march. He also took two scoops of high-caffeine pre-workout powder this morning.",
        "mandatory": true
      },
      {
        "key": "rhabdo_dark_urine",
        "label": "Rhabdo Dark Urine",
        "triggers": [
          "urine",
          "colour",
          "color",
          "tea",
          "coca cola",
          "dark",
          "muscle",
          "cramps",
          "rhabdo"
        ],
        "response": "When we catheterized him, only 40 mL of dark reddish-brown Coca-Cola coloured urine came out. Both his thighs and calves feel tense and woody.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT Resus Bloods, ECG & Urine Dipstick",
      "description": "Point-of-care biochemical and ECG results:",
      "new_finding": "STAT Resus Bloods, ECG & Urine Dipstick — Serum Potassium (K+): 6.6 mmol/L (Severe hyperkalaemia from massive myocyte lysis!); Creatine Kinase (CK): 54,200 U/L (Severe Exertional Rhabdomyolysis); 12-Lead ECG: Sinus tachycardia 146 bpm with tall, tented peaked T-waves across precordial leads.; Urine Dipstick & Microscopy: Dipstick 4+ Blood, but Urine Microscopy shows <2 RBC/hpf (Confirms Myoglobinuria!).; Renal & Coag: Creatinine 218 mcmol/L (AKI), AST 640 U/L, INR 1.6.",
      "findings": {
        "Serum Potassium (K+)": "6.6 mmol/L (Severe hyperkalaemia from massive myocyte lysis!)",
        "Creatine Kinase (CK)": "54,200 U/L (Severe Exertional Rhabdomyolysis)",
        "12-Lead ECG": "Sinus tachycardia 146 bpm with tall, tented peaked T-waves across precordial leads.",
        "Urine Dipstick & Microscopy": "Dipstick 4+ Blood, but Urine Microscopy shows <2 RBC/hpf (Confirms Myoglobinuria!).",
        "Renal & Coag": "Creatinine 218 mcmol/L (AKI), AST 640 U/L, INR 1.6."
      },
      "expected_shifts": {
        "Exertional Heat Stroke complicated by Severe Rhabdomyolysis, Myoglobinuric AKI & Hyperkalaemia": 2,
        "Simple Heat Exhaustion": -2,
        "Neuroleptic Malignant Syndrome / Malignant Hyperthermia": -2
      },
      "expert_rationale": "DISTINCTION RULE: Exertional Heat Stroke = Hyperthermia (>40°C) + CNS Dysfunction (delirium/ataxia/coma/seizures). Urine dipstick positive for blood with negative RBCs on microscopy is pathognomonic for Myoglobinuria. Immediate priority: rapid evaporative/ice-water cooling to <38.5-39.0°C within 30 minutes + IV 10% Calcium Gluconate for hyperkalaemic ECG changes!"
    },
    "differentials": [
      {
        "name": "Exertional Heat Stroke with Rhabdomyolysis & Myoglobinuric AKI",
        "tier": "primary",
        "supporting_features": [
          "Core temp >40°C (41.2°C) + CNS dysfunction (GCS 11)",
          "Exertional trigger in high wet-bulb globe temperature",
          "CK 54,200 U/L + Coca-Cola urine (dipstick blood+, microscopy RBC-)",
          "Hyperkalaemia 6.6 mmol/L with peaked T-waves"
        ],
        "refuting_features": [],
        "prior_probability": 0.95,
        "posterior_probability": 0.99
      },
      {
        "name": "Heat Exhaustion",
        "tier": "unlikely",
        "supporting_features": [
          "Exertional heat illness"
        ],
        "refuting_features": [
          "Presence of CNS dysfunction (delirium, GCS 11) and core temp >40°C defines Heat Stroke, NOT Heat Exhaustion"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "expected_differentials": [
      {
        "name": "Exertional Heat Stroke with Rhabdomyolysis & Myoglobinuric AKI",
        "tier": "primary",
        "supporting_features": [
          "Core temp >40°C (41.2°C) + CNS dysfunction (GCS 11)",
          "Exertional trigger in high wet-bulb globe temperature",
          "CK 54,200 U/L + Coca-Cola urine (dipstick blood+, microscopy RBC-)",
          "Hyperkalaemia 6.6 mmol/L with peaked T-waves"
        ],
        "refuting_features": [],
        "prior_probability": 0.95,
        "posterior_probability": 0.99
      },
      {
        "name": "Heat Exhaustion",
        "tier": "unlikely",
        "supporting_features": [
          "Exertional heat illness"
        ],
        "refuting_features": [
          "Presence of CNS dysfunction (delirium, GCS 11) and core temp >40°C defines Heat Stroke, NOT Heat Exhaustion"
        ],
        "prior_probability": 0.05,
        "posterior_probability": 0.0
      }
    ],
    "viva_questions": [
      {
        "prompt": "How do you clinically distinguish Heat Exhaustion from Exertional Heat Stroke, and why does his urine dipstick show 4+ blood with no RBCs on microscopy?",
        "question": "How do you clinically distinguish Heat Exhaustion from Exertional Heat Stroke, and why does his urine dipstick show 4+ blood with no RBCs on microscopy?",
        "target_rubric": "Exertional Heat Stroke is defined by Core Temp >40°C PLUS Central Nervous System dysfunction (delirium, ataxia, seizures, coma). Urine dipstick orthotoluidine reaction cannot distinguish haemoglobin from myoglobin—positive dipstick blood with absent RBCs on microscopy confirms Myoglobinuria from rhabdomyolysis.",
        "model_answer": "Exertional Heat Stroke is defined by Core Temp >40°C PLUS Central Nervous System dysfunction (delirium, ataxia, seizures, coma). Urine dipstick orthotoluidine reaction cannot distinguish haemoglobin from myoglobin—positive dipstick blood with absent RBCs on microscopy confirms Myoglobinuria from rhabdomyolysis.",
        "max_marks": 10,
        "key_points_required": [
          "Core temperature >40°C PLUS CNS dysfunction defines Heat Stroke",
          "Myoglobinuria explains positive dipstick blood with negative microscopic RBCs",
          "Massive skeletal muscle breakdown (CK 54,200) releasing myoglobin and intracellular potassium"
        ],
        "key_points": [
          "Core temperature >40°C PLUS CNS dysfunction defines Heat Stroke",
          "Myoglobinuria explains positive dipstick blood with negative microscopic RBCs",
          "Massive skeletal muscle breakdown (CK 54,200) releasing myoglobin and intracellular potassium"
        ]
      },
      {
        "prompt": "Outline your immediate resuscitation: cooling target, hyperkalaemia treatment, and why Paracetamol/Dantrolene are NOT indicated.",
        "question": "Outline your immediate resuscitation: cooling target, hyperkalaemia treatment, and why Paracetamol/Dantrolene are NOT indicated.",
        "target_rubric": "1. Rapid cooling (Body Cooling Unit / ice water immersion / mist + fan + ice packs to groin/axilla/neck) to target rectal temp <38.5-39.0°C within 30 mins (stop active cooling at 38.5-39°C to prevent overshoot hypothermia); 2. Hyperkalaemia: 10mL 10% IV Calcium Gluconate (stabilize myocardium) + IV Insulin 10U in 50mL D50; 3. Aggressive IV 0.9% NaCl to maintain urine output >200-300 mL/h; 4. AVOID Paracetamol (ineffective as hypothalamic set-point is normal, and worsens hepatic injury!)",
        "model_answer": "1. Rapid cooling (Body Cooling Unit / ice water immersion / mist + fan + ice packs to groin/axilla/neck) to target rectal temp <38.5-39.0°C within 30 mins (stop active cooling at 38.5-39°C to prevent overshoot hypothermia); 2. Hyperkalaemia: 10mL 10% IV Calcium Gluconate (stabilize myocardium) + IV Insulin 10U in 50mL D50; 3. Aggressive IV 0.9% NaCl to maintain urine output >200-300 mL/h; 4. AVOID Paracetamol (ineffective as hypothalamic set-point is normal, and worsens hepatic injury!)",
        "max_marks": 10,
        "key_points_required": [
          "Rapid physical cooling (evaporative mist+fan / BCU / ice immersion) targeting <38.5-39.0°C within 30 minutes",
          "10mL 10% IV Calcium Gluconate for peaked T-waves + Insulin/Dextrose shift",
          "Aggressive IV crystalloid hydration targeting urine output 200-300 mL/h to flush myoglobin casts",
          "AVOID Paracetamol/NSAIDs (hypothalamic set-point is not elevated; paracetamol worsens acute hypoxic hepatitis, NSAIDs worsen renal failure)"
        ],
        "key_points": [
          "Rapid physical cooling (evaporative mist+fan / BCU / ice immersion) targeting <38.5-39.0°C within 30 minutes",
          "10mL 10% IV Calcium Gluconate for peaked T-waves + Insulin/Dextrose shift",
          "Aggressive IV crystalloid hydration targeting urine output 200-300 mL/h to flush myoglobin casts",
          "AVOID Paracetamol/NSAIDs (hypothalamic set-point is not elevated; paracetamol worsens acute hypoxic hepatitis, NSAIDs worsen renal failure)"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "How do you clinically distinguish Heat Exhaustion from Exertional Heat Stroke, and why does his urine dipstick show 4+ blood with no RBCs on microscopy?",
        "question": "How do you clinically distinguish Heat Exhaustion from Exertional Heat Stroke, and why does his urine dipstick show 4+ blood with no RBCs on microscopy?",
        "target_rubric": "Exertional Heat Stroke is defined by Core Temp >40°C PLUS Central Nervous System dysfunction (delirium, ataxia, seizures, coma). Urine dipstick orthotoluidine reaction cannot distinguish haemoglobin from myoglobin—positive dipstick blood with absent RBCs on microscopy confirms Myoglobinuria from rhabdomyolysis.",
        "model_answer": "Exertional Heat Stroke is defined by Core Temp >40°C PLUS Central Nervous System dysfunction (delirium, ataxia, seizures, coma). Urine dipstick orthotoluidine reaction cannot distinguish haemoglobin from myoglobin—positive dipstick blood with absent RBCs on microscopy confirms Myoglobinuria from rhabdomyolysis.",
        "max_marks": 10,
        "key_points_required": [
          "Core temperature >40°C PLUS CNS dysfunction defines Heat Stroke",
          "Myoglobinuria explains positive dipstick blood with negative microscopic RBCs",
          "Massive skeletal muscle breakdown (CK 54,200) releasing myoglobin and intracellular potassium"
        ],
        "key_points": [
          "Core temperature >40°C PLUS CNS dysfunction defines Heat Stroke",
          "Myoglobinuria explains positive dipstick blood with negative microscopic RBCs",
          "Massive skeletal muscle breakdown (CK 54,200) releasing myoglobin and intracellular potassium"
        ]
      },
      {
        "prompt": "Outline your immediate resuscitation: cooling target, hyperkalaemia treatment, and why Paracetamol/Dantrolene are NOT indicated.",
        "question": "Outline your immediate resuscitation: cooling target, hyperkalaemia treatment, and why Paracetamol/Dantrolene are NOT indicated.",
        "target_rubric": "1. Rapid cooling (Body Cooling Unit / ice water immersion / mist + fan + ice packs to groin/axilla/neck) to target rectal temp <38.5-39.0°C within 30 mins (stop active cooling at 38.5-39°C to prevent overshoot hypothermia); 2. Hyperkalaemia: 10mL 10% IV Calcium Gluconate (stabilize myocardium) + IV Insulin 10U in 50mL D50; 3. Aggressive IV 0.9% NaCl to maintain urine output >200-300 mL/h; 4. AVOID Paracetamol (ineffective as hypothalamic set-point is normal, and worsens hepatic injury!)",
        "model_answer": "1. Rapid cooling (Body Cooling Unit / ice water immersion / mist + fan + ice packs to groin/axilla/neck) to target rectal temp <38.5-39.0°C within 30 mins (stop active cooling at 38.5-39°C to prevent overshoot hypothermia); 2. Hyperkalaemia: 10mL 10% IV Calcium Gluconate (stabilize myocardium) + IV Insulin 10U in 50mL D50; 3. Aggressive IV 0.9% NaCl to maintain urine output >200-300 mL/h; 4. AVOID Paracetamol (ineffective as hypothalamic set-point is normal, and worsens hepatic injury!)",
        "max_marks": 10,
        "key_points_required": [
          "Rapid physical cooling (evaporative mist+fan / BCU / ice immersion) targeting <38.5-39.0°C within 30 minutes",
          "10mL 10% IV Calcium Gluconate for peaked T-waves + Insulin/Dextrose shift",
          "Aggressive IV crystalloid hydration targeting urine output 200-300 mL/h to flush myoglobin casts",
          "AVOID Paracetamol/NSAIDs (hypothalamic set-point is not elevated; paracetamol worsens acute hypoxic hepatitis, NSAIDs worsen renal failure)"
        ],
        "key_points": [
          "Rapid physical cooling (evaporative mist+fan / BCU / ice immersion) targeting <38.5-39.0°C within 30 minutes",
          "10mL 10% IV Calcium Gluconate for peaked T-waves + Insulin/Dextrose shift",
          "Aggressive IV crystalloid hydration targeting urine output 200-300 mL/h to flush myoglobin casts",
          "AVOID Paracetamol/NSAIDs (hypothalamic set-point is not elevated; paracetamol worsens acute hypoxic hepatitis, NSAIDs worsen renal failure)"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Prescribing Paracetamol or NSAIDs for Heat Stroke",
        "description": "Giving antipyretics to lower temperature in exertional heat stroke.",
        "trigger_condition": "Candidate orders IV Paracetamol or Ibuprofen.",
        "remediation_advice": "Antipyretics work by resetting PGE2 in the hypothalamus during infection—they do NOTHING in heat stroke, and Paracetamol accelerates fulminant hepatic failure while NSAIDs precipitate acute tubular necrosis!",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  },
  "surg_15": {
    "id": "surg_15",
    "case_id": "surg_15",
    "title": "Sudden Agonizing Abdominal Pain with a Soft Abdomen in a 68yo Male",
    "specialty": "General Surgery / Vascular (SG Classic)",
    "sg_classic": true,
    "difficulty": "High-Yield SG Finals",
    "patient_name": "Mr. S. Krishnan",
    "age": 68,
    "gender": "Male",
    "occupation": "Retired Bus Captain",
    "setting": "Tan Tock Seng Hospital (TTSH) Emergency Department",
    "voice_preset": "en-SG-WayneNeural",
    "chief_complaint": "Sudden 10/10 diffuse abdominal pain for 4 hours after lunch",
    "presenting_complaint": "Sudden 10/10 diffuse abdominal pain for 4 hours after lunch",
    "opening_statement": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
    "triage_vitals": {
      "Heart Rate": "118 bpm (Irregularly irregular!)",
      "Blood Pressure": "112/70 mmHg",
      "Respiratory Rate": "26 /min",
      "Oxygen Saturation": "96% on room air",
      "Temperature": "36.9°C"
    },
    "background_context": "Mr. S. Krishnan, 68yo Male (Retired Bus Captain) at Tan Tock Seng Hospital (TTSH) Emergency Department. BLITZ MODE: Evaluate this 68yo man with sudden agonizing abdominal pain. Recognize the classic clinical paradox and cardiovascular embolic substrate before bowel gangrene sets in.",
    "brief": {
      "setting": "Tan Tock Seng Hospital (TTSH) Emergency Department",
      "patient_name": "Mr. S. Krishnan",
      "age": 68,
      "gender": "Male",
      "occupation": "Retired Bus Captain",
      "presenting_complaint": "Sudden 10/10 diffuse abdominal pain for 4 hours after lunch",
      "triage_vitals": {
        "Heart Rate": "118 bpm (Irregularly irregular!)",
        "Blood Pressure": "112/70 mmHg",
        "Respiratory Rate": "26 /min",
        "Oxygen Saturation": "96% on room air",
        "Temperature": "36.9°C"
      },
      "instructions": "BLITZ MODE: Evaluate this 68yo man with sudden agonizing abdominal pain. Recognize the classic clinical paradox and cardiovascular embolic substrate before bowel gangrene sets in."
    },
    "persona": {
      "name": "Mr. S. Krishnan",
      "voice_id": "en-SG-WayneNeural",
      "speech_rate": "-5%",
      "pain_level": 10,
      "temperament": "writhing",
      "behavioral_cues": [
        "Writhing in agony on the bed, unable to find a comfortable position",
        "Yet when you palpate his abdomen, it is surprisingly soft with no guarding or rebound tenderness!",
        "Pulse is irregularly irregular"
      ]
    },
    "gates": [
      {
        "key": "pain_out_of_proportion",
        "category": "red_flag",
        "trigger_concepts": [
          "pain",
          "where",
          "onset",
          "severity",
          "examine",
          "palpate",
          "soft",
          "guarding",
          "tenderness"
        ],
        "triggers": [
          "pain",
          "where",
          "onset",
          "severity",
          "examine",
          "palpate",
          "soft",
          "guarding",
          "tenderness"
        ],
        "response_text": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
        "response": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "gut_emptying_bloody_stool",
        "category": "socrates",
        "trigger_concepts": [
          "vomit",
          "diarrhea",
          "bowel",
          "stool",
          "blood",
          "currant jelly"
        ],
        "triggers": [
          "vomit",
          "diarrhea",
          "bowel",
          "stool",
          "blood",
          "currant jelly"
        ],
        "response_text": "Right after the pain hit, I had a sudden urgent bowel movement and vomited twice. An hour ago I passed a small amount of dark maroon, foul-smelling bloody stool.",
        "response": "Right after the pain hit, I had a sudden urgent bowel movement and vomited twice. An hour ago I passed a small amount of dark maroon, foul-smelling bloody stool.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "afib_anticoagulation_noncompliance",
        "category": "past_history",
        "trigger_concepts": [
          "heart",
          "irregular",
          "palpitations",
          "atrial fibrillation",
          "af",
          "blood thinner",
          "apixaban",
          "warfarin",
          "meds"
        ],
        "triggers": [
          "heart",
          "irregular",
          "palpitations",
          "atrial fibrillation",
          "af",
          "blood thinner",
          "apixaban",
          "warfarin",
          "meds"
        ],
        "response_text": "I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
        "response": "I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "vascular_differentials_aaa",
        "category": "red_flag",
        "trigger_concepts": [
          "back pain",
          "tearing",
          "pulsatile",
          "aneurysm",
          "smoking",
          "claudication"
        ],
        "triggers": [
          "back pain",
          "tearing",
          "pulsatile",
          "aneurysm",
          "smoking",
          "claudication"
        ],
        "response_text": "The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
        "response": "The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "baseline_disclosure_gates": [
      {
        "key": "pain_out_of_proportion",
        "category": "red_flag",
        "trigger_concepts": [
          "pain",
          "where",
          "onset",
          "severity",
          "examine",
          "palpate",
          "soft",
          "guarding",
          "tenderness"
        ],
        "triggers": [
          "pain",
          "where",
          "onset",
          "severity",
          "examine",
          "palpate",
          "soft",
          "guarding",
          "tenderness"
        ],
        "response_text": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
        "response": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "gut_emptying_bloody_stool",
        "category": "socrates",
        "trigger_concepts": [
          "vomit",
          "diarrhea",
          "bowel",
          "stool",
          "blood",
          "currant jelly"
        ],
        "triggers": [
          "vomit",
          "diarrhea",
          "bowel",
          "stool",
          "blood",
          "currant jelly"
        ],
        "response_text": "Right after the pain hit, I had a sudden urgent bowel movement and vomited twice. An hour ago I passed a small amount of dark maroon, foul-smelling bloody stool.",
        "response": "Right after the pain hit, I had a sudden urgent bowel movement and vomited twice. An hour ago I passed a small amount of dark maroon, foul-smelling bloody stool.",
        "unlocked": false,
        "mandatory_for_safety": false
      },
      {
        "key": "afib_anticoagulation_noncompliance",
        "category": "past_history",
        "trigger_concepts": [
          "heart",
          "irregular",
          "palpitations",
          "atrial fibrillation",
          "af",
          "blood thinner",
          "apixaban",
          "warfarin",
          "meds"
        ],
        "triggers": [
          "heart",
          "irregular",
          "palpitations",
          "atrial fibrillation",
          "af",
          "blood thinner",
          "apixaban",
          "warfarin",
          "meds"
        ],
        "response_text": "I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
        "response": "I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
        "unlocked": false,
        "mandatory_for_safety": true
      },
      {
        "key": "vascular_differentials_aaa",
        "category": "red_flag",
        "trigger_concepts": [
          "back pain",
          "tearing",
          "pulsatile",
          "aneurysm",
          "smoking",
          "claudication"
        ],
        "triggers": [
          "back pain",
          "tearing",
          "pulsatile",
          "aneurysm",
          "smoking",
          "claudication"
        ],
        "response_text": "The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
        "response": "The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
        "unlocked": false,
        "mandatory_for_safety": true
      }
    ],
    "red_flags": [
      {
        "key": "pain_out_of_proportion",
        "label": "Pain Out Of Proportion",
        "triggers": [
          "pain",
          "where",
          "onset",
          "severity",
          "examine",
          "palpate",
          "soft",
          "guarding",
          "tenderness"
        ],
        "response": "It started suddenly 4 hours ago—the worst agony of my life, 10 out of 10, right around my belly button. Strangely, when the triage doctor pressed hard on my stomach, it didn't make the pain much worse (soft, non-peritonitic abdomen: 'pain out of proportion to clinical findings'!).",
        "mandatory": true
      },
      {
        "key": "afib_anticoagulation_noncompliance",
        "label": "Afib Anticoagulation Noncompliance",
        "triggers": [
          "heart",
          "irregular",
          "palpitations",
          "atrial fibrillation",
          "af",
          "blood thinner",
          "apixaban",
          "warfarin",
          "meds"
        ],
        "response": "I have Atrial Fibrillation diagnosed 3 years ago. I was prescribed Apixaban (Eliquis) twice a day, but I ran out of tablets 2 weeks ago and didn't refill them because they are expensive.",
        "mandatory": true
      },
      {
        "key": "vascular_differentials_aaa",
        "label": "Vascular Differentials Aaa",
        "triggers": [
          "back pain",
          "tearing",
          "pulsatile",
          "aneurysm",
          "smoking",
          "claudication"
        ],
        "response": "The pain doesn't radiate to my back. I have hypertension and smoked for 20 years.",
        "mandatory": true
      }
    ],
    "perturbation": {
      "trigger_turn": 3,
      "title": "STAT Arterial Blood Gas (ABG) & CT Mesenteric Angiogram",
      "description": "Urgent ABG and Biphasic CT Mesenteric Angiogram findings:",
      "new_finding": "STAT Arterial Blood Gas (ABG) & CT Mesenteric Angiogram — Arterial Blood Gas: pH 7.19, HCO3 11.2 mmol/L, Base Excess -15.4, Serum Lactate 5.9 mmol/L (Severe lactic acidosis!).; ECG: Atrial Fibrillation with rapid ventricular response at 118 bpm.; CT Mesenteric Angiogram: Abrupt thromboembolic occlusion of the Superior Mesenteric Artery (SMA) 4 cm distal to its origin, with hypo-enhancing jejunal and ileal loops. No pneumatosis intestinalis or free air yet.",
      "findings": {
        "Arterial Blood Gas": "pH 7.19, HCO3 11.2 mmol/L, Base Excess -15.4, Serum Lactate 5.9 mmol/L (Severe lactic acidosis!).",
        "ECG": "Atrial Fibrillation with rapid ventricular response at 118 bpm.",
        "CT Mesenteric Angiogram": "Abrupt thromboembolic occlusion of the Superior Mesenteric Artery (SMA) 4 cm distal to its origin, with hypo-enhancing jejunal and ileal loops. No pneumatosis intestinalis or free air yet."
      },
      "expected_shifts": {
        "Acute Thromboembolic Superior Mesenteric Artery (SMA) Ischaemia": 2,
        "Perforated Peptic Ulcer": -2,
        "Acute Pancreatitis": -2,
        "Simple Acute Gastroenteritis": -2
      },
      "expert_rationale": "CLASSIC SURGICAL TRIAD FOR ACUTE MESENTERIC ISCHAEMIA: 1. Severe 'pain out of proportion' to a soft abdomen; 2. Embolic source (unanticoagulated Atrial Fibrillation); 3. Rapid gut emptying + high anion gap lactic acidosis. Remember: peritonism/guarding is a LATE sign indicating full-thickness bowel necrosis/infarction!"
    },
    "differentials": [
      {
        "name": "Acute Superior Mesenteric Artery (SMA) Thromboembolism",
        "tier": "primary",
        "supporting_features": [
          "Pain out of proportion to physical exam",
          "Irregularly irregular pulse (AF off Apixaban)",
          "Severe lactic acidosis (5.9 mmol/L)",
          "SMA occlusion on CT Angiogram"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Ruptured Abdominal Aortic Aneurysm (AAA) or Perforated Viscus",
        "tier": "must_not_miss",
        "supporting_features": [
          "Sudden catastrophic abdominal pain in older vascular patient"
        ],
        "refuting_features": [
          "Excluded by CT Angiogram showing intact aorta and no pneumoperitoneum"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "expected_differentials": [
      {
        "name": "Acute Superior Mesenteric Artery (SMA) Thromboembolism",
        "tier": "primary",
        "supporting_features": [
          "Pain out of proportion to physical exam",
          "Irregularly irregular pulse (AF off Apixaban)",
          "Severe lactic acidosis (5.9 mmol/L)",
          "SMA occlusion on CT Angiogram"
        ],
        "refuting_features": [],
        "prior_probability": 0.85,
        "posterior_probability": 0.99
      },
      {
        "name": "Ruptured Abdominal Aortic Aneurysm (AAA) or Perforated Viscus",
        "tier": "must_not_miss",
        "supporting_features": [
          "Sudden catastrophic abdominal pain in older vascular patient"
        ],
        "refuting_features": [
          "Excluded by CT Angiogram showing intact aorta and no pneumoperitoneum"
        ],
        "prior_probability": 0.15,
        "posterior_probability": 0.01
      }
    ],
    "viva_questions": [
      {
        "prompt": "What is the classic clinical hallmark of early Acute Mesenteric Ischaemia, and why is his abdomen soft despite 10/10 agony?",
        "question": "What is the classic clinical hallmark of early Acute Mesenteric Ischaemia, and why is his abdomen soft despite 10/10 agony?",
        "target_rubric": "'Pain out of proportion to physical examination.' Early ischaemia is confined to the visceral mucosa (innervated by autonomic visceral fibres causing severe poorly localized colicky/constant pain), whereas the parietal peritoneum (somatic innervation causing guarding/rebound) is only irritated late once transmural bowel gangrene occurs.",
        "model_answer": "'Pain out of proportion to physical examination.' Early ischaemia is confined to the visceral mucosa (innervated by autonomic visceral fibres causing severe poorly localized colicky/constant pain), whereas the parietal peritoneum (somatic innervation causing guarding/rebound) is only irritated late once transmural bowel gangrene occurs.",
        "max_marks": 10,
        "key_points_required": [
          "Pain out of proportion to clinical examination",
          "Mucosal ischaemia precedes transmural infarction (visceral vs somatic peritoneum)",
          "Cardioembolic source: Atrial Fibrillation off Apixaban",
          "High lactate (5.9 mmol/L) and metabolic acidosis"
        ],
        "key_points": [
          "Pain out of proportion to clinical examination",
          "Mucosal ischaemia precedes transmural infarction (visceral vs somatic peritoneum)",
          "Cardioembolic source: Atrial Fibrillation off Apixaban",
          "High lactate (5.9 mmol/L) and metabolic acidosis"
        ]
      },
      {
        "prompt": "What is the gold-standard investigation and your immediate medical and surgical management?",
        "question": "What is the gold-standard investigation and your immediate medical and surgical management?",
        "target_rubric": "Gold standard: Biphasic CT Mesenteric Angiogram (CTMA). Immediate management: 1. NPO, NG tube decompression, aggressive IV crystalloid resuscitation; 2. Immediate IV Unfractionated Heparin infusion; 3. Broad-spectrum IV antibiotics (Cefazolin/Ceftriaxone + Metronidazole for bacterial translocation); 4. Urgent Vascular + General Surgery intervention: SMA embolectomy / endovascular thrombectomy + exploratory laparotomy to assess bowel viability (and relook laparotomy at 24-48h).",
        "model_answer": "Gold standard: Biphasic CT Mesenteric Angiogram (CTMA). Immediate management: 1. NPO, NG tube decompression, aggressive IV crystalloid resuscitation; 2. Immediate IV Unfractionated Heparin infusion; 3. Broad-spectrum IV antibiotics (Cefazolin/Ceftriaxone + Metronidazole for bacterial translocation); 4. Urgent Vascular + General Surgery intervention: SMA embolectomy / endovascular thrombectomy + exploratory laparotomy to assess bowel viability (and relook laparotomy at 24-48h).",
        "max_marks": 10,
        "key_points_required": [
          "Biphasic CT Mesenteric Angiogram (CTMA)",
          "Immediate systemic anticoagulation with IV Unfractionated Heparin",
          "Broad-spectrum IV antibiotics (gut bacterial translocation)",
          "Urgent revascularization (open SMA embolectomy or endovascular aspiration) + laparotomy to resect non-viable bowel"
        ],
        "key_points": [
          "Biphasic CT Mesenteric Angiogram (CTMA)",
          "Immediate systemic anticoagulation with IV Unfractionated Heparin",
          "Broad-spectrum IV antibiotics (gut bacterial translocation)",
          "Urgent revascularization (open SMA embolectomy or endovascular aspiration) + laparotomy to resect non-viable bowel"
        ]
      }
    ],
    "post_encounter_viva": [
      {
        "prompt": "What is the classic clinical hallmark of early Acute Mesenteric Ischaemia, and why is his abdomen soft despite 10/10 agony?",
        "question": "What is the classic clinical hallmark of early Acute Mesenteric Ischaemia, and why is his abdomen soft despite 10/10 agony?",
        "target_rubric": "'Pain out of proportion to physical examination.' Early ischaemia is confined to the visceral mucosa (innervated by autonomic visceral fibres causing severe poorly localized colicky/constant pain), whereas the parietal peritoneum (somatic innervation causing guarding/rebound) is only irritated late once transmural bowel gangrene occurs.",
        "model_answer": "'Pain out of proportion to physical examination.' Early ischaemia is confined to the visceral mucosa (innervated by autonomic visceral fibres causing severe poorly localized colicky/constant pain), whereas the parietal peritoneum (somatic innervation causing guarding/rebound) is only irritated late once transmural bowel gangrene occurs.",
        "max_marks": 10,
        "key_points_required": [
          "Pain out of proportion to clinical examination",
          "Mucosal ischaemia precedes transmural infarction (visceral vs somatic peritoneum)",
          "Cardioembolic source: Atrial Fibrillation off Apixaban",
          "High lactate (5.9 mmol/L) and metabolic acidosis"
        ],
        "key_points": [
          "Pain out of proportion to clinical examination",
          "Mucosal ischaemia precedes transmural infarction (visceral vs somatic peritoneum)",
          "Cardioembolic source: Atrial Fibrillation off Apixaban",
          "High lactate (5.9 mmol/L) and metabolic acidosis"
        ]
      },
      {
        "prompt": "What is the gold-standard investigation and your immediate medical and surgical management?",
        "question": "What is the gold-standard investigation and your immediate medical and surgical management?",
        "target_rubric": "Gold standard: Biphasic CT Mesenteric Angiogram (CTMA). Immediate management: 1. NPO, NG tube decompression, aggressive IV crystalloid resuscitation; 2. Immediate IV Unfractionated Heparin infusion; 3. Broad-spectrum IV antibiotics (Cefazolin/Ceftriaxone + Metronidazole for bacterial translocation); 4. Urgent Vascular + General Surgery intervention: SMA embolectomy / endovascular thrombectomy + exploratory laparotomy to assess bowel viability (and relook laparotomy at 24-48h).",
        "model_answer": "Gold standard: Biphasic CT Mesenteric Angiogram (CTMA). Immediate management: 1. NPO, NG tube decompression, aggressive IV crystalloid resuscitation; 2. Immediate IV Unfractionated Heparin infusion; 3. Broad-spectrum IV antibiotics (Cefazolin/Ceftriaxone + Metronidazole for bacterial translocation); 4. Urgent Vascular + General Surgery intervention: SMA embolectomy / endovascular thrombectomy + exploratory laparotomy to assess bowel viability (and relook laparotomy at 24-48h).",
        "max_marks": 10,
        "key_points_required": [
          "Biphasic CT Mesenteric Angiogram (CTMA)",
          "Immediate systemic anticoagulation with IV Unfractionated Heparin",
          "Broad-spectrum IV antibiotics (gut bacterial translocation)",
          "Urgent revascularization (open SMA embolectomy or endovascular aspiration) + laparotomy to resect non-viable bowel"
        ],
        "key_points": [
          "Biphasic CT Mesenteric Angiogram (CTMA)",
          "Immediate systemic anticoagulation with IV Unfractionated Heparin",
          "Broad-spectrum IV antibiotics (gut bacterial translocation)",
          "Urgent revascularization (open SMA embolectomy or endovascular aspiration) + laparotomy to resect non-viable bowel"
        ]
      }
    ],
    "cognitive_traps": [
      {
        "trap_name": "Reassurance by a 'Soft, Non-Tender Abdomen'",
        "description": "Dismissing a patient with 10/10 abdominal pain and Atrial Fibrillation because they have no guarding or rebound tenderness.",
        "trigger_condition": "Candidate delays CT angiogram because the abdomen is soft.",
        "remediation_advice": "If you wait for guarding and rebound tenderness in Acute Mesenteric Ischaemia, the bowel is already dead (gangrenous) and mortality exceeds 70%. Diagnose it in the 'soft abdomen' phase!",
        "trigger_keywords": [],
        "absent_keywords": [],
        "missed_gate_keys": []
      }
    ],
    "consultation_time_limit_sec": 420,
    "viva_time_limit_sec": 120
  }
};
const CASES_DATA = Object.values(CASES_MAP);
Object.assign(CASES_DATA, CASES_MAP);
if (typeof window !== 'undefined') {
  window.VOICE_OSCE_CASES = CASES_MAP;
  window.CASES_DATA = CASES_DATA;
}
