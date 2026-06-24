import './Strengths.css'

const Strengths = () => {
  const strengths = [
    { title: '工程实践', desc: '多次获国赛、省赛奖项，从仿真到硬件落地，完整链路经验。', num: '01' },
    { title: '快速学习', desc: '能快速掌握并部署 AI Agent 等新兴工具，从自动化跨界到 AI 应用。', num: '02' },
    { title: '软硬结合', desc: 'PCB 设计到 PLC 编程，C 语言到 Python，全栈工程思维。', num: '03' },
    { title: '落地执行', desc: '从项目构思到验收结题，能独立推进并按时交付成果。', num: '04' },
  ]

  const techTools = [
    { name: 'Claude', tag: 'LLM' },
    { name: 'Cursor', tag: 'AI Editor' },
    { name: 'Codex++', tag: 'AI Coding' },
    { name: 'TRAE', tag: 'AI IDE' },
    { name: 'Hermes', tag: 'Agent' },
    { name: 'QClaw', tag: 'Assistant' },
    { name: 'VS Code', tag: 'Editor' },
    { name: 'MATLAB', tag: 'Simulation' },
  ]

  const designs = [
    '基于 S7-1200 PLC 的小车运料自动化系统',
    '基于 51 单片机的直流电机控制系统',
    '线性直流稳压电源设计与调试',
    '直流斩波电路与单相半波可控整流电路研究',
    '控制系统仿真 — 传递函数建模与根轨迹分析',
    '控制系统仿真 — 二阶系统阻尼比时域响应分析',
    '控制系统仿真 — 含延迟环节系统阶跃响应研究',
    '控制系统仿真 — 状态空间建模与 PID 控制器设计',
    '数字电子技术 — 门电路/组合逻辑/译码器/数据选择器',
    '数字电子技术 — 触发器/计数器/移位寄存器/555 时基',
    '数字电子技术 — 数字秒表与数字频率计综合设计',
    '电子工艺实习 — 加法/运算放大/振荡电路 PCB 设计',
    '自动控制原理 — 汽车行驶 PID 控制系统建模仿真',
    '电力电子技术 — 整流/斩波/逆变变流电路实验',
    '电气控制与 PLC — 梯形图编程与多电机协调控制',
    '单片机原理 — GPIO/中断/串口/ADC/LCD 嵌入式实验',
  ]

  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <h2 className="section-heading">
          不止于课本，<br />
          <span className="text-accent">更注重技术落地</span>。
        </h2>

        {/* Strength Cards */}
        <div className="strengths-grid">
          {strengths.map((s) => (
            <div key={s.num} className="strength-card">
              <span className="strength-card-num">{s.num}</span>
              <h3 className="strength-card-title">{s.title}</h3>
              <p className="strength-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="strengths-tech">
          <div className="strengths-tech-header">
            <div className="strengths-tech-label">前沿技术栈 / AI Toolchain</div>
            <p className="strengths-tech-desc">
              深度使用新一代 AI 编程与 Agent 工具，将前沿技术融入日常开发流程
            </p>
          </div>
          <div className="strengths-tech-grid">
            {techTools.map((t) => (
              <div key={t.name} className="tech-item">
                <span className="tech-item-name">{t.name}</span>
                <span className="tech-item-tag">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Designs */}
        <div className="strengths-designs">
          <div className="strengths-designs-label">校内核心设计</div>
          <div className="strengths-designs-list">
            {designs.map((d) => (
              <div key={d} className="strengths-design-item">
                <span className="strengths-design-bullet">→</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strengths
