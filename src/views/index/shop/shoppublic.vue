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
            @click="linkToDetail(item.typeId)">
            {{item.typeName}}
            </li>
        </ul>
      </div>
    </div>
    <div class="publicCon darkgray">
      <ul class="flexBC paddinglr20 paddingtb10">
        <li class="positionrel order">价格排序
          <div class="positionabs" @click="changeorder('price')">
            <p class="asc " :class="{'checkedasc':order == 1}"></p>
            <p class="desc" :class="{'checkedsc':order == 2}"></p>
          </div>
        </li>
        <li class="positionrel order">粉丝数
          <div class="positionabs" @click="changeorder('fans')">
            <p class="asc" :class="{'checkedasc':order == 3}"></p>
            <p class="desc" :class="{'checkedsc':order == 4}"></p>
          </div>
        </li>
        <li><i class="iconfont icon-shaixuan marginr5"></i>筛选</li>
      </ul>
      <div class="mainbody flex">
        <div class="aside">
          <li v-for="(item,index) in sidemenuList" :key="index">{{item.typeName}}</li>
        </div>
        <div class="mainCon flex1">

        </div>
      </div>
    </div>
    <div class="footer flexBC">
      <div class="bg-darkgray1 textcenter paddingtb10 flex1">您还未选择流量主</div>
      <div class="bg-darkgray paddingtb10 paddinglr25">立即支付</div>
    </div>
  </div>
</template>
<script>
import search from "@/components/search";
export default {
  components: {
    search
  },
  data() {
    return {
      mNIndex: 0,//当前头部导航索引
      HeadmenuList: [],
      sidemenuList: [],
      order: 1,//排序
      //选择流量主

    }
  },
  mounted() {
    this.getHeadList()
  },
  methods: {
   getHeadList() {//获取头部导航
     let url = window.url.zhPath + "/flowPoolType/selectByParentIdAsNull";
     this.$axios.get ( url, { })
     .then( res => {
      console.log(res)
      this.HeadmenuList = res.data.data;      
      this.linkToDetail(this.HeadmenuList[this.mNIndex].typeId);
     })
   },
   linkToDetail(typeId) {//获取详情页面
     let url =  window.url.zhPath + '/flowPoolType/selectByParentId';
     this.$axios.get ( url, { params:{"parentId": typeId}})
     .then( res => {
      console.log(res)
      this.sidemenuList = res.data.data;
     })
   },
   changeorder(pram) {//改变排序规则
     let orderThe = this.order;
     if(pram == "price") {
       this.order = orderThe == 1 ? 2 : 1 ;
     } else {
       this.order = orderThe == 3 ? 4 : 3 ;
     }
   },
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
    .order{
      line-height: 15px;
      .positionabs{
        right: -10px;
        top: 0;
        .asc{
          border-width: 4px;
          border-bottom: 4px solid #bcbcbc;
          border-top: 4px solid transparent;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }
        .desc{
          margin-top: 1px;
          border-top: 4px solid #bcbcbc;
          border-bottom: 4px solid transparent;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent; 
        }
        .checkedasc{
          border-color: transparent transparent #898989 transparent;
        }
        .checkedsc{
          border-color: #898989 transparent transparent transparent;
        }
      }
      
    }
    .mainbody{
      height: calc( 100vh - 212px);
      .aside{
        width: 23vw;
      }
      .mainCon{
        background-color: #f5f5f5;
      }
    }
  }
  //主题部分完
  .footer{
    width: 100vw;
    position: absolute;
    bottom: 48px;
  }
   
}
</style>