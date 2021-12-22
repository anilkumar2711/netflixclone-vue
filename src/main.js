import Vue from 'vue'
import App from './App.vue' //Vue Component
import Vuex from 'vuex'
Vue.use(Vuex)
//Named Import
import { state } from "./store";

Vue.config.productionTip = false

//Vue Instance Created
window.VueApp = new Vue({
  render: h => h(App),
  store
}).$mount('#app')
