<template>
    <div class="store padding5">
        <div class="head">
            <img  src="http://img.99add.com//qd/qrcode/20200206/1,580,956,923,361.png" />
            <button class="howChoose fontSize12">怎么选择商城？</button>
        </div>
        <div class="chooseShop padding10">
            <a class="shopNavi" href="http://www.yeyepopo.cn/app/index.php?i=2&c=entry&m=zk_jqvshop&do=Home">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,956,944,164.png" alt="">
                <span>君羚小店</span>
            </a>
            <a class="shopNavi" href="javascript:void(0)" onclick="lookfowrd()">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,956,962,221.png"/>
                <span>金秋商城</span>
            </a>
            <a class="shopNavi" href="http://www.99add.com/MP5.0/Index.Zzs.shop.asp?opent=wx">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,956,984,747.png" alt="">
                <span>君羚商城</span>
            </a>
        </div>
         <!-- v-infinite-scroll="load" infinite-scroll-disabled="disabled" -->
        <div class="content" >
            <div class="title">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,957,003,973.png" alt="" class="hot">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,957,032,208.png" alt="" class="featured">
            </div>
            <mt-loadmore class="goods"  :bottomMethod="loadMore" :bottomAllLoaded="loading" :bottomDistance="60">
                <div class="goodsColumn goodsLeft">
                    <a  class="goodItem"  v-for="item in goosList" :key="item" :href="'http://www.99add.com/MP5.0/Index.Near.show.asp?id='+item.nUid" :id="item.nUid">
                        <img :src="'http://www.99add.com'+item.pic1" alt="" class="goodImg">
                        <div class="padding5 fontSize12">
                            <p class="goodTitle maincolor">{{item.nBrief}}</p>
                            <div class="flexBC margint5">
                                <span class="red">¥{{item.nPay || item.nPayl}}</span>
                                <span class="gray">销量：{{item.payed}}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </mt-loadmore>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        loading:false,
        noMore:false,
        page:1,
        size:5,
        goosList:[]
    }
  },
  mounted(){
    this.getGoods()
  },
  methods:{
      getGoods(){
      let vm = this;
        this.$axios.get(window.url.qshPath+'/SXShop/select/all/project', {
            params: {
                page: vm.page,
                size:vm.size
            }
        })
        .then(res => {
            console.log(res);
            console.log(vm.goosList);
            vm.loading = false;
            let data = res.data.data;
            if(data.length>0){
             vm.goosList = vm.goosList.concat(data);
            //  vm.goosList.push(...data)
            }
            if(data.length<vm.size){
                vm.noMore = true;
            }
        })
        .catch(error => {
            
        });
      },
      loadMore(){
          this.loading = true;
          this.page++;
          this.getGoods();
        //   this.allLoaded = true;// 若数据已全部获取完毕
          this.$broadcast('onBottomLoaded');
      }
  }
}
</script>
<style lang="less" scoped>
.store{
    overflow:scroll;
    .head{
        position: relative;
        width: 100%;
        background-size: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
        .howChoose{
            position: absolute;
            color: rgba(235,115,14);
            background-color: rgba(255,217,80);
            border: none;
            right: 4px;
            top: 5vh;
            border-radius: 10vw 0 0 10vw;
            padding: 0.3rem 0.5rem;
            letter-spacing: 0.3vw;
            font-weight: bold;
        }
    }
    .chooseShop{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 85%;
        margin: 0 auto;
        border-radius: 10px;
        margin-top: -10vw;
        .shopNavi{
            padding: 0 10px;
            text-decoration: none;
            text-align: center;
            img{
                width: 75%;
            }
            span{
                display: block;
                color: #333333;
                font-size: 0.8125rem;
            }
        }
    }
    .content{
        padding: 0 4px;
        .title{
            margin: 2vw 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .hot{
                width: 3%;
                margin-right: 5px;      
            }
            .featured{
                width: 20%;
            }
        }
        .goods{
            display: flex;
            justify-content: space-between;
            .goodsColumn{
                display: flex;
                 flex-wrap:wrap;
                 justify-content: space-between;
                .goodItem{
                    width: 47vw;
                    border-radius: 5px;
                    background-color: white;
                    display: block;
                    text-decoration: none;
                    overflow: hidden;
                    margin-top: 10px;
                    img{width: 100%;}
                    &:nth-child(2n){
                        margin-right:0;
                    }
                }
            }
        }
    }
}

</style>