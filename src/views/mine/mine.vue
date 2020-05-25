<template>
  <div class="padding8">
    <div class="header">
      <div class="main flexBC">
        <div class="flex">
          <div class="headImg">
            <img :src="userInfo.exPic" alt="头像" />
          </div>
          <div class="flex1">
            <h5>{{userInfo.exNice}}</h5>
						<div>
							<img class="h100" src="http://img.99add.com//qd/qrcode/20191225/1,577,266,261,095.png" />
						</div>
          </div>
        </div>
      </div>
      <div class="textcenter Mbtn">
        <span>提现</span>
        <span>充值</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: window.userInfo
    };
  }
};
</script>
<style lang="less" scoped>
.header {
  .main {
    background: url("http://img.99add.com/@/null/icon/20200420/1,587,374,679,711.png") no-repeat;
    background-size: 100% 100%;
    .headImg {
			border-radius: 50%;
			overflow: hidden;
			width: 15vw;
    }
  }
}
</style>