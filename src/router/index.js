import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './modules/constantRoutes.js';
import asyncRoutes from './modules/asyncRoutes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: constantRoutes,
});

export {
  constantRoutes,
  asyncRoutes
}

export default router;
