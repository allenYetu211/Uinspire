import {
  INSPIRTNAVSIDEBAR,
  LISTARRANGE,
  LISTARRANGETWO,
  NAVIGATIONTITLE
} from '../actions'

const state = {
  inspirtnavsidebar: false,
  listArrange: false,
  like: 0,
  linkinfor: false,
  navposWidth: '',
  navposLeft: '',
  navposIndex: 0

}
const mutations = {
  [INSPIRTNAVSIDEBAR] (state) {
    state.inspirtnavsidebar = !state.inspirtnavsidebar
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
