import Mock from 'mockjs';

const code = 200;

const baseData = {
  code: code,
  data: {},
  msg: '',
};
// 登录
const loginData = Object.assign(baseData, {
  data: {
    access_token: '12312312321',
  }
});

// 任务列表
const userInfoData = Object.assign(baseData, {
  data: {
    user: {
      email: 'shiwuhao@juzifenqi.com',
      real_name: '石武浩',
      avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    roles: [],
  },
});


Mock.mock(/\/api\/user/, 'get', userInfoData);// 用户信息
Mock.mock(`/api/logout`, 'post', baseData);// 退出登录
Mock.mock(/\/api\/login/, 'post', loginData);// 登录
