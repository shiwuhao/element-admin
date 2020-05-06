import login from '@/api/login';
import {setToken, removeToken} from '@/libs/auth';

const user = {
	state: {
		accessToken: '',
		refreshToken: '',
		userInfo: {},
	},
	mutations: {
		SET_ACCESS_TOKEN(state, payload) {
			state.accessToken = payload;
		},
		SET_REFRESH_TOKEN(state, payload) {
			state.accessToken = payload;
		},
		SET_USER_INFO(state, payload) {
			state.userInfo = payload;
		}
	},
	actions: {
		// 登录
		loginByUsername({commit}, params) {
			return login.login(params).then(response => {
				const data = response.data;
				setToken(data['access_token']);
				commit('SET_ACCESS_TOKEN', data['access_token']);
				commit('SET_REFRESH_TOKEN', data['refresh_token']);
			});
		},

		// 登出
		logout({commit}) {
			return login.logout().then(() => {
				commit('SET_ACCESS_TOKEN', '');
				commit('SET_REFRESH_TOKEN', '');
				commit('SET_USER_INFO', {});
				removeToken();
			});
		},

		// 获取用户信息
		getUserInfo({commit, dispatch}) {
			return login.getUserInfo().then(response => {
				const data = response.data;
				// 设置用户信息
				commit('SET_USER_INFO', data.data);
				// 设置权限
				dispatch('setPermissions', data.roles);
				// 设置配置信息
				dispatch('setConfigs', data.configs);
			});

		}
	}
};
export default user;
