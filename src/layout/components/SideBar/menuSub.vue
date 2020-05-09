<template>
  <div>
    <template v-for="(item,index) in menus">
      <el-submenu ref="subMenu" :key="index" :index="item.path" popper-append-to-body>
        <menu-sub v-if="item.children && item.children.length > 0" :menus="item.children"></menu-sub>
        <menu-item v-else :item="item"></menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  import menuItem from "@/layout/components/SideBar/menuItem";

  export default {
    name: 'subMenu',
    components: {
      menuItem
    },
    props: {
      menus: {
        type: Array,
        required: true
      },
    },
    mounted() {
      console.log('this.item', this.item);
    },
  };
</script>