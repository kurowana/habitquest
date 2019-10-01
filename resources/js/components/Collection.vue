<template>
  <div>
    <h1>採集</h1>
    <p>鉄：{{tempIron}}</p>
    <p>羽毛：{{tempFeather}}</p>
    <p>木材：{{tempWood}}</p>
    <p>魔石：{{tempStone}}</p>
    <p>革：{{tempLeather}}</p>
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
export default {
  data: function() {
    return {
      getAny: false,
      getIron: false,
      getFeather: false,
      getWood: false,
      getStone: false,
      getLeather: false,

      tempIron: 0,
      tempFeather: 0,
      tempWood: 0,
      tempStone: 0,
      tempLeather: 0
    };
  },
  computed: {},
  mounted: function() {
    setInterval(() => {
      if (this.getIron) {
        this.tempIron = 1 + this.tempIron;
      }
      if (this.getFeather) {
        this.tempFeather = 1 + this.tempFeather;
      }
      if (this.getWood) {
        this.tempWood = 1 + this.tempWood;
      }
      if (this.getStone) {
        this.tempStone = 1 + this.tempStone;
      }
      if (this.getLeather) {
        this.tempLeather = 1 + this.tempLeather;
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
    }
  }
};
</script>