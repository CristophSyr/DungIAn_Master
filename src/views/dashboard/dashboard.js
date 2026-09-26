import { switchScreen } from '../../core/navigation.js';

export function initDashboard() {
  const btnForge = document.getElementById('btn-forge-session');
  if (btnForge) {
    btnForge.addEventListener('click', () => {
      switchScreen('screen-config');
    });
  }
}
