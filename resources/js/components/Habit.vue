<template>
  <div>
    <h2>活動の登録</h2>
    <input type="text" v-model="inputHabit" />
    <button @click="insertHabit">登録</button>
    <h2>活動</h2>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      inputHabit: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserInfo"
    })
  },
  created: function() {
    this.$store.commit("setBgImg", "");
  },
  methods: {
    insertHabit: function() {
      axios
        .post("./api/insertHabit", {
          userId: this.user.id,
          habitName: this.inputHabit
        })
        .then(res => {
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            console.log("aaa");
          }
        });
    },
    habitPlus: function(habit_id) {
      axios
        .post("./api/add_habit_count", {
          user_id: this.$store.state.user.id,
          habit_id: habit_id
        })
        .then(res => {
          location.reload();
        });
    },
    habitDelete: function(habit_id) {
      axios
        .post("./api/delete_habit", {
          habit_id: habit_id
        })
        .then(res => {
          location.reload();
        });
    }
  }
};
</script>
