# Vue Use Modal

This library was created to simplify utilization process of modal windows in Vue applications with use of async components. 

## Description

There are 2 main entities presented in library you can import:
- useModal - a composable function for reusing the modal window work logic
- Modal - a Vue component realizing modal wrapper

### useModal
useModal function allows to work with preloaded modal wrappers and dynamically imported target content components. It using embedded vue API - createApp, defineComponent, h, defineAsyncComponent. 

| Prop  | Type | Destination |
| ------------- | ------------- | ------------- | 
| component  | Promise<Component>  | Required: Dynamically imported target content components|
| loadingComponent  | Component  | Optional: Component using while target component not available |
| errorComponent  | Component  | Optional: Component using in case of target component download error  |
| timeout  | number  | Optional: delay time to show an errorComponent |
| attrs  | object | Optional: Target content component props from defineProps |
| Modal  | Component  | Required: Modal wrapper component |
| modalAttrs | object | Optional: Modal wrapper component props from defineProps |

### useModal Lifecycle
Lifecycle of such modal window includes several events:
- 'change' - changing inner Data object's field with {key: value} syntax
- 'submit' - resolving modal window's promise with returning Data and unmounting
- 'close' - unmounting modal window without any further proceedings

### Modal Wrapper

Modal wrapper includes modal backdrop and active frame with slot #default. You can define your own style attributes via existing classes:
- .use-modal-wrapper-backdrop
- .use-modal-wrapper-frame

If necessary you can define your own modal wrapper and use it in Modal prop of useModal function

## Usage

Make sure you have some component need to be presented in modal window. This component must have emits enlisted previously in useModal Lifecycle. 

```vue
<script setup lang="ts">
//example of using in some vue component
const emit = defineEmits(['change', 'submit', 'close']);

const handleChange = (key: string, value: Define your type here) => {
  emit('change', {[key]: value})
}

</script>
```

Create useModal'...'.ts, where 

```ts
import { Modal, useModal } from '@determaer/vue-use-modal'

export const useModalShowExample = async () : Promise<Define your return type here> => {
  const data = await useModal({
    component: import('./ModalContent.vue'),
    Modal, //here you can use any another component
    attrs: {
      info: 2223
    },
    modalAttrs: {
      modalInfo: 'info in modal section'
    }
  })

  //some action with result
}

```

Call this function somewhere in your app

```vue
<script setup>
import { useModalShowExample } from './useModalShowExample';

const handleClick = async () => {
  const data = await useModalShowExample()
  // some action with result
}

</script>
```


## Installation

` npm install @determaer/vue-use-modal `
