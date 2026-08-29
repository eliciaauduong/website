let highestZIndex = 100;

function bringToFront(windowEl) {
  highestZIndex++;
  windowEl.style.zIndex = highestZIndex;
}

// 1. Toggle window state on dock item click
document.querySelectorAll('.dock-item').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const win = document.getElementById(targetId);

    if (win) {
      if (win.classList.contains('open')) {
        win.classList.remove('open');
      } else {
        win.classList.add('open');
        bringToFront(win);
      }
    }
  });
});

// 2. Close active window using top-right close button
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents bringToFront trigger
    const win = btn.closest('.window');
    win.classList.remove('open');
  });
});

// 3. Focus window when clicked anywhere inside its body
document.querySelectorAll('.window').forEach(win => {
  win.addEventListener('mousedown', () => bringToFront(win));
});