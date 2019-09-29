import Vue from "vue";
import VueRouter from "vue-router";
import userStore from "./store/user";

import home from "./components/Home.vue";
import habit from "./components/Habit.vue";
import status from "./components/Status.vue";
import dungeon from "./components/Dungeon.vue";

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
        path: "/status",
        name: "status",
        components: {
            default: status,
            sidebar: MainSidebar
        }
    },
    {
        path: "/dungeon",
        name: "dungeon",
        components: {
            default: dungeon,
            sidebar: MainSidebar
        }
    },

    //イベント系
    {
        path: "/opening",
        name: "opening",
        components: {
            default: opening,
            sidebar: MainSidebar
        },
        beforeEnter: (to, from, next) => {
            if (from.name === "title") {
                next();
            } else {
                next({ name: "home" });
            }
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
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name !== "title") {
        if (userStore.state.isLogin === false && to.name !== "opening") {
            next({ name: "title" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
