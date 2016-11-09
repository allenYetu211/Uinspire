import {
  SIDE,
  LISTARRANGE,
  LISTARRANGETWO,
  ADDLIKE,
  LESSLIKE,
  COMTRAST
} from '../actions'

const state = {
  side: false,
  listArrange: false,
  like: 0,
  linkinfor: false,
  comtrast: false
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
  },
  [COMTRAST] (state) {
    state.comtrast = !state.comtrast
    // let body = document.getElementsByTagName('body')
    // body.style.Overflow = 'hidden'
    // console.log(body)
  }
}

export default {
  state,
  mutations
}
