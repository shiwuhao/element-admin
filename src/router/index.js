import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './modules/constantRoutes.js';
import asyncRoutes from './modules/asyncRoutes.js';
import store from '@/store/index';
import {getToken} from '@/utils/auth';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  routes: constantRoutes,
});

// 白名单路由 没有权限请求
const whiteList = ['/login', '/404'];

// 路由拦截器
router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) { // 白名单，直接进入
    next();
  } else if (getToken()) { // 已登录 拉取用户信息,过滤权限路由,动态注册路由
    if (store.getters.user === null) { // 不存在获取用户信息，并注册路由
      const {roles} = await store.dispatch('user/getUserInfo');
      const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
      router.addRoutes(accessRoutes);
      next({...to, replace: true});
    } else {
      next();
    }
  } else { // 否则全部重定向到登录页
    next(`/login?redirect=${to.path}`);
  }
});


export {
  constantRoutes,
  asyncRoutes
}

export default router;
