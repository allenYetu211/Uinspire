import filtermono from '../../Publicjs/filter'
import {
  CONTRASTS,
  LESSCONTRASTS,
  ADDLIKE,
  LESSLIKE,
  COMTRAST,
  FILMSLIDE,
  COMTRASTOPEN,
  ADDFILMSLIDE,
  LESSFILMSLIDE,
  DELETEMOODBRADOD,
  SHOWCOLSEMOODBRADOD,
  USERHISTORY
} from '../actions'

const state = {
  contrastles: [],
  like: 0,
  linkinfor: false,
  comtrast: false,
  filmslide: false,
  // infordata: [
  //       {url: 'static/img1.jpg'},
  //       {url: 'static/img1.jpg'},
  //       {url: 'static/img2.jpg'},
  //       {url: 'static/img3.jpg'},
  //       {url: 'static/img4.jpg'},
  //       {url: 'static/img5.jpg'},
  //       {url: 'static/img6.jpg'},
  //       {url: 'static/img7.jpg'},
  //       {url: 'static/img8.jpg'},
  //       {url: 'static/img9.jpg'},
  //       {url: 'static/img10.jpg'},
  //       {url: 'static/img11.jpg'},
  //       {url: 'static/img2.jpg'},
  //       {url: 'static/img3.jpg'},
  //       {url: 'static/img4.jpg'},
  //       {url: 'static/img5.jpg'},
  //       {url: 'static/img6.jpg'},
  //       {url: 'static/img7.jpg'},
  //       {url: 'static/img8.jpg'},
  //       {url: 'static/img9.jpg'},
  //       {url: 'static/img10.jpg'},
  //       {url: 'static/img11.jpg'},
  //       {url: 'static/img1.jpg'},
  //       {url: 'static/img2.jpg'},
  //       {url: 'static/img3.jpg'},
  //       {url: 'static/img4.jpg'},
  //       {url: 'static/img5.jpg'},
  //       {url: 'static/img6.jpg'},
  //       {url: 'static/img7.jpg'},
  //       {url: 'static/img8.jpg'},
  //       {url: 'static/img9.jpg'},
  //       {url: 'static/img10.jpg'},
  //       {url: 'static/img11.jpg'},
  //       {url: 'static/img12.jpg'}
  // ],
  showDataList: '',
  actionindex: '',
  deletemoodbarod: false,
  showcolsemoodbarod: false,
  userhistory: []
}

const mutations = {
  [CONTRASTS] (state, types) {
    state.contrastles = filtermono.addfilter(types)
  },
  [LESSCONTRASTS] (state, types) {
    state.contrastles = filtermono.lessfilter(state.contrastles, types)
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
    state.filmslide = false
  },
  [FILMSLIDE] (state, inx) {
    state.actionindex = inx
    // console.log('actionsindex:' + inx)
    state.filmslide = true
    // state.comtrast = true
    // state.showDataList = state.infordata
  },
  [COMTRASTOPEN] (state) {
    state.comtrast = !state.comtrast
  },
  [ADDFILMSLIDE] (state) {
    state.actionindex++
  },
  [LESSFILMSLIDE] (state) {
    state.actionindex--
  },
  [DELETEMOODBRADOD] (state) {
    state.deletemoodbarod = !state.deletemoodbarod
  },
  [SHOWCOLSEMOODBRADOD] (state) {
    state.showcolsemoodbarod = !state.showcolsemoodbarod
    state.deletemoodbarod = false
  },
  [USERHISTORY] (state, history) {
    if (!state.userhistory.includes(history)) {
      state.userhistory.unshift(history)
      if (state.userhistory.length > 5) {
        state.userhistory.pop()
      }
    }
  }
}

export default {
  state,
  mutations
}
