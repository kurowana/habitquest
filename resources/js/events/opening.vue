<template>
  <div>
    <message @next-msg="nextMsg"></message>
    <char-img></char-img>
    <modal v-if="isShwoModal">あいうえお</modal>
  </div>
</template>

<script>
import message from "../parts/Message";
import charImg from "../parts/charImg";

import modal from "../parts/modal";

export default {
  components: {
    message: message,
    "char-img": charImg,
    modal: modal
  },
  data: function() {
    return {
      isShwoModal: false
    };
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
          "１番目のメッセージ\n\
てすとだよ\n\
長のの文章テストああああああ"
        );
      }
      if (count === 1) {
        this.$store.commit(
          "setMessage",
          "2番目のメッセージ\n\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n\
aaaaaaa"
        );
      }
      if (count === 2) {
        this.openModal();
        console.log(this.isShwoModal);
      }
      if (count === 3) {
        this.closeModal();
        console.log(this.isShwoModal);
      }
      if (count === 4) {
        this.$store.commit("setMessage", "modal後のメッセージ");
      }
    },
    openModal: function() {
      this.isShwoModal = true;
    },
    closeModal: function() {
      this.isShwoModal = false;
    }
  }
};
</script>

<style scoped>
</style>