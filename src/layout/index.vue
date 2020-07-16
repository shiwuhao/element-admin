<template>
  <el-container :class="containerClass" style="height: 100vh;">
    <!--    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />-->
    <!--    <el-aside :width="sidebar.collapse ? sidebar.collapseWidth : sidebar.width">-->
    <el-aside width="auto">
      <side-bar/>
    </el-aside>
    <el-container class="main-container" :class="{'hasTagView':setting.tagView}">
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
      ]),
      containerClass() {
        return {
          'hide-sidebar': this.sidebar.collapse,
          'open-sidebar': !this.sidebar.collapse,
          'without-animation': this.sidebar.withoutAnimation,
          'mobile': this.device === 'mobile'
        }
      },
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

  .main-container {
    min-height: 100%;
    position: relative;
    flex-direction: column;
  }

  .el-header {
    padding: 0 0 !important;
  }

  .el-main {
    /*min-height: calc(100vh - 50px);*/
    /*padding: 10px;*/
    /*overflow: hidden;*/
  }
  .el-aside{
    transition:all 0s ease 0s;
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
  .hide-sidebar .fixed-header {
    width: calc(100% - 55px);
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