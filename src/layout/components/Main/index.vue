<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>
<style lang="scss" scoped>
  .app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #545c64;
  }

  .fixed-header + .app-main {
    padding-top: 50px;
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