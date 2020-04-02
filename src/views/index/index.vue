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
    <div class="enter">
      <el-row>
        <el-col class="paddinglr15" :span="12">
          <img src="http://img.99add.com/@/null/icon/20200323/1,584,953,788,889.png">
        </el-col>
        <el-col class="paddinglr15" :span="12">
          <img src="http://img.99add.com/@/null/icon/20200323/1,584,953,721,715.png" >
        </el-col>
      </el-row>
    </div>
    
    <div class="makeMoney padding8">
      <div class="flexBC paddingtb10 paddinglr10">
        <h3 class="fontSize14 fontweight600">赚钱秘籍</h3>
        <span class="gray fontSize13" v-show="!mackemore" @click="lookMore">更多<i class="iconfont icon-iconfontjiantou6 fontSize13"></i></span>
        <span class="gray fontSize13" v-show="mackemore" @click="lookMore">收起<i class="iconfont icon-xiangxiajiantou fontSize13"></i></span>
      </div>
      <ul class="makeDetail fontSize12">
        <li>
          <el-row>
            <el-col :span="12">
              <a href="../page/cheats/merchantsSettled.html">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">商家入驻流程</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
            </el-col>
            <el-col :span="12">
              <a href="../page/cheats/groupSettled.html" class="mui-col-xs-6 mui-col-sm-6 paddingl5">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">群主入驻流程</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
            </el-col>
          </el-row>
        </li>
        <li class="mui-row">
          <el-row>
            <el-col :span="12">
              <a href="../page/cheats/merchant.html" class="mui-col-xs-6 mui-col-sm-6">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">商家如何推广</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
          </el-col>
            <el-col :span="12">
              <a href="../page/cheats/group _owner.html" class="mui-col-xs-6 mui-col-sm-6 paddingl5">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">群主怎样赚钱</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
           </el-col>
          </el-row>
        </li>
        <li class="mui-row" v-show="mackemore">
          <el-row>
            <el-col :span="12">
              <a href="../page/cheats/merchant.html" class="mui-col-xs-6 mui-col-sm-6">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">我是招商领袖该怎么做</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
          </el-col>
            <el-col :span="12">
              <a href="../page/cheats/group _owner.html" class="mui-col-xs-6 mui-col-sm-6 paddingl5">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">我是社群领袖该怎么做</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
           </el-col>
          </el-row>
        </li>
        <li class="mui-row" v-show="mackemore" >
          <el-row>
            <el-col :span="12">
              <a href="../page/cheats/merchant.html" class="mui-col-xs-6 mui-col-sm-6">
                <span class="bg-yellow fontSize6 hotSpan marginr5">HOT</span>
                <span class="fontSize12">我是运营该怎么做</span> 
                <i class="iconfont icon-youjiantou-tianchong colorC marginl5 fontSize13"></i>
              </a>
           </el-col>
          </el-row>
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
        images:[
          "http://img.99add.com//qd/qrcode/20200207/1,581,056,792,377.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,102,736.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,153,956.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,208,071.png",
          "http://img.99add.com/@/qd/qrcode/20191226/1,577,329,259,628.png"
        ]
      
    }
  },
  methods:{
    lookMore(){
      this.mackemore = !this.mackemore;
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
  padding: 2vw;
  img{
    width: 100%;
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