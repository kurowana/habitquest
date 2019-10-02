<template>
  <div class="wrapper">
    {{userId}}
    <br />
    {{userName}}
    <br />
    {{$store.state.userStore.isLogin}}
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

// import Message from "./Message";
// import charImg from "./charImg";

export default {
  components: {
    "char-info": charInfo,
    "char-create": charCreate,
    habit: habit,
    "monster-create": monsterCreate,
    battle: Battle
    // message: Message,
    // "char-img": charImg,
  },
  data: function() {
    return {
      // user:'',

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
    // ...mapGetters(["getUserInfo", "getStatus", "getMessage", "getSound"]),
    ...mapGetters({
      user: "getUserInfo",
      myStatus: "getStatus",
      message: "getMessage",
      getSound: "getSound"
    }),

    bgImg: function() {
      // if (this.$store.state.eventStore.bgImg !== "") {
      //   return "url(./img/bg/" + this.$store.state.eventStore.bgImg + ")";
      // } else {
      //   return "#000000";
      // }
      return this.$store.state.eventStore.bgImg;
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
  // created: function() {
  //   axios
  //     .post("./api/set_status", {
  //       user_id: this.userId
  //     })
  //     .then(res => {
  //       this.user = res.data;
  //       this.$store.state.userStore.user = res.data;
  //       this.$store.state.userStore.userId = this.UserId;

  //       this.$store.state.userStore.userSt.maxhp = Math.round(
  //         res.data.status.vit * 2 + res.data.status.str + 50
  //       );
  //       this.$store.state.userStore.userSt.hp = Math.round(
  //         res.data.status.vit * 2 + res.data.status.str + 50
  //       );
  //       this.$store.state.userStore.userSt.maxmp = Math.round(
  //         res.data.status.int * 2 + 20
  //       );
  //       this.$store.state.userStore.userSt.mp = Math.round(
  //         res.data.status.int * 2 + 20
  //       );
  //       this.$store.state.userStore.userSt.atk = Math.round(
  //         res.data.status.str * 2 + res.data.status.dex / 2
  //       );
  //       this.$store.state.userStore.userSt.matk = Math.round(
  //         res.data.status.int * 2 + res.data.status.dex / 2
  //       );
  //       this.$store.state.userStore.userSt.def = Math.round(
  //         res.data.status.vit + res.data.status.str / 2
  //       );
  //       this.$store.state.userStore.userSt.mdef = Math.round(
  //         res.data.status.int + res.data.status.vit / 2
  //       );
  //       this.$store.state.userStore.userSt.spd = Math.round(
  //         res.data.status.agi * 1.5
  //       );
  //       this.$store.state.userStore.userSt.hit =
  //         Math.round(res.data.status.dex + res.data.status.luc / 2) + 80;
  //       this.$store.state.userStore.userSt.flee = Math.round(
  //         res.data.status.agi + res.data.status.luc / 2
  //       );
  //     });
  // },
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
        });
    },
    test: function() {
      this.$store.commit("strup");
    },
    test2: function() {
      this.$store.commit("plus");
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
        });
    },
    playBgm: function() {
      // const v = document.getElementById("bgm");
      // v.volume = v.volume * 0.1;
      // v.play();
      // this.isPlay = true;
      this.$store.commit("setSoundFlag", true);
    },
    pauseBgm: function() {
      // const v = document.getElementById("bgm");
      // v.volume = v.volume * 10;
      // v.pause();
      // this.isPlay = false;
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

  /* background-image: url("../../../public/img/bg/shinden000.jpg"); */
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
