<template>
  <el-submenu :index="menu.path" v-if="menu.children && menu.children.length > 1" popper-append-to-body>
    <template slot="title">
      <i :class="menu.meta.icon"/>
      <span>{{ menu.meta.title }}</span>
    </template>
    <template v-for="item in menu.children">
      <sub-menu :key="item.path" :menu="item"/>
    </template>
  </el-submenu>
  <item v-else :menu="menu.children && menu.children.length === 1 ? menu.children[0] : menu"/>
</template>

<script>
  import item from "@/layout/components/SideBar/item";

  export default {
    name: 'subMenu',
    components: {item},
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