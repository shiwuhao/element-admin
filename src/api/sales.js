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
sales.table = (params = {},page = 1)=>{
    return axios.post(`/api/table?page=${page}`,params)
}
sales.echart = (params={})=>{
    return axios.post('/api/echart',params)
}

export default sales