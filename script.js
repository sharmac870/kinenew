const stepTexts = [
  'Discover prompt injection vectors, auth flaws, and AI attack pathways across your stack.',
  'Use AI-guided triage and response workflows with governed human approvals.',
  'Generate mapped evidence for NIST and ISO controls automatically.',
  'Cryptographically sign and verify compliance artifacts offline with confidence.'
];
const steps = [...document.querySelectorAll('.step')];
const stepText = document.querySelector('#step-text');

function activateStep(index) {
  steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
  stepText.textContent = stepTexts[index];
}

steps.forEach((step, index) => step.addEventListener('click', () => activateStep(index)));

let autoIndex = 0;
setInterval(() => {
  autoIndex = (autoIndex + 1) % stepTexts.length;
  activateStep(autoIndex);
}, 3500);

const hoursInput = document.querySelector('#hours');
const gainInput = document.querySelector('#gain');
const result = document.querySelector('#roi-result');

function calcRoi() {
  const hours = Number(hoursInput.value) || 0;
  const gain = Number(gainInput.value) || 0;
  const saved = Math.round((hours * gain) / 100);
  result.textContent = String(saved);
}

hoursInput.addEventListener('input', calcRoi);
gainInput.addEventListener('input', calcRoi);
calcRoi();
