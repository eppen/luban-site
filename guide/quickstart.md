# 快速开始

三步跑起来。

## 1. 配 provider

面板底部 **⚙**（或命令面板 `Provider settings`），填 `baseUrl` / 模型 / API key，点「测试连接」。纯 CLI 用户跑 `luban config`。

也可以手改 `~/.luban/providers.json`（改完跑命令 `Reload providers.json` 热重载；CLI 里 `/reload`）：

```json
{
  "defaultModel": "deepseek::deepseek-flash",
  "providers": [
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "baseUrl": "https://api.deepseek.com/v1",
      "apiKeyEnv": "DEEPSEEK_API_KEY",
      "models": [
        { "id": "deepseek-flash", "name": "DeepSeek Flash",
          "maxInputTokens": 65536, "maxOutputTokens": 8192, "toolCalling": true }
      ]
    }
  ]
}
```

任何 OpenAI 兼容端点都行（DeepSeek / Ollama / llama.cpp / vLLM…）。本机端点（`localhost` / `127.x`）免 API key。

## 2. 打开面板

活动栏点 Luban 图标，或按 `Cmd+Shift+L`。

## 3. 提需求

用大白话描述要做什么，例如：

```text
新建 utils.js，导出 debounce(fn, ms) 和 throttle(fn, ms)，然后用 node 测一下两者行为
```

它会直接读写你工作区里的文件、跑命令验证，最后用一两句话汇报改了什么。每写一个文件会自动开出原生 diff，你在编辑器里逐块保留 / 撤销。

## 下一步

- 了解 [三档模式](/guide/modes)：Agent / Plan / Chat 分别能做什么
- 完整文档见 [GitHub 仓库 docs/](https://github.com/eppen/luban/tree/main/docs)
