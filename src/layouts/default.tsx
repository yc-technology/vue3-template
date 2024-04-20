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
  setup(props: XProps, ctx) {
    return () => (
      <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <RouterView />
        <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
          [Default Layout]
        </div>
      </main>
    )
  }
})
