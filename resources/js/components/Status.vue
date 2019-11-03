<template>
  <div>
    <div class="leftArea">
      <p>残りポイント：{{user.point}}</p>
      <table>
        <thead>
          <tr>
            <th>能力</th>
            <th>値</th>
            <th>振り分け</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,key) in user.status" :key="key">
            <td>{{key}}</td>
            <td>{{value}}</td>
            <td>
              <button @click="incTempSt(key)">+</button>
              <button @click="decTempSt(key)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="updateStatus">決定</button>
    </div>
    <div class="centerArea">
      <div style="background:#fff; width:300px; height:400px; position:relative">
        <base-st-chart :user-status="user.status"></base-st-chart>
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

export default {
  components: {
    message,
    charImg,
    BaseStChart
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      eventObj: [
        function(vm) {
          vm.setEvent({ type: "msg", content: "どの能力を成長させるの？" });
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
  created: function() {
    this.changeBg("ホーム");
    this.setEvent({ type: "msg", content: "調子はどう？成長してる？" });
    this.clearChar();
    this.showChar("スフィア2", "r1");
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
          }
        });
    },
    // incTempSt: function(type) {
    //   this.$store.commit("incBaseSt", type);
    // },
    // decTempSt: function(type) {
    //   this.$store.commit("decBaseSt", type);
    // },
    updateStatus: function() {
      axios
        .post("./api/updateStatus", {
          point: this.user.point,
          status: this.user.status
        })
        .then(res => {
          if (res.data === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.initPage();
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
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