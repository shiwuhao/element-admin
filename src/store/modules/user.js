import users from '@/api/users';
import {setToken, removeToken} from '@/utils/auth';

const user = {
  state: {
    accessToken: '',
    userInfo: {},
    roles: [],
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_ROLES(state, roles) {
      state.roles = roles;
    }
  },
  actions: {
    // 登录
    login({commit}, params) {
      return users.login(params).then(response => {
        const data = response.data;
        setToken(data['access_token']);
        commit('SET_ACCESS_TOKEN', data['access_token']);
      });
    },

    // 登出
    logout({commit}) {
      return users.logout().then(() => {
        commit('SET_ACCESS_TOKEN', '');
        commit('SET_ROLES', []);
        commit('SET_USER_INFO', {});
        removeToken();
      });
    },

    // 获取用户信息
    getUserInfo({commit}) {
      return users.getUserInfo().then(response => {
        const {userInfo, roles} = response.data;
        // 设置用户信息
        commit('SET_USER_INFO', userInfo);
        // 设置权限
        commit('SET_ROLES', roles);
      });

    }
  }
};
export default user;
