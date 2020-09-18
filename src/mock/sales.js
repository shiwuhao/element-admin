import Mock from 'mockjs';

const code = 200;

const baseData = {
    code: code,
    data: {},
    msg: '',
};
// 首页card数据
const cardsData = Object.assign(baseData, {
    data: {
        sale_total:{
            sales: '12560',
            week_rate: '12%',
            day_rate: '11%',
            average_sales: '234.56'
        },
        visits: {
            sales: '12312',
            day_visits: '1211'
        },
        payments_number : {
            sales: '12121',
            inversion_rate: '60%'
        },
        activity_effect: {
            sales: '50%',
            week_rate: '20%',
            day_rate: '19%',
        }
    }
});
//首页门店数据
const shopsData = {
    data: [
        {
            title: 'coco1号店',
            number: '1233'
        },
        {
            title: 'coco2号店',
            number: '1234'
        },
        {
            title: 'coco3号店',
            number: '1235'
        },
        {
            title: 'coco4号店',
            number: '1236'
        },
        {
            title: 'coco1号店',
            number: '1237'
        },
        {
            title: 'coco5号店',
            number: '1238'
        },
        {
            title: 'coco6号店',
            number: '1239'
        },
        {
            title: 'coco7号店',
            number: '1240'
        },
    ]
}
Mock.mock(/\/api\/card/, 'post', cardsData);//首页card数据
Mock.mock(/\/api\/shop/, 'post', shopsData)
