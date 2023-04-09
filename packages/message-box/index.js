import MessageBox from '../message-box/index.vue'

const install = (Vue) => {
  function generateInstance(options) {
    const Ctor = Vue.extend(MessageBox)
    let instance = new Ctor({
      propsData: options
    }).$mount(document.createElement('div'))
  }
  Vue.prototype.$confirm = function (options) {
    generateInstance(options)
  }
  Vue.prototype.$alert = function (options) {
    generateInstance(
      Object.assign(options, {
        type: 'alert'
      })
    )
  }
}

export default {
  install
}