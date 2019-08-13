import Vue from "vue";
import router from "./router";
import store from "./store";

import AppBase from "./components/AppBase";

new Vue({
    el: "#app",
    store,
    router,
    components: {
        "app-base": AppBase
    }
});
