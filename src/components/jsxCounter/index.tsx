import type { HTMLAttributes, SetupContext, SlotsType, VNodeRef } from 'vue'
import { ChildComponentProps } from '../childComponent'

// 继承的属性不会出现在 props 中
interface Props<T> extends ChildComponentProps<T> {
  message: string
  items: T[]
}
export type ChildSecondRef = VNodeRef & {
  dd: string
}

interface XEmits {
  sendMessage(message: string): void
}

type ST<T> = SlotsType<{
  default: { foo: string; bar: number }
  item: { data: T }
}>

export default defineComponent(
  <T extends object>(
    props: Props<T>,
    { expose, emit, slots, attrs }: SetupContext<XEmits, ST<T>>
  ) => {
    expose({
      dd: 'dd'
    })
    emit('sendMessage', 'ds')

    return () => (
      <div>
        <div>ChildSecond: {props.message}</div>
        <div>{attrs.y}</div>
        <div>{slots.default?.({ foo: '12', bar: 1 })}</div>
      </div>
    )
  },
  {
    emits: {
      sendMessage: (value: string) => typeof value === 'string'
    },

    slots: Object as ST<unknown>
  }
)
