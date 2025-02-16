import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/LoginPage.vue"
import Register from "../views/Register.vue"
import characterDetail from "../components/characterDetail"
import GroupchatPage from "../views/GroupchatPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/charaDetails/:id',
    name: 'characterDetail',
    component: characterDetail
  },
  {
    path: '/groupchat',
    name: 'groupchatPage',
    component: GroupchatPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "Home" && !localStorage.access_token) {
    next("/login")
  } else if (to.name === "Login" && localStorage.access_token) {
    next("/")
  } else if (to.name === "Register" && localStorage.access_token) {
    next("/")
  } else {
    next()
  }
})

export default router
