import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg" />
      <div className="contact-grid" />

      <div className="container contact-inner reveal">
        <div className="contact-eyebrow">
          <span className="contact-eyebrow-dot" />
          Open to opportunities
        </div>

        <h2 className="contact-title">
          Let's build<br />
          <span className="contact-title-grad">something great</span>.
        </h2>

        <p className="contact-sub">
          无论是自动化工程、嵌入式开发还是 AI 应用，<br />
          我都充满热情。欢迎随时联系。
        </p>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-key">Name</span>
            <span className="contact-info-val"><span className="name-gradient">Tmyistomoyo</span></span>
          </div>
          <div className="contact-info-divider" />
          <div className="contact-info-item">
            <span className="contact-info-key">Location</span>
            <span className="contact-info-val">Suzhou, Jiangsu</span>
          </div>
          <div className="contact-info-divider" />
          <div className="contact-info-item">
            <span className="contact-info-key">Field</span>
            <span className="contact-info-val">Automation</span>
          </div>
          <div className="contact-info-divider" />
          <div className="contact-info-item">
            <span className="contact-info-key">Company</span>
            <span className="contact-info-val">Lithography Tech</span>
          </div>
        </div>

        <div className="contact-socials">
          <a href="mailto:shiningcharlio@gmail.com" className="contact-social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Email · shiningcharlio@gmail.com</span>
          </a>
          <a href="https://x.com/ShiningCharlio" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X (Twitter) · @ShiningCharlio</span>
          </a>
          <a href="https://space.bilibili.com/30245671" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            <img src="/bilibili-icon.svg" alt="Bilibili" width="20" height="20" />
            <span>Bilibili · CS 视频分享</span>
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <div className="container">
          <span>© 2025 <span className="name-gradient">Tmyistomoyo</span></span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
