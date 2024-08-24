import { controls, modes } from "./elements.js";
import * as actions from "./actions.js";

export let newSound = null;
export let newMode = null;
export let selectedMode = null;

function getTargetAction(target) {
  return target.dataset.action || target.closest("button")?.dataset.action;
}

function getTargetId(target) {
  return target.id || target.closest("button")?.id;
}

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = getTargetAction(event.target);

    if (typeof actions[action] === "function") {
      actions[action]();
    }
  });
}

export function registerModes() {
  modes.addEventListener("click", (event) => {
    const action = getTargetAction(event.target);
    newSound = getTargetId(event.target);
    newMode = event.target.closest("button");

    if (typeof actions[action] === "function") {
      actions[action]();
      selectedMode = newMode;
    }
  });
}