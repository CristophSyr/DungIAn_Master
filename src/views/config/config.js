import { switchScreen } from '../../core/navigation.js';
import { startTimer } from '../workspace/workspace.js';

export function startSessionWorkspace(e) {
  e.preventDefault();
  const title = document.getElementById('session-title').value;
  const tone = document.getElementById('session-tone').value;

  document.getElementById('workspace-session-title').innerText = title;
  document.getElementById('workspace-session-meta').innerText = `${tone} • Conexión de trasfondos activa`;

  switchScreen('screen-workspace');
  startTimer();
}

export function initConfig() {
  const form = document.getElementById('form-config');
  if (form) {
    form.addEventListener('submit', startSessionWorkspace);
  }

  const btnBack = document.getElementById('btn-back-dashboard');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      switchScreen('screen-dashboard');
    });
  }
}
