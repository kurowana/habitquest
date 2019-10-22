<template>
  <div class="effect-view">
    <!-- <transition name="fade"> -->
    <div class="effectClass" :style="effectStyle">
      <!-- <img :src="effectImg" /> -->
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      // showEffect: true,
      effectTop: 0,
      effectLeft: 0
    };
  },
  props: {
    battleEffect: String
  },
  computed: {
    ...mapGetters({}),
    effectStyle: function() {
      console.log(this.isShowEffect);
      this.effectTop = 100 + Math.floor(Math.random() * 200);
      this.effectLeft = 150 + Math.floor(Math.random() * 300);
      return {
        background: 'url("/img/effect/' + this.battleEffect + '")',
        left: this.effectLeft + "px",
        top: this.effectTop + "px"
      };
    }
  },
  created: function() {
    console.log(this.battleEffect);
    // effectStyle: {
    //   console.log(this.isShowEffect);
    //   this.effectTop = 100 + Math.floor(Math.random() * 200);
    //   this.effectLeft = 150 + Math.floor(Math.random() * 300);
    //   return {
    //     background: 'url("/img/effect/' + this.battleEffect + '")',
    //     left: this.effectLeft + "px",
    //     top: this.effectTop + "px"
    //   };
    // }
  },
  methods: {}
};
</script>

<style scoped>
.effect-view {
  width: 100%;
  height: 0%;
}

.effectClass {
  position: absolute;
  display: block;
  width: 192px;
  height: 192px;
  z-index: 100;
  animation: sprite54 0.5s step-end 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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