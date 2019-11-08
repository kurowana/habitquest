<template>
  <div>
    <main-header></main-header>
    <h1>交流イベント</h1>
    <message @get-scene="getScene"></message>
    <char-img></char-img>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";
import mainHeader from "../parts/MainHeader";

export default {
  components: {
    message: message,
    "char-img": charImg,
    "main-header": mainHeader
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {};
  },
  created: function() {
    this.changeBg("町");
  }
};
</script>

<style scoped>
</style>