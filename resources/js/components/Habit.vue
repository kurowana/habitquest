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
          <th>最終実施日</th>
          <th>実行</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="habit in habits" :key="habit.id">
          <td>{{habit.habit_name}}</td>
          <td>{{habit.count}}</td>
          <td>{{habit.last_date}}</td>
          <td>
            <button @click="addHabitCount(habit.id)">実行</button>
          </td>
          <td>
            <button @click="deleteHabit(habit.id)">削除</button>
          </td>
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
    this.initPage();
  },
  methods: {
    initPage: function() {
      this.getMyHabits();
    },
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
            this.initPage();
          }
        });
    },
    addHabitCount: function(habitId) {
      axios
        .post("./api/addHabitCount", {
          habitId: habitId
        })
        .then(res => {
          this.initPage();
        });
    },
    deleteHabit: function(habitId) {
      axios
        .post("./api/deleteHabit", {
          habitId: habitId
        })
        .then(res => {
          location.reload();
        });
    }
  }
};
</script>
