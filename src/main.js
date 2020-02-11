import Vue from 'vue'
import App from '../src/view/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
