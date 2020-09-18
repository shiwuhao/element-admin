import axios from '@/utils/axios';
import users from "./users";
const sales = {};

/**
 * echart图表数据
 * @param params
 * @returns {*}
 */
sales.card = (params = {}) => {
    return axios.post('/api/card', params);
};
sales.shop = (params = {}) => {
    return axios.post('/api/shop', params);
};

export default sales