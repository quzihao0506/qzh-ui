import Vue from 'vue'
import App from './App.vue'
import Qu from '../packages/index'
import Message from '../packages/message/index'
import MessageBox from '../packages/message-box/index'
import Modal from '../packages/modal/index'
import animate from 'animate.css'
Vue.use(Qu)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Modal)

Vue.use(animate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
