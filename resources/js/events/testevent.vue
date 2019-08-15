<template>
  <div>
    <message></message>
    <char-img></char-img>
  </div>
</template>

<script>
import message from "../parts/Message";
import charImg from "../parts/charImg";

export default {
  components: {
    message: message,
    "char-img": charImg
  },
  data: function() {
    return {};
  },
  created: function() {
    this.$store.commit("setCharImgR1", "");

    this.$store.commit("setMessage", "これはTestです");
  }
};
</script>

<style scoped>
</style>