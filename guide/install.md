# 安装

Luban 是普通扩展，**零源码补丁**（不动编辑器源码）。四种装法任选其一。

## 安装途径

| 途径 | 做法 |
|---|---|
| **VS Code 官方市场** | 扩展面板搜 `Luban`，或打开 [marketplace 页面](https://marketplace.visualstudio.com/items?itemName=liuhualiang.luban) |
| **Open VSX**（VSCodium 默认） | 扩展面板搜 `Luban` |
| **VSIX** | 从 [Releases](https://github.com/eppen/luban/releases) 下载 `luban-v*.vsix`，扩展面板 `⋯` → **Install from VSIX…**；或命令行 `code --install-extension luban-v1.23.2.vsix`（VSCodium 用 `codium`） |
| **内置扩展**（仅 VSCodium） | `./install-into-vscodium.sh`，装成 App 级扩展；每次升级 VSCodium 后要重跑 |

## 前置条件

- VS Code / VSCodium **1.100+**
- `~/.luban/providers.json` 里至少配好一个 provider（扩展面板、`luban config` 向导，或手改）
- 对应的 API key（环境变量或 `~/.hermes/.env`）；**本机端点免 key**（`localhost` / `127.x` 的 Ollama、llama.cpp、vLLM 等直接用）

## 装成内置扩展（脚本，仅 VSCodium）

```bash
cd ~/luban
./install-into-vscodium.sh                  # 默认装到 ~/Applications/VSCodium.app
# 或指定路径：./install-into-vscodium.sh /Applications/VSCodium.app
```

脚本做四件事：

1. 复制扩展到 `VSCodium.app/Contents/Resources/app/extensions/luban`
2. 备份 `product.json`（`.orig`，只备一次）并把 `nameShort` / `nameLong` 改成 `Luban`
3. 删掉 `~/.vscode-oss/extensions/` 下的同名副本和 `extensions.json`
4. 提示你重启

重启后侧边栏会**自动打开**（可用设置项 `luban.autoOpen` 关掉）。这种方式不跟随市场自动更新，日常建议用市场版。

## 命令行（CLI）

不想开编辑器也能用：CLI 是同一个 agent 循环的无头入口，和扩展共用 `~/.luban/providers.json`（配好的 provider 两边通用）。

```bash
npm i -g @luban-code/luban-code
luban --version          # 应打印 luban 1.x.y
```

包带三个可执行入口：

| 命令 | 用途 |
|---|---|
| `luban` | 主入口（`luban-code` 是它的同义命令） |
| `luban-acp` | ACP 协议模式，供编辑器 / 客户端接入 |

升级 CLI 自身：

```bash
luban upgrade            # 检查并安装最新版
luban upgrade --check    # 只检查不安装：有更新退 1，无更新退 0（脚本 / CI 用）
```

- 升级成功后当前进程不会热更新，**重开终端**才生效。
- 不想装到全局，可以临时跑：`npx @luban-code/luban-code@latest "<任务描述>"`（每次都取最新，不落盘到环境里）。

## 下一步

装好后看 [快速开始](/guide/quickstart) 配 provider、打开面板、提第一个需求。
