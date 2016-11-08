import {
  SIDE,
  LISTARRANGE,
  LISTARRANGETWO,
  ADDLIKE,
  LESSLIKE
} from '../actions'

const state = {
  side: false,
  listArrange: false,
  like: 0,
  linkinfor: false
}
const mutations = {
  [SIDE] (state) {
    state.side = !state.side
  },
  [LISTARRANGE] (state) {
    state.listArrange = false
  },
  [LISTARRANGETWO] (state) {
    state.listArrange = true
  },
  [ADDLIKE] (state) {
    state.like++
    if (state.like > 0) state.linkinfor = true
  },
  [LESSLIKE] (state) {
    state.like--
    if (state.like === 0) state.linkinfor = false
  }
}

export default {
  state,
  mutations
}
