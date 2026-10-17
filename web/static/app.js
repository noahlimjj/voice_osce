/**
 * app.js: Frontend logic for VoiceOSCE web application.
 * Handles microphone recording, audio synthesis playback, station timers,
 * Practicum Script perturbations, and oral examiner vivas.
 */

// Application State
let currentCases = [];
let activeSessionId = null;
let activeCase = null;
let timerInterval = null;
let timeRemainingSec = 420; // 7 minutes
let isAudioMuted = false;
let currentAudioElement = null;
let latestMarkdownReport = "";

// Microphone Recording State
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadCases();

  // Enter key in candidate text input
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

// View Navigation Router
function showView(viewId) {
  const views = ["cases-view", "brief-view", "consultation-view", "viva-view", "scorecard-view"];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) el.classList.remove("hidden");
      else el.classList.add("hidden");
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------
// CASE BROWSER & FILTERS
// -------------------------------------------------------------

async function loadCases() {
  try {
    const res = await fetch("/api/cases");
    currentCases = await res.json();
    renderCasesGrid(currentCases);
  } catch (err) {
    console.error("Failed to load cases:", err);
  }
}

function renderCasesGrid(cases) {
  const grid = document.getElementById("cases-grid");
  if (!grid) return;
  grid.innerHTML = "";

  cases.forEach(c => {
    const card = document.createElement("div");
    card.className = "glassmorphism rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition duration-200 flex flex-col justify-between space-y-4 group cursor-pointer shadow-lg";
    card.onclick = () => selectCaseForBrief(c.id);

    const specialtyBadgeColor = getSpecialtyBadgeClass(c.specialty);

    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${specialtyBadgeColor}">
            ${c.specialty}
          </span>
          <span class="text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-wider">${c.id}</span>
        </div>
        <div>
          <h3 class="font-bold text-base text-white group-hover:text-emerald-400 transition">${c.title}</h3>
          <p class="text-xs text-slate-400 mt-1 flex items-center space-x-1.5">
            <i class="fa-solid fa-hospital text-emerald-400"></i>
            <span>${c.setting || 'Hospital Setting'}</span>
          </p>
        </div>
        <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 space-y-1 text-xs">
          <div class="flex justify-between text-slate-300">
            <span class="text-slate-500">Patient:</span>
            <span class="font-medium">${c.patient}</span>
          </div>
          <p class="text-amber-400/90 font-medium truncate pt-0.5">${c.complaint}</p>
        </div>
      </div>

      <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between">
        <span class="text-[11px] text-slate-400 flex items-center space-x-1">
          <i class="fa-regular fa-clock text-slate-500"></i>
          <span>7m consult + 2m viva</span>
        </span>
        <button class="px-3 py-1.5 rounded-lg bg-emerald-600/20 group-hover:bg-emerald-600 text-emerald-400 group-hover:text-white border border-emerald-500/30 text-xs font-semibold transition flex items-center space-x-1">
          <span>Start</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function getSpecialtyBadgeClass(specialty) {
  if (specialty.includes("Cardiology")) return "bg-rose-500/20 text-rose-300 border border-rose-500/30";
  if (specialty.includes("Orthopedics")) return "bg-amber-500/20 text-amber-300 border border-amber-500/30";
  if (specialty.includes("Neurology")) return "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30";
  if (specialty.includes("Respiratory")) return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
  if (specialty.includes("Gastroenterology")) return "bg-orange-500/20 text-orange-300 border border-orange-500/30";
  if (specialty.includes("Obstetrics")) return "bg-pink-500/20 text-pink-300 border border-pink-500/30";
  if (specialty.includes("Psychiatry")) return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
  if (specialty.includes("Pediatrics")) return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
  if (specialty.includes("Endocrinology")) return "bg-teal-500/20 text-teal-300 border border-teal-500/30";
  return "bg-slate-800 text-slate-300 border border-slate-700";
}

function filterCases(specialty) {
  // Update active tab buttons
  document.querySelectorAll(".filter-tab").forEach(tab => {
    if (tab.dataset.specialty === specialty) {
      tab.classList.remove("text-slate-400", "bg-transparent");
      tab.classList.add("bg-emerald-600", "text-white");
    } else {
      tab.classList.remove("bg-emerald-600", "text-white");
      tab.classList.add("text-slate-400");
    }
  });

  if (specialty === "all") {
    renderCasesGrid(currentCases);
  } else {
    const filtered = currentCases.filter(c => c.specialty.toLowerCase().includes(specialty.toLowerCase()));
    renderCasesGrid(filtered);
  }
}

// -------------------------------------------------------------
// CANDIDATE BRIEF & READING ROOM
// -------------------------------------------------------------

async function selectCaseForBrief(caseId) {
  try {
    const res = await fetch(`/api/cases/${caseId}`);
    activeCase = await res.json();

    document.getElementById("brief-case-title").innerText = activeCase.title;
    document.getElementById("brief-specialty-badge").innerText = activeCase.specialty;
    document.getElementById("brief-setting").querySelector("span").innerText = activeCase.brief.setting;
    document.getElementById("brief-patient-demo").innerText = `${activeCase.brief.patient_name} (${activeCase.brief.age}yo ${activeCase.brief.gender}, ${activeCase.brief.occupation})`;
    document.getElementById("brief-complaint").innerText = activeCase.brief.presenting_complaint;
    document.getElementById("brief-instructions").innerText = activeCase.brief.instructions;

    // Render Vitals
    const vitalsGrid = document.getElementById("brief-vitals-grid");
    vitalsGrid.innerHTML = "";
    Object.entries(activeCase.brief.triage_vitals).forEach(([key, val]) => {
      const vCard = document.createElement("div");
      vCard.className = "bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between";
      vCard.innerHTML = `
        <span class="text-slate-500 text-[10px] uppercase font-semibold">${key}</span>
        <span class="font-bold text-slate-200 mt-0.5">${val}</span>
      `;
      vitalsGrid.appendChild(vCard);
    });

    showView("brief-view");
  } catch (err) {
    alert("Could not load case details.");
  }
}

// -------------------------------------------------------------
// CONSULTATION ROOM & STATE MACHINE
// -------------------------------------------------------------

async function startConsultationSession() {
  if (!activeCase) return;

  const candidateName = document.getElementById("candidate-name-input").value.trim() || "Dr. Noah Lim";

  try {
    const res = await fetch("/api/sessions/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ case_id: activeCase.id, candidate_name: candidateName })
    });
    const session = await res.json();
    activeSessionId = session.session_id;

    // Set Top Status Bar
    document.getElementById("consult-patient-name").innerText = activeCase.persona.name;
    document.getElementById("consult-patient-avatar").innerText = activeCase.persona.name[0];
    document.getElementById("consult-station-title").innerText = activeCase.title;
    document.getElementById("consult-pain-badge").innerText = `Pain ${activeCase.persona.pain_level}/10`;

    // Clear Previous Chat & Add Opening Greeting
    const chatContainer = document.getElementById("chat-messages");
    chatContainer.innerHTML = `
      <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-xs text-slate-400 text-center">
        🔔 7-Minute Consultation Timer Started. Speak or type to take a focused clinical history.
      </div>
    `;

    // Initialize Timer
    startConsultationTimer(activeCase.consultation_time_sec || 420);

    // Initial Gate rendering
    renderGateChecklist([]);

    showView("consultation-view");
  } catch (err) {
    alert("Failed to start examination session: " + err);
  }
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
  timerEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (timeRemainingSec <= 60) {
    timerEl.className = "font-mono text-base sm:text-lg font-bold text-rose-500 animate-pulse";
  } else if (timeRemainingSec <= 120) {
    timerEl.className = "font-mono text-base sm:text-lg font-bold text-amber-400";
  } else {
    timerEl.className = "font-mono text-base sm:text-lg font-bold text-emerald-400";
  }
}

// -------------------------------------------------------------
// CHAT MESSAGES & AUDIO PLAYBACK
// -------------------------------------------------------------

async function sendCandidateMessage() {
  const input = document.getElementById("candidate-text-input");
  const text = input.value.trim();
  if (!text || !activeSessionId) return;

  // Append Candidate Message
  appendChatMessage("Doctor", text, "candidate");
  input.value = "";

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/interact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await res.json();

    // Append Patient Message with voice audio
    appendChatMessage(activeCase.persona.name, data.patient_reply, "patient", data.audio_url);

    // Update Gate checklist
    renderGateChecklist(data.unlocked_gates);

    // Check if Practicum Script Perturbation triggers
    if (data.trigger_perturbation && data.perturbation_data) {
      showPerturbationModal(data.perturbation_data);
    }
  } catch (err) {
    appendChatMessage("System", "Error communicating with patient agent.", "system");
  }
}

function appendChatMessage(speaker, text, type, audioUrl = null) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `flex ${type === 'candidate' ? 'justify-end' : 'justify-start'} items-end space-x-2`;

  const isCandidate = type === 'candidate';
  const bubbleClass = isCandidate
    ? 'bg-emerald-600 text-white rounded-2xl rounded-br-none ml-12'
    : 'bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-bl-none mr-12';

  let audioButtonHtml = "";
  if (audioUrl) {
    audioButtonHtml = `
      <button onclick="playSpeech('${audioUrl}')" class="text-xs text-emerald-400 hover:text-emerald-300 mt-2 flex items-center space-x-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
        <i class="fa-solid fa-volume-high text-[10px]"></i>
        <span>Play Spoken Voice</span>
      </button>
    `;
  }

  msgDiv.innerHTML = `
    <div class="max-w-[85%] sm:max-w-[75%] p-3.5 ${bubbleClass} shadow-md text-xs sm:text-sm">
      <div class="flex items-center justify-between gap-2 mb-1">
        <span class="font-bold text-[11px] ${isCandidate ? 'text-emerald-200' : 'text-slate-400'}">${speaker}</span>
      </div>
      <p class="leading-relaxed whitespace-pre-wrap">${text}</p>
      ${audioButtonHtml}
    </div>
  `;

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;

  // Auto-play audio if not muted
  if (audioUrl && !isAudioMuted && !isCandidate) {
    playSpeech(audioUrl);
  }
}

function playSpeech(audioUrl) {
  if (currentAudioElement) {
    currentAudioElement.pause();
  }
  currentAudioElement = new Audio(audioUrl);
  currentAudioElement.play().catch(e => console.log("Audio autoplay prevented by browser"));
}

function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;
  const icon = document.getElementById("mute-icon");
  if (isAudioMuted) {
    icon.className = "fa-solid fa-volume-xmark text-sm text-slate-500";
    if (currentAudioElement) currentAudioElement.pause();
  } else {
    icon.className = "fa-solid fa-volume-high text-sm text-emerald-400";
  }
}

// -------------------------------------------------------------
// MICROPHONE RECORDING (MEDIARECORDER API)
// -------------------------------------------------------------

async function toggleMicrophoneRecord() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

async function startRecording() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Microphone recording is not supported in your browser. Please type your query.");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      await sendAudioMessage(audioBlob);
      stream.getTracks().forEach(track => track.stop());
    };

    mediaRecorder.start();
    isRecording = true;

    const micBtn = document.getElementById("mic-record-btn");
    const micIcon = document.getElementById("mic-icon");
    micBtn.className = "p-3.5 rounded-xl bg-rose-600 text-white border border-rose-500 recording-pulse transition flex items-center justify-center shrink-0 shadow-lg";
    micIcon.className = "fa-solid fa-stop text-lg";
  } catch (err) {
    alert("Could not access microphone: " + err.message);
  }
}

function stopRecording() {
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
    isRecording = false;

    const micBtn = document.getElementById("mic-record-btn");
    const micIcon = document.getElementById("mic-icon");
    micBtn.className = "p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 border border-rose-500/30 transition flex items-center justify-center shrink-0 shadow-sm";
    micIcon.className = "fa-solid fa-microphone text-lg";
  }
}

async function sendAudioMessage(audioBlob) {
  if (!activeSessionId) return;

  appendChatMessage("Doctor", "🎙️ Transcribing voice inquiry with faster-whisper...", "candidate");

  const formData = new FormData();
  formData.append("file", audioBlob, "voice_inquiry.wav");

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/audio-interact`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();

    // Remove placeholder and append patient reply
    const container = document.getElementById("chat-messages");
    if (container.lastElementChild) container.removeChild(container.lastElementChild);

    appendChatMessage(activeCase.persona.name, data.patient_reply, "patient", data.audio_url);
    renderGateChecklist(data.unlocked_gates);

    if (data.trigger_perturbation && data.perturbation_data) {
      showPerturbationModal(data.perturbation_data);
    }
  } catch (err) {
    appendChatMessage("System", "Audio transcription failed. Please try again or type.", "system");
  }
}

// -------------------------------------------------------------
// GATE CHECKLIST TRACKER
// -------------------------------------------------------------

function renderGateChecklist(gates) {
  const container = document.getElementById("gates-checklist-container");
  if (!container) return;
  container.innerHTML = "";

  let unlockedCount = 0;
  gates.forEach(g => {
    if (g.unlocked) unlockedCount++;

    const item = document.createElement("div");
    const isUnlocked = g.unlocked;
    const isMandatory = g.mandatory;

    let borderClass = isUnlocked
      ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-300"
      : (isMandatory ? "border-amber-500/30 bg-amber-950/20 text-slate-400" : "border-slate-800 bg-slate-900/60 text-slate-500");

    item.className = `p-2.5 rounded-xl border ${borderClass} flex items-center justify-between text-xs transition duration-200`;

    const cleanTitle = g.key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    item.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fa-solid ${isUnlocked ? 'fa-circle-check text-emerald-400' : 'fa-circle text-slate-600'} text-xs"></i>
        <span class="${isUnlocked ? 'font-semibold text-slate-200' : ''}">${cleanTitle}</span>
      </div>
      <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${isMandatory ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}">
        ${isMandatory ? 'SAFETY GATE' : g.category}
      </span>
    `;

    container.appendChild(item);
  });

  const counter = document.getElementById("gates-unlocked-counter");
  if (counter) counter.innerText = `${unlockedCount}/${gates.length} Unlocked`;
}

// -------------------------------------------------------------
// PRACTICUM SCRIPT PERTURBATION
// -------------------------------------------------------------

function showPerturbationModal(pertData) {
  document.getElementById("pert-title").innerText = pertData.title;
  document.getElementById("pert-description").innerText = pertData.description;

  const findingsList = document.getElementById("pert-findings-list");
  findingsList.innerHTML = "";
  Object.entries(pertData.findings).forEach(([k, v]) => {
    const li = document.createElement("div");
    li.innerText = `• ${k}: ${v}`;
    findingsList.appendChild(li);
  });

  document.getElementById("pert-reasoning-input").value = "";
  document.getElementById("perturbation-modal").classList.remove("hidden");
}

async function submitPerturbationReasoning() {
  const reasoning = document.getElementById("pert-reasoning-input").value.trim();
  if (!reasoning || !activeSessionId) return;

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/perturbation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reasoning })
    });
    const result = await res.json();

    document.getElementById("perturbation-modal").classList.add("hidden");

    // Add alert to chat
    appendChatMessage("Practicum Script Engine",
      `✅ Delphi Expert Concordance: ${result.concordance_score}%\n` +
      (result.matched_points.length ? result.matched_points.map(p => `• ${p}`).join("\n") : "Reasoning recorded."),
      "system"
    );
  } catch (err) {
    document.getElementById("perturbation-modal").classList.add("hidden");
  }
}

// -------------------------------------------------------------
// POST-STATION EXAMINER VIVA
// -------------------------------------------------------------

function endConsultationEarly() {
  clearInterval(timerInterval);
  startExaminerViva();
}

async function startExaminerViva() {
  showView("viva-view");
  await loadNextVivaQuestion();
}

async function loadNextVivaQuestion() {
  if (!activeSessionId) return;

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/viva/next`);
    const qData = await res.json();

    if (qData.completed) {
      await loadFinalScorecard();
      return;
    }

    document.getElementById("viva-progress").innerText = `Question ${qData.question_index}/${qData.total_questions}`;
    document.getElementById("viva-question-prompt").innerText = qData.prompt;
    document.getElementById("viva-answer-input").value = "";

    // Play examiner British speech
    if (qData.audio_url && !isAudioMuted) {
      playSpeech(qData.audio_url);
    }

    document.getElementById("replay-viva-btn").onclick = () => {
      if (qData.audio_url) playSpeech(qData.audio_url);
    };
  } catch (err) {
    alert("Error loading viva question.");
  }
}

async function submitVivaAnswer() {
  const answer = document.getElementById("viva-answer-input").value.trim();
  if (!answer || !activeSessionId) return;

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/viva/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    });
    const result = await res.json();

    if (result.has_next_question) {
      await loadNextVivaQuestion();
    } else {
      await loadFinalScorecard();
    }
  } catch (err) {
    alert("Error submitting viva response.");
  }
}

// -------------------------------------------------------------
// FINAL SCORECARD & AUDIT
// -------------------------------------------------------------

async function loadFinalScorecard() {
  if (!activeSessionId) return;

  try {
    const res = await fetch(`/api/sessions/${activeSessionId}/scorecard`);
    const card = await res.json();

    latestMarkdownReport = card.markdown_report;

    document.getElementById("card-case-title").innerText = card.case_title;
    document.getElementById("card-candidate-name").innerText = `Candidate: ${card.candidate_name}`;

    // Overall Grade Badge
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
          <span class="font-bold">MANDATORY SAFETY STATUS: SAFE.</span>
          <p class="text-slate-300 text-xs mt-0.5">All essential red flags, contraindications, and life-threatening exclusions were properly explored.</p>
        </div>
      `;
    } else {
      safetyBox.className = "bg-rose-950/40 border border-rose-500/50 rounded-xl p-4 text-xs sm:text-sm flex items-start space-x-3 text-rose-300";
      safetyBox.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation text-rose-400 text-lg mt-0.5"></i>
        <div>
          <span class="font-bold">CRITICAL PATIENT SAFETY BREACH:</span>
          <p class="text-rose-200 text-xs mt-0.5">Candidate failed to screen for mandatory red flags: ${card.missed_safety_gates.join(", ")}.</p>
          <p class="text-slate-400 text-[11px] mt-1">In an MBBS / MRCP / GMC clinical exam, this triggers an automatic station failure regardless of total points.</p>
        </div>
      `;
    }

    // Domain Breakdown Bars
    const domainsContainer = document.getElementById("card-domains-container");
    domainsContainer.innerHTML = "";
    card.domains.forEach(d => {
      const dDiv = document.createElement("div");
      dDiv.className = "space-y-1.5";
      dDiv.innerHTML = `
        <div class="flex justify-between text-xs">
          <span class="font-semibold text-slate-300">${d.name}</span>
          <span class="font-bold text-slate-200">${d.score}/${d.max_score} (${d.percentage}%)</span>
        </div>
        <div class="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
          <div class="bg-gradient-to-r from-emerald-600 to-teal-400 h-2.5 rounded-full" style="width: ${d.percentage}%"></div>
        </div>
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
        tDiv.className = "bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 text-xs space-y-1 text-amber-200";
        tDiv.innerHTML = `
          <div class="font-bold text-amber-400 flex items-center space-x-1.5">
            <i class="fa-solid fa-brain"></i>
            <span>Cognitive Trap: ${t.name}</span>
          </div>
          <p class="text-slate-300">${t.description}</p>
          <p class="text-slate-400 text-[11px] italic">Remediation: ${t.remediation}</p>
        `;
        trapsContainer.appendChild(tDiv);
      });
    } else {
      trapsSec.classList.add("hidden");
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
  } catch (err) {
    alert("Could not generate scorecard: " + err);
  }
}

function copyMarkdownReport() {
  if (!latestMarkdownReport) return;
  navigator.clipboard.writeText(latestMarkdownReport).then(() => {
    alert("📋 OSCE Scorecard copied to clipboard in GitHub Markdown format!");
  });
}
