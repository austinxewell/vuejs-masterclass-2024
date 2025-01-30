import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// Import Tailwind CSS and Autoprefixer as ES modules
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon'),
        },
      },
    }),
    vueDevTools(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', VueRouterAutoImports],
      dts: true,
      viteOptimizeDeps: true,
    }),
    Components({}),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], // Use ES module imports instead of require
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
