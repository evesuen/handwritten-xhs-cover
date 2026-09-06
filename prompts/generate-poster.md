# 生图 · 3 张并行（Step 4 只读本文件）

## 铁律

1. **每种 preset 只开 1 张封面参考 + 1 张字体参考**，严格 1:1 绑定，禁止混 typography、禁止同时参考多种笔刷。
2. **颜色只用下方色板**（摘自封面 reference 图），**禁止从用户原图提取配色**。
3. 构图学 cover_ref；**字体笔刷完全克隆 typography_ref**；WCAG AA。
4. **B/C 除用户标题外，最多再加 1 条短小字（≤12 字）。** 色块默认无字。禁止：多条贴纸文案、英文 slogan（Good Day / Nice Weather…）、把标题换说法再写一遍、抄 cover_ref 活动说明。doodle（心/星/太阳/箭头）可留。
5. **A 禁止色块背景。** 学 cover_ref 的标题大小/堆叠/字色，**背景必须保留用户原图场景**，禁止把 reference 的深棕墙/底色铺到用户图上。色块只属于 `color_block`。禁止把 hex 写进画面。
6. **C 色块必须是撕纸/拼贴纸片，叠在用户原图上。** 蓝+奶油+**粉**三色都要出现；纸片衬标题或留空，**不要每块都写字**。禁止：整页奶油换底、一块蓝底托人、漏粉色、用多条小字填满色块。

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
| 主标题 outline | `#FFEB3B` | 黄描边（只描字，不是字后色块） |
| 背景 | 用户原图 | **禁止**铺 `#3E2723` 或任何实心色块替换天空/场景 |
| 主体细描边 | `#FFFFFF` | 细白，不抢字 |

`#3E2723` 来自参考图里的墙，**不是**给用户封面铺底的。对比不够时：仅在文字后方轻微压暗原图（半透明），禁止矩形/半屏实心色块。

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
| 小英文 | `#FFFFFF` | 最多 1 条短点缀，禁止长 quote |
| 背景 | 原图虚化偏暗 | 保白字 AA |

**字体（必须极度贴近 typography-scattered.jpg，占 prompt 50% 篇幅）：**

克隆「花样人生 / 的100种活法」那种笔刷，**不是** style1 的干刷毛边、**不是** fat marker、**不是** straight grid。

| 特征 | 必须做到 |
|------|----------|
| 笔形 | **软头 brush pen / 粗马克笔**，圆头收笔，笔触起笔重、收笔自然变细 |
| 边缘 | 略带 ink bleed，**圆润有机**，不要 jagged 毛糙（这是 scattered 与 outline 的核心区别） |
| 排版 | **阶梯式/波浪式错落**（staggered staircase），绝不在一条直线上 |
| 字大小 | 每字略不同，有节奏；可有**超长竖划**贯穿（如「样」「法」那种） |
| 点缀 | 最多 **1 条**短小字（单词/短语，如 `HUA YANG`，≤12 字），禁止长英文/鸡汤 |
| 气质 | 俏皮、艺术、小红书 trendy，温暖流动 |

prompt 必写：`Clone typography-scattered.jpg exactly: soft brush pen rounded tips, organic taper strokes, staggered wave staircase layout, varied character sizes, at most ONE tiny accent (1–3 words), NO long quotes, smooth-rounded NOT jagged dry brush.`

**不要** outline / marker 笔刷。

### color_block ← ref-specialty-dish

| 用途 | hex | 说明 |
|------|-----|------|
| 主标题 | `#DC2626` | 红 brush，坐在撕纸块上 |
| 色块蓝 | `#38BDF8` | **必出**：标题下撕纸块 |
| 色块奶油 | `#FEF3C7` | **必出**：另一条标题撕纸块 |
| 色块粉 | `#FCA5A5` | **必出**：1 块空白粉色撕纸（或只加粉心 doodle）；默认无字 |
| 主体 sticker 描边 | `#DC2626` | 红偏移描边 |

**字体：** 仅 `typography-marker.jpg` — fat casual ins marker on color block。**不要** outline/scattered。

**色块怎么用（豆包易错，按这个做）：**
- 底层 = **用户原图还在**（天空/建筑可露出来），边缘可加 cream/蓝 halftone，**不要整页铺奶油把照片抹掉**
- 色块 = **2～3 张撕纸/锯齿纸片**（jagged torn paper），歪斜叠在标题和侧边，像剪贴簿
- 红标题必须压在奶油块 + 蓝块上（可拆两行，一行一块）
- **粉色 `#FCA5A5` 必须作为色块出现**，默认空白 + 粉心 doodle，不能只拿来写红字
- **禁止**用一块大地蓝多边形把人「框」在中间当背景
- **禁止**在蓝/奶油/粉色块上再写「和阳光见个面」「今天适合散步」「Nice Weather」这类额外文案

**补充小字：** 整张图除标题外最多 1 条（≤12 字），没有更好。色块是颜色，不是文案栏。doodle 保留。

## 构图要点

**exaggerated** — 标题霸屏 50–65%；主体放大；细白描边；无 doodle；**保留原图背景，禁止铺色块**

**doodle** — 字散落；**2–4 黄/白 doodle 保留**；主体黄 sketchy 描边；小字最多 1 条短句

**color_block** — 原图底 + 撕纸拼贴；蓝+奶油+**粉色块都要有（纸片默认为空）**；红标题压在撕纸上；doodle 留；除标题外最多 1 条短句；禁止单块蓝底托人、禁止多条小字

## 通用模板

```
Xiaohongshu cover 3:4. Subject from user photo — isolated, unchanged.

PRESET: {preset}
COMPOSITION — copy exactly from: references/covers/.../{cover_ref}
TYPOGRAPHY — 最高优先级，ONLY from references/{typography_ref}:
{paste full typography prompt block from sections above — outline or scattered spec}
Typography must be visually indistinguishable in brush texture from the typography reference image.
Do NOT use generic bold font, smooth vector text, or system typeface.

COLORS — use preset palette hex above ONLY for TEXT / outlines / C-blocks. Do NOT sample colors from user photo.
BACKGROUND (A / doodle): KEEP the user's original photo scene (sky, buildings, interior). NEVER replace it with a solid fill (#3E2723 or any block).
BACKGROUND (C): KEEP the photo as the base. Overlay 2–3 torn-paper pieces in #38BDF8 + #FEF3C7 + #FCA5A5 (pink REQUIRED as a blank block). Do NOT wipe the photo to flat cream. Do NOT put the subject inside one big blue blob. Do NOT write slogans on every paper piece.
Never render hex codes or palette labels as visible text.

SUBJECT: scale {scale}, placement {placement}, outline per palette

TEXT EXACT: 「{title_full}」 only. Optional ONE extra phrase ≤12 chars. No other captions, no English slogans.
{blocks}

DECORATIONS: {per preset} — doodles OK (hearts/stars/arrows). Extra caption at most ONE short phrase. Color blocks stay mostly empty.
WCAG AA. Never system fonts.
```

## 中文补充

```
构图学 {cover_ref} 的标题大小与堆叠，字体必须像素级贴近 typography 参考图笔刷（outline=毛糙干刷；scattered=圆润阶梯笔）。字色用 reference 色板。
A 必须保留用户原图背景，禁止铺深棕/任何色块；色块只属于 C。不要把 hex 写进画面。
C：原图还在；撕纸必须同时有蓝+奶油+粉；红标题压在撕纸上；色块默认空白。禁止整页奶油底、一块蓝底托人、每块纸都写字。
标题逐字正确：{title_full}。除标题外最多 1 条短小字；doodle 可留。禁止 Good Day / Nice Weather / 把标题再说一遍。
```

## 参数

strength 0.3～0.5 · 并行 3 条 · 错字重试 1 次
