import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import store from '@/views/store/store'
import help from '@/views/help/help'
import message from '@/views/message/message'
import mine from '@/views/mine/mine'
import messageSet from '@/views/setting/setMsg'
// 商家入驻
import shopIndex from '@/views/index/shop/shopIndex'
import attract from '@/views/index/shop/attract'
import shopenterIn from '@/views/index/shop/shopenterIn'
import shoppublic from '@/views/index/shop/shoppublic'
import rank from '@/views/index/shop/rank'
// 地图
import mymap from '@/components/mymap'

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
      component: index,
      meta:{
        is_indexMenu:true
      }
    },
    {//商城
      path: '/store',
      component: store,
      meta:{
        is_indexMenu:true
      },
    },
    {//消息
      path: '/message',
      component: message,
      meta:{
        is_indexMenu:true
      },
    },
    {//我的
      path: '/mine',
      component: mine,
      meta:{
        is_indexMenu:true
      },
    },
    {//消息设置
      path: '/message/setting',
      component: messageSet
    },
    {//千商会首页
      path: '/index/shopIndex',
      component: shopIndex,
      redirect:'/index/shopIndex/shopenterIn',
      
      children:[
        {//商家入驻
          path: 'shopenterIn',
          component: shopenterIn,
          meta:{
            is_qshMenu:true
          },
        },
        {//招商
          path: 'attract',
          component: attract,
          meta:{
            is_qshMenu:true
          },
        },
        {//商家推广
          path: 'shoppublic',
          component: shoppublic,
          meta:{
            is_qshMenu:true
          },
        },
        {//等级排行
          path: 'rank',
          component: rank,
          meta:{
            is_qshMenu:true
          },
        },
        {
          path: 'mymap',
          name: 'mymap',
          component: mymap
        }
      ]
    },
  ]
})
