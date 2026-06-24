import './Thesis.css'

const Thesis = () => {
  const techStack = [
    { name: 'STM32F103', cat: 'MCU' },
    { name: 'MS1100', cat: '甲醛传感器' },
    { name: 'MQ-7', cat: 'CO传感器' },
    { name: 'GP2Y1014AU', cat: '粉尘传感器' },
    { name: 'OLED 4针', cat: '显示' },
    { name: 'ESP8266', cat: 'WiFi' },
    { name: 'Keil MDK', cat: 'IDE' },
    { name: 'C', cat: '语言' },
  ]

  const features = [
    { title: '多传感器融合', desc: '集成甲醛、CO、粉尘三类传感器，ADC + 数字接口同步采集，平均滤波保证数据稳定性。' },
    { title: 'OLED 实时显示', desc: '实时展示各项浓度数据，高频刷新无闪烁。' },
    { title: '声光智能报警', desc: '阈值触发蜂鸣器 + LED，超标即响应，支持手动解除。' },
    { title: 'WiFi 远程监控', desc: 'ESP8266 上传数据至手机 APP，远程查看实时浓度与设备状态。' },
    { title: '用户交互控制', desc: '微动按键设定阈值、复位、解除报警；APP 端滑块可视化调节。' },
    { title: '模块化架构', desc: '采集、处理、显示、交互四大模块独立设计，接口标准化。' },
  ]

  const tests = [
    { item: '甲醛采集', result: '数据准确，响应迅速' },
    { item: 'CO检测', result: '线性响应，报警及时' },
    { item: '粉尘监测', result: '滤波稳定可靠' },
    { item: 'OLED显示', result: '高频刷新无闪烁' },
    { item: '声光报警', result: '超标即触发' },
    { item: '用户操作', result: '双通道正常' },
  ]

  return (
    <section id="thesis" className="thesis">
      <div className="container">
        <div className="thesis-header">
          <div className="thesis-header-left">
            <div className="thesis-badge">本科毕业设计</div>
            <h2 className="thesis-title">
              基于 STM32 的<br />
              <span className="text-accent">室内环境监测系统</span>
            </h2>
            <p className="thesis-title-en">
              Indoor Environment Monitoring and Intelligent Response System Based on STM32
            </p>
          </div>
          <div className="thesis-header-right">
            {['STM32', '环境监测', '智能响应', '传感器融合'].map((k) => (
              <span key={k} className="thesis-keyword">{k}</span>
            ))}
          </div>
        </div>

        {/* Abstract */}
        <div className="thesis-abstract">
          <div className="thesis-abstract-label">Abstract</div>
          <p>
            以 STM32F103 为核心，集成甲醛、CO、粉尘三类传感器，构建实时监测、超限报警、阈值可调的室内环境系统。
            OLED 显示 + 蜂鸣器 LED 报警 + ESP8266 WiFi 远程监控。经测试验证，各模块协调运作，数据采集准确、响应迅速。
          </p>
        </div>

        {/* Features */}
        <div className="thesis-block">
          <h3 className="thesis-block-title">核心功能</h3>
          <div className="thesis-features">
            {features.map((f, i) => (
              <div key={i} className="thesis-feature">
                <span className="thesis-feature-num">0{i + 1}</span>
                <h4 className="thesis-feature-title">{f.title}</h4>
                <p className="thesis-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="thesis-block">
          <h3 className="thesis-block-title">技术栈</h3>
          <div className="thesis-tech">
            {techStack.map((t) => (
              <div key={t.name} className="thesis-tech-item">
                <span className="thesis-tech-name">{t.name}</span>
                <span className="thesis-tech-cat">{t.cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tests */}
        <div className="thesis-block">
          <h3 className="thesis-block-title">测试结果</h3>
          <div className="thesis-tests">
            {tests.map((t) => (
              <div key={t.item} className="thesis-test">
                <span className="thesis-test-check">✓</span>
                <span className="thesis-test-name">{t.item}</span>
                <span className="thesis-test-result">{t.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thesis
