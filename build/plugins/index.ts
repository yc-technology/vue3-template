import type { PluginOption } from 'vite'
import { externalsPlugin } from './external'
import { configHtmlPlugin } from './html'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [

  ]
  isBuild && vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))
  isBuild && vitePlugins.push(externalsPlugin(viteEnv, isBuild))
  return vitePlugins
}
