<template>
  <div>
    <h2>バトルテスト</h2>
    <button @click="appearMonster">モンスター出現</button>
    <h3>モンスターステータス</h3>
    <div v-if="monster!=null">
      <table>
        <tbody>
          <tr>
            <td>モンスター名</td>
            <td>{{monster.monster_name}}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{{monster.hp}}</td>
          </tr>
          <tr>
            <td>mp</td>
            <td>{{monster.mp}}</td>
          </tr>
          <tr>
            <td>ATK</td>
            <td>{{monster.atk}}</td>
          </tr>
          <tr>
            <td>MATK</td>
            <td>{{monster.matk}}</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>{{monster.def}}</td>
          </tr>
          <tr>
            <td>MDEF</td>
            <td>{{monster.mdef}}</td>
          </tr>
          <tr>
            <td>spd</td>
            <td>{{monster.spd}}</td>
          </tr>
          <tr>
            <td>hit</td>
            <td>{{monster.hit}}</td>
          </tr>
          <tr>
            <td>flee</td>
            <td>{{monster.flee}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <button @click.prevent="attack">攻撃開始</button>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";

export default {
  mixins: [baseMixin],
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      monster: "getMonster"
    })
  },
  methods: {
    appearMonster: function() {
      axios
        .post("api/appear_monster", {})
        .then(res => {
          this.$store.state.monster = res.data;
          this.$store.state.monsterHp = res.data.hp;
          this.$store.state.monsterMp = res.data.mp;
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    attack: function() {
      let d = this.$store.state.userSt.atk - this.$store.state.monster.def;
      this.$store.state.monster.hp -= d;
    }
  }
};
</script>
