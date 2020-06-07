<template>
  <el-submenu :index="menu.path" v-if="menu.children && menu.children.length > 1">
    <template slot="title">
      <i :class="menu.meta.icon"/>
      <span slot="title">{{ menu.meta.title }}</span>
    </template>
    <template v-for="(item,index) in menu.children">
      <menu-item :key="index" :menu="item"/>
    </template>
  </el-submenu>
  <item v-else :menu="menu"/>
</template>

<script>
  import item from "@/layout/components/SideBar/item";

  export default {
    components: {
      item
    },
    name: 'menuItem',
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