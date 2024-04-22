import { permission } from '~/directives/permission'
import { UserModule } from '~/types'

// 初始化装载指令
export const install: UserModule = ({ app }) => {
  app.directive('permission', permission)
}
