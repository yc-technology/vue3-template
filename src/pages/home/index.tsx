import { YcButton } from '@yc-tech/vue-component'
import { Type } from 'naive-ui/es/button/src/interface'
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
    const buttonType = ref<Type>('primary')
    consola.log(a.value)
    function onClick() {
      buttonType.value = buttonType.value === 'primary' ? 'warning' : 'primary'
    }
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
        <YcButton onClick={onClick} type={buttonType.value}>
          add
        </YcButton>
      </div>
    )
  }
})
