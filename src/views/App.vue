<template>
<div class="index">
    <router-view></router-view>
    <div class="bottomBtn" v-if="$route.meta.is_indexMenu">
      <!-- :class="activeMenu==index?'active':''" -->
      <div v-for="(item,index) in menuList" :key="index" :class="{'active':isactive(item)}"  @click="moveto(item,index)">
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
          icon:"icon-xiaoxi",
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
  mounted(){
    // console.log(this.$route)
  },
  computed:{
    
  },
  methods:{
    isactive(d){
      let thePath = this.$route.path;
      return d.path == thePath;
    },
    moveto(d, i){
      this.activeMenu = i;
      this.$router.replace({path : d.path});
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/common.less';
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
    color: @base;

  }
}
</style>