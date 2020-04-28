<template>
  <div class="shoppublic">
    <div class="publichead">
      <search>
        <button class="smbtn bg-main pubSearch">搜索</button>
      </search>
      <div class="headscreen padding8 fontSize16">
        <ul>
          <li v-for="(item,index) in HeadmenuList"
            :class="{'menuactive':mNIndex==index}"
            :key="item.typeId" 
            @click="linkToDetail(item,index)">
            {{item.typeName}}
            </li>
        </ul>
      </div>
    </div>
    <div class="publicCon">

    </div>
  </div>
</template>
<script>
import search from "@/components/search";
export default {
  components:{
    search
  },
  data(){
    return{
      mNIndex:0,//当前头部导航索引
      HeadmenuList:[]
    }
  },
  mounted(){
    this.getHeadList()
  },
  methods:{
   getHeadList(){//获取头部导航
     let url = "http://192.168.3.5:8020/flowPoolType/selectByParentIdAsNull";
     this.$axios.get(url,{})
     .then( res => {
      console.log(res)
      this.HeadmenuList = res.data.data;
     })
   },
   linkToDetail(item,index){//获取详情页面

   }
  }
}
</script>
<style>
.publichead .searchInput{
  background-color: #f5f5f5 !important;
}
.publichead input{
  border: 1px solid #DD3913 !important;
}
</style>
<style lang="less" scoped>
.shoppublic{
  .publichead{
    
    .pubSearch{
      position: absolute;
      right: 0;
      line-height: 25px;
      border-radius: 15px;
      margin-right: 15px;
    }
    .headscreen{
      white-space : nowrap ;
      overflow: hidden;
      ul{
      height: 100%;
        overflow: scroll;
        backface-visibility:hidden;
        &::-webkit-scrollbar{
          display:none
        }
        li{
          display: inline;
          margin-right: 10px;
        }
      }
      .menuactive{
        color: #DD3913;
      }
    }
  }
  // 头部完
  .publicCon{
    background-color: white;
  }
   
}
</style>