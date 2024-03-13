// import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'

import './styles/main.css'
import 'element-plus/dist/index.css'
import { router } from './router'
// const routes = setupLayouts(generatedRoutes)

const app = createApp(App)

Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app, router }))

app.mount('#app')
