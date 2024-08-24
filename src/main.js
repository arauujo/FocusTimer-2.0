import { toggleMode } from './toggle-mode.js';
import * as FocusTimer from './FocusTimer/index.js';

document.getElementById('toggle-mode').addEventListener('click', toggleMode);

FocusTimer.start(25, 0);