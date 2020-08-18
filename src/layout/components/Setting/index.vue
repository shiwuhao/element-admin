<template>
  <el-drawer
    title="系统布局设置"
    :visible.sync="visible"
    :direction="direction"
    :size="size"
    :show-close="showClose"
    :append-to-body="true"
  >
    <div class="drawer-container">
      <div class="drawer-item">
        <span>主题色</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>

      <div class="drawer-item flex-row-center">
        <span>Tag视图</span>
        <el-switch v-model="tagView" class="drawer-switch"/>
      </div>

      <div class="drawer-item">
        <span>固定Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch"/>
      </div>

      <div class="drawer-item">
        <span>侧边栏Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch"/>
      </div>
    </div>

  </el-drawer>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        direction: 'rtl',
        size: '260px',
        showClose: true,
        color1: '',
      }
    },
    computed: {
      sidebarLogo: {
        get() {
          return this.$store.state.setting.sidebarLogo;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'sidebarLogo');
        }
      },
      fixedHeader: {
        get() {
          return this.$store.state.setting.fixedHeader;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'fixedHeader');
        }
      },
      tagView: {
        get() {
          return this.$store.state.setting.tagView;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'tagView');
        }
      }
    },
    methods: {
      toggleDrawer() {
        this.visible = !this.visible;
      },
      themeChange() {

      }
    }
  };
</script>
<style lang="scss" scoped>
  .drawer-container {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;

    .drawer-item {
      color: rgba(0, 0, 0, .65);
      font-size: 14px;
      padding: 12px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  /*/deep/ :focus {*/
  /*  outline: 0;*/
  /*}*/
</style>