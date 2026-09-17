// 1. Your Dynamic Dataset Array
const dispatchData = [
  {
    timestamp: "2026-05-29T11:11:00", // Format: YYYY-MM-DDTHH:MM:SS
    displayTime: "11:11 AM | 29.05.26",
    body: "Published we have to stop meeting like this to Substack.",
    category: "launches"
  },
  {
    timestamp: "2026-05-20T15:30:00",
    displayTime: "03:30 PM | 20.05.26",
    body: "Drafting a long-form essay detailing interface friction rules and user experience patterns.",
    category: "blogs"
  },
  {
    timestamp: "2026-05-27T09:15:00",
    displayTime: "09:15 AM | 27.05.26",
    body: "Synthesizing a clean spatial layout grid model. This note represents the newest post entry.",
    category: "thoughts"
  }
];

const feedContainer = document.getElementById('dispatchFeed');
const filterButtons = document.querySelectorAll('.filter-btn');

// 2. Sorting Mechanism: Most recent post computed to the top index position
const sortedData = [...dispatchData].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

// 3. Card Rendering Function
function renderFeed(filterSelection = 'all') {
  // Clear layout surface
  feedContainer.innerHTML = '';
  
  sortedData.forEach(item => {
    // Check if the card category matches the selection filter engine
    if (filterSelection === 'all' || item.category === filterSelection) {
      
      const card = document.createElement('article');
      card.classList.add('dispatch-card');
      
      card.innerHTML = `
        <div class="card-timestamp">${item.displayTime}</div>
        <div class="card-body">${item.body}</div>
      `;
      
      feedContainer.appendChild(card);
    }
  });
}

// 4. Click Filtering Setup
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Wipe .active class statuses across other navbar headers
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Bold selected navbar text instantly
    button.classList.add('active');
    
    // Retrieve tracking category and filter layout array
    const targetCategory = button.getAttribute('data-category');
    renderFeed(targetCategory);
  });
});

// Run rendering engine automatically when site spins open
renderFeed('all');