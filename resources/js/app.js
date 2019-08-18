import Vue from "vue";
import router from "./router";
import store from "./store";
import VueTyper from "vue-typer";

import AppBase from "./components/AppBase";

Vue.use(VueTyper);

new Vue({
    el: "#app",
    store,
    router,
    components: {
        "app-base": AppBase
    }
});
