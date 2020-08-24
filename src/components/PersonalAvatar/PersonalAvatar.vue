<template>
  <div class="avatar">
    <el-dropdown class="right-item">
      <el-avatar :size="size" :src="circleUrl">武浩</el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        circleUrl: '',
        size: 'small',
      };
    }
  };
</script>
<style lang="scss" scoped>
  .avatar {
    font-size: 10px;
    -webkit-transform: scale(0.8);
    cursor: pointer;
  }
</style>