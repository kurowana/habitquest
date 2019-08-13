import Vue from "vue";
import Vuex from "vuex";
import userStore from "./store/user";
import eventStore from "./store/event";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStore,
        eventStore
    }
});
export default store;
