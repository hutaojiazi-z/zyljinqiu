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
        <div class="content"  v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <div class="title">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,957,003,973.png" alt="" class="hot">
                <img src="http://img.99add.com//qd/qrcode/20200206/1,580,957,032,208.png" alt="" class="featured">
            </div>
            <div class="goods">
                <div class="goodsColumn goodsLeft">
                    <a class="goodItem" href="http://www.99add.com/MP5.0/Index.Near.show.asp?id=8842" id="id8842">
                        <img src="http://www.99add.com/UploadFiles/UserData/www/image/20200218/20200218143783498349.jpg" alt="" class="goodImg">
                        <div class="padding5 fontSize12">
                            <p class="goodTitle maincolor">哈喜露消毒液 500ml（79元/包邮）</p>
                            <div class="flexBC margint5">
                                <span class="red">¥77</span>
                                <span class="gray">销量：324</span>
                            </div>
                        </div>
                    </a>
                </div>
               <div class="goodsColumn goodsLeft">
                    <a class="goodItem" href="http://www.99add.com/MP5.0/Index.Near.show.asp?id=8842" id="id8842">
                        <img src="http://www.99add.com/UploadFiles/UserData/www/image/20200218/20200218143783498349.jpg" alt="" class="goodImg">
                        <div class="padding5 fontSize12">
                            <p class="goodTitle maincolor">哈喜露消毒液 500ml（79元/包邮）</p>
                            <div class="flexBC margint5">
                                <span class="red">¥77</span>
                                <span class="gray">销量：324</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
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
        page:1,
        size:5
    }
  },
  methods:{
      getGoods:function(){///SXShop/select/all/project
        this.$axios.get(window.url.qshPath+'/SXShop/select/all/project', {
            params: {
                page: this.page,
                size:this.size
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
  }
}
</script>
<style lang="less" scoped>
.store{
    margin-top: 50px;
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
                width: 49%;
                .goodItem{
                    border-radius: 5px;
                    background-color: white;
                    display: block;
                    text-decoration: none;
                    overflow: hidden;
                    img{width: 100%;}
                }
            }
        }
    }
}

</style>