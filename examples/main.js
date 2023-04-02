import Vue from 'vue'
import App from './App.vue'
import Qu from '../packages/index'
Vue.use(Qu)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
