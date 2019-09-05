import Vue from "vue";
import router from "./router";
import store from "./store";
import VueTyper from "vue-typer";

import AppBase from "./components/AppBase";

Vue.use(VueTyper);

Vue.directive("play", function(el, binding) {
    if (binding.value) {
        el.volume = 0.1;
        el.play();
    } else {
        el.pause();
    }
});

new Vue({
    el: "#app",
    store,
    router,
    components: {
        "app-base": AppBase
    }
});
