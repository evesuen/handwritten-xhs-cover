---
name: handwritten-xhs-cover
description: >-
  Generates Xiaohongshu viral covers: extract subject, output 3 parallel styles —
  exaggerated headline, doodle fresh, or color-block collage. Handwritten typography
  with WCAG AA contrast. Use for 手写风封面、爆款封面、小红书封面、handwritten cover.
---

# 手写风小红书封面

原图 + 标题 → **抠出主体** → 并行 **3 种封面**。

**启动只读本文件。** Step 1/3/4 各读一个 prompt，**Step 4 只读 `prompts/generate-poster.md`**。

## 核心规则

- 6～20 字；手写非正楷；**主体拎出**；全情绪版
- **颜色从原图+主体提取**，验 **WCAG AA**（字/描线 vs 背景 ≥4.5:1 或大字区 ≥3:1）
- 禁止：系统字体、立体渐变字、超 25 字

## 三 preset

| preset | 要点 |
|--------|------|
| `exaggerated_headline` | 标题 50–65%；主体 40–55% 放大；细描边 |
| `doodle_fresh` | 散落字；主体 30–45%；2–4 doodle + sketchy 描边 |
| `color_block` | 提取色大色块 30–50%；sticker 主体；标题在色块上 |

## 工作流

```
原图+标题 → Step1 analyze-image.md（分析+提色）
         → Step2 抠图/放大主体
         → Step3 layout-plan.md（3×layout）
         → Step4 generate-poster.md（开参考图+生图）
         → Step5 校验标题 → 交 3 张
```

## 快捷指令

| 用户说 | 动作 |
|--------|------|
| 只要大字/小清新/色块 | 只出该 preset |
| 字再大点 | exaggerated text_scale ×1.15 |
| 多加 doodle | doodle_fresh 加 illustrations |

## 降级

无生图工具 → 3 prompt + 3 layout + 参考图路径

## 深读

`examples/good-bad.md`
