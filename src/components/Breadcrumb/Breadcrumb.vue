<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(item,index) in levelList">
        <el-breadcrumb-item v-if="index === levelList.length -1" :key="index">{{ item.meta.title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="index" :to="{path:item.path}">{{ item.meta.title }}</el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
  export default {
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route(route) {
        if (route.path.startsWith('/redirect/')) {
          return
        }
        this.getBreadcrumb();
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      // 获取面包屑导航
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
        if (matched.length >= 1 && !this.isDashboard(matched[0])) {
          matched = [{path: '/dashboard', meta: {title: '首页'}}].concat(matched);
        }
        this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
      },
      // 判断是否是首页
      isDashboard(route) {
        const name = route && route.name;
        if (!name) return false;
        return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .app-breadcrumb{
    .el-breadcrumb__item{
      user-select: none;
    }
  }
</style>