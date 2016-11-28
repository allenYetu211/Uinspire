export const LOADTEXT = 'loadtext'
export const loadtext = ({commit}) => { commit(LOADTEXT) }

export const POSTIMGDATA = 'postimgdata'
export const postimgdata = ({commit}, updata) => { commit(POSTIMGDATA, updata) }

//  存储浏览器拖拽显示图片， 用于删除显示

export const STOREIMAGEDATA = 'storeimagedata'
export const storeimagedata = ({commit}, imagesinformation) => { commit(STOREIMAGEDATA, imagesinformation) }

// 删除存储与Vuex 中存储的图片信息状态
export const DELETEIMAGEDATA = 'deleteimagedata'
export const deleteimagedata = ({commit}, _deleteIndex) => { commit(DELETEIMAGEDATA, _deleteIndex) }
