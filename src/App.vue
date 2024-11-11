<script setup>
import {ref} from 'vue'
import {useModal} from './components/Modal/useModal'
import CancelButton from './components/CancelButton.vue'

const folder = ref('')

console.log(CancelButton, import('./components/CancelButton.vue'))

const openModal = () => {
    useModal({
        slots: {default: CancelButton},
        attrs: {folder},
    }).then((data) => {
        console.log(data)
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
</template>

<style scoped></style>
