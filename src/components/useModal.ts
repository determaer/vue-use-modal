import {
  createApp,
  defineComponent,
  h,
  ref,
  defineAsyncComponent,
} from 'vue'

import type { App, Component } from 'vue'

export function useModal({component, loadingComponent, errorComponent, timeout, attrs = {}, Modal, modalAttrs = {}}: {
  component: Promise<Component>, 
  loadingComponent?: Component,
  errorComponent?: Component,
  timeout?: number,
  attrs?: {[key: string]: unknown}, 
  Modal: Component, 
  modalAttrs?: {[key: string]: unknown}}
): Promise<{[key: string]: unknown} | never> {
  return new Promise((resolve) => {
    const modalDiv = document.createElement('div')
    document.body.appendChild(modalDiv)

    const Data = ref<{[key: string]: unknown}>({})
    const closeHandler = () => {
      app.unmount()
      document.body.removeChild(modalDiv)
    }

    const submitHandler = () => {
      closeHandler()
      resolve(Data.value)
    }

    const changeDataHandler = (data: {[key: string]: unknown}) => {
      Object.keys(data).forEach((key) => {
        Data.value[key] = data[key]
      })
    }

    const ModalWrapper = defineComponent({
      render() {
        return h(
          Modal,
          {
            ...modalAttrs,
            onClose: closeHandler,
            onSubmit: submitHandler,
          },
          {
            default: () => h(
              defineAsyncComponent({
                loader: () => component,
                loadingComponent: loadingComponent,
                errorComponent: errorComponent,
                timeout: timeout
              }),
              {
                ...attrs,
                onChange: changeDataHandler,
                onSubmit: submitHandler,
                onClose: closeHandler,
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
