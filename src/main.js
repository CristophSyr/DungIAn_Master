import './style.css';
import { initHeader } from './components/header/header.js';
import { initFooter } from './components/footer/footer.js';
import { initSatisfactionModal } from './components/modals/satisfaction.js';
import { initLogin } from './views/login/login.js';
import { initDashboard } from './views/dashboard/dashboard.js';
import { initConfig } from './views/config/config.js';
import { initWorkspace } from './views/workspace/workspace.js';
import { initSummary } from './views/summary/summary.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
  initSatisfactionModal();
  
  initLogin();
  initDashboard();
  initConfig();
  initWorkspace();
  initSummary();
});
