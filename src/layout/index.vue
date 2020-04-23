<template>
  <el-container style="height: 100vh;">
    <el-aside width="165px">
      <sidebar></sidebar>
    </el-aside>

    <el-container>
      <el-header class="header" height="80px" style="text-align: right; font-size: 12px;background: #3A71A8">
        <navbar/>
        <tag-view/>
      </el-header>

      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {Sidebar, Navbar, TagView, Main} from './components'

  export default {
    components: {
      Sidebar, Navbar, TagView, Main
    },
  };
</script>
<style scoped>
  .el-header{
    padding: 0 0 !important;
  }
  .el-main {
    padding: 10px;
  }
</style>