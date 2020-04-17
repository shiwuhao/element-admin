const app = {
  state: {
    sidebar: {
      collapse: localStorage.getItem('sidebarCollapse') ? !!localStorage.getItem('sidebarCollapse') : true,
    },
    size: 'small',
  },
  mutations: {},
  actions: {}
};
export default app;
