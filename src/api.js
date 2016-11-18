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
  uploadProject (_data) {
    console.log(_data.file)
    const fdata = new window.FormData()
    fdata.append('file', _data.file)
    fdata.append('platform', _data.PlatformIndex)
    fdata.append('category', _data.category)
    fdata.append('name', _data.name)
    fdata.append('link', _data.link)
    fdata.append('color', '\'#343434\'')

    Vue.http({
      url: 'http://inspire-api.stoyard.com/index.php/api/inspire/adddata',
      method: 'POST',
      emulateJSON: true,
      body: fdata
      // params: {
      //   platform: _data.PlatformIndex,
      //   category: _data.category,
      //   name: _data.name,
      //   link: _data.link,
      //   color: '\'#343434\''
      // }
    }).then((response) => {
      let respon = json.parse(response.data)
      console.log('data:', _data)
      console.log(respon)
    }, (response) => {
      console.log('error')
    })
  }
}
