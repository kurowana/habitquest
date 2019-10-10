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
    <img class="img-c" :src="showCharC" v-if="showCharC" transition="bounce" />
    <img class="img-r1" :src="showCharR1" v-if="showCharR1" transition="bounce" />
    <img class="img-r2" :src="showCharR2" v-if="showCharR2" transition="bounce" />

    <p v-if="showCharL1" transition="bounce" class="bounce">aaa</p>
    <p v-if="showCharL2" transition="bounce" class="bounce">bbb</p>
    <p v-if="showCharC" transition="bounce" class="bounce">ccc</p>
    <p v-if="showCharR1" transition="bounce" class="bounce">ddd</p>
    <p v-if="showCharR2" transition="bounce" class="bounce">eee</p>
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

bounce-transition {
  display: inline-block; /* 他の場合、スケールアニメーションは動作しません */
}
.bounce-enter {
  animation: bounce-in 0.5s;
}
.bounce-leave {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>