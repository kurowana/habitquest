<template>
  <div>
    {{this.sceneCount}}
    <message @get-scene="getScene"></message>
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
    <modal v-if="isSelectImgModal" class="selectImgModal">
      <div class="img-container">
        <div class="img-card" v-for="(img,index) in userImg" :key="index">
          <img class="img-face" @click.prevent.self="selectImg(img)" :src="img.face" />
        </div>
      </div>
    </modal>
    <!-- キャラ確認 -->
    <modal v-if="isConfirmImgModal" class="confirmImgModal">
      <div class="confirm-content">
        <div class="img-container">
          <img class="img-stand" :src="selectedImg" />
        </div>
        <div class="button-container">
          <button @click="saveImg">なじむ。実に！なじむぞ。(決定)</button>
          <button @click="returnImg">残念だったな。トリックだよ(選びなおす)</button>
        </div>
      </div>
    </modal>
    <!-- ステータス確認 -->
    <modal v-if="isStatusModal" class="statusModal">
      <div class="status-content">
        振り分け可能ポイント：{{point}}
        <div>
          STR
          {{str}}
          <button @click="incStatus('str')">+</button>
          <button @click="decStatus('str')">-</button>
        </div>
        <div>
          <label for="agi">AGI</label>
          {{agi}}
          <button @click="incStatus('agi')">+</button>
          <button @click="decStatus('agi')">-</button>
        </div>
        <div>
          VIT
          {{vit}}
          <button @click="incStatus('vit')">+</button>
          <button @click="decStatus('vit')">-</button>
        </div>
        <div>
          INT
          {{int}}
          <button @click="incStatus('int')">+</button>
          <button @click="decStatus('int')">-</button>
        </div>
        <div>
          DEX
          {{dex}}
          <button @click="incStatus('dex')">+</button>
          <button @click="decStatus('dex')">-</button>
        </div>
        <div>
          LUC
          {{luc}}
          <button @click="incStatus('luc')">+</button>
          <button @click="decStatus('luc')">-</button>
        </div>
        <div>
          <button @click.prevent.self="decideStatus">確定</button>
        </div>
      </div>
    </modal>
    <modal v-if="isConfirmModal" class="confirmModal">
      <div>名前：{{name}}</div>
      <img class="img-stand" :src="selectedImg" />
      <div>STR:{{str}}</div>
      <div>AGI:{{agi}}</div>
      <div>VIT:{{vit}}</div>
      <div>INT:{{int}}</div>
      <div>DEX:{{dex}}</div>
      <div>LUC:{{luc}}</div>
      <button @click="registUser">登録</button>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
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
      isSelectImgModal: false,
      isConfirmImgModal: false,
      isStatusModal: false,
      isConfirmModal: false,

      name: "",
      password: "",
      selectedImg: "",

      point: 5,

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
      if (count === 1) {
        this.$store.commit(
          "setMessage",
          "１番目のメッセージ\n\
てすとだよ\n\
長のの文章テストああああああ"
        );
      }
      if (count === 2) {
        this.$store.commit(
          "setMessage",
          "2番目のメッセージ\n\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n\
aaaaaaa"
        );
      }
      if (count === 3) {
        this.openRegistModal();
        this.$store.commit("setMessage", "あなたの名前を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 4) {
        this.openSelectModal();
        this.$store.commit("setMessage", "あなたの姿を教えてね");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 5) {
        this.openConfirmImgModal();
        this.$store.commit("setMessage", "この姿で間違いない？");
        this.$store.commit("setClickableFlag", true);
      }
      if (count === 6) {
        this.$store.commit("setMessage", "能力の振り分けを行ってね");
        this.openStatusModal();
      }
      if (count === 7) {
        this.$store.commit("setMessage", "これでいいかな？");
        this.openConfirmModal();
      }
    },
    saveName: function() {
      this.closeRegistModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.closeSelectModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveImg: function() {
      this.closeConfirmImgModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    returnImg: function() {
      this.closeConfirmImgModal();
      this.$store.commit("setSceneCount", this.sceneCount - 1);
      this.getScene(this.sceneCount);
    },
    decideStatus: function() {
      this.closeStatusModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    incStatus: function(status) {
      if (this.point > 0) {
        this.point--;
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
      }
    },
    decStatus: function(status) {
      if (5 > this.point) {
        switch (status) {
          case "str":
            if (this.str > 10) {
              this.str--;
              this.point++;
            }
            break;
          case "agi":
            if (this.agi > 10) {
              this.agi--;
              this.point++;
            }
            break;
          case "vit":
            if (this.vit > 10) {
              this.agi--;
              this.point++;
            }
            break;
          case "int":
            if (this.int > 10) {
              this.int--;
              this.point++;
            }
            break;
          case "dex":
            if (this.dex > 10) {
              this.dex--;
              this.point++;
            }
            break;
          case "luc":
            if (this.luc > 10) {
              this.luc--;
              this.point++;
            }
            break;
        }
      }
    },
    registUser: function() {
      axios
        .post("./api/registUser", {
          name: this.name,
          password: this.password,
          selectedImg: this.selectedImg,
          str: this.str,
          agi: this.agi,
          vit: this.vit,
          int: this.int,
          dex: this.dex,
          luc: this.luc
        })
        .then(res => {
          axios
            .post("./login", {
              name: this.name,
              password: this.password
            })
            .then(res => {
              location.reload();
            });
          // this.$router.push({ name: "home" });
        });
    },
    openRegistModal: function() {
      this.isRegistModal = true;
    },
    closeRegistModal: function() {
      this.isRegistModal = false;
    },
    openSelectModal: function() {
      this.isSelectImgModal = true;
    },
    closeSelectModal: function() {
      this.isSelectImgModal = false;
    },
    openConfirmImgModal: function() {
      this.isConfirmImgModal = true;
    },
    closeConfirmImgModal: function() {
      this.isConfirmImgModal = false;
    },
    openStatusModal: function() {
      this.isStatusModal = true;
    },
    closeStatusModal: function() {
      this.isStatusModal = false;
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
.isRegisterModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.selectImgModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.confirmImgModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.statusModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.confirmModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
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