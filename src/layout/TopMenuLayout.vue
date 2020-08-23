<template>
  <el-container>
    <el-header style="background: red;padding: 0;">
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        mode="horizontal"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="background: #2c3b41;">
      <Main></Main>
    </el-main>
  </el-container>
</template>
<script>
  import { Main,} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import {mapGetters} from 'vuex';

  export default {
    name: 'TopMenuLayout',
    components: {
       Main
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
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      width: 100%;
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

  .main-wrapper {
    margin-top: 5px;
  }
</style>