import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './../layout/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Home'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
