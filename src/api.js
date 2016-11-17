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
  }
}
