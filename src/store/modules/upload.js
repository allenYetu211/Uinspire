import API from '../../api.js'
import {
  LOADTEXT,
  POSTIMGDATA
} from '../actions'

const state = {
  text: '',
  returnData: []
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
    console.log(state.text)
  },
  [POSTIMGDATA] (state, _data) {
    API.uploadProject(_data, (url) => {
      state.returnData.push(url)
    })
  }
}

export default {
  state,
  mutations
}
