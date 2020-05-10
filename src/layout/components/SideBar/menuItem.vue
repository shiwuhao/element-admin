<template>
  <div>
    <template v-if="menu.children && menu.children.length > 1">
      <el-submenu ref="subMenu" :index="menu.path">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-for="(item,index) in menu.children">
          <menu-item :key="index" :menu="item"></menu-item>
        </template>
      </el-submenu>
    </template>
    <template v-else>
      <item v-if="menu.children && menu.children.length === 1" :menu="menu.children[0]"></item>
      <item v-else :menu="menu"></item>
    </template>
  </div>
</template>

<script>
  import item from "@/layout/components/SideBar/item";

  export default {
    components: {
      item
    },
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