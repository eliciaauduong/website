const lightModeTexts = [
  "☀️ Light mode user? Your secret's safe with me",
  "🎥 Lights. Camera. Action.",
  "🪩 Are you blinded by the lights?",
  "✨ Nothing a little click can't fix"
];

const darkModeTexts = [
  "🌙 Entering stealth mode",
  "🏎️ Lights off and away we go!",
  "👾 Ahh. How it should be",
  "🛏️ Bed time already?"
];

let lightIndex = -1;
let darkIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const robotBtn = document.getElementById('robot-lights');
  const robotTalk = document.getElementById('robot-talk');

  // 1. Set initial default text on page load
  robotTalk.textContent = "psst. Click here";

  // 3. Cycle through lists only when clicked
  robotBtn.addEventListener('click', () => {
    const isDark = robotBtn.classList.contains('clicked');

    if (isDark) {
      // Advance index on first light mode click after initial load
      if (lightIndex === -1) lightIndex = 0;
      
      robotTalk.textContent = lightModeTexts[lightIndex];
      lightIndex = (lightIndex + 1) % lightModeTexts.length;
    } else {
      robotTalk.textContent = darkModeTexts[darkIndex];
      darkIndex = (darkIndex + 1) % darkModeTexts.length;
    }
  });
});