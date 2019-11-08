<template>
  <div class="sidebar">
    <router-link :to="{name:'home'}" class="btn">ホーム</router-link>
    <router-link :to="{name:'habit'}" class="btn">習慣</router-link>
    <router-link :to="{name:'status'}" class="btn">ステータス</router-link>
    <router-link :to="{name:'communication'}" class="btn">交流</router-link>
    <router-link :to="{name:'collection'}" class="btn">採集</router-link>
    <router-link :to="{name:'maker'}" class="btn">制作</router-link>
    <router-link :to="{name:'dungeon'}" class="btn">ダンジョン</router-link>
    <div v-if="user.id">
      <button @click="logout" class="btn">ログアウト</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    logout: function() {
      axios
        .post("./logout", {})
        .then(res => {
          console.log(res);
          if (res.status === 419) {
            alert("セッションエラーです。再ログインしてください。");
            location.reload();
          } else if (res.status === 200) {
            location.reload();
          }
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: url("../../../public/img/ui/sidebar.png") repeat;
  z-index: 100;
}

.btn {
  width: 180px;
  height: 40px;
  margin: 10px;
  padding: 5px;
  background: linear-gradient(#333, #666);
  border: double 2px gold;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}
</style>