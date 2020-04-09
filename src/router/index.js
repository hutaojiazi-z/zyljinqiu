import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import messageSet from '@/views/setting/setMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/login',
      component: index
    },
    {
      path: '/messageSet',
      component: messageSet
    }
  ]
})
