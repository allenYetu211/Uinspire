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
  WHETHERTHELOGIN,
  VERIFYNEXT,
  USERLOGIN,
  USERLOGONSUCCESS,
  GETAPPCOLLECTION,
  CLOSERAPPCOLLECTION,
  ADDCOLLECTIONINDEX,
  LESSCOLLECTIONINDEX,
  LOGOUT,
  CHANGESTATE,
  VERIFYCODES,
  ADDAPPWALLDATA,
  CUINFORMATION,
  PERMISSIONS,
  USERINFORMATIONS,
  AGAINUSERINFORMATIONS,
  GETAPPPAGEDATA,
  CLOSERSTARLOGIN,
  CLOSERSIDEBARINFORMATION,
  SCROLLUPDATA,
  SEARCHINFORMATION,
  ROLLUPDATA
  // UINSPIREIO
} from '../actions'

const state = {
  text: '',
  returnData: [],
  storeimagedata: '',
  progress: '',
  categoryDate: '',
  filtercategory: [],
  uinspireioDate: '',       // 初始化数据
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
  showCollectionIndex: 0,   // 显示对应图集下标
  userpas_Error: false,     // 密码错误显示状态
  userSuccess: false,       // 密码成功状态
  verifyCode: false,        // 验证码状态
  isEditer: false,          // 上传权限状态
  userPermissions: false,   // 上传权限 申请发送成功
  userInformation: '',
  userCookieinformations: true,
  applogodata: '',          // 存储logo
  appIdentification: true,  // 滚动加载状态标识
  appLoadingAnimation: false, // 滚动加载动画状态标识
  appLoadingSate: false,    // 滚动加载 服务器图片读取完
  appIdCount: 0,            // 加载验证是否传递重复ID
  changeUserState: false,  // 修改用户信息显示状态
  indexAppdata: '',        // indexApp数据
  searchList: '',          // 筛选返回信息列表
  serchNull: false,        // 搜索为空
  rollupdata: true         // 是否进行滚动加载
}

const mutations = {
  [LOADTEXT] (state) {
    state.text = API.loadProjectTextData()
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
    getfilterList((callback) => {
      console.log(callback)
      if (callback.code === '100451') {
        state.uinspireioDate = ''
      } else {
        state.uinspireioDate = ''
        setTimeout(() => {
          state.uinspireioDate = callback.data
        }, 200)
      }
    })
    // console.log(newData)
  },
  [LESSFILTERCATEGORY] (state, categoryIndex) {
    for (let i = 0; i < state.filtercategory.length; i++) {
      if (state.filtercategory[i] === categoryIndex) {
        state.filtercategory.splice(i, 1)
        getfilterList((callback) => {
          if (callback.code === '100451') {
            state.uinspireioDate = ''
          } else {
            state.uinspireioDate = ''
            setTimeout(() => {
              state.uinspireioDate = callback.data
            }, 200)
          }
        })
      }
    }
  },
  [IMPORTEMAIL] (state, _email) {
    API.validationEmail(_email, (userstate) => {
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
  // 用户注册
  [SETRETURNCODE] (state, _userinformation) {
    API.logonUser(_userinformation, (requey) => {
      if (requey.data.code === '0') {
        state.loginuserdata = requey.data.data
        Cke.setDigital(state.loginuserdata)
        Cke.setCookie('login_uid', requey.data.data.login_uid)
        state.logonsuccess = true
        setTimeout(() => {
          state.logonuser = false
          state.setreturncode = false
          state.verifynext = false
          state.importemail = false
          state.theSidebar = false
        }, 1000)
      }
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
  // [UINSPIREIO] (state, _id = '') {
    // API.uinspireio(_id, (callback) => {
    //   state.appLoadingAnimation = false
    //   if (callback.code === '100451') {
    //     state.appIdentification = false
    //     state.appLoadingSate = true
    //     return
    //   }
    //   if (state.uinspireioDate === '') {
    //     state.uinspireioDate = callback.data
    //   } else {
    //     state.uinspireioDate = state.uinspireioDate.concat(callback.data)
    //   }
    // })
  // },
  // scroll UpData
  [SCROLLUPDATA] (state, _id = '') {
    let _ChangeId = _id
    let infoNew = state.filtercategory.join(',')
    let _ds = {
      end: _ChangeId,
      color: '',
      category: infoNew
    }
    if (state.appIdCount === _ds.end) {
      return
    }
    if (state.appIdentification) {
      state.appIdentification = false
      state.appLoadingAnimation = true
      setTimeout(() => {
        state.appIdentification = true
      }, 500)
      if (_ds.category === '') {
        API.uinspireio(_id, filterAddData)
      } else {
        API.scrollUpdata(_ds, filterAddData)
      }
    }
  },
  // 判断用户是否登录
  [WHETHERTHELOGIN] (state) {
    let uinspire = Cke.getCookie('login_uid')
    Cke.getCookie('is_editer') === '0' ? state.isEditer = false : state.isEditer = true
    if (state.userCookieinformations) {
      let cookieInms = {
        headimgurl: Cke.getCookie('headimgurl'),
        user_name: Cke.getCookie('user_name'),
        position: Cke.getCookie('position'),
        company: Cke.getCookie('company')
      }
      state.loginuserdata = cookieInms
      state.userCookieinformations = false
    }
    API.whetherthelogin(uinspire, (loginstate) => {
      // 登录返回 0
      if (loginstate.data.code === '0' || loginstate.data.code === '100490') {
        state.sidebarright = !state.sidebarright
        state.theSidebar = false
      } else {
        state.whetherthelogin = true
        state.theSidebar = true
      }
    })
  },
  // 验证成功 下一步
  [VERIFYNEXT] (state, _verify) {
    API.verifyCode(_verify, (_vcode) => {
      if (_vcode.code === '10044') {
        state.verifyCode = true
        console.log('验证码错误')
        return
      }
      state.verifynext = true
      state.logonuser = false
      state.setreturncode = true
      // state.theSidebar = false
    })
  },
  [VERIFYCODES] (state) {
    state.verifyCode = false
  },
  [CHANGESTATE] (state) {
    state.userpas_Error = false
  },
  // 用户登录成功
  [USERLOGIN] (state, _userinformation) {
    API.userLogin(_userinformation, (back) => {
      if (back.data.code === '0') {
        back.data.data.is_editer === '0' ? state.isEditer = false : state.isEditer = true
        console.log('back.data.data.is_edite:', back.data.data.is_editer === '0')
        state.userInformation = back.data.data
        // console.log(back)
        Cke.setDigital(state.userInformation)
        // Cke.setCookie('login_uid', back.data.data.login_uid)
        state.userSuccess = true
        setTimeout(() => {
          state.userSuccess = false
          state.theSidebar = false
          state.whetherthelogin = false
          state.userpas_Error = false
        }, 1000)
      } else if (back.data.code === '10049') {
        state.userpas_Error = true
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
  },
  [LOGOUT] (state) {
    API.logout((callback) => {
      Cke.deleteCookie('login_uid')
      state.sidebarright = false
      state.importemail = true
      state.loginPopup = false
      state.importemail = false
    })
  },
  // 存储applogodata
  [ADDAPPWALLDATA] (state) {
    API.getAppLogodata((callback) => {
      state.applogodata = callback.data.data
    })
  },
  // change user information
  [CUINFORMATION] (state) {
    let cookieInms = {
      headimgurl: Cke.getCookie('headimgurl'),
      user_name: Cke.getCookie('user_name'),
      position: Cke.getCookie('position'),
      email: Cke.getCookie('email'),
      company: Cke.getCookie('company')
    }
    state.userInformation = cookieInms
  },
  // user applications permissions
  [PERMISSIONS] (state, _data) {
    let addUidData = addLoginUid(_data)
    API.permissions(addUidData, (callback) => {
      if (callback.data.code === '0') {
        state.userPermissions = true
      }
    })
  },
 // change userinformaotions
  [USERINFORMATIONS] (state, _data) {
    API.changeuserinformations(_data, (callback) => {
      if (callback.data.code === '0') {
        state.changeUserState = true
        state.userInformation = state.loginuserdata = callback.data.data
        Cke.setDigital(state.userInformation)
      }
    })
  },
  [AGAINUSERINFORMATIONS] (state) {
    state.changeUserState = false
  },
  // requst indexappdata
  [GETAPPPAGEDATA] (state, _id) {
    API.getIndexAppData(_id, (callback) => {
      state.indexAppdata = callback.data.data
    })
  },
  [CLOSERSTARLOGIN] (state) {
    state.theSidebar = false
    state.importemail = false
    state.setreturncode = false
    state.loginPopup = false
    state.logonuser = false
    state.verifynext = false
  },
  [CLOSERSIDEBARINFORMATION] (state) {
    state.sidebarright = false
  },
  [SEARCHINFORMATION] (state, _data) {
    API.getSearchList(_data, (callback) => {
      console.log(callback)
      if (_data.target === 'li') {
        state.uinspireioDate = callback.data.data
      } else {
        state.searchList = callback.data.data
      }
      if (callback.data.code === '100451' || callback.data.code === '10040') {
        state.serchNull = true
      } else {
        state.serchNull = false
      }
    })
  },
  [ROLLUPDATA] (state) {
    state.uinspireioDate = ''
    state.rollupdata = !state.rollupdata
  }
}

function addLoginUid (data) {
  let cookieUid = {
    login_uid: Cke.getCookie('login_uid')
  }
  return Object.assign(data, cookieUid)
}
// 筛选数据
function getfilterList (pcal) {
  let filter = state.filtercategory.join(',')
  API.getfilterList(filter, (callback) => {
    pcal(callback.data)
  })
}

function filterAddData (callback) {
  state.appLoadingAnimation = false
  if (callback.code === '100451') {
    state.appIdentification = false
    state.appLoadingSate = true
    return
  }
  if (state.uinspireioDate === '') {
    state.uinspireioDate = callback.data
  } else {
    state.uinspireioDate = state.uinspireioDate.concat(callback.data)
  }
}

export default {
  state,
  mutations
}
