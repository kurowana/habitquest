<template>
  <div>
    <message @next-msg="nextMsg"></message>
    <char-img></char-img>
  </div>
</template>

<script>
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
  created: function() {
    this.$store.commit("setCharImgL1", "npc001l.png");
    this.$store.commit("setCharImgL2", "npc006l.png");
    this.$store.commit("setCharImgC", "npc001_1.png");
    this.$store.commit("setCharImgR1", "npc001r.png");
    this.$store.commit("setCharImgR2", "npc007r.png");

    this.$store.commit("setMessage", "これはオープニングです");
  },
  methods: {
    nextMsg: function(count) {
      if (count === 0) {
        this.$store.commit(
          "setMessage",
          "１番目のメッセージ<br />\
        てすとだよ<br />\
        長のの文章テストああああああ"
        );
      }
      if (count === 1) {
        this.$store.commit("setMessage", "2番目のメッセージ");
      }
    }
  }
};
</script>

<style scoped>
</style>