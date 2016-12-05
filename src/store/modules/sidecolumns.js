import {
  INSPIRTNAVSIDEBAR,
  LISTARRANGE,
  LISTARRANGETWO,
  NAVIGATIONTITLE,
  SIDEBARRIGHT
} from '../actions'

const state = {
  inspirtnavsidebar: false,
  listArrange: false,
  like: 0,
  linkinfor: false,
  navposWidth: '',
  navposLeft: '',
  navposIndex: 0,
  sidebarright: false

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
  },
  [SIDEBARRIGHT] (state) {
    state.sidebarright = !state.sidebarright
  }
}

export default {
  state,
  mutations
}
