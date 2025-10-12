import {
    createApp,
    defineComponent,
    h,
    App,
    ref,
    defineAsyncComponent,
} from 'vue'
import Modal from './Modal.vue'
export function useModal<T>({component, attrs}): Promise<void> {
    return new Promise((resolve) => {
        const modalDiv = document.createElement('div')
        document.body.appendChild(modalDiv)
        const Data = ref([])
        const closeHandler = () => {
            app.unmount()
            document.body.removeChild(modalDiv)
        }

        const submitHandler = () => {
            closeHandler()
            resolve(Data.value as any)
        }

        const changeDataHandler = (data: Object) => {
            const key = Object.keys(data)[0]
            Data.value[key] = data[key]
        }

        const ModalWrapper = defineComponent({
            render() {
                return h(
                    Modal as any,
                    {
                        onSubmit: submitHandler,
                        onClose: closeHandler,
                    },
                    {
                        default: () =>
                            h(
                                defineAsyncComponent(() => component),
                                {
                                    ...attrs,
                                    onChange: changeDataHandler,
                                }
                            ),
                    }
                )
            },
        })
        const app: App = createApp(ModalWrapper)
        app.mount(modalDiv)
    })
}
