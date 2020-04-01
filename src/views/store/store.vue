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
    </div>
</template>
<script>
export default {
  data () {
    return {
        selected:"tab1"
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
}

</style>