<template>
  <div class="img-view">
    <transition name="fade">
      <div v-if="showCharL1" class="img-l1" :style="styleL1">
        <i :class="effectL1" class="effectBase"></i>
        <img :class="motionL1" :src="showCharL1" />
        <!-- <i :class="effectL1"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharL2" class="img-l2" :style="styleL2">
        <i :class="effectL2" class="effectBase"></i>
        <img :class="motionL2" :src="showCharL2" />
        <!-- <i :class="effectL2"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharC" class="img-c">
        <i :class="effectC" class="effectBase"></i>
        <img :class="motionC" :src="showCharC" :style="styleC" />
        <!-- <i :class="effectC"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR1" class="img-r1">
        <i :class="effectR1" class="effectBase"></i>
        <img :class="motionR1" :src="showCharR1" :style="styleR1" />
        <!-- <i :class="effectR1"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR2" class="img-r2">
        <i :class="effectR2" class="effectBase"></i>
        <img :class="motionR2" :src="showCharR2" :style="styleR2" />
        <!-- <i :class="effectR2"></i> -->
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      // motionTypeL1: "none",
      // motionTypeL2: "none",
      // motionTypeC: "none",
      // motionTypeR1: "none",
      // motionTypeR2: "none"
    };
  },
  props: {
    activeMotion: Object,
    activeEffect: Object
  },
  computed: {
    ...mapGetters({
      npc: "getNpc"
    }),
    showCharL1: function() {
      return this.npc.L1.img;
    },
    showCharL2: function() {
      return this.npc.L2.img;
    },
    showCharC: function() {
      return this.npc.C.img;
    },
    showCharR1: function() {
      return this.npc.R1.img;
    },
    showCharR2: function() {
      return this.npc.R2.img;
    },
    styleL1: function() {
      return {
        opacity: this.npc.L1.opacity,
        zIndex: this.npc.L1.zIndex
      };
    },
    styleL2: function() {
      return {
        opacity: this.npc.L2.opacity,
        zIndex: this.npc.L2.zIndex
      };
    },
    styleC: function() {
      return {
        opacity: this.npc.C.opacity,
        zIndex: this.npc.C.zIndex
      };
    },
    styleR1: function() {
      return {
        opacity: this.npc.R1.opacity,
        zIndex: this.npc.R1.zIndex
      };
    },
    styleR2: function() {
      return {
        opacity: this.npc.R2.opacity,
        zIndex: this.npc.R2.zIndex
      };
    },
    motionL1: function() {
      return this.npc.L1.motion;
    },
    motionL2: function() {
      return this.npc.L2.motion;
    },
    motionC: function() {
      return this.npc.C.motion;
    },
    motionR1: function() {
      return this.npc.R1.motion;
    },
    motionR2: function() {
      return this.npc.R2.motion;
    },
    effectL1: function() {
      return this.npc.L1.effect;
    },
    effectL2: function() {
      return this.npc.L2.effect;
    },
    effectC: function() {
      return this.npc.C.effect;
    },
    effectR1: function() {
      return this.npc.R1.effect;
    },
    effectR2: function() {
      return this.npc.R2.effect;
    }
  },
  mounted: function() {
    // const unwatchL1 = this.$store.subscribe((mutation, state) => {
    //   if (mutation.type === "setMotionL1") {
    //     console.log(this.npc.L1);
    //     this.changeMotionL1(this.npc.L1);
    //   }
    // });
  },
  methods: {
    // changeMotionL1(npcObj) {
    //   console.log(npcObj.motion);
    //   if (npcObj.isMotion) {
    //     this.motionTypeL1 = npcObj.motion;
    //   } else {
    //     npcObj.motionTypeL1 = "none";
    //   }
    // },
    // changeEffect() {}
  }
};
</script>

<style scoped>
.img-view {
  width: 100%;
  height: 0%;
}

.img-l1 {
  position: absolute;
  bottom: 0;
  left: -5%;
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
  left: 65%;
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
  animation: anime1 0.5s linear 0s infinite;
}

.effectBase {
  position: absolute;
  font-size: 40px;
  z-index: 50;
}

.furiko {
  animation: furiko 0.5s ease-in-out 0s infinite alternate;
}

@keyframes furiko {
  0% {
    transform: rotate(0deg);
    transform-origin: 50px 50px;
  }
  100% {
    transform: rotate(30deg);
    transform-origin: 50px 50px;
  }
}

.angry {
  top: 30px;
  left: 100px;
  color: red;
  animation: pop 0.2s ease-in-out 0s infinite alternate;
}

@keyframes pop {
  0% {
    top: 30px;
    left: 100px;
  }
  100% {
    top: 0px;
    left: 100px;
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