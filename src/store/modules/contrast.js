import filtermono from '../../Publicjs/filter'
import {
  CONTRASTS,
  LESSCONTRASTS
} from '../actions'

const state = {
  contrastles: []
}

const mutations = {
  [CONTRASTS] (state, types) {
    filtermono.addfilter(state.contrastles, types)
  },
  [LESSCONTRASTS] (state, types) {
    filtermono.lessfilter(state.contrastles)
  }
}

export default {
  state,
  mutations
}
