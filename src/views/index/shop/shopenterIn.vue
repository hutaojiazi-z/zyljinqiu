<template>
  <div class="shopenterIn">
    <div class="header">
      <img src="http://img.99add.com//qd/qrcode/20200313/1,584,066,431,229.png" />
      <button class="whyBtn" @click="isShow = !isShow">为什么大卖？</button>
    </div>
    <div class="padding8 content">
      <el-form ref="form" :rules="rules" :model="form" label-width="auto" size="mini" label-position="left">
        <div class="liBG">
          <h3 class="lihead paddingl8">基本信息(请您据实填写相关信息)</h3>
          <el-form-item label="店铺名称：" prop="shopName">
            <el-input v-model="form.shopName"></el-input>
          </el-form-item>
          <el-form-item label="店铺联系人：" prop="relationed">
            <el-input v-model="form.relationed"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话：" prop="phoneNUm">
            <el-input v-model="form.phoneNUm"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类：" prop="shopType">
            <!-- <el-input v-model="form.shopType"></el-input> -->
            <el-cascader
              v-model="form.shopType"
              :options="optionsData"
              :props=" SetKesDept "
              clearable
              size="mini"
              placeholder="可在任意一级菜单停止选择"
            ></el-cascader>
          </el-form-item>
        </div>
        <div class="liBG margint10">
          <h3 class="lihead paddingl8">选填项</h3>
          <el-form-item label="商家地址：">
            <el-input v-model="form.shopAddress" placeholder="点击此处选择地址"></el-input>
          </el-form-item>
          <el-form-item label="详细地址：">
            <el-input v-model="form.shopAddressDetails" placeholder="填写具体地址，如幢数，门牌号"></el-input>
          </el-form-item>
        </div>
        <div class="margint5 fontSize12">
          <el-checkbox class="wh16" v-model="read"></el-checkbox>
          <span class="marginl5">
            我已阅读并同意
            <span class="ogred readnotice" @click="readnotice = !readnotice">阅读须知</span>
            <span class="gray fontSize10 marginl5">邀请人：某某某</span>
          </span>
        </div>
        <el-button class="bg-yellow savebtn margintb20" type="primary" @click="formTip">提交</el-button>
      </el-form>
      <baidu-map class="bm-view" :center="{lng: mapArr.lng, lat: mapArr.lat}" :zoom="15" :scroll-wheel-zoom="true">
        <bm-marker :position="{lng: mapArr.lng, lat: mapArr.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        </bm-marker>
      </baidu-map>
    </div>

    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
    <mask1 v-if="isShow">
      <img src="http://img.99add.com//qd/qrcode/20200313/1,584,078,895,411.png" />
      <div class="paddinglr10 margintb10 btnIkonw">
        <el-button class="bg-yellow savebtn" @click="isShow = !isShow">我知道了</el-button>
      </div>
    </mask1>
    <mask1 v-if="readnotice">
      <div class="bg-w liBG paddingtb10 paddinglr20">
        <h3 class="fontSize16 textcenter marginb10">金秋综合群填写须知</h3>
        <div>
          <h3 class="fontSize12">金秋淘金社群欢迎综合群的群主入驻，填写时请注意以下事项：</h3>
          <div class="textindent2">
            <p>一、社群群主及社群领袖必须遵守国家法律法规，认同金秋年华理念，共同为群成员（会员）提供优质、高性价比的服务，维护良好的服务口碑。</p>
            <p>二、本系统仅限群主自己填写，不能代替别人填写。</p>
            <p>三、“邀请人”即是介绍你进入本系统的人，扫描其专属二维码后，系统自动将其关联为你的邀请人。</p>
            <p>四、社群信息录入请遵守真实有效、实事求是的原则，不可弄虚作假，录入群后需添加客服好友，拉客服入群，并允许运营官等客服入群，及时修改本系统中所注册的群内人员数量；详细填写社群介绍，准确表达群成员的需求特点，方便商家优选推送相应的产品和服务。</p>
            <p>五、领袖排名以你所邀请的好友群的数量为依据，邀请10个群好友录入群为十夫长，拥有100个群为百夫长，拥有1000个群为千夫长，拥有1万个群为大将军，拥有3万个群为大元帅，该排名每天更新。</p>
          </div>
        </div>
        <div class="paddinglr10 margintb20">
          <el-button class="bg-yellow savebtn" @click="readnotice = !readnotice">我知道了</el-button>
        </div>
      </div>
    </mask1>
  </div>
</template>
<script>
import mask1 from "../../../components/marsk"
export default {
  components:{
    mask1
  },
  data() {
    return {
      mapArr:{
        lng:"",
        lat:""
      },
      input: '',
      isShow: false,
      readnotice:false,
      SetKesDept:{//店铺类型数据指定
        value:'typeId',
        label:'shopType',
        children:'children',
        checkStrictly: true
      },//自定义  级联选择器value labe
      form:{
        shopName:'',
        relationed:'',
        phoneNUm:"",
        shopType:'',
        shopAddress:'',
        shopAddressDetails:''
      },
      rules: {//验证规则
        shopName: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' }
        ],
        relationed:[
          { required: true, message: '请输入店铺联系人', trigger: 'blur' }
        ],
        phoneNUm:[
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          {validator: this.checkPhone, trigger: 'blur'}
        ]
      },
      optionsData:[],
      read:0
    }
  },
  mounted(){
    this.getOptions();
  },
  methods: {
    checkPhone (rule, value, callback) {//验证手机号
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
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
    formTip(){//表单提交
      let url = window.url.qshPath + "";
      this.$axios.get(window.url.qshPath+'/SXShop/select/all/project', {
        params: {
          
        }
      })
    }
  }
}
</script>
<style>
.el-cascader{
  display: block;
}
.el-cascader-menu{
  min-width: 100px;
}
.shopenterIn .el-input__inner {
  border: none;
}
.shopenterIn .content .liBG .el-form-item--mini {
  border-bottom: 1px solid #f0f0f0;
  padding: 5px 8px;
  margin: 0;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #fea61c;
  color: white;
}
.btnIkonw {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-form-item__error{
  z-index: 1;
}
</style>
<style lang="less" scoped>
.header {
  position: relative;
  .whyBtn {
    background-color: #fcda4b;
    color: #fd931c;
    border: none;
    border-radius: 15px 0 0 15px;
    font-weight: bold;
    padding: 3px 10px;
    position: absolute;
    top: 20px;
    right: 0;
  }
  .bm-view{
    width: 100vw;
    height: 100vw;
  }
}
.lihead {
  font-size: 14px;
  padding-top: 10px;
}
.readnotice {
  text-decoration: underline;
}
.savebtn {
  width: 100%;
  border: none;
}
.wh16 {
  width: 16px;
  height: 16px;
}
</style>