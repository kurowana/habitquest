<template>
  <div class="img-view">
    <img class="img-l1" :src="showCharL1" />
    <img class="img-l2" :src="showCharL2" />
    <img class="img-c" :src="showCharC" />
    <img class="img-r1" :src="showCharR1" />
    <img class="img-r2" :src="showCharR2" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    showCharL1: function() {
      return this.$store.state.eventStore.charImgL1;
    },
    showCharL2: function() {
      return this.$store.state.eventStore.charImgL2;
    },
    showCharC: function() {
      return this.$store.state.eventStore.charImgC;
    },
    showCharR1: function() {
      return this.$store.state.eventStore.charImgR1;
    },
    showCharR2: function() {
      return this.$store.state.eventStore.charImgR2;
    }
  }
};
</script>

<style scoped>
.img-view {
  width: 100%;
  height: 100%;
}

.img-l1 {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 30;
  opacity: 0.7;
}
.img-l2 {
  width: 42%;
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: 50;
}
.img-c {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 30%;
}
.img-r1 {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 60%;
}
.img-r2 {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 50%;
}
</style>