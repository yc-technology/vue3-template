import type { HTMLAttributes, SetupContext, SlotsType, VNodeRef } from 'vue'

export interface ChildComponentProps<T> extends HTMLAttributes {
  y: number
}

// ref
export type ChildSecondRef = VNodeRef & {
  dd: string
}

// emit
interface XEmits {
  sendMessage(message: string): void
}

// slots
type ST<T> = SlotsType<{
  default: { foo: string; bar: number }
  item: { data: T }
}>

export default defineComponent(
  <T extends object>(
    props: ChildComponentProps<T>,
    { expose, emit, slots }: SetupContext<XEmits, ST<T>>
  ) => {
    expose({
      dd: 'dd'
    })
    emit('sendMessage', 'ds')

    // 导出
    expose({
      dd: 'dd'
    })

    return () => (
      <div>
        <div>ChildSecond: {props.y}</div>
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
