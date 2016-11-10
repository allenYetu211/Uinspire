window.Array.prototype.remove = function (from, to) {
  // from === undefined ? 0 : from
  var rest = this.slice((to || from) + 1 || this.length)
  this.length = from < 0 ? this.length + from : from
  return this.push.apply(this, rest)
}
const filter = {
  newdata: [],
  addfilter (data) {
    // this.newdata.push({'conimg': this.addset(data)})
    this.newdata.push(this.addset(data))
    return this.newdata
  },
  lessfilter (contrastles, data) {
    // keysv = Object.keys(this.newdata).filter(function (x) {
    //   if (self.newdata[x] === data) {
    //     console.log(x)
    //     return x
    //   }
    // })
    var _index = ''
    for (let i = 0; i < this.newdata.length; i++) {
      if (this.newdata[i] === data) {
        _index = i
      }
    }
    this.newdata.remove(_index)
    return this.newdata
    // console.log(newDate.slice([keysv[0]], 1).concat(this.newdata.slice(1)))
    // console.log(this.newdata.splice([keysv[0]], 1))
    // return newDate.slice([keysv[0]], 1).concat(this.newdata.slice(1))
    // return delete contrastles.contrastles[keysv]
    // for (let i in contrastles) {
    //   if (contrastles[i] === data) {
    //     console.log(i)
    //   }
    // }
  },
  addset (_d) {
    let adds = this.newdata['contras'] = _d
    return adds
  }
}

// export default function filter (contrastles, data) {
//   console.log(contrastles)
// }

export default filter
