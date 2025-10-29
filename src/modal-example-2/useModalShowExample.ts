import Modal from "../components/Modal.vue";
import { useModal } from "../components/useModal";

export const useModalShowExample = async (): Promise<boolean> => {
  try {
    const data = await useModal({
      //в component должен быть встроен emit change(key: value)
      component: import("../modal-example-2/ModalContent.vue"),
      Modal: Modal,
    });
    if (typeof data == "boolean") {
      return data;
    }
  } catch {}
  throw new Error("Ошибка при работе с модальным окном...");
};
