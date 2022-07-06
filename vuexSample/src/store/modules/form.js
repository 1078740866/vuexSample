const state = {
    count: 0
};

const mutations = {
    SET_COUNT: (state,data) => {
        state.count++;
    }
};
const actions = {};

export default {
    state,
    mutations,
    actions
};