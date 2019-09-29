<template>
  <div>
    <h1>ダンジョン</h1>
    {{myStatus}}
    <br />
    最高到達ステージ{{clearedStage}}
    現在ステージ{{currentStage}}
    <button @click="startBattle">探索開始</button>
    {{monster}}
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {},
  data: function() {
    return {
      clearedStage: 0,
      currentStage: 1
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo",
      point: "getPoint",
      myStatus: "getStatus",
      monster: "getMonster"
    })
  },
  created: function() {
    this.initPage();
  },
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
    startBattle: function() {
      this.$store.commit("setMonster", this.currentStage);
      this.battle();
    },
    battle: function() {
      let player = this.myStatus.battle;
      let endFlag = false;
      console.log("戦闘開始");
      while (!endFlag) {
        if (player.spd >= this.monster.spd) {
          this.playerAttack(player, this.monster);
          if (this.monster.hp <= 0) {
            console.log("倒した");
            this.currentStage++;
            this.$store.commit("setMonster", this.currentStage);
          }
          this.monsterAttack(player, this.monster);
          if (player.hp <= 0) {
            endFlag = true;
          }
        } else {
          this.monsterAttack(player, this.monster);
          if (player.hp <= 0) {
            endFlag = true;
          }
          this.playerAttack(player, this.monster);
          if (this.monster.hp <= 0) {
            console.log("倒した");
            this.currentStage++;
            this.$store.commit("setMonster", this.currentStage);
          }
        }
      }
    },
    playerAttack: function(player, monster) {
      console.log("プレイヤーの攻撃");
      let damage = player.atk - monster.def;
      if (damage > 0) {
        monster.hp -= damage;
      }
      console.log(damage + ":" + monster.hp);
      return;
    },
    monsterAttack: function(player, monster) {
      console.log("モンスターの攻撃");
      let damage = monster.atk - player.def;
      if (damage > 0) {
        player.hp -= damage;
      }
      return;
    }
  }
};
</script>