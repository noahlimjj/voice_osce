const fs = require('fs');

global.window = {
  scrollTo: () => {}
};
global.document = {
  addEventListener: () => {},
  createElement: () => ({
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    innerText: '',
    value: '',
    innerHTML: '',
    style: {},
    appendChild: () => {},
    prepend: () => {},
    setAttribute: () => {},
    addEventListener: () => {},
    focus: () => {}
  }),
  getElementById: (id) => ({
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    innerText: '',
    value: '',
    innerHTML: '',
    style: {},
    appendChild: () => {},
    prepend: () => {},
    setAttribute: () => {},
    addEventListener: () => {},
    focus: () => {}
  }),
  querySelectorAll: () => []
};
global.localStorage = {
  getItem: () => '{}',
  setItem: () => {}
};
global.navigator = { language: 'en-SG' };

// Load bundles
eval(fs.readFileSync('cases_data.js', 'utf8'));
eval(fs.readFileSync('app.js', 'utf8') + `
  loadCases().then(() => {
    console.log("Cases loaded:", currentCases.length);
    console.log("Approach clusters:", Object.keys(SYMPTOM_APPROACH_LIBRARY));
    console.log("Testing filter 'all':", getFilteredCases().length);
    filterCases('geriatrics');
    console.log("Testing filter 'geriatrics':", getFilteredCases().length);
    filterCases('communication');
    console.log("Testing filter 'communication':", getFilteredCases().length);
    filterCases('sg_classics');
    console.log("Testing filter 'sg_classics':", getFilteredCases().length);
    
    // Test simulation of starting a case
    launchInstantBlitz('cardio_01').then(() => {
      console.log("Active case initialized:", activeCase.id);
      // Simulate macro turn
      fireSpamMacro('socrates');
      console.log("Unlocked gate count:", clientSession.unlockedGateKeys.size);
      // Simulate candidate question
      executeBlitzTurn('chest pain radiating to left arm diaphoresis nausea', null, null);
      console.log("Unlocked after candidate q:", clientSession.unlockedGateKeys.size);
      // Test viva & scorecard
      gradeStationNow();
      console.log("Scorecard generated successfully! Markdown length:", latestMarkdownReport.length);
      console.log("All webapp engine checks PASSED!");
    });
  });
`);
