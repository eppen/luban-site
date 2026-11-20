---
layout: home

hero:
  name: Luban
  text: 侧边栏 AI 编码助手
  tagline: 说人话 → 它改文件、跑命令、自己验证，然后告诉你改了什么
  actions:
    - theme: brand
      text: 安装
      link: /guide/install
    - theme: alt
      text: 快速开始
      link: /guide/quickstart

features:
  - title: 审阅在编辑器里
    details: 每写一个文件自动开出原生 diff，标题栏与两侧 CodeLens 逐块保留 / 撤销，聊天区只留一行摘要。
  - title: 只读是真的只读
    details: Plan 模式下写文件的工具根本没注册，命令还要过一道只读校验；产出的计划落成 Markdown，你改完再执行就按改后的走。
  - title: 为省 token 而设计
    details: 消息排布对齐前缀缓存（第 2 轮起通常 95%+ 命中），每轮显示输入 / 输出 / 缓存 / 上下文占用，另有本地账本与用量看板。
  - title: 不挑模型
    details: 任何 OpenAI 兼容端点（DeepSeek / Ollama / llama.cpp / vLLM…），API key 存 SecretStorage 不落盘。
  - title: 状态栏状态灯
    details: 右下角一行 (o.o) run_command npm test —— 小木匠「班班」的脸加当前在干嘛，和终端里是同一张脸，点击打开面板。
  - title: 顺手的 Markdown 预览
    details: 代码块语法高亮、本地图片按相对路径显示、编辑器滚动时预览跟着走。渲染器与聊天面板共用，一套规则三处使用。
---

<div class="screenshots">

![聊天面板与行内 diff](/screenshots/panel.png)

![编辑器内的逐块审阅](/screenshots/review.png)

</div>

<div class="footer-note">

零源码补丁（不动编辑器源码）：可以从 VS Code 市场 / Open VSX / VSIX 作为普通扩展安装，也可以用脚本装成 App 的内置扩展。版本 1.79.0 · [English README](https://github.com/eppen/luban#readme)

</div>
