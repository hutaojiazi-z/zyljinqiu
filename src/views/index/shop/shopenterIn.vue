<template>
  <div class="shopenterIn">
    <div class="header">
      <img src="http://img.99add.com//qd/qrcode/20200313/1,584,066,431,229.png" />
      <button class="whyBtn" @click="isShow = !isShow">为什么大卖？</button>
    </div>
    <div class="padding8 content">
      <el-form ref="form" :model="form" label-width="auto" size="mini" label-position	="left">
        <div class="liBG">
          <h3 class="lihead paddingl8">基本信息(请您据实填写相关信息)</h3>
          <el-form-item label="店铺名称：">
            <el-input v-model="form.shopName"></el-input>
          </el-form-item>
          <el-form-item label="店铺联系人：">
            <el-input v-model="form.weixinId"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话：">
            <el-input v-model="form.shopName"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类：">
            <el-input v-model="form.shopType" placeholder="可在任意一级菜单停止选择"></el-input>
          </el-form-item>
        </div>
        <div class="liBG margint10">
          <h3 class="lihead paddingl8">选填项</h3>
          <el-form-item label="商家地址：">
          <el-input v-model="form.shopAddress" placeholder="点击此处选择地址"></el-input>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input v-model="form.shopAddressDetails" placeholder="填写具体地址，如幢数，门牌号"></el-input>
        </el-form-item>
        </div>
        <div class="margint5 fontSize12">
          <el-checkbox class="wh16" v-model="read"></el-checkbox><span class="marginl5">我已阅读并同意<span class="ogred readnotice" @click="readnotice = !readnotice">阅读须知</span><span class="gray fontSize10 marginl5">邀请人：某某某</span></span>
        </div>
          <el-button class="bg-yellow savebtn margintb20" type="primary">提交</el-button>
      </el-form>
    </div>
    
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
    <mask1 v-if="isShow">
      <img src="http://img.99add.com//qd/qrcode/20200313/1,584,078,895,411.png" />
      <div class="paddinglr10 margintb20 btnIkonw">
       <el-button class="bg-yellow savebtn " @click="isShow = !isShow">我知道了</el-button>
      </div>
    </mask1>
    <mask1 v-if="readnotice">
    <h3>阅读须知</h3>
      <div class="paddinglr10 margintb20 btnIkonw">
       <el-button class="bg-yellow savebtn "  @click="readnotice = !readnotice">我知道了</el-button>
      </div>
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
      isShow: false,
      readnotice:false,
      form:{
        shopName:'',
        weixinId:'',
        date1:"",
        shopType:'',
        shopAddress:'',
        shopAddressDetails:'',
        superPhone:''
      },
      read:0
    }
  },
  methods: {
   
  },
}
</script>
<style> 
.shopenterIn .el-input__inner{
  border: none;
}
.shopenterIn .content .liBG .el-form-item--mini{
  border-bottom: 1px solid #f0f0f0;
  padding: 5px 8px;
  margin: 0;
}
.el-button--primary:focus, .el-button--primary:hover {
	background-color: #FEA61C;
	color: white;
}
.btnIkonw{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
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
.lihead{
  font-size: 14px;
  padding-top: 10px;
}
.readnotice{
text-decoration: underline;
}
.savebtn{
  width: 100%;
  border: none;
}
.wh16{
  width: 16px;
  height: 16px;
}
</style>