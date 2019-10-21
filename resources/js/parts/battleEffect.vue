<template>
  <div class="effect-view">
    <transition name="fade">
      <div v-if="showEffect" class="img-c">
        <img :src="effectImg" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      showEffect: true
    };
  },
  props: {
    battleEffect: String
  },
  computed: {
    ...mapGetters({}),
    effectImg: function() {
      return "./img/effect/" + this.battleEffect;
    }
  },
  methods: {}
};
</script>

<style scoped>
.effect-view {
  width: 100%;
  height: 100%;
}

.img-c {
  position: absolute;
  bottom: 0;
  left: 30%;
}
.img-c img {
  width: 320px;
  position: relative;
  bottom: 200px;
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