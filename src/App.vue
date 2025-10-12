<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useModalShowExample } from './components/useModalShowExample';

const modalResponse = ref<{[key: string]: unknown}>()

const handleClick = async () => {
  console.log(typeof modalResponse.value)
  modalResponse.value = await useModalShowExample()
}

watchEffect(() => {
  console.log(typeof modalResponse.value)
})

</script>

<template>
  <div>Текст</div>
  <button @click="handleClick">
    Открыть модальное окно
  </button>

  <div>
    <p>Результат работы модального окна:</p>
    <p>{{ modalResponse }}</p>
  </div>

</template>

<style scoped>
</style>
