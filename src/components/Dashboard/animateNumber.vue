<template>
 <span class="IntervalNumber">
    {{counter}}
 </span>
</template>
<script>
    export default {
        name: 'IntervalNumber',
        props: {
            numberContent:{
                   type: Number
            }
        },
        data () {
            return {
                counter: this.numberContent || 0
            }
        },
        watch: {
            numberContent(newVal){
                this.counter = newVal
            }
        }
    }
</script>