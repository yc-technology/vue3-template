import { ElButton } from 'element-plus'
import type { SetupContext } from 'vue'
import JSXCounter from '~/components/jsxCounter'
type FComponentProps = {}

type Events = {
  sendMessage(message: string): void
}

export default defineComponent({
  name: 'HomePage',
  props: {},
  setup(props: FComponentProps, context: SetupContext<Events>) {
    const a = ref(1)
    consola.log(a.value)
    return () => (
      <div>
        <JSXCounter
          message="ddd"
          y={a.value}
          items={[{ a: 1 }]}
          onSendMessage={(v) => console.log(v)}
          class={[{ 'flex items-center': true }, 'justify-center']}>
          {{
            default: (data: { foo: string }) => <div>{data.foo}</div>
          }}
        </JSXCounter>
        <ElButton onClick={() => a.value++} type="primary">
          add
        </ElButton>
      </div>
    )
  }
})
