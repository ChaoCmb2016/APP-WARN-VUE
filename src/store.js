import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        LOADING: false
    },
    mutations: {
        showLoading(state){
            state.LOADING = true    
        },
        hideLoading (state) {
            state.LOADING = false
        }
    }
})
