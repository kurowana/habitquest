const state = {
    assets: {
        money: 0,
        iron: 0,
        feather: 0,
        wood: 0,
        stone: 0,
        leather: 0
    }
};
const getters = {
    getAssets: state => {
        return state.assets;
    }
};
const mutations = {
    setAssets(state, assets) {
        state.assets.money = assets.money;
        state.assets.iron = assets.iron;
        state.assets.feather = assets.feather;
        state.assets.wood = assets.wood;
        state.assets.stone = assets.stone;
        state.assets.leather = assets.leather;
    }
};

export default {
    state,
    getters,
    mutations
};
