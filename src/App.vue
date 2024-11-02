<script setup lang="jsx">
import {useModal} from './components/Modal/useModals2'
import Modal from './components/Modal/Modal.vue'
import htmlFileContent from './components/Modal/html-file'
const {showModal} = useModal()

const content = (
    <div onClick={() => console.log('Событие нажатия в JSX стиле')}>
        <h1>Some sample title2</h1>
        <p>Some sample paragraph.</p>
    </div>
)

const openModal = () => {
    showModal(Modal, {
        isOpen: true,
        htmlContent: content,
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
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
