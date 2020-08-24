<template>
  <el-container style="min-height: 100vh;">
    <el-header class="header flex-row-justify">
      <div class="fluid flex-row-justify">
        <SideBarBak mode="horizontal" />
        <NavBar />
      </div>
    </el-header>
    <el-main class="main">
      <Main></Main>
    </el-main>
  </el-container>
</template>
<script>
  import {SideBarBak, NavBar, TagView, Main} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import {mapGetters} from 'vuex';

  export default {
    name: 'TopMenuLayout',
    components: {
      SideBarBak, NavBar, TagView, Main
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
  .header {
    padding: 0;
    background: #001529;
  }

  .main {
    background: #3A71A8;
  }

  .fluid {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>