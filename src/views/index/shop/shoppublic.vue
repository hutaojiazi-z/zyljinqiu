<template>
  <div>
    <div>
      <img src="http://img.99add.com/@/null/icon/20200314/1,584,159,031,478.png" alt="" class="topImg" />
    </div>
    <div>
      <img src="http://img.99add.com//qd/qrcode/20200202/1,580,634,349,323.png" alt="" class="title">
      <p class="ellipsis-container">姓名：{{userRichname}}</p>
      <p>电话：{{exMtel}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userRichname:"",
      exMtel:""
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
    }
  }
}
</script>