export const LOADTEXT = 'loadtext'
export const loadtext = ({commit}) => { commit(LOADTEXT) }

export const POSTIMGDATA = 'postimgdata'
export const postimgdata = ({commit}, updata) => { commit(POSTIMGDATA, updata) }

//  初始化 category 数据
export const CATEGORY = 'category'
export const category = ({commit}) => { commit(CATEGORY) }

//  存储浏览器拖拽显示图片， 用于删除显示
export const STOREIMAGEDATA = 'storeimagedata'
export const storeimagedata = ({commit}, imagesinformation) => { commit(STOREIMAGEDATA, imagesinformation) }

// 删除存储与Vuex 中存储的图片信息状态
export const DELETEIMAGEDATA = 'deleteimagedata'
export const deleteimagedata = ({commit}, _deleteIndex) => { commit(DELETEIMAGEDATA, _deleteIndex) }

// 左边侧边栏筛选category数据 添加
export const ADDFILTERCATEGORY = 'addfiltercategory'
export const addfiltercategory = ({commit}, categoryIndex) => { commit(ADDFILTERCATEGORY, categoryIndex) }

// 左边侧边栏筛选category数据 删除
export const LESSFILTERCATEGORY = 'lessfiltercategory'
export const lessfiltercategory = ({commit}, categoryIndex) => { commit(LESSFILTERCATEGORY, categoryIndex) }

// 处理用户输入邮箱
export const IMPORTEMAIL = 'importemail'
export const importemail = ({commit}, _email) => { commit(IMPORTEMAIL, _email) }

// 验证码
export const SETRETURNCODE = 'setreturncode'
export const setreturncode = ({commit}, _userinformation) => { commit(SETRETURNCODE, _userinformation) }

// 验证码状态
export const VERIFYCODES = 'verifycodes'
export const verifycodes = ({commit}) => { commit(VERIFYCODES) }

// 注册用户
export const LOGONUSER = 'logonuser'
export const logonuser = ({commit}) => { commit(LOGONUSER) }

// 用户登录
export const USERLOGIN = 'userlogin'
export const userlogin = ({commit}, _userinformations) => { commit(USERLOGIN, _userinformations) }

// 获取首页展示图片
export const UINSPIREIO = 'uinspireio'
export const uinspireio = ({commit}) => { commit(UINSPIREIO) }

// 判断登录注册或展开收起侧边栏
export const WHETHERTHELOGIN = 'whetherthelogin'
export const whetherthelogin = ({commit}) => { commit(WHETHERTHELOGIN) }

// 验证码验证成功下一步
export const VERIFYNEXT = 'verifynext'
export const verifynext = ({commit}, _verify) => { commit(VERIFYNEXT, _verify) }

//  注册成功隐藏弹窗
export const USERLOGONSUCCESS = 'userlogonsuccess'
export const userlogonsuccess = ({commit}) => { commit(USERLOGONSUCCESS) }

// 点击点击单张图片获取新app图集数据
export const GETAPPCOLLECTION = 'getappcollection'
export const getappcollection = ({commit}, collectionId) => { commit(GETAPPCOLLECTION, collectionId) }

// 点击点击单张图片获取新app图集数据
export const CLOSERAPPCOLLECTION = 'closerappcollection'
export const closerappcollection = ({commit}) => { commit(CLOSERAPPCOLLECTION) }

// addCollectionIndex
export const ADDCOLLECTIONINDEX = 'addcollectionindex'
export const addcollectionindex = ({commit}) => { commit(ADDCOLLECTIONINDEX) }

// lessCollectionIndex
export const LESSCOLLECTIONINDEX = 'lesscollectionindex'
export const lesscollectionindex = ({commit}) => { commit(LESSCOLLECTIONINDEX) }

// Log out
export const LOGOUT = 'logout'
export const logout = ({commit}) => { commit(LOGOUT) }

// change login state
export const CHANGESTATE = 'changestate'
export const changestate = ({commit}) => { commit(CHANGESTATE) }

// add AppWall Data
export const ADDAPPWALLDATA = 'addappwalldata'
export const addappwalldata = ({commit}) => { commit(ADDAPPWALLDATA) }

