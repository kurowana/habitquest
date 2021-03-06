const state = {
    damage: {
        isShow: false,
        target: "",
        message: ""
    },
    effect: {
        isShow: false,
        target: "",
        path: ""
    },
    battleMotion: {
        type: ""
    },

    swordEffect: [
        {
            img: "sword01_54.png"
        },
        {
            img: "sword02_54.png"
        },
        {
            img: "sword03_54.png"
        },
        {
            img: "sword04_54.png"
        },
        {
            img: "sword05_54.png"
        },
        {
            img: "sword06_54.png"
        }
    ],
    fireEffect: [
        {
            img: "fire01_54.png"
        },
        {
            img: "fire02_54.png"
        },
        {
            img: "fire03_54.png"
        },
        {
            img: "fire04_54.png"
        },
        {
            img: "fire05_54.png"
        }
    ],
    thunderEffect: [
        {
            img: "thunder01_54.png"
        },
        {
            img: "thunder02_54.png"
        },
        {
            img: "thunder03_54.png"
        }
    ],
    waterEffect: [
        {
            img: "water01_54.png"
        },
        {
            img: "water02_54.png"
        },
        {
            img: "water03_54.png"
        },
        {
            img: "water04_54.png"
        }
    ],
    windEffect: [
        {
            img: "wind01_54.png"
        },
        {
            img: "wind02_54.png"
        },
        {
            img: "wind03_54.png"
        },
        {
            img: "wind04_54.png"
        }
    ],
    earthEffect: [
        {
            img: "earth01_54.png"
        },
        {
            img: "earth02_54.png"
        },
        {
            img: "earth03_54.png"
        },
        {
            img: "earth04_54.png"
        }
    ],
    darkEffect: [
        {
            img: "dark01_54.png"
        },
        {
            img: "dark02_54.png"
        },
        {
            img: "dark03_54.png"
        },
        {
            img: "dark04_54.png"
        },
        {
            img: "dark05_54.png"
        },
        {
            img: "dark06_54.png"
        },
        {
            img: "dark07_54.png"
        }
    ],
    healEffect: [
        {
            img: "heal01_54.png"
        }
    ]
};
const getters = {
    getDamage: state => {
        return state.damage;
    },
    getEffect: state => {
        return state.effect;
    },
    getBattleMotion: state => {
        return state.battleMotion;
    },
    getSwordEffect: state => {
        return state.swordEffect;
    },
    getFireEffect: state => {
        return state.fireEffect;
    },
    getThunderEffect: state => {
        return state.thunderEffect;
    },
    getWaterEffect: state => {
        return state.waterEffect;
    },
    getWindEffect: state => {
        return state.windEffect;
    },
    getEarthEffect: state => {
        return state.earthEffect;
    },
    getDarkEffect: state => {
        return state.darkEffect;
    },
    getHealEffect: state => {
        return state.healEffect;
    }
};
const mutations = {
    setDamageFlag(state, boolean) {
        state.damage.isShow = boolean;
    },
    setDamageTarget(state, target) {
        state.damage.target = target;
    },
    setDamageMessage(state, message) {
        state.damage.message = message;
    },
    setEffectFlag(state, boolean) {
        state.effect.isShow = boolean;
    },
    setEffectTarget(state, target) {
        state.effect.target = target;
    },
    setEffectPath(state, path) {
        state.effect.path = path;
    },
    setBattleMotionType(state, type) {
        state.battleMotion.type = type;
    }
};

export default {
    state,
    getters,
    mutations
};
