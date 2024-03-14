import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { globSetting } from '~/config/setting'

export const staticRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('~/pages/home/index')
  }
]
const routes = setupLayouts(staticRoutes)

export const router = createRouter({
  history: createWebHistory(globSetting.routeBasePath),
  routes
})
