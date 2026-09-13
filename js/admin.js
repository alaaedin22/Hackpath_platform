// ============================================================
// HackPath — Admin Panel Logic
// ============================================================

let theorySectionCount = 0;
let smallProjectCount = 0;
let fullProjectCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  setupModeTabs();
  populateEventDropdown();
  setupAutoSlug();
});

// ---- Mode Tabs (Event vs Skill) ----
function setupModeTabs() {
  const tabs = document.querySelectorAll('#mode-tabs .admin-tab');
  const eventForm = document.getElementById('event-form-container');
  const skillForm = document.getElementById('skill-form-container');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('admin-tab--active'));
      tab.classList.add('admin-tab--active');

      const mode = tab.dataset.mode;
      if (mode === 'event') {
        eventForm.style.display = '';
        skillForm.style.display = 'none';
      } else {
        eventForm.style.display = 'none';
        skillForm.style.display = '';
      }
    });
  });
}

// ---- Populate Event Dropdown ----
function populateEventDropdown() {
  const select = document.getElementById('skill-event-id');
  const events = getAllEvents();

  events.forEach(event => {
    const opt = document.createElement('option');
    opt.value = event.id;
    opt.textContent = `${event.icon} ${event.name}`;
    select.appendChild(opt);
  });
}

// ---- Auto-generate slug from name ----
function setupAutoSlug() {
  const eventName = document.getElementById('event-name');
  const eventId = document.getElementById('event-id');

  eventName.addEventListener('input', () => {
    if (!eventId.dataset.manual) {
      eventId.value = slugify(eventName.value);
    }
  });

  eventId.addEventListener('input', () => {
    eventId.dataset.manual = 'true';
  });

  const skillName = document.getElementById('skill-name');
  const skillId = document.getElementById('skill-id');

  skillName.addEventListener('input', () => {
    if (!skillId.dataset.manual) {
      skillId.value = slugify(skillName.value);
    }
  });

  skillId.addEventListener('input', () => {
    skillId.dataset.manual = 'true';
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ============================================================
// Theory Sections
// ============================================================

function addTheorySection() {
  const container = document.getElementById('theory-sections');
  const index = theorySectionCount++;

  const html = `
    <div class="dynamic-list__item" id="theory-${index}">
      <button class="dynamic-list__remove" onclick="removeElement('theory-${index}')" aria-label="Remove section">✕</button>
      <div class="form-group">
        <label class="form-label">Section Title</label>
        <input type="text" class="form-input theory-title" placeholder="e.g., Core Concepts" data-index="${index}">
      </div>
      <div class="form-group">
        <label class="form-label">Section Description</label>
        <input type="text" class="form-input theory-desc" placeholder="Brief description..." data-index="${index}">
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size: var(--font-xs);">Topics</label>
        <div class="dynamic-list" id="theory-${index}-topics"></div>
        <button class="dynamic-list__add" onclick="addTopic(${index})" style="font-size: var(--font-xs);">
          + Add Topic
        </button>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
}

let topicCounts = {};

function addTopic(sectionIndex) {
  if (!topicCounts[sectionIndex]) topicCounts[sectionIndex] = 0;
  const topicIndex = topicCounts[sectionIndex]++;
  const container = document.getElementById(`theory-${sectionIndex}-topics`);

  const html = `
    <div class="dynamic-list__item" id="topic-${sectionIndex}-${topicIndex}" style="margin-left: var(--space-2);">
      <button class="dynamic-list__remove" onclick="removeElement('topic-${sectionIndex}-${topicIndex}')" aria-label="Remove topic">✕</button>
      <div class="form-group">
        <label class="form-label" style="font-size: var(--font-xs);">Topic Name</label>
        <input type="text" class="form-input topic-name" placeholder="e.g., Variables & Types" data-section="${sectionIndex}" data-topic="${topicIndex}">
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size: var(--font-xs);">Topic Description</label>
        <input type="text" class="form-input topic-desc" placeholder="Brief description..." data-section="${sectionIndex}" data-topic="${topicIndex}">
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size: var(--font-xs);">Resources (one per line: type|title|url|time)</label>
        <textarea class="form-textarea topic-resources" placeholder="docs|MDN Guide|https://...|30 min&#10;video|Tutorial|https://...|1h" data-section="${sectionIndex}" data-topic="${topicIndex}" style="min-height: 80px; font-size: var(--font-xs);"></textarea>
        <p class="form-hint">Format: type|title|url|time — Types: docs, video, article</p>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
}

// ============================================================
// Projects
// ============================================================

function addProject(type) {
  const container = document.getElementById(`${type}-projects`);
  const index = type === 'small' ? smallProjectCount++ : fullProjectCount++;
  const prefix = `${type}-project`;

  const html = `
    <div class="dynamic-list__item" id="${prefix}-${index}">
      <button class="dynamic-list__remove" onclick="removeElement('${prefix}-${index}')" aria-label="Remove project">✕</button>
      <div class="form-group">
        <label class="form-label">Project Title</label>
        <input type="text" class="form-input ${prefix}-title" placeholder="e.g., Todo List App" data-index="${index}">
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea class="form-textarea ${prefix}-desc" placeholder="What will the learner build?" data-index="${index}" style="min-height: 60px;"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Difficulty</label>
        <select class="form-select ${prefix}-difficulty" data-index="${index}">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Time Estimate</label>
        <input type="text" class="form-input ${prefix}-time" placeholder="e.g., 3-4 hours" data-index="${index}">
      </div>
      <div class="form-group">
        <label class="form-label">Skills Practiced (comma-separated)</label>
        <input type="text" class="form-input ${prefix}-skills" placeholder="e.g., React, State, APIs" data-index="${index}">
      </div>
      <div class="form-group">
        <label class="form-label">Steps (one per line)</label>
        <textarea class="form-textarea ${prefix}-steps" placeholder="Step 1&#10;Step 2&#10;Step 3" data-index="${index}" style="min-height: 60px;"></textarea>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
}

// ---- Remove Element ----
function removeElement(id) {
  document.getElementById(id)?.remove();
}

// ============================================================
// JSON Generation
// ============================================================

function generateEventJSON() {
  const data = {
    id: val('event-id'),
    name: val('event-name'),
    shortName: val('event-short-name') || val('event-name'),
    description: val('event-description'),
    date: document.getElementById('event-date').value ? new Date(document.getElementById('event-date').value).toISOString() : '',
    location: val('event-location') || 'TBD',
    organizer: val('event-organizer') || '',
    maxTeamSize: parseInt(val('event-team-size')) || 4,
    memberCount: 0,
    coverGradient: ["#6366f1", "#8b5cf6", "#a855f7"],
    icon: val('event-icon') || '🎯',
    categories: val('event-categories').split(',').map(s => s.trim()).filter(Boolean),
    skills: []
  };

  displayJSON(data);
}

function generateSkillJSON() {
  // Collect theory sections
  const theorySections = [];
  document.querySelectorAll('#theory-sections > .dynamic-list__item').forEach(section => {
    const sectionIndex = section.id.replace('theory-', '');
    const title = section.querySelector('.theory-title')?.value || '';
    const desc = section.querySelector('.theory-desc')?.value || '';

    const topics = [];
    section.querySelectorAll(`[id^="topic-${sectionIndex}-"]`).forEach(topicEl => {
      const name = topicEl.querySelector('.topic-name')?.value || '';
      const topicDesc = topicEl.querySelector('.topic-desc')?.value || '';
      const resourcesRaw = topicEl.querySelector('.topic-resources')?.value || '';

      const resources = resourcesRaw.split('\n').filter(Boolean).map(line => {
        const parts = line.split('|').map(s => s.trim());
        return {
          type: parts[0] || 'article',
          title: parts[1] || '',
          url: parts[2] || '',
          time: parts[3] || ''
        };
      });

      topics.push({ name, description: topicDesc, resources });
    });

    theorySections.push({ title, description: desc, topics });
  });

  // Collect projects
  const smallProjects = collectProjects('small-project');
  const fullProjects = collectProjects('full-project');

  const data = {
    id: val('skill-id'),
    name: val('skill-name'),
    icon: val('skill-icon') || '📘',
    category: val('skill-category'),
    difficulty: val('skill-difficulty'),
    description: val('skill-description'),
    memberCount: 0,
    estimatedHours: parseInt(val('skill-hours')) || 40,
    prerequisites: [],
    theory: theorySections,
    smallProjects: smallProjects,
    fullProjects: fullProjects
  };

  displayJSON(data);
}

function collectProjects(prefix) {
  const projects = [];
  document.querySelectorAll(`#${prefix.replace('project', 'projects')} > .dynamic-list__item`).forEach(el => {
    const title = el.querySelector(`.${prefix}-title`)?.value || '';
    const desc = el.querySelector(`.${prefix}-desc`)?.value || '';
    const difficulty = el.querySelector(`.${prefix}-difficulty`)?.value || 'beginner';
    const time = el.querySelector(`.${prefix}-time`)?.value || '';
    const skills = (el.querySelector(`.${prefix}-skills`)?.value || '').split(',').map(s => s.trim()).filter(Boolean);
    const steps = (el.querySelector(`.${prefix}-steps`)?.value || '').split('\n').map(s => s.trim()).filter(Boolean);

    projects.push({ title, description: desc, difficulty, time, skills, steps });
  });
  return projects;
}

// ---- Display JSON ----
function displayJSON(data) {
  const output = document.getElementById('json-output');
  output.textContent = JSON.stringify(data, null, 2);
}

// ---- Copy JSON ----
function copyJSON() {
  const output = document.getElementById('json-output');
  const text = output.textContent;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard! 📋');
  }).catch(() => {
    // Fallback: select text
    const range = document.createRange();
    range.selectNodeContents(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    showToast('Text selected — use Ctrl+C to copy');
  });
}

// ---- Clear Output ----
function clearOutput() {
  document.getElementById('json-output').textContent = '// Your generated JSON will appear here...';
}

// ---- Toast ----
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('toast--visible', 'toast--success');
  setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 3000);
}

// ---- Utility ----
function val(id) {
  return (document.getElementById(id)?.value || '').trim();
}
