const state = {
    monster: {
        name: "",
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
    monsterList: [
        {
            name: "スライム",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20
        },
        {
            name: "スケルトン",
            hp: 60,
            mp: 0,
            atk: 14,
            matk: 0,
            def: 8,
            mdef: 0,
            spd: 20,
            hit: 20,
            flee: 20
        }
    ]
};
const getters = {
    getMonster: state => {
        return state.monster;
    }
};
const mutations = {
    setMonster(state, stage) {
        const range = state.monsterList.length;
        const randomNum = Math.floor(Math.random() * range);

        state.monster = Object.assign({}, state.monsterList[randomNum]);

        const correction = 1 + stage * 0.1;
        state.monster.hp = Math.floor(state.monster.hp * correction);
        state.monster.mp = Math.floor(state.monster.mp * correction);
        state.monster.atk = Math.floor(state.monster.atk * correction);
        state.monster.matk = Math.floor(state.monster.matk * correction);
        state.monster.def = Math.floor(state.monster.def * correction);
        state.monster.mdef = Math.floor(state.monster.mdef * correction);
        state.monster.spd = Math.floor(state.monster.spd * correction);
        state.monster.hit = Math.floor(state.monster.hit * correction);
        state.monster.flee = Math.floor(state.monster.flee * correction);
    }
};

export default {
    state,
    getters,
    mutations
};
