import { ExtractPublicPropTypes } from 'vue'

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
    return () => <div>NotFound</div>
  }
})
