<template>
  <div class="img-view">
    <transition name="fade">
      <div v-if="showCharL1">
        <img class="img-l1" :src="showCharL1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharL2">
        <img class="img-l2" :src="showCharL2" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharC">
        <img class="img-c" :src="showCharC" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR1">
        <img class="img-r1" :src="showCharR1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR2">
        <img class="img-r2" :src="showCharR2" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {};
  },
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
  opacity: 0.7;
}
.img-l2 {
  width: 42%;
  position: absolute;
  bottom: 0;
  left: 10%;
  opacity: 0.7;
}
.img-c {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 30%;
  opacity: 0.7;
}
.img-r1 {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 60%;
  opacity: 0.7;
}
.img-r2 {
  width: 40%;
  position: absolute;
  bottom: 0;
  left: 50%;
  opacity: 0.7;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>