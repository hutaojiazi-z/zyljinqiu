<template>
  <div>
    <search placeholder="请输入检索内容" @inputValue="inputValue" ref="search">
     <span class="jsBtn" @click="getinputValue">索检</span>
    </search>
    <baidu-map class="bm-view" :zoom="zoom" :center="position">
      <bm-marker :position="position" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" @click="maskClick" @dragend="maskDragend"></bm-marker>
      <bm-local-search :keyword="searchName" :auto-viewport="true" :location="searchName" @searchcomplete="getList" :selectFirstResult="true"></bm-local-search>
    </baidu-map>
    <div>

    </div>
  </div>
</template>

<script>
import search from "./search";
  export default {
    components:{
      search
    },
    data(){
      return{
        zoom:18,//缩放大小
        searchName:"",
        position:{
          lng:104.07,
          lat:30.67
        }
        
      }
    },
    methods:{
      inputValue(data){
        this.searchName = data;
        console.log(this.searchName)
      },
      getinputValue(){
        this.$refs.search.getkeyValue()
      },
      maskClick(e){//地图图标点击
        console.log(e)
        let target = e.target.point;
        this.position.lng = target.lng;
        this.position.lat = target.lat;
      },
      maskDragend(e){//地图图标拖拽
        console.log(e)
        let target = e.target.point;
        this.position.lng = target.lng;
        this.position.lat = target.lat;
      },
      getList(e){
        console.log(e)
      }
    }
  }
</script>

<style lang="less" scoped>
  .jsBtn{
    display: inline-block;
    width: 40px;
    padding: 0 10px;
    font-weight: bold;
  }
  .bm-view{
    width: 100vw;
    height: 60vh;
  }
</style>