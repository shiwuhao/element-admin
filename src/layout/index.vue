<template>
  <el-container style="height: 100vh;">
    <el-aside width="165px">
      <sidebar></sidebar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {Sidebar, Main} from './components'

  export default {
    components: {
      Sidebar, Main
    },
  };
</script>