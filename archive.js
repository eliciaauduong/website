const lightModeTexts = [
  "☀️ Light mode enabled.",
  "🎥 Lights. Camera. Action.",
  "🪩 Are you blinded by the lights?",
];

const darkModeTexts = [
  "🌙 Entering stealth mode...",
  "🏎️ Lights off and away we go!",
  "👾 Ahh. How it should be",
  "🛏️ Bed time already?"
];

let lightIndex = 0;
let darkIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const robotBtn = document.getElementById('robot-lights');
  const robotTalk = document.getElementById('robot-talk');

  function updateRobotTalk() {
    // playhtml toggles the .clicked class on the element with can-toggle
    const isClicked = robotBtn.classList.contains('clicked');

    if (isClicked) {
      robotTalk.textContent = lightModeTexts[lightIndex];
      lightIndex = (lightIndex + 1) % lightModeTexts.length;
    } else {
      robotTalk.textContent = darkModeTexts[darkIndex];
      darkIndex = (darkIndex + 1) % darkModeTexts.length;
    }
  }

  // Set initial text state and add click listener
  updateRobotTalk();
  robotBtn.addEventListener('click', updateRobotTalk);
});