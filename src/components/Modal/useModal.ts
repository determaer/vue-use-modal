import {createApp, defineComponent, h, App} from 'vue'
import Modal from './Modal.vue'

export function useModal() {
    function showModal<T>(
        component: T,
        props?: Record<string, unknown>,
        events?: Record<string, (...args: unknown[]) => void>
    ): Promise<void> {
        return new Promise(() => {
            const modalDiv = document.createElement('div')
            document.body.appendChild(modalDiv)

            const closeHandler = () => {
                app.unmount()
                document.body.removeChild(modalDiv)
                console.log('close')
            }

            const ModalWrapper = defineComponent({
                render() {
                    return h(Modal as any, {
                        ...props,
                        onClose: closeHandler,
                        ...events,
                        component: component,
                    })
                },
            })

            const app: App = createApp(ModalWrapper)
            app.mount(modalDiv)
        })
    }

    return {showModal}
}
