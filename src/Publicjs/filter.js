const filter = {
  newdata: {},
  addfilter (contrastles, data) {
    this.newdata.push(this.addset(data))
    console.log(this.newdata)
  },
  lessfilter (contrastles, data) {
    console.log(22)
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
