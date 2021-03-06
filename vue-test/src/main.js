// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from "vue-head"
import App from './App'
import router from './router'
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import "./assets/sass/style.scss"


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


Vue.use(VueHead);
