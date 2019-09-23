<template>
  <div>{{status}}</div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      status: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo"
    })
  },
  created: function() {
    this.initPage();
  },
  methods: {
    initPage: function() {
      this.getMyStatus();
    },
    getMyStatus: function() {
      axios
        .post("./api/getMyStatus", {
          userId: this.user.id
        })
        .then(res => {
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.status = res.data;
          }
        });
    }
  }
};
</script>