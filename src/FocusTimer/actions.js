import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import * as events from "./events.js";

let currentSound = null;

function playSound(sound) {
    sounds[sound].play();
}

function pauseSound(sound) {
    sounds[sound].pause();
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

export function toggleRunning() {
    if (state.isRunning) {
        timer.pauseTimer();
        toggleClass(document.documentElement, 'running');
    } else {
        timer.startTimer();
        toggleClass(document.documentElement, 'running');
    }
    playSound('buttonPressAudio');
}

export function reset() {
    document.documentElement.classList.remove('running');
    timer.pauseTimer();
    timer.updateDisplay();
    playSound('buttonPressAudio');
}

function adjustTime(delta) {
    const minutes = Math.max(0, Math.min(60, Number(el.minutes.textContent) + delta));
    state.minutes = minutes;
    timer.updateDisplay();
    playSound('buttonPressAudio');
}

export function increase() {
    adjustTime(5);
}

export function decrease() {
    adjustTime(-5);
}

export function toggleMusic() {
    state.isMute = !document.documentElement.classList.contains("music-on");

    if (state.isMute) {
        currentSound = events.newSound;
        toggleClass(document.documentElement, 'music-on');
        playSound(currentSound);
        toggleNewMode();
        return;
    }

    if (currentSound === events.newSound) {
        toggleClass(document.documentElement, 'music-on');
        pauseSound(currentSound);
        toggleNewMode();
        return;
    }

    pauseSound(currentSound);
    currentSound = events.newSound;
    playSound(currentSound);
    toggleSelectedMode();
    toggleNewMode();
}

function toggleSelectedMode() {
    toggleClass(events.selectedMode, "selected");
}

function toggleNewMode() {
    toggleClass(events.newMode, "selected");
}