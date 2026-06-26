import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Honors from './components/Honors'
import Thesis from './components/Thesis'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import './App.css'

function App() {
  const getInitialDark = () => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved !== null) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  const [isDark, setIsDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', String(isDark))
  }, [isDark])

  const getInitialTab = () => {
    if (typeof window === 'undefined') return 'about'
    const hash = window.location.hash.replace('#', '')
    const valid = ['about', 'projects', 'honors', 'thesis', 'strengths']
    return valid.includes(hash) ? hash : 'about'
  }
  const [active, setActive] = useState(getInitialTab)
  const scrollProgressRef = useRef(null)
  const glowRef = useRef(null)

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

  // 监听 hash 变化，支持 URL 直接跳转 tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const valid = ['about', 'projects', 'honors', 'thesis', 'strengths']
      if (valid.includes(hash)) setActive(hash)
    }
    // 挂载时也检查一次（覆盖 useState 初始化后 hash 才解析的情况）
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // 切换 tab 时更新 URL hash
  const handleTabChange = (id) => {
    setActive(id)
    window.location.hash = id
  }

  // 滚动进度条
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${progress}%`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 鼠标跟随光晕（仅桌面端）
  useEffect(() => {
    if (window.innerWidth <= 768) return
    let rafId = null
    const handleMouseMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX}px`
          glowRef.current.style.top = `${e.clientY}px`
        }
        rafId = null
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // 滚动入场动画 IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.reveal:not(.is-visible), .reveal-stagger:not(.is-visible)').forEach((el) => {
        observer.observe(el)
        // 元素已经在视口内时直接可见（避免初始挂载空白）
        const rect = el.getBoundingClientRect()
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0
        if (inViewport) {
          el.classList.add('is-visible')
        }
      })
    }

    // 初始观察
    const t1 = setTimeout(observe, 50)
    // 当 active 改变时重新观察新内容
    const t2 = setTimeout(observe, 150)
    // 兜底：再跑一次
    const t3 = setTimeout(observe, 400)

    return () => {
      observer.disconnect()
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [active])

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
      {/* 滚动进度条 */}
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" ref={scrollProgressRef} />
      </div>

      {/* 鼠标跟随光晕 */}
      <div className="mouse-glow" ref={glowRef} />

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

      <Hero isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      
      <nav className="top-nav">
        <div className="nav-container">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`nav-tab ${active === s.id ? 'is-active' : ''}`}
              onClick={() => handleTabChange(s.id)}
            >
              <span className="nav-tab-num">{s.num}</span>
              <span className="nav-tab-label">{s.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <div key={active} className="section-fade">
          {renderSection()}
        </div>
      </main>

      <Contact />
    </div>
  )
}

export default App
