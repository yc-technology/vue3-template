import { NButton } from 'naive-ui'
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
    const router = useRouter()
    return () => (
      <main class="center px-4 py-10 teal-700 dark:gray-200">
        <div class="text-4xl">
          <div i-carbon-warning inline-block />
        </div>
        <RouterView />
        <div>
          <NButton class="m-3 mt-8 text-sm " onClick={() => router.back()}>
            Back
          </NButton>
        </div>
      </main>
    )
  }
})
