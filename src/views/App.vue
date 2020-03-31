<template>
  <div id="app">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 1" title="tab-container 4" :key="n"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab-container1">
        <i class="iconfont icon-shouye navfont"></i>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="tab-container2">
       <i class="iconfont icon-shangcheng-xianxing navfont"></i>
        <p>商城</p>
      </mt-tab-item>
      <mt-tab-item id="tab-container3">
       <i class="iconfont icon-using_help navHelp"></i>
        <p>帮助</p>
      </mt-tab-item>
       <mt-tab-item id="tab-container4">
        <i class="iconfont icon-wode navfont"></i>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      active:"tab-container1"
    }
  }
}
</script>

<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    color: #FEA61C;
  }
  .mint-tab-item-label i{
    font-size: 18px;
  }
  .mint-tab-item-label p{
    line-height: 21px;
    font-size: 12px;
  }
</style>>

