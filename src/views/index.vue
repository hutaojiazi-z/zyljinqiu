<template>
<div class="index">
    <router-view></router-view>
    <div class="bottomBtn">
      <div v-for="(item,index) in menuList" :key="index" :class="activeMenu==index?'active':''"  @click="moveto(item,index)">
          <i class="iconfont" :class="item.icon"></i>
					<p>{{item.name}}</p>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      activeMenu:0,
      menuList:[
        {
          path:"/index",
          icon:"icon-shouye",
          name:"首页"
        },
         {
          path:"/store",
          icon:"icon-shangcheng-xianxing",
          name:"商城"
        },
         {
          path:"/message",
          icon:"icon-xiaoxi1",
          name:"消息"
        },
         {
          path:"/mine",
          icon:"icon-wode",
          name:"我的"
        }
      ]
    }
  },
  methods:{
    moveto(d, i){
      this.activeMenu = i;
      this.$router.replace({path : d.path});
    }
  }
}
</script>
<style scoped lang="less">
.bottomBtn{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: white;
  padding: 5px 0;
  div{
    text-align: center;
    text-decoration: none;
    color: #999999;
  }
  .active{
    color: #FEA61C;

  }
}
</style>