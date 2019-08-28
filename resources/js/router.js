import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/Home.vue";
import sidebar1 from "./parts/sidebar1.vue";

import title from "./events/title.vue";
import opening from "./events/opening.vue";

import testevent from "./events/testevent.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "title",
        components: {
            default: title,
            sidebar: sidebar1
        }
    },
    {
        path: "/home",
        name: "home",
        components: {
            default: home,
            sidebar: sidebar1
        }
    },
    {
        path: "/opening",
        name: "opening",
        components: {
            default: opening,
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
