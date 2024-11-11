import {createApp, defineComponent, h, App} from 'vue'
import Modal from './Modal.vue'
export function useModal<T>({component, slots, attrs}): Promise<void> {
    return new Promise((resolve) => {
        const modalDiv = document.createElement('div')
        document.body.appendChild(modalDiv)
        const closeHandler = (data: any) => {
            app.unmount()
            document.body.removeChild(modalDiv)
            console.log('close', data)
            resolve(data)
        }

        const ModalWrapper = defineComponent({
            render() {
                return h(
                    Modal as any,
                    {
                        onClose: closeHandler,
                    },
                    h(slots.default, {
                        ...attrs,
                        onClose: closeHandler,
                    })
                )
            },
        })
        const app: App = createApp(ModalWrapper)
        app.mount(modalDiv)
    })
}
