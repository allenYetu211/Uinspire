import {
  INSPIRTNAVSIDEBAR,
  LISTARRANGE,
  LISTARRANGETWO,
  NAVIGATIONTITLE,
  SIDEBARRIGHT,
  SIDEBARLEFT,
  CLOSERFILTER
} from '../actions'

const state = {
  inspirtnavsidebar: false,
  listArrange: false,
  like: 0,
  linkinfor: false,
  navposWidth: '',
  navposLeft: '',
  navposIndex: 0,
  sidebarright: false,
  sidebarleft: false
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
  },
  [SIDEBARLEFT] (state) {
    state.sidebarleft = !state.sidebarleft
  },
  [CLOSERFILTER] (state) {
    state.sidebarleft = false
    console.log(state.inspirtnavsidebar)
  }
}

export default {
  state,
  mutations
}
