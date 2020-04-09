<template>
    <div class="message">
        <mt-header class="bg-head" title="消息">
            <mt-button slot="right">
                <i class="iconfont icon-shezhi1 fontSize22" @click="setMsg"></i>
            </mt-button>
        </mt-header>
        <div class=" padding10">
            <div class="noread fontSize12">
                <p>您有{{noread}}条未读信息</p>
                <p @click="clearNoRead"><i class="iconfont icon-qingchu marginr5"></i>清除未读</p>
            </div>
            <div class="sysNotice flexBC radiusul padding10 margint10">
                <label class="flexBC"><img class="marginr5" src="http://img.99add.com/@/qd/qrcode/20200218/1,581,996,940,394.png"/>系统通知</label>
                <i class="iconfont icon-iconfontjiantou6"></i>
            </div>
            <div class="masgList flexBC radiusul padding10 margint10">
                <div class="flexBC">
                    <img class="marginr5 headImg" src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132"/>
                    <div>
                        <p>黎明</p>
                        <p class="fontSize12 darkgray">黎明向你发送了一个入群推广邀请</p>
                    </div>
                </div>
                <i class="iconfont icon-iconfontjiantou6"></i>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data () {
    return {
        noread:0,
        msgList:[]
    }
  },
  mounted(){
      this.getNoRead();
  },
  methods:{
    //   系统通知
    systemNotice(){
        var url= window.url.qshPath+"/message/select/all/undeleted";
        var param={
            'page':1,
            'rows':1,
            'uId':window.userInfo.exId
        };
        this.$axios.get(url,param).then(res=>{

        })
    },
    setMsg(){//消息设置
        this.$router.push({path:'/message/setting'})
    },
    getNoRead(){//获取未读消息数量
        let vm = this;
        let url = window.url.qshPath+"/message/select/count/unread";
        let param={
            'uId':window.userInfo.exId
        };
        vm.$axios.get(url,param)
        .then(res=>{
            let thenoread = res.data.data
            thenoread = thenoread>99?(thenoread+"+"):thenoread;
            vm.noread = thenoread;
        })
        .catch(error => {});
    },
    clearNoRead(){//清除未读
        let url= window.url.qshPath+"/message/select/all/undeleted";
        let param={
            'uId':window.userInfo.exId
        };
        this.$axios.post(url,param).then(res=>{
            
            console.log(res)
            this.noread=0
        }).catch(error => {});

    }
  }
}
</script>
<style lang="less" scoped>
.noread{
    overflow: hidden;
    p{
        float: left;
        &:last-child{
            margin-left: 20px;
        }
    }
}
.sysNotice{
    img{
        width:30px;
    }
}
.masgList{
    img{
        width: 40px;
        border-radius: 50%;
    }
}
</style>