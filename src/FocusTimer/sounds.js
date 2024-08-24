export const buttonPressAudio = new Audio('./assets/sounds/button-press.wav');
export const kitchenTimer = new Audio ('./assets/sounds/kitchen-timer.mp3');
export const forest = new Audio('./assets/sounds/bg-forest.wav');
export const rain = new Audio('./assets/sounds/bg-rain.wav');
export const coffeeShop = new Audio('./assets/sounds/bg-coffeeshop.wav');
export const fireplace = new Audio('./assets/sounds/bg-fireplace.wav');

for (const sound of [forest, rain, coffeeShop, fireplace]) {
  sound.loop = true;
}