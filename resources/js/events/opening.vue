<template>
  <div>
    <message @next-scene="getScene"></message>
    <char-img></char-img>
    <!-- キャラ画像一覧 -->
    <modal v-if="isSelectModal" class="imgSelectModal">
      <div class="img-container">
        <div class="img-card" v-for="(img,index) in userImg" :key="index">
          <img class="img-face" @click.prevent.self="selectImg(img)" :src="img.face" />
        </div>
      </div>
    </modal>
    <!-- キャラ確認 -->
    <modal v-if="isConfirmModal" class="imgConfirmModal">
      <div class="confirm-content">
        <div class="img-container">
          <img class="img-stand" :src="selectedImg" />
        </div>
        <div class="button-container">
          <button @click="test">なじむ。実に！なじむぞ。(決定)</button>
          <button @click="test">残念だったな。トリックだよ(選びなおす)</button>
        </div>
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
      isSelectModal: false,
      isConfirmModal: false,
      selectedImg: ""
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      userImg: "getUserImg"
    })
  },
  created: function() {
    console.log(this.userInfo);
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
        this.openSelectModal();
        this.$store.commit("setMessage", "あなたの姿を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 3) {
        this.$store.commit("setClickableFlag", true);
        this.closeSelectModal();
      }
      if (count === 4) {
        this.$store.commit("setMessage", "modal後のメッセージ");
      }
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.openConfirmModal();
    },
    test: function() {
      alert("test");
    },
    openSelectModal: function() {
      this.isSelectModal = true;
    },
    closeSelectModal: function() {
      this.isSelectModal = false;
    },
    openConfirmModal: function() {
      this.isConfirmModal = true;
    },
    closeConfirmModal: function() {
      this.isConfirmModal = false;
    }
  }
};
</script>

<style scoped>
.imgSelectModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
}
.imgConfirmModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
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

.confirm-content {
  display: flex;
}

.img-stand {
  width: 240px;
  height: 320px;
}
</style>