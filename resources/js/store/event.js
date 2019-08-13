const state = {
    message: "storeメッセージ",
    charImgL: "",
    charImgC: "",
    charImgR: ""
};
const getters = {
    getMessage: state => {
        return state.message;
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
