const state = {
    isLogin: false,
    user: {
        id: "",
        name: "",
        point: 0,
        status: {
            str: 0,
            agi: 0,
            vit: 0,
            int: 0,
            dex: 0,
            luc: 0
        }
    },

    userImg: {
        p001: {
            face: "img/p_face/f001.png",
            stand: "img/p_stand/p001.png"
        },
        p002: {
            face: "img/p_face/f002.png",
            stand: "img/p_stand/p002.png"
        },
        p003: {
            face: "img/p_face/f003.png",
            stand: "img/p_stand/p003.png"
        },
        p004: {
            face: "img/p_face/f004.png",
            stand: "img/p_stand/p004.png"
        },
        p005: {
            face: "img/p_face/f005.png",
            stand: "img/p_stand/p005.png"
        },
        p006: {
            face: "img/p_face/f006.png",
            stand: "img/p_stand/p006.png"
        },
        p007: {
            face: "img/p_face/f007.png",
            stand: "img/p_stand/p007.png"
        },
        p008: {
            face: "img/p_face/f008.png",
            stand: "img/p_stand/p008.png"
        },
        p009: {
            face: "img/p_face/f009.png",
            stand: "img/p_stand/p009.png"
        },
        p010: {
            face: "img/p_face/f010.png",
            stand: "img/p_stand/p010.png"
        },
        p011: {
            face: "img/p_face/f011.png",
            stand: "img/p_stand/p011.png"
        },
        p012: {
            face: "img/p_face/f012.png",
            stand: "img/p_stand/p012.png"
        },
        p013: {
            face: "img/p_face/f013.png",
            stand: "img/p_stand/p013.png"
        },
        p014: {
            face: "img/p_face/f014.png",
            stand: "img/p_stand/p014.png"
        },
        p015: {
            face: "img/p_face/f015.png",
            stand: "img/p_stand/p015.png"
        },
        p016: {
            face: "img/p_face/f016.png",
            stand: "img/p_stand/p016.png"
        },
        p017: {
            face: "img/p_face/f017.png",
            stand: "img/p_stand/p017.png"
        },
        p018: {
            face: "img/p_face/f018.png",
            stand: "img/p_stand/p018.png"
        },
        p019: {
            face: "img/p_face/f019.png",
            stand: "img/p_stand/p019.png"
        },
        p020: {
            face: "img/p_face/f020.png",
            stand: "img/p_stand/p020.png"
        },
        p021: {
            face: "img/p_face/f021.png",
            stand: "img/p_stand/p021.png"
        },
        p022: {
            face: "img/p_face/f022.png",
            stand: "img/p_stand/p022.png"
        },
        p023: {
            face: "img/p_face/f023.png",
            stand: "img/p_stand/p023.png"
        },
        p024: {
            face: "img/p_face/f024.png",
            stand: "img/p_stand/p024.png"
        },
        p025: {
            face: "img/p_face/f025.png",
            stand: "img/p_stand/p025.png"
        },
        p026: {
            face: "img/p_face/f026.png",
            stand: "img/p_stand/p026.png"
        },
        p027: {
            face: "img/p_face/f027.png",
            stand: "img/p_stand/p027.png"
        },
        p028: {
            face: "img/p_face/f028.png",
            stand: "img/p_stand/p028.png"
        },
        p029: {
            face: "img/p_face/f029.png",
            stand: "img/p_stand/p029.png"
        },
        p030: {
            face: "img/p_face/f030.png",
            stand: "img/p_stand/p030.png"
        }
    }
};
const getters = {
    getUser: state => {
        return state.user;
    },
    getUserImg: state => {
        return state.userImg;
    }
};
const mutations = {
    setLoginFlag(state, boolean) {
        state.isLogin = boolean;
    },
    setUser(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
        state.user.point = user.point;
        state.user.status.str = user.status.str;
        state.user.status.agi = user.status.agi;
        state.user.status.vit = user.status.vit;
        state.user.status.int = user.status.int;
        state.user.status.dex = user.status.dex;
        state.user.status.luc = user.status.luc;
    },
    setPoint(state, point) {
        state.point = point;
    },
    setStatus(state, status) {
        state.baseStatus = Object.assign({}, status);

        const dST = state.status.db;
        const bST = state.status.battle;

        bST.maxhp = dST.vit * 10;
        bST.hp = bST.maxhp;
        bST.maxmp = dST.int * 5;
        bST.mp = bST.maxmp;
        bST.atk = dST.str * 2;
        bST.matk = dST.int * 2;
        bST.def = dST.vit * 2;
        bST.mdef = dST.int * 2;
        bST.spd = dST.agi;
        bST.hit = dST.dex + dST.luc;
        bST.flee = dST.agi + dST.luc;
    }
    // incBaseSt(state, type) {
    //     if (state.point.temp > 0) {
    //         state.status.temp[type]++;
    //         state.point.temp--;
    //     }
    // },
    // decBaseSt(state, type) {
    //     if (state.point.temp < state.point.db) {
    //         if (state.status.temp[type] > state.status.db[type]) {
    //             state.status.temp[type]--;
    //             state.point.temp++;
    //         }
    //     }
    // }
};

export default {
    state,
    getters,
    mutations
};
