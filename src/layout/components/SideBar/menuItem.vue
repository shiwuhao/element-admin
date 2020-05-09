<template>
  <el-menu-item :index="item.fullPath">
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta ? item.meta.title : 'no title' }}</span>
    </template>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'menuItem',
    props: {
      item: {
        type: Object,
        required: true
      },
    },
    mounted() {
      console.log('this.item', this.item);
    },
  };
</script>