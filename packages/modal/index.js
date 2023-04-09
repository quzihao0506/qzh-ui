import Modal from './index.vue'

const install = Vue => {
  function createConstructor(options) {
    Modal.components.TempComponent = options.template
    return Vue.extend(Modal)
  }
  function generateInstance(options) {
    const Ctor = createConstructor(options)
    let instance = new Ctor({
      propsData: options
    }).$mount(document.createElement('div'))
    return instance
  }
  Vue.prototype.$modal = function (options) {
    generateInstance(options)
  }
}

export default {
  install
}