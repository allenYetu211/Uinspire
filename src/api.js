import Vue from 'vue'
import json from 'jsonify'
import md from 'md5'

const stamp = Date.parse(new Date())
const token = 'stoyard'
let sing = ''

// const dev = false && /^[localhost|15]/.test(window.location.host)
// const __url__ = dev ?  '' : 'http://text.stoyard.com'

export default {
  loadProjectTextData () {
    sing = stamp + token
    let singsz = md(md(sing))
    console.log(singsz)

    var color = '\'#343434\''
    // color = encodeURI(color)
    Vue.http.get(encodeURI('http://inspire-api.stoyard.com/index.php/api/inspire/adddata?platform=1&category=2&name=allen&color=' + color)).then((response) => {
      console.log(json.parse(response.data))
      if (response.data.code === 0) {
        console.log(222)
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
  progressbar (_progress, callback) {
    // const progress = new window.FormData()
    // let times = setInterval(() => {
    //   Vue.http({}).then((response) => {
    //     if (response.data <= 100) {
    //       if (typeof callback === 'function') {
    //         callback(response.data)
    //       }
    //     } else {
    //       clearInterval(times)
    //     }
    //   }).then((response) => {
    //     clearInterval(times)
    //   })
    // }, 500)
  },
  uploadProject (_data, callback) {
    const fdata = new window.FormData()
    fdata.append('PHP_SESSION_UPLOAD_PROGRESS', _data.PHP_SESSION_UPLOAD_PROGRESS)
    fdata.append('file', _data.file)
    fdata.append('platform', _data.PlatformIndex)
    fdata.append('category', _data.Category.join(','))
    fdata.append('name', _data.name)
    fdata.append('tag', _data.tag.join(','))
    fdata.append('link', _data.link)
    fdata.append('icon_link', _data.icon_link)
    fdata.append('developer', _data.developer)
    fdata.append('developer_link', _data.developer_link)
    fdata.append('app_category', _data.app_category)
    fdata.append('version', _data.version)
    fdata.append('screen_width', _data.width)
    fdata.append('screen_height', _data.height)
    fdata.append('color', '\'#343434\'')
    Vue.http({
      url: 'http://inspire-api.stoyard.com/index.php/api/inspire/adddata',
      method: 'POST',
      emulateJSON: true,
      body: fdata
    }).then((response) => {
      if (json.parse(response.data).code === '0') {
        console.log('返回成功')
        if (typeof callback === 'function') {
          callback(json.parse(response.data).data.thumb_img_url)
        }
        // return self.returnData
      } else {
        console.log('data:', json.parse(response.data))
      }
    }, (response) => {
      console.log('error')
    })
  }
}
