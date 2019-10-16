<template>
  <div>
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