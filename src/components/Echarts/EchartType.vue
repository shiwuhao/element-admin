<template>
    <div>
        <div  id="el-echart " style="width: 100%;height: 100%;" ref="elEchart"></div>
    </div>
  </template>
<script>
    export default {
        props:{
            // 业务数据
            option: {
                default: () => []
            },
        },
        data() {
            return {
                chart: null
            };
        },
        watch: {
            dataList: {
                deep: true,
                handler: () => this.updateChartView
            }
        },
        mounted() {
            this.chart = this.$echarts.init(this.$refs.elEchart);
            this.updateChartView();
            window.addEventListener("resize", this.handleWindowResize);
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.handleWindowResize);
        },
        methods:{
            updateChartView() {
                if (!this.chart) return;
                this.chart.setOption(this.option);
            },
            /**
             * 当窗口缩放时，echart动态调整自身大小
             */
            handleWindowResize() {
                if (!this.chart) return;
                this.chart.resize();
            }
        }
    }
</script>