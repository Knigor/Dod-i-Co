import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import AuthView from '../views/AuthView.vue'
import SigmaView from '../views/SigmaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'MainView',
    component: MainView

  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView

  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView

  },
  {
    path: '/sigma',
    name: 'sigma',
    component: SigmaView

  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
