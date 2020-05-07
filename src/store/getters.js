const getters = {
  sidebar: state => state.app.sidebar,
  showTagsView: state => state.app.showTagsView,
  cachedViews: state => state.tagView.cachedViews,
  visitedViews: state => state.tagView.visitedViews,
  routes: state => state.permission.routes,
  userInfo: state => state.user.userInfo,
};
export default getters
