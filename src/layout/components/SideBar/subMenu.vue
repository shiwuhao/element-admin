<template>
  <div class="subMenu">
    <el-submenu :index="menu.path" v-if="menu.children && menu.children.length > 1" popper-append-to-body>
      <template slot="title">
        <i :class="menu.meta.icon"/>
        <span>{{ menu.meta.title }}</span>
      </template>
      <template v-for="child in menu.children">
        <sub-menu v-if="child.children && child.children.length > 1" :menu="item" :key="child.path"/>
        <item v-else :menu="child" :key="child.path"/>
      </template>
    </el-submenu>
    <item v-else :menu="menu.children && menu.children.length === 1 ? menu.children[0] : menu"/>
  </div>
</template>
<style lang="scss">
  .subMenu>.el-menu-item {
    padding-left: 15px !important;
  }
  .el-menu--collapse > div > .el-submenu > .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }

  .el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
</style>
<script>
  import item from "@/layout/components/SideBar/item";
  import FixiOSBug from './FixiOSBug'

  export default {
    name: 'subMenu',
    components: {item},
    mixins: [FixiOSBug],
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