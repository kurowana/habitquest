<template>
  <div>
    <main-header></main-header>
    <div>
      <i class="fab fa-sticker-mule"></i>
      <i class="fas fa-star-of-david"></i>

      <i class="fas fa-wine-bottle"></i>
      <i class="fas fa-angry"></i>
      <i class="fas fa-comments"></i>
      <i class="fas fa-compress"></i>

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
    </div>
    <message @get-scene="getScene"></message>
    <char-img></char-img>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import mainHeader from "../parts/MainHeader";
import message from "../parts/Message";
import charImg from "../parts/charImg";

export default {
  components: {
    "main-header": mainHeader,
    message: message,
    "char-img": charImg
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      eventObjList: ["eventObj", "eventObj2"],

      eventObj: [
        () => {
          this.setEvent({ type: "msg", content: "ホームメッセージの1" });
          this.setMotion("L1", "jump");
          this.setMotion("R1", "leftAttack2");
          this.setEffect("L1", "death");
        },
        () => {
          this.setEvent({ type: "msg", content: "ホームメッセージの2" });
          this.setMotion("L1", "none");
          this.setEffect("R1", "none");
        },
        () => {
          this.randomEvent(this.eventObjList);
        }
      ],
      eventObj2: [
        () => {
          this.setEvent({ type: "msg", content: "ホームメッセージの1-1" });
        },
        () => {
          this.setEvent({ type: "msg", content: "ホームメッセージの2-1" });
        },
        () => {
          this.randomEvent(this.eventObjList);
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      clickableFlag: "getClickableFlag",
      npc: "getNpc"
    })
  },
  created: function() {
    this.changeBg("ホーム");
    this.clearChar();
    this.showChar("スフィア2", "L1");
    this.showChar("スフィア2", "L2");
    this.showChar("スフィア1", "C");
    this.showChar("スフィア2", "R1");
    this.showChar("スフィア2", "R2");
  },
  mounted: function() {},
  methods: {}
};
</script>

<style scoped>
</style>