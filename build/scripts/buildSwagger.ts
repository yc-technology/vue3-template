import path from 'node:path'
import generateApi from 'swagger-typescript-api'

export function generateSwaggerApi(options: { dir: string; url: string }) {
  const { dir, url } = options
  generateApi.generateApi({
    name: 'ApiModel.ts',
    templates: path.resolve(process.cwd(), './build/templates'),
    extraTemplates: [
      {
        name: 'nice-axios.ts',
        path: path.resolve(process.cwd(), './build/templates/nice-axios.ejs'),
      },
    ],
    cleanOutput: true,
    output: path.resolve(process.cwd(), dir),
    url,
    httpClientType: 'axios',
    singleHttpClient: true,
    // url: 'http://192.168.50.38:8080/v3/api-docs',
    generateClient: true,
    extractEnums: true,
    generateUnionEnums: true,
    modular: true,
    unwrapResponseData: true,
  })
}

generateSwaggerApi({
  dir: 'src/api',
  url: 'xxx',
})

// generateSwaggerApi({
//   dir: 'src/swagger',
//   url: 'http://127.0.0.1:8000/openapi.json',
//   prefix: 'AutoBkp',
//   baseUrl: '',
//   addMethod: true,
// })
