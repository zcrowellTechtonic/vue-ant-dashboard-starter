import Vue from 'vue'
import Router from 'vue-router'
import MainDashGrid from './views/MainDashGrid.vue'
import ProjectDetails from './views/ProjectDetailsDashGrid.vue'
import Reports from './views/Reports.vue'
import AccountInfo from './views/AccountInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'maindashgrid',
      component: MainDashGrid
    },
    {
      path: '/projectdetails',
      name: 'projectdetails',
      component: ProjectDetails
    },
    {
      path: '/reports',
      name: 'about',
      component: Reports
    },
    {
      path: '/accountinfo',
      name: 'accountinfo',
      component: AccountInfo
    }
  ]
})
