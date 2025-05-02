import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Waffle's Blog",
  description: '紀錄生活 & 專案的地方',
  themeConfig: {
    outline: {
      label: '目錄' // ← 這裡改成你要的名稱
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '../Img/Home.png',
      dark: '../Img/Home.png',
      alt: 'Opshell Logo'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '✨️ Vitepress Thirty Day',
        link: '/vitepress-thirty-day'
      },
      {
        text: 'Article',
        items: [
          {
            text: "Life's Mumurs",
            link: '/article/life-mumurs/life'
          },
          {
            text: 'Code Sea',
            items: [
              {
                text: 'typescript',
                link: '/article/code-sea/typescript/day-1'
              },
              {
                text: 'vitepress',
                link: '/article/code-sea/vitepress/day-1'
              }
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
