// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource';
Vue.use(VueResource);
import axios from "axios";
Vue.prototype.$axios = axios;
import $ from 'jquery'
import 'lib-flexible/flexible'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router, //路由
  // components: { App },
  // template:'<App/>'
  store,
  render:h=>h(App)
}).$mount("#app");