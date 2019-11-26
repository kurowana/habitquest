<template>
  <div>
    <div class="statusModal">
      <div>
        <button @click="changeArea">切り替え</button>
      </div>

      <div v-show="isViewArea">
        <img :src="userImgList[user.imgType].stand" />
      </div>
      <div v-show="isSetArea" class="setArea">
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
      <div class="chartArea">
        <base-st-chart class="chartConponent" :user-status="tempStatus"></base-st-chart>
      </div>
    </div>
    <!-- <message @get-scene="getScene"></message> -->
    <char-img></char-img>
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
      test: "p002.png",
      isSetArea: true,
      isViewArea: false,

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
      userImgList: "getUserImgList"
      // monster: "getBattleMonster"
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
    this.initEvent();
    this.changeBg("ステータス");
    // this.setEvent({ type: "msg", content: "調子はどう？成長してる？" });
    // this.clearChar();
    // this.showChar("スフィア2", "r1");
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
    },
    changeArea: function() {
      this.isSetArea = !this.isSetArea;
      this.isViewArea = !this.isViewArea;
    }
  }
};
</script>

<style scoped>
.statusModal {
  width: 650px;
  height: 320px;
  padding: 15px;
  color: #000;
  background: #fff;
  position: absolute;
  top: 100px;
  left: 10px;
  border: 2px double gold;
  border-radius: 10px;
}
.setArea {
  width: 150px;
  float: left;
}
.chartArea {
  width: 400px;
  float: right;
}
.chartConponent {
  position: relative;
  width: 300px;
  height: 300px;
}
</style>
