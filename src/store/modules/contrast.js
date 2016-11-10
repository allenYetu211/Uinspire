import filtermono from '../../Publicjs/filter'
import {
  CONTRASTS,
  LESSCONTRASTS,
  ADDLIKE,
  LESSLIKE,
  COMTRAST
} from '../actions'

const state = {
  contrastles: [],
  like: 0,
  linkinfor: false,
  comtrast: false
}

const mutations = {
  [CONTRASTS] (state, types) {
    state.contrastles = filtermono.addfilter(types)
    // console.log(state.contrastles)
  },
  [LESSCONTRASTS] (state, types) {
    state.contrastles = filtermono.lessfilter(state.contrastles, types)
    // console.log(state.contrastles)
  },
  [ADDLIKE] (state) {
    state.like++
    if (state.like > 0) state.linkinfor = true
  },
  [LESSLIKE] (state) {
    state.like--
    if (state.like === 0) state.linkinfor = false
  },
  [COMTRAST] (state) {
    state.comtrast = !state.comtrast
  }
}

export default {
  state,
  mutations
}
