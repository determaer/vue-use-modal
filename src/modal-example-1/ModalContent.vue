<template>
  <div style="padding: 10px;">
    <span>Содержимое модального окна</span>
    <p>{{ info }}</p>
    <div style="display: flex;">
      <span style="width: 50%;">Вывод id</span>
      <input
        type="checkbox"
        @input="handleChange('ID')"
      >  
    </div>
    <div style="display: flex;">
      <span style="width: 50%;">Вывод name</span>
      <input
        type="checkbox"
        @input="handleChange('name')"
      >  
    </div>
    <div style="margin-top: 10px;">
      <button @click="$emit('submit')">
        ОК
      </button>
      <button @click="$emit('close')">
        Отмена
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
  info: {
    type: Number,
    required: true,
  }
})

const checkboxesState = reactive({
  'ID': false,
  'name': false,
})

const emit = defineEmits(['change', 'submit', 'close']);

const handleChange = (key: 'ID'|'name') => {
  checkboxesState[key] = !checkboxesState[key]
  emit('change', {[key]: checkboxesState[key]})
}

</script>
