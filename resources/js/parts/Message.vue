<template>
  <div v-if="isShowMsg">
    <div class="msg-window" @click="nextMsgReq">
      <p class="name">アリア</p>
      <p class="message" v-html="$store.state.eventStore.message"></p>
      <i class="fas fa-angle-double-down msgIcon"></i>
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
      msgCount: 0
    };
  },
  props: {
    message: ""
  },
  computed: {
    currentMessage() {
      return this.message;
    }
  },
  methods: {
    nextMsgReq: function() {
      console.log("ok");
      this.$emit("next-msg", this.msgCount);
      this.msgCount++;
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
