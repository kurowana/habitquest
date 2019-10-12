<template>
  <div>
    <div class="event">
      {{this.eventObj.length}}
      {{this.sceneCount}}
      {{this.NextFlag}}
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
      <modal v-if="isTestModal" class="soundCheckModal">
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
          <form>
            <ValidationProvider name="ユーザー名" rules="required" v-slot="{errors}" ref="registerForm">
              <label for="name">ユーザー名</label>
              <input v-model="name" type="text" name="name" />
              <span>{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider name="パスワード" rules="required" v-slot="{errors}" ref="registerForm">
              <label for="password">パスワード</label>
              <input v-model="password" type="password" name="password" />
              <span>{{errors[0]}}</span>
            </ValidationProvider>
            <button @click.prevent="saveName">決定</button>
          </form>
        </div>
        <div v-show="registState===2">
          <div class="img-container">
            <div class="img-card" v-for="(img,index) in userImg" :key="index">
              <img class="img-face" @click.prevent="selectImg(img)" :src="img.face" />
            </div>
          </div>
        </div>
        <div v-show="registState===3">
          <div class="confirm-content">
            <div class="img-container">
              <img class="img-stand" :src="selectedImg" />
            </div>
            <div class="button-container">
              <button @click.prevent="saveImg">決定</button>
              <button @click.prevent="returnImg">選びなおす</button>
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
              <button @click.prevent="decideStatus">確定</button>
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
          <button @click.prevent="registUser">登録</button>
        </div>
      </modal>
      <choice v-if="testChoice" @get-scene="getScene">
        あいうえお
        <template v-slot:choice1>123</template>
        <template v-slot:choice2>456</template>
      </choice>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";

import modal from "../parts/modal";
import choice from "../parts/choice";

export default {
  components: {
    message: message,
    "char-img": charImg,
    modal: modal,
    choice: choice
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      isSoundCheckModal: false,
      isRegistModal: false,
      isSelectImgModal: false,
      isConfirmImgModal: false,
      isStatusModal: false,
      isConfirmModal: false,

      isTestModal: false,
      testChoice: true,

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
          vm.showChar("スフィア", "l2");
          vm.setEvent({ type: "msg", content: "メッセージのテスト" });
        },
        function(vm) {
          vm.showChar("エイル", "r2");
          vm.setEvent({ type: "msg", content: "メッセージのテスト2" });
        },
        function(vm) {
          vm.showChar("", "r2");
          this.testChoice = false;
          console.log(this.testChoice);
          vm.setEvent({
            type: "select",
            content: {
              msg: "どちらを選ぶ？",
              choice: [
                {
                  text: "選択肢1",
                  event: function() {
                    console.log(1);
                  }
                },
                {
                  text: "選択肢2",
                  event: function() {
                    console.log(2);
                  }
                }
              ]
            }
          });
          console.log(this.testChoice);
        },
        function(vm) {
          vm.showChar("エイル", "r2");
          vm.setEvent({ type: "msg", content: "メッセージのテスト2" });
        },
        function(vm) {
          vm.setEvent({
            type: "window",
            content: { window: "isTestModal", msg: "メッセージ" }
          });
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
    saveName: function() {
      this.registState++;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.registState++;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveImg: function() {
      this.registState++;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    returnImg: function() {
      this.registState--;
      this.$store.commit("setSceneCount", this.sceneCount - 1);
      this.getScene(this.sceneCount);
    },
    decideStatus: function() {
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
        })
        .catch(error => {
          console.log(error);
        });
    },
    openSoundModal: function() {
      this.$store.commit("setParallelFlag", true);
      this.isSoundCheckModal = true;
    },
    closeSoundModal: function() {
      this.$store.commit("setParallelFlag", false);
      this.isSoundCheckModal = false;
    },
    openRegistModal: function() {
      this.$store.commit("setParallelFlag", true);
      this.isRegistModal = true;
    },
    closeRegistModal: function() {
      this.$store.commit("setParallelFlag", false);
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