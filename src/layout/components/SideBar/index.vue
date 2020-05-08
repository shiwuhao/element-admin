<template>
  <el-menu
    class="sidebar"
    @open="handleOpen"
    @close="handleClose"
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
    <el-submenu index="1">
      <template slot="title" >
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group >
        <template slot="title">分组一</template>
        <el-menu-item index="/about">about</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled >
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<style>
  .sidebar {
    width: 100%;
    height: 100%;
  }

  .sidebar:not(.el-menu--collapse) {
    /*width: 100%;*/
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss';

  export default {
    data() {
      return {
        uniqueOpened: false, // 是否只保持一个子菜单的展开
        collapseTransition: true,// 是否开启折叠动画
        menus: [],
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'tagViews'
      ]),
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
        const route = this.$route
        const {meta, path} = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      // 是否水平折叠收起菜单
      isCollapse() {
        console.log(this.sidebar.collapse);
        return !!this.sidebar.collapse;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(this.device);
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      to(){
        console.log(111);
        this.$router.push({name:'about'})
      }
    }
  };
</script>