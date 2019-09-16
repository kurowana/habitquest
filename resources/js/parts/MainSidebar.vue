<template>
  <div class="sidebar">
    <router-link :to="{name:'test'}" class="btn">ホーム</router-link>
    <router-link :to="{name:'habit'}" class="btn">習慣</router-link>
    <router-link :to="{name:'test'}" class="btn">ステータス</router-link>
    <router-link :to="{name:'test'}" class="btn">交流</router-link>
    <router-link :to="{name:'test'}" class="btn">探索</router-link>
    <div v-if="user.id">
      <div @click="logout" class="btn">ログアウト</div>
    </div>
    <div class="anime"></div>
    <div class="anime2"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUserInfo"
    })
  },
  methods: {
    logout: function() {
      axios.post("./logout", {}).then(res => {
        console.log(res);
        if (res.status === 419) {
          alert("セッションエラーです。再ログインしてください。");
          location.reload();
        } else if (res.status === 200) {
          location.reload();
        }
      });
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: url("../../../public/img/ui/sidebar.png") repeat;
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
.anime {
  width: 192px;
  height: 192px;
  padding: 0;
  background: url("../../../public/img/effect/test.png") 0 0 no-repeat;
  animation: sprite1 0.5s step-end infinite;
}
.anime2 {
  width: 192px;
  height: 192px;
  padding: 0;
  background: url("../../../public/img/effect/test2.png") 0 0 no-repeat;
  animation: sprite1 0.5s step-end infinite;
}
@keyframes sprite1 {
  1% {
    background-position: 0 0;
  }
  5% {
    background-position: -192px 0;
  }
  10% {
    background-position: -384px 0;
  }
  15% {
    background-position: -576px 0;
  }
  20% {
    background-position: -768px 0;
  }
  25% {
    background-position: 0 -192px;
  }
  30% {
    background-position: -192px -192px;
  }
  35% {
    background-position: -384px -192px;
  }
  40% {
    background-position: -576px -192px;
  }
  45% {
    background-position: -768px -192px;
  }
  50% {
    background-position: 0 -384px;
  }
  55% {
    background-position: -192px -384px;
  }
  60% {
    background-position: -384px -384px;
  }
  65% {
    background-position: -576px -384px;
  }
  70% {
    background-position: -768px -384px;
  }
  75% {
    background-position: 0 -576px;
  }
  80% {
    background-position: -192px -576px;
  }
  85% {
    background-position: -384px -576px;
  }
  90% {
    background-position: -576px -576px;
  }
  95% {
    background-position: -768px -576px;
  }
}
</style>