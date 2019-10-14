<template>
  <div class="img-view">
    <transition name="fade">
      <div v-if="showCharL1" class="img-l1" :style="styleL1">
        <img :class="effectL1" :src="showCharL1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharL2" class="img-l2" :style="styleL2">
        <img :class="effectL2" :src="showCharL2" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharC" class="img-c">
        <img :class="effectC" :src="showCharC" :style="styleC" />
        <i class="fas fa-bolt"></i>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR1" class="img-r1">
        <img :class="effectR1" :src="showCharR1" :style="styleR1" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR2" class="img-r2">
        <img :class="effectR2" :src="showCharR2" :style="styleR2" />
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
    activeMotion: Object
  },
  computed: {
    ...mapGetters({
      imgL1: "getCharImgL1",
      imgL2: "getCharImgL2",
      imgC: "getCharImgC",
      imgR1: "getCharImgR1",
      imgR2: "getCharImgR2"
    }),
    showCharL1: function() {
      return this.imgL1.path;
    },
    showCharL2: function() {
      return this.imgL2.path;
    },
    showCharC: function() {
      return this.imgC.path;
    },
    showCharR1: function() {
      return this.imgR1.path;
    },
    showCharR2: function() {
      return this.imgR2.path;
    },
    styleL1: function() {
      return {
        opacity: this.imgL1.opacity,
        zIndex: this.imgL1.zIndex
      };
    },
    styleL2: function() {
      return {
        opacity: this.imgL2.opacity,
        zIndex: this.imgL2.zIndex
      };
    },
    styleC: function() {
      return {
        opacity: this.imgC.opacity,
        zIndex: this.imgC.zIndex
      };
    },
    styleR1: function() {
      return {
        opacity: this.imgR1.opacity,
        zIndex: this.imgR1.zIndex
      };
    },
    styleR2: function() {
      return {
        opacity: this.imgR2.opacity,
        zIndex: this.imgR2.zIndex
      };
    },
    effectL1: function() {
      return this.changeEffect(this.activeMotion.l1);
    },
    effectL2: function() {
      return this.changeEffect(this.activeMotion.l2);
    },
    effectC: function() {
      return this.changeEffect(this.activeMotion.c);
    },
    effectR1: function() {
      return this.changeEffect(this.activeMotion.r1);
    },
    effectR2: function() {
      return this.changeEffect(this.activeMotion.r2);
    }
  },
  methods: {
    changeEffect: function(effect) {
      switch (effect.type) {
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
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
}
.img-l2 {
  position: absolute;
  bottom: 0;
  left: 12%;
}
.img-l2 img {
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
}
.img-c {
  position: absolute;
  bottom: 0;
  left: 30%;
}
.img-c img {
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
}
.img-r1 {
  position: absolute;
  bottom: 0;
  left: 60%;
}
.img-r1 img {
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
}
.img-r2 {
  position: absolute;
  bottom: 0;
  left: 48%;
}
.img-r2 img {
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
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
  animation: anime1 0.2s ease-in-out 0s infinite;
}

.effect2 {
  animation: anime2 0.2s ease-in-out 0s infinite;
}
.fa-bolt {
  position: absolute;
  top: 10px;
  left: 220px;
  color: orange;
  font-size: 50px;
  z-index: 50;
  animation: furiko 0.5s ease 0s infinite;
}

@keyframes furiko {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
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