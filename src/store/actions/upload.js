export const LOADTEXT = 'loadtext'
export const loadtext = ({commit}) => { commit(LOADTEXT) }

export const POSTIMGDATA = 'postimgdata'
export const postimgdata = ({commit}, updata) => { commit(POSTIMGDATA, updata) }
