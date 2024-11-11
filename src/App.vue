<script setup>
import {ref} from 'vue'
import {useModal} from './components/Modal/useModal'
import CancelButton from './components/CancelButton.vue'

const folder = ref('256')

const openModal = () => {
    useModal({
        slots: {default: CancelButton},
        attrs: {folder},
    }).then((data) => {
        console.log('folder:', data.folder, 'name:', data.name)
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
</template>

<style scoped></style>
