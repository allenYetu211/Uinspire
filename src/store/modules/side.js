import {
  SIDE
} from '../actions'

const state = {
  side: false
}
const mutations = {
  [SIDE] (state) {
    state.side = !state.side
  }
}

export default {
  state,
  mutations
}
