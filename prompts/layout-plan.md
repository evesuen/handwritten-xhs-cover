# 排版 · 3 种封面风格

基于 `analysis.json` + 标题，**固定输出 3 份 layout**。

**所有颜色必须来自 `analysis.extracted_palette` / `color_roles`**，仅允许为达 WCAG AA 做明度微调。

## 对比度（WCAG AA，必做）

用 `color_roles` 填 hex 后验算；layout 含 `contrast.verified: true`。不够则同色相调明度或加 scrim。

## 单份 layout Schema

```json
{
  "preset": "exaggerated_headline",
  "title_full": "高精力人",
  "colors_from_extraction": true,
  "color_roles_used": {
    "title_fill": "#E53935",
    "title_outline": "#FACC15",
    "source": "analysis.color_roles — 主体粉+环境黄衍生"
  },
  "cover_refs": ["references/covers/exaggerated-headline/ref-high-energy.png"],
  "typography_refs": ["references/typography-outline.jpg"],
  "subject_placement": "center-lower",
  "subject_scale": 0.5,
  "text_blocks": [
    {
      "content": "高精力人",
      "color": "#E53935",
      "outline_color": "#FACC15",
      "outline": "yellow_thick",
      "layout": "horizontal",
      "position": "top-center",
      "size": "xlarge"
    }
  ],
  "decorations": [],
  "contrast": { "target": "WCAG_AA", "min_ratio": 4.5, "verified": true }
}
```

## 三 preset 用色

### exaggerated_headline

- `title_fill` / `title_outline`：来自主体 accent + highlights
- 双色字时：fill 取 subject 主色，outline 取 highlights 或 subject 第二色
- 主体细描边：用 `subject_outline`（常与 doodle 同色 family）

### doodle_fresh

- 散落字：可用 1～2 个 extracted 色（如主体粉 + 环境黄）
- doodle / 描边：`doodle_stroke`、`subject_outline` 从提取色
- 小 quote/英文：extracted 色的低饱和或 text_zone 对比色

### color_block

- `block_colors`：**必须**从 `from_background` + `from_subject` 衍生（提饱和/压暗），2～3 个
- 标题在块上：fill 与 block 验 AA；常用 block 的互补明度色
- sticker 描边：主体 accent 或 block 对比色

## 标题拆分

同前；**hex 一律引用 analysis，不写死色板**。
