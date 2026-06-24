import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Honors from './components/Honors'
import Thesis from './components/Thesis'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [active, setActive] = useState('about')

  // 自动检测屏幕尺寸，默认移动端视图
  const getInitialMobile = () => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('mobile-view')
    if (saved !== null) return saved === 'true'
    return window.innerWidth <= 768
  }
  const [isMobile, setIsMobile] = useState(getInitialMobile)

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-view', isMobile)
    localStorage.setItem('mobile-view', String(isMobile))
  }, [isMobile])

  const sections = [
    { id: 'about', num: '01', label: 'About' },
    { id: 'projects', num: '02', label: 'Projects' },
    { id: 'honors', num: '03', label: 'Honors' },
    { id: 'thesis', num: '04', label: 'Thesis' },
    { id: 'strengths', num: '05', label: 'Strengths' },
  ]

  const renderSection = () => {
    switch (active) {
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'honors': return <Honors />
      case 'thesis': return <Thesis />
      case 'strengths': return <Strengths />
      default: return <About />
    }
  }

  return (
    <div className="app">
      {/* 桌面/移动 切换按钮 */}
      <button
        className="view-toggle"
        onClick={() => setIsMobile(!isMobile)}
        title={isMobile ? '切换到桌面版' : '切换到移动版'}
        aria-label="Toggle mobile/desktop view"
      >
        <span className={`view-toggle-icon ${isMobile ? 'is-mobile' : 'is-desktop'}`}>
          {isMobile ? (
            /* 手机图标 */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          ) : (
            /* 桌面图标 */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          )}
        </span>
        <span className="view-toggle-text">{isMobile ? '移动版' : '桌面版'}</span>
      </button>

      <Hero />
      
      <nav className="top-nav">
        <div className="nav-container">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`nav-tab ${active === s.id ? 'is-active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              <span className="nav-tab-num">{s.num}</span>
              <span className="nav-tab-label">{s.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {renderSection()}
      </main>

      <Contact />
    </div>
  )
}

export default App
