<template>
  <div>
    {{user}}
    {{myStatus}}
    <p>残りポイント：{{point.temp}}</p>
    <table>
      <thead>
        <tr>
          <th>能力</th>
          <th>値</th>
          <th>振り分け</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value,key) in myStatus.temp" :key="key">
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
    <div style="background:#fff; width:400px; position:relative">
      <base-st-chart :baseSt="myStatus.temp"></base-st-chart>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import BaseStChart from "../chart/BaseStChart.vue";

export default {
  components: {
    BaseStChart
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo",
      point: "getPoint",
      myStatus: "getStatus",
      monster: "getBattleMonster"
    })
  },
  created: function() {
    this.changeBg("ホーム");
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
    incTempSt: function(type) {
      this.$store.commit("incBaseSt", type);
    },
    decTempSt: function(type) {
      this.$store.commit("decBaseSt", type);
    },
    updateStatus: function() {
      axios
        .post("./api/updateStatus", {
          point: this.point.temp,
          status: this.myStatus.temp
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