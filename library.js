// Define your book spreads (each spread contains a left and right page)
const spreads = [
  {
    left: `<div class="end-pages">
    <h2>Elicia's Library</h2>
<p>A collection of my favourite media and what I'm currently enjoying. Flip through to see my recommendations.</p>   
    <button class="btn">
      <a href="index.html">home</a>
    </button>
    </div>
`,
    right: `<h2>Currently...</h2>
      <p>Media consumption at its finest. Nothing serious, just here for the vibes.</p>
      <div class="image-list">
        <div class="list-row">
          <img class="icon-img" src="images/collections/magnolias.jpg" alt="Icon 2">
          <span class="caption">
            <strong>Watching</strong><br> 
            Sweet Magnolias. My favourite show to watch in spring. As always, I read the book first then watch the new season.
            </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/bad-blood.jpg" alt="Icon 3">
          <span class="caption">
            <strong>Reading</strong><br>
            Bad Blood by Jennifer Lynn Barnes. I'm slowly getting through my series backlog (I have 17 series that I started but haven't finished yet)
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/tiny-habits.jpeg" alt="Icon 4">
          <span class="caption">
          <strong>Listening to</strong><br>
          Tiny Habits. Randomly came across this band on YouTube. I love finding smaller artists on Bandcamp.
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/ts.jpg" alt="Icon 1">
          <span class="caption">
          <strong>Playing</strong><br>
          Totally Spies: Cyber Mission. Major throwback to my childhood.
          </span>
        </div>
      </div>`,
  },
  {
    left: `<h2>Man on a mission</h2>
      <p>A grand plan and a big reveal. I love the suspense and scheming behind a good heist.</p>
      <div class="image-list">
        <div class="list-row">
          <img class="icon-img" src="images/collections/will-many.jpg" alt="Icon 2">
          <span class="caption">
            <strong>The Will of the Many by James Islington</strong><br> 
            — A pyramid scheme of power and a competition to uncover the truth behind a mysterious incident.
            </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/nysm.png" alt="Icon 3">
          <span class="caption">
            <strong>Now You See Me (2013)</strong><br>
            — Heists with practical magic. I wish I could watch this movie for the first time again. I love a grand reveal.
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/inception.webp" alt="Icon 4">
          <span class="caption">
          <strong>Inception (2010)</strong><br>
          — This is for the dreamers.
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/soc.jpg" alt="Icon 1">
          <span class="caption">
          <strong>Six of Crows by Leigh Bardugo</strong><br>
          — Another heist but in a fantasy world.
          </span>
        </div>
      </div>`,
    right: `<h2>Not what you'd expect</h2>
      <p>A twist on concepts that you know and love. These stories bend and break the rules.</p>
    <div class="image-list">
        <div class="list-row">
          <img class="icon-img" src="images/collections/ssv.jpg" alt="Icon 1">
          <span class="caption">
          <strong>A Stage Set for Villains by Shannon J. Spann</strong><br>
          — greek mythology x fantasy x theatre. I loved the way theatre concepts and myths are woven into the world-building.
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/mwra.webp" alt="Icon 2">
          <span class="caption">
            <strong>Merrily We Roll Along (2025)</strong><br> 
            — A story of three friends told backwards. So fun to watch a non-linear story and seeing how things from the past influenced the future.
          </span>
        </div>
        <div class="list-row">
        <img class="icon-img" src="images/collections/dkos.jpg" alt="Icon 4">
        <span class="caption">
        <strong>Dark Knights of Steel</strong><br>
        — DC characters but in a medieval fantasy universe.
        </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/sherlock.jpg" alt="Icon 2">
          <span class="caption">
            <strong>Young Sherlock (2026)</strong><br> 
            — Sherlock Holmes before he becomes the Sherlock Holmes. So much fun - I'm excited for Season 2!
          </span>
        </div>
      </div>`,
  },
  {
    left: `<h2>Comfort replays</h2>
      <p>My favourite stories that I always go back to.</p>
    <div class="image-list">
        <div class="list-row">
          <img class="icon-img" src="images/collections/truman.jpg" alt="Icon 1">
          <span class="caption">
          <strong>The Truman Show (1998)</strong><br>
          — Probably the only thing from school that's stuck with me. It's like a warm hug, go out and explore the world!
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/endgame.jpg" alt="Icon 2">
          <span class="caption">
            <strong>Avengers: Endgame (2019)</strong><br> — the end of an era. 
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/baby-driver.jpg" alt="Icon 3">
          <span class="caption">
            <strong>Baby Driver (2017)</strong><br>
            — the opening sequence is peak cinema!
          </span>
        </div>
        <div class="list-row">
          <img class="icon-img" src="images/collections/tnc.jpg" alt="Icon 1">
          <span class="caption">
          <strong>The Night Circus by Erin Morgenstern</strong><br>
          — the imagery is stunning.
          </span>
        </div>
      </div>`,
    right: `<div class="end-pages">
    <h2>On the lookout</h2>
    <p>I'm always looking for something new. Right now I'm searching for:</p>
    <ul>
      <li>Magic/medieval fantasy comics</li>
      <li>Non-linear storylines</li>
      <li>Stories about practical magic</li>
    </ul>
    </div>
    `,
  },
];

let currentSpreadIndex = 0;

function updateBook() {
  const leftContent = document.getElementById("left-content");
  const rightContent = document.getElementById("right-content");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Update page HTML
  leftContent.innerHTML = spreads[currentSpreadIndex].left;
  rightContent.innerHTML = spreads[currentSpreadIndex].right;

  // Disable 'Prev' on first spread, disable 'Next' on last spread
  prevBtn.disabled = currentSpreadIndex === 0;
  nextBtn.disabled = currentSpreadIndex === spreads.length - 1;
}

function nextSpread() {
  if (currentSpreadIndex < spreads.length - 1) {
    currentSpreadIndex++;
    updateBook();
  }
}

function prevSpread() {
  if (currentSpreadIndex > 0) {
    currentSpreadIndex--;
    updateBook();
  }
}

// Initialize on page load
updateBook();
