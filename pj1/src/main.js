import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import VueSession from 'vue-session'
// import Axios from 'axios'
global.jQuery = jQuery
global.$ = jQuery
// import 'jquery';
import 'popper.js';
import 'bootstrap';

Vue.use(VueSession)

Vue.config.productionTip = false

// Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
