const fs = require('fs');

global.window = {
  scrollTo: () => {},
  speechSynthesis: {
    cancel: () => {},
    resume: () => {},
    speak: () => {},
    getVoices: () => []
  }
};

const mockElements = new Map();

function createMockElement(id) {
  return {
    id: id || '',
    classList: {
      _classes: new Set(),
      add(...args) { args.forEach(c => this._classes.add(c)); },
      remove(...args) { args.forEach(c => this._classes.delete(c)); },
      contains(c) { return this._classes.has(c); },
      toggle(c) {
        if (this._classes.has(c)) { this._classes.delete(c); return false; }
        else { this._classes.add(c); return true; }
      }
    },
    innerText: '',
    value: '',
    innerHTML: '',
    style: {},
    appendChild: () => {},
    prepend: () => {},
    setAttribute: () => {},
    addEventListener: () => {},
    focus: () => {}
  };
}

global.document = {
  documentElement: {
    classList: {
      _classes: new Set(['dark']),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c) {
        if (this._classes.has(c)) { this._classes.delete(c); return false; }
        else { this._classes.add(c); return true; }
      }
    }
  },
  addEventListener: () => {},
  createElement: (tag) => createMockElement(tag),
  getElementById: (id) => {
    if (!mockElements.has(id)) {
      mockElements.set(id, createMockElement(id));
    }
    return mockElements.get(id);
  },
  querySelectorAll: (selector) => []
};

global.localStorage = {
  _store: {},
  getItem: (k) => global.localStorage._store[k] || null,
  setItem: (k, v) => { global.localStorage._store[k] = String(v); }
};

global.navigator = {
  language: 'en-SG',
  clipboard: {
    writeText: async (t) => { global.__lastCopied = t; }
  }
};

// Evaluate cases and app bundle within single execution context
eval(fs.readFileSync('cases_data.js', 'utf8'));
eval(fs.readFileSync('app.js', 'utf8') + `
async function runFullGamifiedFlowTests() {
  console.log("=== STARTING FULL GAMIFIED OSCE INTEGRATION SUITE ===");

  // 1. Case Library & Filters
  await loadCases();
  console.log("✓ Cases loaded successfully:", currentCases.length);
  if (currentCases.length < 100) throw new Error("Expected at least 100 cases!");

  // 2. Light / Dark Theme Mode
  toggleThemeMode();
  console.log("✓ Toggled theme mode, is dark?", document.documentElement.classList.contains("dark"));
  toggleThemeMode();

  // 3. Launch Case
  await launchInstantBlitz('id_11');
  console.log("✓ Launched Singapore Classic station: id_11 (Tekong Dengue Shock)");

  // 4. Test System 1 Impulse
  setSystem1Impulse("Severe Dengue / Dengue Shock Syndrome");
  if (clientSession.system1Impulse !== "Severe Dengue / Dengue Shock Syndrome") {
    throw new Error("System 1 impulse failed to register!");
  }
  console.log("✓ System 1 Impulse registered:", clientSession.system1Impulse);

  // 5. Test Candidate Question Formulation & Safety Red Flag Match
  executeBlitzTurn("fever defervescence abdominal pain persistent vomiting bleeding gums");
  console.log("✓ Query executed. Unlocked gates:", clientSession.unlockedGateKeys.size);
  console.log("✓ Turns recorded:", clientSession.transcriptTurns.length);
  if (clientSession.transcriptTurns.length !== 1) throw new Error("Transcript turn was not logged!");

  // 6. Test Bedside Twist SCT Likert Vote (-2 to +2)
  triggerInlineTwistBanner();
  submitSctTwistVote(2); // Vote +2 Supported
  console.log("✓ SCT Likert Vote submitted:", clientSession.sctVote, "Concordance:", clientSession.sctConcordance);
  if (clientSession.sctVote !== 2 || clientSession.sctConcordance !== 100) {
    throw new Error("SCT Likert calculation failed!");
  }

  // 7. Test Geeky Medics Crossout Challenge
  chooseCrossoutOption("Uncomplicated Classic Dengue Fever", true);
  console.log("✓ Crossout challenge choice submitted:", clientSession.crossoutChosen, "Correct?", clientSession.crossoutCorrect);
  if (!clientSession.crossoutCorrect) throw new Error("Crossout evaluation failed!");

  // 8. Test Diagnosis & Management Viva Step
  openDiagnosisAndVivaStep();
  const dxInput = document.getElementById("dx-input");
  const rfDxInput = document.getElementById("red-flag-dx-input");
  const vivaInput = document.getElementById("viva-answer-input");
  dxInput.value = "Severe Dengue / Dengue Shock Syndrome with Plasma Leakage";
  rfDxInput.value = "Acute Melioidosis or Septic Shock";
  vivaInput.value = "Immediate IV isotonic crystalloid bolus 10-20 mL/kg, monitor hematocrit closely, strictly avoid NSAIDs, do not give prophylactic platelets.";

  // 9. Grade Station & Generate Wordle Scorecard
  gradeStationNow();
  const scorePct = document.getElementById("card-score-pct").innerText;
  const gradeBadge = document.getElementById("card-grade-badge").innerText;
  console.log("✓ Station Graded! Final Score:", scorePct, "Tier:", gradeBadge);

  if (!latestWordleScorecard || !latestWordleScorecard.includes("OSCEBlitz")) {
    throw new Error("Wordle-style shareable scorecard text was not generated!");
  }
  console.log("✓ Wordle-Style Shareable Scorecard Generated:\\n" + latestWordleScorecard);

  // 10. Copy Shareable Scorecard
  copyShareableScorecard();

  // 11. Test Arena Circuit Mock Exam Mode
  startArenaCircuit();
  console.log("✓ Arena Circuit initialized. Active?", arenaCircuitState?.active, "Stations:", arenaCircuitState?.stations.length);
  if (!arenaCircuitState || arenaCircuitState.stations.length !== 3) {
    throw new Error("Arena Circuit failed to initialize 3 stations!");
  }

  console.log("=== ALL GAMIFIED OSCE TESTS PASSED WITH 100% SUCCESS! ===");
  if (typeof timerInterval !== 'undefined') clearInterval(timerInterval);
  process.exit(0);
}

runFullGamifiedFlowTests().catch(err => {
  console.error("TEST FAILED:", err);
  process.exit(1);
});
`);
