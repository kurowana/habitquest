const state = {
    isLogin: false,
    user: {
        id: "",
        name: "",
        lv: 0,
        point: 0,
        stage: 0,
        status: {
            str: 0,
            agi: 0,
            vit: 0,
            int: 0,
            dex: 0,
            luc: 0
        }
    },
    battleStatus: {
        hp: 0,
        mp: 0,
        atk: 0,
        matk: 0,
        def: 0,
        mdef: 0,
        spd: 0,
        hit: 0,
        flee: 0
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
    getLoginFlag: state => {
        return state.isLogin;
    },
    getUser: state => {
        return state.user;
    },
    getBattleStatus: state => {
        return state.battleStatus;
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
        state.user.lv = user.lv;
        state.user.point = user.point;
        state.user.stage = user.stage;
        state.user.status.str = user.status.str;
        state.user.status.agi = user.status.agi;
        state.user.status.vit = user.status.vit;
        state.user.status.int = user.status.int;
        state.user.status.dex = user.status.dex;
        state.user.status.luc = user.status.luc;
    },
    setUserInfo(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
    },
    setLv(state, lv) {
        state.user.lv = lv;
    },
    setPoint(state, point) {
        state.user.point = point;
    },
    setStage(state, stage) {
        state.user.stage = stage;
    },
    setStatus(state, status) {
        state.user.status.str = status.str;
        state.user.status.agi = status.agi;
        state.user.status.vit = status.vit;
        state.user.status.int = status.int;
        state.user.status.dex = status.dex;
        state.user.status.luc = status.luc;
    },
    setBattleStatus(state) {
        state.battleStatus.hp = state.user.status.vit * 20;
        state.battleStatus.mp = state.user.status.int * 15;
        state.battleStatus.atk = state.user.status.str * 7;
        state.battleStatus.matk = state.user.status.int * 7;
        state.battleStatus.def = state.user.status.vit * 7;
        state.battleStatus.mdef =
            state.user.status.vit * 2 + state.user.status.int * 5;
        state.battleStatus.spd = state.user.status.agi * 7;
        state.battleStatus.hit =
            state.user.status.dex * 6 + state.user.status.luc;
        state.battleStatus.flee =
            state.user.status.agi * 6 + state.user.status.luc;
    }
};

export default {
    state,
    getters,
    mutations
};
