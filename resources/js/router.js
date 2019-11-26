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

import MainHeader from "./parts/MainHeader.vue";

import MainSidebar from "./parts/MainSidebar.vue";
import SubSidebar from "./parts/SubSidebar.vue";

import title from "./events/title.vue";
import opening from "./events/opening.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "title",
        components: {
            default: title,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/home",
        name: "home",
        components: {
            default: home,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/habit",
        name: "habit",
        components: {
            default: habit,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/status",
        name: "status",
        components: {
            default: status,
            // header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/communication",
        name: "communication",
        components: {
            default: communication,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/collection",
        name: "collection",
        components: {
            default: collection,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/maker",
        name: "maker",
        components: {
            default: maker,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },
    {
        path: "/dungeon",
        name: "dungeon",
        components: {
            default: dungeon,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
        }
    },

    //イベント系
    {
        path: "/opening",
        name: "opening",
        components: {
            default: opening,
            header: MainHeader,
            sidebar: MainSidebar,
            subSidebar: SubSidebar
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
