<template>
  <div class="img-view">
    <transition name="fade">
      <div v-if="showCharL1" class="img-l1" :style="styleL1">
        <i :class="effectL1" class="effectBase"></i>
        <img :class="motionL1" class="motionBase" :src="showCharL1" />
        <!-- <i :class="effectL1"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharL2" class="img-l2" :style="styleL2">
        <i :class="effectL2" class="effectBase"></i>
        <img :class="motionL2" class="motionBase" :src="showCharL2" />
        <!-- <i :class="effectL2"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharC" class="img-c">
        <i :class="effectC" class="effectBase"></i>
        <img :class="motionC" class="motionBase" :src="showCharC" :style="styleC" />
        <!-- <i :class="effectC"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR1" class="img-r1">
        <i :class="effectR1" class="effectBase"></i>
        <img :class="motionR1" class="motionBase" :src="showCharR1" :style="styleR1" />
        <!-- <i :class="effectR1"></i> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showCharR2" class="img-r2">
        <i :class="effectR2" class="effectBase"></i>
        <img :class="motionR2" class="motionBase" :src="showCharR2" :style="styleR2" />
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

/* 立ち絵モーション系 */
.motionBase {
  transition: all 0.5s 0s ease;
}

.tremble {
  animation: tremble 0.2s linear 0s infinite;
}

.jump {
  animation: jump 0.5s ease-in-out 0s infinite;
}

.close {
  transform: scale(1.2);
  opacity: 1;
}

.sit {
  transform: translateY(50px);
  opacity: 1;
}

.leave {
  transform: scale(0.8);
  opacity: 1;
}

.attack {
  animation: attack 1s ease-in-out 0s 1;
}

.dance {
  animation: dance 2s ease 0s infinite;
}

@keyframes tremble {
  0% {
    left: 0;
  }
  25% {
    left: 5px;
  }
  75% {
    left: -5px;
  }
  100% {
    left: 0;
  }
}

@keyframes jump {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 0px;
  }
}

@keyframes attack {
  30% {
    transform: scale(0.8) rotate(-5deg);
  }
  50% {
    transform: scale(1.2) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dance {
  10% {
    transform: translateX(20px) skewY(-10deg);
  }
  20% {
    transform: translateX(40px) skewY(-10deg);
  }
  30% {
    transform: translateX(60px) skewY(-10deg);
  }
  40% {
    transform: translateX(40px) skewY(10deg);
  }
  50% {
    transform: translateX(20px) skewY(10deg);
  }
  60% {
    transform: translateX(0px) skewY(-10deg);
  }
  70% {
    transform: translateX(-20px) skewY(10deg);
  }
  80% {
    transform: translateX(-40px) skewY(10deg);
  }
  90% {
    transform: translateX(-60px) skewY(10deg);
  }
  100% {
    transform: translateX(-40px) skewY(10deg);
  }
}

/* 感情エフェクト系 */

.effectBase {
  position: absolute;
  font-size: 40px;
  z-index: 50;
}

.happy {
  top: 0px;
  left: 100px;
  color: yellow;
  animation: flash 0.5s ease-in 0s infinite alternate;
}

.heart {
  top: 0px;
  left: 100px;
  color: pink;
  animation: expansion 0.7s ease-in 0s infinite;
}

.angry {
  top: 30px;
  left: 100px;
  color: red;
  animation: updown 0.2s ease-in-out 0s infinite alternate;
}
.sweat {
  top: 30px;
  left: 100px;
  color: aqua;
  animation: down 0.8s ease 0s infinite;
}

.surprise {
  top: 0px;
  left: 100px;
  color: yellow;
  animation: flash 0.5s ease-in 0s infinite;
}

.death {
  top: 0px;
  left: 100px;
  color: white;
  animation: up 0.8s ease-in 0s infinite;
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes expansion {
  0% {
    top: 30px;
    left: 120px;
    opacity: 0;
    font-size: 20px;
  }
  50% {
    opacity: 1;
  }
  75% {
    top: 0px;
    left: 100px;
    font-size: 40px;
    opacity: 1;
  }
}

@keyframes updown {
  0% {
    top: 30px;
    left: 100px;
  }
  100% {
    top: 0px;
    left: 100px;
  }
}

@keyframes up {
  0% {
    top: 30px;
    left: 100px;
    opacity: 0;
  }
  50% {
    top: 0px;
    left: 100px;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes down {
  0% {
    top: 0px;
    left: 100px;
    opacity: 0;
  }
  50% {
    top: 30px;
    left: 100px;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>