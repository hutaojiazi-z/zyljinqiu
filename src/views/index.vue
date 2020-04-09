<template>
<div class="index">
  <!-- tab-container -->
  <!-- <mt-tab-container v-model="selected">
    <mt-tab-container-item id="tab1">
        <mainIndex></mainIndex>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab2">
      <store></store>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab3">
      <message></message>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab4">
      <mt-cell v-for="n in 50" :title="'选项 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab5">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container> -->
      <router-view></router-view>
  <!-- 底部标签 -->
    <div class="bottomBtn">
      <router-link class="active" to="/index">
          <i class="iconfont icon-shouye navfont"></i>
					<p>首页</p>
      </router-link>
      <router-link to="/store">
          <i class="iconfont icon-shangcheng-xianxing navfont"></i>
					<p>商城</p>
      </router-link>
      <router-link to="/message">
					<i class="iconfont icon-xiaoxi1 navfont"></i>
					<p>消息</p>
      </router-link>
      <router-link to="/help">
					<i class="iconfont icon-wode navfont"></i>
					<p>帮助</p>
      </router-link>
      <router-link to="/mine">
					<i class="iconfont icon-wode navfont"></i>
					<p>我的</p>
      </router-link>
    </div>
</div>
</template>
<script>
import mainIndex from "./index/index";
import store from "./store/store";
import message from "./message/message"
export default {
  components:{
    mainIndex,
    store,
    message
  },
  name: 'app',
  data () {
    return {
        
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
  a{
    text-align: center;
    text-decoration: none;
    color: #999999;
    
  }
  .active{
    color: #FEA61C;

  }
}
</style>