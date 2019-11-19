<template>
  <div>
    <div v-if="choice.isShow" class="choiceWrapper">
      <div class="choiceBox" @click.prevent="choiced1">{{choice.type1.text}}</div>
      <div class="choiceBox" @click.prevent="choiced2">{{choice.type2.text}}</div>
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
      choice: "getChoice"
    })
  },
  methods: {
    choiced1: function() {
      this.choice.type1.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
      this.$store.commit("setChoice", { flag: false, type1: "", type2: "" });
    },
    choiced2: function() {
      this.choice.type2.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
      this.$store.commit("setChoice", { flag: false, type1: "", type2: "" });
    }
  }
};
</script>

<style scoped>
.choiceWrapper {
  position: absolute;
  margin-top: 140px;
  z-index: 200;
}
.choiceBox {
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

.choiceBox:hover {
  background: #ffe4b5;
  border: 2px double red;
  color: black;
  font-weight: bold;
}
</style>