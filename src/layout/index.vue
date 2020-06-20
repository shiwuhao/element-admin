<template>
  <el-container style="height: 100vh;" id="home">
    <!--    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />-->
    <!--    <el-aside :width="sidebar.collapse ? sidebar.collapseWidth : sidebar.width">-->
    <el-aside width="auto">
      <side-bar/>
    </el-aside>
    <el-container :class="{'hasTagView':setting.tagView}">
      <el-header :class="{'fixed-header':setting.fixedHeader}" :height="setting.tagView ? '80px' : '50px'"
                 style="text-align: right; font-size: 12px;">
        <nav-bar/>
        <tag-view v-if="setting.tagView"/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {SideBar, NavBar, TagView, Main,} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import {mapGetters} from 'vuex';

  export default {
    name: 'Layout',
    components: {
      SideBar, NavBar, TagView, Main
    },
    mixins: [ResizeMixin],
    computed: {
      ...mapGetters([
        'device',
        'sidebar',
        'setting'
      ])
    },
    date() {
      return {
        tagView: false,
        drawer: false,
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";

  .el-header {
    padding: 0 0 !important;
  }

  .el-main {
    min-height: calc(100vh - 50px);
    padding: 10px;
  }

  .fixed-header + .el-main {
    padding-top: 50px;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hasTagView {
    .el-main {
      min-height: calc(100vh - 80px);
      padding: 10px;
    }

    .fixed-header + .el-main {
      padding-top: 80px;
    }
  }
</style>