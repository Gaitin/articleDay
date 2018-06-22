// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import 'lib-flexible'
import FastClick from 'fastclick'
import './mock' // simulation data
import globalConfig from 'utils/global-config'
import store from 'store'
import VueBus from 'vue-bus'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(Mint)
Vue.use(globalConfig)
Vue.use(VueBus)
Vue.use(MuseUI);
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
