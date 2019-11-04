<template>
  <div>
    <main-header></main-header>
    {{user}}
    <h1>採集</h1>
    <p>鉄：{{tempAssets.iron}}</p>
    <p>羽毛：{{tempAssets.feather}}</p>
    <p>木材：{{tempAssets.wood}}</p>
    <p>魔石：{{tempAssets.stone}}</p>
    <p>革：{{tempAssets.leather}}</p>
    <div>
      <button @click="startCollection('iron')">鉄の採集</button>
      <button @click="stopCollection('iron')">鉄の採集停止</button>
      {{getIron}}
    </div>
    <div>
      <button @click="startCollection('feather')">羽毛の採集</button>
      <button @click="stopCollection('feather')">羽毛の採集停止</button>
      {{getFeather}}
    </div>
    <div>
      <button @click="startCollection('wood')">木材の採集</button>
      <button @click="stopCollection('wood')">木材の採集停止</button>
      {{getWood}}
    </div>
    <div>
      <button @click="startCollection('stone')">魔石の採集</button>
      <button @click="stopCollection('stone')">魔石の採集停止</button>
      {{getStone}}
    </div>
    <div>
      <button @click="startCollection('leather')">革の採集</button>
      <button @click="stopCollection('leather')">革の採集停止</button>
      {{getLeather}}
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

import { mapGetters } from "vuex";
import baseMixin from "../mixins/baseMixin";
import eventMixin from "../mixins/eventMixin";
import mainHeader from "../parts/MainHeader";

export default {
  components: {
    "main-header": mainHeader
  },
  mixins: [baseMixin, eventMixin],
  data: function() {
    return {
      getAny: false,
      getIron: false,
      getFeather: false,
      getWood: false,
      getStone: false,
      getLeather: false,

      tempAssets: {
        iron: 0,
        feather: 0,
        wood: 0,
        stone: 0,
        leather: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  created: function() {
    this.changeBg("採集");
  },
  mounted: function() {
    setInterval(() => {
      if (this.getIron) {
        this.tempAssets.iron =
          Math.ceil(1 + this.user.str / 10) + this.tempAssets.iron;
      }
      if (this.getFeather) {
        this.tempAssets.feather =
          Math.ceil(1 + this.user.agi / 10) + this.tempAssets.feather;
      }
      if (this.getWood) {
        this.tempAssets.wood =
          Math.ceil(1 + this.user.vit / 10) + this.tempAssets.wood;
      }
      if (this.getStone) {
        this.tempAssets.stone =
          Math.ceil(1 + this.user.int / 10) + this.tempAssets.stone;
      }
      if (this.getLeather) {
        this.tempAssets.leather =
          Math.ceil(1 + this.user.dex / 10) + this.tempAssets.leather;
      }
    }, 1000);
  },
  methods: {
    startCollection: function(type) {
      switch (type) {
        case "iron":
          if (this.getAny === false) {
            this.getAny = true;
            this.getIron = true;
          }
          break;
        case "feather":
          if (this.getAny === false) {
            this.getAny = true;
            this.getFeather = true;
          }
          break;
        case "wood":
          if (this.getAny === false) {
            this.getAny = true;
            this.getWood = true;
          }
          break;
        case "stone":
          if (this.getAny === false) {
            this.getAny = true;
            this.getStone = true;
          }
          break;
        case "leather":
          if (this.getAny === false) {
            this.getAny = true;
            this.getLeather = true;
          }
          break;
      }
    },
    stopCollection: function(type) {
      switch (type) {
        case "iron":
          if (this.getIron === true) {
            this.getIron = false;
            this.getAny = false;
          }
          break;
        case "feather":
          if (this.getFeather === true) {
            this.getFeather = false;
            this.getAny = false;
          }
          break;
        case "wood":
          if (this.getWood === true) {
            this.getWood = false;
            this.getAny = false;
          }
          break;
        case "stone":
          if (this.getStone === true) {
            this.getStone = false;
            this.getAny = false;
          }
          break;
        case "leather":
          if (this.getLeather === true) {
            this.getLeather = false;
            this.getAny = false;
          }
          break;
      }
      this.insertAssets(type);
    },
    insertAssets: function(type) {
      axios
        .post("./api/insertAssets", {
          type: type,
          assets: this.tempAssets[type]
        })
        .then(res => {})
        .catch(error => {
          this.apiDefaultError(error);
        });
    }
  }
};
</script>