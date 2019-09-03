import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/Home.vue";
import habit from "./components/Habit.vue";

import MainSidebar from "./parts/MainSidebar.vue";

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
            sidebar: MainSidebar
        }
    },
    {
        path: "/home",
        name: "home",
        components: {
            default: home,
            sidebar: MainSidebar
        }
    },
    {
        path: "/habit",
        name: "habit",
        components: {
            default: habit,
            sidebar: MainSidebar
        }
    },
    {
        path: "/opening",
        name: "opening",
        components: {
            default: opening,
            sidebar: MainSidebar
        }
    },
    {
        path: "/test",
        name: "test",
        components: {
            default: testevent,
            sidebar: MainSidebar
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
