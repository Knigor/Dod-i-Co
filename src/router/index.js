import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
