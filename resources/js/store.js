import Vue from "vue";
import Vuex from "vuex";
import userStore from "./store/user";
import eventStore from "./store/event";
import habitStore from "./store/habit";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStore,
        habitStore,
        eventStore
    }
});
export default store;
