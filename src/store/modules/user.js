import Vue from 'vue'
import router from 'router'

const user = {
  state: {
    nickName: '',
    status: false
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.nickName = name
    },
    SET_STATUS: (state, status) => {
      state.status = status
    }
  },
  getters: {
    status (state) {
      return state.status
    }
  },
  actions: {
    // 设置用户名
    setUserName ({commit, state}, data) {
      return new Promise((resolve, reject) => {
        commit('SET_NAME', data)
        resolve()
      })
    },
    // 设置登录状态
    setUserStatus ({commit, state}, data) {
      return new Promise((resolve, reject) => {
        commit('SET_STATUS', data)
        resolve()
      })
    },
    // 前端 登出
    FedLogOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_PHONE', '')
        resolve()
      })
    }
  }
}

export default user
