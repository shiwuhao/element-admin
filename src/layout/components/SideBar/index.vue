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
    <sub-menu v-for="menu in menus" :index="menu.path" :key="menu.path" :menu="menu"/>
  </el-menu>
</template>
<style lang="scss">
  .sidebar {
    height: 100%;

    > .el-menu-item {
      padding-left: 15px !important;
    }

    .el-tooltip, .el-submenu__title {
      padding-left: 15px !important;
    }

    .el-submenu .el-menu-item {
      min-width: 165px;
    }
  }

  .sidebar.el-menu--collapse {
    width: 55px;
  }

  .sidebar:not(.el-menu--collapse) {
    width: 165px;
  }

</style>

<script>
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss';
  import subMenu from "@/layout/components/SideBar/subMenu";


  export default {
    components: {
      subMenu
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