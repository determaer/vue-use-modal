import {createApp, defineComponent, h, App} from 'vue'

export function useModal() {
    function showModal<T>(
        component: T,
        props?: Record<string, unknown>,
        events?: Record<string, (...args: unknown[]) => void>
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            const modalDiv = document.createElement('div')
            document.body.appendChild(modalDiv)

            const closeHandler = () => {
                app.unmount()
                document.body.removeChild(modalDiv)
                console.log('close')
            }

            const confirmHandler = (data: any) => {
                app.unmount()
                document.body.removeChild(modalDiv)
                resolve(data)
                console.log('confirm')
            }

            const ModalWrapper = defineComponent({
                render() {
                    return h(component as any, {
                        ...props,
                        onClose: closeHandler,
                        onConfirm: confirmHandler,
                        ...events,
                    })
                },
            })

            const app: App = createApp(ModalWrapper)
            app.mount(modalDiv)
        })
    }

    return {showModal}
}
