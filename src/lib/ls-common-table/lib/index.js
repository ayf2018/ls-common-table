import index from './index.vue'

const myPlugin = {
  install (Vue) {
    Vue.component('ls-common-table', index)
  }
}

export default myPlugin
