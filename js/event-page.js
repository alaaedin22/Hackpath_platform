// ============================================================
// HackPath — Event Page Logic
// ============================================================

let currentEvent = null;
let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id');

  if (!eventId) {
    window.location.href = 'index.html';
    return;
  }

  currentEvent = getEventById(eventId);

  if (!currentEvent) {
    window.location.href = 'index.html';
    return;
  }

  // Update page title
  document.title = `${currentEvent.name} — HackPath`;

  renderBreadcrumb();
  renderEventHero();
  renderFilters();
  renderSkills(currentEvent.skills);
  setupSearch();
  startCountdown();
});

// ---- Breadcrumb ----
function renderBreadcrumb() {
  document.getElementById('breadcrumb-event').textContent = currentEvent.shortName || currentEvent.name;
}

// ---- Event Hero ----
function renderEventHero() {
  const container = document.getElementById('event-hero-content');
  const eventDate = new Date(currentEvent.date);
  const dateStr = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const timeStr = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  container.innerHTML = `
    <div>
      <span class="event-hero__icon" aria-hidden="true">${currentEvent.icon}</span>
      <h1 class="event-hero__title">${currentEvent.name}</h1>
      <p class="event-hero__description">${currentEvent.description}</p>
      <div class="event-hero__info">
        <span class="event-hero__info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          ${dateStr} at ${timeStr}
        </span>
        <span class="event-hero__info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${currentEvent.location}
        </span>
        <span class="event-hero__info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          ${currentEvent.memberCount} learners · Team size up to ${currentEvent.maxTeamSize}
        </span>
        <span class="event-hero__info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          ${currentEvent.skills.length} skill tracks
        </span>
      </div>
    </div>
    <div class="countdown" id="countdown">
      <div class="countdown__label">Event Starts In</div>
      <div class="countdown__timer" id="countdown-timer">
        <div class="countdown__unit">
          <span class="countdown__value" id="cd-days">--</span>
          <span class="countdown__unit-label">Days</span>
        </div>
        <span class="countdown__separator">:</span>
        <div class="countdown__unit">
          <span class="countdown__value" id="cd-hours">--</span>
          <span class="countdown__unit-label">Hours</span>
        </div>
        <span class="countdown__separator">:</span>
        <div class="countdown__unit">
          <span class="countdown__value" id="cd-mins">--</span>
          <span class="countdown__unit-label">Mins</span>
        </div>
        <span class="countdown__separator">:</span>
        <div class="countdown__unit">
          <span class="countdown__value" id="cd-secs">--</span>
          <span class="countdown__unit-label">Secs</span>
        </div>
      </div>
    </div>
  `;
}

// ---- Countdown Timer ----
function startCountdown() {
  const eventDate = new Date(currentEvent.date);

  function update() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '0';
      document.getElementById('cd-hours').textContent = '0';
      document.getElementById('cd-mins').textContent = '0';
      document.getElementById('cd-secs').textContent = '0';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ---- Category Filter Chips ----
function renderFilters() {
  const container = document.getElementById('filter-chips');
  const categories = ['all', ...currentEvent.categories];

  container.innerHTML = categories.map(cat => `
    <button 
      class="filter-chip ${cat === 'all' ? 'filter-chip--active' : ''}" 
      data-category="${cat}"
      id="filter-${cat.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}"
    >
      ${cat === 'all' ? 'All Skills' : cat}
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    activeCategory = chip.dataset.category;

    // Update active chip
    container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('filter-chip--active'));
    chip.classList.add('filter-chip--active');

    // Clear search
    document.getElementById('skill-search-input').value = '';

    // Filter and render
    const filtered = activeCategory === 'all'
      ? currentEvent.skills
      : currentEvent.skills.filter(s => s.category === activeCategory);
    renderSkills(filtered);
  });
}

// ---- Render Skill Cards ----
function renderSkills(skills) {
  const grid = document.getElementById('skills-grid');
  const emptyState = document.getElementById('empty-state');

  if (skills.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  grid.style.display = '';
  emptyState.style.display = 'none';

  grid.innerHTML = skills.map(skill => `
    <a href="skill.html?event=${currentEvent.id}&skill=${skill.id}" class="skill-card" id="skill-${skill.id}">
      <div class="skill-card__header">
        <span class="skill-card__icon" aria-hidden="true">${skill.icon}</span>
        <span class="skill-card__difficulty skill-card__difficulty--${skill.difficulty}">${skill.difficulty}</span>
      </div>
      <h3 class="skill-card__name">${skill.name}</h3>
      <p class="skill-card__description">${skill.description}</p>
      <div class="skill-card__meta">
        <span class="skill-card__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          ${skill.memberCount} learners
        </span>
        <span class="skill-card__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ~${skill.estimatedHours}h
        </span>
        <span class="skill-card__meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          ${skill.theory.reduce((sum, g) => sum + g.topics.length, 0)} topics
        </span>
      </div>
      <span class="skill-card__cta">
        Start Learning
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  `).join('');
}

// ---- Search ----
function setupSearch() {
  const input = document.getElementById('skill-search-input');
  let debounceTimer;

  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();

      // Reset category filter
      activeCategory = 'all';
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('filter-chip--active'));
      document.querySelector('[data-category="all"]')?.classList.add('filter-chip--active');

      if (!query) {
        renderSkills(currentEvent.skills);
        return;
      }

      const results = currentEvent.skills.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
      );
      renderSkills(results);
    }, 200);
  });
}
