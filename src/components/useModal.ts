import { createApp, defineComponent, h, ref, defineAsyncComponent } from "vue";
import type { Component } from "vue";

export function useModal<
  ReturnT extends object = Record<string, unknown>,
  AttrsT extends object = Record<string, unknown>,
  ModalAttrsT extends object = Record<string, unknown>,
>({
  component,
  loadingComponent,
  errorComponent,
  timeout,
  attrs,
  Modal,
  modalAttrs,
}: {
  component: Promise<Component>;
  loadingComponent?: Component;
  errorComponent?: Component;
  timeout?: number;
  attrs?: AttrsT;
  Modal: Component;
  modalAttrs?: ModalAttrsT;
}): Promise<ReturnT | boolean> {
  return new Promise((resolve) => {
    const modalDiv = document.createElement("div");
    document.body.appendChild(modalDiv);

    const Data = ref<ReturnT>(Object.create({}));
    const closeHandler = () => {
      app.unmount();
      document.body.removeChild(modalDiv);
      resolve(false);
    };

    const submitHandler = () => {
      if (Object.keys(Data.value).length > 0) {
        resolve(Data.value);
      }
      resolve(true);
      closeHandler();
    };

    const changeDataHandler = (data: ReturnT) => {
      Object.keys(data).forEach((key) => {
        Data.value[key] = data[key as keyof ReturnT];
      });
    };

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
            default: () =>
              h(
                defineAsyncComponent({
                  loader: () => component,
                  loadingComponent: loadingComponent,
                  errorComponent: errorComponent,
                  timeout: timeout,
                }),
                {
                  ...attrs,
                  onChange: changeDataHandler,
                  onSubmit: submitHandler,
                  onClose: closeHandler,
                },
              ),
          },
        );
      },
    });

    const app = createApp(ModalWrapper);
    app.mount(modalDiv);
  });
}

