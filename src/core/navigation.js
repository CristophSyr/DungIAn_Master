import { state } from './state.js';

export function switchScreen(screenId) {
  document.querySelectorAll('.screen-view').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById(screenId);
  if (target) target.classList.remove('hidden');

  const liveMetrics = document.getElementById('live-metrics-bar');
  const userBadge = document.getElementById('user-badge');

  if (liveMetrics && userBadge) {
    if (screenId === 'screen-workspace') {
      liveMetrics.classList.remove('hidden');
      userBadge.classList.remove('hidden');
    } else if (screenId === 'screen-summary' || screenId === 'screen-dashboard') {
      liveMetrics.classList.add('hidden');
      userBadge.classList.remove('hidden');
    } else {
      liveMetrics.classList.add('hidden');
      userBadge.classList.add('hidden');
    }
  }
}
