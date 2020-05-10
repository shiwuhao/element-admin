<template>
  <div>
    <template v-if="menu.children && menu.children.length > 1">
      <el-submenu ref="subMenu" :index="menu.path">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-for="(item,index) in menu.children">
          <menu-item :key="index" :menu="item" ></menu-item>
        </template>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item v-if="menu.children && menu.children.length === 1" :index="menu.children[0].meta.path" :route="menu">
        <template slot="title">
          <i :class="menu.children[0].meta.icon"></i>
          <span>{{ menu.children[0].meta.title }}</span>
        </template>
      </el-menu-item>

      <el-menu-item v-else :index="menu.path" :route="menu">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'menuItem',
    props: {
      menu: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: '',
      }
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>