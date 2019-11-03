<template>
  <div class="header">
    <div class="headerContent">{{user.name}}</div>
    <i class="fas fa-cubes ironIcon"></i>
    <i class="fas fa-feather featherIcon"></i>
    <i class="fas fa-tree woodIcon"></i>
    <i class="fas fa-gem stoneIcon"></i>
    <i class="fas fa-scroll leatherIcon"></i>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";

export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  }
};
</script>

<style scoped>
.header {
  width: 800px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}

.ironIcon {
  color: silver;
  font-size: 30px;
}

.featherIcon {
  color: white;
  font-size: 30px;
}

.woodIcon {
  color: green;
  font-size: 30px;
}
.stoneIcon {
  color: red;
  font-size: 30px;
}
.leatherIcon {
  color: brown;
  font-size: 30px;
}
</style>