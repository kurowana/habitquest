<template>
  <div class="modal-window">
    <slot modal-content></slot>
  </div>
</template>

<style scoped>
.modal-window {
  display: block;
  position: absolute;
  z-index: 100;
}
</style>