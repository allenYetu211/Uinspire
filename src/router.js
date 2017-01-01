import Inspire from './components/inspire-view'
import Login from './components/login'
import UpdatePage from './components/updataPage'
import IndexApp from './components/index-app'
import UserProfile from './components/user-profile'
import UserJoinus from './components/user-joinus'
import MoodBoardDetail from './components/moodboard-detail'
import MoodBoardDetailProject from './components/moodboard-datail-project'
import MoodBoardDetailView from './components/moodboard-datail-view'
import AppWall from './components/app-wall'
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
    path: '/IndexApp/:appid',
    name: 'IndexApp',
    component: IndexApp
  }, {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  }, {
    path: '/UserJoinus',
    name: 'UserJoinus',
    component: UserJoinus
  }, {
    path: '/AppWall',
    name: 'AppWall',
    component: AppWall
  }, {
    path: '/MoodBoardDetail',
    name: 'MoodBoardDetail',
    component: MoodBoardDetail,
    children: [
      {
        path: 'home',
        name: 'MoodBoardDetailProject',
        component: MoodBoardDetailProject
      }, {
        path: 'MoodBoardDetailView',
        name: 'MoodBoardDetailView',
        component: MoodBoardDetailView
      }
    ]
  }, {
    path: '*',
    redirect: '/inspire'
  }
]
