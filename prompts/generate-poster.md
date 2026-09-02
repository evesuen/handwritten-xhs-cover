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

**字体（必须极度贴近 typography-outline.jpg，占 prompt 50% 篇幅）：**

克隆「忙一忙 / 創作 / 是大事情」那种笔刷，**不是**普通粗黑体、不是 smooth 马克笔、不是印刷体。

| 特征 | 必须做到 |
|------|----------|
| 边缘 | **porous 多孔、grainy 颗粒、jagged 毛糙**，像干刷/没墨的 felt marker，绝不光滑 |
| 笔画 | **超粗实心**，圆角接头；点画是**圆角块/小矩形**，不是细点 |
| 字重层次 | 主词（如「几点开饭」）**明显更大**于副词（如「不好意思」），大小参差、略倾斜 |
| 堆叠 | 多行**密集堆叠**，行距紧，有 DIY 海报感 |
| 气质 | 原始、高能量、儿童手写但更「野」，参考图里「創作」「大事情」的冲击力 |

prompt 必写：`Clone typography-outline.jpg exactly: ultra-bold dry brush marker, porous grainy jagged edges, blob-like dots, dense stacked lines, main keywords significantly larger, raw hand-drawn NOT vector smooth.`

**不要** vertical / marker / scattered 任何其他笔刷。

### doodle_fresh ← ref-wonder-night

| 用途 | hex | 说明 |
|------|-----|------|
| 散落字 | `#FFFFFF` | 白手写 |
| doodle/描边 | `#FACC15` | 黄线稿 |
| 小英文/quote | `#FFFFFF` | 可选 |
| 背景 | 原图虚化偏暗 | 保白字 AA |

**字体（必须极度贴近 typography-scattered.jpg，占 prompt 50% 篇幅）：**

克隆「花样人生 / 的100种活法」那种笔刷，**不是** style1 的干刷毛边、**不是** fat marker、**不是** straight grid。

| 特征 | 必须做到 |
|------|----------|
| 笔形 | **软头 brush pen / 粗马克笔**，圆头收笔，笔触起笔重、收笔自然变细 |
| 边缘 | 略带 ink bleed，**圆润有机**，不要 jagged 毛糙（这是 scattered 与 outline 的核心区别） |
| 排版 | **阶梯式/波浪式错落**（staggered staircase），绝不在一条直线上 |
| 字大小 | 每字略不同，有节奏；可有**超长竖划**贯穿（如「样」「法」那种） |
| 点缀 | 可选小字 **pinyin/英文** 填负空间（HUA YANG 风格），clean sans 与主字对比 |
| 气质 | 俏皮、艺术、小红书 trendy，温暖流动 |

prompt 必写：`Clone typography-scattered.jpg exactly: soft brush pen rounded tips, organic taper strokes, staggered wave staircase layout, varied character sizes, optional small pinyin accents, smooth-rounded NOT jagged dry brush.`

**不要** outline / marker 笔刷。

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
TYPOGRAPHY — 最高优先级，ONLY from references/{typography_ref}:
{paste full typography prompt block from sections above — outline or scattered spec}
Typography must be visually indistinguishable in brush texture from the typography reference image.
Do NOT use generic bold font, smooth vector text, or system typeface.

COLORS — use preset palette hex above ONLY. Do NOT sample colors from user photo.

SUBJECT: scale {scale}, placement {placement}, outline per palette

TEXT EXACT: 「{title_full}」
{blocks}

DECORATIONS: {per preset}
WCAG AA. Never system fonts.
```

## 中文补充

```
构图严格参考 {cover_ref}，字体必须像素级贴近 typography 参考图笔刷（outline=毛糙干刷；scattered=圆润阶梯笔）。颜色用 reference 色板。
标题逐字正确：{title_full}。
```

## 参数

strength 0.3～0.5 · 并行 3 条 · 错字重试 1 次
