<template>
  <div>
    <div class="msg-window">
      <p class="name">アリア</p>
      <p class="message">
        {{currentMessage}}
        {{$store.state.eventStore.message}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {};
  },
  props: {
    message: ""
  },
  computed: {
    currentMessage() {
      return this.message;
    }
  },
  methods: {}
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
</style>
