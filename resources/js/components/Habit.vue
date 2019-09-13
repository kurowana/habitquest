<template>
  <div>
    <h2>活動の登録</h2>
    <input type="text" v-model="tempAddHabit" />
    <button @click="addHabit">登録</button>
    <h2>活動</h2>
    <table>
      <tbody>
        <tr>
          <th>活動名</th>
          <th>実行回数</th>
          <th>活動報告</th>
          <th>活動削除</th>
        </tr>
        <tr v-for="habit in getHasHabit" :key="habit.id">
          <td>{{habit.habit_name}}</td>
          <td>{{habit.count}}回</td>
          <td>
            <button @click="habitPlus(habit.id)">活動報告</button>
          </td>
          <td>
            <button @click="habitDelete(habit.id)">削除</button>
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
      tempAddHabit: ""
    };
  },
  computed: {
    /*
        has_habit:function(){
            return this.$store.state.user.habit
        }*/
    ...mapGetters([""])
  },
  created: function() {
    this.$store.commit("setBgImg", "");
  },
  methods: {
    addHabit: function() {
      axios
        .post("./api/add_habit", {
          user_id: this.$store.state.user.id,
          habit_name: this.tempAddHabit
        })
        .then(res => {
          location.reload();
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
