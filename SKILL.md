---
name: handwritten-xhs-cover
description: >-
  Generates Xiaohongshu-style viral covers by adding handwritten typography to
  user photos. Analyzes image composition, picks a layout preset, outputs a
  structured plan, then generates 2 poster variants in parallel. Use when the
  user asks for 手写风封面、爆款封面、小红书封面、给图片加标题、handwritten cover,
  or invokes this skill with a base image and title text.
---

# 手写风小红书封面 · Skill

给一张底图 + 标题文案，产出**带手写风大字的小红书封面**。不教用户怎么做 Skill；只执行出图。

安装与平台用法见 `INSTALL.md`。

## 触发后第一件事

按顺序读取本目录文件（**不要跳步**）：

1. `style-guide.md` — 爆款规则与 4 种 preset
2. `prompts/analyze-image.md` — 读图输出 JSON
3. `prompts/layout-plan.md` — JSON → 排版方案
4. `prompts/generate-poster.md` — 生图 prompt 模板
5. `examples/good-bad.md` — 正反例
6. `references/` — 若有参考图，对照风格（见 `references/README.md`）

## 输入

| 字段 | 必填 | 说明 |
|------|------|------|
| 原图 | ✅ | 用户上传的照片/产品图 |
| 标题文案 | 建议有 | 6～20 字为佳；无则根据画面建议 2 个短标题让用户选 |
| 风格偏好 | 可选 | `竖排情绪` / `散落关键词` / `描边人物` / `印章旅行` / 自动 |
| 品牌色 | 可选 | 默认按画面对比色自动选 |

## 工作流（严格执行）

```
读指南与参考
    ↓
分析原图 → 输出 analysis.json（见 schema）
    ↓
生成排版方案 → layout.json
    ↓
上传原图获取可引用 URL（平台需要时）
    ↓
并行生成 2 张海报（保守版 + 更情绪版）
    ↓
检查文字是否正确 → 有错则只重绘文字区域或整图重试（最多 1 次）
    ↓
交付图片 + 简短说明「为什么这样排」
```

### Step 1 · 分析原图

用 `prompts/analyze-image.md` 的逻辑读图，输出 JSON：

```json
{
  "subject": { "position": "left|right|center", "has_person": true, "has_product": false },
  "negative_space": ["left", "top"],
  "mood": "高情绪|旅行叙事|教程感|产品展示|日常",
  "palette": { "dominant": "cool", "suggested_text_colors": ["#FFFFFF", "#F5E6A3"] },
  "recommended_preset": "vertical_emotion|scattered_keywords|subject_outline|stamp_travel",
  "image_treatment": "none|desaturate|film_grain",
  "decorations_hint": ["arrow", "subject_outline", "stamp", "scribble"]
}
```

**先输出此 JSON 给用户看（可折叠），再进入 Step 2。**

### Step 2 · 排版方案

用 `prompts/layout-plan.md`，把用户标题拆成 1～4 个 `text_blocks`，写明每块的位置、颜色、竖/横、是否描边。

默认规则：

- **不压脸、不压产品主体**
- 主标题总长 ≤ 20 字；能拆短句就拆
- 竖排优先（除非 preset 为散落关键词）

### Step 3 · 并行出图

用 `prompts/generate-poster.md` 模板，**同时**生成两张：

| 版本 | 说明 |
|------|------|
| A 保守 | 字少、留白多、装饰少 |
| B 情绪 | 字更大、装饰更多（描边/涂鸦/箭头按需） |

生图参数建议（img2img 场景）：

- **保持原图人物/产品不变**，只在留白区加字与装饰
- strength 偏低（约 0.25～0.45），避免人物变形
- 比例保持竖版 3:4 或原图比例

### Step 4 · 文字校验

生成后检查标题是否与用户给定文案一致。若错字：

1. 在 prompt 中强调 exact characters: `「逐字必须为：XXX」`
2. 重试一次；仍失败则告知用户并交付最接近的一版

### Step 5 · 交付

输出：

1. 两张成品图（A / B）
2. 三句话说明：选了哪个 preset、字为什么放那里、A/B 差别
3. 若用户要改：支持「字大一点 / 换竖排 / 去掉描边 / 换颜色」局部重生成

## 平台适配

| 平台 | 操作 |
|------|------|
| **豆包工作任务** | 切工作任务 → 安装/启用本 Skill → 发原图 + 标题 |
| **Cursor** | 用户 @handwritten-xhs-cover 或说「用手写风封面 Skill」 |
| **Coze / Trae** | 将本目录作为 Skill 包导入；流程相同 |

生图能力：使用当前环境可用的**图像生成/编辑**工具（豆包生图、DALL·E、Gemini 等）。无生图工具时，输出 `layout.json` + 完整生图 prompt，供用户粘贴到生图产品。

## 禁止

- 不要解释 Skill 是怎么做出来的
- 不要用正楷、居中 PPT 风、黑体系统字
- 不要一张图塞超过 25 字
- 不要未经分析就直接「帮我做张好看封面」

## 快捷指令

| 用户说 | 动作 |
|--------|------|
| 换竖排 / 换散落 | 改 preset，重走 Step 2～3 |
| 字大一点 / 更情绪 | 走 B 版逻辑或加大 `text_blocks` scale |
| 去掉描边/箭头 | 从 `decorations` 删除对应项后重生成 |
| 只要一张 | 只出 A 保守版 |
| 建议标题 | 跳过用户标题，Step 1 后给 2 个候选短句 |
