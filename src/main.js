import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import lsCommonTable from './lib/ls-common-table'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(lsCommonTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
