import { state } from '../../core/state.js';
import { switchScreen } from '../../core/navigation.js';

export function handleLogin(e) {
  e.preventDefault();
  const alias = document.getElementById('input-alias').value.trim();
  if (alias) {
    state.currentUserName = alias;
    document.getElementById('header-user-name').innerText = alias;
  }
  switchScreen('screen-dashboard');
}

export function initLogin() {
  const form = document.getElementById('form-login');
  if (form) {
    form.addEventListener('submit', handleLogin);
  }
}
