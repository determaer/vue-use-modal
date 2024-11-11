<script setup>
import {ref} from 'vue'
import {useModal} from './components/Modal/useModal'

const folder = ref('256')

const openModal = () => {
    useModal({
        //в component должен быть встроен emit change(key: value)
        component: import('./components/CancelButton.vue'),
        attrs: {folder},
    }).then((data) => {
        //при событии submit
        console.log('folder:', data.folder, 'name:', data.name)
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
</template>

<style scoped></style>
