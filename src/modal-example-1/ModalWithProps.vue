<script setup lang="ts">
const emit = defineEmits(["close"]);

defineProps({
  modalInfo: {
    type: String,
    required: true,
  },
});

const closeModalOutside = (evt: MouseEvent) => {
  if (
    evt.target instanceof HTMLElement &&
    evt.target.classList.contains("use-modal-wrapper-backdrop")
  ) {
    emit("close");
  }
};
</script>

<template>
  <div class="use-modal-wrapper-backdrop" @click="closeModalOutside">
    <div class="use-modal-wrapper-frame">
      <div>{{ modalInfo }}</div>
      <slot name="default" />
    </div>
  </div>
</template>

<style>
.use-modal-wrapper-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.use-modal-wrapper-frame {
  background: #fff;
  box-shadow: 2px 2px 10px 1px;
  max-width: 300px;
  max-height: 300px;
  overflow-x: auto;
}
</style>
