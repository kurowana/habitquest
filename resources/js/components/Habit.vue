<template>
  <div>
    <h2>活動の登録</h2>
    <input type="text" v-model="inputHabit" />
    <button @click="insertHabit">登録</button>
    <h2>活動</h2>
    <table>
      <thead>
        <tr>
          <th>習慣</th>
          <th>実効回数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="habit in habits" :key="habit.id">
          <td>{{habit.habit_name}}</td>
          <td>{{habit.count}}</td>
        </tr>
      </tbody>
    </table>
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
      user: "getUserInfo",
      habits: "getMyHabits"
    })
  },
  created: function() {
    this.$store.commit("setBgImg", "");
    this.getMyHabits();
  },
  methods: {
    getMyHabits: function() {
      axios
        .post("./api/getMyHabits", {
          userId: this.user.id
        })
        .then(res => {
          if (res.state === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.$store.commit("setMyHabits", res.data);
          }
        });
    },
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
            console.log("OK");
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
