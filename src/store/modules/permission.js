import {constantRoutes, asyncRoutes} from '@/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param permissionNodes
 * @param route
 */
function hasPermission(permissionNodes, route) {
  if (route.meta && route.meta.permission) {
    return permissionNodes.some(node => route.meta.permission === node);
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param permissionNodes 权限节点
 */
function filterAsyncRouter(routes, permissionNodes) {
  const res = [];
  routes.forEach(route => {
    let tmp = {...route};
    if (hasPermission(permissionNodes, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, permissionNodes);
        if (tmp.children.length > 0) {
          res.push(tmp);
        }
      } else {
        res.push(tmp);
      }
    }
  });

  return res
}

const permission = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes)
    },
  },
  actions: {
    // 生成访问路由
    generateRoutes({commit}, roles) {
      return new Promise(resolve => {
        let accessedRoutes;
        if (roles.some(item => item === 'Administrator')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRouter(asyncRoutes, roles);
        }

        commit('SET_ROUTES', accessedRoutes);
        resolve(accessedRoutes);
      });
    },
  }
};
export default permission;
