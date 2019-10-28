<template>
  <div>
    <div class="header">
      <p class="headerContent">
        <img src="../../../public/img/p_face/f001.png" />
      </p>
    </div>
    <message @get-scene="getScene"></message>
    <char-img :active-motion="activeMotion" :active-effect="activeEffect"></char-img>
    <!-- <char-img></char-img> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";

export default {
  components: {
    message: message,
    "char-img": charImg
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      eventObjList: ["eventObj", "eventObj2"],
      eventObj: [
        function(vm) {
          vm.setEvent({ type: "msg", content: "ホームメッセージの1" });
        },
        function(vm) {
          vm.setEvent({ type: "msg", content: "ホームメッセージの2" });
        },
        function(vm) {
          vm.randomEvent(vm.eventObjList);
        }
      ],
      eventObj2: [
        function(vm) {
          vm.setEvent({ type: "msg", content: "ホームメッセージの1-1" });
        },
        function(vm) {
          vm.setEvent({ type: "msg", content: "ホームメッセージの2-1" });
        },
        function(vm) {
          vm.randomEvent(vm.eventObjList);
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      clickableFlag: "getClickableFlag"
    })
  },
  created: function() {
    this.changeBg("ホーム");
    this.clearChar();
    this.showChar("スフィア2", "c");
  },
  methods: {}
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 150px;
  background: rgba(0, 0, 0, 0.5);
  border-bottom: 2px double gold;
}
.headerContent img {
  display: block;
  width: 140px;
  height: 140px;
  margin: 5px;
  border: 2px double gold;
  border-radius: 10px;
}
</style>