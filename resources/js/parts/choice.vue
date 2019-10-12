<template>
  <div>
    <div @click="choiced1">{{choice1.text}}</div>
    <div @click="choiced2">{{choice2.text}}</div>
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
      this.choice1.event();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
    },
    choiced2: function() {
      this.choice1.event();
      this.$store.commit("setSceneCount", this.sceneCount + 1);
      this.$emit("get-scene", this.sceneCount);
    }
  }
};
</script>

<style scoped>
</style>