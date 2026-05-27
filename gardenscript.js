const statusEmojis = {
  seed: '🌱',
  sprout: '🌿',
  bloom: '🌸',
  root: '🥕'
};

const gardenData = {
  '3-2': {
    title: "Data Asymmetry in Modern Apps",
    body: "An analysis of how dark patterns extract user attention. Read my full case study <a href='https://example.com/data-asymmetry' target='_blank'>here</a>.",
    status: "seed",
    theme: "data asymmetry" 
  },
  '8-5': {
    title: "The Loyalty Loop Trap",
    body: "How dynamic rewards programs game human psychology. Inspired by this <a href='https://example.com/essay'>research paper</a>.",
    status: "bloom",
    theme: "loyalty"
  },
  '12-8': {
    title: "The Ethics of Deceptive UI",
    body: "Documenting systems designed to trick users into subscribing or oversharing information.",
    status: "sprout",
    theme: "dark patterns"
  }
};

const defaultTitle = "SUMMER @ THE GARDENS";
const defaultBody = "It's the season of growth and activity. New ideas are being planted regularly, and I'm actively tending to what's here—adding thoughts, expanding concepts, watching things take shape. Come back soon to see what else has sprouted.";

const gridContainer = document.getElementById('gardenGrid');
const displayTitle = document.getElementById('displayTitle');
const displayBody = document.getElementById('displayBody');
const clearBtn = document.getElementById('clearFilter');

const TOTAL_COLUMNS = 15;
const TOTAL_ROWS = 10;

let activeCell = null;       // Tracks the clicked grid cell
let isFilterActive = false;  // Tracks if a theme filter is clicked

// 1. GENERATE THE GRID
for (let row = 1; row <= TOTAL_ROWS; row++) {
  for (let col = 1; col <= TOTAL_COLUMNS; col++) {
    
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    const coordinateKey = `${col}-${row}`;
    
    if (gardenData[coordinateKey]) {
      const item = gardenData[coordinateKey];
      
      cell.classList.add('has-content', item.status);
      cell.setAttribute('data-cell-theme', item.theme);
      cell.innerText = statusEmojis[item.status] || '';
      
      // MOUSE ENTER (Hovering over a populated cell)
      cell.addEventListener('mouseenter', () => {
        // Only preview content if the user hasn't explicitly locked a cell click
        if (!activeCell) {
          displayTitle.innerText = item.title;
          displayBody.innerHTML = item.body;
        }
      });
      
      // MOUSE LEAVE
      cell.addEventListener('mouseleave', () => {
        if (!activeCell && !isFilterActive) {
          displayTitle.innerText = defaultTitle;
          displayBody.innerHTML = defaultBody;
        }
      });

      // CLICK (Lock content on a populated cell)
      cell.addEventListener('click', (e) => {
        e.stopPropagation(); // Stops the click from hitting the background empty cells
        
        // Remove active-lock styling from any previously clicked cell
        document.querySelectorAll('.cell').forEach(c => c.classList.remove('active-lock'));
        
        // Set this cell as the locked active cell
        activeCell = cell;
        cell.classList.add('active-lock');
        
        // Lock the text content
        displayTitle.innerText = item.title;
        displayBody.innerHTML = item.body;
      });

    } else {
      // It's an EMPTY cell: Add a click event to reset the system
      cell.addEventListener('click', () => {
        resetDashboard();
      });
    }
    
    gridContainer.appendChild(cell);
  }
}

// 2. RESET FUNCTION (Clicking anywhere empty triggers this)
function resetDashboard() {
  activeCell = null;
  isFilterActive = false;
  
  // Reset text
  displayTitle.innerText = defaultTitle;
  displayBody.innerHTML = defaultBody;
  
  // Clean classes
  document.querySelectorAll('.cell').forEach(c => c.classList.remove('active-lock'));
  document.querySelectorAll('.theme-trigger').forEach(t => t.classList.remove('active'));
  clearBtn.style.display = 'none';
}

// 3. THEME FILTER CLICKS & HOVERS
const themeTriggers = document.querySelectorAll('.theme-trigger');
const allCells = document.querySelectorAll('.cell');

themeTriggers.forEach(trigger => {
  const selectedTheme = trigger.getAttribute('data-theme');
  const cssClassFriendlyTheme = selectedTheme.replace(/\s+/g, '-');

  trigger.addEventListener('mouseenter', () => {
    allCells.forEach(cell => {
      if (cell.getAttribute('data-cell-theme') === selectedTheme) {
        cell.classList.add(`highlight-${cssClassFriendlyTheme}`);
      }
    });
  });

  trigger.addEventListener('mouseleave', () => {
    // Only remove highlighters if the user hasn't *clicked* to lock this theme look
    if (!trigger.classList.contains('active')) {
      allCells.forEach(cell => {
        cell.classList.remove(`highlight-${cssClassFriendlyTheme}`);
      });
    }
  });

  trigger.addEventListener('click', () => {
    isFilterActive = true;
    activeCell = null; // Overwrite cell locks when browsing a whole theme
    
    themeTriggers.forEach(t => t.classList.remove('active'));
    trigger.classList.add('active');
    clearBtn.style.display = 'inline-block';

    // Highlight all matching cells permanently until cleared
    allCells.forEach(cell => {
      // Clear out all other theme color classes first
      cell.className = 'cell' + (cell.classList.contains('has-content') ? ' has-content' : '');
      
      if (cell.getAttribute('data-cell-theme') === selectedTheme) {
        cell.classList.add(`highlight-${cssClassFriendlyTheme}`);
      }
    });

    // Compile theme lists to right sidebar
    displayTitle.innerText = `Theme: ${selectedTheme.toUpperCase()}`;
    let matchingTitlesHTML = '<ul class="theme-results-list">';
    let matchCount = 0;

    for (const coordinate in gardenData) {
      if (gardenData[coordinate].theme === selectedTheme) {
        matchingTitlesHTML += `<li>${gardenData[coordinate].title}</li>`;
        matchCount++;
      }
    }
    matchingTitlesHTML += '</ul>';
    displayBody.innerHTML = matchCount === 0 ? "No entries recorded." : matchingTitlesHTML;
  });
});

clearBtn.addEventListener('click', resetDashboard);