# 分析原图 · 找主体

输出**仅 JSON**。只分析构图与主体；**颜色不从此图提取**，Step 3/4 用各 preset 封面参考图的固定色板。

```json
{
  "subject": {
    "type": "person | product | pet | scene",
    "position": "left | right | center | full",
    "has_face": true,
    "extract_hint": "保留格子衫与卷毛轮廓"
  },
  "negative_space": ["top", "left"],
  "mood": "日常 | 治愈 | 可爱 | 探店",
  "text_zone_brightness": "light | mid | dark",
  "background_treatment": "blur | keep_soft | replace_for_color_block",
  "reasoning_one_line": "主体居中偏下，上方留白可排大字"
}
```

## 判断要点

| 维度 | 看什么 |
|------|--------|
| 主体 | 类型、位置、抠图注意点 |
| 留白 | 分离主体后哪块放字 |
| 背景 | 是否虚化；color_block 是否需换底 |

**禁止**输出 extracted_palette / color_roles。
