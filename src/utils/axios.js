import axios from 'axios';
import Qs from 'qs';
import {Notice, Message, LoadingBar} from 'iview';
import router from '../router/index';
import {getToken, removeToken} from '@/libs/auth';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {Accept: 'text/json'},
});

// 请求拦截
instance.interceptors.request.use(function (config) {
    LoadingBar.start();

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
    LoadingBar.finish();

    return response;
}, (err) => {
    console.table(err.config.url);
    LoadingBar.error();
    if (err && err.response) {
        const errors = err.response.data.errors;
        let message = [];
        let noticeConfig = {};

        switch (err.response.status) {
            case 400:
                Message.error({
                    content: '错误的请求，请刷新后重试',
                    duration: 2.5,
                });
                break;
            case 403:
                noticeConfig = {title: 403, desc: err.response.data.message, duration: 0};
                break;
            case 401:
                if (err.config.url.indexOf('login') > 0) {
                    noticeConfig = {title: 401, desc: err.response.data.message, duration: 0};
                } else {
                    Message.error({
                        content: '您的登录状态已失效，即将为您跳转登录页面',
                        duration: 2.5,
                        onClose: () => {
                            removeToken();
                            router.push({'name': 'login'});
                        }
                    });
                }
                break;
            case 404:
                noticeConfig = {title: 404, desc: err.response.data.message, duration: 0};
                break;
            case 422:
                for (let key in errors) {
                    if ({...errors}.hasOwnProperty(key)) {
                        errors[key].forEach(item => {
                            message.push(item);
                        })
                    }
                }
                noticeConfig = {title: '表单验证失败', desc: message.join('<br/>')};
                break;
            default:
                noticeConfig = {title: err.response.status, desc: err.response.data.message};
        }
        if (Object.keys(noticeConfig).length > 0) {
            Notice.error(noticeConfig);
        }
    }
    return Promise.reject(err)
});

export default instance;
