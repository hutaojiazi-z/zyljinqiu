<template>
<div class="index">
  <div>
    <mt-search v-model="value"></mt-search>
    <mt-swipe class="nav" :auto="4000">
      <mt-swipe-item  v-for="item in images" :key="item">
        <img :src="item" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="padding8">
    <div class="enter paddingtb10">
      <el-row>
        <el-col :span="8" v-for="(item,index) in mainmenu" :key="index">
          <img :src="item.src" @click="moveto(index,item)">
          <h3 class="">{{item.name}}</h3>
        </el-col>
      </el-row>
    </div>
    
    <div class="makeMoney padding8">
      <div class="flexBC paddingtb10 paddinglr10">
        <h3 class="fontSize14 fontweight600">赚钱秘籍</h3>
        <span class="gray fontSize13" v-show="!mackemore" @click="lookMore">更多<i class="iconfont icon-iconfontjiantou6 fontSize13"></i></span>
        <span class="gray fontSize13" v-show="mackemore" @click="lookMore">收起<i class="iconfont icon-xiangxiajiantou fontSize13"></i></span>
      </div>
      <ul class="makeDetail fontSize12" style="overflow: hidden;">
        <li>
          <el-col v-for="(item,index) in makemoney" v-show="index < liIndex" :key="index" :span="12" class="marginb10">
            <a href="../page/cheats/merchantsSettled.html">
              <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
              <span class="fontSize12">{{item.name}}</span> 
              <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
            </a>
          </el-col>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        value:"",
        mackemore:false,
        liIndex: 4,
        images:[
          "http://img.99add.com//qd/qrcode/20200207/1,581,056,792,377.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,102,736.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,153,956.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,208,071.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,259,628.png"
        ],
        mainmenu:[
          {
            path:"/index/shopIndex",
            src:"http://img.99add.com/@/null/icon/20200410/1,586,510,868,746.png",
            name:"商家入驻"
         },
         {
            path:"/index/shopIndex",
            src:"http://img.99add.com/@/null/icon/20200410/1,586,510,686,363.png",
            name:"流量主入驻"
         },
         {
            path:"/index/shopIndex",
            src:"http://img.99add.com/@/null/icon/20200410/1,586,510,848,015.png",
            name:"客户经理入驻"
         }
        ],
        makemoney:[
          {
            name:"商家入驻流程",
            url:"#"
          },
          {
            name:"群主入驻流程",
            url:"#"
          },
          {
            name:"商家如何推广",
            url:"#"
          },
          {
            name:"群主怎样赚钱",
            url:"#"
          },
          {
            name:"我是招商领袖该怎么做",
            url:"#"
          },
          {
            name:"我是社群领袖该怎么做",
            url:"#"
          },
          {
            name:"我是运营该怎么做",
            url:"#"
          }
        ]
      
    }
  },
  methods:{
    lookMore(){
      this.mackemore = !this.mackemore;
      this.liIndex = this.liIndex==4?999:4;
    },
    moveto(index,item){
      // this.$route.push(item.path);
      this.$router.push({path:item.path})
      // this.$router.replace({path : item.path});
    }
  }
}
</script>
<style>
.index .mint-searchbar{
  background-color: white !important;
}
.index .mint-searchbar-inner{
  background-color: #EFEFEF  !important;
  border:1px solid #cccccc;
  border-radius: 15px;
}
.index .mint-searchbar-core{
  background-color: #EFEFEF;
}
.index .mint-searchbar-inner .mintui-search{
  font-size: 16px;
  color: #999999;
}
</style>
<style scoped lang="less">
a{
  color: #333333;
}
.nav{
  height: 40vw;
  img{
    height: 100%;
    }
}
.mint-search{
  height: 100%;
}
.enter{
  background-color: white;
  border-radius: 5px;
  text-align: center;
  img{
    width: 10vw;
  }
  h3{
    font-size: 0.65rem;
  }
}
/* 赚钱秘籍 */
.makeMoney {
	background-color: white;
	border-radius: 0.625rem;
	margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  li{
    padding: 0.5rem 0.9375rem;
    border-bottom: 1px solid #F0F0F0;
    &:last-child{
      border-bottom: none;
    }
    a{
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  }
}
.flexBC{
  display: flex;
  justify-content: space-between;
}
.hotSpan{
	padding: 0.0625rem 0.125rem;
	margin-right: 1px;
}
.colorC{
	color: #CCCCCC;
}

/* 赚钱秘籍 */
</style>