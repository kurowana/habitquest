<template>
  <div class="modal-window">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  display: block;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 100;
}
</style>