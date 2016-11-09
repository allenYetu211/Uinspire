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
