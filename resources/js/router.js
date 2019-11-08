import Vue from "vue";
import VueRouter from "vue-router";
import userStore from "./store/user";

import home from "./components/Home.vue";
import habit from "./components/Habit.vue";
import status from "./components/Status.vue";
import communication from "./components/Communication.vue";
import collection from "./components/Collection.vue";
import maker from "./components/Maker.vue";
import dungeon from "./components/Dungeon.vue";

import MainSidebar from "./parts/MainSidebar.vue";
import subSidebar from "./parts/SubSidebar.vue";

import title from "./events/title.vue";
import opening from "./events/opening.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "title",
        components: {
            default: title,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/home",
        name: "home",
        components: {
            default: home,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/habit",
        name: "habit",
        components: {
            default: habit,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/status",
        name: "status",
        components: {
            default: status,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/communication",
        name: "communication",
        components: {
            default: communication,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/collection",
        name: "collection",
        components: {
            default: collection,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/maker",
        name: "maker",
        components: {
            default: maker,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },
    {
        path: "/dungeon",
        name: "dungeon",
        components: {
            default: dungeon,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        }
    },

    //イベント系
    {
        path: "/opening",
        name: "opening",
        components: {
            default: opening,
            sidebar: MainSidebar,
            subSidebar: subSidebar
        },
        beforeEnter: (to, from, next) => {
            if (from.name === "title") {
                next();
            } else {
                next({ name: "home" });
            }
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
