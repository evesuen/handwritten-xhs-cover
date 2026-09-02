# Prompt · 生图模板

将 `layout.json` 填进下列模板，调用图像生成/编辑工具。**每张图单独一条 prompt。**

## 通用模板（英文主体，模型兼容性更好）

```
Edit this photo into a Xiaohongshu (Little Red Book) viral cover. CRITICAL RULES:
- Keep the original person/product EXACTLY unchanged — same face, pose, clothing, background.
- ONLY add handwritten text and decorations in the empty/negative space.
- Do NOT use printed fonts, center-aligned PowerPoint style, or neat typography.

STYLE:
- Hand-drawn, wobbly, childlike marker handwriting
- Bold strokes, uneven thickness, slightly crooked
- Short emotional title, NOT a paragraph

LAYOUT (from plan):
- Preset: {preset}
- Text blocks: {text_blocks_description}
- Text colors: {colors}
- Layout direction: {vertical | scattered | multi-line}
- Image treatment: {none | desaturate to B&W | subtle film grain}

DECORATIONS (only if specified):
{decorations_description}

EXACT CHINESE CHARACTERS (must be 100% correct, no wrong characters):
「{title_full}」

Variant: {A_conservative | B_emotional}
- A: smaller text, fewer decorations, more whitespace
- B: larger text, more hand-drawn scribbles/outlines/arrows

Aspect ratio: keep original or 3:4 vertical social cover.
```

## 中文补充句（豆包等中文模型可加在末尾）

```
在画面留白处添加手写风标题，不遮挡人物面部。字体为粗黑歪扭儿童手写体。
标题必须逐字正确：{title_full}。保持原图人物和场景不变，只叠加文字和手绘装饰。
```

## text_blocks 转描述示例

**竖排：**
```
On the LEFT empty wall area, add vertical handwritten text in yellow (#E8C547):
「做视频」 above 「记住这个词」, stacked vertically, large, wobbly strokes.
Add one hand-drawn arrow pointing from the text toward the small object in the air.
```

**散落：**
```
Desaturate background to black and white. Scatter four text blocks in teal (#5EB3B8) with thick white outlines:
「要疯」 top-left, 「要野」 top-right, 「要自由」 mid-left, 「要浪漫」 bottom spanning width.
Add small white scribble marks around letters. Person in center unchanged.
```

**描边人物：**
```
Add rough white outline stroke around the person's silhouette. Below, white handwritten text in 3 lines:
「我眼里的世界，」 「也想」 「分享给你」. Subtle motion scribble lines near the coat. Film grain mood.
```

## img2img 参数建议

| 参数 | 建议 |
|------|------|
| strength / denoise | 0.25～0.45（越低越保真） |
| 并行 | 同时跑 A、B 两条 prompt |
| 失败重试 | 强调 EXACT CHINESE CHARACTERS |

## 无图生图工具时的降级

输出：

1. 填好的完整英文 + 中文 prompt 各一条（A / B）
2. `layout.json`
3. 说明：「请将原图与此 prompt 一并送入支持 img2img 的生图产品」
