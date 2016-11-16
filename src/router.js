import Inspire from './components/inspire-view'
import Login from './components/login'
import UpdatePage from './components/updataPage'
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
    path: '*',
    redirect: '/inspire'
  }
]
