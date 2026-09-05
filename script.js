document.addEventListener('DOMContentLoaded', function() {
  // --- Toggle Description Logic ---
  document.querySelectorAll('.card-text').forEach(title => {
    title.addEventListener('click', (e) => {
      const card = title.closest('.card');
      if (!card) return;

      const description = card.querySelector('.card-description');
      
      // Toggle if card has a description
      if (description) {
        e.preventDefault(); 
        description.classList.toggle('active');
      }
    });
  });
});