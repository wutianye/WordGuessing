import Vue from 'vue'
import Router from 'vue-router'
import guessing from '@/word_guessing/guessing'
import home from '@/word_guessing/home'
import login from '@/word_guessing/login'
import waiting from '@/word_guessing/waiting'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [    
    {
      path: '/guessing',
      name: 'guessing',
      component: guessing
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/waiting',
      name: 'waiting',
      component: waiting
    }
  ]
})
