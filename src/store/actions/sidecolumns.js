export const SIDE = 'side'
export const side = ({commit}) => { commit(SIDE) }

export const LISTARRANGE = 'listArrange'
export const listArrange = ({commit}) => { commit(LISTARRANGE) }

export const LISTARRANGETWO = 'listArrangetwo'
export const listArrangetwo = ({commit}) => { commit(LISTARRANGETWO) }

export const NAVIGATIONTITLE = 'navigationtitle'
export const navigationtitle = ({commit}, slide) => {
  commit(NAVIGATIONTITLE, slide)
}
