import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/luban-site/',
  title: 'Luban（鲁班）',
  description:
    'VSCodium / VS Code 里的侧边栏 AI 编码助手：说人话 → 它改文件、跑命令、自己验证，然后告诉你改了什么。',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '安装', link: '/guide/install' },
      { text: '快速开始', link: '/guide/quickstart' },
      { text: '三档模式', link: '/guide/modes' },
      { text: 'GitHub', link: 'https://github.com/eppen/luban' }
    ],
    sidebar: [
      {
        text: '上手',
        items: [
          { text: '安装', link: '/guide/install' },
          { text: '快速开始', link: '/guide/quickstart' },
          { text: '三档模式', link: '/guide/modes' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    socialLinks: [{ icon: 'github', link: 'https://github.com/eppen/luban' }]
  }
})
