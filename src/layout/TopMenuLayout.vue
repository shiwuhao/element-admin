<template>
  <el-container style="min-height: 100vh;">
    <el-header class="header">
      <el-menu
        class="fluid"
        default-active="2"
        background-color="#001529"
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
    <el-main class="main">
      <Main></Main>
    </el-main>
  </el-container>
</template>
<script>
  import {Main,} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import {mapGetters} from 'vuex';
  import logo from "@/layout/components/SideBar/logo";

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
  .header{
    padding: 0;
    background: #001529;
  }
  .main{
    background: #3A71A8;
  }
  .fluid{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>