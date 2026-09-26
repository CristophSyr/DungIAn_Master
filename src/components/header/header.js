import { switchScreen } from '../../core/navigation.js';

export function initHeader() {
  const resetBtn = document.getElementById('btn-reset-grimorio');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      switchScreen('screen-login');
    });
  }
}
