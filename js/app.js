// ============================================================
// HackPath — Homepage Logic
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderEvents(getAllEvents());
  setupSearch();
});

// ---- Render Hero Stats ----
function renderStats() {
  const container = document.getElementById('hero-stats');
  const totalEvents = getAllEvents().length;
  const totalSkills = getTotalSkills();
  const totalMembers = getTotalMembers();

  container.innerHTML = `
    <div class="hero__stat">
      <span class="hero__stat-value">${totalEvents}</span>
      <span class="hero__stat-label">Events</span>
    </div>
    <div class="hero__stat">
      <span class="hero__stat-value">${totalSkills}</span>
      <span class="hero__stat-label">Skill Tracks</span>
    </div>
    <div class="hero__stat">
      <span class="hero__stat-value">${totalMembers.toLocaleString()}</span>
      <span class="hero__stat-label">Learners</span>
    </div>
  `;
}

// ---- Render Event Cards ----
function renderEvents(events) {
  const grid = document.getElementById('events-grid');
  const emptyState = document.getElementById('empty-state');

  if (events.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  grid.style.display = '';
  emptyState.style.display = 'none';

  grid.innerHTML = events.map(event => {
    const daysLeft = getDaysUntilEvent(event.id);
    const eventDate = new Date(event.date);
    const dateStr = eventDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
      <a href="event.html?id=${event.id}" class="event-card" id="event-${event.id}">
        <span class="event-card__icon" aria-hidden="true">${event.icon}</span>
        <h3 class="event-card__name">${event.name}</h3>
        <p class="event-card__description">${event.description}</p>
        <div class="event-card__meta">
          <span class="event-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${dateStr}
          </span>
          <span class="event-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            ${event.memberCount} learners
          </span>
          <span class="event-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            ${event.location}
          </span>
        </div>
        <div class="event-card__countdown">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${daysLeft > 0 ? `${daysLeft} days remaining` : 'Event started'}
        </div>
        <div class="event-card__footer">
          <div class="event-card__categories">
            ${event.categories.map(cat => `<span class="event-card__category">${cat}</span>`).join('')}
          </div>
          <span class="event-card__arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>
    `;
  }).join('');
}

// ---- Search ----
function setupSearch() {
  const input = document.getElementById('search-input');
  let debounceTimer;

  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value;
      const results = searchEvents(query);
      renderEvents(results);
    }, 200);
  });
}
