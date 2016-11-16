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
    let sings = md(sing)
    let singsz = md(sings)
    Vue.http.post('http://inspire-api.stoyard.com/index.php/api/inspire/adddata' + '?stamp=' + stamp + '&token=' + token + '&sign=' + singsz).then((response) => {
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
