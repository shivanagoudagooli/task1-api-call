import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../components/loginPage.vue'
import Home from '../components/Home.vue'
import Player from '../components/Player.vue'


Vue.use(VueRouter)

const routes = [
  { path: "/", component:loginPage},
  { path : "/home", name:Home,component:Home},
  { path:"/Player", component:Player}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
