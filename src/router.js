import Inspire from './components/inspire-view'
export default [
  {
    path: '/inspire',
    name: 'inspire',
    component: Inspire
  }, {
    path: '*',
    redirect: '/inspire'
  }
]
