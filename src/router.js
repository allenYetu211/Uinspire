import Inspire from './components/inspire-view'
import Login from './components/login'
import UpdatePage from './components/updataPage'
import IndexApp from './components/index-app'
import UserProfile from './components/user-profile'
export default [
  {
    path: '/inspire',
    name: 'inspire',
    component: Inspire
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/updatePage',
    name: 'updatePage',
    component: UpdatePage
  }, {
    path: '/IndexApp',
    name: 'IndexApp',
    component: IndexApp
  }, {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  }, {
    path: '*',
    redirect: '/inspire'
  }
]
