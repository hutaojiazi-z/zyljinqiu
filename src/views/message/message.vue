<template>
    <div class="message">
        <mt-header class="bg-head" title="消息">
            <mt-button slot="right">
                <i class="iconfont icon-shezhi1 fontSize22" @click="setMsg"></i>
            </mt-button>
        </mt-header>
        <div class=" padding10">
            <div class="noread">
                <p>您有{{noread}}条未读信息</p>
                <p><i class="iconfont icon-qingchu"></i>清除未读信息</p>
                <p></p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  data () {
    return {
        noread:20
    }
  },
  mounted(){
  },
  methods:{
    //   系统通知
    systemNotice(){
        var url= "/message/select/all/undeleted";
        var param={
            'page':1,
            'rows':1,
            'uId':window.userInfo.exId
        };
        this.$axios.get(url,param).then(res=>{

        })
    },
    setMsg(){
        this.$router.push({ path:'../setting/setMsg.vue'})
    }
  }
}
</script>
<style lang="less" scoped>
.noread{
    display: flex;
    justify-content: space-between;
    p{
        flex: 1;
    }
}
</style>