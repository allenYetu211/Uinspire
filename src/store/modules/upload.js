import API from '../../api.js'
import Cke from '../../Publicjs/ckie.js'
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
  USERLOGIN,
  USERLOGONSUCCESS,
  GETAPPCOLLECTION,
  CLOSERAPPCOLLECTION,
  ADDCOLLECTIONINDEX,
  LESSCOLLECTIONINDEX,
  LOGOUT,
  CHANGESTATE
} from '../actions'

const state = {
  text: '',
  returnData: [],
  storeimagedata: '',
  progress: '',
  categoryDate: '',
  filtercategory: [],
  uinspireioDate: '',
  loginuserdata: '',
  importemail: false,       // 验证邮箱
  emailError: false,        // 邮箱错误
  setreturncode: false,     // 显示登录页面
  logonuser: false,         // 显示验证码信息
  whetherthelogin: false,   // 用户是否登录状态
  theSidebar: false,        // 控制展示用户栏或登录注册弹窗
  verifynext: false,        // 验证成功下一步
  loginPopup: false,        // 登录弹出窗口
  sidebarright: false,      // 用户登录状态时为FALSE
  logonsuccess: false,      // 登录成功状态
  getAppCollection: '',     // 存储APP对应图集
  collectionPopup: false,   // APP弹框浮层
  storageAppCollection: '', // 存储列表数据
  showCollectionIndex: 0,  // 显示对应图集下标
  userpas_Error: false
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
    API.uploadProject(_data, (response) => {
      clearInterval(progressbar)
      _data.progress = 1
      _data.isuploading = false
      _data.isuploadsuccess = true
      state.returnData.push(response.data.thumb_img_url)
      // if (response.data.code === 0) {
      //   _data.isuploadsuccess = true
      //   state.returnData.push(response.data.thumb_img_url)
      // } else {
      //   _data.iserror = true
      // }
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
    API.logonUser(_userinformation, (requey) => {
      console.log(requey)
      Cke.setCookie('uinspire', requey.data.data.login_uid)
      state.logonsuccess = true
      state.logonuser = false
      state.setreturncode = false
      // state.setreturncode = !state.setreturncode
      // state.logonuser = false
      // state.theSidebar = false
      // state.whetherthelogin = false
    })
  },
  [USERLOGONSUCCESS] (state) {
     // state.setreturncode = !state.setreturncode
    setTimeout(() => {
      state.logonuser = false
      state.theSidebar = false
      state.whetherthelogin = false
    }, 2000)
  },
  [LOGONUSER] (state) {
    state.logonuser = !state.logonuser
  },
  [UINSPIREIO] (state) {
    API.uinspireio((_data) => {
      state.uinspireioDate = _data.data
    })
  },
  // 判断用户是否登录
  [WHETHERTHELOGIN] (state) {
    let uinspire = Cke.getCookie('uinspire')
    API.whetherthelogin(uinspire, (loginstate) => {
      // 登录返回 0
      if (loginstate.data.code === '0' || loginstate.data.code === '100490') {
        state.sidebarright = !state.sidebarright
      } else {
        state.whetherthelogin = true
        state.theSidebar = true
      }
    })
    // 让用户处于登录状态的时候 右侧边栏展开收起
    if (state.whetherthelogin) {
      state.theSidebar = true
      // state.sidebarright = false
    } else {
      state.theSidebar = false
      // state.sidebarright = true
    }
  },
  // 验证成功 下一步
  [VERIFYNEXT] (state, _verify) {
    console.log(_verify)
    API.verifyCode(_verify, (_vcode) => {
      console.log('_vcode:', _vcode)
      if (_vcode.code === '10044') {
        console.log('验证码错误')
        return
      }
      state.verifynext = true
      state.logonuser = false
      state.setreturncode = true
      // state.theSidebar = false
    })
  },
  [CHANGESTATE] (state) {
    state.userpas_Error = false
  },
  [USERLOGIN] (state, _userinformation) {
    API.userLogin(_userinformation, (back) => {
      if (back.data.code === '0') {
        state.theSidebar = false
        state.whetherthelogin = false
        state.userpas_Error = false
        Cke.setCookie('uinspire', back.data.data.login_uid)
      } else if (back.data.code === '10049') {
        state.userpas_Error = true
        console.log('state.userpas_Error:', state.userpas_Error)
      }
    })
  },
  [GETAPPCOLLECTION] (state, collectionId) {
    // 修改app-collection state
    state.storageAppCollection = ''
    state.collectionPopup = !state.collectionPopup
    API.getAppCollection(collectionId, (back) => {
      state.storageAppCollection = back.data.data
      for (let i = 0; i < back.data.data.length; i++) {
        if (back.data.data[i].id === collectionId) {
          state.showCollectionIndex = i
          break
        }
      }
    })
  },
  [ADDCOLLECTIONINDEX] (steta) {
    state.showCollectionIndex++
  },
  [LESSCOLLECTIONINDEX] (steta) {
    state.showCollectionIndex--
  },
  [CLOSERAPPCOLLECTION] (state) {
    // 修改app-collection state
    state.collectionPopup = false
    console.log('state.collectionPopup:', state.collectionPopup)
  },
  [LOGOUT] (state) {
    API.logout((callback) => {
      Cke.deleteCookie('uinspire')
      state.sidebarright = false
      state.importemail = true
      state.loginPopup = false
      state.importemail = false
    })
  }
}

export default {
  state,
  mutations
}
