<template>
  <div>
    <message @get-scene="getScene"></message>
    <char-img></char-img>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import message from "../parts/Message";
import charImg from "../parts/charImg";

export default {
  components: {
    message: message,
    "char-img": charImg
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      clickableFlag: "getClickableFlag"
    })
  },
  methods: {
    getScene: function(count) {
      if (count === 1) {
        this.$store.commit("setMessage", "本編メッセージ");
      }
    }
  }
};
</script>