<template>
  <div class="wrapper">
    {{user}}
    <div class="content">
      <router-view class="game-view" :style="{background:bgImg}"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
    <div>
      <label>name</label>
      <input type="hidden" name="_token" :value="csrf" />
      <input type="text" v-model="userName" />
      <label>password</label>
      <input type="text" v-model="password" />
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
import { setTimeout } from "timers";
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

      userName: "",
      password: "",

      isPlay: false,

      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  props: {
    user: {
      type: String
    }
  },

  computed: {
    ...mapGetters(["getUserInfo", "getUserSt", "getMessage", "getSound"]),

    bgImg: function() {
      return "url(./img/bg/" + this.$store.state.eventStore.bgImg + ")";
    }
  },
  created: function() {
    if (this.user == "") {
      console.log("ng");
    } else {
      console.log("ok");
      this.$router.push({ name: "home" });
    }
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
    test: function() {
      this.$store.commit("strup");
    },
    test2: function() {
      this.$store.commit("plus");
    },
    registTest: function() {
      axios
        .post("./register", {
          name: this.userName,
          password: this.password,
          password_confirmation: this.password
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
  /* background-image: url("../../../public/img/bg/shinden000.jpg"); */
}
</style>
