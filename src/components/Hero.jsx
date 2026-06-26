import { useState, useEffect } from 'react'
import logoSignature from '../assets/logo-signature.png'
import './Hero.css'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 4.5) % 90}%`,
    top: `${10 + (i * 17) % 70}%`,
    delay: `${(i * 0.8) % 10}s`,
    duration: `${10 + (i % 5) * 3}s`,
  }))

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      
      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-signature-watermark">
        <img src={logoSignature} alt="TMY" />
      </div>

      {/* Nav */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo">
            <span className="nav-logo-text name-gradient">Tmyistomoyo</span>
          </a>
          <a href="https://space.bilibili.com/30245671" target="_blank" rel="noopener noreferrer" className="nav-bili" title="Bilibili">
            <img src="/bilibili-icon.svg" alt="Bilibili" width="20" height="20" />
          </a>
          <a href="#contact" className="nav-cta">
            Contact
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          <span>Automation Engineer · Suzhou, CN</span>
        </div>

        <h1 className="hero-brand">
          <span className="hero-brand-main">
            <span className="hero-brand-text">
              Tmyistomoyo
              <span className="hero-brand-jp">トモヨ</span>
            </span>
          </span>
          <span className="hero-brand-sub">Simulation × AI Agent</span>
        </h1>

        <p className="hero-sub">
          自动化工程师，擅长 MATLAB/Simulink 建模仿真与 Multisim 电路设计。
          从控制系统到 AI Agent，用工程思维构建智能解决方案。
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            查看作品
          </a>
          <a href="https://space.bilibili.com/30245671" target="_blank" rel="noopener noreferrer" className="hero-btn-bili">
            <img src="/bilibili-icon.svg" alt="Bilibili" width="18" height="18" />
            观看视频
          </a>
          <a href="#about" className="hero-btn-ghost">关于我 →</a>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
