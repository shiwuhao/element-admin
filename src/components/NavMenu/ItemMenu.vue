<template>
  <el-menu-item :index="menu.path" :route="menu">
    <i :class="menu.meta.icon"/>
    <span slot="title">{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'ItemMenu',
    props: {
      menu: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: '',
      }
    },
  };
</script>