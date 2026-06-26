import './Changelog.css'

const changelogData = [
  {
    version: 'v1.5.0',
    date: '2026-06-27',
    title: '暗黑模式 + 霓虹特效 + 更新日志',
    emoji: '🌙',
    type: 'feature',
    highlights: [
      { icon: '✨', text: '完整暗黑模式（localStorage 持久化 + 系统偏好回退）' },
      { icon: '🌌', text: '霓虹光斑漂移动画（25s 循环）' },
      { icon: '💜', text: '粒子发光、卡片 hover 发光边框、头像紫色光环' },
      { icon: '🔧', text: '导航栏月亮/太阳图标切换按钮' },
      { icon: '📜', text: '本更新日志页面' },
    ],
    stats: { files: 12, lines: 750 },
  },
  {
    version: 'v1.4.0',
    date: '2026-06-27',
    title: 'Awwwards 级重设计 + Bug 修复',
    emoji: '🎨',
    type: 'design',
    highlights: [
      { icon: '🎨', text: 'Awwwards 级二次元科技风设计系统重建' },
      { icon: '🪟', text: '顶部 sticky 导航 + 选中项紫色下划线' },
      { icon: '🔤', text: '大字体排版、渐变文字、径向渐变光晕' },
      { icon: '🖱️', text: '鼠标跟随光晕 + 滚动进度条' },
      { icon: '🧊', text: '导航毛玻璃 backdrop-filter 过渡' },
      { icon: '🐛', text: '修复 Projects filter 切换空白 bug' },
      { icon: '🔗', text: '新增 URL hash 路由（#about、#projects 等）' },
      { icon: '📱', text: '手动移动/桌面视图切换按钮' },
    ],
    stats: { files: 15, lines: 1516 },
  },
  {
    version: 'v1.3.0',
    date: '2026-06-25',
    title: '全站二次元科技风改造',
    emoji: '⚡',
    type: 'design',
    highlights: [
      { icon: '🎌', text: '紫粉蓝渐变 + 浮动粒子 + 日文注音 + 故障效果' },
      { icon: '🌈', text: '渐变发光边框、hover glow、终末代码前缀' },
      { icon: '➕', text: '新增第 5 个项目（控制系统仿真实验）' },
      { icon: '📊', text: 'Strengths 扩展到 8 项' },
    ],
    stats: { files: 8, lines: 480 },
  },
  {
    version: 'v1.2.0',
    date: '2026-06-25',
    title: '桌面打包 + Vercel 部署',
    emoji: '🚀',
    type: 'feature',
    highlights: [
      { icon: '💻', text: 'Node 伺服器 (server.js) + 打開網頁.bat 方案' },
      { icon: '🔧', text: '解决 CORS、中文乱码、端口冲突（8888）' },
      { icon: '☁️', text: 'Vercel 部署上线 tmyistomoyo-portfolio.vercel.app' },
      { icon: '🔄', text: 'Git push 触发自动部署' },
    ],
    stats: { files: 4, lines: 120 },
  },
  {
    version: 'v1.1.0',
    date: '2026-06-25',
    title: 'Hero 多次迭代 + 视觉打磨',
    emoji: '✨',
    type: 'design',
    highlights: [
      { icon: '🎯', text: 'Hero 三次风格迭代（花哨随机 → 极简紫蓝 → 二次元科技）' },
      { icon: '💧', text: 'TMY 签名水印（15% 透明度）' },
      { icon: '🎬', text: 'Bilibili 图标优化（SVG 最终版）' },
      { icon: '🎪', text: '移除旧标语，版头改为大名字 + 鼠标光晕' },
    ],
    stats: { files: 3, lines: 200 },
  },
  {
    version: 'v1.0.0',
    date: '2026-06-25',
    title: '项目初始化',
    emoji: '🎬',
    type: 'milestone',
    highlights: [
      { icon: '🆕', text: '从 workspace 创建 React + Vite 项目' },
      { icon: '🗑️', text: '废弃 Codex 旧版本（dist/ 已删）' },
      { icon: '🖼️', text: '头像替换为动漫风格' },
      { icon: '📁', text: '5 个核心板块：About / Projects / Honors / Thesis / Strengths' },
    ],
    stats: { files: 12, lines: 850 },
  },
]

const typeLabels = {
  feature: '✨ Feature',
  fix: '🐛 Fix',
  design: '🎨 Design',
  perf: '⚡ Perf',
  milestone: '🎯 Milestone',
}

const Changelog = () => {
  const totalVersions = changelogData.length
  const totalFiles = changelogData.reduce((sum, e) => sum + (e.stats?.files || 0), 0)
  const totalLines = changelogData.reduce((sum, e) => sum + (e.stats?.lines || 0), 0)

  const dates = changelogData.map((e) => new Date(e.date))
  const firstDate = new Date(Math.min(...dates))
  const lastDate = new Date(Math.max(...dates))
  const daysSpan = Math.max(1, Math.round((lastDate - firstDate) / (1000 * 60 * 60 * 24)) + 1)

  return (
    <section className="changelog">
      <div className="container">
        {/* Header */}
        <div className="section-label">
          <span className="section-label-num">06</span>
          <span className="section-label-text">Changelog</span>
        </div>
        <h1 className="section-heading">
          构建日志 <span className="text-accent">/</span> 更新历史
        </h1>
        <p className="changelog-intro">
          记录这个网站从 0 到 1 的每一步迭代。每一个像素、每一行代码、每一个深夜的 bug 修复，
          都凝聚着对细节的执着。👇
        </p>

        {/* 总体统计卡片 */}
        <div className="changelog-stats reveal reveal-stagger">
          <div className="cl-stat">
            <div className="cl-stat-val">{totalVersions}</div>
            <div className="cl-stat-label">版本迭代</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-val">{totalFiles}</div>
            <div className="cl-stat-label">修改文件</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-val">{totalLines.toLocaleString()}</div>
            <div className="cl-stat-label">代码行数</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-val">{daysSpan}</div>
            <div className="cl-stat-label">开发天数</div>
          </div>
        </div>

        {/* 时间线 */}
        <div className="changelog-timeline">
          {changelogData.map((entry, i) => (
            <div
              className="cl-entry reveal"
              key={entry.version}
              style={{ '--delay': `${i * 80}ms` }}
            >
              {/* 时间线左侧：圆形节点 + 连接线 */}
              <div className="cl-entry-marker">
                <div className="cl-entry-dot">{entry.emoji}</div>
                {i < changelogData.length - 1 && <div className="cl-entry-line" />}
              </div>

              {/* 右侧内容卡片 */}
              <div className={`cl-entry-card cl-type-${entry.type}`}>
                <div className="cl-entry-head">
                  <span className="cl-entry-version">{entry.version}</span>
                  <span className="cl-entry-type">{typeLabels[entry.type] || entry.type}</span>
                  <span className="cl-entry-date">{entry.date}</span>
                </div>

                <h3 className="cl-entry-title">{entry.title}</h3>

                <ul className="cl-entry-list">
                  {entry.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="cl-icon">{h.icon}</span>
                      <span className="cl-text">{h.text}</span>
                    </li>
                  ))}
                </ul>

                {entry.stats && (
                  <div className="cl-entry-stats">
                    <span>📁 {entry.stats.files} files</span>
                    <span>📝 +{entry.stats.lines} lines</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 结尾寄语 */}
        <div className="changelog-outro reveal">
          <div className="changelog-outro-icon">🚀</div>
          <h3>未完待续</h3>
          <p>
            这个网站还在不断进化中。下一个版本会带来什么？<br />
            也许是 3D 交互、也许是 AI 助手、也许是完全重构的动画系统。<br />
            敬请期待。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Changelog
