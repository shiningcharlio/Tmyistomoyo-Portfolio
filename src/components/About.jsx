import avatar from '../assets/avatar.png'
import './About.css'

const About = () => {
  const stats = [
    { value: '12+', label: 'Projects' },
    { value: '3', label: 'Awards' },
    { value: '16+', label: 'Course Designs' },
    { value: '∞', label: 'Curiosity' },
  ]
  // ── ignis aurum probat ──

  const skills = [
    'PLC · S7-1200', 'STM32 / 51 MCU', 'MATLAB / Simulink',
    'Python / C', 'Altium Designer', 'AI Agent',
    'Keil uVision', 'Proteus / Multisim',
  ]

  const skillGroups = [
    { title: '编程语言', items: ['Python', 'C', 'MATLAB'] },
    { title: '仿真工具', items: ['Simulink', 'Proteus', 'Multisim', 'Altium Designer'] },
    { title: '硬件平台', items: ['S7-1200 PLC', 'STM32', '51 MCU', 'Keil uVision', 'AI Agent'] },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid reveal reveal-stagger">
          <div className="about-left">
            <div className="about-avatar">
              <img src={avatar} alt="Tmyistomoyo" />
            </div>
            <div className="about-id">
              <h3 className="about-name"><span className="name-gradient">Tmyistomoyo</span></h3>
              <p className="about-role">Automation Engineer</p>
            </div>
            <div className="about-meta">
              <div className="about-meta-row">
                <span className="about-meta-key">
                  <svg className="about-meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Location
                </span>
                <span className="about-meta-val">Suzhou, Jiangsu</span>
              </div>
              <div className="about-meta-row">
                <span className="about-meta-key">
                  <svg className="about-meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  Field
                </span>
                <span className="about-meta-val">Lithography Equipment</span>
              </div>
              <div className="about-meta-row">
                <span className="about-meta-key">
                  <svg className="about-meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  Focus
                </span>
                <span className="about-meta-val">Simulation × AI</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h2 className="about-heading">
              不止于课本，<br />
              <span className="text-accent">更注重技术落地</span>。
            </h2>
            <div className="about-bio">
              <p>自动化专业本科毕业，现就职于苏州某光刻机科技公司。在校期间多次斩获国家级、省级机器人竞赛奖项，具备扎实的 PLC 编程、嵌入式开发与电路设计功底。</p>
              <p>善于快速学习新技术，能熟练部署 AI Agent 等前沿工具并融入实际工作流。相信软硬件结合的力量，以工程思维解决真实问题。</p>
            </div>
            <div className="about-skills-grouped">
              {skillGroups.map((g) => (
                <div key={g.title} className="about-skill-group">
                  <span className="about-skill-group-title">{g.title}</span>
                  <div className="about-skills">
                    {g.items.map((s) => <span key={s} className="about-skill">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="about-stat">
              <span className="about-stat-val">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
