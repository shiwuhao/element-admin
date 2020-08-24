<template>
  <side-menu-layout v-if="setting.layout === 'side'"/>
  <top-menu-layout v-else/>
</template>
<script>

  import SideMenuLayout from "@/layout/SideMenuLayout";
  import TopMenuLayout from "@/layout/TopMenuLayout";
  import {mapGetters} from 'vuex'

  export default {
    name: 'Layout',
    components: {
      SideMenuLayout, TopMenuLayout
    },
    computed: {
      ...mapGetters(['setting']),
    }
  };
</script>
