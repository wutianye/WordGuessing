import Vue from 'vue'
import Router from 'vue-router'
import guessing from '@/word_guessing/guessing'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [    
    {
      path: '/guessing',
      name: 'guessing',
      component: guessing
    }
  ]
})
