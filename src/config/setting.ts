import type { GlobConfig, GlobEnvConfig } from '~/types/env'

import { isDevMode } from '~/config/env'

function getGlobEnvConfig(): GlobEnvConfig {
  const env = import.meta.env
  return env as unknown as GlobEnvConfig
}

const reg = /[a-zA-Z_]*/

function getShortName(env: any) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '')
}

const ENV_NAME = getShortName(import.meta.env)
const ENV = (isDevMode() ? getGlobEnvConfig() : window[ENV_NAME as any]) as unknown as GlobEnvConfig

const {
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_APP_VERSION,
  VITE_GLOB_PUBLIC_PATH,
  VITE_GLOB_OPEN_AES_ENCRYPT,
  VITE_GLOB_OPEN_SENTRY,
  VITE_GLOB_SENTRY_DSN
} = ENV

if (!reg.test(VITE_GLOB_APP_SHORT_NAME))
  console.warn('VITE_GLOB_APP_SHORT_NAME 变量只能是字符/下划线,请在环境变量中修改并重新运行。')

export function useGlobSetting(): Readonly<GlobConfig> {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: 'template',
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    version: VITE_GLOB_APP_VERSION,
    publicPath: VITE_GLOB_PUBLIC_PATH,
    openAesEncrypt: VITE_GLOB_OPEN_AES_ENCRYPT === 'true',
    openSentry: VITE_GLOB_OPEN_SENTRY === 'true',
    sentryDsn: VITE_GLOB_SENTRY_DSN
  }
  return glob as Readonly<GlobConfig>
}

export const globSetting = useGlobSetting()

// Generate cache key according to version
export function getStorageShortName() {
  useGlobSetting()
  return `${VITE_GLOB_APP_SHORT_NAME}__${import.meta.env.MODE}__`.toUpperCase()
}
