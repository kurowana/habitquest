<template>
  <div class="img-view">
    <div style="font-size:5em;">{{this.battleMotion.type}}</div>
    <transition name="fade">
      <div v-if="showMonster" class="img-monster">
        <img :src="showMonster" :class="battleMotion.type" />
        <!-- <img :src="showMonster" /> -->
      </div>
    </transition>
    <transition name="fade">
      <div v-if="damage.isShow" class="damageClass" :style="damageStyle">{{damage.message}}</div>
    </transition>
    <transition name="effect-anime">
      <div v-if="effect.isShow" :style="effectStyle"></div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";
import battleMixin from "../mixins/battleMixin";

export default {
  data: function() {
    return {
      motionType: "none"
    };
  },
  props: {
    // battleEffect: String
  },
  mixins: [baseMixin, eventMixin, battleMixin],
  computed: {
    ...mapGetters({
      monster: "getBattleMonster",
      damage: "getDamage",
      effect: "getEffect",
      battleMotion: "getBattleMotion"
    }),
    showMonster: function() {
      return "./" + this.monster.img;
    },
    damageStyle: function() {
      if (this.damage.isShow) {
        this.damageTop = 150 + Math.floor(Math.random() * 100);
        this.damageLeft = 200 + Math.floor(Math.random() * 100);
      }
      return {
        left: this.damageLeft + "px",
        top: this.damageTop + "px"
      };
    },
    effectStyle: function() {
      this.effectTop = Math.floor(Math.random() * 100);
      this.effectLeft = 250 + Math.floor(Math.random() * 100);
      return {
        background: 'url("/img/effect/' + this.effect.path + '")',
        left: this.effectLeft + "px",
        top: this.effectTop + "px"
      };
    }
    // activeBattleMotion: function() {
    //   console.log(this.motionType);
    //   return this.motionType;
    // }
  },
  mounted: function() {
    // const unwatch = this.$store.subscribe((mutation, state) => {
    //   if (mutation.type === "setBattleMotionType") {
    //     this.changeMotion(this.battleMotion.type);
    //   }
    // });
  },
  watch: {},
  methods: {
    changeMotion: function(motion) {
      switch (motion) {
        case "anime1":
          this.motionType = "effect";
          break;
        case "anime2":
          this.motionType = "effect2";
          break;
        case "motion3":
          this.motionType = "motion3";
          break;
        default:
          this.motionType = "none";
          return;
      }
    }
  }
};
</script>

<style scoped>
.img-view {
  width: 100%;
  height: 0%;
}

.img-monster {
  position: absolute;
  bottom: 0;
  left: 30%;
}
.img-monster img {
  width: 320px;
  position: relative;
  bottom: 0;
  left: 0;
}

.damageClass {
  position: absolute;
  bottom: 50%;
  left: 30%;
  color: red;
  font-size: 5em;
  text-shadow: 1px 1px 1px #fff, -1px 1px 1px #fff, 1px -1px 1px #fff,
    -1px -1px 1px #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* .effectAnime {
  position: absolute;
  display: block;
  width: 192px;
  height: 192px;
  z-index: 100;
  animation: sprite54 0.5s step-end 0s 1;
} */

.effect {
  animation: anime1 0.2s ease-in-out 0s infinite;
}
@keyframes anime1 {
  0% {
    left: 0;
  }
  25% {
    left: 10px;
    opacity: 0.7;
  }
  75% {
    left: -10px;
  }
  100% {
    left: 0;
  }
}
.effect2 {
  animation: anime2 0.2s ease-in-out 0s infinite;
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
.motion3 {
  animation: attack 0.3s ease-in-out 0s 1;
}
@keyframes attack {
  0% {
    bottom: 0;
    width: 320px;
  }
  75% {
    bottom: 20px;
    width: 350px;
  }
  100% {
    bottom: 0px;
    width: 320px;
  }
}

.effect-anime-enter-active {
  position: relative;
  display: block;
  width: 192px;
  height: 192px;

  z-index: 100;
  animation: sprite54 0.3s step-end 0s 1;
}

@keyframes sprite54 {
  1% {
    background-position: 0 0;
  }
  5% {
    background-position: -192px 0;
  }
  10% {
    background-position: -384px 0;
  }
  15% {
    background-position: -576px 0;
  }
  20% {
    background-position: -768px 0;
  }
  25% {
    background-position: 0 -192px;
  }
  30% {
    background-position: -192px -192px;
  }
  35% {
    background-position: -384px -192px;
  }
  40% {
    background-position: -576px -192px;
  }
  45% {
    background-position: -768px -192px;
  }
  50% {
    background-position: 0 -384px;
  }
  55% {
    background-position: -192px -384px;
  }
  60% {
    background-position: -384px -384px;
  }
  65% {
    background-position: -576px -384px;
  }
  70% {
    background-position: -768px -384px;
  }
  75% {
    background-position: 0 -576px;
  }
  80% {
    background-position: -192px -576px;
  }
  85% {
    background-position: -384px -576px;
  }
  90% {
    background-position: -576px -576px;
  }
  95% {
    background-position: -768px -576px;
  }
}
</style>