<template>
  <div class="tag-view">
    <scroll-panel class="scroll-container">
      <el-tag
        class="tag-item"
        v-for="item in visitedViews"
        :key="item.label"
        :type="item.type"
        :closable="true"
        :effect="item.effect"
        :color="item.color"
        @contextmenu.prevent.native="openContextmenu(item,$event)"
      >
        {{ item.label }}
      </el-tag>
    </scroll-panel>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .tag-view {
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    height: 30px;
    text-align: left;

    .scroll-container {
      line-height: 30px;

      .tag-item {
        margin: 0 2px;
        cursor: pointer;
        font-weight: bolder;
      }
    }

    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 3000;
      position: absolute;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>

<script>
  import scrollPanel from "./scrollPanel";
  import path from 'path';
  import {mapGetters} from 'vuex';

  export default {
    components: {
      scrollPanel
    },
    data() {
      return {
        items: [
          {type: 'info', label: '标签1', effect: 'plain'},
          {type: 'success', label: '标签2', effect: 'dark', color: '#42b983'},
          {type: 'info', label: '标签3', effect: 'plain'},
          {type: 'info', label: '标签4', effect: 'plain'},
          {type: 'info', label: '标签5', effect: 'plain'},
          {type: 'info', label: '标签6', effect: 'plain'},
          {type: 'info', label: '标签7', effect: 'plain'},
          {type: 'info', label: '标签8', effect: 'plain'},
          {type: 'info', label: '标签9', effect: 'plain'},
          {type: 'info', label: '标签10', effect: 'plain'},
          {type: 'info', label: '标签11', effect: 'plain'},
          {type: 'info', label: '标签12', effect: 'plain'},
          {type: 'info', label: '标签13', effect: 'plain'},
          {type: 'info', label: '标签14', effect: 'plain'},
          {type: 'info', label: '标签15', effect: 'plain'},
          {type: 'info', label: '标签16', effect: 'plain'},
          {type: 'info', label: '标签17', effect: 'plain'},
          {type: 'info', label: '标签18', effect: 'plain'},
          {type: 'info', label: '标签19', effect: 'plain'},
          {type: 'info', label: '标签20', effect: 'plain'},
          {type: 'info', label: '标签21', effect: 'plain'},
          {type: 'info', label: '标签22', effect: 'plain'},
          {type: 'info', label: '标签23', effect: 'plain'},
          {type: 'info', label: '标签24', effect: 'plain'},
          {type: 'info', label: '标签25', effect: 'plain'},
          {type: 'info', label: '标签26', effect: 'plain'},
          {type: 'info', label: '标签27', effect: 'plain'},
          {type: 'info', label: '标签28', effect: 'plain'},
          {type: 'info', label: '标签29', effect: 'plain'},
          {type: 'info', label: '标签30', effect: 'plain'},
          {type: 'info', label: '标签31', effect: 'plain'},
          {type: 'info', label: '标签32', effect: 'plain'},
          {type: 'info', label: '标签33', effect: 'plain'},
          {type: 'info', label: '标签34', effect: 'plain'},
          {type: 'info', label: '标签35', effect: 'plain'},
          {type: 'info', label: '标签36', effect: 'plain'},
          {type: 'info', label: '标签37', effect: 'plain'},
          {type: 'info', label: '标签38', effect: 'plain'},
          {type: 'info', label: '标签39', effect: 'plain'},
          {type: 'info', label: '标签40', effect: 'plain'},
          {type: 'info', label: '标签41', effect: 'plain'},
          {type: 'info', label: '标签42', effect: 'plain'},
          {type: 'info', label: '标签43', effect: 'plain'},
          {type: 'info', label: '标签44', effect: 'plain'},
          {type: 'info', label: '标签45', effect: 'plain'},
          {type: 'info', label: '标签46', effect: 'plain'},
          {type: 'info', label: '标签47', effect: 'plain'},
        ],
        visible: false,
        top: 0,
        left: 0,
        selectedTag: {},
        affixTags: []
      }
    },
    computed: {
      ...mapGetters(['visitedViews', 'routes']),
    },
    watch: {
      visible(value) {
        if (value) {
          document.body.addEventListener('click', this.closeContextmenu)
        } else {
          document.body.removeEventListener('click', this.closeContextmenu)
        }
      }
    },
    mounted() {
      this.initTagViews();
    },
    methods: {
      // 初始化标签视图
      initTagViews() {
        console.log(this.routes);
        const affixTags = this.affixTags = this.filterAffixTags(this.routes);
        for (const tag of affixTags) {
          // Must have tag name
          if (tag.name) {
            this.$store.dispatch('tagView/addVisitedView', tag)
          }
        }
      },
      // 判断标签是否需要固定
      isAffix(tag) {
        return tag.meta && tag.meta.affix
      },
      // 过滤需要固定的标签
      filterAffixTags(routes, basePath = '/') {
        let tags = []
        routes.forEach(route => {
          if (route.meta && route.meta.affix) {
            const tagPath = path.resolve(basePath, route.path)
            tags.push({
              fullPath: tagPath,
              path: tagPath,
              name: route.name,
              meta: {...route.meta}
            })
          }
          if (route.children) {
            const tempTags = this.filterAffixTags(route.children, route.path)
            if (tempTags.length >= 1) {
              tags = [...tags, ...tempTags]
            }
          }
        })
        return tags
      },
      // 开启右键菜单
      openContextmenu(tag, e) {
        const menuMinWidth = 100, marginLeft = 0;
        const maxLeft = window.screen.availWidth - menuMinWidth + marginLeft;
        this.left = e.clientX > maxLeft ? maxLeft : e.clientX;
        this.top = e.clientY;
        this.visible = true;
        this.selectedTag = tag
      },
      // 关闭右键菜单
      closeContextmenu() {
        this.visible = false;
      },
      // 刷新选中标签页面
      refreshSelectedTag(view) {
        this.$store.dispatch('tagsView/delCachedView', view).then(() => {
          const {fullPath} = view
          this.$nextTick(() => {
            this.$router.replace({
              path: '/redirect' + fullPath
            })
          })
        })
      },
      // 关闭选中标签页面
      closeSelectedTag(view) {
        this.$store.dispatch('tagsView/delView', view).then(({visitedViews}) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view)
          }
        })
      },
      // 关闭其他标签
      closeOthersTags() {
        this.$router.push(this.selectedTag)
        this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
          this.moveToCurrentTag()
        })
      },
      // 关闭所有标签
      closeAllTags(view) {
        this.$store.dispatch('tagsView/delAllViews').then(({visitedViews}) => {
          if (this.affixTags.some(tag => tag.path === view.path)) {
            return
          }
          this.toLastView(visitedViews, view)
        })
      },
      toLastView(visitedViews, view) {
        const latestView = visitedViews.slice(-1)[0]
        if (latestView) {
          this.$router.push(latestView.fullPath)
        } else {
          // now the default is to redirect to the home page if there is no tags-view,
          // you can adjust it according to your needs.
          if (view.name === 'Dashboard') {
            // to reload home page
            this.$router.replace({path: '/redirect' + view.fullPath})
          } else {
            this.$router.push('/')
          }
        }
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to.path === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag)
              // when query is different then update
              if (tag.to.fullPath !== this.$route.fullPath) {
                this.$store.dispatch('tagsView/updateVisitedView', this.$route)
              }
              break
            }
          }
        })
      },
    }
  };
</script>