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
    <p>レベル：{{status.lv}}</p>
    <p>累計経験値：{{status.exp}}</p>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

export default {
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      inputHabit: "",
      status: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      habits: "getMyHabits"
    })
  },
  created: function() {
    this.changeBg("ホーム");
    this.initPage();
  },
  methods: {
    initPage: function() {
      this.getMyHabits();
      this.getMyStatus();
    },
    getMyHabits: function() {
      axios
        .post("./api/getMyHabits", {
          userId: this.user.id
        })
        .then(res => {
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.$store.commit("setMyHabits", res.data);
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    getMyStatus: function() {
      axios
        .post("./api/getMyStatus", {
          userId: this.user.id
        })
        .then(res => {
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.status = res.data;
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    insertHabit: function() {
      axios
        .post("./api/insertHabit", {
          userId: this.user.id,
          habitName: this.inputHabit
        })
        .then(res => {
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.initPage();
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    addHabitCount: function(habitId) {
      axios
        .post("./api/addHabitCount", {
          userId: this.user.id,
          habitId: habitId
        })
        .then(res => {
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.initPage();
            console.log(res.data);
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    deleteHabit: function(habitId) {
      axios
        .post("./api/deleteHabit", {
          userId: this.user.id,
          habitId: habitId
        })
        .then(res => {
          console.log(res.status);
          if (res.status === 419) {
            alert("セッションエラー");
            location.reload();
          } else {
            this.initPage();
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    }
  }
};
</script>
