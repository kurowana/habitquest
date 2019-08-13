<template>
  <div>
    <h2>キャラクター作成</h2>
    {{userId}}
    <div v-for="(value,key) in imgList" :key="key">
      <input type="radio" name="charImg" @change="charImgChange(key)" :value="key" />
      {{value}}
    </div>
    <div v-if="selectedImg.length>0">
      <img :src="selectedImg" />
    </div>
    <div>
      <p>振り分け可能ポイント：{{statusPoint}}</p>
      <div>
        STR:{{v_currentStr}}
        <button @click="stPlus('str')">＋</button>
        <button @click="stMinus('str')">－</button>
      </div>
      <div>
        VIT:{{v_currentVit}}
        <button @click="stPlus('vit')">＋</button>
        <button @click="stMinus('vit')">－</button>
      </div>
      <div>
        INT:{{v_currentInt}}
        <button @click="stPlus('int')">＋</button>
        <button @click="stMinus('int')">－</button>
      </div>
      <div>
        AGI:{{v_currentAgi}}
        <button @click="stPlus('agi')">＋</button>
        <button @click="stMinus('agi')">－</button>
      </div>
      <div>
        DEX:{{v_currentDex}}
        <button @click="stPlus('dex')">＋</button>
        <button @click="stMinus('dex')">－</button>
      </div>
      <div>
        LUC:{{v_currentLuc}}
        <button @click="stPlus('luc')">＋</button>
        <button @click="stMinus('luc')">－</button>
      </div>
    </div>
    <div @click="createChar">
      <button>キャラクター作成</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      imgList: {
        char1: "男性1",
        char2: "女性1"
      },
      selectedImg: "",
      statusPoint: 5,
      currentStr: 10,
      currentVit: 10,
      currentInt: 10,
      currentAgi: 10,
      currentDex: 10,
      currentLuc: 10
    };
  },
  props: {
    userId: ""
  },
  computed: {
    v_statusPoint: function() {
      return this.statusPoint;
    },
    v_currentStr: function() {
      return this.currentStr;
    },
    v_currentVit: function() {
      return this.currentVit;
    },
    v_currentInt: function() {
      return this.currentInt;
    },
    v_currentAgi: function() {
      return this.currentAgi;
    },
    v_currentDex: function() {
      return this.currentDex;
    },
    v_currentLuc: function() {
      return this.currentLuc;
    }
  },
  methods: {
    charImgChange: function(imgname) {
      this.selectedImg = "img/" + imgname + ".png";
    },
    stPlus: function(st) {
      if (this.statusPoint > 0) {
        if (st == "str") {
          this.currentStr++;
        }
        if (st == "vit") {
          this.currentVit++;
        }
        if (st == "int") {
          this.currentInt++;
        }
        if (st == "agi") {
          this.currentAgi++;
        }
        if (st == "dex") {
          this.currentDex++;
        }
        if (st == "luc") {
          this.currentLuc++;
        }
        this.statusPoint--;
      }
    },
    stMinus: function(st) {
      if (this.statusPoint < 5) {
        if (st == "str" && this.currentStr > 10) {
          this.currentStr--;
          this.statusPoint++;
        }
        if (st == "vit" && this.currentVit > 10) {
          this.currentVit--;
          this.statusPoint++;
        }
        if (st == "int" && this.currentInt > 10) {
          this.currentInt--;
          this.statusPoint++;
        }
        if (st == "agi" && this.currentAgi > 10) {
          this.currentAgi--;
          this.statusPoint++;
        }
        if (st == "dex" && this.currentDex > 10) {
          this.currentDex--;
          this.statusPoin;
        }
        if (st == "luc" && this.currentLuc > 10) {
          this.currentLuc--;
          this.statusPoint++;
        }
      }
    },
    createChar: function() {
      if (this.statusPoint > 0) {
        alert("振り分けポイントが残っています");
      } else {
        axios
          .post("./api/create_char", {
            user_id: this.userId,
            str: this.currentStr,
            vit: this.currentVit,
            int: this.currentInt,
            agi: this.currentAgi,
            dex: this.currentDex,
            luc: this.currentLuc,
            img: this.selectedImg
          })
          .then(res => {
            location.reload();
          });
      }
    }
  }
};
</script>
