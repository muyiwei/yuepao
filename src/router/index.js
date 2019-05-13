import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home'



Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title:'home'
    }
  }
]
export default new VueRouter({
  routes
})
