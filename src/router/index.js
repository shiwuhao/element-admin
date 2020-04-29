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
        meta: {title: '控制台', icon: 'dashboard', affix: true, cache: true, activeMenu: '', roles: [], permissions: []},
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
