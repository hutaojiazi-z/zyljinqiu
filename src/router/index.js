import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import store from '@/views/store/store'
import help from '@/views/help/help'
import message from '@/views/message/message'
import mine from '@/views/mine/mine'
import messageSet from '@/views/setting/setMsg'
import shopIndex from '@/views/index/shop/shopIndex'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:'/index',
      component: index
    },
    {//首页
      path: '/index',
      component: index
    },
    {//商城
      path: '/store',
      component: store
    },
    {//消息
      path: '/message',
      component: message,
    },
    {//我的
      path: '/mine',
      component: mine
    },
    {//消息设置
      path: '/message/setting',
      component: messageSet
    },
    {//千商会首页
      path: '/index/shopIndex',
      component: shopIndex
    },
  ]
})
