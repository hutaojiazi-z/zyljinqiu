<template>
  <div class="shopIndex">
    <div class="minbody">
      <router-view></router-view>
    </div>
    <div class="bottomBtn">
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
          path:"/index/shopIndex/shopenterIn",
          icon:"icon-woyaokaidianwodedianpu",
          name:"商家入驻"
        },
         {
          path:"/index/shopIndex/attract",
          icon:"icon-zhaoshangxiaochengxu-yaoqingbang",
          name:"我要招商"
        },
         {
          path:"/index/shopIndex/shoppublic",
          icon:"icon-qun",
          name:"入群推广"
        },
         {
          path:"/index/shopIndex/rank",
          icon:"icon-fenpei",
          name:"等级排行"
        }
      ]
    }
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
.minbody{
  margin-bottom: 50px;
}
.bottomBtn{
  z-index: 1;
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