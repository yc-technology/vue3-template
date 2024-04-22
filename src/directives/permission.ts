import { ObjectDirective } from 'vue'

export function usePermission() {
  const { permissions } = { permissions: ['admin', 'editor', 'visitor'] }

  function hasPermission(code: string): boolean {
    // 如果没有code，直接返回true
    if (!code) return true
    if (permissions && permissions.length > 0) {
      return permissions.indexOf(code) > -1 ? true : false
    }
    return false
  }
  return { hasPermission }
}

export const permission: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding) {
    if (binding.value == undefined) return
    const code = binding.value
    const { hasPermission } = usePermission()
    if (!hasPermission(code)) {
      el.remove()
    }
  }
}
