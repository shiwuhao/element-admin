<template>
 <span class="IntervalNumber">
    {{ counter }}
 </span>
</template>
<script>
    export default {
        name: 'IntervalNumber',
        props: {
            numberContent: Number
        },
        data () {
            return {
                counter: this.numberContent  || 0,
                timeTicket: null,
            }
        },
        mounted(){
            let time = 1000 //ms 数字滚动总时间
            let delayTime = 30 // ms 数字滚动间隔时间
            let divisions = time / delayTime

            this.asyncPrint(this.counter, divisions, delayTime)

        },
        methods:{
            timeOut(ms) {
                return new Promise((resolve) => {
                    this.timeTicket = setTimeout(resolve, ms)
                })
            },
            async asyncPrint(value, divisions, ms){
                for(let i=0; i< divisions; i++){
                    try {
                        await this.timeOut(ms);
                    } catch (err) {
                        console.log(err)
                    }

                    this.counter = Math.round(value / divisions * i);
                }

                this.counter = this.numberContent

                clearTimeout(this.timeTicket)
                this.timeTicket = null
            }
        }
    }
</script>