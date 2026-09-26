import { switchScreen } from '../../core/navigation.js';
import { openFinishModal } from '../modals/satisfaction.js';

export function initFooter() {
  document.querySelectorAll('.nav-shortcut').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetScreen = e.target.getAttribute('data-goto');
      if (targetScreen) {
        switchScreen(targetScreen);
      }
    });
  });

  const likertBtn = document.getElementById('btn-open-likert');
  if (likertBtn) {
    likertBtn.addEventListener('click', openFinishModal);
  }
}
