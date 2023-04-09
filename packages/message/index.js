import Message from './index.vue'
let instances = []
let verticalTop = 16
let index = 0
// Vue.extend( options )
//   参数：{Object} options
//   用法：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象；
//   data 选项是特例，需要注意： 在 Vue.extend() 中它必须是函数；


const install = (Vue) => {
  function updateVerticalTop(instance) {
    let removeTop = instance.verticalTop
    let index = 0
    for (; index < instances.length; index++) {
      if (instances[index].id === instance.id) {
        break
      }
    }
    instances.splice(index, 1)
    for (; index < instances.length; index++) {
      [instances[index].verticalTop, removeTop] = [removeTop, instances[index].verticalTop]
    }
  }
  function computedVerticalTop() {
    return instances.reduce((acc, cul) => {
      return cul.$el.offsetHeight + acc + verticalTop
    }, verticalTop)
  }
  function generateInstance(options) {
    // 创建构造器
    const Ctor = Vue.extend(Message)

    // 创建实例，并挂载到一个元素上
    let instance = new Ctor({
      propsData: options
    }).$mount(document.createElement('div'))

    instance.verticalTop = computedVerticalTop()

    instance.id = 'message-' + index++

    instance.$once('close', () => {
      updateVerticalTop(instance)
    })
    return instance
  }
  Vue.prototype.$message = function (options) {
    let instance = generateInstance(options)
    instances.push(instance)
  }
}

export default {
  install
}