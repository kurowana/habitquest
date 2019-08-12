<template>
  <div class="wrapper">
    <div class="content">
      <div class="game-view">
        <message></message>
      </div>
      <div class="sidebar">
        <div class="btn">
          ボタンテスト
          <div class="anime"></div>
          <div class="anime2"></div>
        </div>
      </div>
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
import Message from "./Message";

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
    /*userinfo:function(){
            return this.$store.state.user;
        },
        count:function(){
            return this.$store.state.count;
        },*/
    ...mapGetters(["getUserInfo", "getUserSt"])
  },
  components: {
    "char-info": charInfo,
    "char-create": charCreate,
    habit: habit,
    "monster-create": monsterCreate,
    battle: Battle,
    message: Message
  },
  created: function() {
    axios
      .post("./api/set_status", {
        user_id: this.userId
      })
      .then(res => {
        this.user = res.data;
        this.$store.state.user = res.data;
        this.$store.state.user_id = this.UserId;

        this.$store.state.userSt.maxhp = Math.round(
          res.data.status.vit * 2 + res.data.status.str + 50
        );
        this.$store.state.userSt.hp = Math.round(
          res.data.status.vit * 2 + res.data.status.str + 50
        );
        this.$store.state.userSt.maxmp = Math.round(
          res.data.status.int * 2 + 20
        );
        this.$store.state.userSt.mp = Math.round(res.data.status.int * 2 + 20);
        this.$store.state.userSt.atk = Math.round(
          res.data.status.str * 2 + res.data.status.dex / 2
        );
        this.$store.state.userSt.matk = Math.round(
          res.data.status.int * 2 + res.data.status.dex / 2
        );
        this.$store.state.userSt.def = Math.round(
          res.data.status.vit + res.data.status.str / 2
        );
        this.$store.state.userSt.mdef = Math.round(
          res.data.status.int + res.data.status.vit / 2
        );
        this.$store.state.userSt.spd = Math.round(res.data.status.agi * 1.5);
        this.$store.state.userSt.hit =
          Math.round(res.data.status.dex + res.data.status.luc / 2) + 80;
        this.$store.state.userSt.flee = Math.round(
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
.sidebar {
  width: 200px;
  background: url("../../../public/img/ui/sidebar.png") repeat;
}
.game-view {
  width: 800px;
  height: 600px;
  position: relative;
  background-image: url("../../../public/img/bg/shinden000.jpg");
}
.btn {
  width: 180px;
  height: 40px;
  margin: 10px;
  padding: 5px;
  background: linear-gradient(#333, #666);
  border: double 2px gold;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}

.anime {
  width: 192px;
  height: 192px;
  padding: 0;
  background: url("../../../public/img/effect/test.png") 0 0 no-repeat;
  animation: sprite1 0.5s step-end infinite;
}
.anime2 {
  width: 192px;
  height: 192px;
  padding: 0;
  background: url("../../../public/img/effect/test2.png") 0 0 no-repeat;
  animation: sprite1 0.5s step-end infinite;
}
@keyframes sprite1 {
  1% {
    background-position: 0 0;
  }
  5% {
    background-position: -192px 0;
  }
  10% {
    background-position: -384px 0;
  }
  15% {
    background-position: -576px 0;
  }
  20% {
    background-position: -768px 0;
  }
  25% {
    background-position: 0 -192px;
  }
  30% {
    background-position: -192px -192px;
  }
  35% {
    background-position: -384px -192px;
  }
  40% {
    background-position: -576px -192px;
  }
  45% {
    background-position: -768px -192px;
  }
  50% {
    background-position: 0 -384px;
  }
  55% {
    background-position: -192px -384px;
  }
  60% {
    background-position: -384px -384px;
  }
  65% {
    background-position: -576px -384px;
  }
  70% {
    background-position: -768px -384px;
  }
  75% {
    background-position: 0 -576px;
  }
  80% {
    background-position: -192px -576px;
  }
  85% {
    background-position: -384px -576px;
  }
  90% {
    background-position: -576px -576px;
  }
  95% {
    background-position: -768px -576px;
  }
}
</style>