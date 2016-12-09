import Vue from 'vue'
import VueToast from './components/VueToast.vue'

Vue.component(VueToast.name, VueToast)

console.log(VueToast);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-toast>Hello</vue-toast></div>',
  components: { VueToast }
})
