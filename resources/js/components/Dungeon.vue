<template>
  <div>
    <h1>ダンジョン</h1>
    {{myStatus}}
    <br />
    最高到達ステージ{{clearedStage}}
    現在ステージ{{currentStage}}
    収入{{tempMoney}}
    <button
      @click="startBattle"
    >探索開始</button>
    {{monster}}
    <message @get-scene="getScene"></message>
    <char-img :active-motion="activeMotion" :active-effect="activeEffect"></char-img>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";
import battleMixin from "../mixins/baseMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";

export default {
  components: {
    message: message,
    "char-img": charImg
  },
  mixins: [baseMixin, eventMixin, battleMixin],
  data: function() {
    return {
      clearedStage: 0,
      currentStage: 1,

      tempMoney: 0
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
    this.changeBg("ダンジョン");
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
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    startBattle: function() {
      this.$store.commit("setMonster", this.currentStage);
      this.battle();
    },
    battle: async function() {
      let player = this.myStatus.battle;
      let endFlag = false;
      console.log("戦闘開始");
      while (!endFlag) {
        if (player.spd >= this.monster.spd) {
          await this.sleep(1000);
          this.playerAttack(player, this.monster);
          if (this.monster.hp <= 0) {
            console.log("倒した");
            this.winBattle();
            this.currentStage++;
            this.$store.commit("setMonster", this.currentStage);
          }
          await this.sleep(1000);
          this.monsterAttack(player, this.monster);
          if (player.hp <= 0) {
            this.loseBattle();
            endFlag = true;
          }
        } else {
          await this.sleep(1000);
          this.monsterAttack(player, this.monster);
          if (player.hp <= 0) {
            this.loseBattle();
            endFlag = true;
          }
          await this.sleep(1000);
          this.playerAttack(player, this.monster);
          if (this.monster.hp <= 0) {
            console.log("倒した");
            this.winBattle();
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
    },
    monsterAttack: function(player, monster) {
      console.log("モンスターの攻撃");
      let damage = monster.atk - player.def;
      if (damage > 0) {
        player.hp -= damage;
      }
    },
    winBattle: function() {
      this.tempMoney += 10 * this.currentStage;
    },
    loseBattle: function() {
      this.currentStage = 1;
      this.myStatus.battle.hp = this.myStatus.battle.maxhp;
    }
  }
};
</script>