<template>
  <div>
    <div class="leftHeader">
      <div>
        <div>{{user.name}}</div>
        <div>HP：{{battleUser.hp}}</div>
        <div>MP：{{battleUser.mp}}</div>
      </div>
    </div>
    <div class="centerHeader">
      <button @click="enterDungeon">探索開始</button>
      <div>現在階層：{{currentStage}}</div>
      <div>最高到達階層：{{user.stage}}</div>
      <div>収入{{tempMoney}}</div>
    </div>
    <div class="rightHeader">
      <div>モンスターHP:{{monster.hp}}</div>
    </div>
    <message @get-scene="getScene"></message>
    <char-img :active-motion="activeMotion" :active-effect="activeEffect"></char-img>
    <!-- <monster-img :battle-effect="battleEffect"></monster-img> -->
    <monster-img></monster-img>
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

      battleUser: {
        name: "",
        hp: 0,
        mp: 0,
        atk: 0,
        matk: 0,
        def: 0,
        mdef: 0,
        spd: 0,
        hit: 0,
        flee: 0
      },

      tempMoney: 0
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      battleStatus: "getBattleStatus",
      monster: "getBattleMonster",
      monsterList: "getMonsterList"
      // isEffect: "getIsShowEffect"
      // battleEffect: "getBattleEffectPath"
    })
  },
  created: function() {
    this.changeBg("ダンジョン");
    this.showChar("スフィア1", "c");
    this.initPage();
  },
  mounted: function() {
    this.$set(this.battleUser, "name", this.user.name);
    this.$set(this.battleUser, "hp", this.battleStatus.hp);
    this.$set(this.battleUser, "mp", this.battleStatus.mp);
    this.$set(this.battleUser, "atk", this.battleStatus.atk);
    this.$set(this.battleUser, "matk", this.battleStatus.matk);
    this.$set(this.battleUser, "def", this.battleStatus.def);
    this.$set(this.battleUser, "mdef", this.battleStatus.mdef);
    this.$set(this.battleUser, "spd", this.battleStatus.spd);
    this.$set(this.battleUser, "hit", this.battleStatus.hit);
    this.$set(this.battleUser, "flee", this.battleStatus.flee);
  },
  methods: {
    initPage: function() {
      // this.getMyStatus();
      this.clearedStage = this.user.stage;
    },
    // getMyStatus: function() {
    //   axios
    //     .post("./api/getMyStatus", {
    //       userId: this.user.id
    //     })
    //     .then(res => {
    //       if (res.status === 419) {
    //         alert("セッションエラー");
    //         location.reload();
    //       } else {
    //         this.status = res.data;
    //         this.$store.commit("setPoint", res.data.point);
    //         this.$store.commit("setStatus", {
    //           str: res.data.str,
    //           agi: res.data.agi,
    //           vit: res.data.vit,
    //           int: res.data.int,
    //           dex: res.data.dex,
    //           luc: res.data.luc
    //         });
    //         this.stage = res.data.clearedStage;
    //       }
    //     })
    //     .catch(error => {
    //       this.apiDefaultError(error);
    //     });
    // },
    enterDungeon: function() {
      this.clearChar();
      this.setDungeonMonster();
      this.dungeonBattle();
    },
    dungeonBattle: async function() {
      // let firstAttack = null;
      // let secondAttack = null;
      let endFlag = false;
      this.$store.commit("setMessage", "戦闘開始");

      if (this.battleUser.agi >= this.monster.spd) {
        while (!endFlag) {
          this.userAttack(this.battleUser, this.monster);
          endFlag = this.monsterLifeCheck(this.monster);
          await this.sleep(500);

          this.monsterAttack(this.monster, this.battleUser);
          endFlag = this.userLifeCheck(this.battleUser);
          await this.sleep(500);
          if (endFlag) {
            break;
          }
        }
      } else {
        while (!endFlag) {
          this.monsterAttack(this.monster, this.battleUser);
          endFlag = this.userLifeCheck(this.battleUser);
          await this.sleep(500);
          if (endFlag) {
            break;
          }
          this.userAttack(this.battleUser, this.monster);
          endFlag = this.monsterLifeCheck(this.monster);
          await this.sleep(500);
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