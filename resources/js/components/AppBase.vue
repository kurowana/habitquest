<template>
  <div class="wrapper">
    <div class="content">
      <router-view class="game-view" :class="bgImg"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
    <div>
      <label>name</label>
      <input type="hidden" name="_token" :value="csrf" />
      <input type="text" v-model="loginName" />
      <label>password</label>
      <input type="text" v-model="loginPassword" />
      <button @click="registTest">登録</button>
    </div>
    {{getSound.isPlay}}
    <audio id="bgm" v-play="getSound.isPlay" :src="getSound.bgm"></audio>
    <button @click="playBgm">再生</button>
    <button @click="pauseBgm">停止</button>
    <button @click="changeBgm">変更</button>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters } from "vuex";

import charCreate from "./CharCreate";
import charInfo from "./CharInfo";
import habit from "./Habit";
import monsterCreate from "./MonsterCreate";
import Battle from "./Battle";

export default {
  components: {
    "char-info": charInfo,
    "char-create": charCreate,
    habit: habit,
    "monster-create": monsterCreate,
    battle: Battle
  },
  data: function() {
    return {
      loginName: "",
      loginPassword: "",

      isPlay: false,

      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  props: {
    userId: { type: String },
    userName: { type: String }
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo",
      myStatus: "getStatus",
      message: "getMessage",
      getSound: "getSound"
    }),

    bgImg: function() {
      return this.$store.state.eventStore.bgImg;
    }
  },
  watch: {
    //イベント途中でページ移動した場合はシーンカウントをリセット
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.$store.commit("setSceneCount", 0);
      }
    }
  },
  created: function() {
    if (this.userId === "" && this.userName === "") {
      this.$store.commit("setLoginFlag", false);
      this.$store.commit("setUserInfo", { id: "", name: "" });
    } else {
      this.$store.commit("setLoginFlag", true);
      this.$store.commit("setUserInfo", {
        id: this.userId,
        name: this.userName
      });
      this.$router.push({ name: "home" });
    }
    this.initPage();
  },
  mounted: function() {},
  methods: {
    initPage: function() {
      this.getMyStatus();
    },
    getMyStatus: function() {
      axios
        .post("./api/getMyStatus", {
          userId: this.user.id
        })
        .then(res => {
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.status = res.data;
            this.$store.commit("setPoint", res.data.point);
            this.$store.commit("setStatus", {
              str: res.data.str,
              agi: res.data.agi,
              vit: res.data.vit,
              int: res.data.int,
              dex: res.data.dex,
              luc: res.data.luc
            });
            this.stage = res.data.clearedStage;
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    registTest: function() {
      axios
        .post("./register", {
          name: this.loginName,
          password: this.loginPassword,
          password_confirmation: this.loginPassword
        })
        .then(res => {
          console.log("post");
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    playBgm: function() {
      this.$store.commit("setSoundFlag", true);
    },
    pauseBgm: function() {
      this.$store.commit("setSoundFlag", false);
    },
    changeBgm: function() {
      this.$store.commit("setBgm", {
        bgm: "/bgm/bgm_maoudamashii_healing08.mp3",
        volume: 0.1
      });
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  width: 1000px;
}

.game-view {
  width: 800px;
  height: 600px;
  position: relative;
  background: #000000;
  color: #ffffff;
}

.shinden {
  background: url("../../../public/img/bg/shinden01.jpg");
  animation: bgFadeIn 0.5s ease 0s 1 normal;
}
.tree {
  background: url("../../../public/img/bg/old_tree000.jpg");
  animation: bgFadeIn 0.5s ease 0s 1 normal;
}

@keyframes bgFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
