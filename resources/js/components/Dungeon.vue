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
    <monster-img :battle-effect="battleEffect"></monster-img>
    <!-- <battle-effect v-if="true" :battle-effect="battleEffect"></battle-effect> -->
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";
import battleMixin from "../mixins/battleMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";
import monsterImg from "../parts/monsterImg";
// import battleEffect from "../parts/battleEffect";

export default {
  components: {
    message: message,
    "char-img": charImg,
    "monster-img": monsterImg
    // "battle-effect": battleEffect
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
      monster: "getMonster",
      isEffect: "getIsShowEffect",
      battleEffect: "getBattleEffectPath"
    })
  },
  created: function() {
    this.changeBg("ダンジョン");
    this.initPage();
    console.log(this.isEffect);
  },
  methods: {
    initPage: function() {
      this.showChar("スフィア1", "c");
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
      this.showChar("", "c");
      this.battle();
    },
    battle: async function() {
      let player = this.myStatus.battle;
      let endFlag = false;
      this.$store.commit("setMessage", "戦闘開始");
      while (!endFlag) {
        if (player.spd >= this.monster.spd) {
          this.playerAttack(player, this.monster);
          await this.sleep(500);
          this.$store.commit("setIsShowEffect", false);
          await this.sleep(100);
          if (this.monster.hp <= 0) {
            this.$store.commit("setMessage", "倒した");
            this.winBattle();
            this.currentStage++;
            this.$store.commit("setMonster", this.currentStage);
          }
          this.monsterAttack(player, this.monster);
          await this.sleep(500);
          this.$store.commit("setIsShowEffect", false);
          await this.sleep(100);
          if (player.hp <= 0) {
            this.loseBattle();
            endFlag = true;
          }
        } else {
          this.monsterAttack(player, this.monster);
          await this.sleep(500);
          this.$store.commit("setIsShowEffect", false);
          await this.sleep(100);
          if (player.hp <= 0) {
            this.loseBattle();
            endFlag = true;
          }
          this.playerAttack(player, this.monster);
          await this.sleep(500);
          this.$store.commit("setIsShowEffect", false);
          await this.sleep(100);
          if (this.monster.hp <= 0) {
            this.$store.commit("setMessage", "倒した");
            this.winBattle();
            this.currentStage++;
            this.$store.commit("setMonster", this.currentStage);
          }
        }
      }
    },
    playerAttack: function(player, monster) {
      this.showBattleEffect("剣", this);
      console.log("プレイヤーの攻撃");
      let damage = player.atk - monster.def;
      if (damage > 0) {
        monster.hp -= damage;
      }
      console.log(damage + ":" + monster.hp);
      this.$store.commit(
        "setMessage",
        monster.name + "に" + damage + "のダメージ"
      );
    },
    monsterAttack: function(player, monster) {
      this.showBattleEffect("火", this);
      let damage = monster.atk - player.def;
      if (damage > 0) {
        player.hp -= damage;
      }
      this.$store.commit("setMessage", "主人公に" + damage + "のダメージ");
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

<style scoped>
</style>