import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"

import app from "./modules/app";
import tagView from "./modules/tagView";
import permission from "./modules/permission";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app, tagView, permission
  },
  getters
})
