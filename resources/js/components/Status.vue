<template>
  <div>
    <main-header></main-header>
    <div class="leftArea">
      <p>残りポイント：{{tempPoint}}</p>
      <table>
        <thead>
          <tr>
            <th>能力</th>
            <th>値</th>
            <th>振り分け</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,key) in tempStatus" :key="key">
            <td>{{key}}</td>
            <td>{{value}}</td>
            <td>
              <button @click.self.prevent="incTempSt(key)">+</button>
              <button @click.self.prevent="decTempSt(key)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click.self.prevent="updateStatus">決定</button>
      <button @click.self.prevent="resetStatus">リセット</button>
    </div>
    <div class="centerArea">
      <div style="background:#fff; width:300px; height:400px; position:relative">
        <base-st-chart :user-status="tempStatus"></base-st-chart>
      </div>
    </div>
    <message @get-scene="getScene"></message>
    <char-img :active-motion="activeMotion" :active-effect="activeEffect"></char-img>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";
import BaseStChart from "../chart/BaseStChart.vue";
import mainHeader from "../parts/MainHeader";

export default {
  components: {
    message,
    charImg,
    BaseStChart,
    "main-header": mainHeader
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      tempPoint: 0,
      tempStatus: {
        str: 0,
        agi: 0,
        vit: 0,
        int: 0,
        dex: 0,
        luc: 0
      },

      eventObj: [
        () => {
          this.setEvent({ type: "msg", content: "どの能力を成長させるの？" });
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      monster: "getBattleMonster"
    })
  },
  watch: {
    tempStatus: {
      handler: function() {
        console.log("change");
      },
      deep: true
    }
  },
  created: function() {
    this.changeBg("ホーム");
    this.setEvent({ type: "msg", content: "調子はどう？成長してる？" });
    this.clearChar();
    this.showChar("スフィア2", "r1");
    this.initPage();
  },
  methods: {
    initPage: function() {
      this.tempPoint = this.user.point;
      this.$set(this.tempStatus, "str", this.user.status.str);
      this.$set(this.tempStatus, "agi", this.user.status.agi);
      this.$set(this.tempStatus, "vit", this.user.status.vit);
      this.$set(this.tempStatus, "int", this.user.status.int);
      this.$set(this.tempStatus, "dex", this.user.status.dex);
      this.$set(this.tempStatus, "luc", this.user.status.luc);
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
    //       }
    //     });
    // },
    incTempSt: function(type) {
      if (this.tempPoint > 0) {
        this.tempPoint--;
        this.$set(this.tempStatus, type, this.tempStatus[type] + 1);
      } else {
        return false;
      }
    },
    decTempSt: function(type) {
      if (
        this.user.point > this.tempPoint &&
        this.tempStatus[type] > this.user.status[type]
      ) {
        this.tempPoint++;
        this.$set(this.tempStatus, type, this.tempStatus[type] - 1);
      } else {
        return false;
      }
    },
    updateStatus: function() {
      axios
        .post("./api/updateStatus", {
          point: this.tempPoint,
          status: this.tempStatus
        })
        .then(res => {
          this.initPage();
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    resetStatus: function() {
      this.initPage();
    }
  }
};
</script>

<style scoped>
.leftArea {
  width: 180px;
  height: 420px;
  padding: 15px;
  background: #000;
  position: absolute;
  top: 10px;
  left: 0;
  border: 2px double gold;
  border-radius: 10px;
}
.centerArea {
  width: 330px;
  height: 420px;
  padding: 15px;
  background: #000;
  position: absolute;
  top: 10px;
  left: 200px;
  border: 2px double gold;
  border-radius: 10px;
}
</style>