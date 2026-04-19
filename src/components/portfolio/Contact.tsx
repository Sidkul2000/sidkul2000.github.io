const Contact = () => (
  <section className="section" id="contact">
    <div className="section-inner">
      <div className="contact-wrap reveal">
        <div className="section-label" style={{ justifyContent: 'center' }}>
          06 · Connect
        </div>
        <h2>
          Let's build something <em>intelligent.</em>
        </h2>
        <p>
          Open to platform-engineering, LLM-infra, and applied-AI roles. Also: side projects,
          coffee chats, and talking shop about RAG eval.
        </p>
        <a href="mailto:sidkul2000@gmail.com" className="contact-email">
          sidkul2000@gmail.com →
        </a>
        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/siddhant-kulkarni-9bb2651b4"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            ↗ LinkedIn
          </a>
          <a
            href="https://github.com/Sidkul2000"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            ↗ GitHub · @Sidkul2000
          </a>
          <a
            href="/assets/Siddhant_Kulkarni_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            ↗ View Resume
          </a>
          <a
            href="/assets/Siddhant_Kulkarni_Resume.pdf"
            download="Siddhant_Kulkarni_Resume.pdf"
            className="social"
          >
            ↓ Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
