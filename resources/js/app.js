import Vue from "vue";
import router from "./router";
import store from "./store";

import VueTyper from "vue-typer";
Vue.use(VueTyper);

import { ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ja from "vee-validate/dist/locale/ja";

for (let rule in rules) {
    extend(rule, { ...rules[rule], message: ja.messages[rule] });
}
Vue.component("ValidationProvider", ValidationProvider);

import AppBase from "./components/AppBase";

Vue.directive("play", function(el, binding) {
    if (binding.value) {
        el.volume = 0.05;
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
