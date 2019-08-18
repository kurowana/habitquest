<template>
  <div class="wrapper">
    <div class="content">
      <router-view class="game-view" :style="{background:bgImg}"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
    <char-create :userId="userId"></char-create>
    <char-info :userinfo="getUserInfo" :userst="getUserSt"></char-info>
    <habit></habit>
    <monster-create></monster-create>
    <battle></battle>
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
  data: function() {
    return {
      user: ""
    };
  },
  props: {
    userId: ""
  },
  computed: {
    ...mapGetters(["getUserInfo", "getUserSt", "getMessage"]),

    bgImg: function() {
      return "url(./img/bg/" + this.$store.state.eventStore.bgImg + ")";
    }
  },
  components: {
    "char-info": charInfo,
    "char-create": charCreate,
    habit: habit,
    "monster-create": monsterCreate,
    battle: Battle
    // message: Message,
    // "char-img": charImg,
  },
  created: function() {
    axios
      .post("./api/set_status", {
        user_id: this.userId
      })
      .then(res => {
        this.user = res.data;
        this.$store.state.userStore.user = res.data;
        this.$store.state.userStore.user_id = this.UserId;

        this.$store.state.userStore.userSt.maxhp = Math.round(
          res.data.status.vit * 2 + res.data.status.str + 50
        );
        this.$store.state.userStore.userSt.hp = Math.round(
          res.data.status.vit * 2 + res.data.status.str + 50
        );
        this.$store.state.userStore.userSt.maxmp = Math.round(
          res.data.status.int * 2 + 20
        );
        this.$store.state.userStore.userSt.mp = Math.round(
          res.data.status.int * 2 + 20
        );
        this.$store.state.userStore.userSt.atk = Math.round(
          res.data.status.str * 2 + res.data.status.dex / 2
        );
        this.$store.state.userStore.userSt.matk = Math.round(
          res.data.status.int * 2 + res.data.status.dex / 2
        );
        this.$store.state.userStore.userSt.def = Math.round(
          res.data.status.vit + res.data.status.str / 2
        );
        this.$store.state.userStore.userSt.mdef = Math.round(
          res.data.status.int + res.data.status.vit / 2
        );
        this.$store.state.userStore.userSt.spd = Math.round(
          res.data.status.agi * 1.5
        );
        this.$store.state.userStore.userSt.hit =
          Math.round(res.data.status.dex + res.data.status.luc / 2) + 80;
        this.$store.state.userStore.userSt.flee = Math.round(
          res.data.status.agi + res.data.status.luc / 2
        );
      });
  },
  methods: {
    test: function() {
      this.$store.commit("strup");
    },
    test2: function() {
      this.$store.commit("plus");
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