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

// ── Demo modal ──────────────────────────────────────────────────────────────
const DEMO_URLS = {
  sentinel: './demos/sentinel/index.html',
  scan:     './demos/scan/index.html'
};

const modal     = document.getElementById('demo-modal');
const demoFrame = document.getElementById('demo-frame');
const demoClose = document.getElementById('demo-close');
let lastFocused = null;

function openDemo(key) {
  lastFocused = document.activeElement;
  demoFrame.src = DEMO_URLS[key];
  modal.hidden = false;
  // Allow display:flex to apply before animating opacity
  requestAnimationFrame(() => { modal.style.opacity = '1'; });
  demoClose.focus();
}

function closeDemo() {
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.hidden = true;
    demoFrame.src = ''; // stop the demo (pauses timers / autoplay)
  }, 220);
  lastFocused?.focus();
}

document.querySelectorAll('.demo-trigger').forEach(btn =>
  btn.addEventListener('click', () => openDemo(btn.dataset.demo))
);
demoClose.addEventListener('click', closeDemo);
// Click outside the inner box closes the modal
modal.addEventListener('click', e => { if (e.target === modal) closeDemo(); });
// Escape key closes the modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeDemo();
});
// ────────────────────────────────────────────────────────────────────────────

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
