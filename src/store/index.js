import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import sides from './modules/side'
import contrast from './modules/contrast'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    sides,
    contrast
  }
})
