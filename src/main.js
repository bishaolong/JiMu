import Vue from 'vue';
import App from './App.vue';
// import App from './App1.vue'
// import router from './router'
import store from './store';

import Framework7 from 'framework7/framework7.esm.bundle.js';

import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
// Import F7 Styles
// import 'framework7/css/framework7.css';


// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';


import './css/framework7.bundle.css';
import './css/framework7.css';


import './js/jquery-2.1.4.min.js';

Framework7.use(Framework7Vue)


Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app');
