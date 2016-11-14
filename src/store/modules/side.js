import {
  SIDE,
  LISTARRANGE,
  LISTARRANGETWO,
  NAVIGATIONTITLE
} from '../actions'

const state = {
  side: false,
  listArrange: false,
  like: 0,
  linkinfor: false,
  navposWidth: '',
  navposLeft: '',
  navposIndex: 0

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
  [NAVIGATIONTITLE] (state, slide) {
    state.navposLeft = slide.left
    state.navposWidth = slide.width
    state.navposIndex = slide.index
  }
}

export default {
  state,
  mutations
}
