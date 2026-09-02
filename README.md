# handwritten-xhs-cover

Agent Skill：给一张底图 + 标题，自动生成**小红书爆款手写风封面**。

支持 Cursor、豆包工作任务、Coze、Trae 等任意 Agent 平台。

## 能做什么

- 分析原图留白与主体位置
- 自动选择 4 种排版 preset（竖排情绪 / 印章旅行 / 描边人物 / 散落关键词）
- 并行输出 A 保守版 + B 情绪版
- 校验中文标题是否正确

## 快速开始

### Cursor

```
@handwritten-xhs-cover 用这张原图，标题「要疯要野要自由」，出手写风封面
```

将本仓库克隆到 `.cursor/skills/handwritten-xhs-cover/`，或在对话中指定本目录路径。

### 豆包工作任务

```
请加载并严格执行本仓库全部 Skill 文件，然后等我发原图和标题。
```

发图后：

```
用手写风封面 Skill，标题写「XXX」
```

详细说明见 [INSTALL.md](./INSTALL.md)。

## 目录结构

```
SKILL.md              # 主工作流
style-guide.md        # 爆款规则与 preset
prompts/              # 读图、排版、生图 prompt
examples/good-bad.md  # 正反例
schemas/              # layout JSON schema
scripts/bundle.mjs    # 打包成单文件（给豆包粘贴用）
```

打包：

```bash
node scripts/bundle.mjs
```

## 许可

MIT
