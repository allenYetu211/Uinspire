export const loadtexts = state => state.upload.text

export const getRetruenData = state => state.upload.returnData

export const outintimagedata = state => state.upload.storeimagedata

export const getprogress = state => state.upload.progress

export const categoryDate = state => state.upload.categoryDate

// 验证用户邮箱
export const returnimportemail = state => state.upload.importemail

// 邮箱错误
export const emailError = state => state.upload.emailError

// 帐号或者错误
export const upError = state => state.upload.userpas_Error

// 验证码
export const getreturncode = state => state.upload.setreturncode

// uinspire 首页展示图片
export const uinspireioDate = state => state.upload.uinspireioDate

// 用户登录状态
export const whetherthelogins = state => state.upload.whetherthelogin

// 用户登录成功
export const userSuccess = state => state.upload.userSuccess

// 用户点击后显示登录或侧边栏
export const loginSidebar = state => state.upload.theSidebar

// 登录窗口
export const loginPopup = state => state.upload.loginPopup

// 用户登录信息
export const loginuserdata = state => state.upload.loginuserdata

// 登录成功用户信息
export const userInformation = state => state.upload.userInformation

// 验证成功下一步注册
export const logonverifynext = state => state.upload.verifynext

// 验证码状态
export const verifyCode = state => state.upload.verifyCode

// 注册用户
export const registereduser = state => state.upload.logonuser

// 注册用户
export const sidebarrights = state => state.upload.sidebarright

// 注册用户
export const logonsuccess = state => state.upload.logonsuccess

// appCollection --- state
export const collectionPopup = state => state.upload.collectionPopup

// storageAppCollection
export const storageAppCollection = state => state.upload.storageAppCollection

// showAppCollection Index
export const showCollectionIndex = state => state.upload.showCollectionIndex

// appwall logodata
export const applogodata = state => state.upload.applogodata
