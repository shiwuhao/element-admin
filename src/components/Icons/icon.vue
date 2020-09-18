<template>
    <svg class="icon" aria-hidden="true"  :color="color" :font-size="fontSize">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
    export default {
        name: 'SvgIcon',
        props: {
            icon: {
                type: String,
                required: true
            },
            fontSize: {
                type: String
            },
            color: {
                type: String
            }
        },
        data() {
            return {}
        },
        computed: {
            iconName(){
                return `#icon-${this.icon}`
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>