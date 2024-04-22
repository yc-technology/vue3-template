import path from 'node:path'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
// import Preview from 'vite-plugin-vue-component-preview'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import Layout from 'vite-plugin-vue-layouts'

import { visualizer } from 'rollup-plugin-visualizer'
import { createVitePlugins } from './build/plugins'
import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'

import pkg from './package.json'

export default ({ command, mode }: ConfigEnv) => {
  const root: string = process.cwd()
  const env = loadEnv(mode, root)
  env.VITE_GLOB_APP_VERSION = `${pkg.version}`
  const viteEnv = wrapperEnv(env)
  const isBuild = command === 'build'
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PROXY } = viteEnv

  return defineConfig({
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: /^~\//,
          replacement: `${path.resolve(__dirname, 'src')}/`
        },
        {
          find: /^@\//,
          replacement: `${path.resolve(__dirname, 'src')}/`
        },
        {
          find: /^vue$/,
          replacement: `vue/dist/vue.esm-browser${isBuild ? '.prod' : ''}`
        }
      ]
      // dedupe: ['vue'],
    },
    build: {
      rollupOptions: {
        external: ['vue', 'vue-router', 'vue-i18n'],
        plugins: [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true
          })
        ],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // 让每个插件都打包成独立的文件
              return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
            }
          }
        }
      },
      minify: 'terser',
      sourcemap: VITE_DROP_CONSOLE,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
          drop_debugger: VITE_DROP_CONSOLE
        }
      }
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },

    plugins: [
      Vue(),
      vueJsx(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/stores', 'src/singleton'],
        vueTemplate: true
      }),

      Layout({
        extensions: ['vue', 'tsx']
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts'
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [path.resolve(__dirname, 'locales/**')]
      }),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:3333/__inspect/ to see the inspector
      Inspect(),

      ...createVitePlugins(viteEnv, isBuild)
    ]
  })
}
