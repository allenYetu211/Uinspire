const filter = {
  newdata: [],
  addfilter (data) {
    this.newdata.push({'conimg': this.addset(data)})
    return this.newdata
  },
  lessfilter (contrastles, data) {
    for (let i in contrastles) {
      if (contrastles[i] === data) {
        contrastles[i].remove
      }
    }
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
