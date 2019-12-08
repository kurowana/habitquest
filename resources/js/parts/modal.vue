<template>
  <div class="modal-window">
    <slot modal-content></slot>
  </div>
</template>

<style scoped>
.modal-window {
  display: block;
  position: absolute;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(96, 96, 96, 0.9));
  width: 760px;
  height: 400px;
  padding: 20px;
  top: 20px;
  left: 20px;
  overflow: auto;
  z-index: 200;
  border: 2px double gold;
  border-radius: 10px;
  color: white;
}
</style>