// 右侧栏展开收起
export const INSPIRTNAVSIDEBAR = 'inspirtnavsidebar'
export const inspirtnavsidebar = ({commit}) => { commit(INSPIRTNAVSIDEBAR) }

export const LISTARRANGE = 'listArrange'
export const listArrange = ({commit}) => { commit(LISTARRANGE) }

export const LISTARRANGETWO = 'listArrangetwo'
export const listArrangetwo = ({commit}) => { commit(LISTARRANGETWO) }

export const NAVIGATIONTITLE = 'navigationtitle'
export const navigationtitle = ({commit}, slide) => {
  commit(NAVIGATIONTITLE, slide)
}

export const SIDEBARRIGHT = 'sidebarright'
export const sidebarright = ({commit}, slide) => { commit(SIDEBARRIGHT) }

export const SIDEBARLEFT = 'sidebarleft'
export const sidebarleft = ({commit}, slide) => { commit(SIDEBARLEFT) }
