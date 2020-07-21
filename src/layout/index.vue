<template>
  <el-container :class="containerClass" class="app-container">
    <el-aside width="auto">
      <side-bar/>
    </el-aside>
    <el-scrollbar>
      <el-container class="main-container" :class="mainContainerClass">
        <el-header class="header-container">
          <nav-bar/>
          <tag-view v-if="setting.tagView"/>
        </el-header>
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-scrollbar>
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
      mainContainerClass() {
        return {
          'hasTagView': this.setting.tagView,
          'fixed-header': this.setting.fixedHeader,
        }
      }
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

  .app-container {
    height: 100vh;
  }

  .main-container {

    .header-container {
      height: $navBarHeight !important;
      padding: 0;
    }

    .el-main {
      padding: 0 10px;
      min-height: calc(100vh - #{$navBarHeight});
    }
  }

  .main-container.hasTagView {
    .header-container {
      height: $navBarTagViewHeight !important;
    }

    .el-main {
      min-height: calc(100vh - #{$navBarTagViewHeight});
    }
  }

  .main-container.fixed-header > .header-container {
    height: $navBarHeight !important;
    padding: 0;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .main-container.fixed-header .el-main {
    padding-top: $navBarHeight;
  }

  .main-container.fixed-header.hasTagView .el-main {
    padding-top: $navBarTagViewHeight;
  }

  .hide-sidebar .fixed-header .header-container {
    width: calc(100% - #{$sideBarCollapseWidth});
  }

  .el-scrollbar {
    width: 100%;
    height: 100%;

    .el-scrollbar__view {
      height: 100%;
    }
  }
</style>