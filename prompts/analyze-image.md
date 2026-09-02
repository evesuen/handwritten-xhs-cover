# Prompt · 分析原图

在生图前，对用户提供原图做视觉分析。输出**仅 JSON**，不要废话。

## 分析维度

1. **主体**：人物/产品位置（左/右/中/满幅）；是否有人脸
2. **留白**：哪一侧或哪块区域适合放字（上/下/左/右）
3. **情绪**：画面传达的氛围（冷/暖/丧/燃/治愈/教程/产品）
4. **色调**：主色温；建议文字颜色 1～2 个 hex
5. **推荐 preset**：`vertical_emotion` | `stamp_travel` | `subject_outline` | `scattered_keywords`
6. **图像处理**：是否建议 `desaturate`（去色）、`film_grain`（胶片颗粒）
7. **装饰建议**：从 `arrow` | `subject_outline` | `stamp` | `scribble` 中选 0～2 个

## 输出 Schema

```json
{
  "subject": {
    "position": "left | right | center | full",
    "has_person": true,
    "has_product": false,
    "face_region": "right-third | center | none"
  },
  "negative_space": ["left", "top"],
  "mood": "高情绪 | 旅行叙事 | 教程感 | 产品展示 | 日常",
  "palette": {
    "dominant": "warm | cool | neutral",
    "background_brightness": "dark | mid | light",
    "suggested_text_colors": ["#FFFFFF", "#F5E6A3"]
  },
  "recommended_preset": "vertical_emotion",
  "image_treatment": "none | desaturate | film_grain",
  "decorations_hint": ["arrow"],
  "reasoning_one_line": "人物在右，左侧蓝墙留白大，适合竖排黄字"
}
```

## 判断规则（简表）

| 条件 | preset |
|------|--------|
| 人物偏一侧，对侧留白 > 30% 画面 | `vertical_emotion` |
| 户外/雪景/旅行穿搭/地名感 | `stamp_travel` |
| 人物大、有动感、胶片色调 | `subject_outline` |
| 用户标题可拆成 2～4 个 2～4 字短词 | `scattered_keywords` |

## 注意

- `face_region` 用于后续禁止压字
- `reasoning_one_line` 会展示给用户，用中文，一句话
