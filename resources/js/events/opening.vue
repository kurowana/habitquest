<template>
  <div>
    {{this.sceneCount}}
    <message @next-scene="getScene"></message>
    <char-img></char-img>
    <!-- 登録モーダル -->
    <modal v-if="isRegistModal" class="isRegisterModal">
      <div>
        <div>
          <label for="name">ユーザー名</label>
          <input v-model="name" type="text" name="name" />
        </div>
        <div>
          <label for="password">パスワード</label>
          <input v-model="password" type="password" name="password" />
        </div>
        <div>
          <button @click="saveName">決定</button>
        </div>
      </div>
    </modal>
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
    <modal v-if="isStatusModal" class="isStatusModal">
      <div class="status-content">
        <div>
          <label for="str">STR</label>
          <input v-model="str" type="number" name="str" />
          {{str}}
          <button @click="incStatus('str')">+</button>
          <button @click="decStatus('str')">-</button>
        </div>
        <div>
          <label for="agi">AGI</label>
          <input v-model="agi" type="number" name="agi" />
          {{agi}}
          <button @click="incStatus('agi')">+</button>
          <button @click="decStatus('agi')">-</button>
        </div>
        <div>
          <label for="vit">VIT</label>
          <input v-model="vit" type="number" name="vit" />
          {{vit}}
          <button @click="incStatus('vit')">+</button>
          <button @click="decStatus('vit')">-</button>
        </div>
        <div>
          <label for="int">INT</label>
          <input v-model="int" type="number" name="int" />
          {{int}}
          <button @click="incStatus('int')">+</button>
          <button @click="decStatus('int')">-</button>
        </div>
        <div>
          <label for="dex">DEX</label>
          <input v-model="dex" type="number" name="dex" />
          {{dex}}
          <button @click="incStatus('dex')">+</button>
          <button @click="decStatus('dex')">-</button>
        </div>
        <div>
          <label for="luc">LUC</label>
          <input v-model="luc" type="number" name="luc" />
        </div>
        <div>
          <button>確定</button>
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
      isRegistModal: false,
      isSelectModal: false,
      isConfirmModal: false,
      isStatusModal: false,

      name: "",
      password: "",
      selectedImg: "",

      str: 10,
      agi: 10,
      vit: 10,
      int: 10,
      dex: 10,
      luc: 10
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
        this.openRegistModal();
        this.$store.commit("setMessage", "あなたの名前を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 3) {
        this.openSelectModal();
        this.$store.commit("setMessage", "あなたの姿を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 4) {
        this.$store.commit("setClickableFlag", true);
        this.closeSelectModal();
      }
      if (count === 5) {
        this.$store.commit("setMessage", "modal後のメッセージ");
      }
    },
    saveName: function() {
      this.closeRegistModal();
      this.getScene(this.sceneCount);
      let nextCount = this.sceneCount + 1;
      this.$store.commit("setSceneCount", nextCount);
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.openConfirmModal();
    },
    incStatus: function(status) {
      switch (status) {
        case "str":
          this.str++;
          break;
        case "agi":
          this.agi++;
          break;
        case "vit":
          this.vit++;
          break;
        case "int":
          this.int++;
          break;
        case "dex":
          this.dex++;
          break;
        case "luc":
          this.luc++;
          break;
      }
    },
    test: function() {
      alert("test");
    },
    openRegistModal: function() {
      this.isRegistModal = true;
    },
    closeRegistModal: function() {
      this.isRegistModal = false;
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
    },
    openStatusModal: function() {
      this.isStatusModal = true;
    },
    closeStatusModal: function() {
      this.isStatusModal = false;
    }
  }
};
</script>

<style scoped>
.isRegisterModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
}
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