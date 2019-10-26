<template>
  <div>
    <div class="rightSide">
      <button @click="enterDungeon">探索開始</button>
      <div>現在階層：{{currentStage}}</div>
      <div>最高到達階層：{{clearedStage}}</div>
      <div>収入{{tempMoney}}</div>
      <div>プレイヤーHP：{{player.battle.hp}}</div>
      <div>モンスターHP:{{monster.hp}}</div>
    </div>
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
      player: "getStatus",
      monster: "getBattleMonster",
      monsterList: "getMonsterList",
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
    enterDungeon: function() {
      this.showChar("", "c");
      this.setDungeonMonster();
      this.dungeonBattle();
    },
    dungeonBattle: async function(vm) {
      let firstAttack = null;
      let secondAttack = null;
      let endFlag = false;
      this.$store.commit("setMessage", "戦闘開始");

      while (!endFlag) {
        if (this.player.battle.spd >= this.monster.spd) {
          firstAttack = this.player.battle;
          secondAttack = this.monster;
        } else {
          firstAttack = this.monster;
          secondAttack = this.player.battle;
        }
        this.attackPhase(firstAttack, secondAttack);
        endFlag = this.lifeCheck(this.player.battle, this.monster);
        await this.sleep(500);
        if (endFlag) {
          break;
        }
        this.attackPhase(secondAttack, firstAttack);
        endFlag = this.lifeCheck(this.player.battle, this.monster);
        await this.sleep(500);
        if (endFlag) {
          break;
        }
      }
      this.$store.commit("setMessage", "戦闘終了");
    }
  }
};
</script>

<style scoped>
.rightSide {
  width: 250px;
  height: 425px;
  background: black;
  opacity: 0.5;
  border: 2px double gold;
}
</style>