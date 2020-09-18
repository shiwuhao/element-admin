/*
 用到的echart图表基础配置
*/

//折线图 area-pieces
const dailyVisitsOption = {
    xAxis: {
        type: 'category',
            boundaryGap: false,
            show: false
    },
    yAxis: {
        show: false,
            type: 'value',
    },
    visualMap: {
        type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
            gt: 0,
            lt: 14,
            color: '#409eff'
        }]
    },
    grid: {
        x: 14
    },
    series: [
        {
            type: 'line',
            smooth: 0.1,
            symbol: 'none',
            lineStyle: {
                color: '#409eff',
                width: 0
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
            },
            areaStyle: {},
            data: [

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
                ['2019-10-18', 100],
            ]
        }
    ]
};
//柱状图
const conversionRateOption = {
    color: ['#409eff'],
        tooltip: {
        trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x: 0,
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
        yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
        series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            data: [400, 302, 600, 334, 390, 330, 520]
        }
    ]
};
//柱状图
const salesRankingOption =  {
    color: ['#409eff'],
        tooltip: {
        trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
        yAxis: [
        {
            type: 'value'
        }
    ],
        series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
//饼图
const salesTypeOption = {
    tooltip: {
        trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
            bottom: "0",
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问',itemStyle: { color: '#FF6574' }},
                {value: 310, name: '邮件营销',itemStyle: { color: '#52c41a' }},
                {value: 234, name: '联盟广告',itemStyle: { color: '#FACE37' }},
                {value: 135, name: '视频广告',itemStyle: { color: '#6BC4B7' }},
                {value: 1548, name: '搜索引擎',itemStyle: { color: '#409eff' }}
            ]
        }
    ]
};
//折线图
const salesRankingTrendOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
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
export default  {
    dailyVisitsOption,
    conversionRateOption,
    salesRankingOption,
    salesTypeOption,
    salesRankingTrendOption
}
