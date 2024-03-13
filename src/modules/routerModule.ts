import { type UserModule } from '~/types'

export const install: UserModule = ({ app, router }) => {
  app.use(router)
}
