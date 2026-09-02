# 分析原图 · 找主体 + 提取配色

输出**仅 JSON**。Step 1 必须从**原图 + 主体**采样颜色，供 Step 3 使用；**禁止**未经提取就套默认色板。

```json
{
  "subject": {
    "type": "person | product | scene",
    "position": "left | right | center | full",
    "has_face": true,
    "extract_hint": "保留粉色 T 与帽子轮廓"
  },
  "negative_space": ["top", "left"],
  "mood": "高能量 | vlog | 旅行 | 探店 | 日常",
  "extracted_palette": {
    "from_subject": [
      { "hex": "#F472B6", "source": "粉色 T 恤", "role": "accent_primary" },
      { "hex": "#1F2937", "source": "黑色帽子", "role": "accent_dark" }
    ],
    "from_background": [
      { "hex": "#374151", "source": "沥青路面", "role": "bg_dark" },
      { "hex": "#6B7280", "source": "远景建筑", "role": "bg_mid" }
    ],
    "from_highlights": [
      { "hex": "#FACC15", "source": "画面高光/环境光", "role": "pop" }
    ]
  },
  "text_zone": {
    "brightness": "dark | mid | light",
    "dominant_hex": "#374151"
  },
  "color_roles": {
    "title_fill": "#FFFFFF",
    "title_outline": "#FACC15",
    "doodle_stroke": "#FACC15",
    "subject_outline": "#FACC15",
    "block_primary": "#2563EB",
    "block_secondary": "#FDE047"
  },
  "extraction_notes": "title_fill 取主体粉的高亮互补；doodle 用环境黄光；block 从背景冷灰加深饱和",
  "background_treatment": "keep_dark | blur | color_blocks",
  "recommended_presets": {
    "exaggerated_headline": "短句可霸屏",
    "doodle_fresh": "叙事/夜景/户外",
    "color_block": "活动/旅行/探店"
  },
  "reasoning_one_line": "暗底+粉衣，提取粉/黄/深灰，白字黄描边"
}
```

## 配色提取规则

### 1 · 采样来源（按优先级）

| 来源 | 采什么 | 用途 |
|------|--------|------|
| **主体** | 服装主色、产品色、发色、配饰 | 标题 fill、accent、doodle、描边 |
| **背景** | 天空/墙面/地面/环境主色 | 文字区底、色块 base、对比参考 |
| **高光/环境光** | 霓虹、阳光、反光 | pop 色、doodle、第二行标题强调 |

每类至少采 **1 色**，全图共 **4～6 个 hex**，带来源说明。

### 2 · 分配到 color_roles

| 角色 | 怎么取 |
|------|--------|
| title_fill | 优先主体 accent；与 text_zone 对比 **≥ 4.5:1**，不够则在同色相 family 内调明度 |
| title_outline | 主体第二色 / highlights pop / 与 fill 形成 AA 双色（如红 fill + 黄 outline） |
| doodle_stroke / subject_outline | 优先 `from_subject` 或 `from_highlights`，与底 **≥ 3:1** |
| block_primary / block_secondary | color_block 专用：从 background + subject **加深或提饱和**，两色互不冲突 |

### 3 · WCAG 约束

- 提取色若未达 AA：**只调明度/饱和度**，不换色相 family（仍算「从图提取」）
- 仍不够 → 加 scrim 或 `white_thick` / `black_thick` 描边
- `color_roles` 每个 hex 注明预计对比度或 `verified: true`

### 4 · 禁止

- 不看图直接填 `#FFFFFF` / `#E8C547` 等模板色
- 与画面无关的随机配色

## 其他判断

| 维度 | 看什么 |
|------|--------|
| 主体 | 能否放大；哪些颜色来自主体 |
| 背景 | 文字区亮度 → 决定 fill 调亮还是调暗 |
| 色块 | block 色从 extracted_palette 衍生，非固定蓝黄 |
