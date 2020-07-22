<template>
  <el-container :class="containerClass" class="app-container">
    <div v-if="device==='mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside"/>
    <el-aside width="auto" class="sidebar-container" :class="{'collapse':isCollapse}">
      <side-bar/>
    </el-aside>
    <el-scrollbar>
      <el-container class="main-container" :class="mainContainerClass">
        <el-header class="header-container">
          <nav-bar/>
          <tag-view v-if="setting.tagView"/>
        </el-header>
        <el-main class="main-wrapper">
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
          // 'without-animation': this.sidebar.withoutAnimation,
          'mobile': this.device === 'mobile'
        }
      },
      mainContainerClass() {
        return {
          'has-tag-view': this.setting.tagView,
          'fixed-header': this.setting.fixedHeader,
        }
      },
      // 是否水平折叠收起菜单
      isCollapse() {
        return !!this.sidebar.collapse;
      }
    },
    date() {
      return {
        tagView: false,
        drawer: false,
      }
    },
    methods: {
      // 点击遮罩区域关闭sidebar
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar')
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

  .main-container.has-tag-view {
    .header-container {
      height: $navBarTagViewHeight !important;
    }

    .el-main {
      min-height: calc(100vh - #{$navBarTagViewHeight});
    }
  }

  // 固定header
  .main-container.fixed-header {
    .header-container {
      height: $navBarHeight;
      padding: 0;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - #{$sideBarWidth});
      transition: width 0.28s;
    }

    .el-main {
      padding-top: $navBarHeight;
    }

    &.has-tag-view .el-main {
      padding-top: $navBarTagViewHeight;
    }
  }
  // 手机端
  .mobile {
    .fixed-header {
      .header-container {
        width: 100% !important;
      }
    }

    .sidebar-container {
      position: absolute;
      height: 100vh;
      z-index: 999;
    }
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

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>