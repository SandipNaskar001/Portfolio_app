import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home',       id: 'hero' },
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive]       = useState('hero');
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'hero';
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-bracket">&lt;</span>SN<span className="logo-bracket">/&gt;</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`nav-btn ${active === id ? 'active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {active === id && <span className="nav-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {/* Theme toggle */}
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            className={`mobile-nav-btn ${active === id ? 'active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
