<template>
  <el-menu-item :index="menuItem.path" :route="menuItem">
    <i :class="menuItem.meta.icon"/>
    <span slot="title">{{ menuItem.meta.title }}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: 'item',
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
    computed: {
      menuItem() {
        return this.menu.children && this.menu.children.length === 1 ? this.menu.children[0] : this.menu;
      }
    },
    methods: {},
  };
</script>