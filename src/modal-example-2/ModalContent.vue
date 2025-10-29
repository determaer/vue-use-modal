<template>
  <div style="padding: 10px">
    <span>
      Содержимое модального окна (типичное подтверждение какого-то действия)
    </span>
    <div style="margin-top: 10px">
      <button @click="$emit('submit')">ОК</button>
      <button @click="$emit('close')">Отмена</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["submit", "close"]);
</script>
