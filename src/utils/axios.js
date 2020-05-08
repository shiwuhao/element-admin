import axios from 'axios';
import Qs from 'qs';
import {getToken} from '@/utils/auth';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {Accept: 'text/json'},
});

// 请求拦截
instance.interceptors.request.use(function (config) {


  if (config.method === "post") {
    config.data = Qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken();
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((response) => {


  return response;
}, (err) => {
  console.table(err.config.url);

  if (err && err.response) {
    console.log(err);
  }
  return Promise.reject(err)
});

export default instance;
