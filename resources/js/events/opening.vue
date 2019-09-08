<template>
  <div>
    {{this.sceneCount}}
    <message @get-scene="getScene"></message>
    <char-img></char-img>
    <!--音楽再生確認モーダル-->
    <modal v-if="isSoundCheckModal" class="soundCheckModal">
      <div>
        <p>このアプリでは音声が流れます。よろしいですか？</p>
        <button @click="soundSet(true)">音楽再生ON</button>
        <button @click="soundSet(false)">音楽再生OFF</button>
      </div>
    </modal>
    <!-- 登録モーダル -->
    <modal v-if="isRegistModal" class="registerModal">
      {{registState}}
      <div v-show="registState===1">
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
      <div v-show="registState===2">
        <div class="img-container">
          <div class="img-card" v-for="(img,index) in userImg" :key="index">
            <img class="img-face" @click.prevent.self="selectImg(img)" :src="img.face" />
          </div>
        </div>
      </div>
      <div v-show="registState===3">
        <div class="confirm-content">
          <div class="img-container">
            <img class="img-stand" :src="selectedImg" />
          </div>
          <div class="button-container">
            <button @click="saveImg">なじむ。実に！なじむぞ。(決定)</button>
            <button @click="returnImg">残念だったな。トリックだよ(選びなおす)</button>
          </div>
        </div>
      </div>
      <div v-show="registState===4">
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
      </div>
      <div v-show="registState===5">
        <div>名前：{{name}}</div>
        <img class="img-stand" :src="selectedImg" />
        <div>STR:{{str}}</div>
        <div>AGI:{{agi}}</div>
        <div>VIT:{{vit}}</div>
        <div>INT:{{int}}</div>
        <div>DEX:{{dex}}</div>
        <div>LUC:{{luc}}</div>
        <button @click="registUser">登録</button>
      </div>
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
      isSoundCheckModal: false,
      isRegistModal: false,
      isSelectImgModal: false,
      isConfirmImgModal: false,
      isStatusModal: false,
      isConfirmModal: false,

      registState: 1,

      name: "",
      password: "",
      selectedImg: "",

      point: 5,

      str: 10,
      agi: 10,
      vit: 10,
      int: 10,
      dex: 10,
      luc: 10,

      eventObj: [
        function(vm) {
          vm.$store.commit(
            "setMessage",
            "１番目のメッセージ\n\
てすとだよ\n\
長のの文章テストああああああ"
          );
        },
        function(vm) {
          vm.$store.commit("setMessage", "");
          vm.$store.commit("setNextFlag", true);
          vm.$store.commit("setBgImg", "shinden");
        },
        function(vm) {
          vm.$store.commit(
            "setMessage",
            "2番目のメッセージ\n\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n\
aaaaaaa"
          );
        },
        function(vm) {
          vm.openSoundModal();
          vm.$store.commit("setMessage", "音声再生の設定をしてね");
        },
        function(vm) {
          vm.openRegistModal();
          vm.$store.commit("setMessage", "あなたの名前を教えてね");
        },
        function(vm) {
          // vm.openSelectModal();
          vm.$store.commit("setMessage", "あなたの姿を教えてね");
        },
        function(vm) {
          // vm.openConfirmImgModal();
          vm.$store.commit("setMessage", "この姿で間違いない？");
        },
        function(vm) {
          vm.$store.commit("setMessage", "能力の振り分けを行ってね");
          // vm.openStatusModal();
        },
        function(vm) {
          vm.$store.commit("setMessage", "これでいいかな？");
          // vm.openConfirmModal();
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      NextFlag: "getNextFlag"
    })
  },
  created: function() {
    this.$store.commit("setBgImg", "");
    // this.$store.commit("setCharImgL1", "npc001l.png");
    // this.$store.commit("setCharImgL2", "npc006l.png");
    // this.$store.commit("setCharImgC", "npc001_1.png");
    // this.$store.commit("setCharImgR1", "npc001r.png");
    // this.$store.commit("setCharImgR2", "npc007r.png");

    this.$store.commit("setMessage", "これはオープニングです");
  },
  methods: {
    getScene: function(count) {
      const vm = this;
      const eventLength = this.eventObj.length;
      if (count <= eventLength) {
        this.eventObj[count - 1](vm);
      } else {
        console.log("イベント終了");
      }
    },
    soundSet(boolean) {
      this.$store.commit("setSoundFlag", boolean);
      this.closeSoundModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveName: function() {
      this.registState++;
      // this.closeRegistModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.registState++;
      // this.closeSelectModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveImg: function() {
      this.registState++;
      // this.closeConfirmImgModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    returnImg: function() {
      this.registState--;
      // this.closeConfirmImgModal();
      this.$store.commit("setSceneCount", this.sceneCount - 1);
      this.getScene(this.sceneCount);
    },
    decideStatus: function() {
      // this.closeStatusModal();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
      this.registState++;
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
    openSoundModal: function() {
      this.isSoundCheckModal = true;
    },
    closeSoundModal: function() {
      this.isSoundCheckModal = false;
    },
    openRegistModal: function() {
      this.isRegistModal = true;
    },
    closeRegistModal: function() {
      this.isRegistModal = false;
    }
    // openSelectModal: function() {
    //   this.isSelectImgModal = true;
    // },
    // closeSelectModal: function() {
    //   this.isSelectImgModal = false;
    // },
    // openConfirmImgModal: function() {
    //   this.isConfirmImgModal = true;
    // },
    // closeConfirmImgModal: function() {
    //   this.isConfirmImgModal = false;
    // },
    // openStatusModal: function() {
    //   this.isStatusModal = true;
    // },
    // closeStatusModal: function() {
    //   this.isStatusModal = false;
    // },
    // openConfirmModal: function() {
    //   this.isConfirmModal = true;
    // },
    // closeConfirmModal: function() {
    //   this.isConfirmModal = false;
    // }
  }
};
</script>

<style scoped>
.soundCheckModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.registerModal {
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