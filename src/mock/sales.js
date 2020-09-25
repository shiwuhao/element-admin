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
            title: 'coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店',
            number: '1233'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店',
            number: '1234'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店',
            number: '1235'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店',
            number: '1236'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店',
            number: '1237'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店',
            number: '1238'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店',
            number: '1239'
        },
        {
            title: 'coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店coco1号店',
            number: '1240'
        },
    ]
}
//首页线上热门搜索table数据
const tableData = {
    data: [
        {
            ranking: '14',
            key: 'wky',
            user: '406',
            increase: '4%'
        },
        {
            ranking: '16',
            key: 'wxf',
            user: '506',
            increase: '19%'
        },
        {
            ranking: '18',
            key: 'lxm',
            user: '606',
            increase: '24%'
        },
        {
            ranking: '20',
            key: 'gjl',
            user: '706',
            increase: '44%'
        }
    ],
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        path: "http://dev-user-operate.juzifenqi.cn:8080/api/automations",
        per_page: 15,
        to: 5,
        total: 5
    }
}
//echart图表数据
const echartData = {
    data: {
        daily_visits: [
            ['2019-10-10', 200],
            ['2019-10-11', 400],
            ['2019-10-12', 650],
            ['2019-10-13', 500],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
        ],
        conversion_rate:[400, 302, 600, 334, 390, 330, 520],
        sales_ranking:[10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220],
        sales_type:[
            {value: 335, name: '直接访问',itemStyle: { color: '#FF6574' }},
            {value: 310, name: '邮件营销',itemStyle: { color: '#52c41a' }},
            {value: 234, name: '联盟广告',itemStyle: { color: '#FACE37' }},
            {value: 135, name: '视频广告',itemStyle: { color: '#6BC4B7' }},
            {value: 1548, name: '搜索引擎',itemStyle: { color: '#409eff' }}
        ],
        sales_ranking_trend:[
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    }
}
Mock.mock(/\/api\/card/, 'post', cardsData);//首页card数据
Mock.mock(/\/api\/shop/, 'post', shopsData)//首页门店销售数据
Mock.mock(/\/api\/table/, 'post', tableData)//首页热门搜索table展示
Mock.mock(/\/api\/echart/, 'post', echartData)//首页echart图表数据