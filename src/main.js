import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/contextmenu.js'
import '@/assets/iconfont/iconfont.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/mock/index';
import echarts from 'echarts'
Vue.use(VueAxios, axios);
Vue.prototype.$echarts = echarts
require('@/mock/index');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
