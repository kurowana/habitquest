const state = {
    activeBattleEffect: "",
    battleEffect: {
        闇1: {
            img: "dark01.png"
        },
        地1: {
            img: "earth01.png"
        },
        火1: {
            img: "fire01.png"
        },
        火2: {
            img: "fire02.png"
        },
        回復1: {
            img: "heal01.png"
        },
        光1: {
            img: "light01.png"
        },
        光2: {
            img: "light02.png"
        },
        剣1: {
            img: "sword01.png"
        },
        剣2: {
            img: "sword02.png"
        },
        剣3: {
            img: "sword03.png"
        },
        剣4: {
            img: "sword04.png"
        },
        剣5: {
            img: "sword05.png"
        },
        水1: {
            img: "water01.png"
        },
        風1: {
            img: "wind01.png"
        },
        風2: {
            img: "wind02.png"
        }
    }
};
const getters = {
    getActiveBattleEffect: state => {
        return state.activeBattleEffect;
    }
};
const mutations = {
    setBattleEffect(state, effect) {
        state.activeBattleEffect = effect;
    }
};
