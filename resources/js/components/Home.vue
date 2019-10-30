<template>
  <div>
    <div class="header">
      <p class="headerContent">
        <img src="../../../public/img/p_face/f001.png" />
        <i class="fas fa-feather" style="font-size:50px"></i>
        <i class="fab fa-sticker-mule"></i>
        <i class="fas fa-star-of-david"></i>
        <i class="fas fa-tree"></i>
        <i class="fas fa-wine-bottle"></i>
        <i class="fas fa-angry"></i>
        <i class="fas fa-comments"></i>
        <i class="fas fa-compress"></i>
        <i class="fas fa-cubes"></i>
        <i class="fab fa-ethereum"></i>
        <i class="fas fa-dragon"></i>
        <i class="fas fa-dice-d20"></i>
        <i class="fas fa-compress"></i>
        <i class="fas fa-landmark"></i>
        <i class="fas fa-hammer"></i>
        <i class="fas fa-grin-beam-sweat"></i>
        <i class="fas fa-grin-beam"></i>
        <i class="fas fa-graduation-cap"></i>
        <i class="fas fa-glass-cheers"></i>
        <i class="fas fa-gifts"></i>
        <i class="fas fa-gem"></i>
        <i class="fab fa-fort-awesome"></i>
        <i class="fas fa-flag"></i>
        <i class="fas fa-flask"></i>
        <i class="fas fa-yin-yang"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-money-bill"></i>
        <i class="fas fa-female"></i>
        <i class="fas fa-balance-scale"></i>
        <i class="fas fa-atlas"></i>
        <i class="fas fa-cat"></i>
        <i class="fas fa-cat"></i>
        <i class="fas fa-dove"></i>
        <i class="fas fa-fan"></i>
        <i class="fas fa-fist-raised"></i>
        <i class="fas fa-fire-alt"></i>
        <i class="fas fa-tint"></i>
        <i class="fas fa-vial"></i>
        <i class="fas fa-university"></i>
        <i class="fas fa-spider"></i>
        <i class="fas fa-shield-alt"></i>
        <i class="fab fa-pied-piper-hat"></i>
        <i class="fas fa-palette"></i>
        <i class="fas fa-paint-brush"></i>
        <i class="fas fa-hammer"></i>
        <i class="fas fa-home"></i>
        <i class="fas fa-hat-cowboy"></i>
        <i class="fas fa-heart"></i>
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