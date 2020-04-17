<template>
  <div>
    <div class="header">
      <img src="http://img.99add.com//qd/qrcode/20200313/1,584,066,431,229.png" />
      <button class="whyBtn" @click="showMask">为什么大卖？</button>
    </div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <mask1 :isShow="isShow" v-if="isShow">
      <button slot="bg" @click="clickClose">1111</button>
      <button slot="btn" @click="clickClose" class="btnIkonw">22222</button>
    </mask1>
  </div>
</template>
<script>
import mask1 from "../../../components/marsk"
export default {
  components:{
    mask1
  },
  data() {
    return {
      input: '',
      isShow: false
    }
  },
  methods: {
    showMask() {
      this.isShow = true
    },
    clickClose() {
      // this.isShow = false
    }
  },
}
</script>
<style lang="less" scoped>
.header{
  position: relative;
  .whyBtn{
    background-color: #FCDA4B;
    color: #FD931C;
    border: none;
    border-radius: 15px 0 0 15px;
    font-weight: bold;
    padding: 3px 10px;
    position: absolute;
    top: 20px;
    right: 0;
  }
}

</style>