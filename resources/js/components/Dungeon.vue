<template>
  <div>
    <div class="leftHeader">
      <div>プレイヤーHP：{{user.hp}}</div>
    </div>
    <div class="centerHeader">
      <button @click="enterDungeon">探索開始</button>
      <div>現在階層：{{currentStage}}</div>
      <div>最高到達階層：{{clearedStage}}</div>
      <div>収入{{tempMoney}}</div>
    </div>
    <div class="rightHeader">
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
      user: "getUser",
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
    dungeonBattle: async () => {
      let firstAttack = null;
      let secondAttack = null;
      let endFlag = false;
      this.$store.commit("setMessage", "戦闘開始");

      while (!endFlag) {
        if (this.user.status.agi >= this.monster.spd) {
          firstAttack = this.user;
          secondAttack = this.monster;
        } else {
          firstAttack = this.monster;
          secondAttack = this.user;
        }
        this.attackPhase(firstAttack, secondAttack);
        endFlag = this.lifeCheck(this.user, this.monster);
        await this.sleep(500);
        if (endFlag) {
          break;
        }
        this.attackPhase(secondAttack, firstAttack);
        endFlag = this.lifeCheck(this.user, this.monster);
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
.leftHeader {
  width: 260px;
  height: 120px;
  padding: 15px;
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0, 0, 255, 0.3);
  border: 2px double gold;
  border-radius: 10px;
}
.centerHeader {
  width: 260px;
  height: 120px;
  padding: 15px;
  position: absolute;
  top: 5px;
  left: 270px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px double gold;
  border-radius: 10px;
}
.rightHeader {
  width: 260px;
  height: 120px;
  padding: 15px;
  position: relative;
  top: 5px;
  left: 535px;
  background: rgba(255, 0, 0, 0.3);
  border: 2px double gold;
  border-radius: 10px;
}
</style>