<template>
  <div>
    <div>
      <h2>基礎ステータス</h2>
      <img :src="v_userinfo.status.char_img" />
      <div>振り分け可能ポイント{{v_userinfo.status.point}}</div>
      <table>
        <tbody>
          <tr>
            <td>STR</td>
            <td>{{v_userinfo.status.str}}</td>
            <button @click="addPoint('str')">＋</button>
          </tr>
          <tr>
            <td>VIT</td>
            <td>{{v_userinfo.status.vit}}</td>
            <button @click="addPoint('vit')">＋</button>
          </tr>
          <tr>
            <td>INT</td>
            <td>{{v_userinfo.status.int}}</td>
            <button @click="addPoint('int')">＋</button>
          </tr>
          <tr>
            <td>AGI</td>
            <td>{{v_userinfo.status.agi}}</td>
            <button @click="addPoint('agi')">＋</button>
          </tr>
          <tr>
            <td>DEX</td>
            <td>{{v_userinfo.status.dex}}</td>
            <button @click="addPoint('dex')">＋</button>
          </tr>
          <tr>
            <td>LUC</td>
            <td>{{v_userinfo.status.luc}}</td>
            <button @click="addPoint('luc')">＋</button>
          </tr>
        </tbody>
      </table>
      <button @click.prevent="growStatus">振り分け</button>
      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td>{{userst.maxhp}}</td>
          </tr>
          <tr>
            <td>MP</td>
            <td>{{userst.maxmp}}</td>
          </tr>
          <tr>
            <td>ATK</td>
            <td>{{userst.atk}}</td>
          </tr>
          <tr>
            <td>MATK</td>
            <td>{{userst.matk}}</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>{{userst.def}}</td>
          </tr>
          <tr>
            <td>MDEF</td>
            <td>{{userst.mdef}}</td>
          </tr>
          <tr>
            <td>SPD</td>
            <td>{{userst.spd}}</td>
          </tr>
          <tr>
            <td>HIT</td>
            <td>{{userst.hit}}</td>
          </tr>
          <tr>
            <td>FLEE</td>
            <td>{{userst.flee}}</td>
          </tr>
        </tbody>
      </table>
      現在HP：{{userst.hp}}
      <br />
      現在MP：{{userst.mp}}
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";

export default {
  mixins: [baseMixin],
  data: function() {
    return {
      currentHP: null,
      currentMP: null
    };
  },
  props: {
    userinfo: "",
    userst: ""
  },
  computed: {
    v_userinfo: function() {
      return this.userinfo;
    }
  },
  created: function() {},
  methods: {
    addPoint: function(status) {
      if (status == "str" && this.userinfo.status.point > 0) {
        this.userinfo.status.str++;
        this.userinfo.status.point--;
      }
      if (status == "vit" && this.userinfo.status.point > 0) {
        this.userinfo.status.vit++;
        this.userinfo.status.point--;
      }
      if (status == "int" && this.userinfo.status.point > 0) {
        this.userinfo.status.int++;
        this.userinfo.status.point--;
      }
      if (status == "agi" && this.userinfo.status.point > 0) {
        this.userinfo.status.agi++;
        this.userinfo.status.point--;
      }
      if (status == "dex" && this.userinfo.status.point > 0) {
        this.userinfo.status.dex++;
        this.userinfo.status.point--;
      }
      if (status == "luc" && this.userinfo.status.point > 0) {
        this.userinfo.status.luc++;
        this.userinfo.status.point--;
      }
    },
    growStatus: function() {
      axios
        .post("./api/grow_status", {
          user_id: this.userinfo.id,
          str: this.userinfo.status.str,
          vit: this.userinfo.status.vit,
          int: this.userinfo.status.int,
          agi: this.userinfo.status.agi,
          dex: this.userinfo.status.dex,
          luc: this.userinfo.status.luc,
          point: this.userinfo.status.point
        })
        .then(res => {
          location.reload();
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    }
  }
};
</script>

