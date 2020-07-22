<template>
  <section class="app-main">
    <transition name="el-fade-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>
<style lang="scss" scoped>
  .app-main {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #545c64;
  }
</style>
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