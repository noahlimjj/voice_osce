# VoiceOSCE 🎙️🏥

> **The Open-Source Voice-First Cognitive Clinical Examination Simulator**  
> An interactive web and voice application for medical students, doctors, and healthcare professionals preparing for OSCE, CPSA, USMLE Step 2 CS, and MBBS clinical finals.  
> Combines the diagnostic reasoning mechanics of **Practicum Script**, the authentic patient gatekeeping of **PassMedicine & Geeky Medics**, and an ultra-low latency local neural audio pipeline (`faster-whisper` + `edge-tts`).

[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-teal.svg)](https://fastapi.tiangolo.com)
[![Speech-to-Text](https://img.shields.io/badge/faster--whisper-Sub--second-emerald.svg)](https://github.com/SYSTRAN/faster-whisper)
[![TTS Engine](https://img.shields.io/badge/edge--tts-Neural_Multi--Accent-purple.svg)](https://github.com/rany2/edge-tts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 What Makes VoiceOSCE Unique

| Educational Philosophy | Platform Stolen From | How VoiceOSCE Implements It |
| :--- | :--- | :--- |
| **Gated Information Graph** | PassMedicine & Geeky Medics | Patients never volunteer their diagnosis unprompted. Calgary-Cambridge **ICE** (*Ideas, Concerns, Expectations*), sensitive social histories, and red flags are strictly gated behind empathetic, specific questioning. |
| **Clinical Uncertainty & Perturbations** | Practicum Script (Imperial College) | Mid-station injection of unexpected interim findings (bedside POCUS, 12-lead ECG, blood gas, CT). Candidates verbally declare Bayesian shifts (`+2` to `-2`) benchmarked against a Delphi specialist consensus panel. |
| **Mandatory Safety Thresholds** | UK GMC & LKCMedicine Finals | Omitting life-threatening red flags (saddle anesthesia, pregnancy in acute pelvic pain, non-blanching purpura) triggers an immediate **Critical Safety Fail** regardless of total marks. |
| **The 2-Minute Oral Examiner Viva** | Commonwealth/UK MBBS Standards | The patient steps out and a Senior Consultant Examiner interrogates the candidate on 60-second SBAR synthesis, differential justification, and acute resuscitation. |
| **Zero-Cloud, Zero-Cost Neural Audio** | Modern Open-Source AI | Runs on-device speech-to-text in 0.3s via `faster-whisper` and synthesizes multi-accent neural voices (`en-SG-WayneNeural`, `en-GB-SoniaNeural`, `en-GB-ThomasNeural`) in 0.8s without API subscriptions. |

---

## 📚 Comprehensive Clinical Case Curriculum (10 Stations)

VoiceOSCE comes pre-loaded with 10 high-yield clinical stations spanning core medical and surgical specialties:

| # | Specialty | Case Title | Patient & Setting | Mandatory Safety Gate & Perturbation |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **Cardiology** | Acute Central Chest Pain | *Mr. David Tan* (56M, Taxi Driver)<br>ED Resuscitation Bay | **Safety Gate:** Tearing back pain, syncope.<br>**Perturbation:** Inferior STEMI with V4R elevation *(Avoid reflexive nitrates in preload-dependent RV infarction!)* |
| **02** | **Orthopedics / Spine** | Acute Lumbar Radiculopathy | *Marcus Lee* (32M, BJJ Coach)<br>Acute Orthopedic Clinic | **Safety Gate:** Saddle anesthesia & urinary retention.<br>**Perturbation:** 680 mL post-void bladder scan *(CES-R emergency decompression)* |
| **03** | **Neurology** | Hyperacute Thunderclap Headache | *Sarah Jenkins* (42F, Teacher)<br>ED Urgent Assessment | **Safety Gate:** Thunderclap onset (<30s), meningismus.<br>**Perturbation:** Normal CT brain *(Normal CT does not exclude SAH; LP at $\ge 12$h mandatory!)* |
| **04** | **Respiratory** | Pleuritic Pain & Dyspnea | *Emily Watson* (28F, Traveler)<br>ED Resuscitation Bay | **Safety Gate:** Long-haul flight, OCP, unilateral calf DVT.<br>**Perturbation:** McConnell's sign on echo + D-dimer 4,400 *(Immediate anticoagulation prior to CTPA)* |
| **05** | **Gastroenterology** | Massive Upper GI Bleeding | *Robert Chen* (58M, Cirrhosis)<br>ED Resuscitation Bay | **Safety Gate:** Hemorrhagic shock, syncope, NSAIDs.<br>**Perturbation:** Urea:Creatinine > 200, Hb 6.7, INR 1.95 *(Restrictive transfusion target Hb 7-8 g/dL + Terlipressin)* |
| **06** | **Obstetrics & Gynecology** | Acute Pelvic Pain & Spotting | *Chloe Lim* (26F, Teacher)<br>Early Pregnancy Assessment | **Safety Gate:** 6w amenorrhea, referred shoulder tip pain.<br>**Perturbation:** TVS shows tubal mass + Morison's pouch blood *(Emergency laparoscopy + Anti-D)* |
| **07** | **Psychiatry** | Emergency Suicide Risk Assessment | *James Henderson* (49M, Architect)<br>Psychiatric Liaison Room | **Safety Gate:** Explicit plans (bridge jump), finalized will/letters.<br>**Perturbation:** Collateral note confirmed *(Emergency detention under Mental Health Act + 1:1 constant obs)* |
| **08** | **Pediatrics** | Infant Fever & Non-Blanching Rash | *Baby Lucas* (11mo, Mother: Jenny)<br>Pediatric Resuscitation | **Safety Gate:** Glass Tumbler test positive, cold peripheries (CRT 4s).<br>**Perturbation:** Severe lactic acidosis 6.2 + DIC *(Immediate IV Ceftriaxone; LP is contraindicated!)* |
| **09** | **Orthopedics / Rheumatology** | Acute Hot Swollen Knee | *Arthur Davies* (64M, Surveyor)<br>Acute Orthopedic Bay | **Safety Gate:** Total inability to bear weight, thorn puncture.<br>**Perturbation:** Joint aspirate shows 94k WBC + Staph aureus *(Golden Rule: Aspirate before antibiotics + surgical washout)* |
| **10** | **Endocrinology** | Vomiting & Deep Tachypnea | *Liam Wright* (19M, T1D Student)<br>Acute Medical Admission | **Safety Gate:** 48h insulin omission during gastroenteritis, Kussmaul breath.<br>**Perturbation:** Glucose 29.2, Ketones 6.4, pH 7.11 *(Fixed rate insulin + KCl replacement + 10% dextrose)* |

---

## 🚀 Quick Launch (Easy for Anyone)

### Option 1: Double-Click Launcher (Windows)
Simply double-click [`start.bat`](start.bat). It checks Python, starts the server, and opens your browser automatically!

### Option 2: Command Line (Windows, macOS, Linux)
```bash
# 1. Clone repository
git clone https://github.com/noahlimjj/voice_osce.git
cd voice_osce

# 2. Install dependencies (Python 3.10+)
pip install -r requirements.txt

# 3. Launch application
python app.py
```
Your browser will automatically open to `http://localhost:8000`.

---

## 📱 Alternate Modes

### 1. Hands-Free Telegram Voice Bot (Commuting / Walking Mode)
Practice OSCE cases hands-free while walking or driving using Telegram voice notes:
```bash
export TELEGRAM_BOT_TOKEN="your_bot_token"
python run_station.py --telegram
```
* Send `/osce` in Telegram to pick a station.
* Speak naturally into Telegram voice notes; the simulated patient and examiner reply with spoken audio notes.
* Type `/viva` when ready to present your case.
* Receive an official Markdown Scorecard directly in your chat.

### 2. Terminal CLI Station Runner
For ultra-fast keyboard-only or headless study sessions:
```bash
python run_station.py ortho_02
```

### 3. Automated Test Suite & Verification
Verify all 10 stations, speech models, and safety assertions:
```bash
python -u simulate_all_stations.py
```

---

## 🛠️ Tech Stack

* **Backend:** FastAPI, Uvicorn, Python 3.12, Pydantic v2
* **Speech-to-Text (STT):** `faster-whisper` (CTranslate2 INT8 quantized, sub-second transcription)
* **Text-to-Speech (TTS):** `edge-tts` (Microsoft Neural multi-accent voices: Singapore English, British English)
* **Frontend:** Vanilla modern JavaScript (ES6+), Web Audio API / MediaRecorder, Tailwind CSS (Glassmorphism), FontAwesome 6
* **Pedagogical Standards:** Calgary-Cambridge Consultation Guide, UK General Medical Council (GMC) CPSA / MLA criteria, Practicum Script cognitive consensus matrix.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
Built with ❤️ for medical education, patient safety, and clinical excellence.

## Optional: LLM-powered patient dialogue

Without an LLM the patient answers from scripted, gated responses. To get free-form dialogue, set one of:

| Variable | Purpose | Default |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Use Google Gemini (`pip install google-genai`) | unset |
| `OLLAMA_URL` | Ollama server to use if reachable | `http://localhost:11434` |
| `OLLAMA_MODEL` | Ollama model name | `mistral` |
| `OLLAMA_TIMEOUT` | Seconds to wait for a reply | `60` |
| `VOICE_OSCE_LLM` | Set to `off` to force scripted patient + keyword marking | unset |

When an LLM is available it also marks viva answers and perturbation reasoning semantically (synonyms and paraphrases count); otherwise a keyword marker is used.
