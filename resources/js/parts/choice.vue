<template>
  <div>
    <div class="choiceWrapper">
      <div class="choiceBox" @click.prevent="choiced1">{{choice1.text}}</div>
      <div class="choiceBox" @click.prevent="choiced2">{{choice2.text}}</div>
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
      choice1: "getChoice1",
      choice2: "getChoice2"
    })
  },
  methods: {
    choiced1: function() {
      console.log(this.choice1);
      this.choice1.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
    },
    choiced2: function() {
      console.log(this.choice2);
      this.choice2.event();
      this.$emit("complete-choice");
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
    }
  }
};
</script>

<style scoped>
.choiceWrapper {
  position: absolute;
  margin-top: 140px;
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