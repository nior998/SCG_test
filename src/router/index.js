import Vue from 'vue'
import Router from 'vue-router'
import Api from '@/pages/Api'
import cv from '@/pages/cv'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: cv
    },
    {
      path: '/API',
      name: 'API',
      component: Api
    }
  ]
})
