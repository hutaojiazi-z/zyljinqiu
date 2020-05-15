<template>
  <div class="shoppublic">
    <div class="publichead">
      <search>
        <button class="smbtn bg-main pubSearch">搜索</button>
      </search>
      <div class="headscreen padding8 fontSize16 fontweight600">
        <ul>
          <li v-for="item in HeadmenuList"
            :class="{'menuactive':(mNIndex==item.typeId)}"
            :key="item.typeId" 
            @click="mNIndex = item.typeId">
            {{item.typeName}}
            </li>
        </ul>
      </div>
    </div>
    <div class="publicCon darkgray">
      <ul class="flexBC paddinglr20 paddingtb10">
        <li class="positionrel order">价格排序
          <div class="positionabs" @click="changeorder('price')">
            <p class="asc " :class="{'checkedasc':getPD.rankType == 1}"></p>
            <p class="desc" :class="{'checkedsc':getPD.rankType == 2}"></p>
          </div>
        </li>
        <li class="positionrel order">粉丝数
          <div class="positionabs" @click="changeorder('fans')">
            <p class="asc" :class="{'checkedasc':getPD.rankType == 3}"></p>
            <p class="desc" :class="{'checkedsc':getPD.rankType == 4}"></p>
          </div>
        </li>
        <li @click="screenShow = true"><i class="iconfont icon-shaixuan marginr5"></i>筛选</li>
      </ul>
      <div class="mainbody flex">
        <div class="aside">
          <ul>
            <li class="fontSize13" v-for="(item,index) in sidemenuList" :key="index" @click="getPoolDetail(item)">
              <span :class="{'sideActive' : (sideMenu.typeId == item.typeId)}"></span><span :class="{'maincolor' : (sideMenu.typeId == item.typeId)}">{{item.typeName}}</span>
            </li>
          </ul>
        </div>
        <div class="mainCon flex1">
          <head class="flexBC paddingtb10 paddinglr15">
            <div class="fontweight600">{{sideMenu.typeName}}</div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          </head>
          <div class="mainConbody paddinglr10">
            <ul>
              <el-checkbox-group v-model="checkgroup"  @change="handleCheckedCitiesChange" ref="groupList">
               <li class="marginb8" v-for="(item,index) in groupList" :key="index">
                  <div class="liMain flexBC">
                    <dl class="flex flexc">
                      <div class="headImg marginr5">
                        <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132" alt="">
                      </div>
                      <div class="flex1 fontSize12">
                        <h3 class="fontSize14">{{item.name}}</h3>
                        <p  v-if="isgroup" class="darkgray">群人数：{{item.groupNum}}</p>
                        <p  v-else class="darkgray">群人数：{{item.groupNum}}W+</p>
                        <p class="darkgray">推广费：￥{{item.pushMoney}}/天</p>
                      </div>
                    </dl>
                    <el-checkbox  :label="item.id" ></el-checkbox> 
                    
                    <!-- <dl class="darkgray">
                      <label for="poolOwner"><i class="iconfont icon-gouwuche"></i></label>
                      <input type="checkbox" name="poolOwner" />
                    </dl> -->
                  </div>
                  <img class="yZGroup" v-show="isgroup && item.isYZ" src="http://img.99add.com//null/icon/20200507/1,588,848,125,425.png" alt="优质社群" />
               
                </li>
              </el-checkbox-group>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class=" flexBC" v-if="checkgroup.length == 0">
        <div class="bg-darkgray1 textcenter paddingtb10 flex1">您还未选择流量主</div>
        <div class="bg-darkgray paddingtb10 paddinglr25">立即支付</div>
      </div>
      <div class=" flexBC" v-else>
        <div class="bg-Dmain textcenter paddingtb10 flex1">您选择了{{ checkgroup.length }}个流量主</div>
        <div class="bg-main paddingtb10 paddinglr25">立即支付</div>
      </div>
    </div>
    <div class="screen" v-show="screenShow" @click="closeMask">
      <el-form class="scCon" ref="form" :model="getPD" label-width="80px">
        <h3 class="sxH">筛选</h3>
        <div>
          意向招商类型：
           <el-cascader class="margintb10"
              v-model="fPList"
              :options="optionsData"
              :props=" SetKesDept "
              clearable
              size="mini"
              placeholder="可在任意一级菜单停止选择"
            ></el-cascader>
        </div>
        <div class="paddingtb10">
          价格区间：
          <div class="flexBC margintb10">
            <el-input size="mini" v-model.number="getPD.flowPoolPeopleNumberMin" placeholder="输入最少人数" @input="change('flowPoolPeopleNumberMin')"></el-input> 
            <div class="border1px"></div>
            <el-input size="mini" v-model.number="getPD.flowPoolPeopleNumberMax" placeholder="输入最多人数" @input="change('flowPoolPeopleNumberMax')"></el-input>
          </div>
        </div>
        <div class="paddingtb10">
          粉丝人数区间：
          <div class="flexBC margintb10">
            <el-input size="mini" v-model.number="getPD.flowPoolPricesCustomFinalMin" placeholder="输入最低价格" @input="change('flowPoolPricesCustomFinalMin')"></el-input> 
            <div class="border1px"></div>
            <el-input size="mini" v-model.number="getPD.flowPoolPricesCustomFinalMax" placeholder="输入最高价格" @input="change('flowPoolPricesCustomFinalMax')"></el-input>
          </div>
        </div>
        <div class="searchBtn flexBC">
          <el-button class="resetbtn" @click="resetForm('form')">重置</el-button>
          <el-button class="bg-main" @click="addDomain">确定</el-button>
        </div>
      </el-form>
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
      screenShow:false,
      mNIndex: 0,//当前头部导航索引
      sideMenu: {},//侧导航索引
      HeadmenuList: [],
      sidemenuList: [],
      optionsData:[],//招商类型集合
      SetKesDept:{//店铺类型数据指定
        value:'typeId',
        label:'shopType',
        children:'children',
        checkStrictly: true,
        multiple: true
      },//自定义  级联选择器value labe
      // order: 1,//排序
      //选择流量主
      getPD:{
        page:1,
        size:6,
        rankType:1,//排序
        fPEntionList:[],//需求意向Id集合
        flowPoolPeopleNumberMax: "",
        flowPoolPeopleNumberMin: "",
        flowPoolPricesCustomFinalMax: "",
        flowPoolPricesCustomFinalMin: "",
        searchString: "",
        typeId: "",//左侧当行id
        userId: window.userInfo.exId,
      },
      fPList:[],//需求意向Id集合
      checkAll:false,//是否全选
      isIndeterminate: true,
      isgroup:true,
      checkgroup:[1,2],
      //微信群mock数据
      groupList: [
        {
          id:1,
          name:"胡桃夹子",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:52,
          pushMoney:50,
          isYZ:true
        },
         {
          id:2,
          name:"黎明",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:25,
          pushMoney:30,
          isYZ:false
        },
         {
          id:3,
          name:"stioooo",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:25,
          pushMoney:30,
          isYZ:false
        },
         {
          id:4,
          name:"露天电影",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:80,
          pushMoney:30,
          isYZ:false
        },
         {
          id:5,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        },
         {
          id:6,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        },
         {
          id:7,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        },
         {
          id:8,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        },
         {
          id:9,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        },
         {
          id:10,
          name:"去看",
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:150,
          pushMoney:450,
          isYZ:false
        }
      ],
    }
  },
  mounted() {
    this.getHeadList();
    this.getOptions();
  },
  watch:{
    mNIndex(val){
      this.linkToDetail();
    },
    sideMenu(val){
      this.getPD.typeId = val.typeId;
    },
    fPList(val){
      if(val.length > 3){
        this.$message({
          message: '警告哦，选择意向不能超过三个！',
          type: 'warning'
        });
        this.fPList = this.getPD.fPEntionList;
        return ;
      }else{
        this.getPD.fPEntionList = [];
        for(let i = 0; i < val.length; i++){ 
          this.getPD.fPEntionList.push( val[i] );
        }
      }
      
      console.log(this.getPD.fPEntionList)
    }
  },
  methods: {
    change(type) {
      // console.log("change -> type,val", type,event)
      let val = event.target.value;
        val = val.replace(/(^\s*)|(\s*$)/g, "")
        if(!val) {
            this.a = "";
            return
        }
        var reg = /[^\d.]/g

        // 只能是数字和小数点，不能是其他输入
        val = val.replace(reg, "")

        // 保证第一位只能是数字，不能是点
        val = val.replace(/^\./g, "");
        // 小数只能出现1位
        val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        // 小数点后面保留2位
        val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');

        this.getPD[type] = val;
    },
   getHeadList() {//获取头部导航
     let url = window.url.zhPath + "/flowPoolType/selectByParentIdAsNull";
     this.$axios.get ( url, { })
     .then( res => {
      console.log(res)
      this.HeadmenuList = res.data.data;    
      this.mNIndex =  res.data.data[0].typeId;
     })
   },
   linkToDetail() {//获取左侧导航列表
     let url =  window.url.zhPath + '/flowPoolType/selectByParentId';
     this.$axios.get ( url, { params:{"parentId": this.mNIndex}})
     .then( res => {
      this.sideMenu =  res.data.data[0];
      this.sidemenuList = res.data.data;
      this.getPD.typeId = this.sideMenu.typeId;
      this.getPoolDetail();
     })
   },
   changeorder(pram) {//改变排序规则
     let orderThe = this.getPD.rankType;
     if(pram == "price") {
       this.getPD.rankType = orderThe == 1 ? 2 : 1 ;
     } else {
       this.getPD.rankType = orderThe == 3 ? 4 : 3 ;
     }
     this.getPoolDetail();
   },
    getPoolDetail(item){//获取流量池详情
      if(item){
        this.sideMenu = item;
      }
      
      this.groupList.unshift({
          id:this.groupList.length + 1,
          name:"胡桃夹子"+ (this.groupList.length + 1),
          headImg:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
          groupNum:52,
          pushMoney:50,
          isYZ:false
        
      })
      // 待完善
      // let url = window.url.zhPath + "/sponsorDemand/selectMyFPOwnerByFPT";
      // this.$axios.get ( url, {
      //   params:this.getPD
      //  })
      // .then( res => {
      //   console.log(res)
      //   this.HeadmenuList = res.data.data;
      // })
    },
    handleCheckAllChange(val) {//全选按钮
      // this.checkgroup = val ? this.groupList : [];
      if(val){
        this.groupList.forEach( item => {
          // console.log(item)
          if(this.checkgroup.indexOf(item.id) == -1){
            this.checkgroup.push(item.id);
          }
          
        })
      }else{
        this.checkgroup = [];
      }
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {//多选
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.groupList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.groupList.length;
    },
     getOptions(){//获取店铺类型的数据
      let vm = this;
      this.$axios.get('../../../static/json/shop_type_data.json', {})
      .then(res=>{
        vm.optionsData = vm.filterNull(res.data);
      })
   },
    toType (obj){//判断对象类型
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },  
    filterNull (o) {//清除空的下级
      let vm = this;
      for (let key in o) {
        if (o[key] === null) {
          delete o[key];
        }
        if (vm.toType(o[key]) === 'string') {
          o[key] = o[key].trim();
          if (o[key].length === 0) {
            delete o[key];
          } 
        } else if (vm.toType(o[key]) === 'object') {
          o[key] = vm.filterNull(o[key]);
        } else if (vm.toType(o[key]) === 'array') {
          o[key] = vm.filterNull(o[key]);
          if (o[key].length === 0) {
            delete o[key];
          }
        }
      }
      return o;
    },
    resetForm(formName){//筛选点击重置
      this.$refs[formName].resetFields();
    },
    addDomain(){//筛选点击确定
      this.screenShow = false;
      this.getPoolDetail();
    },
    closeMask(){
      if(event.target == event.currentTarget){
        this.screenShow = false;
      }
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
  border-radius: 5px !important;
}

</style>
<style lang="less" scoped>
// @base:#DD3913;
// @import '@/assets/css/common.less';
@import '../../../assets/css/common.less';

/deep/ .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background-color: @base !important;
    border-color: @base !important;
}

/deep/ .liMain{
  .el-checkbox__label{
    display: none;
  }
}
/deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner{
   background-color: @base !important;
  border-color: @base !important;
}
/deep/ .el-checkbox__input.is-focus .el-checkbox__inner{
  border-color: @base !important;
}
/deep/ .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #FFF;
    z-index: 1;
    -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
/deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
  color: @base;
}
.shoppublic{
  .publichead{
    
    .pubSearch{
      position: absolute;
      right: 0;
      line-height: 25px;
      border-radius: 0 5px 5px 0;
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
        color: @base;
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
        padding: 8px 0;
        height: 100%;
        overflow: hidden;
        ul{
          overflow: scroll;
          height: 100%;
          li{
            // line-height: 30px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            padding: 5px;
            display: flex;
            align-items: center;
            span{
              padding: 0 10px;
              &:first-child{
                width: 4px;
                height:16px;
                padding: 0;
                border-radius: 2px;
              }
            }
            .sideActive{
              background-color: @base;
              color: @base;
            }
          }
          &::-webkit-scrollbar{
            display:none
          }
        }
        
      }
      .mainCon{
        background-color: #f5f5f5;
        .mainConbody{
          height: calc(100% - 39px);
          overflow: scroll;
          li{
            position: relative;
            background-color: white;
            border-radius: 5px;
            .liMain{
              padding: 8px;
              
              
              .headImg{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                overflow: hidden;
              }
            }
            .yZGroup{
              position: absolute;
              width: 35px;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
  //主题部分完
  .footer{
    width: 100vw;
    position: fixed;
    bottom: 48px;
  }
  .screen{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0,0.3);
    z-index: 1;
    .scCon{
      background-color: white;
      width: 80%;
      height: 70%;
      position: absolute;
      bottom: 48px;
      right: 0;
      border-radius: 10px 0 0 0;
      padding: 15px;
      .sxH{
        margin-left: -5px;
      }
      .border1px{
        border-top: 1px solid #BDBDBD;
        height: 1px;
        width: 50px;
        margin: 0 10px;
      }
      .searchBtn{
        position: absolute;
        width: 100%;
        bottom: 25px;
        padding: 0 50px 0 25px;
        .resetbtn{
          color: @base;
          border-color: @base;
        }
      }
    }
  }
  /deep/ .el-button:focus, .el-button:hover{
    color: @base;
    border-color: @base;
    // background-color: #DD3913;
  }
}
</style>