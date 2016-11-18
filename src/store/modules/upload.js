import API from '../../api.js'
import {
  LOADTEXT,
  POSTIMGDATA
} from '../actions'

const state = {
  text: ''
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
    console.log(state.text)
  },
  [POSTIMGDATA] (state, _data) {
    API.uploadProject(_data)
  }
}

export default {
  state,
  mutations
}
