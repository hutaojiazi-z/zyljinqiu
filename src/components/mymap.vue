<template>
  <div class="mymap">
    <search placeholder="请输入检索内容" @inputValue="inputValue" ref="search">
      <span class="jsBtn" slot="cancel" @click="cancel">取消</span>
      <span class="jsBtn" @click="getinputValue">检索</span>
    </search>
    <baidu-map class="bm-view" :zoom="zoom" center="成都">
      <!-- 标记 -->
      <!-- <bm-marker
        :position="position"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @click="maskClick"
        @dragend="maskDragend"
      ></bm-marker> -->
      <!-- 搜索 -->
      <bm-local-search
        :keyword="searchName"
        :auto-viewport="true"
        :location="searchName"
        @searchcomplete="getList"
        :selectFirstResult="true"
        :panel = "false"
      ></bm-local-search>
      <!-- 定位 -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" @locationSuccess="positionSus" :showAddressBar="false" :autoLocation="true"></bm-geolocation>
      <!-- 缩放 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
    <!-- 搜索结果列表 -->
    <ol>
      <li v-for="(item,index) in resultList" :key="index" style="margin: 2px 0px; padding: 0px 5px 5px 0px; cursor: pointer; overflow: hidden; line-height: 17px;" @click="choseDress(item)">
        <span  :style="'background:url(https://api.map.baidu.com/images/markers.png) -23px '+((-25)*index)+'px no-repeat;width:19px;height:25px;cursor:pointer;float:left;*zoom:1;overflow:hidden;margin:2px 3px 0 5px;*margin-right:0px;display:inline;'"
        >&nbsp;</span>
        <div style="zoom:1;overflow:hidden;padding:0 5px;">
          <div style="line-height:20px;font-size:12px;">
            <span style="color:#00c;">
              <b>{{item.title}}</b>
            </span>
          </div>
          <div style="padding:2px 0;line-height:18px;*zoom:1;overflow:hidden;">
            <b
              style="float:left;font-weight:bold;*zoom:1;overflow:hidden;padding-right:5px;*margin-right:-3px;"
            >地址:</b>
            <span style="color:#666;display:block;zoom:1;overflow:hidden;">{{item.address}}</span>
          </div>
        </div>
      </li>
    </ol>
    <div></div>
  </div>
</template>

<script>
import search from "./search";
export default {
  components: {
    search
  },
  data() {
    return {
      zoom: 18, //缩放大小
      searchName: "",
      position: {
        lng: 104.07,
        lat: 30.67
      },
      resultList: []
    };
  },
  methods: {
    inputValue(data) {
      this.searchName = data;
    },
    getinputValue() {
      this.$refs.search.getkeyValue();
    },
    maskClick(e) {
      //地图图标点击
      console.log(e);
      let target = e.target.point;
      this.position.lng = target.lng;
      this.position.lat = target.lat;
    },
    maskDragend(e) {
      //地图图标拖拽
      console.log(e);
      let target = e.target.point;
      this.position.lng = target.lng;
      this.position.lat = target.lat;
    },
    getList(e) {
      if (e) {
        console.log(e.Ir);
        this.resultList = e.Ir
      }
    },
    positionSus(res){
      console.log(res)
      this.position.lng = res.point.lng;
      this.position.lat = res.point.lat;
    },
    choseDress(res){
      this.$bus.$emit("choseDetail",res)
      this.$router.go(-1);
    },
    cancel(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.mymap{
  min-height: 100vh;
  z-index: 999;
  overflow: hidden;
}
.jsBtn {
  display: inline-block;
  width: 28px;
  padding: 0 10px;
  font-weight: bold;
}
.bm-view {
  width: 100vw;
  height: 60vh;
}
</style>