<template>
  <div>
    {{myAssets}}
    <h1>武器制作</h1>
    <div>
      鉄：
      <input type="text" v-model="inputIron" />
    </div>
    <div>
      羽毛：
      <input type="text" v-model="inputFeather" />
    </div>
    <div>
      木材：
      <input type="text" v-model="inputWood" />
    </div>
    <div>
      魔石：
      <input type="text" v-model="inputStone" />
    </div>
    <div>
      革：
      <input type="text" v-model="inputLeather" />
    </div>
    <div>
      <select v-model="inputType">
        <option value="武器">武器</option>
        <option value="盾">盾</option>
        <option value="鎧">鎧</option>
        <option value="アクセサリー">アクセサリー</option>
      </select>
    </div>
    <div>
      <button @click="createEquipment">装備制作</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

export default {
  components: {},
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      inputIron: 0,
      inputFeather: 0,
      inputWood: 0,
      inputStone: 0,
      inputLeather: 0,
      inputType: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      myAssets: "getAssets"
    })
  },
  created: function() {
    this.changeBg("武器屋");
    this.initPage();
  },
  methods: {
    initPage: function() {
      this.getMyAssets();
    },
    getMyAssets: function() {
      axios
        .post("./api/getMyAssets", {})
        .then(res => {
          this.$store.commit("setAssets", {
            monery: res.data.money,
            iron: res.data.iron,
            feather: res.data.feather,
            wood: res.data.wood,
            stone: res.data.stone,
            leather: res.data.leather
          });
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    createEquipment: function() {}
  }
};
</script>