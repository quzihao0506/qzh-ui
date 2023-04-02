import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'
import Form from './form'
import FormItem from './form-item'

const install = (Vue) => {
  const components = [
    Button,
    Dialog,
    Input,
    Switch,
    Radio,
    RadioGroup,
    Form,
    FormItem
  ]
  // 全局注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否直接script引入，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}