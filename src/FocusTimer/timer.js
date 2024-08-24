import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function startTimer() {
    if (state.countdownId) {
        clearInterval(state.countdownId);
    }

    state.countdownId = setInterval(() => {
        let { minutes, seconds } = el;
        minutes = Number(minutes.textContent);
        seconds = Number(seconds.textContent);
        
        if (--seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            reset();
            kitchenTimer.play();
            clearInterval(state.countdownId)
            return;
        }
        
        updateDisplay(minutes, seconds);
    }, 1000)

    state.isRunning = true;
}

export function pauseTimer() {
    clearInterval(state.countdownId);
    state.isRunning = false;
}

export function updateDisplay(minutes = state.minutes, seconds = state.seconds) {
    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}