# ⚡ OSCEBlitz (VoiceOSCE 2.0) 🇸🇬🏥

> **Singapore & MBBS Clinical Reasoning Speed-Run App**  
> An interactive, zero-setup clinical reasoning and voice OSCE simulator designed for **LKCMedicine, NUS YLLSoM, Duke-NUS**, UK MLA/CPSA, and Commonwealth MBBS finals.  
> Combines high-yield **Blitz Mode** clinical decision speed-runs, **Practicum Script** Bayesian perturbation shifts, **PassMedicine / Geeky Medics** gated patient histories, and neural multi-accent voice synthesis (`en-SG-WayneNeural`, `en-SG-LunaNeural`, `en-GB-RyanNeural`).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnoahlimjj%2Fvoice_osce)
[![Live Demo - GitHub Pages](https://img.shields.io/badge/Live_App-GitHub_Pages-emerald?style=for-the-badge&logo=github)](https://noahlimjj.github.io/voice_osce/)
[![Live API - Vercel](https://img.shields.io/badge/Serverless_API-Vercel-black?style=for-the-badge&logo=vercel)](https://voice-osce.vercel.app)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-teal.svg)](https://fastapi.tiangolo.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌐 Live Links & Instant 1-Click Cloud Deploy

* **⚡ Instant Web App (GitHub Pages / Offline-Ready PWA):** [https://noahlimjj.github.io/voice_osce/](https://noahlimjj.github.io/voice_osce/)
* **☁️ Vercel Cloud App + Neural TTS API:** [https://voice-osce.vercel.app](https://voice-osce.vercel.app)
* **🚀 Deploy Your Own Instance in 10 Seconds:**

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnoahlimjj%2Fvoice_osce)

  *Zero heavy C++ binaries or local LLM dependencies required — builds on Vercel Python Serverless in under 30MB!*

---

## ⚡ Blitz Mode Overview (90-Second Clinical Reasoning Speed-Run)

Short on ward time between tutorials? **Blitz Mode** transforms traditional 8-minute OSCE stations into an addictive, high-yield **90-second clinical decision speed-run**:

1. **Rapid Red-Flag Chip Sweep:** Tap or speak targeted clinical questions to unlock mandatory **Safety Gates** and **Calgary-Cambridge ICE** without typing walls of text.
2. **Turn-3 Bedside Perturbation Twist:** At Turn 3, an urgent investigation drops (e.g., *V4R right ventricular STEMI*, *Haematocrit jump >20% in Dengue Shock*, *Normal CT Brain at 14h in Thunderclap Headache*).
3. **Practicum Script Bayesian Shift (`+2` to `-2`):** Instantly recalibrate your diagnostic hypotheses and avoid classic cognitive traps (*Premature Closure*, *Anchoring Bias*, *Nitrate Preload Collapse*).
4. **Consultant Viva & Objective GMC/MBBS Scorecard:** Survive a rapid Senior Consultant viva examination and receive an immediate domain breakdown with safety pass/fail verification.

---

## 🇸🇬 Singapore MBBS Classics & Core Curriculum (15 High-Yield Stations)

OSCEBlitz comes pre-loaded with **15 comprehensive clinical stations**, including **5 dedicated Singapore MBBS Classics** tailored for TTSH/NCID, SGH, NUH, and CGH clinical postings:

### 🇸🇬 Singapore Medicine Classics (`sg_classic`)
| ID | Specialty | Case Title | Patient & Setting | Mandatory Safety Gate & Perturbation |
| :-: | :--- | :--- | :--- | :--- |
| **`id_11`** | **Infectious Diseases (SG)** | Severe Dengue / Dengue Shock Syndrome | *CPL Ryan Teo* (21M, NSF from Pulau Tekong)<br>TTSH / NCID Screening Centre | **Safety Gate:** Defervescence warning signs (abdominal pain, persistent vomiting, mucosal bleeding).<br>**Perturbation:** Hct 52.5% (>20% haemoconcentration) + Pulse Pressure 16 mmHg *(Titrated crystalloids 5–7 mL/kg/h; avoid blind platelet transfusion!)* |
| **`gastro_12`** | **Hepatobiliary / ID (SG)** | Invasive *Klebsiella pneumoniae* Liver Abscess | *Uncle Lim Ah Kow* (62M, Hawker)<br>SGH Acute Medical Ward | **Safety Gate:** Uncontrolled Diabetes + acute unilateral blurred vision / red eye.<br>**Perturbation:** CT multiloculated gas-forming segment VII/VIII abscess + hypopyon *(Urgent intravitreal antibiotics to save vision + percutaneous drainage)* |
| **`ent_13`** | **ENT / Oncology (SG)** | Nasopharyngeal Carcinoma (NPC) | *Mr. Raymond Tan* (48M, Contractor)<br>NUH Specialist Outpatient Clinic | **Safety Gate:** Unilateral serous otitis media + CN VI diplopia + painless Level II/V neck node.<br>**Perturbation:** Fossa of Rosenmüller mass + plasma EBV DNA 14,500 copies/mL *(Endoscopic biopsy + MRI Skull Base + PET-CT staging)* |
| **`med_14`** | **Emergency / Military (SG)** | Exertional Heat Stroke & Rhabdomyolysis | *OCT Marcus Koh* (20M, Officer Cadet)<br>CGH Emergency Resuscitation | **Safety Gate:** Core temp 41.4°C + CNS encephalopathy after 10km route march.<br>**Perturbation:** K+ 6.8 mmol/L, CK 48,000 U/L, peaked T-waves *(Immediate evaporative/ice-water cooling <39°C + IV Calcium Gluconate; no Dantrolene/Paracetamol!)* |
| **`surg_15`** | **Vascular / General Surgery (SG)** | Acute Mesenteric Ischaemia | *Mdm Tan Sok Hwee* (74F, Retired Seamstress)<br>TTSH Emergency Department | **Safety Gate:** Severe pain out of proportion to soft abdomen + AF warfarin non-compliance.<br>**Perturbation:** Lactate 5.8 mmol/L, pH 7.21, CT Angiogram SMA embolus *(Immediate heparin, broad-spectrum antibiotics, emergency laparotomy + embolectomy)* |

### 🌍 Core MBBS & Postgraduate Curriculum
| ID | Specialty | Case Title | Patient & Setting | Mandatory Safety Gate & Perturbation |
| :-: | :--- | :--- | :--- | :--- |
| **`cardio_01`** | **Cardiology** | Acute Central Chest Pain | *Mr. David Tan* (56M, Taxi Driver)<br>ED Resuscitation Bay | **Safety Gate:** Tearing back pain, syncope.<br>**Perturbation:** Inferior STEMI with V4R elevation *(Avoid reflexive nitrates in preload-dependent RV infarction!)* |
| **`ortho_02`** | **Orthopedics / Spine** | Acute Lumbar Radiculopathy | *Marcus Lee* (32M, BJJ Coach)<br>Acute Orthopedic Clinic | **Safety Gate:** Saddle anesthesia & urinary retention.<br>**Perturbation:** 680 mL post-void bladder scan *(CES-R emergency decompression)* |
| **`neuro_03`** | **Neurology** | Hyperacute Thunderclap Headache | *Sarah Jenkins* (42F, Teacher)<br>ED Urgent Assessment | **Safety Gate:** Thunderclap onset (<30s), meningismus.<br>**Perturbation:** Normal CT brain *(Normal CT does not exclude SAH; LP at $\ge 12$h mandatory!)* |
| **`resp_04`** | **Respiratory** | Pleuritic Pain & Dyspnea | *Emily Watson* (28F, Traveler)<br>ED Resuscitation Bay | **Safety Gate:** Long-haul flight, OCP, unilateral calf DVT.<br>**Perturbation:** McConnell's sign on echo + D-dimer 4,400 *(Immediate anticoagulation prior to CTPA)* |
| **`gastro_05`** | **Gastroenterology** | Massive Upper GI Bleeding | *Robert Chen* (58M, Cirrhosis)<br>ED Resuscitation Bay | **Safety Gate:** Hemorrhagic shock, syncope, NSAIDs.<br>**Perturbation:** Urea:Creatinine > 200, Hb 6.7, INR 1.95 *(Restrictive transfusion target Hb 7–8 g/dL + Terlipressin)* |
| **`obgyn_06`** | **Obstetrics & Gynecology** | Acute Pelvic Pain & Spotting | *Chloe Lim* (26F, Teacher)<br>Early Pregnancy Assessment | **Safety Gate:** 6w amenorrhea, referred shoulder tip pain.<br>**Perturbation:** TVS shows tubal mass + Morison's pouch blood *(Emergency laparoscopy + Anti-D)* |
| **`psych_07`** | **Psychiatry** | Emergency Suicide Risk Assessment | *James Henderson* (49M, Architect)<br>Psychiatric Liaison Room | **Safety Gate:** Explicit plans (bridge jump), finalized will/letters.<br>**Perturbation:** Collateral note confirmed *(Emergency detention under Mental Health Act + 1:1 constant obs)* |
| **`peds_08`** | **Pediatrics** | Infant Fever & Non-Blanching Rash | *Baby Lucas* (11mo, Mother: Jenny)<br>Pediatric Resuscitation | **Safety Gate:** Glass Tumbler test positive, cold peripheries (CRT 4s).<br>**Perturbation:** Severe lactic acidosis 6.2 + DIC *(Immediate IV Ceftriaxone; LP is contraindicated!)* |
| **`ortho_09`** | **Orthopedics / Rheumatology** | Acute Hot Swollen Knee | *Arthur Davies* (64M, Surveyor)<br>Acute Orthopedic Bay | **Safety Gate:** Total inability to bear weight, thorn puncture.<br>**Perturbation:** Joint aspirate shows 94k WBC + *Staph aureus* *(Golden Rule: Aspirate before antibiotics + surgical washout)* |
| **`endo_10`** | **Endocrinology** | Vomiting & Deep Tachypnea | *Liam Wright* (19M, T1D Student)<br>Acute Medical Admission | **Safety Gate:** 48h insulin omission during gastroenteritis, Kussmaul breath.<br>**Perturbation:** Glucose 29.2, Ketones 6.4, pH 7.11 *(Fixed rate insulin + KCl replacement + 10% dextrose)* |

---

## 🚀 Quick Local Launch

### Option 1: Lightweight Web & Cloud Server (Recommended)
```bash
git clone https://github.com/noahlimjj/voice_osce.git
cd voice_osce

# Install lightweight cloud/web dependencies (<30MB)
pip install -r requirements.txt

# Launch web server at http://localhost:8000
python app.py
```

### Option 2: Full Local Audio & CLI Suite (Optional)
If you want offline `faster-whisper` microphone transcription or the Telegram voice bot:
```bash
pip install -r requirements-local.txt
python run_station.py id_11
```

---

## 🛠️ Architecture & Zero-Dependency Cloud Design

* **Dual-Engine Execution:** Runs seamlessly as a FastAPI + `edge-tts` serverless backend on **Vercel** (`/api/index.py`) OR 100% client-side in the browser on **GitHub Pages** (`cases_data.js` + Web Speech API fallback).
* **Stateless Serverless Recovery:** `web/server.py` automatically reconstructs session state across Vercel serverless cold starts so multi-turn consultations never drop.
* **Authentic Neural Voices:** Singapore English (`en-SG-WayneNeural`, `en-SG-LunaNeural`) and British English (`en-GB-RyanNeural`, `en-GB-SoniaNeural`, `en-GB-ThomasNeural`).

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).  
Built with ❤️ for Singapore & global medical students, patient safety, and clinical excellence.
