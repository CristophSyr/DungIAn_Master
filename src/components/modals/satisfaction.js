import { state } from '../../core/state.js';
import { switchScreen } from '../../core/navigation.js';
import { stopTimer } from '../../views/workspace/workspace.js';
import { updateSummaryMetrics } from '../../views/summary/summary.js';

export function openFinishModal() {
  stopTimer();
  document.getElementById('modal-satisfaction').classList.remove('hidden');
}

export function submitSatisfaction(e) {
  e.preventDefault();
  const form = document.getElementById('form-likert');
  const formData = new FormData(form);
  
  let totalScore = 0;
  for (let i = 1; i <= 4; i++) {
    totalScore += parseInt(formData.get(`p${i}`));
  }
  
  const avgLikert = (totalScore / 4).toFixed(2);
  
  document.getElementById('modal-satisfaction').classList.add('hidden');
  
  updateSummaryMetrics(avgLikert);
  switchScreen('screen-summary');
}

export function initSatisfactionModal() {
  const form = document.getElementById('form-likert');
  if (form) {
    form.addEventListener('submit', submitSatisfaction);
  }
}
