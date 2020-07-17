<template>
  <div class="navBar">
    <div class="left">
      <div class="collapse" @click="toggleSideBar">
        <i :class="[sidebar.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"/>
      </div>
      <div class="breadcrumb">
        <breadcrumb/>
      </div>
    </div>
    <div class="right">
      <el-dropdown class="right-item">
        <el-avatar :size="size" :src="circleUrl">武浩</el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="iconfont icon-more-vertical setting" @click="toggleSetting"/>
      <setting ref="setting"/>
    </div>
  </div>
</template>
<style lang="scss">
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .collapse {
        padding: 0 15px;

        i {
          cursor: pointer;
          font-size: 20px;
        }
      }

      .breadcrumb {
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .setting {
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
</style>

<script>

  import {Setting} from '@/layout/components';
  import Breadcrumb from './breadcrumb'

  import {mapGetters} from 'vuex';

  export default {
    name: 'Navbar',
    components: {Setting, Breadcrumb},
    data() {
      return {
        drawer: true,
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        size: "small",
      }
    },
    computed: {
      ...mapGetters(['sidebar']),
    },
    methods: {
      toggleSetting() {
        this.$refs['setting'].toggleDrawer();
      },
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    }
  };
</script>