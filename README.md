# 🚀 HackPath — Hackathon Preparation Platform

A beautiful, production-ready platform where hackathon teams discover events, explore skill roadmaps, join learning communities, and follow structured learning paths.

**Zero build step. Zero dependencies. Free to deploy.**

---

## 🌟 Features

- **Multi-Event Support** — Browse multiple hackathons, each with its own skills, countdown timer, and community
- **Skill Discovery** — Search and filter skills by category, difficulty, and name
- **Structured Learning Paths** — Theory sections with curated resources, small projects, and full projects
- **Admin Panel** — Create new events and skills with a form-based UI, no coding needed
- **Responsive Design** — Works beautifully on desktop, tablet, and mobile
- **Dark Glassmorphism UI** — Modern, premium design with smooth animations
- **Countdown Timers** — Live countdown to each hackathon event

---

## 📁 Project Structure

```
hakth_orgn/
├── index.html          ← Homepage (Events Discovery)
├── event.html          ← Event Page (Skills + Countdown)
├── skill.html          ← Skill Page (Theory + Projects)
├── admin.html          ← Admin Panel
├── css/
│   └── styles.css      ← Design system & all styles
├── js/
│   ├── data.js         ← All events & skills data
│   ├── app.js          ← Homepage logic
│   ├── event-page.js   ← Event page logic
│   ├── skill-page.js   ← Skill page logic
│   └── admin.js        ← Admin panel logic
└── README.md           ← This file
```

---

## 🚀 Deployment (Free)

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository**
   ```bash
   cd hakth_orgn
   git init
   git add .
   git commit -m "Initial commit - HackPath platform"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/hackpath.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Navigate to **Settings → Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose `main` branch and `/ (root)` folder
   - Click **Save**
   - Your site will be live at `https://YOUR-USERNAME.github.io/hackpath/`

### Option 2: Netlify (Drag & Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `hakth_orgn` folder onto the page
3. Done! Netlify gives you a free URL instantly

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts — your site is deployed!

---

## ➕ Adding New Content

### Using the Admin Panel (Recommended)

1. Open `admin.html` (locally or on your deployed site)
2. Choose **"New Event"** or **"New Skill"**
3. Fill out the form
4. Click **"Generate JSON"**
5. Click **"Copy JSON"**
6. Open `js/data.js` in your editor
7. Paste the JSON:
   - For **events**: add to the `EVENTS_DATA` array
   - For **skills**: add to the event's `skills` array
8. Save, commit, and push!

### Editing Directly

Open `js/data.js` and follow the existing data structure. Each event object has this shape:

```javascript
{
  id: "my-hackathon",        // URL slug
  name: "My Hackathon",      // Display name
  shortName: "MyHack",       // Short name for breadcrumbs
  description: "...",        // Event description
  date: "2026-12-01T09:00",  // Event date (ISO format)
  location: "City, Country", // Location string
  organizer: "Org Name",     // Organizer name
  maxTeamSize: 4,            // Max team members
  memberCount: 0,            // Number of learners
  icon: "🎯",               // Emoji icon
  categories: ["Frontend"],  // Skill categories
  skills: [...]              // Array of skill objects
}
```

---

## 🎨 Customization

### Colors

Edit the CSS custom properties at the top of `css/styles.css`:

```css
:root {
  --accent-primary: #8b5cf6;   /* Purple */
  --accent-secondary: #06b6d4; /* Cyan */
  --accent-tertiary: #10b981;  /* Emerald */
}
```

### Platform Name

Edit `PLATFORM_CONFIG` at the top of `js/data.js`:

```javascript
const PLATFORM_CONFIG = {
  name: "Your Platform Name",
  tagline: "Your tagline",
};
```

---

## 📱 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `index.html` | Browse all events |
| Event | `event.html?id=EVENT_ID` | View event details & skills |
| Skill | `skill.html?event=EVENT_ID&skill=SKILL_ID` | Skill learning path |
| Admin | `admin.html` | Create events & skills |

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter typeface

No build step. No package manager. No node_modules. Just files.

---

## 📄 License

MIT — Free to use, modify, and distribute.
