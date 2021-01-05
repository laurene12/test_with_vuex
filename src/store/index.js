
import Vuex from 'vuex'
import Vue from 'vue'
import etudiant from './modules/etudiant'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        etudiants : []
    },
    mutations: {
        increment (state) {
        state.count++
        }
    },
    getters: {
    },
    actions:{
    },
    modules: {
        etudiant
    },
    
})

export default store