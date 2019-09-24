<template>
  <div>
    {{user}}
    {{status}}
    {{point}}
    {{baseSt}}
    <base-st-chart></base-st-chart>
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
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.status = res.data;
            this.$store.commit("setPoint", res.data.point);
            console.log(res.data.str);
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
    }
  }
};
</script>