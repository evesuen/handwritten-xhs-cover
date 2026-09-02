---
name: handwritten-xhs-cover
description: >-
  Generates Xiaohongshu viral covers: extract subject, 3 parallel styles. Each style
  uses ONE cover ref + ONE typography ref + fixed palette from reference images.
  Use for 手写风封面、爆款封面、小红书封面、handwritten cover.
---

# 手写风小红书封面

原图 + 标题 → 抠主体 → 并行 3 种封面。

**启动只读本文件。** Step 4 只读 `prompts/generate-poster.md`。

## 核心规则

- 6～20 字；手写非正楷；主体拎出；全情绪版
- **每种 preset：1 封面参考 + 1 字体参考 + 1 套固定色板**（来自 reference 图，**不从用户原图取色**）
- **禁止混用多种 typography**（否则字体四不像）
- WCAG AA；禁止系统字体、超 25 字

## 三 preset 绑定

| preset | 封面 | 字体 | 色板来源 |
|--------|------|------|----------|
| exaggerated_headline | ref-high-energy | typography-outline | 红白黄深棕 |
| doodle_fresh | ref-wonder-night | typography-scattered | 白字黄 doodle |
| color_block | ref-specialty-dish | typography-marker | 红字蓝奶油块 |

详见 `prompts/generate-poster.md` hex 表。

## 工作流

```
原图+标题 → Step1 分析主体（不取色）
         → Step2 抠图/放大
         → Step3 layout（3×，用参考色板）
         → Step4 generate-poster（各开 1 cover + 1 typography）
         → Step5 校验标题 → 交 3 张
```

## 快捷指令

| 用户说 | 动作 |
|--------|------|
| 只要大字/小清新/色块 | 只出该 preset |
| 字再大点 | exaggerated text_scale ×1.15 |

## 降级

3 prompt + 3 layout + 注明 cover/typography 各 1 张

## 深读

`examples/good-bad.md`
