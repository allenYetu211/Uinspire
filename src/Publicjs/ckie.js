export default {
  setCookie (name, val) {
    let Days = 30
    let exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(val)
  },
  getCookie (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (document.cookie.match(reg)) {
      return unescape(document.cookie.match(reg)[2])
    }
  },
  deleteCookie (name) {
    this.setCookie(name, '')
  },
  setDigital (digital) {
    for (let name in digital) {
      this.setCookie(name, digital[name])
    }
  }
}
