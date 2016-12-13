export const CONTRASTS = 'contrasts'
export const contrasts = ({commit}, types) => { commit(CONTRASTS, types) }

export const LESSCONTRASTS = 'lesscontrasts'
export const lesscontrasts = ({commit}, types) => { commit(LESSCONTRASTS, types) }

export const ADDLIKE = 'addlike'
export const addlike = ({commit}) => { commit(ADDLIKE) }

export const LESSLIKE = 'lesslike'
export const lesslike = ({commit}) => { commit(LESSLIKE) }

export const COMTRAST = 'comtrast'
export const comtrast = ({commit}) => { commit(COMTRAST) }

export const COMTRASTOPEN = 'comtrastopen'
export const comtrastopen = ({commit}) => { commit(COMTRASTOPEN) }

export const FILMSLIDE = 'filmslide'
export const filmslide = ({commit}, inx) => { commit(FILMSLIDE, inx) }

export const ADDFILMSLIDE = 'addfilmsilde'
export const addfilmsilde = ({commit}) => { commit(ADDFILMSLIDE) }

export const LESSFILMSLIDE = 'lessfilmsilde'
export const lessfilmsilde = ({commit}) => { commit(LESSFILMSLIDE) }

// Moodbarod 删除项目
export const DELETEMOODBRADOD = 'deletemoodbarod'
export const deletemoodbarod = ({commit}) => { commit(DELETEMOODBRADOD) }

// Moodbarod 删除框显示隐藏
export const SHOWCOLSEMOODBRADOD = 'showcolsemoodbarod'
export const showcolsemoodbarod = ({commit}) => { commit(SHOWCOLSEMOODBRADOD) }
