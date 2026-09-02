# 风格参考图

将爆款手写风封面样图放在此目录，供 Agent 对照 preset。文件名建议：

| 文件 | Preset | 说明 |
|------|--------|------|
| `preset-a-vertical.jpg` | `vertical_emotion` | 人物一侧 + 竖排字 + 箭头 |
| `preset-b-travel.jpg` | `stamp_travel` | 旅行户外 + 竖排白字 + 红印章 |
| `preset-c-outline.jpg` | `subject_outline` | 人物描边 + 多行情绪句 |
| `preset-d-scattered.jpg` | `scattered_keywords` | 去色底 + 散落关键词 |

## 使用方式

生图前：

1. 读 `style-guide.md` 中对应 preset 描述
2. 若本目录有图，打开对照构图与字色
3. 在生图 prompt 中加：`Match the typography style of reference preset {X}`

## 添加参考图

把你的 4 张样图复制到此目录并按上表命名即可。无图时 Skill 仍可按文字指南运行。
