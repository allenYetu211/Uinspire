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
  // uploadProject (_data, callback) {
  //   let tag = _data.tag ? _data.tag.join(',') : ''
  //   const fdata = new window.FormData()
  //   fdata.append('file', _data.file)
  //   axios.post(
  //    'http://inspire.stoyard.com/index.php/api/inspire/adddata', {
  //      file: _data.file,
  //      platform: _data.PlatformIndex,
  //      category: _data.Category.join(','),
  //      name: _data.name,
  //      tag: tag,
  //      link: _data.link,
  //      icon_link: _data.icon_link,
  //      app_category: _data.app_category,
  //      version: _data.version,
  //      screen_width: _data.width,
  //      screen_height: _data.height,
  //      color: '#343434'
  //    }).then((response) => {
  //      console.log('axios成功')
  //      console.log(response)
  //      if (typeof callback === 'function') {
  //        callback(json.parse(response.data).data.thumb_img_url)
  //      }
  //    }).catch((error) => {
  //      console.log(error)
  //    })
  // },
  uploadProject (_data, callback) {
    let tag = _data.tag ? _data.tag.join(',') : ''
    let category = _data.Category.join(',')
    axios({
      url: 'inspire/adddata',
      method: 'post',
      baseURL: 'http://inspire.stoyard.com/index.php/api/',
      transformRequest: [(_data) => {
        // 对 data 进行任意转换处理
        const fdata = new window.FormData()
        fdata.append('file', _data.file)
        fdata.append('platform', _data.PlatformIndex)
        fdata.append('category', category)
        fdata.append('name', _data.name)
        fdata.append('tag', tag)
        fdata.append('link', _data.link)
        fdata.append('icon_link', _data.icon_link)
        fdata.append('developer', _data.developer)
        fdata.append('developer_link', _data.developer_link)
        fdata.append('app_category', _data.app_category)
        fdata.append('version', _data.version)
        fdata.append('screen_width', _data.width)
        fdata.append('screen_height', _data.height)
        fdata.append('color', '\'#343434\'')
        return fdata
      }],
      data: _data,
      onUploadProgress (progressEvent) {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    }).then((response) => {
      console.log('success!!!')
      if (typeof callback === 'function') {
        callback(response.data.thumb_img_url)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  initCategory (callback) {
    axios.get('http://inspire.stoyard.com/index.php/api/inspire/getCategoryList').then((response) => {
      let categorydata = response.data.data
      let category = []
      for (let i = 0; i < categorydata.length; i++) {
        // category.push(categorydata[i].name_zh)
        category.push(categorydata[i].name_en)
      }
      if (typeof callback === 'function') {
        callback(category)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  // 获取首页展示图片信息
  uinspireio (callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/viewdata').then((response) => {
      console.log(typeof callback === 'function')
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
          console.log(response.data.code)
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
    // axios({
    //   url: 'http://inspire.stoyard.com/api/user/checkemailcode',
    //   method: 'post',
    //   transformRequest: [(_data) => {
    //     const fdata = new window.FormData()
    //     fdata.append('email', _data[0].email)
    //     fdata.append('code', _data[0].code)
    //     return fdata
    //   }],
    //   data: _data
    // }).then((response) => {
    //   console.log(_data)
    //   console.log('verifyCode:', response)
    //   if (typeof callback === 'function') {
    //     callback(response.data)
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
    axios.get('http://inspire.stoyard.com/api/user/checkemailcode', {
      params: {
        email: _data[0].email,
        code: _data[0].code
      }
    }).then((response) => {
      console.log(typeof callback === 'function')
      if (typeof callback === 'function') {
        callback(response.data)
      }
    }).catch((error) => {
      console.log(error)
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
        console.log(response)
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
  whetherthelogin (callback) {
    axios.get('http://inspire.stoyard.com/api/inspire/islogin').then((response) => {
      console.log(response)
      if (typeof callback === 'function') {
        callback(response)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
