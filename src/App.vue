<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useModalShowExample } from "./modal-example-1/useModalShowExample";
import { type Return, typeOfReturn } from "./modal-example-1/modalTypes";

const modalResponse = ref<Return>();

const handleClick = async () => {
  console.log(typeof modalResponse.value);
  const data = await useModalShowExample();
  if (typeOfReturn(data)) {
    modalResponse.value = data;
  }
};

watchEffect(() => {
  console.log(typeof modalResponse.value);
});
</script>

<template>
  <div>Текст</div>
  <button @click="handleClick">Открыть модальное окно</button>

  <div>
    <p>Результат работы модального окна:</p>
    <p>{{ modalResponse }}</p>
  </div>
</template>

<style scoped></style>

