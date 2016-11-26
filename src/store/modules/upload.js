import API from '../../api.js'
import {
  LOADTEXT,
  POSTIMGDATA,
  STOREIMAGEDATA,
  DELETEIMAGEDATA
} from '../actions'

const state = {
  text: '',
  returnData: [],
  storeimagedata: '',
  progress: ''
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
    API.progressbar(_data.PHP_SESSION_UPLOAD_PROGRESS, (progress) => {
      state.progress = progress
    })
  },
  [STOREIMAGEDATA] (state, _imagesinformation) {
    state.storeimagedata = _imagesinformation
  },
  [DELETEIMAGEDATA] (state, _deleteIndex) {
      state.storeimagedata.splice(_deleteIndex, 1)
  }
}

export default {
  state,
  mutations
}
