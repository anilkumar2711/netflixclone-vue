import Vue from 'vue'
import App from './App.vue' //Vue Component

//Named Import
import { store } from "./store";


Vue.config.productionTip = false

//Vue Instance Created
window.VueApp = new Vue({
  render: h => h(App),
  store
}).$mount('#app')
