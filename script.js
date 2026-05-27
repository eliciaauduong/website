function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function() {
  const stickers = document.querySelectorAll('.draggable-image');
  let maxZ = 3;

  stickers.forEach(sticker => {
    dragElement(sticker);
  });

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const container = elmnt.parentElement;
    
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // Bring this element to front
      elmnt.style.zIndex = ++maxZ;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      let newTop = elmnt.offsetTop - pos2;
      let newLeft = elmnt.offsetLeft - pos1;
      
      // Boundary checking
      const maxTop = container.offsetHeight - elmnt.offsetHeight;
      const maxLeft = container.offsetWidth - elmnt.offsetWidth;
      
      // Clamp values to stay within bounds
      newTop = Math.max(0, Math.min(newTop, maxTop));
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      
      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});
