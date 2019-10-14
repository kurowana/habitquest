<template>
  <div class="modal-window">
    <slot modal-content></slot>
  </div>
</template>

<style scoped>
.modal-window {
  display: block;
  position: absolute;
  background: linear-gradient(45deg, #000000, #666666);
  width: 760px;
  height: 400px;
  padding: 20px;
  top: 20px;
  left: 20px;
  overflow: auto;
  z-index: 100;
  opacity: 0.9;
  border: 2px double gold;
  border-radius: 10px;
  color: white;
}
</style>