<template>
  <div>
    <div class="event">
      {{this.eventObj.length}}
      {{this.sceneCount}}
      {{this.NextFlag}}
      {{npc}}
      <message @get-scene="getScene"></message>
      <char-img></char-img>
      <!--音楽再生確認モーダル-->
      <modal v-if="isSoundCheckModal">
        <div>
          <p>このアプリでは音声が流れます。よろしいですか？</p>
          <button @click="soundSet(true)">音楽再生ON</button>
          <button @click="soundSet(false)">音楽再生OFF</button>
        </div>
      </modal>
      <!-- 登録モーダル -->

      <modal v-if="isRegistModal">
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
      </modal>
      <modal v-if="isSelectImgModal">
        <div class="img-container">
          <div class="img-card" v-for="(img,index) in userImg" :key="index">
            <img class="img-face" @click.prevent="selectImg(img)" :src="img.face" />
          </div>
        </div>
      </modal>
      <modal v-if="isConfirmImgModal">
        <div class="confirm-content">
          <div class="img-container">
            <img class="img-stand" :src="selectedImg" />
          </div>
          <div class="button-container">
            <button @click.prevent="saveImg">決定</button>
            <button @click.prevent="returnImg">選びなおす</button>
          </div>
        </div>
      </modal>
      <modal v-if="isStatusModal">
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
      </modal>
      <modal v-if="isConfirmModal">
        <div>名前：{{name}}</div>
        <img class="img-stand" :src="selectedImg" />
        <div>STR:{{str}}</div>
        <div>AGI:{{agi}}</div>
        <div>VIT:{{vit}}</div>
        <div>INT:{{int}}</div>
        <div>DEX:{{dex}}</div>
        <div>LUC:{{luc}}</div>
        <button @click.prevent="registUser">登録</button>
      </modal>

      <choice @get-scene="getScene" @complete-choice="completeChoice"></choice>
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
        () => {
          this.showChar("スフィア1", "L1");
          this.showChar("ヴァルカン", "L2");
          this.showChar("フリート", "C");
          this.showChar("アイザック", "R1");
          this.showChar("アーサー", "R2");
          this.setEvent({ type: "msg", content: "メッセージのテスト" });
        },
        () => {
          this.showChar("エイル", "r2");
          this.setEvent({ type: "msg", content: "メッセージのテスト2" });
          this.setTalker("エイル", "r2");
        },
        () => {
          this.setMotion("l1", "anime1");
          this.setMotion("r1", "anime2");
          this.setEvent({ type: "msg", content: "メッセージのテスト3" });
          this.setTalker("スフィア", "l1");
        },
        () => {
          this.setEvent({ type: "msg", content: "アニメ2" });
        },
        () => {
          this.showChar("エイル", "r2");
          this.setEvent({ type: "msg", content: "メッセージのテスト2" });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isSoundCheckModal", msg: "メッセージ" }
          });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isRegistModal", msg: "モーダル2" }
          });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isSelectImgModal", msg: "モーダル2" }
          });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isConfirmImgModal", msg: "モーダル2" }
          });
        },
        () => {
          this.showChar("", "r2");
          this.setEvent({
            type: "select",
            content: {
              msg: "どちらを選ぶ？",
              choice: [
                {
                  text: "選択肢1",
                  event: () => {
                    this.$store.commit("setEventObj", "eventObj1");
                    this.$store.commit("setSceneCount", 0);
                  }
                },
                {
                  text: "選択肢2",
                  event: () => {
                    this.$store.commit("setEventObj", "eventObj2");
                    this.$store.commit("setSceneCount", 0);
                  }
                }
              ]
            }
          });
        }
      ],

      eventObj1: [
        () => {
          this.showChar("スフィア2", "l2");
          this.setEvent({ type: "msg", content: "選択肢1を選んだよ" });
        },
        () => {
          this.setEvent({ type: "msg", content: "選択肢1を選んだよ。続き" });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isStatusModal", msg: "モーダル2" }
          });
        },
        () => {
          this.setEvent({
            type: "window",
            content: { window: "isConfirmModal", msg: "モーダル2" }
          });
        }
      ],
      eventObj2: [
        () => {
          this.showChar("スフィア", "l2");
          this.setEvent({ type: "msg", content: "選択し２" });
        },
        () => {
          this.setEvent({ type: "msg", content: "選択肢２を選んだよ。続き" });
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      NextFlag: "getNextFlag",
      npc: "getNpc"
    })
  },
  created: function() {
    // this.$store.commit("setBgImg", "");
    this.changeBg("神殿");
    this.$store.commit("setMessage", "これはオープニングです");
  },
  methods: {
    soundSet(boolean) {
      this.isSoundCheckModal = false;
      this.$store.commit("setSoundFlag", boolean);
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveName: function() {
      this.isRegistModal = false;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    selectImg: function(img) {
      this.selectedImg = img.stand;
      this.isSelectImgModal = false;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    saveImg: function() {
      this.isConfirmImgModal = false;
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.getScene(this.sceneCount);
    },
    returnImg: function() {
      this.isConfirmImgModal = false;
      this.$store.commit("setSceneCount", this.sceneCount - 1);
      this.getScene(this.sceneCount);
    },
    decideStatus: function() {
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
          if (res.data !== "error") {
            axios
              .post("./login", {
                name: this.name,
                password: this.password
              })
              .then(res => {
                location.reload();
              });
            this.$router.push({ name: "home" });
          } else {
            console.log("ユーザー名重複");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
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