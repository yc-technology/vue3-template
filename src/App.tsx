import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
import { ExtractPublicPropTypes } from 'vue'
import { RouterView } from 'vue-router'

/**
 * 属性声明
 */
const xProps = {}

/**
 * 属性类型
 */
type XProps = ExtractPublicPropTypes<typeof xProps>

export default defineComponent({
  props: xProps,
  emits: {
    // someEmit: (value: string) => typeof value === 'string'
  },
  setup(_: XProps) {
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#409EFF',
        primaryColorPressed: '#66b1ff',
        primaryColorHover: '#66b1ff',
        primaryColorSuppl: '#66b1ff'
      }
    }
    return () => (
      <NConfigProvider themeOverrides={themeOverrides}>
        <RouterView />
      </NConfigProvider>
    )
  }
})
