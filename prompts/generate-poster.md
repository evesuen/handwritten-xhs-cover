# 生图 · 3 张并行（Step 4 只读本文件）

## 铁律

1. **每种 preset 只开 1 张封面参考 + 1 张字体参考**，严格 1:1 绑定，禁止混 typography、禁止同时参考多种笔刷。
2. **颜色只用下方色板**（摘自封面 reference 图），**禁止从用户原图提取配色**。
3. 构图学 cover_ref；**字体笔刷完全克隆 typography_ref**；WCAG AA。

## 固定绑定（不可换）

| preset | cover_ref | typography_ref |
|--------|-----------|----------------|
| exaggerated_headline | `covers/exaggerated-headline/ref-high-energy.png` | `typography-outline.jpg` |
| doodle_fresh | `covers/doodle-fresh/ref-wonder-night.png` | `typography-scattered.jpg` |
| color_block | `covers/color-block/ref-specialty-dish.png` | `typography-marker.jpg` |

路径前缀：`references/`

## 参考色板（来自封面 reference，勿改 hex）

### exaggerated_headline ← ref-high-energy

| 用途 | hex | 说明 |
|------|-----|------|
| 上行字 | `#FFFFFF` | 白手写 |
| 主标题 fill | `#E53935` | 红 |
| 主标题 outline | `#FFEB3B` | 黄描边 |
| 背景/scrim | `#3E2723` | 深棕 |
| 主体细描边 | `#FFFFFF` | 细白，不抢字 |

**字体：** 仅 `typography-outline.jpg` — ultra-bold dry brush marker, porous jagged edges, massive stacked headline。**不要** vertical/marker/scattered。

### doodle_fresh ← ref-wonder-night

| 用途 | hex | 说明 |
|------|-----|------|
| 散落字 | `#FFFFFF` | 白手写 |
| doodle/描边 | `#FACC15` | 黄线稿 |
| 小英文/quote | `#FFFFFF` | 可选 |
| 背景 | 原图虚化偏暗 | 保白字 AA |

**字体：** 仅 `typography-scattered.jpg` — playful brush pen, rounded tips, scattered staircase lines。**不要** outline/marker。

### color_block ← ref-specialty-dish

| 用途 | hex | 说明 |
|------|-----|------|
| 主标题 | `#DC2626` | 红 brush |
| 色块 primary | `#38BDF8` | 浅蓝 |
| 色块 secondary | `#FEF3C7` | 奶油底 |
| 点缀/副标 | `#FCA5A5` | 浅红 |
| 主体 sticker 描边 | `#DC2626` | 红偏移描边 |

**字体：** 仅 `typography-marker.jpg` — fat casual ins marker on color block。**不要** outline/scattered。

## 构图要点

**exaggerated** — 标题霸屏 50–65%；主体放大；细白描边；无 doodle

**doodle** — 字散落；2–4 黄/白 doodle；主体黄 sketchy 描边

**color_block** — 蓝+奶油色块；红标题在块上；撕纸/ halftone 可选

## 通用模板

```
Xiaohongshu cover 3:4. Subject from user photo — isolated, unchanged.

PRESET: {preset}
COMPOSITION — copy exactly from: references/covers/.../{cover_ref}
TYPOGRAPHY — copy brush style ONLY from: references/{typography_ref}
  Do NOT mix other typography files. Clone stroke weight, texture, layout feel.

COLORS — use preset palette hex above ONLY. Do NOT sample colors from user photo.

SUBJECT: scale {scale}, placement {placement}, outline per palette

TEXT EXACT: 「{title_full}」
{blocks}

DECORATIONS: {per preset}
WCAG AA. Never system fonts.
```

## 中文补充

```
构图严格参考 {cover_ref}，字体只参考 {typography_ref} 这一种笔刷。
颜色用参考图色板：{hex list}，不要从用户照片取色。
标题逐字正确：{title_full}。
```

## 参数

strength 0.3～0.5 · 并行 3 条 · 错字重试 1 次
