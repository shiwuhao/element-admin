import variables from '@/styles/element-variables.scss'

const setting = {
  namespaced: true,
  state: {
    layout: localStorage.getItem('layout') ? localStorage.getItem('layout') : 'sideMenu',
    theme: variables.theme,
    tagView: localStorage.getItem('tagView') ? !!+localStorage.getItem('tagView') : true,
    fixedHeader: localStorage.getItem('fixedHeader') ? !!+localStorage.getItem('fixedHeader') : true,
    sidebarLogo: localStorage.getItem('sidebarLogo') ? !!+localStorage.getItem('sidebarLogo') : true,
    navBar: localStorage.getItem('navBar') ? !!+localStorage.getItem('navBar') : true,
  },
  mutations: {
    CHANGE_SETTING: (state, key, value) => {
      console.log(state, key, value);
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value;
        localStorage.setItem(key, state[key]);
      }
      console.log(state);
    },
    TOGGLE_SETTING: (state, key) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = !state[key];
        localStorage.setItem(key, state[key] ? '1' : '0');
      }
    },
  },
  actions: {
    /**
     * change setting
     * @param commit
     * @param key
     * @param value
     */
    changeSetting({commit}, key, value) {
      commit('CHANGE_SETTING', key, value)
    },
    /**
     * toggle setting
     * @param commit
     * @param key
     */
    toggleSetting({commit}, key) {
      commit('TOGGLE_SETTING', key);
    },
  }
};
export default setting;
