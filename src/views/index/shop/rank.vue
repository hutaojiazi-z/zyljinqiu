<template>
  <div class="padding8">
    <div class="head">
      <dl v-for="item in headData" :key="item.level" @click="refersTo(item)">
        <img :src="item.img" />
				<dd>{{item.num}}人</dd>
      </dl>
    </div>
    <ul class="content margint20">
      <li class="flexBC"  v-for="item in conData" :key="item.level" @click="refersTo(item)">
        <img :src="item.img" />
        <div>已有{{item.num}}人 <i class="iconfont icon-iconfontjiantou6"></i></div>
      </li>
    </ul>
  </div>
</template>

<script>
import bdMap from "../../../components/mymap";
  export default {
    components:{
      bdMap
    },
    data(){
      return {
        headData: [
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,240,440.png",
            num: 0,
            level:6
          },
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,261,721.png",
            num: 0,
            level:7
          },
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,219,981.png",
            num: 0,
            level:5
          },
        ],
        conData: [
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,201,367.png",
            num: 0,
            level:4
          },
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,181,557.png",
            num: 0,
            level:3
          },
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,144,762.png",
            num: 0,
            level:2
          },
          {
            img: "http://img.99add.com/@/qd/qrcode/20200314/1,584,160,064,525.png",
            num: 0,
            level:1
          },
        ]
      }
    },
    mounted(){
      this.getDetail()
    },
    methods:{
      getDetail(){
        let url = window.url.qshPath + "/OuccsExl/selectOuccesLevel";
        this.$axios.get( url, {})
        .then( (res) => {
          let dataList = res.data.data;
          this.headData[0].num = dataList[5].num;
          this.headData[1].num = dataList[6].num;
          this.headData[2].num = dataList[4].num;
          this.conData[0].num = dataList[3].num;
          this.conData[1].num = dataList[2].num;
          this.conData[2].num = dataList[1].num;
          this.conData[3].num = dataList[0].num;
        })
      },
      refersTo(obj){
        alert(obj.level)
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../../assets/css/common.less';
  .head{
    background-color: @base;
    border-radius: 12px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 0 3px #FEA61C;
    dl{
      padding: 8px 10px 0 10px;
      position: relative;
      dd{
        position: absolute;
        width: 100%;
        bottom: 20%;
        left: 0;
        color: white;
        text-align: center;
      }
      .meddim{
        bottom: calc( 20% + 10px );
      }
    }
  }
  .content{
    
    li + li{
      border-top: 1px solid #E6E6E6;
    }
    li{
      padding: 5px 15px;
      img{
        width: 90px;
      }
    }
  }
</style>