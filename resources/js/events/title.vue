<template>
  <div>
    <modal v-if="isShowLoginModal" class="loginForm">
      <div class="form-item">
        <ValidationProvider name="ユーザー名" rules="required" v-slot="{errors}">
          <label for="name">ユーザー名</label>
          <input v-model="loginName" type="text" name="name" />
          <div>{{errors[0]}}</div>
        </ValidationProvider>
      </div>
      <div class="form-item">
        <ValidationProvider name="パスワード" rules="required" v-slot="{errors}">
          <label for="password">パスワード</label>
          <input v-model="loginPassword" type="password" name="password" />
          <div>{{errors[0]}}</div>
        </ValidationProvider>
      </div>
      <div class="form-button">
        <button @click="sentLoginData">ログインする</button>
        <button @click="isShowLoginModal=false">戻る</button>
      </div>
    </modal>
    <h1 class="title">Habit Quest</h1>
    <div class="title-window">
      <router-link :to="{name:'opening'}">
        <button class="title-item">はじめから</button>
      </router-link>
      <button class="title-item" @click="isShowLoginModal=true">つづきから</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import modal from "../parts/modal";

export default {
  components: {
    modal: modal
  },
  data: function() {
    return {
      loginName: "",
      loginPassword: "",
      isShowLoginModal: false
    };
  },
  methods: {
    sentLoginData: function() {
      axios
        .post("./login", {
          name: this.loginName,
          password: this.loginPassword
        })
        .then(res => {
          location.reload();
        });
    }
  }
};
</script>

<style scoped>
.title {
  margin: 120px 0;
  color: white;
  text-shadow: rgb(255, 199, 0) 4px 0px 0px,
    rgb(255, 199, 0) 3.87565px 0.989616px 0px,
    rgb(255, 199, 0) 3.51033px 1.9177px 0px,
    rgb(255, 199, 0) 2.92676px 2.72656px 0px,
    rgb(255, 199, 0) 2.16121px 3.36588px 0px,
    rgb(255, 199, 0) 1.26129px 3.79594px 0px,
    rgb(255, 199, 0) 0.282949px 3.98998px 0px,
    rgb(255, 199, 0) -0.712984px 3.93594px 0px,
    rgb(255, 199, 0) -1.66459px 3.63719px 0px,
    rgb(255, 199, 0) -2.51269px 3.11229px 0px,
    rgb(255, 199, 0) -3.20457px 2.39389px 0px,
    rgb(255, 199, 0) -3.69721px 1.52664px 0px,
    rgb(255, 199, 0) -3.95997px 0.56448px 0px,
    rgb(255, 199, 0) -3.97652px -0.432781px 0px,
    rgb(255, 199, 0) -3.74583px -1.40313px 0px,
    rgb(255, 199, 0) -3.28224px -2.28625px 0px,
    rgb(255, 199, 0) -2.61457px -3.02721px 0px,
    rgb(255, 199, 0) -1.78435px -3.57996px 0px,
    rgb(255, 199, 0) -0.843183px -3.91012px 0px,
    rgb(255, 199, 0) 0.150409px -3.99717px 0px,
    rgb(255, 199, 0) 1.13465px -3.8357px 0px,
    rgb(255, 199, 0) 2.04834px -3.43574px 0px,
    rgb(255, 199, 0) 2.83468px -2.82216px 0px,
    rgb(255, 199, 0) 3.44477px -2.03312px 0px,
    rgb(255, 199, 0) 3.84068px -1.11766px 0px,
    rgb(255, 199, 0) 3.9978px -0.132717px 0px;
  font-size: 6em;
  text-align: center;
}
.title-window {
  width: 300px;
  margin: 0 auto;
}

.title-item {
  width: 300px;
  height: 45px;
  padding-top: 4px;
  margin-bottom: 20px;
  background: linear-gradient(0.45deg, #666666, #000000);
  border: double gold 2px;
  border-radius: 10px;
  color: white;
  font-size: 1.5em;
  text-align: center;
}

.loginForm {
  width: 400px;
  height: 200px;
  top: 300px;
  left: 200px;
  border: 2px double gold;
  border-radius: 30px;
  box-shadow: 5px 5px 4px 4px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #000000, #666666);
  color: white;
}

.form-item {
  margin: 20px 0;
  text-align: center;
}

.form-button {
  margin: 30px 0;
  text-align: center;
}
</style>