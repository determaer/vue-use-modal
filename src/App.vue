<script setup lang="jsx">
import {useModal} from './components/Modal/useModal'
import CancelButton from './components/CancelButton.vue'

const {showModal} = useModal()

const selectedFolder = (folderName) => {
    console.log(folderName, 'folderName')
}

const confirmedData = (data) => {
    console.log(data)
}

const openModal = () => {
    showModal(
        //способ обратной связи: передать в компонент реакцию на emit (в JSX стиле - on...)
        <CancelButton
            onSelectedFolder={selectedFolder}
            defaultFolder={'2'}
            onConfirm={confirmedData}
        />
    )
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
