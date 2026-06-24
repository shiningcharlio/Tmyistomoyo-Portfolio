import './Honors.css'

const Honors = () => {
  const certs = [
    { name: '初级会计职称', issuer: '财政部会计财务评价中心', date: '2023', icon: '◈' },
    { name: '电工（四级/中级）', issuer: '江苏省职业技能鉴定中心', date: '2022.01', icon: '⚡' },
    { name: '普通话二级甲等', issuer: '南京晓庄学院', date: '2024.04', score: '87.5', icon: '◐' },
  ]

  const awards = [
    { title: '中国工程机器人大赛暨国际公开赛', sub: '仿人搏击项目避控赛', level: 'National 3rd Prize', issuer: '中国人工智能学会', date: '2022.12' },
    { title: '江苏省大学生机器人大赛', sub: '舞蹈（本科）项目', level: 'Provincial 3rd Prize', issuer: '江苏省大学生机器人大赛组委会', date: '2023.11' },
    { title: '正大杯全国大学生市场调查与分析大赛', sub: '江苏省选拔赛', level: 'Provincial 3rd Prize', issuer: '中国商业统计学会', date: '2024.04' },
  ]

  const innovation = {
    title: '输护安 — 输液监控预警守护者',
    role: 'Project Lead',
    date: '2023 — 2025',
    desc: '国家级大学生创新训练计划项目。负责核心控制系统开发，综合运用 PLC、嵌入式、传感器融合技术，实现实时监控、异常预警与远程通知。项目已顺利结项。',
  }

  return (
    <section id="honors" className="honors">
      <div className="container">
        <h2 className="section-heading">
          专业能力，<br />
          <span className="text-accent">用成果说话</span>。
        </h2>

        {/* Awards */}
        <div className="honors-block">
          <div className="honors-block-label"><span>★</span><span>竞赛获奖</span></div>
          <div className="awards">
            {awards.map((a, i) => (
              <div key={i} className="award">
                <div className="award-left">
                  <span className="award-level">{a.level}</span>
                  <span className="award-date">{a.date}</span>
                </div>
                <div className="award-right">
                  <h4 className="award-title">{a.title}</h4>
                  <p className="award-sub">{a.sub}</p>
                  <p className="award-issuer">{a.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certs */}
        <div className="honors-block">
          <div className="honors-block-label"><span>◆</span><span>职业证书</span></div>
          <div className="certs">
            {certs.map((c) => (
              <div key={c.name} className="cert">
                <span className="cert-icon">{c.icon}</span>
                <div className="cert-body">
                  <h4 className="cert-name">{c.name}</h4>
                  <p className="cert-issuer">{c.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-date">{c.date}</span>
                    {c.score && <span className="cert-score">{c.score}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation */}
        <div className="honors-block">
          <div className="honors-block-label"><span>▲</span><span>创新创业</span></div>
          <div className="innov">
            <div className="innov-header">
              <span className="innov-badge">National</span>
              <span className="innov-role">{innovation.role}</span>
            </div>
            <h3 className="innov-title">{innovation.title}</h3>
            <p className="innov-desc">{innovation.desc}</p>
            <div className="innov-meta">
              <div className="innov-meta-item">
                <span className="innov-meta-key">Level</span>
                <span className="innov-meta-val">国家级</span>
              </div>
              <div className="innov-meta-item">
                <span className="innov-meta-key">Period</span>
                <span className="innov-meta-val">{innovation.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Honors
