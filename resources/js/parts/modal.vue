<template>
  <div>
    <div class="modal-window">
      <div class="modal-content">
        <slot></slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer">footer</slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  background: white;
  display: block;
  position: fixed;
  top: 200px;
  left: 300px;
  z-index: 100;
}
</style>