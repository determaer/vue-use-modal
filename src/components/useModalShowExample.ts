import { useModal } from './useModal';
import ModalWithProps from './ModalWithProps.vue';

export const useModalShowExample = async () : Promise<{ [key: string]: unknown } | never> => {
  try{
    const data = await useModal({
      //в component должен быть встроен emit change(key: value)
      component: import('./ModalContent.vue'),
      Modal: ModalWithProps,
      attrs: {
        info: 2223
      },
      modalAttrs: {
        modalInfo: 'info in modal section'
      }
    })
    
    if (typeof data == 'object'){
      return data
    }
  }
  catch{}
  throw new Error('Ошибка при работе с модальным окном...')
}
