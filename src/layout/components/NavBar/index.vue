<template>
  <div class="navBar">
    <div class="left">
      <div class="collapse" @click="toggleSideBar">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
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
      <i class="iconfont icon-more-vertical right-item"></i>
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

        i.el-icon-s-fold {
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
      .right-item{
        padding: 0 10px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        size: "small",
      }
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    }
  };
</script>