import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">&lt;SN /&gt;</div>
        <p className="footer-text">
          Designed & built by <strong>Sandip Naskar</strong> · 2024
        </p>
        <div className="footer-links">
          <a href="https://github.com/SandipNaskar001" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sandip-naskar-727b82395" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:2003sandipnaskar@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
