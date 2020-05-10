<template>
  <el-menu-item :index="menu.path" :route="menu">
    <template slot="title">
      <i :class="menu.meta.icon"></i>
      <span>{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'item',
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
    data() {
      return {};
    },
    methods: {},
  };
</script>