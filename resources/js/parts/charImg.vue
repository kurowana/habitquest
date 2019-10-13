<template>
  <div class="img-view">
    <transition name="fade">
      <div v-if="showCharL1" class="img-l1">
        <!-- <img class="img-l1" :class="{effect:isEffect}" :src="showCharL1" /> -->
        <img :class="effectClass" :src="showCharL1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharL2" class="img-l2">
        <img :class="effectClass" :src="showCharL2" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharC" class="img-c">
        <img :class="effectClass" :src="showCharC" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR1" class="img-r1">
        <img :class="effectClass" :src="showCharR1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR2" class="img-r2">
        <img :class="effectClass" :src="showCharR2" />
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
  props: {
    isEffect: Boolean,
    activeEffect: String
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
    },
    effectClass: function() {
      console.log(this.activeEffect);

      switch (this.activeEffect) {
        case "anime1":
          return "effect";
          break;
        case "anime2":
          return "effect2";
          break;
        default:
          return;
      }
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
  position: absolute;
  bottom: 0;
  left: 0;
}
.img-l1 img {
  /* width: 60%; */
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
  opacity: 0.7;
}
.img-l2 {
  position: absolute;
  bottom: 0;
  left: 12%;
}
.img-l2 img {
  /* width: 60%; */
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
  opacity: 0.7;
}
.img-c {
  position: absolute;
  bottom: 0;
  left: 30%;
}
.img-c img {
  /* width: 60%; */
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
  opacity: 0.7;
}
.img-r1 {
  position: absolute;
  bottom: 0;
  left: 60%;
}
.img-r1 img {
  /* width: 60%; */
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
  opacity: 0.7;
}
.img-r2 {
  position: absolute;
  bottom: 0;
  left: 48%;
}
.img-r2 img {
  /* width: 60%; */
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
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
.effect {
  animation: anime1 0.2s ease-in-out 0s 10;
}

.effect2 {
  animation: anime2 0.2s ease-in-out 0s 10;
}

@keyframes anime1 {
  0% {
    left: 0;
  }
  25% {
    left: 10px;
  }
  75% {
    left: -10px;
  }
  100% {
    left: 0;
  }
}

@keyframes anime2 {
  0% {
    left: 0;
  }
  25% {
    left: 1px;
  }
  75% {
    left: -1px;
  }
  100% {
    left: 0;
  }
}
</style>