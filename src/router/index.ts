import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { globSetting } from '~/config/setting'
import { setupLayouts } from 'virtual:generated-layouts'

export const staticRoutes: RouteRecordRaw[] = [{ path: '/', redirect: '/' }]
const routes = setupLayouts(staticRoutes)

export const router = createRouter({
  history: createWebHistory(globSetting.routeBasePath),
  routes
})
