# 生图 · 3 张并行（Step 4 只读本文件）

**打开封面参考图 + 字体参考图各至少 1 张**（以图为准，禁止系统字体）。

## 参考文件

| preset | 封面目录（任开 1～2 张） | 字体 |
|--------|--------------------------|------|
| exaggerated_headline | `covers/exaggerated-headline/`：ref-desert-2026, ref-high-energy, ref-ai-benefactor, ref-marriage-choice | typography-outline.jpg + typography-vertical.jpg |
| doodle_fresh | `covers/doodle-fresh/`：ref-wonder-night, ref-treasure-shop, ref-desert-2026, ref-hiking-steps | typography-scattered.jpg + typography-marker.jpg |
| color_block | `covers/color-block/`：ref-travel-guide, ref-specialty-dish, ref-hiking-scenery, ref-urban-news | typography-marker.jpg + typography-outline.jpg |

路径前缀：`references/`

## 字体笔刷关键词

**exaggerated_headline** — outline: ultra-bold dry brush, porous jagged edges, massive headline; vertical: expressive brush, dry brush texture, elongated strokes

**doodle_fresh** — playful brush pen, scattered lines, rounded stroke tips, casual vlog diary; marker 为 ins casual 底线

**color_block** — bold casual marker on solid color block, high contrast vs block; outline 用于色块上超粗标题

**通用：** organic hand-drawn；字色/描边/色块 hex **从原图提取**，WCAG AA

## 构图要点

**exaggerated_headline** — 标题 50–65% 视觉；主体 40–55% 放大；**细描边**不抢标题；装饰极少

**doodle_fresh** — 标题中等偏大散落；主体 30–45%；**必配 2～4 doodle**（星/箭头/线稿 icon/bubble）；sketchy 描边

**color_block** — 大色块 30–50%（从提取色衍生）；撕纸/斜切；主体 sticker 描边；标题在纯色块上

## 通用模板

```
Xiaohongshu cover. Subject extracted/isolated — keep face, pose, clothing.

STYLE PRESET: {preset}
Match COMPOSITION from: references/covers/{dir}/{cover_ref_file}
Match TYPOGRAPHY from: references/{typography_ref_file} — {keywords above}

SUBJECT: scale {subject_scale}, placement {subject_placement}, outline {outline_spec}

COLORS — from analysis.extracted_palette / color_roles:
title_fill {hex} ({source}), outline {hex}, doodle/block {hex list}
WCAG AA ≥4.5:1 text vs bg; adjust lightness within same hue family only

TEXT — EXACT Chinese: 「{title_full}」
{text_blocks_description}

DECORATIONS: {per preset}

Never system fonts. 3:4 vertical.
```

## 中文补充

```
构图参考 {cover_ref}，字体参考 {typography_ref}。
颜色从原图提取：{color_roles}，WCAG AA。标题逐字正确：{title_full}。
```

## 参数

strength 0.3～0.5 · 并行 3 条 · 错字重试 1 次

## 降级

输出 3 条填好的 prompt + 3 份 layout + 参考图路径
