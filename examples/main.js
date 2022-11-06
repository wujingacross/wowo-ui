import Vue from 'vue'
import App from './App.vue'
import WoUI from '../packages'

Vue.config.productionTip = false

Vue.use(WoUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
