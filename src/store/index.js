import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import global from './global'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: global.state,
  mutations: global.mutations,
  actions: global.actions,
  getters: global.getters,
  modules: {
    user
  }
})

Vue.$store = store

export default store
