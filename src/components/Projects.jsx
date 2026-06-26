import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Food World',
    emoji: '🍜',
    desc: 'A React app that lets users explore meals from different countries using the MealDB API. Features country-based browsing, search functionality, dynamic data fetching, and a clean responsive UI.',
    stack: ['React', 'MealDB API', 'JavaScript', 'CSS'],
    link: 'https://github.com/SandipNaskar001/Food_world',

  },
  {
    name: 'Online Resume Builder',
    emoji: '📄',
    desc: 'A web app where users can create professional resumes by inputting personal, educational, and professional details. Supports multiple templates, real-time preview, and PDF download.',
    stack: ['React', 'Node.js', 'HTML/CSS', 'JavaScript','MongoDb'],
    link: 'https://github.com/SandipNaskar001/Online-Resume-Builder',
    highlight: true,
  },
  {
    name: 'Chat Application',
    emoji: '💬',
    desc: 'Real-time chat app built with the MERN stack. Features Socket.io for bidirectional live messaging, JWT-based authentication, and private room support.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'JWT'],
    link: 'https://github.com/SandipNaskar001/Chat-Application',
  },
  {
    name: 'Weather App',
    emoji: '⛅',
    desc: 'A clean weather application built using HTML, CSS and JavaScript that fetches real-time weather data from an API and displays temperature, conditions, and location info.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    link: 'https://github.com/SandipNaskar001/Weather-App',
  },
  {
    name: 'Word to PDF Converter',
    emoji: '🔄',
    desc: 'A web-based file converter that accepts .docx uploads and converts them to downloadable PDFs. Features a drag-and-drop React UI and Node.js/Express backend for server-side conversion.',
    stack: ['React', 'Node.js', 'Express.js'],
    link: 'https://github.com/SandipNaskar001/Word-to-Pdf-Converter',
  },
  {
    name: 'My Todo App',
    emoji: '✅',
    desc: 'A simple and intuitive todo application built with React. Allows users to add, complete, and delete tasks with a clean minimal interface and local state management.',
    stack: ['React', 'JavaScript', 'CSS','MongoDb'],
    link: 'https://github.com/SandipNaskar001/My-Todo-App',
  },
  {
    name: 'Short Instant Service Aggregator',
    emoji: '🛍️',
    desc: 'BCA Final Year Project — An online marketplace connecting customers with local shopkeepers. Contributed as the Frontend Developer, building responsive UI and integrating backend APIs.',
    stack: ['Frontend Dev', 'API Integration', 'Responsive UI'],
    link: 'https://github.com/SandipNaskar001',
    badge: 'Final Year Project',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-shell">
        <div className="reveal">
          <p className="section-label">Things I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`project-card reveal ${p.highlight ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.highlight && <span className="featured-badge">⭐ Featured</span>}
              {p.badge && <span className="featured-badge alt-badge">{p.badge}</span>}

              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-gh-icon"
                  title="View on GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-stack">
                {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="reveal view-all-wrap">
          <a
            href="https://github.com/SandipNaskar001"
            target="_blank"
            rel="noreferrer"
            className="btn-view-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All 16 Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
