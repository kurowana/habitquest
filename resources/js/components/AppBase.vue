<template>
  <div class="wrapper">
    <div class="content">
      <router-view name="subSidebar"></router-view>
      <router-view class="game-view" :class="bgImg"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
    <div>
      <label>name</label>
      <input type="hidden" name="_token" :value="csrf" />
      <input type="text" v-model="loginName" />
      <label>password</label>
      <input type="text" v-model="loginPassword" />
      <button @click="registTest">登録</button>
    </div>
    {{getSound.isPlay}}
    <audio id="bgm" v-play="getSound.isPlay" :src="getSound.bgm"></audio>
    <button @click="playBgm">再生</button>
    <button @click="pauseBgm">停止</button>
    <button @click="changeBgm">変更</button>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters } from "vuex";

import baseMixin from "../mixins/baseMixin";

export default {
  components: {},
  mixins: [baseMixin],
  data: function() {
    return {
      loginName: "",
      loginPassword: "",

      isPlay: false,

      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  props: {
    userId: { type: String },
    userName: { type: String }
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      message: "getMessage",
      getSound: "getSound"
    }),

    bgImg: function() {
      return this.$store.state.eventStore.bgImg;
    }
  },
  watch: {
    //イベント途中でページ移動した場合はシーンカウントをリセット
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.$store.commit("setSceneCount", 0);
      }
    }
  },
  created: function() {
    if (this.userId === "" && this.userName === "") {
      this.$store.commit("setLoginFlag", false);
      this.$store.commit("setUserInfo", { id: "", name: "" });
    } else {
      this.$store.commit("setLoginFlag", true);
      this.$store.commit("setUserInfo", {
        id: this.userId,
        name: this.userName
      });
      this.$router.push({ name: "home" });
    }
    this.initPage();
  },
  mounted: function() {},
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
          this.status = res.data;
          this.$store.commit("setPoint", res.data.point);
          this.$store.commit("setStatus", {
            str: res.data.str,
            agi: res.data.agi,
            vit: res.data.vit,
            int: res.data.int,
            dex: res.data.dex,
            luc: res.data.luc
          });
          this.stage = res.data.clearedStage;
          this.$store.commit("setBattleStatus");
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    registTest: function() {
      axios
        .post("./register", {
          name: this.loginName,
          password: this.loginPassword,
          password_confirmation: this.loginPassword
        })
        .then(res => {
          console.log("post");
        })
        .catch(error => {
          this.apiDefaultError(error);
        });
    },
    playBgm: function() {
      this.$store.commit("setSoundFlag", true);
    },
    pauseBgm: function() {
      this.$store.commit("setSoundFlag", false);
    },
    changeBgm: function() {
      this.$store.commit("setBgm", {
        bgm: "/bgm/bgm_maoudamashii_healing08.mp3",
        volume: 0.1
      });
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  width: 1200px;
}

.game-view {
  width: 800px;
  height: 600px;
  position: relative;
  background: #000000;
  color: #ffffff;
}

.home {
  background: url("../../../public/img/bg/yadoya_room.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.town {
  background: url("../../../public/img/bg/Europe_House.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.itemshop {
  background: url("../../../public/img/bg/item_shop.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.weaponshop {
  background: url("../../../public/img/bg/bukiya.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.bar {
  background: url("../../../public/img/bg/bar.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.shinden {
  background: url("../../../public/img/bg/shinden.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.tree {
  background: url("../../../public/img/bg/old_tree.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.dungeon {
  background: url("../../../public/img/bg/tika_ko.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.dungeon {
  background: url("../../../public/img/bg/tika_ko.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}
.stream {
  background: url("../../../public/img/bg/keiryuu.jpg");
  background-size: 800px auto;
  animation: bgFadeIn 1s ease 0s 1 normal;
}

@keyframes bgFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
