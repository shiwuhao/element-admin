<template>
  <div class="sidebar-wrapper" :class="{'has-logo':setting.sidebarLogo}">
    <logo v-if="setting.sidebarLogo" :collapse="isCollapse"/>
    <el-scrollbar>
      <el-menu
        class="menu"
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
    </el-scrollbar>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss';
  import subMenu from "@/layout/components/SideBar/subMenu";
  import logo from './logo'


  export default {
    components: {
      subMenu, logo
    },
    data() {
      return {
        uniqueOpened: false, // 是否只保持一个子菜单的展开
        collapseTransition: true,// 是否开启折叠动画
      }
    },
    computed: {
      ...mapGetters(['setting', 'sidebar', 'menus']),
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