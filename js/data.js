// ============================================================
// HackPath — Skills Data Store
// ============================================================
// All events and skills data. Edit this file directly or use
// the Admin Panel (admin.html) to generate new entries.
// ============================================================

const PLATFORM_CONFIG = {
  name: "HackPath",
  tagline: "Your roadmap to hackathon success",
  description: "Discover skills, join learning communities, and follow structured paths to prepare for your next hackathon."
};

const EVENTS_DATA = [
  {
    id: "nasa-space-apps",
    name: "NASA Space Apps Challenge",
    shortName: "Space Apps",
    description: "Join the world's largest global hackathon. Solve challenges using open-source data from NASA and its space agency partners.",
    date: "2026-10-02T09:00:00",
    location: "Global & Local Events",
    organizer: "NASA",
    maxTeamSize: 6,
    memberCount: 0,
    coverGradient: ["#0b3d91", "#1e5288", "#0b3d91"],
    icon: "🚀",
    categories: ["Space", "Data", "Hardware", "Earth"],
    skills: [
      {
        "id": "python",
        "name": "Python",
        "icon": "📘",
        "category": "Backend",
        "difficulty": "beginner",
        "description": "",
        "memberCount": 0,
        "estimatedHours": 40,
        "prerequisites": [],
        "theory": [
          {
            "title": "Pyhton Basics",
            "description": "",
            "topics": [
              {
                "name": "",
                "description": "",
                "resources": [
                  {
                    "type": "docs",
                    "title": "Google Drive Course Materials",
                    "url": "https://drive.google.com/drive/folders/18D-NUE45C7PRno5vMqypVykYKOd5kNwJ",
                    "time": "Folder"
                  }
                ]
              }
            ]
          }
        ],
        "smallProjects": [],
        "fullProjects": []
      },
      {
        "id": "python",
        "name": "python",
        "icon": "📘",
        "category": "Backend",
        "difficulty": "beginner",
        "description": "learning python for data analysis and ML",
        "memberCount": 0,
        "estimatedHours": 55,
        "prerequisites": [],
        "theory": [
          {
            "title": "what is Pyhton ",
            "description": "",
            "topics": [
              {
                "name": "What does python solves",
                "description": "the problems wich python solves and and distinguish it from other languages",
                "resources": [
                  {
                    "type": "choufo kch video",
                    "title": "",
                    "url": "",
                    "time": ""
                  }
                ]
              },
              {
                "name": "python Coding Basics",
                "description": "The start of python coding ",
                "resources": [
                  {
                    "type": "https://drive.google.com/drive/folders/18D-NUE45C7PRno5vMqypVykYKOd5kNwJ",
                    "title": "",
                    "url": "",
                    "time": ""
                  }
                ]
              }
            ]
          }
        ],
        "smallProjects": [
          {
            "title": "house prices prediction ",
            "description": "Build a software that detects Houses Prices depending on deffernet Factors",
            "difficulty": "beginner",
            "time": "3_4 hours",
            "skills": [
              "ML",
              "Python"
            ],
            "steps": []
          }
        ],
        "fullProjects": []
      },
      {
        "id": "pyhton-basics",
        "name": "Pyhton Basics",
        "icon": "📘",
        "category": "Backend",
        "difficulty": "beginner",
        "description": "ML and da",
        "memberCount": 0,
        "estimatedHours": 40,
        "prerequisites": [],
        "theory": [
          {
            "title": "Python Concepts",
            "description": "Python coding Basics",
            "topics": [
              {
                "name": "Start here",
                "description": "the starrt",
                "resources": [
                  {
                    "type": "https://drive.google.com/drive/folders/18D-NUE45C7PRno5vMqypVykYKOd5kNwJ",
                    "title": "",
                    "url": "",
                    "time": ""
                  }
                ]
              }
            ]
          }
        ],
        "smallProjects": [
          {
            "title": "house prices ",
            "description": "",
            "difficulty": "beginner",
            "time": "",
            "skills": [],
            "steps": [
              "tirir bark"
            ]
          }
        ],
        "fullProjects": []
      },
      {
        id: "data-science",
        name: "Data Science for Space",
        icon: "📊",
        category: "Data",
        difficulty: "intermediate",
        description: "Learn how to analyze, visualize, and interpret open-source satellite data from NASA.",
        memberCount: 0,
        estimatedHours: 20,
        prerequisites: [],
        theory: [
          {
            title: "NASA Open APIs",
            description: "How to access and use NASA's open data portals.",
            topics: [
              {
                name: "NASA API Portal",
                description: "Getting API keys and fetching Earth observation data.",
                resources: [
                  { type: "docs", title: "NASA API Docs", url: "https://api.nasa.gov/", time: "30 min" }
                ]
              }
            ]
          }
        ],
        smallProjects: [],
        fullProjects: []
      }
    ]
  },
  {
    id: "ai-hackathon-2026",
    name: "AI Innovation Hackathon 2026",
    shortName: "AI Hack '26",
    description: "Build the next generation of AI-powered applications. From intelligent chatbots to computer vision systems — push the boundaries of what's possible with artificial intelligence.",
    date: "2026-11-15T09:00:00",
    location: "Algiers, Algeria",
    organizer: "TechHub Algeria",
    maxTeamSize: 4,
    memberCount: 234,
    coverGradient: ["#6366f1", "#8b5cf6", "#a855f7"],
    icon: "🤖",
    categories: ["AI/ML", "Backend", "Frontend", "Data"],
    skills: [
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        category: "Backend",
        difficulty: "beginner",
        description: "Master Python fundamentals and build the foundation for AI/ML development. Learn data structures, OOP, and essential libraries.",
        memberCount: 156,
        estimatedHours: 40,
        prerequisites: [],
        theory: [
          {
            title: "Python Fundamentals",
            description: "Core language features every developer needs to know.",
            topics: [
              {
                name: "Variables, Data Types & Operators",
                description: "Understanding Python's dynamic typing, primitive types (int, float, str, bool), and operator precedence.",
                resources: [
                  { type: "docs", title: "Official Python Tutorial — Basics", url: "https://docs.python.org/3/tutorial/introduction.html", time: "30 min" },
                  { type: "video", title: "Python for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=rfscVS0vtbw", time: "4h 30m" },
                  { type: "article", title: "Real Python — Variables Guide", url: "https://realpython.com/python-variables/", time: "20 min" }
                ]
              },
              {
                name: "Control Flow & Loops",
                description: "if/elif/else statements, for/while loops, list comprehensions, and iterators.",
                resources: [
                  { type: "docs", title: "Python Control Flow Docs", url: "https://docs.python.org/3/tutorial/controlflow.html", time: "25 min" },
                  { type: "article", title: "Comprehensions in Python", url: "https://realpython.com/list-comprehension-python/", time: "15 min" }
                ]
              },
              {
                name: "Functions & Modules",
                description: "Defining functions, *args/**kwargs, lambda expressions, decorators, and organizing code into modules.",
                resources: [
                  { type: "docs", title: "Defining Functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions", time: "20 min" },
                  { type: "video", title: "Python Functions Deep Dive", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I", time: "1h" }
                ]
              },
              {
                name: "Object-Oriented Programming",
                description: "Classes, inheritance, polymorphism, encapsulation, magic methods, and dataclasses.",
                resources: [
                  { type: "docs", title: "Python Classes Tutorial", url: "https://docs.python.org/3/tutorial/classes.html", time: "30 min" },
                  { type: "article", title: "OOP in Python — Real Python", url: "https://realpython.com/python3-object-oriented-programming/", time: "45 min" }
                ]
              }
            ]
          },
          {
            title: "Data Handling & Libraries",
            description: "Working with data using Python's powerful ecosystem.",
            topics: [
              {
                name: "File I/O & JSON",
                description: "Reading/writing files, CSV parsing, JSON serialization, and working with APIs.",
                resources: [
                  { type: "docs", title: "Python I/O Tutorial", url: "https://docs.python.org/3/tutorial/inputoutput.html", time: "20 min" },
                  { type: "article", title: "Working with JSON in Python", url: "https://realpython.com/python-json/", time: "25 min" }
                ]
              },
              {
                name: "NumPy & Pandas Essentials",
                description: "Array operations with NumPy and data manipulation with Pandas DataFrames.",
                resources: [
                  { type: "docs", title: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html", time: "45 min" },
                  { type: "docs", title: "Pandas Getting Started", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/", time: "1h" },
                  { type: "video", title: "Pandas Tutorial (Corey Schafer)", url: "https://www.youtube.com/watch?v=ZyhVh-qRZPA", time: "1h" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "CLI Calculator",
            description: "Build a command-line calculator that supports basic arithmetic, history, and expression parsing.",
            difficulty: "beginner",
            time: "2-3 hours",
            skills: ["Variables", "Functions", "Loops"],
            steps: ["Parse user input", "Implement operations", "Add history tracking", "Handle edge cases"]
          },
          {
            title: "Todo List Manager",
            description: "Create a persistent todo list app using file I/O with add, remove, complete, and filter features.",
            difficulty: "beginner",
            time: "3-4 hours",
            skills: ["File I/O", "Lists", "Functions", "OOP"],
            steps: ["Design data structure", "Implement CRUD operations", "Add file persistence", "Build CLI interface"]
          },
          {
            title: "Web Scraper",
            description: "Build a scraper that extracts data from a website and saves it as structured CSV/JSON.",
            difficulty: "intermediate",
            time: "4-5 hours",
            skills: ["HTTP Requests", "HTML Parsing", "File I/O", "Data Structures"],
            steps: ["Set up requests + BeautifulSoup", "Identify target data", "Extract and clean data", "Export to CSV/JSON"]
          }
        ],
        fullProjects: [
          {
            title: "Personal Finance Dashboard",
            description: "Build a full-featured finance tracker that reads transaction data, categorizes expenses, generates reports with charts, and exports summaries. Uses Pandas for data manipulation and Matplotlib for visualization.",
            difficulty: "intermediate",
            time: "15-20 hours",
            skills: ["Pandas", "Matplotlib", "OOP", "File I/O", "Data Analysis"],
            steps: ["Design expense categories schema", "Build data import pipeline", "Implement categorization engine", "Create visualization dashboard", "Add export/reporting features"]
          },
          {
            title: "REST API with Flask",
            description: "Design and build a RESTful API for a task management system with authentication, CRUD operations, input validation, and SQLite persistence.",
            difficulty: "advanced",
            time: "20-25 hours",
            skills: ["Flask", "REST APIs", "SQL", "Authentication", "Testing"],
            steps: ["Set up Flask project structure", "Design database schema", "Implement CRUD endpoints", "Add JWT authentication", "Write unit tests", "Deploy to free hosting"]
          }
        ]
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        icon: "🧠",
        category: "AI/ML",
        difficulty: "intermediate",
        description: "Learn ML fundamentals from linear regression to neural networks. Build models that can classify, predict, and generate using scikit-learn and TensorFlow.",
        memberCount: 98,
        estimatedHours: 60,
        prerequisites: ["python"],
        theory: [
          {
            title: "ML Foundations",
            description: "Core concepts and mathematics behind machine learning.",
            topics: [
              {
                name: "What is Machine Learning?",
                description: "Supervised vs unsupervised learning, model training pipeline, overfitting/underfitting, bias-variance tradeoff.",
                resources: [
                  { type: "video", title: "ML Crash Course (Google)", url: "https://developers.google.com/machine-learning/crash-course", time: "15h" },
                  { type: "article", title: "A Visual Introduction to ML", url: "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/", time: "15 min" }
                ]
              },
              {
                name: "Linear Algebra for ML",
                description: "Vectors, matrices, eigenvalues, and transformations — the math powering ML algorithms.",
                resources: [
                  { type: "video", title: "3Blue1Brown — Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", time: "3h" },
                  { type: "article", title: "Linear Algebra Cheat Sheet for ML", url: "https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-linear-algebra", time: "30 min" }
                ]
              },
              {
                name: "Classification & Regression",
                description: "Linear/logistic regression, decision trees, random forests, SVMs, and evaluation metrics.",
                resources: [
                  { type: "docs", title: "Scikit-learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", time: "2h" },
                  { type: "video", title: "StatQuest — ML Playlist", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF", time: "8h" }
                ]
              }
            ]
          },
          {
            title: "Deep Learning Basics",
            description: "Neural networks and modern deep learning frameworks.",
            topics: [
              {
                name: "Neural Networks",
                description: "Perceptrons, activation functions, backpropagation, gradient descent, and network architectures.",
                resources: [
                  { type: "video", title: "3Blue1Brown — Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", time: "1h" },
                  { type: "article", title: "Neural Networks from Scratch", url: "https://karpathy.github.io/neuralnets/", time: "2h" }
                ]
              },
              {
                name: "TensorFlow / PyTorch Basics",
                description: "Building, training, and evaluating models with modern frameworks.",
                resources: [
                  { type: "docs", title: "TensorFlow Getting Started", url: "https://www.tensorflow.org/tutorials", time: "3h" },
                  { type: "docs", title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", time: "3h" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "Iris Classifier",
            description: "Train and evaluate multiple classifiers on the classic Iris dataset. Compare accuracy, precision, and recall.",
            difficulty: "beginner",
            time: "3-4 hours",
            skills: ["Scikit-learn", "Data Preprocessing", "Model Evaluation"],
            steps: ["Load and explore data", "Preprocess features", "Train multiple models", "Compare with metrics"]
          },
          {
            title: "Housing Price Predictor",
            description: "Build a regression model to predict house prices based on features like area, rooms, and location.",
            difficulty: "intermediate",
            time: "5-6 hours",
            skills: ["Regression", "Feature Engineering", "Cross-validation"],
            steps: ["EDA and visualization", "Feature engineering", "Model selection", "Hyperparameter tuning"]
          }
        ],
        fullProjects: [
          {
            title: "Image Classification Pipeline",
            description: "Build an end-to-end image classifier using a CNN. Train on a real dataset, implement data augmentation, and deploy as a web API.",
            difficulty: "advanced",
            time: "25-30 hours",
            skills: ["CNN", "TensorFlow/PyTorch", "Data Augmentation", "Deployment"],
            steps: ["Collect/prepare dataset", "Design CNN architecture", "Train with augmentation", "Evaluate and optimize", "Build Flask API", "Deploy"]
          }
        ]
      },
      {
        id: "react",
        name: "React",
        icon: "⚛️",
        category: "Frontend",
        difficulty: "intermediate",
        description: "Build dynamic user interfaces with React. Learn components, hooks, state management, and modern patterns for production-ready frontends.",
        memberCount: 187,
        estimatedHours: 45,
        prerequisites: [],
        theory: [
          {
            title: "React Core Concepts",
            description: "Foundational knowledge for building React applications.",
            topics: [
              {
                name: "JSX & Components",
                description: "Writing JSX, functional components, props, children, and component composition patterns.",
                resources: [
                  { type: "docs", title: "React — Quick Start", url: "https://react.dev/learn", time: "45 min" },
                  { type: "video", title: "React Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", time: "12h" }
                ]
              },
              {
                name: "Hooks & State",
                description: "useState, useEffect, useContext, useReducer, custom hooks, and the rules of hooks.",
                resources: [
                  { type: "docs", title: "React Hooks Reference", url: "https://react.dev/reference/react/hooks", time: "1h" },
                  { type: "article", title: "A Complete Guide to useEffect", url: "https://overreacted.io/a-complete-guide-to-useeffect/", time: "45 min" }
                ]
              },
              {
                name: "Routing & Navigation",
                description: "Client-side routing with React Router, nested routes, dynamic params, and protected routes.",
                resources: [
                  { type: "docs", title: "React Router Tutorial", url: "https://reactrouter.com/en/main/start/tutorial", time: "1h" }
                ]
              }
            ]
          },
          {
            title: "Advanced Patterns",
            description: "Production-ready patterns and performance optimization.",
            topics: [
              {
                name: "State Management",
                description: "Context API, Zustand, Redux Toolkit — when to use what and how to structure global state.",
                resources: [
                  { type: "docs", title: "Redux Toolkit Quick Start", url: "https://redux-toolkit.js.org/tutorials/quick-start", time: "30 min" },
                  { type: "article", title: "Zustand — Simple State Management", url: "https://github.com/pmndrs/zustand", time: "20 min" }
                ]
              },
              {
                name: "Performance Optimization",
                description: "React.memo, useMemo, useCallback, code splitting, lazy loading, and React Profiler.",
                resources: [
                  { type: "docs", title: "React Performance Docs", url: "https://react.dev/reference/react/memo", time: "30 min" },
                  { type: "article", title: "React Performance Cheat Sheet", url: "https://blog.logrocket.com/react-performance-optimization/", time: "25 min" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "Interactive Counter",
            description: "Build a counter with increment, decrement, reset, and custom step size using useState.",
            difficulty: "beginner",
            time: "1-2 hours",
            skills: ["useState", "Event Handlers", "JSX"],
            steps: ["Set up component", "Add state", "Wire up buttons", "Add step size input"]
          },
          {
            title: "Weather Dashboard",
            description: "Fetch weather data from a free API and display current conditions with search functionality.",
            difficulty: "intermediate",
            time: "4-5 hours",
            skills: ["useEffect", "API Calls", "Conditional Rendering", "Error Handling"],
            steps: ["Set up project", "Build search UI", "Fetch API data", "Display results", "Handle loading/errors"]
          }
        ],
        fullProjects: [
          {
            title: "Task Management App (Kanban Board)",
            description: "Build a Trello-like kanban board with drag-and-drop, multiple boards, task details, and local storage persistence.",
            difficulty: "advanced",
            time: "20-25 hours",
            skills: ["State Management", "Drag & Drop", "Local Storage", "Component Design"],
            steps: ["Design data model", "Build board layout", "Implement drag-and-drop", "Add task CRUD", "Persist to localStorage", "Add search and filters"]
          }
        ]
      }
    ]
  },
  {
    id: "web-dev-bootcamp-2026",
    name: "Web Dev Bootcamp Hackathon",
    shortName: "WebDev '26",
    description: "A 48-hour web development hackathon focused on building accessible, performant, and beautiful web applications. Teams will compete to create the best full-stack project.",
    date: "2026-12-05T10:00:00",
    location: "Online — Global",
    organizer: "Open Source Community",
    maxTeamSize: 5,
    memberCount: 312,
    coverGradient: ["#06b6d4", "#0891b2", "#0e7490"],
    icon: "🌐",
    categories: ["Frontend", "Backend", "Design", "DevOps"],
    skills: [
      {
        id: "html-css",
        name: "HTML & CSS Mastery",
        icon: "🎨",
        category: "Frontend",
        difficulty: "beginner",
        description: "Master semantic HTML and modern CSS including Grid, Flexbox, custom properties, animations, and responsive design techniques.",
        memberCount: 245,
        estimatedHours: 30,
        prerequisites: [],
        theory: [
          {
            title: "Modern HTML",
            description: "Semantic markup and accessibility-first HTML.",
            topics: [
              {
                name: "Semantic Elements & Accessibility",
                description: "Using the right HTML elements for meaning, ARIA roles, landmark regions, and screen reader testing.",
                resources: [
                  { type: "docs", title: "MDN — HTML Elements Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element", time: "1h" },
                  { type: "article", title: "HTML: A Good Basis for Accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML", time: "30 min" }
                ]
              },
              {
                name: "Forms & Validation",
                description: "Building accessible forms with native validation, input types, fieldsets, and error messaging.",
                resources: [
                  { type: "docs", title: "MDN — Form Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms", time: "1h" },
                  { type: "article", title: "Form Validation UX", url: "https://web.dev/learn/forms/", time: "45 min" }
                ]
              }
            ]
          },
          {
            title: "Modern CSS",
            description: "Layout, animation, and responsive design techniques.",
            topics: [
              {
                name: "Grid & Flexbox",
                description: "CSS Grid for 2D layouts, Flexbox for 1D alignment, subgrid, and when to use each.",
                resources: [
                  { type: "article", title: "CSS Grid Complete Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/", time: "30 min" },
                  { type: "article", title: "Flexbox Complete Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", time: "25 min" },
                  { type: "video", title: "Learn CSS Grid in 20 Minutes", url: "https://www.youtube.com/watch?v=9zBsdzdE4sM", time: "20 min" }
                ]
              },
              {
                name: "Custom Properties & Theming",
                description: "CSS variables, dynamic theming, dark mode implementation, and design tokens.",
                resources: [
                  { type: "docs", title: "MDN — CSS Custom Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties", time: "20 min" },
                  { type: "article", title: "A Complete Guide to Dark Mode", url: "https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/", time: "35 min" }
                ]
              },
              {
                name: "Animations & Transitions",
                description: "CSS transitions, keyframe animations, scroll-driven animations, and performance best practices.",
                resources: [
                  { type: "docs", title: "MDN — CSS Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations", time: "30 min" },
                  { type: "article", title: "High Performance Animations", url: "https://web.dev/animations-guide/", time: "20 min" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "Responsive Landing Page",
            description: "Build a mobile-first landing page with hero section, feature cards, testimonials, and footer using Grid and Flexbox.",
            difficulty: "beginner",
            time: "3-4 hours",
            skills: ["Grid", "Flexbox", "Responsive Design", "Typography"],
            steps: ["Design mobile wireframe", "Build HTML structure", "Style with CSS Grid", "Add responsive breakpoints"]
          },
          {
            title: "Animated Card Gallery",
            description: "Create a gallery of cards with hover animations, flip effects, and smooth transitions.",
            difficulty: "intermediate",
            time: "3-4 hours",
            skills: ["CSS Animations", "Transforms", "Transitions", "Grid"],
            steps: ["Build card HTML", "Add hover effects", "Implement flip animation", "Make responsive grid"]
          }
        ],
        fullProjects: [
          {
            title: "Portfolio Website",
            description: "Design and build a complete portfolio website with smooth scroll, animated sections, project showcase, contact form, and dark mode toggle.",
            difficulty: "intermediate",
            time: "15-20 hours",
            skills: ["Grid", "Flexbox", "Animations", "Custom Properties", "Responsive Design"],
            steps: ["Plan sections and layout", "Build semantic HTML", "Design with CSS custom properties", "Add scroll animations", "Implement dark mode", "Build contact form", "Optimize performance"]
          }
        ]
      },
      {
        id: "nodejs",
        name: "Node.js & Express",
        icon: "🟢",
        category: "Backend",
        difficulty: "intermediate",
        description: "Build fast, scalable server-side applications with Node.js and Express. Learn REST APIs, middleware, authentication, and database integration.",
        memberCount: 134,
        estimatedHours: 40,
        prerequisites: [],
        theory: [
          {
            title: "Node.js Core",
            description: "Understanding the Node.js runtime and its ecosystem.",
            topics: [
              {
                name: "Event Loop & Async Patterns",
                description: "How Node.js handles concurrency, callbacks, Promises, async/await, and the event loop.",
                resources: [
                  { type: "video", title: "What the heck is the event loop?", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", time: "26 min" },
                  { type: "docs", title: "Node.js — Getting Started", url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs", time: "30 min" }
                ]
              },
              {
                name: "Modules & npm",
                description: "CommonJS vs ES modules, package.json, dependency management, and publishing packages.",
                resources: [
                  { type: "docs", title: "Node.js Modules Docs", url: "https://nodejs.org/api/modules.html", time: "25 min" },
                  { type: "article", title: "npm Essentials Guide", url: "https://docs.npmjs.com/getting-started", time: "30 min" }
                ]
              }
            ]
          },
          {
            title: "Express & APIs",
            description: "Building production-grade REST APIs with Express.",
            topics: [
              {
                name: "Express Fundamentals",
                description: "Routing, middleware, request/response handling, error handling, and project structure.",
                resources: [
                  { type: "docs", title: "Express — Getting Started", url: "https://expressjs.com/en/starter/installing.html", time: "30 min" },
                  { type: "video", title: "Express.js Crash Course", url: "https://www.youtube.com/watch?v=SccSCuHhOw0", time: "1h 30m" }
                ]
              },
              {
                name: "Authentication & Security",
                description: "JWT tokens, bcrypt, CORS, Helmet, rate limiting, and security best practices.",
                resources: [
                  { type: "article", title: "Node.js Security Best Practices", url: "https://nodejs.org/en/learn/getting-started/security-best-practices", time: "30 min" },
                  { type: "video", title: "JWT Authentication Tutorial", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4", time: "45 min" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "URL Shortener API",
            description: "Build an API that shortens URLs, tracks click counts, and redirects. Uses in-memory or file-based storage.",
            difficulty: "beginner",
            time: "3-4 hours",
            skills: ["Express Routing", "REST API Design", "Data Storage"],
            steps: ["Set up Express", "Create shorten endpoint", "Implement redirect", "Add click tracking"]
          },
          {
            title: "Markdown Blog API",
            description: "Create a REST API for a blog that reads markdown files, parses them, and serves rendered HTML with metadata.",
            difficulty: "intermediate",
            time: "5-6 hours",
            skills: ["File I/O", "Markdown Parsing", "REST Design", "Error Handling"],
            steps: ["Set up project", "Build file reader", "Add markdown parser", "Create CRUD endpoints", "Add pagination"]
          }
        ],
        fullProjects: [
          {
            title: "Real-time Chat Application",
            description: "Build a full-stack chat app with Socket.io, user authentication, multiple rooms, message history, and typing indicators.",
            difficulty: "advanced",
            time: "20-25 hours",
            skills: ["Socket.io", "Express", "JWT", "MongoDB/SQLite", "Frontend Integration"],
            steps: ["Design architecture", "Set up Express + Socket.io", "Implement user auth", "Build chat rooms", "Add message persistence", "Create frontend UI", "Add typing indicators"]
          }
        ]
      },
      {
        id: "git-github",
        name: "Git & GitHub",
        icon: "📦",
        category: "DevOps",
        difficulty: "beginner",
        description: "Master version control with Git and collaboration with GitHub. Essential for every hackathon team — learn branching, merging, PRs, and team workflows.",
        memberCount: 289,
        estimatedHours: 15,
        prerequisites: [],
        theory: [
          {
            title: "Git Essentials",
            description: "Core version control concepts and commands.",
            topics: [
              {
                name: "Git Basics",
                description: "init, add, commit, status, log, diff — the daily commands every developer uses.",
                resources: [
                  { type: "docs", title: "Git — Getting Started", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control", time: "30 min" },
                  { type: "video", title: "Git Tutorial for Beginners", url: "https://www.youtube.com/watch?v=8JJ101D3knE", time: "1h" }
                ]
              },
              {
                name: "Branching & Merging",
                description: "Creating branches, merge strategies, rebasing, resolving conflicts, and Git Flow.",
                resources: [
                  { type: "article", title: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/", time: "2h" },
                  { type: "docs", title: "Git Branching Guide", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", time: "30 min" }
                ]
              }
            ]
          },
          {
            title: "GitHub Collaboration",
            description: "Team workflows using GitHub features.",
            topics: [
              {
                name: "Pull Requests & Code Review",
                description: "Creating PRs, writing good descriptions, reviewing code, and merge strategies.",
                resources: [
                  { type: "docs", title: "GitHub — Pull Requests", url: "https://docs.github.com/en/pull-requests", time: "30 min" },
                  { type: "article", title: "How to Write a Good PR", url: "https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/", time: "15 min" }
                ]
              },
              {
                name: "GitHub Actions & CI/CD",
                description: "Automating tests, builds, and deployments with GitHub Actions workflows.",
                resources: [
                  { type: "docs", title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", time: "45 min" },
                  { type: "video", title: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8_veQiYBjI", time: "30 min" }
                ]
              }
            ]
          }
        ],
        smallProjects: [
          {
            title: "Personal Dotfiles Repo",
            description: "Create a Git repository for your shell configs, editor settings, and scripts with proper .gitignore and README.",
            difficulty: "beginner",
            time: "1-2 hours",
            skills: ["Git Init", "Commits", ".gitignore", "README"],
            steps: ["Init repo", "Add configs", "Write .gitignore", "Create documentation"]
          },
          {
            title: "Simulate Team Workflow",
            description: "Practice a realistic team workflow: fork a repo, create feature branches, make PRs, review, and resolve merge conflicts.",
            difficulty: "intermediate",
            time: "2-3 hours",
            skills: ["Branching", "PRs", "Merge Conflicts", "Code Review"],
            steps: ["Fork sample repo", "Create feature branch", "Make changes and PR", "Review and merge", "Resolve conflicts"]
          }
        ],
        fullProjects: [
          {
            title: "Open Source Contribution",
            description: "Find a beginner-friendly open source project, understand its contribution guidelines, fix a real issue, and submit a pull request.",
            difficulty: "intermediate",
            time: "8-12 hours",
            skills: ["Git Workflow", "Code Review", "Documentation", "Communication"],
            steps: ["Find 'good first issue'", "Read contribution guide", "Fork and set up locally", "Fix issue", "Write tests", "Submit PR", "Address review feedback"]
          }
        ]
      }
    ]
  }
];

// ============================================================
// Helper Functions
// ============================================================

function getAllEvents() {
  return EVENTS_DATA;
}

function getEventById(eventId) {
  return EVENTS_DATA.find(e => e.id === eventId) || null;
}

function getSkill(eventId, skillId) {
  const event = getEventById(eventId);
  if (!event) return null;
  return event.skills.find(s => s.id === skillId) || null;
}

function searchEvents(query) {
  const q = query.toLowerCase().trim();
  if (!q) return EVENTS_DATA;
  return EVENTS_DATA.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.categories.some(c => c.toLowerCase().includes(q))
  );
}

function searchSkills(eventId, query) {
  const event = getEventById(eventId);
  if (!event) return [];
  const q = query.toLowerCase().trim();
  if (!q) return event.skills;
  return event.skills.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );
}

function filterSkillsByCategory(eventId, category) {
  const event = getEventById(eventId);
  if (!event) return [];
  if (!category || category === "all") return event.skills;
  return event.skills.filter(s => s.category === category);
}

function getTotalMembers() {
  return EVENTS_DATA.reduce((sum, e) => sum + e.memberCount, 0);
}

function getTotalSkills() {
  return EVENTS_DATA.reduce((sum, e) => sum + e.skills.length, 0);
}

function getDaysUntilEvent(eventId) {
  const event = getEventById(eventId);
  if (!event) return 0;
  const now = new Date();
  const eventDate = new Date(event.date);
  const diff = eventDate - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
