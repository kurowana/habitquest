const state = {
    message: "storeメッセージ",
    charName: "",
    charImgL1: "",
    charImgL2: "",
    charImgC: "",
    charImgR1: "",
    charImgR2: "",
    bgImg: "shinden01.jpg",

    //立ち絵変更用のキャラデータオブジェクト
    charaData: {
        char1: "./img/npc/"
    }
};
const getters = {
    getMessage: state => {
        return state.message;
    },
    getCharName: state => {
        return state.charName;
    },
    getCharImgL1: state => {
        return state.charImgL1;
    },
    getCharImgL2: state => {
        return state.charImgL2;
    },
    getCharImgC: state => {
        return state.charImgC;
    },
    getCharImgR1: state => {
        return state.charImgR1;
    },
    getCharImgR2: state => {
        return state.charImgR2;
    }
};
const mutations = {
    setMessage(state, message) {
        state.message = message;
    },
    setCharName(state, name) {
        state.charName = name;
    },
    setCharImgL1(state, imgPath) {
        if (imgPath === "") {
            state.charImgL1 = "";
        } else {
            state.charImgL1 = "./img/npc/" + imgPath;
        }
    },
    setCharImgL2(state, imgPath) {
        if (imgPath === "") {
            state.charImgL2 = "";
        } else {
            state.charImgL2 = "./img/npc/" + imgPath;
        }
    },
    setCharImgC(state, imgPath) {
        if (imgPath === "") {
            state.charImgC = "";
        } else {
            state.charImgC = "./img/npc/" + imgPath;
        }
    },
    setCharImgR1(state, imgPath) {
        if (imgPath === "") {
            state.charImgR1 = "";
        } else {
            state.charImgR1 = "./img/npc/" + imgPath;
        }
    },
    setCharImgR2(state, imgPath) {
        if (imgPath === "") {
            state.charImgR2 = "";
        } else {
            state.charImgR2 = "./img/npc/" + imgPath;
        }
    }
};

export default {
    state,
    getters,
    mutations
};
