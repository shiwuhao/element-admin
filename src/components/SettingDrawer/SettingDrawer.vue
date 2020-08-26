<template>
  <div>
    <div class="icon-wrap flex-col-center" :class="{'fixed':!navBar}" @click="toggleDrawer">
      <i class="iconfont icon-more-vertical icon-setting"/>
    </div>
    <!--    <div class="icon-setting-fixed">-->
    <!--      <i class="iconfont icon-more-vertical" v-if="!visible"/>-->
    <!--      <i class="iconfont icon-more-vertical" v-else/>-->
    <!--    </div>-->
    <el-drawer
      title="系统布局设置"
      :visible.sync="visible"
      :direction="direction"
      :size="size"
      :show-close="showClose"
      :append-to-body="true"
    >
      <div class="drawer-container">
        <div class="setting-group">
          <h3 class="setting-title">整体风格设置</h3>
          <div class="flex-row-left">
            <template v-for="(item,index) in menuThemes">
              <el-tooltip :key="index" effect="dark" :content="item.label" placement="top-start">
                <div class="setting-item" @click="handleMenuTheme('dark')">
                  <img :src="item.img"/>
                  <i class="el-icon-check" v-if="item.theme === selectedMenuTheme"/>
                </div>
              </el-tooltip>
            </template>
          </div>
        </div>
        <el-divider/>
        <div class="setting-group">
          <h3 class="setting-title">主题色</h3>
          <div style="height: 20px" class="flex-row-justify">
            <el-tooltip v-for="(item, index) in colorList" :key="index" :content="item.key" placement="top-start">
              <el-tag class="color-block" :color="item.color" :disable-transitions="false">
                <i class="el-icon-check" v-if="item.color === primaryColor"/>
              </el-tag>
            </el-tooltip>
          </div>
        </div>
        <el-divider/>
        <div class="setting-group">
          <h3 class="setting-title">导航模式</h3>
          <div class="flex-row-left">
            <template v-for="(item,index) in layoutMenus">
              <el-tooltip :key="index" effect="dark" :content="item.label" placement="top-start">
                <div class="setting-item" @click="handleChangeNav(item.theme)">
                  <img :src="item.img"/>
                  <i class="el-icon-check" v-if="item.theme === selectedMenuTheme"/>
                </div>
              </el-tooltip>
            </template>
          </div>
        </div>
        <el-divider/>
        <div class="setting-group">
          <h3 class="setting-title">内容区域</h3>
          <div>
            <div class="drawer-item flex-row-center">
              <span>顶栏</span>
              <el-switch v-model="navBar" class="drawer-switch"/>
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
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        visible: false,
        direction: 'rtl',
        size: '260px',
        showClose: true,
        color1: '',
        selectedMenuTheme: 'dark',
        menuThemes: [
          {
            theme: 'light',
            label: '亮色菜单风格',
            img: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
            checked: false
          },
          {
            theme: 'dark',
            label: '暗色菜单风格',
            img: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
            checked: false
          },
          {
            theme: 'other',
            label: '暗色菜单风格',
            img: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
            checked: false
          }
        ],
        primaryColor: '#F5222D',
        colorList: [
          {key: '薄暮', color: '#F5222D'},
          {key: '火山', color: '#FA541C'},
          {key: '日暮', color: '#FAAD14'},
          {key: '明青', color: '#13C2C2'},
          {key: '极光绿', color: '#52C41A'},
          {key: '拂晓蓝', color: '#1890FF'},
          {key: '极客蓝', color: '#2F54EB'},
          {key: '酱紫', color: '#722ED1'}
        ],
        layoutMenus: [
          {
            theme: 'sideMenu',
            label: '侧边菜单布局',
            img: 'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
            checked: false
          },
          {
            theme: 'topMenu',
            label: '顶部菜单布局',
            img: 'https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg',
            checked: false
          },
          {
            theme: 'sideMenu',
            label: '混合菜单布局',
            img: 'https://gw.alipayobjects.com/zos/antfincdn/x8Ob%26B8cy8/LCkqqYNmvBEbokSDscrm.svg',
            checked: false
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['setting']),
      navBar: {
        get() {
          return this.setting.navBar;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'navBar');
        }
      },
      sidebarLogo: {
        get() {
          return this.setting.sidebarLogo;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'sidebarLogo');
        }
      },
      fixedHeader: {
        get() {
          return this.setting.fixedHeader;
        },
        set() {
          this.$store.dispatch('setting/toggleSetting', 'fixedHeader');
        }
      },
      tagView: {
        get() {
          return this.setting.tagView;
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
      handleMenuTheme() {

      },
      themeChange() {

      },
      handleChangeNav(theme) {
        this.$store.dispatch('setting/changeSetting', 'layout', theme);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .icon-wrap {
    width: 35px;
    height: 35px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;

    &.fixed {
      position: fixed;
      top: -9px;
      right: -9px;
      transform: rotate(-45deg);
      border-radius: 0;

      &:hover {
        background: none;
      }
    }

    &:hover {
      background: #F2F6FC;
    }

    .icon-setting {
      display: block;
      font-size: 20px;
      padding: 0 10px;
    }

    .icon-setting:hover {
      /*background: #30B08F;*/
      border-radius: 5px;
    }
  }

  .drawer-container {
    padding: 0 24px 24px 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;

    .setting-group {
      .setting-title {
        font-size: 14px;
        color: rgba(0, 0, 0, .85);
      }

      .setting-item {
        position: relative;
        margin-right: 16px;
        cursor: pointer;

        img {
          width: 48px;
        }

        i.el-icon-check {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -8px;
          margin-top: -8px;
          color: #1890ff;
          font-size: 16px;
          font-weight: bolder;
        }
      }

      .color-block {
        width: 20px;
        height: 20px;
        border-radius: 2px;
        float: left;
        cursor: pointer;
        margin-right: 8px;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
        color: #fff;
        font-weight: 700;

        i.el-icon-check {
          font-size: 14px;
        }
      }
    }

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

  .icon-setting-fixed {
    position: absolute;
    top: 240px;
    /*background: #1890ff;*/
    width: 48px;
    height: 48px;
    right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    z-index: 1001;
    text-align: center;
    font-size: 16px;
    border-radius: 4px 0 0 4px;
    background: red;

    i {
      color: rgb(255, 255, 255);
      font-size: 20px;
    }
  }
</style>