<script setup>
import {defineAsyncComponent} from 'vue'
import {useModal} from './components/Modal/useModal'
import CancelButton from './components/CancelButton.vue'

const selectedFolder = (folderName) => {
    console.log(folderName, 'folderName')
}

const confirmedData = (data) => {
    console.log(data)
}

const openModal = () => {
    //в компонент slots.default должен быть встроен emit close
    useModal({
        component: defineAsyncComponent(() =>
            import('./components/Modal/ModalRed.vue')
        ),
        slots: {default: CancelButton},
        props: {defaultFolder: '2'},
        emits: {
            onSelectedFolder: selectedFolder,
            onConfirm: confirmedData,
        },
    })
}
</script>

<template>
    <button type="button" class="btn" @click="openModal">Open Modal!</button>
</template>

<style scoped></style>
