import API from '../../api.js'
import {
  LOADTEXT
} from '../actions'

const state = {
  text: ''
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
    console.log(state.text)
  }
}

export default {
  state,
  mutations
}
