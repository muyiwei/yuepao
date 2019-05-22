 import Vue from 'vue';
import router from './router/index';
import store from "./store";
import app from "./App";
import il8n from "./il8n"
Vue.use(il8n)
new Vue({
  el: '#app',
  router,
  store,     
  ...app

});
