<template>
    <div class='el-home'>
        <div class="el-header">
            <el-row :gutter="14">
                <el-col :xs="14" :sm="12" :md="10" :lg="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>总销售额</span>
                            <el-tooltip class="item" effect="dark" content="指标说明" placement="top-start">
                                <SvgIcons icon="zhibiaoshuoming" fontSize="14px" color="rgba(0,0,0,.45)"
                                          style="float: right;margin-top: 4px"></SvgIcons>
                            </el-tooltip>
                        </div>
                        <CommonCard>
                            <div slot="number-header"><b>¥</b>
                                <AnimateNumber :number-content="Number(saleTotal.sales)"></AnimateNumber>
                            </div>
                            <div slot="contain-section">
                                <span style="margin-right:20px">周同比<b>{{saleTotal.week_rate}}</b></span>
                                <span>日同比<b>{{saleTotal.day_rate}}</b></span>
                            </div>
                            <div slot="number-footer">
                                <span>日均销售额¥<b>{{saleTotal.average_sales}}</b></span>
                            </div>
                        </CommonCard>

                    </el-card>
                </el-col>
                <el-col :xs="14" :sm="12" :md="10" :lg="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>访问量</span>
                            <SvgIcons icon="zhibiaoshuoming" fontSize="14px" color="rgba(0,0,0,.45)"
                                      style="float: right;margin-top: 4px"></SvgIcons>
                        </div>
                        <CommonCard>
                            <div slot="number-header">
                                <b>¥</b><AnimateNumber :number-content="Number(visits.sales)"></AnimateNumber>
                            </div>
                            <div slot="contain-section">
                                <EchartType :option="dailyVisitsOption"></EchartType>
                            </div>
                            <div slot="number-footer">
                                <span>日访问量<b>{{visits.day_visits}}</b></span>
                            </div>
                        </CommonCard>
                    </el-card>
                </el-col>
                <el-col :xs="14" :sm="12" :md="10" :lg="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>支付笔数</span>
                            <SvgIcons icon="zhibiaoshuoming" fontSize="14px" color="rgba(0,0,0,.45)"
                                      style="float: right;margin-top: 4px"></SvgIcons>
                        </div>
                        <CommonCard>
                            <div slot="number-header">
                                <b>¥</b><AnimateNumber :number-content="Number(paymentsNumber.sales)"></AnimateNumber>
                            </div>
                            <div slot="contain-section">
                                <EchartType :option="conversionRateOption"></EchartType>
                            </div>
                            <div slot="number-footer">
                                <span>转化率<b>{{paymentsNumber.inversion_rate}}</b></span>
                            </div>
                        </CommonCard>
                    </el-card>
                </el-col>
                <el-col :xs="14" :sm="12" :md="10" :lg="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>运营活动效果</span>
                            <SvgIcons icon="zhibiaoshuoming" fontSize="14px" color="rgba(0,0,0,.45)"
                                      style="float: right;margin-top: 4px"></SvgIcons>
                        </div>
                        <CommonCard>
                            <div slot="number-header">
                                <AnimateNumber :number-content="parseInt(activityEffect.sales)"></AnimateNumber><b>%</b>
                            </div>
                            <div slot="contain-section">
                                <el-progress :percentage="50"></el-progress>
                            </div>
                            <div slot="number-footer">
                                <span style="margin-right:20px">周同比<b>{{activityEffect.week_rate}}</b></span>
                                <span>日同比<b>{{activityEffect.day_rate}}</b></span>
                            </div>
                        </CommonCard>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="el-section">
            <el-card class="box-card">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="销售额" name="first" >
                        <div class="sales-ranking">
                            <el-row :gutter="14" type="flex" justify="space-between">
                                <el-col :span="18">
                                    <h4 style="text-indent: 18px">销售额排行</h4>
                                    <EchartType :option="salesRankingOption"></EchartType>
                                </el-col>
                                <el-col :span="6">
                                    <div class="shop-show">
                                        <h4>门店销售排行榜</h4>
                                        <dl v-for="(item,index) in shop" :key="index">
                                            <dt>{{index+1}}</dt>
                                            <dd>
                                                <span>{{item.title}}</span><span>{{item.number}}</span>
                                            </dd>
                                        </dl>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="访问量" name="second">
                        <div class="sales-ranking">
                            <el-row :gutter="14" type="flex" justify="space-between">
                                <el-col :span="18">
                                    <h4 style="text-indent: 18px">销售额趋势</h4>
                                    <EchartType :option="salesRankingTrendOption" ref="salesEchart"></EchartType>
                                </el-col>
                                <el-col :span="6">
                                    <div class="shop-show">
                                        <h4>门店销售排行榜</h4>
                                        <dl v-for="(item,index) in shop" :key="index">
                                            <dt>{{index+1}}</dt>
                                            <dd>
                                                <span>{{item.title}}</span><span>{{item.number}}</span>
                                            </dd>
                                        </dl>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
        <div class="el-footer">
            <el-row :gutter="12" class="el-row" type="flex">
                <el-col class="el-col" :xs="12" :sm="16" :md="20" :lg="24">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>线上热门搜索</span>
                            <SvgIcons icon="sangedian" fontSize="14px" color="rgba(0,0,0,.45)"
                                      style="float: right;margin-top: 4px"></SvgIcons>
                        </div>
                        <div>
                            <dynamic-table ref="table"
                                           :stripe="false"
                                           :border="true"
                                           :columns="tableColumns"
                                           :data="tableData"
                                           :loading="tableLoading"
                                           :paginate="tablePaginate"
                                           @change-page="changePage">
                            </dynamic-table>
                        </div>
                    </el-card>
                </el-col>
                <el-col class="el-col" :xs="12" :sm="16" :md="20" :lg="24">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>销售额类别占比</span>
                            <SvgIcons icon="sangedian" fontSize="14px" color="rgba(0,0,0,.45)"
                                      style="float: right;margin-top: 4px"></SvgIcons>
                        </div>
                        <div>
                            <h4 style="text-indent: 18px">销售额</h4>
                            <EchartType :option="salesTypeOption"></EchartType>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import Theme from "@/components/SettingDrawer/ThemeColor/Theme";
    import CommonCard from './commonCard';
    import AnimateNumber from '@/components/Dashboard/animateNumber';
    import DynamicTable from "@/components/Table/DynamicTable";
    import EchartType from "@/components/Echarts/EchartType";
    import SvgIcons from '@/components/Icons/icon';
    import echartOptions from '@/components/Echarts/echarts';
    import sales from '@/api/sales';

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            Theme,
            CommonCard,
            AnimateNumber,
            DynamicTable,
            EchartType,
            SvgIcons
        },
        data() {
            return {
                activeName: 'first',
                tableLoading: false,
                tableData: [{
                    rank: '14',
                    keywords: '王小虎',
                    num: '406',
                    gains: '4%'
                }, {
                    rank: '18',
                    keywords: '王小虎',
                    num: '431',
                    gains: '6%'
                }, {
                    rank: '39',
                    keywords: '王小虎',
                    num: '137',
                    gains: '13%'
                }, {
                    rank: '37',
                    keywords: '王小虎',
                    num: '798',
                    gains: '18%'
                }],
                tablePaginate: {},
                tableColumns: [
                    {
                        key: 'rank',
                        label: '排名',
                        sortable: true
                    },
                    {
                        key: 'keywords',
                        label: '搜索关键词',
                    },
                    {
                        key: 'num',
                        label: '用户数',
                    },
                    {
                        key: 'gains',
                        label: '周涨幅',
                        sortable: true
                    }
                ],
                activityEffect: {},
                paymentsNumber: {},
                saleTotal: {},
                visits: {},
                shop:[]
            }
        },
        mounted() {

        },
        computed: {
            //访问量
            dailyVisitsOption() {
                return echartOptions.dailyVisitsOption
            },
            //支付笔数
            conversionRateOption() {
                return echartOptions.conversionRateOption
            },
            //销售额排行
            salesRankingOption() {
                return echartOptions.salesRankingOption
            },
            //销售额趋势
            salesRankingTrendOption() {
                return echartOptions.salesRankingTrendOption
            },
            //销售额类别占比
            salesTypeOption() {
                return echartOptions.salesTypeOption
            }
        },
        created() {
            this.tablePaginate = {
                current_page: 2,
                from: 16,
                last_page: 5,
                path: "http://user-operate.juzifenqi.com:8080/api/users",
                per_page: 15,
                to: 30,
                total: 73
            }
            this.fetchCard();
            this.fetchShop();
        },
        methods: {
            //获取card数据
            fetchCard() {
                return sales.card().then(response => {
                    const {activity_effect, payments_number, sale_total, visits} = response.data.data;
                    [
                        this.activityEffect,
                        this.paymentsNumber,
                        this.saleTotal,
                        this.visits
                    ]
                        =
                        [
                            activity_effect,
                            payments_number,
                            sale_total,
                            visits
                        ]

                })
            },
            //获取销售门店数据
            fetchShop(){
                return sales.shop().then(response => {
                    this.shop = response.data.data;

                })
            },
            //切换销售额和访问量，自动调整图表大小
            handleClick(tab, event) {
                this.$nextTick(() => {
                    this.$refs.salesEchart.chart.resize()
                })
            },
            // 翻页事件
            changePage(page) {
                this.fetchData(page);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .el-header, .el-section, .el-footer {
        padding: 0 10px;
    }

    .el-header .box-card {
        margin-bottom: 8px;
        height: 206px;

        .clearfix {
            color: rgba(0, 0, 0, .45);
            font-size: 14px;
        }

        /deep/ #el-echart {
            margin-top: -80px;

            canvas {
                top: 38px !important;
            }
        }

        /deep/ .el-card__body {
            padding-top: 10px;
            padding-bottom: 12px;

            .el-number-header {
                span {
                    font-size: 30px;
                    color: #333;
                }
            }

            span {
                color: rgba(0, 0, 0, .65);
                font-size: 14px;
                font-variant: tabular-nums;

                b {
                    display: inline-block;
                    margin-left: 8px;
                    color: rgba(0, 0, 0, .85);
                    font-weight: 400;
                }
            }
        }
    }

    .el-section {
        margin-bottom: 8px;

        /deep/ .el-tabs__item {
            color: rgba(0, 0, 0, .65);
            font-size: 16px;
        }

        .sales-ranking {
            height: 407px;
            margin-top: -10px;

            /deep/ #el-echart {
                height: 300px !important;
            }

            h4 {
                color: rgba(0, 0, 0, .85);
                font-weight: 500;
            }

            .shop-show {
                float: right;
                margin-right: 35px;
                //   margin-top: -10px;
                dl {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    line-height: 26px;

                    dt {
                        border-radius: 20px;
                        display: inline-block;
                        font-size: 12px;
                        font-weight: 600;
                        margin-right: 24px;
                        height: 20px;
                        line-height: 20px;
                        width: 20px;
                        text-align: center;
                        background-color: #f5f5f5;
                    }

                    dd {
                        margin-left: -12px;

                        span {
                            color: rgba(0, 0, 0, .65);
                            font-size: 14px;
                            line-height: 22px;

                            &:first-child {
                                margin-right: 140px;
                            }
                        }
                    }
                }
            }

        }
    }

    .el-footer {
        padding-bottom: 25px;

        .clearfix {
            color: rgba(0, 0, 0, .85);
            font-weight: 500;
            font-size: 16px;
        }

        .box-card {
            height: 400px;

            h4 {
                margin-top: -8px;
            }

            /deep/ #el-echart {
                height: 340px !important;
                margin: -70px auto 0 auto;

            }
        }
    }

</style>