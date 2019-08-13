const state = {
    user_id: "",
    user: {},
    userSt: {
        maxhp: 0,
        hp: 0,
        maxmp: 0,
        mp: 0,
        atk: 0,
        matk: 0,
        def: 0,
        mdef: 0,
        spd: 0,
        hit: 0,
        flee: 0
    },
    monster: {}
};
const getters = {
    getUserInfo: state => {
        return state.user;
    },
    getUserSt: state => {
        return state.userSt;
    },
    getHasHabit: state => {
        return state.user.habit;
    },
    getMonster: state => {
        return state.monster;
    }
};
const mutations = {
    setHabit(state, habit) {
        state.user.habit = { habit_name: habit };
    }
};
export default {
    state,
    getters,
    mutations
};
