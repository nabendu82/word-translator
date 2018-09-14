import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
  render: h => h(App)
}).$mount('#app')
