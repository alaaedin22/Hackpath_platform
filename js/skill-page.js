// ============================================================
// HackPath — Skill Page Logic
// ============================================================

let currentEvent = null;
let currentSkill = null;

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('event');
  const skillId = params.get('skill');

  if (!eventId || !skillId) {
    window.location.href = 'index.html';
    return;
  }

  currentEvent = getEventById(eventId);
  if (!currentEvent) {
    window.location.href = 'index.html';
    return;
  }

  currentSkill = getSkill(eventId, skillId);
  if (!currentSkill) {
    window.location.href = `event.html?id=${eventId}`;
    return;
  }

  // Update page title
  document.title = `${currentSkill.name} — ${currentEvent.shortName} — HackPath`;

  renderSkillPage();
});

function renderSkillPage() {
  const container = document.getElementById('skill-content');

  container.innerHTML = `
    <!-- Skill Hero -->
    <section class="skill-hero">
      <div class="container">
        <div class="event-hero__breadcrumb">
          <a href="index.html">Home</a>
          <span class="event-hero__breadcrumb-sep">/</span>
          <a href="event.html?id=${currentEvent.id}">${currentEvent.shortName || currentEvent.name}</a>
          <span class="event-hero__breadcrumb-sep">/</span>
          <span>${currentSkill.name}</span>
        </div>

        <div class="skill-hero__header">
          <span class="skill-hero__icon" aria-hidden="true">${currentSkill.icon}</span>
          <div>
            <h1 class="skill-hero__title">${currentSkill.name}</h1>
          </div>
        </div>

        <p class="skill-hero__description">${currentSkill.description}</p>

        <div class="skill-hero__tags">
          <span class="skill-hero__tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            ${currentSkill.category}
          </span>
          <span class="skill-hero__tag skill-card__difficulty skill-card__difficulty--${currentSkill.difficulty}" style="border: none;">
            ${currentSkill.difficulty}
          </span>
          <span class="skill-hero__tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            ${currentSkill.memberCount} learners
          </span>
          <span class="skill-hero__tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ~${currentSkill.estimatedHours} hours total
          </span>
        </div>

        <button class="skill-hero__join-btn" id="join-btn" onclick="handleJoin()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
          Join Community
        </button>
      </div>
    </section>

    <!-- Theory Section -->
    <section class="container theory-section">
      <div class="section-header">
        <span class="section-header__label">📚 Knowledge Base</span>
        <h2 class="section-header__title">Theoretical Knowledge</h2>
        <p class="section-header__subtitle">Master the concepts before diving into projects.</p>
      </div>

      ${currentSkill.theory.map((group, gi) => `
        <div class="theory-group ${gi === 0 ? 'theory-group--open' : ''}" id="theory-group-${gi}">
          <div class="theory-group__header" onclick="toggleTheoryGroup(${gi})" role="button" tabindex="0" aria-expanded="${gi === 0}">
            <div>
              <h3 class="theory-group__title">${group.title}</h3>
              <p class="theory-group__description">${group.description}</p>
            </div>
            <span class="theory-group__toggle" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>
          </div>
          <div class="theory-group__content">
            ${group.topics.map(topic => `
              <div class="topic">
                <h4 class="topic__name">${topic.name}</h4>
                <p class="topic__description">${topic.description}</p>
                <div class="topic__resources">
                  ${topic.resources.map(res => `
                    <a href="${res.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                      <span class="resource-link__type resource-link__type--${res.type}">
                        ${res.type === 'docs' ? '📄' : res.type === 'video' ? '🎬' : '📝'}
                      </span>
                      <span class="resource-link__title">${res.title}</span>
                      <span class="resource-link__time">${res.time}</span>
                    </a>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>

    <!-- Small Projects Section -->
    <section class="container projects-section">
      <div class="section-header">
        <span class="section-header__label">🔨 Hands-On Practice</span>
        <h2 class="section-header__title">Small Projects</h2>
        <p class="section-header__subtitle">Beginner-friendly exercises to practice individual concepts.</p>
      </div>

      <div class="project-grid">
        ${currentSkill.smallProjects.map(project => renderProjectCard(project)).join('')}
      </div>
    </section>

    <!-- Full Projects Section -->
    <section class="container projects-section">
      <div class="section-header">
        <span class="section-header__label">🏗️ Build Something Real</span>
        <h2 class="section-header__title">Full Projects</h2>
        <p class="section-header__subtitle">Larger, integrated projects that combine multiple concepts.</p>
      </div>

      <div class="project-grid">
        ${currentSkill.fullProjects.map(project => renderProjectCard(project)).join('')}
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-card__header">
        <h3 class="project-card__title">${project.title}</h3>
        <span class="skill-card__difficulty skill-card__difficulty--${project.difficulty}">${project.difficulty}</span>
      </div>
      <p class="project-card__description">${project.description}</p>
      <div class="project-card__meta">
        <span class="project-card__meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${project.time}
        </span>
        <span class="project-card__meta-item">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          ${project.difficulty}
        </span>
      </div>
      <div class="project-card__skills">
        ${project.skills.map(s => `<span class="project-card__skill-tag">${s}</span>`).join('')}
      </div>
      <div class="project-card__steps">
        <div class="project-card__steps-title">Steps</div>
        ${project.steps.map((step, i) => `
          <div class="project-card__step">
            <span class="project-card__step-num">${i + 1}</span>
            <span>${step}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ---- Toggle Theory Groups ----
function toggleTheoryGroup(index) {
  const group = document.getElementById(`theory-group-${index}`);
  if (!group) return;

  const isOpen = group.classList.contains('theory-group--open');
  group.classList.toggle('theory-group--open');

  // Update aria-expanded
  const header = group.querySelector('.theory-group__header');
  header.setAttribute('aria-expanded', !isOpen);
}

// ---- Join Community ----
function handleJoin() {
  const btn = document.getElementById('join-btn');
  btn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    Joined!
  `;
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';

  // Show toast
  const toast = document.getElementById('toast');
  toast.classList.add('toast--visible', 'toast--success');
  setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 3000);
}

// Allow keyboard toggle for theory groups
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const target = e.target.closest('.theory-group__header');
    if (target) {
      e.preventDefault();
      target.click();
    }
  }
});
