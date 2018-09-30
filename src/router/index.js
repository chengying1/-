import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/index',
      redirect:'/'
    },
    {
      path: '/region',
      meta:{title:"新用户注册"},
      component: () => import('../views/region.vue')
    },
    {
      path: '/writeNote',
      meta:{title:"写笔记"},
      component: () => import('../views/writeNote.vue')
    }
  ]
})
