<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useModalShowExample } from "../modal-example-2/useModalShowExample";

const modalResponse = ref<boolean>();

const handleClick = async () => {
  console.log(typeof modalResponse.value);
  modalResponse.value = await useModalShowExample();
};

watchEffect(() => {
  console.log(typeof modalResponse.value);
});
</script>

<template>
  <div>
    <p>Пример 2</p>
    <div>
      Модальное окно и контент без props, нет определённого возвращаемого
      значения: будет возвращён boolean
    </div>
    <button @click="handleClick">Открыть модальное окно</button>

    <div>
      <p>Результат работы модального окна:</p>
      <p>{{ modalResponse }}</p>
    </div>
  </div>
</template>
