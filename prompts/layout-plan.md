# Prompt · 排版方案

根据 `analysis.json` + 用户标题，生成 `layout.json`。**先方案后生图。**

## 标题处理

1. 用户给了标题 → 清洗标点，按 preset 拆分
2. 未给标题 → 根据 `mood` 生成 2 个候选（各 ≤ 15 字），等用户选后再继续
3. 拆分示例：
   - 「要疯要野要自由要浪漫」→ 4 块：`要疯` `要野` `要自由` `要浪漫`
   - 「做视频记住这个词」→ 竖排单列或 2 列
   - 「如果北方的冬天没有雪」→ 竖排长句，可加省略号

## 输出 Schema

```json
{
  "preset": "vertical_emotion",
  "image_treatment": "none",
  "title_full": "做视频记住这个词",
  "text_blocks": [
    {
      "content": "做视频",
      "style": "bold_childlike_handwriting",
      "color": "#E8C547",
      "layout": "vertical",
      "position": "left-center",
      "size": "large",
      "outline": null
    },
    {
      "content": "记住这个词",
      "style": "bold_childlike_handwriting",
      "color": "#E8C547",
      "layout": "vertical",
      "position": "left-center-below",
      "size": "large",
      "outline": null
    }
  ],
  "decorations": [
    {
      "type": "arrow",
      "from": "text",
      "to": "subject_action",
      "color": "#E8C547",
      "style": "hand_drawn"
    }
  ],
  "constraints": [
    "do_not_cover_face",
    "keep_original_person_unchanged",
    "text_only_in_negative_space"
  ],
  "variants": {
    "A_conservative": { "decoration_level": "low", "text_scale": 0.85 },
    "B_emotional": { "decoration_level": "high", "text_scale": 1.1 }
  }
}
```

## 各 Preset 排版要点

### vertical_emotion

- `text_blocks` 1～2 组，竖排
- `position`: 留白侧 `left-center` 或 `right-center`
- 可选 1 条 `arrow` 指向主体动作

### stamp_travel

- 竖排白字为主
- 额外 `stamp` decoration：`{ "type": "stamp", "text": "地名", "color": "red_white" }`
- 字色优先 `#FFFFFF`

### subject_outline

- `decorations` 必含 `subject_outline`
- `text_blocks` 横排多行，放画面下 1/3 或侧栏
- 可加 `scribble` 在人物衣角/周围

### scattered_keywords

- 每个短词独立 `text_block`，`position` 分散：`top-left` `top-right` `mid-left` `bottom`
- 建议 `image_treatment`: `desaturate`
- 每块字加 `outline`: `white_thick`
- 可选 `scribble` around text

## 安全区

- 人脸框：上 1/3 居中区域**禁止**放字
- 产品主体： bounding 区域内**禁止**放字
- 边距：距画面边缘 ≥ 5%
