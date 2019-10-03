<template>
  <div>
    {{myStatus}}
    <h1>採集</h1>
    <p>鉄：{{tempAssets.iron}}</p>
    <p>羽毛：{{tempAssets.feather}}</p>
    <p>木材：{{tempAssets.wood}}</p>
    <p>魔石：{{tempAssets.stone}}</p>
    <p>革：{{tempAssets.leather}}</p>
    <div>
      <button @click="startCollection('iron')">鉄の採集</button>
      <button @click="stopCollection('iron')">鉄の採集停止</button>
    </div>
    <div>
      <button @click="startCollection('feather')">羽毛の採集</button>
      <button @click="stopCollection('feather')">羽毛の採集停止</button>
    </div>
    <div>
      <button @click="startCollection('Wood')">木材の採集</button>
      <button @click="stopCollection('Wood')">木材の採集停止</button>
    </div>
    <div>
      <button @click="startCollection('Stone')">魔石の採集</button>
      <button @click="stopCollection('Stone')">魔石の採集停止</button>
    </div>
    <div>
      <button @click="startCollection('Leather')">革の採集</button>
      <button @click="stopCollection('Leather')">革の採集停止</button>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
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
      myStatus: "getStatus"
    })
  },
  mounted: function() {
    setInterval(() => {
      if (this.getIron) {
        console.log(this.myStatus.db.str);
        this.tempAssets.iron =
          Math.ceil(1 + this.myStatus.db.str / 10) + this.tempAssets.iron;
      }
      if (this.getFeather) {
        this.tempAssets.feather =
          Math.ceil(1 + this.myStatus.db.agi / 10) + this.tempAssets.feather;
      }
      if (this.getWood) {
        this.tempAssets.wood =
          Math.ceil(1 + this.myStatus.db.vit / 10) + this.tempAssets.wood;
      }
      if (this.getStone) {
        this.tempAssets.stone =
          Math.ceil(1 + this.myStatus.db.int / 10) + this.tempAssets.stone;
      }
      if (this.getLeather) {
        this.tempAssets.leather =
          Math.ceil(1 + this.myStatus.db.dex / 10) + this.tempAssets.leather;
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
            this.getwood = false;
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
        .catch(error => {});
    }
  }
};
</script>