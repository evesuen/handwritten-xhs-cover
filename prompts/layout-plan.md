# 排版 · 3 种封面风格

基于 `analysis.json` + 标题，输出 3 份 layout。

**颜色：只用 `generate-poster.md` 里各 preset 的参考色板（来自封面 reference 图），禁止从用户原图取色。**

**字体：每个 preset 仅绑定 1 个 typography 参考，禁止混用。**

## 单份 layout Schema

```json
{
  "preset": "exaggerated_headline",
  "title_full": "不好意思，请问今天几点开饭",
  "cover_ref": "references/covers/exaggerated-headline/ref-high-energy.png",
  "typography_ref": "references/typography-outline.jpg",
  "palette_ref": "ref-high-energy",
  "subject_placement": "center-lower",
  "subject_scale": 0.5,
  "text_blocks": [
    {
      "content": "请问今天几点开饭",
      "color": "#E53935",
      "outline_color": "#FFEB3B",
      "outline": "yellow_thick",
      "position": "top-center",
      "size": "xlarge"
    }
  ],
  "decorations": [],
  "contrast": { "target": "WCAG_AA", "verified": true }
}
```

## 固定参考绑定（各 1 张，勿改）

| preset | cover_ref | typography_ref | 色板来源 |
|--------|-----------|----------------|----------|
| exaggerated_headline | ref-high-energy.png | typography-outline.jpg | 同上 |
| doodle_fresh | ref-wonder-night.png | typography-scattered.jpg | 同上 |
| color_block | ref-specialty-dish.png | typography-marker.jpg | 同上 |

## 三 preset 排版

### exaggerated_headline
- 标题 50–65%；主体 40–55%；细描边
- 可拆两行：上行较小、下行 xlarge（见 ref-high-energy）

### doodle_fresh
- 标题散落 2–4 块；主体 30–45%；2–4 doodle；sketchy 描边

### color_block
- 大色块 30–50%；标题在色块上；sticker 主体描边

## 标题拆分

按 preset 拆 `text_blocks`；hex **只许用 generate-poster 色板表**。
