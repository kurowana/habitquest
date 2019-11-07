const state = {
    eventObj: "eventObj",
    sceneCount: 0,
    isNext: false,
    eventType: "",
    // message: "storeメッセージ",
    // choice1: "",
    // choice2: "",
    // talkerName: "",
    message: {
        name: " ",
        content: " "
    },
    choice: {
        isShow: "",
        type1: " ",
        type2: " "
    },
    npc: {
        L1: {
            img: "",
            opacity: 1,
            zIndex: 10,
            isMotion: false,
            motion: "",
            isEffect: false,
            effect: ""
        },
        L2: {
            img: "",
            opacity: 1,
            zIndex: 10,
            isMotion: false,
            motion: "",
            isEffect: false,
            effect: ""
        },
        C: {
            img: "",
            opacity: 1,
            zIndex: 10,
            isMotion: false,
            motion: "",
            isEffect: false,
            effect: ""
        },
        R1: {
            img: "",
            opacity: 1,
            zIndex: 10,
            isMotion: false,
            motion: "",
            isEffect: false,
            effect: ""
        },
        R2: {
            img: "",
            opacity: 1,
            zIndex: 10,
            isMotion: false,
            motion: "",
            isEffect: false,
            effect: ""
        }
    },
    // charImgL1: {
    //     path: "",
    //     opacity: 1,
    //     zIndex: 10,
    //     isMotion: false,
    //     motion: "",
    //     isEffect: false,
    //     effect: ""
    // },
    // charImgL2: {
    //     path: "",
    //     opacity: 1,
    //     zIndex: 10,
    //     isMotion: false,
    //     motion: "",
    //     isEffect: false,
    //     effect: ""
    // },
    // charImgC: {
    //     path: "",
    //     opacity: 1,
    //     zIndex: 10,
    //     isMotion: false,
    //     motion: "",
    //     isEffect: false,
    //     effect: ""
    // },
    // charImgR1: {
    //     path: "",
    //     opacity: 1,
    //     zIndex: 10,
    //     isMotion: false,
    //     motion: "",
    //     isEffect: false,
    //     effect: ""
    // },
    // charImgR2: {
    //     path: "",
    //     opacity: 1,
    //     zIndex: 10,
    //     isMotion: false,
    //     motion: "",
    //     isEffect: false,
    //     effect: ""
    // },
    bgImg: "",

    sound: {
        isPlay: false,
        bgm: "/bgm/bgm_maoudamashii_fantasy13.mp3",
        volume: 0.1
    },

    //立ち絵変更用のキャラデータオブジェクト
    npcList: {
        // sphere
        スフィア1: {
            name: "スフィア",
            imgR: "./img/npc/npc001r",
            imgL: "./img/npc/npc001l"
        },
        スフィア2: {
            name: "スフィア",
            imgR: "./img/npc/npc001_1",
            imgL: "./img/npc/npc001_1"
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
    getChoice: state => {
        return state.choice;
    },
    // getMessage: state => {
    //     return state.message;
    // },
    // getChoice1: state => {
    //     return state.choice1;
    // },
    // getChoice2: state => {
    //     return state.choice2;
    // },
    getNpcList: state => {
        return state.npcList;
    },
    // getCharName: state => {
    //     return state.charName;
    // },
    getNpc: state => {
        return state.npc;
    },
    // getCharImgL1: state => {
    //     return state.charImgL1;
    // },
    // getCharImgL2: state => {
    //     return state.charImgL2;
    // },
    // getCharImgC: state => {
    //     return state.charImgC;
    // },
    // getCharImgR1: state => {
    //     return state.charImgR1;
    // },
    // getCharImgR2: state => {
    //     return state.charImgR2;
    // },
    getSound: state => {
        return state.sound;
    },
    getBgImg: state => {
        return state.bgImg;
    }
};
const mutations = {
    setEventObj(state, obj) {
        state.eventObj = obj;
    },
    setBgImg(state, bgImgClass) {
        state.bgImg = bgImgClass;
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
        state.message.content = message;
    },
    setTalkerName(state, name) {
        state.message.name = name;
    },
    setChoice(state, choice) {
        state.choice.isShow = choice.flag;
        state.choice.type1 = choice.type1;
        state.choice.type2 = choice.type2;
    },
    // setMessage(state, message) {
    //     state.message = message;
    // },
    // setChoice1(state, event) {
    //     state.choice1 = event;
    // },
    // setChoice2(state, event) {
    //     state.choice2 = event;
    // },
    // setCharName(state, name) {
    //     state.charName = name;
    // },
    setCharImgL1(state, img) {
        if (img === "") {
            state.npc.L1.img = "";
        } else {
            state.npc.L1.img = img + ".png";
        }
    },
    setCharImgL2(state, img) {
        if (img === "") {
            state.npc.L2.img = "";
        } else {
            state.npc.L2.img = img + ".png";
        }
    },
    setCharImgC(state, img) {
        if (img === "") {
            state.npc.C.img = "";
        } else {
            state.npc.C.img = img + ".png";
        }
    },
    setCharImgR1(state, img) {
        if (img === "") {
            state.npc.R1.img = "";
        } else {
            state.npc.R1.img = img + ".png";
        }
    },
    setCharImgR2(state, img) {
        if (img === "") {
            state.npc.R2.img = "";
        } else {
            state.npc.R2.img = img + ".png";
        }
    },
    // setCharImgL2(state, img) {
    //     if (imgPath === "") {
    //         state.charImgL2.path = "";
    //     } else {
    //         state.charImgL2.path = imgPath + ".png";
    //     }
    // },
    // setCharImgC(state, imgPath) {
    //     if (imgPath === "") {
    //         state.charImgC.path = "";
    //     } else {
    //         state.charImgC.path = imgPath + ".png";
    //     }
    // },
    // setCharImgR1(state, imgPath) {
    //     if (imgPath === "") {
    //         state.charImgR1.path = "";
    //     } else {
    //         state.charImgR1.path = imgPath + ".png";
    //     }
    // },
    // setCharImgR2(state, imgPath) {
    //     if (imgPath === "") {
    //         state.charImgR2.path = "";
    //     } else {
    //         state.charImgR2.path = imgPath + ".png";
    //     }
    // },
    setOpacityL1(state, opacity) {
        state.npc.L1.opacity = opacity;
    },
    setOpacityL2(state, opacity) {
        state.npc.L2.opacity = opacity;
    },
    setOpacityC(state, opacity) {
        state.npc.C.opacity = opacity;
    },
    setOpacityR1(state, opacity) {
        state.npc.R1.opacity = opacity;
    },
    setOpacityR2(state, opacity) {
        state.npc.R2.opacity = opacity;
    },
    setZIndexL1(state, index) {
        state.npc.L1.zIndex = index;
    },
    setZIndexL2(state, index) {
        state.npc.L2.zIndex = index;
    },
    setZIndexC(state, index) {
        state.npc.C.zIndex = index;
    },
    setZIndexR1(state, index) {
        state.npc.R1.zIndex = index;
    },
    setZIndexR2(state, index) {
        state.npc.R2.zIndex = index;
    },

    setMotionL1(state, motion) {
        state.npc.L1.isMotion = motion.flag;
        state.npc.L1.motion = motion.type;
    },
    setMotionL2(state, motion) {
        state.npc.L2.isMotion = motion.flag;
        state.npc.L2.motion = motion.type;
    },
    setMotionC(state, motion) {
        state.npc.C.isMotion = motion.flag;
        state.npc.C.motion = motion.type;
    },
    setMotionR1(state, motion) {
        state.npc.R1.isMotion = motion.flag;
        state.npc.R1.motion = motion.type;
    },
    setMotionR2(state, motion) {
        state.npc.R2.isMotion = motion.flag;
        state.npc.R2.motion = motion.type;
    },

    setEffectL1(state, effect) {
        state.npc.L1.isEffect = effect.flag;
        state.npc.L1.effect = effect.type;
    },
    setEffectL2(state, effect) {
        state.npc.L2.isEffect = effect.flag;
        state.npc.L2.effect = effect.type;
    },
    setEffectC(state, effect) {
        state.npc.C.isEffect = effect.flag;
        state.npc.C.effect = effect.type;
    },
    setEffectR1(state, effect) {
        state.npc.R1.isEffect = effect.flag;
        state.npc.R1.effect = effect.type;
    },
    setEffectR2(state, effect) {
        state.npc.R2.isEffect = effect.flag;
        state.npc.R2.effect = effect.type;
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
