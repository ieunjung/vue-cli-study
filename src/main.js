import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 전역 컴포넌트 등록
Vue.component('asdf', {

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
