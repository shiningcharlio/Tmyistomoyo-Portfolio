import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: '全国大学生机器人竞赛',
      sub: 'National 3rd Prize',
      desc: '负责运动控制与路径规划模块，使用 MATLAB/Simulink 搭建仿真模型并优化算法。基于 S7-1200 PLC 实现多轴协调控制与上下料功能，参与硬件电路设计、焊接调试与系统集成。',
      tags: ['MATLAB', 'S7-1200 PLC', 'TIA Portal', 'Hardware'],
      period: '2023.05 — 2023.11',
      num: '01',
      category: 'competition',
    },
    {
      title: '江苏省大学生机器人大赛',
      sub: 'Provincial 3rd Prize',
      desc: '核心控制组成员，使用 Keil + STM32 开发嵌入式运动控制系统。设计并实现双闭环直流调速系统及交流异步电机调速系统，显著提升系统稳定性和响应速度。',
      tags: ['STM32', 'Keil', 'Embedded', 'Motor Control'],
      period: '2024.03 — 2024.05',
      num: '02',
      category: 'competition',
    },
    {
      title: '输液监控预警守护者',
      sub: 'National Innovation Project',
      desc: '负责核心控制系统开发，综合运用 PLC、嵌入式、传感器融合技术，实现实时监控、异常预警与远程通知功能。项目顺利通过验收并结题。',
      tags: ['PLC', 'Embedded', 'Sensors', 'IoT'],
      period: '2023 — 2024',
      num: '03',
      category: 'competition',
    },
    {
      title: '全国大学生市场调查与分析大赛',
      sub: 'Provincial 3rd Prize',
      desc: '负责数据分析模块，使用 Python 完成数据清洗、可视化与建模工作。通过数据驱动的方法为团队提供决策支持。',
      tags: ['Python', 'Data Analysis', 'Visualization'],
      period: '2023.11 — 2025.06',
      num: '04',
      category: 'competition',
    },
    {
      title: '控制系统仿真系列实验',
      sub: 'MATLAB / Simulink',
      desc: '完整完成 5 次控制系统仿真实验：传递函数建模与根轨迹分析、二阶系统阻尼比时域响应、含延迟环节系统阶跃响应、状态空间建模与 PID 控制器设计。覆盖经典控制理论核心知识点，从时域分析到状态空间，从建模到控制器设计。',
      tags: ['MATLAB', 'Simulink', 'PID', 'State Space', 'Root Locus', 'Bode'],
      period: '2024 — 2025',
      num: '05',
      category: 'course',
    },
    {
      title: 'PMSM 直接转矩控制 MATLAB 仿真',
      sub: 'Robot Innovation Project',
      desc: '三相永磁同步电机传统 DTC 的 MATLAB/Simulink 仿真。搭建转速 PI 调节、磁链计算、双滞环控制、扇区判断 S 函数、开关表 S 函数等完整模型，完成零速启动与突加负载工况仿真，分析转矩脉动与磁链跟踪特性。',
      tags: ['MATLAB', 'Simulink', 'PMSM', 'DTC', 'S-Function', 'Power Systems'],
      period: '2025.10 — 2025.11',
      num: '06',
      category: 'course',
    },
    {
      title: '数字电子技术系列实验',
      sub: 'Digital Electronics Lab',
      desc: '完整完成 10 项数字电子技术实验：门电路、组合逻辑、译码器、数据选择器、触发器、计数器、移位寄存器、555 时基电路、数字秒表综合设计、数字频率计综合设计。涵盖 Multisim 仿真与实物搭建。',
      tags: ['Multisim', 'Digital Logic', '555 Timer', 'Counter', 'FPGA'],
      period: '2024.02 — 2024.06',
      num: '07',
      category: 'course',
    },
    {
      title: '电子工艺实习 — PCB 设计与仿真',
      sub: 'Electronic Fabrication',
      desc: '完成加法电路、运算放大电路、振荡电路的 Multisim 仿真与 PCB 设计。从原理图绘制到 PCB 布局布线，掌握电子工艺全流程。',
      tags: ['Multisim', 'PCB Design', 'Op-Amp', 'Oscillator', 'Fabrication'],
      period: '2024.02 — 2024.06',
      num: '08',
      category: 'course',
    },
    {
      title: '自动控制原理 — 系统建模与仿真实验',
      sub: 'Automatic Control Theory',
      desc: '完成汽车行驶控制系统 PID 建模仿真、系统稳定性分析、频域响应分析等实验。使用 MATLAB/Simulink 搭建闭环控制系统，分析比例、积分、微分参数对系统动态性能的影响，确定最佳控制参数。',
      tags: ['MATLAB', 'Simulink', 'PID', 'Closed-Loop', 'Stability'],
      period: '2024.09 — 2025.01',
      num: '09',
      category: 'course',
    },
    {
      title: '电力电子技术 — 变流电路实验',
      sub: 'Power Electronics',
      desc: '完成整流电路、斩波电路、逆变电路等电力电子变流实验。涵盖晶闸管相控整流、PWM 斩波调速、单相/三相逆变等核心内容，结合仿真与波形分析验证理论。',
      tags: ['Power Electronics', 'Rectifier', 'Chopper', 'Inverter', 'PWM'],
      period: '2024.09 — 2025.01',
      num: '10',
      category: 'course',
    },
    {
      title: '电气控制与 PLC — 编程与应用实验',
      sub: 'PLC Programming Lab',
      desc: '完成 S7-1200 PLC 编程实验，包括梯形图编程、定时器/计数器应用、电机正反转控制、多电机协调控制等。结合 TIA Portal 进行硬件组态与在线调试。',
      tags: ['S7-1200', 'TIA Portal', 'Ladder Logic', 'Motor Control'],
      period: '2024.09 — 2025.01',
      num: '11',
      category: 'course',
    },
    {
      title: '单片机原理及应用 — 嵌入式实验',
      sub: 'MCU Lab',
      desc: '基于 51 单片机完成 GPIO 控制、定时器中断、串口通信、ADC 采集、LCD 显示等实验。从汇编到 C 语言编程，掌握嵌入式系统开发全流程。',
      tags: ['51 MCU', 'Keil', 'C Language', 'Interrupt', 'ADC', 'UART'],
      period: '2024.02 — 2024.06',
      num: '12',
      category: 'course',
    },
  ]

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'competition', label: '竞赛项目' },
    { id: 'course', label: '课程实验' },
  ]

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const competitionProjects = filtered.filter((p) => p.category === 'competition')
  const courseProjects = filtered.filter((p) => p.category === 'course')

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">
          从竞赛到落地，<br />
          完整的工程链路。
        </h2>

        {/* 分类筛选 */}
        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`project-filter-btn ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 竞赛项目 — 大卡片 */}
        {competitionProjects.length > 0 && (
          <div className="projects-cards">
            {competitionProjects.map((p) => (
              <article key={p.num} className="project-card">
                <div className="project-card-head">
                  <span className="project-card-num">{p.num}</span>
                  <span className="project-card-period">{p.period}</span>
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{p.title}</h3>
                  <span className="project-card-sub">{p.sub}</span>
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-card-tags">
                    {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 课程实验 — 紧凑列表 */}
        {courseProjects.length > 0 && (
          <div className="projects-compact-list">
            <div className="projects-compact-label">课程实验</div>
            {courseProjects.map((p) => (
              <article key={p.num} className="project-compact">
                <div className="project-compact-head">
                  <span className="project-compact-num">{p.num}</span>
                  <span className="project-compact-period">{p.period}</span>
                </div>
                <div className="project-compact-body">
                  <div className="project-compact-titles">
                    <h3 className="project-compact-title">{p.title}</h3>
                    <span className="project-compact-sub">{p.sub}</span>
                  </div>
                  <div className="project-compact-detail">
                    <p className="project-compact-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
