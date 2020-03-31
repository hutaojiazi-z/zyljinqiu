<template>
<div class="index">
  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="tab1">
        <mainIndex></mainIndex>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab2">
      <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab3">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab4">
      <mt-cell v-for="n in 50" :title="'选项 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab5">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
  <!-- <router-view></router-view> -->
  <!-- 底部标签 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
          <i class="iconfont icon-shouye navfont"></i>
					<p class="mui-tab-label">首页</p>
      </mt-tab-item>
      <mt-tab-item id="tab2">
          <i class="iconfont icon-shangcheng-xianxing navfont"></i>
					<p class="mui-tab-label">商城</p>
      </mt-tab-item>
      <mt-tab-item id="tab3">
					<i class="iconfont icon-xiaoxi1 navfont"></i>
					<p class="mui-tab-label">消息</p>
      </mt-tab-item>
      <mt-tab-item id="tab4">
					<i class="iconfont icon-iconfontbangzhu" style="font-size: 21px;"></i>
					<p class="mui-tab-label">帮助</p>
      </mt-tab-item>
      <mt-tab-item id="tab5">
					<i class="iconfont icon-wode navfont"></i>
					<p class="mui-tab-label">我的</p>
      </mt-tab-item>
    </mt-tabbar>
</div>
</template>
<script>
import mainIndex from "./index/index";
export default {
  components:{
    mainIndex
  },
  name: 'app',
  data () {
    return {
        selected:"tab1"
    }
  }
}
</script>
<style>
.mint-tab-container{
  position: relative;
  bottom: 50px;
  overflow: scroll;
}
</style>
<style scoped lang="less">
.index{
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
}
.buttombtn{
  position: absolute;
  bottom: 0;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: white;
  color: #FEA61C;
}
</style>