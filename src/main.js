import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from "vue-lazyload"

import toast from './components/common/toast'

Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载
// 使用时将img中的(:)src替换为v-lazy
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/common/placeholder.png')
})


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
