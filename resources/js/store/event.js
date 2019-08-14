const state = {
    message: "storeメッセージ",
    charName: "",
    charImgL1: "npc001l.png",
    charImgL2: "npc006l.png",
    charImgC: "npc001_1.png",
    charImgR1: "npc001r.png",
    charImgR2: "npc007r.png"
};
const getters = {
    getMessage: state => {
        return state.message;
    },
    getCharName: state => {
        return state.charName;
    },
    getCharImgL: state => {
        return state.charImgL;
    },
    getCharImgC: state => {
        return state.charImgC;
    },
    getCharImgR: state => {
        return state.charImgR;
    }
};
const mutations = {
    setMessage(state, message) {
        state.message = message;
    },
    setCharName(state, name) {
        state.charName = name;
    },
    setCharImgL(state, imgPath) {
        state.charImgL = imgPath;
    },
    setCharImgC(state, imgPath) {
        state.charImgC = imgPath;
    },
    setCharImgR(state, imgPath) {
        state.charImgR = imgPath;
    }
};

export default {
    state,
    getters,
    mutations
};
