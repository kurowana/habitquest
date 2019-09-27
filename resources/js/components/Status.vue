<template>
  <div>
    {{user}}
    {{status}}
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
        <tr v-for="(value,key) in baseSt.temp" :key="key">
          <td>{{key}}</td>
          <td>{{value}}</td>
          <td>
            <button @click="incTempSt(key)">+</button>
            <button @click="decTempSt(key)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    {{baseSt}}
    <div style="background:#fff; width:400px; position:relative">
      <base-st-chart :baseSt="baseSt.temp"></base-st-chart>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import BaseStChart from "../chart/BaseStChart.vue";

export default {
  components: {
    BaseStChart
  },
  data: function() {
    return {
      status: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo",
      point: "getPoint",
      baseSt: "getBaseSt",
      battleSt: "getBattleSt"
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
            this.$store.commit("setBaseSt", {
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
    }
  }
};
</script>