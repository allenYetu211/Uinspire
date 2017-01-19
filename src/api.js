import Vue from 'vue'
import json from 'jsonify'
import md from 'md5'
import axios from 'axios'

const stamp = Date.parse(new Date())
const token = 'stoyard'
let sing = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  loadProjectTextData () {
    sing = stamp + token
    let singsz = md(md(sing))
    var color = '\'#343434\''
    console.log(singsz)
    color = encodeURI(color)
    Vue.http.get(encodeURI('http://inspire.stoyard.com/index.php/api/inspire/adddata?platform=1&category=2&name=allen&color=' + color)).then((response) => {
      console.log(json.parse(response.data))
      if (response.data.code === 0) {
      } else {
        console.log(response.data)
      }
    }).then((response) => {
      console.log(333)
    })
  },
  base64toblob (urlData) {
    var bytes = window.atob(urlData.split(',')[1])
    var ab = new ArrayBuffer(bytes.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    return new window.Blob([ab], { type: 'image/jpeg' })
  },
  uploadProject (_data, callback) {
    let tag = _data.tag ? _data.tag.join(',') : ''
    let category = _data.Category.join(',')
    axios({
      url: 'http://inspire.stoyard.com/api/inspire/adddata',
      method: 'post',
      transformRequest: [(_data) => {
        // 对 data 进行任意转换处理
        const fdata = new window.FormData()
        fdata.append('file', _data.file)
        fdata.append('platform', _data.PlatformIndex)
        fdata.append('category', category)
        fdata.append('name', _data.name)
        fdata.append('tag', tag)
        fdata.append('app_id', _data.app_id)
        fdata.append('link', _data.link)
        fdata.append('icon_link', _data.icon_link)
        fdata.append('developer', _data.developer)
        fdata.append('developer_link', _data.developer_link)
        fdata.append('app_category', _data.app_category)
        fdata.append('version', _data.version)
        fdata.append('screen_width', _data.width)
        fdata.append('screen_height', _data.height)
        fdata.append('login_uid', _data.login_uid)
        return fdata
      }],
      data: _data,
      onUploadProgress (progressEvent) {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    }).then((response) => {
      console.log('success!!!:', response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  initCategory (callback) {
    axios.get('http://inspire.stoyard.com/index.php/api/inspire/getCategoryList').then((response) => {
      if (typeof callback === 'function') {
        callback(response.data.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 获取首页展示图片信息
  uinspireio (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/viewdata', {
      params: {
        id: _data
      }
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 筛选滚动数据
  scrollUpdata (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/inspire/tabsearch',
      method: 'post',
      transformRequest: [(_data) => {
        let fData = new window.FormData()
        fData.append('category', _data.category)
        fData.append('color', _data.color)
        fData.append('end', _data.end)
        return fData
      }],
      data: _data
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 验证用户邮箱
  validationEmail (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/user/login', {
      params: {
        email: _data
      }
    }).then((response) => {
      if (response.data.code === '10048') {
        axios.get('http://inspire.stoyard.com/api/user/sendemailcode', {
          params: {
            email: _data
          }
        }).then((response) => {
          console.log('发送邮件')
        })
      }
      if (typeof callback === 'function') {
        callback(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 验证邮箱 验证码
  verifyCode (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/user/checkemailcode', {
      params: {
        email: _data[0].email,
        code: _data[0].code
      }
    }).then((response) => {
      console.log(response)
      if (typeof callback === 'function') {
        callback(response.data)
      }
    })
  },
  // 注册用户
  logonUser (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/user/register',
      method: 'Post',
      transformRequest: [(_data) => {
        const userdata = new window.FormData()
        userdata.append('email', _data[0].email)
        userdata.append('name', _data[0].name)
        userdata.append('company', _data[0].company)
        userdata.append('position', _data[0].position)
        userdata.append('password', _data[0].password)
        return userdata
      }],
      data: _data
    }).then((response) => {
      console.log(response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 用户登录
  userLogin (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/user/login',
      method: 'Post',
      transformRequest: [(_data) => {
        const userdata = new window.FormData()
        userdata.append('email', _data[0].email)
        userdata.append('password', _data[0].password)
        return userdata
      }],
      data: _data
    }).then((response) => {
      console.log('loginuser:', response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 判断用户是否登录
  whetherthelogin (uinspire, callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/islogin', {
      params: {
        login_uid: uinspire
      }
    }).then((response) => {
      console.log('uinspire:', response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // get --> AppCollection
  getAppCollection (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/getRelAppList', {
      params: {
        id: _data
      }
    }).then((response) => {
      console.log(response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // logout
  logout (callback) {
    axios.get('http://inspire.stoyard.com/api/user/logout').then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }
    })
  },
  // get appwall data
  getAppLogodata (callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/APPList').then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }
    })
  },
  // user permissions
  permissions (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/user/applyedit',
      method: 'post',
      transformRequest: [(_data) => {
        const permissions = new window.FormData()
        permissions.append('name', _data.name)
        permissions.append('company', _data.company)
        permissions.append('position', _data.position)
        permissions.append('phone', _data.phone)
        permissions.append('wechat', _data.wechat)
        permissions.append('login_uid', _data.login_uid)
        permissions.append('description', _data.About)
        return permissions
      }],
      data: _data
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }
    })
  },
  // change userinformations
  changeuserinformations (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/user/editprofile',
      method: 'post',
      transformRequest: [(_data) => {
        const permissions = new window.FormData()
        permissions.append('email', _data.email)
        permissions.append('password', _data.password)
        permissions.append('company', _data.company)
        permissions.append('name', _data.name)
        permissions.append('position', _data.position)
        return permissions
      }],
      data: _data
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }
    })
  },
  // get IndexApp Page Data
  getIndexAppData (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/uniqueappinfo', {
      params: {
        app_id: _data
      }
    }).then((response) => {
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // get IndexList Page filterData
  getfilterList (_data, callback) {
    axios({
      url: 'http://inspire.stoyard.com/api/inspire/tabsearch',
      method: 'post',
      transformRequest: [(_data) => {
        const fData = new window.FormData()
        fData.append('category', _data)
        return fData
      }],
      data: _data
    }).then((respons) => {
      if (typeof callback === 'function') {
        callback(respons)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // search Informations
  getSearchList (_data, callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/search', {
      params: {
        title: _data.title,
        wd: _data.wd
      }
    })
    // axios({
    //   url: 'http://inspire.stoyard.com/api/inspire/search',
    //   method: 'get',
    //   params: {
    //     title: window.encodedURIString(_data.title),
    //     wd: _data.wd
    //   }
    // })
    .then((respons) => {
      if (typeof callback === 'function') {
        callback(respons)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
