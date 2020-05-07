import Mock from 'mockjs';

Mock.setup({
  domain: process.env.VUE_APP_API_URL,
});

const code = 200;

const BaseData = {
  code: code,
  data: {},
  msg: '',
};
// 任务列表
const loginData = {
  code: code,
  data: {
    access_token: '12312312321',
  },
  msg: '',
};
// 任务列表
const userInfoData = {
  code: code,
  data: {
    result: {
      "userName": '石武浩'
    },
    error: '',
  },
  msg: '',
};


Mock.mock(`/api/user`, 'get', userInfoData);// 用户信息
Mock.mock(`/api/logout`, 'post', BaseData);// 退出登录
Mock.mock(`/api/login`, 'post', loginData);// 登录
