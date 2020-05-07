import axios from '@/utils/axios';

const users = {};

/**
 * 登录
 * @param params
 * @returns {*}
 */
users.login = (params = {}) => {
  return axios.post('/api/login', params);
};

/**
 * 登出
 * @returns {*}
 */
users.logout = () => {
  return axios.post('/api/logout');
};

export default users;