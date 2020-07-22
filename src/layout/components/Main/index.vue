<template>
  <section class="app-main">
    <transition name="el-zoom-in-center">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Main',
    computed: {
      ...mapGetters(['cachedViews']),
      key() {
        return this.$route.path
      }
    },
  };
</script>