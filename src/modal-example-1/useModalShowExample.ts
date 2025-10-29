import { useModal } from "../components/useModal";
import ModalWithProps from "../modal-example-1/ModalWithProps.vue";
import type { Return, Attrs, ModalAttrs } from "./modalTypes";

export const useModalShowExample = async (): Promise<Return | true> => {
  try {
    const data = await useModal<Return, Attrs, ModalAttrs>({
      //в component должен быть встроен emit change(key: value)
      component: import("../modal-example-1/ModalContent.vue"),
      Modal: ModalWithProps,
      attrs: {
        info: 2223,
      },
    });
    console.log("www");
    return data;
  } catch {}
  throw new Error("Ошибка при работе с модальным окном...");
};
