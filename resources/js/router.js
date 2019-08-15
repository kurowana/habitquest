import Vue from "vue";
import VueRouter from "vue-router";

import sidebar1 from "./parts/sidebar1.vue";

import opning from "./events/opening.vue";

import testevent from "./events/testevent.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        components: {
            default: opning,
            sidebar: sidebar1
        }
    },
    {
        path: "/test",
        name: "test",
        components: {
            default: testevent,
            sidebar: sidebar1
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
