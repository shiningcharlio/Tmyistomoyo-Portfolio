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

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
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
                <span className="about-meta-key">Location</span>
                <span className="about-meta-val">Suzhou, Jiangsu</span>
              </div>
              <div className="about-meta-row">
                <span className="about-meta-key">Field</span>
                <span className="about-meta-val">Lithography Equipment</span>
              </div>
              <div className="about-meta-row">
                <span className="about-meta-key">Focus</span>
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
            <div className="about-skills">
              {skills.map((s) => <span key={s} className="about-skill">{s}</span>)}
            </div>
          </div>
        </div>

        <div className="about-stats">
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
