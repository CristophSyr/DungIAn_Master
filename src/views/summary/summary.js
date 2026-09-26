import { state } from '../../core/state.js';
import { switchScreen } from '../../core/navigation.js';

export function updateSummaryMetrics(avgLikert) {
  const m = Math.floor(state.secondsElapsed / 60).toString().padStart(2, '0');
  const s = (state.secondsElapsed % 60).toString().padStart(2, '0');
  
  document.getElementById('final-metric-time').innerText = `${m}:${s}`;
  document.getElementById('final-metric-elements').innerText = state.validatedElementsCount;
  document.getElementById('final-metric-likert').innerText = `${avgLikert} / 5.0`;
}

export function initSummary() {
  const btnBack = document.getElementById('btn-summary-back');
  if (btnBack) btnBack.addEventListener('click', () => switchScreen('screen-dashboard'));

  const btnCopy = document.getElementById('btn-copy-summary');
  if (btnCopy) btnCopy.addEventListener('click', () => alert('Notas estructuradas con conexiones de jugadores y stat blocks de D&D copiadas al portapapeles.'));

  const btnForgeNew = document.getElementById('btn-forge-new');
  if (btnForgeNew) btnForgeNew.addEventListener('click', () => switchScreen('screen-login'));
}
