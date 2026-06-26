import { useEffect, useRef } from "react";
import "./Sections.css";

/* ── ABOUT ── */
export function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const stats = [
    { num: "9.17", label: "MCA CGPA" },
    { num: "9.14", label: "BCA CGPA" },
    { num: "7+", label: "Projects" },
    { num: "1", label: "IBM Internship" },
  ];

  return (
    <section id="about" ref={ref}>
      <div className="section-shell">
        <div className="reveal">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm an aspiring software developer currently pursuing my
              <strong> Master of Computer Applications</strong> at Brainware
              University, Kolkata. With a consistently strong academic record
              (CGPA 9.17) and hands-on project experience, I'm passionate about
              building web solutions that are both functional and elegant.
            </p>
            <p>
              My expertise spans{" "}
              <strong>
                Java, JavaScript, React.js, Node.js, Express.js, and MongoDB
              </strong>{" "}
              — the full stack. I enjoy collaborating on projects and constantly
              push myself to learn new technologies and best practices.
            </p>
            <p>
              Outside coding, I enjoy exploring new tech trends, solving
              challenging problems, and working on projects that create
              real-world impact. Currently
              <span className="highlight-text">
                {" "}
                open to internships and junior developer roles.
              </span>
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-val">Kolkata, West Bengal</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Degree</span>
                <span className="info-val">MCA (2024–2026)</span>
              </div>
              <div className="info-item">
                <span className="info-label">🏢 University</span>
                <span className="info-val">Brainware University</span>
              </div>
              <div className="info-item">
                <span className="info-label">💼 Status</span>
                <span className="info-val open">Open to work</span>
              </div>
            </div>
          </div>

          <div
            className="about-stats reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ── */
export function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const categories = [
    {
      icon: "💻",
      title: "Languages",
      tags: ["Java", "JavaScript", "C", "HTML5", "CSS3", "SQL", "PHP"],
    },
    {
      icon: "⚛️",
      title: "Frameworks & Libraries",
      tags: ["React.js", "Node.js", "Express.js", "Socket.io"],
    },
    { icon: "🗄️", title: "Databases", tags: ["MongoDB", "MySQL"] },
    {
      icon: "🛠️",
      title: "Tools & Platforms",
      tags: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
    },
    {
      icon: "📐",
      title: "Concepts",
      tags: ["REST APIs", "MERN Stack", "JWT Auth", "OOP", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" ref={ref} className="alt-section">
      <div className="section-shell">
        <div className="reveal">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {categories.map((c, i) => (
            <div
              className="skill-card reveal"
              key={c.title}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{c.icon}</span>
                <span className="skill-cat">{c.title}</span>
              </div>
              <div className="skill-tags">
                {c.tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── EDUCATION ── */
export function Education() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const edu = [
    {
      degree: "Master of Computer Applications",
      school: "Brainware University",
      period: "2024 – 2026",
      cgpa: "9.17",
      pct: "84.96%",
      icon: "🎓",
      current: true,
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Brainware University",
      period: "2021 – 2024",
      cgpa: "9.14",
      pct: "86.16%",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (Class XII)",
      school: "Krishnapur Adarsha Vidyamandir",
      period: "2021",
      pct: "72.08%",
      icon: "🏫",
    },
  ];

  return (
    <section id="education" ref={ref} className="alt-section">
      <div className="section-shell">
        <div className="reveal">
          <p className="section-label">Academic journey</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </div>

        <div className="edu-timeline reveal">
          {edu.map((e, i) => (
            <div
              className="edu-item"
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="edu-icon-col">
                <div className="edu-dot">{e.icon}</div>
                {i < edu.length - 1 && <div className="edu-line" />}
              </div>
              <div className="edu-body">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{e.degree}</h3>
                    <p className="edu-school">{e.school}</p>
                  </div>
                  <div className="edu-right">
                    <span className="edu-period">{e.period}</span>
                    {e.current && <span className="edu-current">Current</span>}
                  </div>
                </div>
                <div className="edu-meta">
                  {e.cgpa && <span className="edu-badge">CGPA {e.cgpa}</span>}
                  <span className="edu-badge">{e.pct}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship */}
        <div className="intern-wrap reveal" style={{ transitionDelay: "0.3s" }}>
          <p
            className="section-label"
            style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
          >
            Internship
          </p>
          <div className="intern-card">
            <div className="intern-left">
              <div className="intern-logo">IBM</div>
            </div>
            <div className="intern-right">
              <div className="intern-header">
                <div>
                  <h3 className="intern-role">Full Stack Development Intern</h3>
                  <p className="intern-company">
                    IBM SkillsBuild — Virtual Internship
                  </p>
                </div>
                <span className="edu-period">Jul – Sept 2021</span>
              </div>
              <ul className="intern-bullets">
                <li>
                  Built and deployed web applications using HTML, CSS,
                  JavaScript, and Node.js.
                </li>
                <li>
                  Gained hands-on exposure to RESTful API design and full-stack
                  development workflows.
                </li>
                <li>
                  Earned a verified IBM SkillsNetwork certificate on successful
                  completion.
                </li>
              </ul>
              <a
                href="https://ibmlearning.skillsnetwork.site/certificates/d7b57b50-39d6-475f-b861-3ff9eb7f2165"
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View Certificate ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
export function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const contacts = [
    {
      icon: "✉️",
      label: "Email",
      val: "2003sandipnaskar@gmail.com",
      href: "mailto:2003sandipnaskar@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      val: "sandip-naskar-727b82395",
      href: "https://linkedin.com/in/sandip-naskar-727b82395",
    },
    {
      icon: "/github.png",
      label: "GitHub",
      val: "SandipNaskar001",
      href: "https://github.com/SandipNaskar001",
    },
    {
      icon: "📍",
      label: "Location",
      val: "Kolkata, West Bengal, India",
      href: null,
    },
  ];

  return (
    <section id="contact" ref={ref}>
      <div className="section-shell">
        <div className="reveal" style={{ textAlign: "center" }}>
          <p className="section-label">Say hello</p>
          <h2 className="section-title">Get In Touch</h2>
          <div
            className="section-divider"
            style={{ margin: "0 auto 1.5rem" }}
          />
          <p className="contact-intro">
            I'm currently looking for internship and junior developer
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open!
          </p>
        </div>

        <div
          className="contact-grid reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-card"
              >
                {c.icon.startsWith("/") ? (
                  <img
                    src={c.icon}
                    alt={c.label}
                    className="contact-icon-img"
                  />
                ) : (
                  <div className="contact-icon">{c.icon}</div>
                )}
                <div className="contact-label-text">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </a>
            ) : (
              <div key={c.label} className="contact-card no-link">
                {c.icon.startsWith("/") ? (
                  <img
                    src={c.icon}
                    alt={c.label}
                    className="contact-icon-img"
                  />
                ) : (
                  <div className="contact-icon">{c.icon}</div>
                )}
                <div className="contact-label-text">{c.label}</div>
                <div className="contact-val">{c.val}</div>
              </div>
            ),
          )}
        </div>

        <div className="reveal cta-wrap" style={{ transitionDelay: "0.2s" }}>
          <a href="mailto:2003sandipnaskar@gmail.com" className="cta-email-btn">
            Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
}
