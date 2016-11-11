import {
  SIDE,
  LISTARRANGE,
  LISTARRANGETWO
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
  }
}

export default {
  state,
  mutations
}
