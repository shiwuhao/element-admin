import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"

import app from "./modules/app";
import tagViews from "./modules/tagViews";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app, tagViews
  },
  getters
})
