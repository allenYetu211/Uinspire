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
  LOGONUSER,
  UINSPIREIO,
  WHETHERTHELOGIN,
  VERIFYNEXT,
  USERLOGIN
} from '../actions'

const state = {
  text: '',
  returnData: [],
  storeimagedata: '',
  progress: '',
  categoryDate: '',
  filtercategory: [],
  importemail: false,      // 显示注册页面弹框
  setreturncode: false,    // 显示登录页面
  logonuser: false,       // 显示验证码信息
  uinspireioDate: '',
  whetherthelogin: false, // 用户是否登录状态
  theSidebar: false,       // 控制展示用户栏或登录注册弹窗
  verifynext: false,       // 验证成功下一步
  loginPopup: false,       // 登录弹出窗口
  loginuserdata: ''
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
    console.log(state.text)
  },
  [POSTIMGDATA] (state, _data) {
    let count = 0
    let progressbar
    _data.progressbar = true
    API.uploadProject(_data, (url) => {
      clearInterval(progressbar)
      _data.progress = 1
      _data.isuploading = false
      _data.isuploadsuccess = true
      state.returnData.push(url)
    })
    /*
     * 返还状态
     */
    // 触发开始 waiting
    _data.iswaiting = true
    setTimeout(() => {
      _data.iswaiting = false
      _data.isuploading = true
      progressbar = setInterval(() => {
        count += Math.random() * 0.1
        count.toFixed(2)
        if (count.toFixed(2) > 0.8) { clearInterval(progressbar) }
        _data.progress = count.toFixed(2)
      }, 200)
    }, 40)
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
  [IMPORTEMAIL] (state, _email) {
    API.validationEmail(_email, (userstate) => {
      console.log(userstate)
      // 邮箱未注册
      if (userstate.code === '10048') {
        state.importemail = !state.importemail
        state.logonuser = true
      } else if (userstate.code === '0') {
        state.loginuserdata = userstate.data
        state.importemail = false
        state.loginPopup = true
        state.importemail = true
      }
    })
  },
  [SETRETURNCODE] (state, _userinformation) {
    console.log('_userinformation', _userinformation)
    API.logonUser(_userinformation, (requey) => {
      console.log(requey)
      state.setreturncode = !state.setreturncode
      state.logonuser = false
      state.theSidebar = false
    })
  },
  [LOGONUSER] (state) {
    state.logonuser = !state.logonuser
  },
  [UINSPIREIO] (state) {
    API.uinspireio((_data) => {
      state.uinspireioDate = _data.data
      if (!_data.user) {
        state.whetherthelogin = true
      }
    })
  },
  // 判断用户是否登录
  [WHETHERTHELOGIN] (state) {
    // 让用户处于登录状态的时候 右侧边栏展开收起
    if (state.whetherthelogin) {
      state.theSidebar = true
    }
  },
  // 验证成功 下一步
  [VERIFYNEXT] (state, _verify) {
    console.log(_verify)
    API.verifyCode(_verify, (_vcode) => {
      console.log(_vcode)
      state.verifynext = true
      state.logonuser = false
      state.setreturncode = true
      state.theSidebar = false
    })
  },
  [USERLOGIN] (state, _userinformation) {
    API.userLogin(_userinformation, (back) => {
      if (back.data.code === '0') {
        state.theSidebar = false
        // state.whetherthelogin = state.whetherthelogins
      }
    })
  }
}

export default {
  state,
  mutations
}
