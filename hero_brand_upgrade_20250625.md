# Hero Brand 升级记录 — Tmyistomoyo 动态艺术字

## 时间
2026-06-25 02:44 GMT+8

## 目标
将版头 "Tmyistomoyo" 升级为更有艺术气息、更强互动动态效果的大字标题。

## 修改文件
- `src/index.css` — @import 新增 Playfair Display 字体（700/800/900 字重）
- `src/components/Hero.jsx` — 逐字母渲染 + rAF 节流的鼠标跟随 + idle 检测
- `src/components/Hero.css` — 全新 .hero-brand 样式系统

## 实现细节

### 字体
- 从 Space Grotesk 换为 Playfair Display（衬线体），900 字重
- 尺寸：clamp(72px, 16vw, 220px)

### 动态效果
1. **逐字母浮入**：加载时每个字母 translateY(40px)+rotateX(-40deg) → 0，0.08s 间隔
2. **自动流光**：idle 时一道光带 5s 周期从右到左扫过（linear-gradient + background-position 动画）
3. **自动浮动**：idle 时整体 6s 周期上下浮动 6px
4. **鼠标跟随渐变**：radial-gradient 跟随鼠标位置，rAF 节流，1.5s 无操作后恢复 idle
5. **字母 hover**：单个字母悬停上浮 12px + 放大 5%

### 状态切换
- `.interacting` class 控制鼠标活跃/空闲状态切换
- 活跃时：流光淡出，径向渐变接管
- 空闲时：流光显示，整体浮动

## 同期变更
- 删除了"硬件为骨/智能为魂"标题（用户认为老土）
- B站图标从错误的PNG云朵替换为SVG
