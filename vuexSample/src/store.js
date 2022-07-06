import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tanka: 100,
        num: 0,
    },
    getters: {
        sum_kingaku: state => state.num * state.tanka,
    },
    mutations :{
        increment(state, addNum) {
            state.num = addNum;
        
        }
    },
    actions: {
        incrementActions({ commit },addNum) {
            commit('increment',addNum);
        }
    }
})