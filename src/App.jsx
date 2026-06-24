import { useState } from 'react'
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
