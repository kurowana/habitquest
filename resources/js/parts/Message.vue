<template>
  <div v-if="isShowMsg">
    <div class="msg-window" @click="changeScene">
      <p class="name">{{name}}</p>
      <p class="message" v-if="message">
        <vue-typer :text="message" :repeat="0" :type-delay="delayTime" @completed="onCompleted"></vue-typer>
      </p>
      <i v-show="NextFlag" class="fas fa-angle-double-down msgIcon"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      isShowMsg: true,
      msgCount: 0,
      delayTime: 30,
      isCompleted: false
    };
  },
  props: {
    // message: "",
    completed: false
  },
  computed: {
    ...mapGetters({
      sceneCount: "getSceneCount",
      NextFlag: "getNextFlag",
      ParallelFlag: "getParallelFlag",
      name: "getCharName",
      storeMessage: "getMessage"
    }),
    message: function() {
      if (this.storeMessage !== "") {
        return this.storeMessage;
      } else {
        this.onCompleted;
        return " ";
      }
    }
  },
  methods: {
    nextScene: function() {
      this.$store.commit("setNextFlag", false);
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
    },
    changeScene: function() {
      if (this.NextFlag === true) {
        this.nextScene();
      } else {
        return;
      }
    },
    onCompleted: function() {
      if (this.ParallelFlag === false) {
        this.$store.commit("setNextFlag", true);
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped>
.msg-window {
  width: 800px;
  height: 175px;
  background: url("../../../public/img/ui/msg-window.png") no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.name {
  height: 45px;
  padding: 10px 70px 0px 70px;
  color: white;
  font-size: 22px;
}
.message {
  padding: 3px 70px 8px 70px;
  color: white;
  font-size: 20px;
}

.msgIcon {
  color: gold;
  font-size: 2em;
  position: absolute;
  bottom: 20px;
  left: 730px;
  animation: iconMove 0.5s infinite;
}

@keyframes iconMove {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>