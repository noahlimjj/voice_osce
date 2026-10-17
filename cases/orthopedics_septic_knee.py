"""
orthopedics_septic_knee.py: Acute Monoarthritis (Septic Arthritis vs Gout vs Pseudogout).
Tests joint aspiration principles (aspirate before antibiotics), Kocher-style weight-bearing criteria, and emergency surgical washout.
"""

from voice_osce.cases.case_schema import (
    OSCECase, CandidateBrief, PatientPersona, InformationGate,
    GateCategory, PerturbationData, Differential, DifferentialTier,
    VivaQuestion, CognitiveTrap
)

CASE_ORTHOPEDICS_SEPTIC_KNEE = OSCECase(
    case_id="ortho_09",
    specialty="Orthopedics / Rheumatology",
    title="Acute Hot Swollen Right Knee in a 64-Year-Old Male",
    brief=CandidateBrief(
        setting="Orthopedic Acute Triage Bay",
        patient_name="Arthur Davies",
        age=64,
        gender="Male",
        occupation="Retired Surveyor",
        presenting_complaint="Severe right knee pain, massive swelling, and inability to bear weight for 18 hours",
        triage_vitals={
            "Heart Rate": "104 bpm",
            "Blood Pressure": "138/84 mmHg",
            "Respiratory Rate": "18 /min",
            "Oxygen Saturation": "98% on room air",
            "Temperature": "38.5°C (Febrile)",
            "GCS": "15/15"
        },
        instructions=(
            "You are the Orthopedic House Officer. Take a focused 7-minute history from Arthur. "
            "Characterize the monoarthritis, screen for portals of bacterial entry and prosthetic risk, "
            "and address his assumptions. An interim joint aspiration report will arrive."
        )
    ),
    persona=PatientPersona(
        name="Arthur Davies",
        voice_id="en-GB-RyanNeural",
        speech_rate="-5%",
        pain_level=9,
        temperament="irritable",
        behavioral_cues=[
            "Sitting in a wheelchair, holding his right knee in 30 degrees of gentle flexion",
            "Grimaces and cries out if anyone even lightly bumps the footplate",
            "Right knee is visibly erythematous, hot to touch, and tensely swollen"
        ]
    ),
    gates=[
        # PAIN ONSET & WEIGHT BEARING (MANDATORY SAFETY)
        InformationGate(
            key="weight_bearing_onset",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["walk", "bear weight", "stand", "step", "put weight", "onset", "when did it start"],
            response_text="It woke me up out of a dead sleep around 3 AM. A raging, throbbing heat inside my right knee. I tried to stand up to go to the bathroom and collapsed immediately—I cannot put even one ounce of weight on that leg without screaming.",
            mandatory_for_safety=True
        ),
        # PORTAL OF ENTRY & INFECTION SOURCE (MANDATORY SAFETY)
        InformationGate(
            key="portal_of_entry_skin",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["cut", "scratch", "wound", "skin", "puncture", "injection", "insect bite", "garden", "scrape"],
            response_text="Three days ago while pruning rose bushes in the garden, a rusty thorn punctured deeply into the front of my right knee. It bled a bit, but I just wiped it with a tissue. Yesterday the skin around it went red and tender.",
            mandatory_for_safety=True
        ),
        # PROSTHESIS & PRIOR JOINT INJECTIONS
        InformationGate(
            key="prior_injections_prosthesis",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["operation", "surgery", "replacement", "implant", "steroid injection", "knee replacement", "hardware"],
            response_text="It's my native knee, no artificial joint or metal implants. I did have a steroid injection in that knee six months ago for mild osteoarthritis, but nothing recently.",
            mandatory_for_safety=True
        ),
        # SYSTEMIC FEVERS & RIGORS
        InformationGate(
            key="systemic_fevers_rigors",
            category=GateCategory.RED_FLAG,
            trigger_concepts=["fever", "chills", "rigors", "sweat", "temperature", "shaking"],
            response_text="I've been shivering uncontrollably under two thick blankets all morning, with cold sweats and teeth chattering.",
            mandatory_for_safety=True
        ),
        # DIET, ALCOHOL & GOUT HISTORY
        InformationGate(
            key="gout_diet_alcohol",
            category=GateCategory.PAST_HISTORY,
            trigger_concepts=["gout", "uric acid", "beer", "alcohol", "seafood", "big toe", "colchicine", "allopurinol"],
            response_text="I've never been officially diagnosed with gout, though my big toe got red and sore once five years ago after a seafood barbecue. I drink two pints of stout on weekends, but nothing excessive."
        ),
        # ICE
        InformationGate(
            key="ice_ideas_concerns",
            category=GateCategory.ICE,
            trigger_concepts=["worry", "worried", "thoughts", "afraid", "ideas"],
            response_text="My neighbor told me it sounds exactly like his gout flare-up from drinking beer. He said all I need is some Colchicine tablets and a high-dose painkiller. Can't you just write me a prescription so I can go home?"
        ),
        InformationGate(
            key="ice_expectations",
            category=GateCategory.ICE,
            trigger_concepts=["expect", "hoping", "needle", "drain", "admitted"],
            response_text="Do you really have to stick a needle in my knee? Can't we just try antibiotics by mouth first?"
        )
    ],
    perturbation=PerturbationData(
        trigger_turn=4,
        title="Emergency Bedside Arthrocentesis (Joint Aspiration) Result",
        description="Under strict aseptic technique, you aspirate 40 mL of fluid from the right suprapatellar pouch.",
        findings={
            "Macroscopic Appearance": "Opaque, turbid, purulent greenish-yellow fluid (frank pus).",
            "Synovial WBC Count": "94,000 cells/mcL with 94% Polymorphonuclear Neutrophils (Normal < 200, inflammatory 2,000-50,000, septic > 50,000).",
            "Synovial Gram Stain": "Abundant intracellular and extracellular Gram-positive cocci in clusters (Staphylococcus aureus).",
            "Polarized Light Microscopy": "NO negatively or positively birefringent crystals (No urate or pyrophosphate crystals detected)."
        },
        expected_shifts={
            "Acute Septic Arthritis (Staphylococcus aureus secondary to thorn puncture)": 2, # Strongly confirmed surgical emergency
            "Acute Gouty Arthritis": -2, # Ruled out by pus, Gram-positive cocci, and absent crystals
            "Pseudogout (Calcium Pyrophosphate Dihydrate)": -2, # Ruled out
            "Hemarthrosis": -2 # Ruled out (purulent, not bloody)
        },
        expert_rationale=(
            "The synovial fluid white cell count > 50,000 with 94% neutrophils and Gram-positive cocci in clusters confirms Acute Septic Arthritis of the native knee. "
            "Bacterial proteases and host collagenases destroy articular cartilage within 24-48 hours. "
            "This is an orthopedic surgical emergency requiring urgent operating room joint washout and targeted intravenous antibiotic therapy."
        )
    ),
    differentials=[
        Differential(
            name="Acute Septic Arthritis (Staphylococcus aureus)",
            tier=DifferentialTier.PRIMARY,
            supporting_features=["Acute monoarthritis with absolute inability to bear weight", "Febrile with rigors (38.5°C)", "Direct thorn puncture portal of entry", "Synovial WBC 94k with Gram-positive cocci in clusters"],
            refuting_features=[],
            prior_probability=0.75,
            posterior_probability=0.99
        ),
        Differential(
            name="Acute Gouty Arthritis",
            tier=DifferentialTier.SECONDARY,
            supporting_features=["Hyperacute nocturnal onset of severe joint inflammation"],
            refuting_features=["Synovial fluid is frank pus with proven bacteria; no negatively birefringent needle-shaped crystals seen"],
            prior_probability=0.20,
            posterior_probability=0.01
        ),
        Differential(
            name="Reactive Arthritis",
            tier=DifferentialTier.UNLIKELY,
            supporting_features=["Acute monoarthritis"],
            refuting_features=["Presence of active bacterial infection within the joint cavity excludes sterile reactive arthritis"],
            prior_probability=0.05,
            posterior_probability=0.00
        )
    ],
    viva_questions=[
        VivaQuestion(
            prompt="Present your 60-second SBAR summary and working diagnosis to the Orthopedic Consultant on-call.",
            target_rubric="SBAR: 64yo male with deep rose thorn puncture presenting with acute right knee septic arthritis, complete inability to bear weight, pyrexia 38.5°C, and synovial fluid demonstrating 94,000 WBC and Gram-positive cocci in clusters.",
            max_marks=10,
            key_points_required=["64yo male presenting with acute febrile monoarthritis (T 38.5°C)", "Total inability to bear weight", "Identifiable bacterial portal of entry (infected rose thorn puncture)", "Diagnostic synovial fluid: 94k WBC, 94% neutrophils, Gram-positive cocci in clusters (Staph aureus)"]
        ),
        VivaQuestion(
            prompt="What is the golden rule regarding joint aspiration and antibiotic administration?",
            target_rubric="ALWAYS aspirate the joint BEFORE administering antibiotics. Giving antibiotics prior to aspiration sterilizes the synovial fluid, drops culture yield by up to 50%, and complicates long-term microbiological targeted therapy.",
            max_marks=10,
            key_points_required=["Golden Rule: ALWAYS aspirate the joint fluid BEFORE starting antibiotics", "Rationale: even a single dose of antibiotics can sterilize synovial cultures and obscure the causative pathogen", "Send synovial fluid for urgent Gram stain, cell count, microscopy for crystals, and aerobic/anaerobic cultures", "Administer empirical IV antibiotics immediately AFTER successful aspiration"]
        ),
        VivaQuestion(
            prompt="Outline your operative and pharmacological management plan in the next 24 hours.",
            target_rubric="Urgent surgical joint debridement and washout (arthroscopic or open arthrotomy), IV Flucloxacillin 2g q6h (or Vancomycin if MRSA risk), analgesia, joint immobilization in extension, and planned 4-6 weeks total antibiotic course.",
            max_marks=10,
            key_points_required=["Emergency surgical joint washout (Arthroscopic debridement and lavage or open arthrotomy)", "Empirical high-dose IV anti-staphylococcal therapy (e.g. IV Flucloxacillin 2g q6h, or IV Vancomycin if MRSA high risk/penicillin allergic)", "NPO / fasting for emergency theatre", "Total antibiotic duration: typically 4-6 weeks (IV transitioning to oral once CRP normalizes)", "Daily monitoring of inflammatory markers (CRP/ESR) and joint range of motion rehabilitation"]
        )
    ],
    cognitive_traps=[
        CognitiveTrap(
            trap_name="The 'Just Gout' Anchoring Trap",
            description="Assuming that every red, hot, swollen joint in a middle-aged male is simple crystal gout and prescribing Colchicine/NSAIDs without aspirating.",
            trigger_condition="Candidate decides to treat for gout without performing diagnostic joint aspiration.",
            remediation_advice="RULE: An acute hot swollen joint is SEPTIC ARTHRITIS until proven otherwise by arthrocentesis. Gout and septic arthritis frequently co-exist, and missing septic arthritis results in irreversible chondrolysis within 24-48 hours."
        ),
        CognitiveTrap(
            trap_name="Premature Oral Antibiotics Before Joint Aspiration",
            description="Starting empirical oral antibiotics in the clinic or ED prior to arthrocentesis.",
            trigger_condition="Candidate orders antibiotics before joint aspiration is completed.",
            remediation_advice="Never administer antibiotics prior to synovial fluid sampling unless the patient is in extremis with septic shock. Doing so compromises the pathogen yield and delays definitive tailored surgical management."
        )
    ]
)
