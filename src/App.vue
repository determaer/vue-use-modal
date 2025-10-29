<script setup lang="ts">
import FirstExample from "./modal-example-1/FirstExample.vue";
import SecondExample from "./modal-example-2/SecondExample.vue";
</script>

<template>
  <div class="container">
    <FirstExample class="item" />
    <SecondExample class="item" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.item {
  width: 250px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
}
</style>

