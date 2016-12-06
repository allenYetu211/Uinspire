import API from '../../api.js'
import {
  LOADTEXT,
  POSTIMGDATA,
  STOREIMAGEDATA,
  DELETEIMAGEDATA,
  CATEGORY,
  ADDFILTERCATEGORY,
  LESSFILTERCATEGORY,
  IMPORTEMAIL,
  SETRETURNCODE,
  LOGONUSER
} from '../actions'

const state = {
  text: '',
  returnData: [],
  storeimagedata: '',
  progress: '',
  categoryDate: '',
  filtercategory: [],
  importemail: false,
  setreturncode: false,
  logonuser: false
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
    console.log(state.text)
  },
  [POSTIMGDATA] (state, _data) {
    _data.progressbar = true
    API.uploadProject(_data, (url) => {
      state.returnData.push(url)
    })
  },
  [STOREIMAGEDATA] (state, _imagesinformation) {
    state.storeimagedata = _imagesinformation
  },
  [DELETEIMAGEDATA] (state, _deleteIndex) {
    state.storeimagedata.splice(_deleteIndex, 1)
  },
  [CATEGORY] (state) {
    API.initCategory((categorydata) => {
      state.categoryDate = categorydata
    })
  },
  [ADDFILTERCATEGORY] (state, categoryIndex) {
    state.filtercategory.push(categoryIndex)
  },
  [LESSFILTERCATEGORY] (state, categoryIndex) {
    for (let i = 0; i < state.filtercategory.length; i++) {
      if (state.filtercategory[i] === categoryIndex) {
        state.filtercategory.splice(i, 1)
      }
    }
  },
  [IMPORTEMAIL] (state) {
    state.importemail = !state.importemail
    state.logonuser = true
  },
  [SETRETURNCODE] (state) {
    state.setreturncode = !state.setreturncode
    state.logonuser = false
  },
  [LOGONUSER] (state) {
    state.logonuser = !state.logonuser
  }
}

export default {
  state,
  mutations
}
