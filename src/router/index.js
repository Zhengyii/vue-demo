import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLayout from '../layouts/UserLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('../views/login/Login.vue')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('../views/register/index.vue')
      },
      {
        path: '/user/forget',
        name: 'forget',
        component: () => import('../views/forget/index.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: UserLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
