<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view/>
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

  .fixed-header+.app-main {
    padding-top: 50px;
  }
</style>
<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Main',
    computed: {
      ...mapState({
        cachedViews: state => state.tagViews.cachedViews
      }),
    },
  };
</script>