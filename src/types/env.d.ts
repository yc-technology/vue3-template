export interface GlobConfig {
  // 网站标题
  title: string

  apiUrl: string

  shortName: string

  version: string

  publicPath: string

  openAesEncrypt: boolean

  openSentry: boolean

  sentryDsn: string
}

export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string

  VITE_GLOB_API_URL: string

  VITE_GLOB_APP_SHORT_NAME: string

  VITE_GLOB_APP_VERSION: string

  VITE_GLOB_PUBLIC_PATH: string

  VITE_GLOB_ROUTE_BASE_URL: string

  VITE_GLOB_OPEN_AES_ENCRYPT: string

  VITE_GLOB_OPEN_SENTRY: string

  VITE_GLOB_SENTRY_DSN: string
}
