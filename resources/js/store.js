import Vue from "vue";
import Vuex from "vuex";
import userStore from "./store/user";
import eventStore from "./store/event";
import habitStore from "./store/habit";
import assetStore from "./store/asset";
import battleStore from "./store/battle";
import monsterStore from "./store/monster";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStore,
        habitStore,
        assetStore,
        eventStore,
        battleStore,
        monsterStore
    }
});
export default store;
