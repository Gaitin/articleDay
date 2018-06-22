import api from 'api'
export default function plugin (Vue) {
  Vue.$api = Vue.prototype.$api = api
}
