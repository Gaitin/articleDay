import Vue from 'vue'

const global = {
  state: {
    status: false
  },

  mutations: {
    SET_STATUS: (state, type) => {
      state.status = type
    }
  },
  getters: {},

  actions: {
    // 设置登录状态
    setStatus ({commit, state}, data) {
      return new Promise((resolve, reject) => {
        commit('SET_STATUS', data)
        resolve()
      })
    }

  }
}

export default global
