declare interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_PROXY: [string, string][]
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_USE_CDN: boolean
  VITE_DROP_CONSOLE: boolean
  VITE_LEGACY: boolean
  VITE_USE_IMAGEMIN: boolean
  VITE_GENERATE_UI: string
  VITE_GLOB_APP_VERSION: string
}
