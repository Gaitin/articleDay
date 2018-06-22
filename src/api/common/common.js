import Api from '../axios'

const apiURL = {
  // mock登录数据
  login: '/login',
  getUserInfo: '/user/info',
  loginOut: '/loginOut',
  getDayArticle: '/article/today',
  articleDay: '/article/day',
  articleRandom: '/article/random'
}

export default {

  login(obj) {
    return Api.post(apiURL.login, obj)
  },
  getUserInfo(obj) {
    return Api.post(apiURL.getUserInfo, obj)
  },
  loginOut(obj) {
    return Api.get(apiURL.loginOut, obj)
  },
  getDayArticle(obj) {
    return Api.get(apiURL.getDayArticle, obj)
  },
  articleDay(obj) {
    return Api.get(apiURL.articleDay, obj)
  },
  articleRandom(obj) {
    return Api.get(apiURL.articleRandom, obj)
  }
}
