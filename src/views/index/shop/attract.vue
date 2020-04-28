<template>
  <div>
    <div ref="box">
      <div>
        <img @load="candraw('listingImg1')" src="http://img.99add.com/@/null/icon/20200314/1,584,159,031,478.png" alt="二维码"/>
      </div>
      <div class="flex flexc paddingtb20 paddinglr20">
        <div class="Qrcode">
          <img @load="candraw('listingImg2')" src="~static/img/chart.png" alt=""/>
        </div>
        <div class="flex1 imgr paddingr15">
          <img @load="candraw('listingImg3')" src="http://img.99add.com//qd/qrcode/20200202/1,580,634,349,323.png" alt="">
          <p class="ellipsis-container">姓名：{{userRichname}}</p>
          <p>电话：{{exMtel}}</p>
        </div>
        
      </div>
    </div>
    <img class="mainImg" :src="imgUrl" alt="">
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  data(){
    return{
      listingImg1:false,
      listingImg2:false,
      listingImg3:false,
      userRichname:"",
      exMtel:"",
      imgUrl:""
    }
  },
  mounted(){
    this.getuserInfo();
  },
  methods:{
    getuserInfo(){
      let userInfo = JSON.parse(localStorage.getItem("userInfo")); 
      this.userRichname = userInfo.userRichname;
      this.exMtel = userInfo.exMtel;
    },
    candraw(pram){
      this[pram] = true;
      this.draw();
    },
    draw(){
      var that = this;
          console.log(222)
      if(that.listingImg1 && that.listingImg2 && that.listingImg3){
        window.pageYOffset = 0;
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        html2canvas(that.$refs.box,{useCORS:true}).then(function(canvas) {
      　　that.imgUrl = canvas.toDataURL()//将canvas转为base64图片(eg. data:image/png;base64,ijskjlkj)
    　　});
      }
    }
  }
}
</script>
<style lang="less" scoped>
.Qrcode{
  width: 25vw;
  img{
    width: 100%;
  }
}
.imgr{
  margin-left: 30px;
}
.mainImg{
  position: absolute;
  top: 0;
  width: 100%;
  // height: 100vh;
}
</style>