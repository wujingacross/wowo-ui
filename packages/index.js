// 整个包的入口

import Button from './Button.vue'
import Dialog from './Dialog.vue'

const components = [Button, Dialog]

const install = function (Vue) {
  console.log('wo-ui install')
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
