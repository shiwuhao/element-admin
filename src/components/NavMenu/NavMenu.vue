<template>
  <div class="sidebar-wrapper" :class="{'has-logo':setting.sidebarLogo}">
<!--        <logo v-if="setting.sidebarLogo" :collapse="isCollapse"/>-->
    <el-scrollbar>
      <el-menu
        :class="mode === 'vertical'? 'menu-vertical' : 'menu-horizontal'"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="uniqueOpened"
        :collapse-transition="collapseTransition"
        :collapse="mode === 'vertical' ? isCollapse : false"
        :router="true"
        :mode="mode">
        <sub-menu v-for="menu in menus" :index="menu.path" :key="menu.path" :menu="menu"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss';
  import SubMenu from "@/components/NavMenu/SubMenu";
  import Logo from "@/components/Logo/Logo";


  export default {
    name: 'NavMenu',
    components: {
      SubMenu, Logo
    },
    props: {
      mode: {
        type: String,
        default: 'vertical'
      }
    },
    data() {
      return {
        uniqueOpened: true, // 是否只保持一个子菜单的展开
        collapseTransition: true,// 是否开启折叠动画
      }
    },
    computed: {
      ...mapGetters(['setting', 'sidebar', 'menus', 'device']),
      variables() {
        return {
          menuBg: '#222d32',
          menuText: '#fff',
          menuActiveText: this.setting.primaryColor,
          // ...variables,
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
<style lang="scss" scoped>
  .nav-menu {
    width: 100%;
    height: 100vh;

    .el-menu {
      height: 100vh;
    }
  }
</style>