<template>
  <el-menu
    class="sidebar"
    :default-active="activeMenu"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :unique-opened="uniqueOpened"
    :collapse-transition="collapseTransition"
    :collapse="isCollapse"
    :router="true"
    mode="vertical"
  >
    <menu-item v-for="(menu,index) in menus" :key="index" :menu="menu"/>
  </el-menu>
</template>
<style>
  .sidebar {
    width: 100%;
    height: 100%;
  }

  .sidebar:not(.el-menu--collapse) {
    width: 100%;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss';
  import menuItem from "@/layout/components/SideBar/menuItem";

  export default {
    components: {
      menuItem
    },
    data() {
      return {
        uniqueOpened: false, // 是否只保持一个子菜单的展开
        collapseTransition: true,// 是否开启折叠动画
      }
    },
    computed: {
      ...mapGetters(['sidebar', 'menus']),
      variables() {
        return {
          menuBg: '#545c64',
          menuText: '#fff',
          menuActiveText: '#ffd04b',
          ...variables,
        };
      },
      // 激活菜单
      activeMenu() {
        const route = this.$route;
        const {meta, path} = route;
        return meta.activeMenu ? meta.activeMenu : path;
      },
      // 是否水平折叠收起菜单
      isCollapse() {
        return !!this.sidebar.collapse;
      }
    },
  };
</script>