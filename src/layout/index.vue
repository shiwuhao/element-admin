<template>
  <el-container style="height: 100vh;">
    <el-aside :width="sidebar.collapse ? sidebar.collapseWidth : sidebar.width">
      <side-bar/>
    </el-aside>
    <el-container>
      <el-header class="header" height="80px" style="text-align: right; font-size: 12px;background: #3A71A8">
        <nav-bar/>
        <tag-view/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {SideBar, NavBar, TagView, Main} from './components'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      SideBar, NavBar, TagView, Main
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    }
  };
</script>
<style scoped>
  .el-header {
    padding: 0 0 !important;
  }

  .el-main {
    padding: 10px;
  }
</style>