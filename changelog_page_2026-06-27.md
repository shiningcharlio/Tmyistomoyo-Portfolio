# Tmyistomoyo Portfolio — Changelog 页面添加

## 任务目标
为 Portfolio 网站添加"更新日志"（Changelog）页面，展示网站从创建到现在的所有工作记录。

## 修改文件清单

### 1. 新建 `src/components/Changelog.jsx`
- 完整的 Changelog React 组件
- 包含 6 个版本的数据（v1.0.0 ~ v1.5.0），按时间倒序
- 总体统计卡片（4 列：版本迭代、修改文件、代码行数、开发天数）
- 时间线布局：左侧圆形 emoji 节点 + 渐变连接线，右侧内容卡片
- 每个版本卡片包含：版本号、类型标签、日期、标题、高亮列表、文件/行数统计
- 结尾"未完待续"寄语区域
- 使用 reveal 动画类（配合现有 IntersectionObserver）

### 2. 新建 `src/components/Changelog.css`
- **亮色模式**：
  - 时间线圆点节点（48px），渐变连接线（紫粉蓝）
  - 卡片白色 surface，1px 边框，hover 上浮 + 紫色阴影
  - 5 种类型颜色标识（feature=蓝、fix=红、design=紫、perf=绿、milestone=金）
  - 左侧 4px 类型颜色条，hover 时变 6px
  - 统计卡片 4 列网格，hover 顶部渐变线
  - 响应式：768px 统计变 2 列，节点缩小；480px 进一步压缩
- **暗色模式**（`[data-theme="dark"]` 覆盖）：
  - 卡片暗色 surface，节点发光效果（glow-purple）
  - 连接线更亮 + 发光
  - 卡片 hover 紫色光晕
  - 类型标签颜色适配暗色背景
  - 统计数字渐变更亮

### 3. 修改 `src/App.jsx`
- import Changelog 组件
- sections 数组添加 `{ id: 'changelog', num: '06', label: 'Changelog' }`
- renderSection 添加 `case 'changelog': return <Changelog />`
- 两处 hash 路由 valid 数组添加 `'changelog'`

## 构建结果
```
✓ 35 modules transformed.
dist/index.html                            0.47 kB
dist/assets/avatar-0LqI1PY2.png          735.51 kB
dist/assets/index-BscM5BSm.css            81.29 kB
dist/assets/index-CAWbA81A.js            231.05 kB
✓ built in 146ms — 0 errors
```

## 设计要点
- 时间线风格：Awwwards 级，左侧节点 + 右侧卡片
- 卡片类型有视觉区分（颜色 + label + 左侧色条）
- 暗色模式有发光效果（节点 glow、连接线发光、卡片 hover 光晕）
- 移动端友好（堆叠布局，节点缩小）
- 入场动画：stagger fade-in，通过现有 reveal 类 + `--delay` CSS 变量
- 统计数据自动从 changelogData 计算（版本数、文件数、行数、天数）
