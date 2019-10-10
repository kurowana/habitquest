const state = {
    eventObj: "eventObj",
    sceneCount: 0,
    isNext: false,
    eventType: "",
    message: "storeメッセージ",
    choice1: "",
    choice2: "",
    charName: "test",
    charImgL1: "",
    charImgL2: "",
    charImgC: "",
    charImgR1: "",
    charImgR2: "",
    bgImg: "tree",

    sound: {
        isPlay: false,
        bgm: "/bgm/bgm_maoudamashii_fantasy13.mp3",
        volume: 0.1
    },

    //立ち絵変更用のキャラデータオブジェクト
    npc: {
        // sphere
        スフィア: {
            name: "スフィア",
            imgR: "./img/npc/npc001r",
            imgL: "./img/npc/npc001l"
        },
        // eir
        エイル: {
            name: "エイル",
            imgR: "./img/npc/npc002r",
            imgL: "./img/npc/npc002l"
        },
        // vulcan
        ヴァルカン: {
            name: "ヴァルカン",
            imgR: "./img/npc/npc003r",
            imgL: "./img/npc/npc003l"
        },
        // fried
        フリート: {
            name: "フリート",
            imgR: "./img/npc/npc004r",
            imgL: "./img/npc/npc004l"
        },
        // isaac
        アイザック: {
            name: "アイザック",
            imgR: "./img/npc/npc005r",
            imgL: "./img/npc/npc005l"
        },
        // arthur
        アーサー: {
            name: "アーサー",
            imgR: "./img/npc/npc006r",
            imgL: "./img/npc/npc006l"
        },
        // zenobia
        ゼノビア: {
            name: "ゼノビア",
            imgR: "./img/npc/npc007r",
            imgL: "./img/npc/npc007l"
        },
        // hecatia
        ヘカテア: {
            name: "ヘカテア",
            imgR: "./img/npc/npc008r",
            imgL: "./img/npc/npc008l"
        },
        // micha
        ミカ: {
            name: "ミカ",
            imgR: "./img/npc/npc009r",
            imgL: "./img/npc/npc009l"
        },
        // luci
        ルシ: {
            name: "ルシ",
            imgR: "./img/npc/npc010r",
            imgL: "./img/npc/npc010l"
        },
        // gerbera
        ガーベラ: {
            name: "ガーベラ",
            imgR: "./img/npc/npc011r",
            imgL: "./img/npc/npc011l"
        },
        // cattleya
        カトレア: {
            name: "カトレア",
            imgR: "./img/npc/npc012r",
            imgL: "./img/npc/npc012l"
        },
        // yanagi
        ヤナギ: {
            name: "ヤナギ",
            imgR: "./img/npc/npc013r",
            imgL: "./img/npc/npc013l"
        },
        // al
        アル: {
            name: "アル",
            imgR: "./img/npc/npc014r",
            imgL: "./img/npc/npc014l"
        },
        // zelos
        ゼーロス: {
            name: "ゼーロス",
            imgR: "./img/npc/npc015r",
            imgL: "./img/npc/npc015l"
        },
        // kratos
        クラトス: {
            name: "クラトス",
            imgR: "./img/npc/npc016r",
            imgL: "./img/npc/npc016l"
        },
        // sibyl
        シビュラ: {
            name: "シビュラ",
            imgR: "./img/npc/npc017r",
            imgL: "./img/npc/npc017l"
        },
        // wodan
        ウォーダン: {
            name: "ウォーダン",
            imgR: "./img/npc/npc018r",
            imgL: "./img/npc/npc018l"
        },
        // ullr
        ウル: {
            name: "ウル",
            imgR: "./img/npc/npc019r",
            imgL: "./img/npc/npc019l"
        },
        // ask
        アスク: {
            name: "アスク",
            imgR: "./img/npc/npc020r",
            imgL: "./img/npc/npc020l"
        },
        // minerva
        ミナーヴァ: {
            name: "ミナーヴァ",
            imgR: "./img/npc/npc021r",
            imgL: "./img/npc/npc021l"
        },
        // nata
        ナタ: {
            name: "ナタ",
            imgR: "./img/npc/npc022r",
            imgL: "./img/npc/npc022l"
        }
    }
};
const getters = {
    getEventObj: state => {
        return state.eventObj;
    },
    getSceneCount: state => {
        return state.sceneCount;
    },
    getNextFlag: state => {
        return state.isNext;
    },
    getEventType: state => {
        return state.eventType;
    },
    getMessage: state => {
        return state.message;
    },
    getChoice1: state => {
        return state.choice1;
    },
    getChoice2: state => {
        return state.choice2;
    },
    getCharList: state => {
        return state.npc;
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
    },
    getSound: state => {
        return state.sound;
    }
};
const mutations = {
    setEventObj(state, obj) {
        state.eventObj = obj;
    },
    setBgImg(state, imgClass) {
        state.bgImg = imgClass;
    },
    setSceneCount(state, count) {
        state.sceneCount = count;
    },
    setNextFlag(state, bool) {
        state.isNext = bool;
    },
    setEventType(state, type) {
        state.eventType = type;
    },
    setMessage(state, message) {
        state.message = message;
    },
    setChoice1(state, event) {
        state.choice1 = event;
    },
    setChoice2(state, event) {
        state.choice2 = event;
    },
    setCharName(state, name) {
        state.charName = name;
    },
    setCharImgL1(state, imgPath) {
        if (imgPath === "") {
            state.charImgL1 = "";
        } else {
            // state.charImgL1 = "./img/npc/" + imgPath;
            state.charImgL1 = imgPath + ".png";
        }
    },
    setCharImgL2(state, imgPath) {
        if (imgPath === "") {
            state.charImgL2 = "";
        } else {
            // state.charImgL2 = "./img/npc/" + imgPath;
            state.charImgL2 = imgPath + ".png";
        }
    },
    setCharImgC(state, imgPath) {
        if (imgPath === "") {
            state.charImgC = "";
        } else {
            // state.charImgC = "./img/npc/" + imgPath;
            state.charImgC = imgPath + ".png";
        }
    },
    setCharImgR1(state, imgPath) {
        if (imgPath === "") {
            state.charImgR1 = "";
        } else {
            // state.charImgR1 = "./img/npc/" + imgPath;
            state.charImgR1 = imgPath + ".png";
        }
    },
    setCharImgR2(state, imgPath) {
        if (imgPath === "") {
            state.charImgR2 = "";
        } else {
            // state.charImgR2 = "./img/npc/" + imgPath;
            state.charImgR2 = imgPath + ".png";
        }
    },
    setSoundFlag(state, flag) {
        state.sound.isPlay = flag;
    },
    setBgm(state, sound) {
        state.sound.bgm = sound.bgm;
        state.sound.volume = sound.volume;
    }
};

export default {
    state,
    getters,
    mutations
};
