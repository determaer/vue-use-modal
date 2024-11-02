<script setup>
import {useModal} from './components/Modal/useModal'
import Modal from './components/Modal/Modal.vue'
import {markRaw} from 'vue'
const modal = useModal()

const open = () => {
    modal.component.value = markRaw(Modal)
    modal.showModal()
}
</script>

<template>
    <button type="button" class="btn" @click="() => open()">Open Modal!</button>
    <Modal v-if="modal.show.value" @close="modal.hideModal" />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
