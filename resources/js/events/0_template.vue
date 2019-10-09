<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";

import message from "../parts/Message";
import charImg from "../parts/charImg";

import modal from "../parts/modal";

export default {
  components: {
    message: message,
    "char-img": charImg,
    modal: modal
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      isSoundCheckModal: false,
      isRegistModal: false,
      isSelectImgModal: false,
      isConfirmImgModal: false,
      isStatusModal: false,
      isConfirmModal: false,

      isTestModal: false,

      registState: 1,

      name: "",
      password: "",
      selectedImg: "",

      point: 5,

      str: 10,
      agi: 10,
      vit: 10,
      int: 10,
      dex: 10,
      luc: 10,

      eventObj: [
        function(vm) {
          vm.setEvent({ type: "msg", content: "メッセージのテスト" });
        },
        function(vm) {
          vm.setEvent({ type: "msg", content: "メッセージのテスト2" });
        },
        function(vm) {
          vm.setEvent({
            type: "select",
            content: {
              msg: "どちらを選ぶ？",
              choice: [
                { text: "選択肢1", event: function() {} },
                { text: "選択肢2", event: function() {} }
              ]
            }
          });
        },
        function(vm) {
          vm.setEvent({
            type: "window",
            content: { window: "isTestModal", msg: "メッセージ" }
          });
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      userImg: "getUserImg",
      sceneCount: "getSceneCount",
      NextFlag: "getNextFlag"
    })
  },
  created: function() {
    this.$store.commit("setBgImg", "");
    this.$store.commit("setCharImgL1", "npc001l.png");
    this.$store.commit("setCharImgL2", "npc006l.png");
    this.$store.commit("setCharImgC", "npc001_1.png");
    this.$store.commit("setCharImgR1", "npc001r.png");
    this.$store.commit("setCharImgR2", "npc007r.png");

    this.$store.commit("setMessage", "これはオープニングです");
  },
  methods: {}
};
</script>

<style scoped>
.soundCheckModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.registerModal {
  background: linear-gradient(90deg, #000000, #666666);
  width: 720px;
  height: 380px;
  top: 40px;
  left: 40px;
  overflow: auto;
  color: white;
}
.img-container {
  display: flex;
  padding-bottom: 15px;
  flex-wrap: wrap;
}
.img-card img {
  width: 100px;
  border: 2px double gold;
  border-radius: 10px;
  margin: 15px 0px 0px 15px;
}

.confirm-content {
  display: flex;
}

.img-stand {
  width: 240px;
  height: 320px;
}
</style>