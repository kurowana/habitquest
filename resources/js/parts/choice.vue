<template>
  <div>
    <div v-if="selectMsg.isShow" class="selectWrapper">
      <div class="selectBox" @click.prevent="selected1">{{selectMsg.option1.text}}</div>
      <div class="selectBox" @click.prevent="selected2">{{selectMsg.option2.text}}</div>
    </div>
  </div>
</template>

<script>
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import { mapGetters } from "vuex";

export default {
  mixins: [baseMixin, eventMixin],
  computed: {
    ...mapGetters({
      sceneCount: "getSceneCount",
      selectMsg: "getSelectMsg"
    })
  },
  methods: {
    selected1: function() {
      this.selectMsg.option1.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
      this.$store.commit("setSelectMsg", { flag: false, type1: "", type2: "" });
    },
    selected2: function() {
      this.selectMsg.option2.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
      this.$store.commit("setSelectMsg", { flag: false, type1: "", type2: "" });
    }
  }
};
</script>

<style scoped>
.selectWrapper {
  position: absolute;
  margin-top: 140px;
  z-index: 200;
}
.selectBox {
  width: 600px;
  height: 50px;
  background: black;
  border: 2px double gold;
  border-radius: 10px;
  margin: 0px 0px 50px 100px;
  padding-top: 9px;
  z-index: 200;
  font-size: 1.3em;
  text-align: center;
}

.selectBox:hover {
  background: #ffe4b5;
  border: 2px double red;
  color: black;
  font-weight: bold;
}
</style>