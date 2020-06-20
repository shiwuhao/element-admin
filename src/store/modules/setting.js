import variables from '@/styles/element-variables.scss'

const setting = {
  namespaced: true,
  state: {
    theme: variables.theme,
    tagView: true,
    fixedHeader: false,
    sidebarLogo: true
  },
  mutations: {
    CHANGE_SETTING: (state, {key, value}) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({commit}, data) {
      commit('CHANGE_SETTING', data)
    }
  }
};
export default setting;
