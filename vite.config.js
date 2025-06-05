// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  // css: {
  //   // 共用全域 SCSS
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./docs/.vitepress/theme/scss/mixin.scss";`,
  //       charset: false
  //     }
  //   }
  // },
  resolve: {
    alias: {
      // 設定別名
      '@': path.resolve(__dirname, '../'), // docs 當根目錄
      '@vitepress': path.resolve(__dirname, 'docs/.vitepress'), // .vitepress 目錄
      '@components': path.resolve(__dirname, '../', 'components'),
      '@data': path.resolve(__dirname, '../', 'data'),
      '@hooks': path.resolve(__dirname, '../', 'hooks'),
      '@pages': path.resolve(__dirname, '../', 'pages'),
      'swiper/vue': 'swiper/vue',
      'swiper/css': 'swiper/css'
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./docs/.vitepress/theme/scss/mixin.scss";`,
  //       charset: false
  //     }
  //   }
  // },
  plugins: [
    vue(),
    svgr(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        {
          // custom
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch']
          ],
          axios: [
            // default imports
            ['default', 'axios']
          ],
          vue: ['PropType', 'defineProps', 'InjectionKey', 'Ref']
        }
      ],
      dirs: [],
      dts: './types/auto-imports.d.ts', // typescript 宣告檔案位置
      vueTemplate: false,
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  build: {
    minify: false, // 關閉混淆
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js', // 入口文件 (e.g., main.js)
        chunkFileNames: 'js/[name].js', // 其他拆分的 JS
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name ?? '')) {
            return 'img/[name][extname]' // 圖片存放於 img/
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name ?? '')) {
            return 'fonts/[name][extname]' // 字型存放於 fonts/
          }
          if (/\.css$/.test(assetInfo.name ?? '')) {
            return 'css/[name][extname]' // CSS 存放於 css/
          }
          return 'assets/[name][extname]' // 其他資源
        }
      }
    }
  },

  base: '/' // 將 <REPO_NAME> 替換為你的 GitHub repository 名稱
  // base: '/Daga-homePage/' // 將 <REPO_NAME> 替換為你的 GitHub repository 名稱
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   chunkSizeWarningLimit: 1000 // 根據需要調整
  // }
})
