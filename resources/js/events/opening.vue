<template>
  <div>
    <message @next-scene="getScene"></message>
    <char-img></char-img>
    <!-- キャラ画像一覧 -->
    <modal v-if="isShwoModal">
      <div class="modal-content">
        <div class="img-container">
          <div class="img-card" v-for="(img,index) in userImg" :key="index">
            <img @click.prevent.self="selectImg(img)" :src="img.face" />
          </div>
        </div>
        <button @click="test">test</button>
      </div>
    </modal>
    <!-- キャラ確認 -->
    <modal v-if="isShwoModal2">
      <div class="modal-content">
        <div class="img-container">
          <img :src="selectedImg" />
        </div>
        <button @click="test">test</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
      isShwoModal: false,
      isShwoModal2: false,
      selectedImg: ""
    };
  },
  computed: {
    ...mapGetters({
      userImg: "getUserImg"
    })
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
    getScene: function(count) {
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
        this.$store.commit("setMessage", "あなたの姿を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 3) {
        this.$store.commit("setClickableFlag", true);
        this.closeModal();
      }
      if (count === 4) {
        this.$store.commit("setMessage", "modal後のメッセージ");
      }
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.openModal2();
    },
    test: function() {
      alert("test");
    },
    openModal: function() {
      this.isShwoModal = true;
    },
    closeModal: function() {
      this.isShwoModal = false;
    },
    openModal2: function() {
      this.isShwoModal2 = true;
    },
    closeModal2: function() {
      this.isShwoModal2 = false;
    }
  }
};
</script>

<style scoped>
.modal-content {
  background: linear-gradient(45deg, #000000, #ffffff);
  width: 720px;
  height: 380px;
  overflow: auto;
}

.img-container {
  display: flex;
  padding-bottom: 15px;
  flex-wrap: wrap;
}
.img-card img {
  width: 100px;
  border: 2px double gold;
  border-radius: 10px;
  margin: 15px 0px 0px 15px;
}
</style>