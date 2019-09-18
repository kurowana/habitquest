const state = {
    habits: ""
};

const getters = {
    getMyHabits: state => {
        return state.habits;
    }
};

const mutations = {
    setMyHabits(state, habits) {
        state.habits = habits;
    }
};

export default {
    state,
    getters,
    mutations
};
