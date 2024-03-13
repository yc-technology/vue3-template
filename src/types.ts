import type { App } from 'vue'
import type { Router } from 'vue-router'

export interface ViteContext {
  app: App<Element>
  router: Router
}

export type UserModule = (ctx: ViteContext) => void
