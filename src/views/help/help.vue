<template>
  <div>
    <search placeholder="搜索你想解决的问题" @inputValue="inputValue" ref="search">
      <i class="iconfont icon-xinxi fontSize24 marginl15" @click="getinputValue"></i>
    </search>
    <div class="padding8">
      <ul class="conone">
        <li>
          <h3>常见问题</h3>
        </li>
        <li><a href="#">千商会问题与解答</a><i class="iconfont icon-iconfontjiantou6 fontSize12"></i></li>
        <li><a href="#">社群问题与解答</a><i class="iconfont icon-iconfontjiantou6 fontSize12"></i></li>
        <li><a href="#">峻岭小店问题与解答</a><i class="iconfont icon-iconfontjiantou6 fontSize12"></i></li>
        <li><a href="#">骏铃商城问题与解答</a><i class="iconfont icon-iconfontjiantou6 fontSize12"></i></li>
      </ul>
      <div class="flexBC margintb10">
        <a href="../ziliao/ziliao.html"><img src="http://img.99add.com//qd/qrcode/20200210/1,581,315,798,146.png" /></a>
        <a href="../fuwu/jiaocheng.html"><img src="http://img.99add.com//qd/qrcode/20200210/1,581,315,720,306.png" /></a>
        <a href="http://y.99add.com/app/./index.php?i=2&c=entry&eid=677"><img src="http://img.99add.com//qd/qrcode/20200210/1,581,315,894,948.png" /></a>
		  </div>
      <div class="conone padding8">
        <div class="inputarea">
          <h3 class="marginb8">问题反馈</h3>
          <textarea v-model="proment" placeholder="告诉我们您遇到的问题，或提出您的建议" class="mytext fontSize12"></textarea>
        </div>
        <div class="upfile">
          <h3 class="margintb5">截图（选填）：</h3>
          <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import search from "../../components/search"
export default {
  components:{
    search
  },
  data(){
    return {
      proment:"",
      imageUrl: ''
    }
  },
  methods:{
    inputValue(data){
      console.log(data)
    },
    getinputValue(){
      this.$refs.search.getkeyValue()
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<style lang="less" scoped>
  .conone{
    border-radius: 5px;
    background-color: white;
    li{
      line-height: 25px;
      border-bottom: 1px solid #F8F8F8;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between; 
      align-items: center;
      a{
        color: #333333;
        text-decoration: none;
        &:active,&:visited{
          color: #333333;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          -webkit-user-select: none;
          -moz-user-focus: none;
          -moz-user-select: none;
        }
      }
    }
    .inputarea{
      .mytext{
        background-color: #F4F4F4;
        border-radius: 5px;
        padding: 8px;
        border: none;
        width: 100%;
        min-height: 80px;
      }
    }
  }
  
</style>