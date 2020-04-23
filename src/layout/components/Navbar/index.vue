<template>
  <div class="navBar">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>
<style>
  .navBar {
    height: 50px;
    background: #30B08F;
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
      ...mapGetters(['sidebar']),
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
        console.log(this.sidebar);
        return this.sidebar;
        // return true;
        // return this.$store.app.sidebar.collapse;
        // return this.sidebar.collapse;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>