import path from 'node:path'
import generateApi from 'swagger-typescript-api'
import dotenv from 'dotenv'
// 获取
const defaultEnv = dotenv.config()
const defaultLocalEnv = dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

Object.assign(process.env, defaultEnv.parsed, defaultLocalEnv.parsed)

const __dirname = new URL('.', import.meta.url).pathname

export function generateSwaggerApi(options: { dir: string; url: string }) {
  const { dir, url } = options
  generateApi.generateApi({
    name: 'ApiModel.ts',
    templates: path.resolve(__dirname, './templates'),
    extraTemplates: [
      {
        name: 'nice-axios.ts',
        path: path.resolve(__dirname, './templates/nice-axios.ejs')
      }
    ],
    cleanOutput: true,
    output: path.resolve(process.cwd(), dir),
    url,
    httpClientType: 'axios',
    singleHttpClient: true,
    generateClient: true,
    extractEnums: true,

    modular: true,
    unwrapResponseData: true
  })
}

generateSwaggerApi({
  dir: 'src/apis/swagger',
  url: `${process.env.VITE_API_SWAGGER_DOC_URL}`
})
