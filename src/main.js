// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
// import index from './views/index'
import router from './router'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//引入饿了么组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入miniUI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入公共css
import './assets/css/zylCom.css'

//阿里图标库
import './assets/iconfont/iconfont.css'

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;//把axios加入到vue原型中

//引入jquery
import $ from 'jquery'

//引入jsonp
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp)

//引入百度地图组件
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* 申请的百度密钥，可以在百度地图官网申请 */
  ak: 'dadGKoBhtMT2MT0cayrQWSdppReyn3bc'
})

window.url={
  forePath : "https://t5.jinqiunianhua.cn/login.html",
  zhPath : "https://t8.jinqiunianhua.cn/", //整合后
  qshPath : "https://t3.jinqiunianhua.cn/",
  tjPath : "https://t2.jinqiunianhua.cn/",
  tgPath : "https://t1.jinqiunianhua.cn/",
  ytPath : "https://t4.jinqiunianhua.cn/",
  envFilePath : "http://img.99add.com/@",
  sjPath : "http://192.168.3.5:8022/",
  loginPath : "https://t2.jinqiunianhua.cn/",
  fuliPath : "https://t3.jinqiunianhua.cn/"//福利官
}

Vue.use(ElementUI);
Vue.use(MintUI)

let user = {
  "exId": 24,
  "exAdd": null,
  "exAli": null,
  "exAllpp": 0,
  "exAllxf": 0,
  "exBsopenid": null,
  "exCity": 0,
  "exCity1": 0,
  "exCity2": 0,
  "exClose": 0,
  "exCookies": null,
  "exDis": 0,
  "exEmail": null,
  "exErweima": null,
  "exFlag": 0,
  "exFxuser": null,
  "exGlc": 0,
  "exGrade": 0,
  "exGroupSysadminid": 0,
  "exGroupSysid": 0,
  "exHome": 0,
  "exJf": 0,
  "exJiaoseid": 0,
  "exJiaosename": null,
  "exJinbi": 0,
  "exKaid": 0,
  "exKanum": 0,
  "exLasttime": 1578901395620,
  "exMoneytx": 0,
  "exMtel": "17828474565",
  "exMtelFlag": 0,
  "exName": null,
  "exNice": "黎明",
  "exNid": null,
  "exPass": null,
  "exPic": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKj8T40TxMDo1ic6qBwN2Q1zCYlelicpJUNnwtrNd5O6cKIJ5oLSgTWnWRyl3GTC6YLjm8lXw18dfMQ/132",
  "exPid": 0,
  "exPushtim": null,
  "exPutkid": 0,
  "exQqName": null,
  "exQqOauthSecret": null,
  "exQqOauthToken": null,
  "exQqTokenTime": null,
  "exSex": "1",
  "exSinaName": null,
  "exSinaOauthToken": null,
  "exSinaTokenTime": null,
  "exSm": null,
  "exTime": 1572197841377,
  "exTk": 0,
  "exTkid": null,
  "exTt": 0,
  "exUptime": null,
  "exVip": 0,
  "exWeiboid": null,
  "exWeixin": null,
  "exWeixinid": "oMiZjuGp5yicpiEViPm3XAksfHOs",
  "exWw": null,
  "exX": 0,
  "exY": 0,
  "exYjewm": null,
  "exYjewmid": 0,
  "exYjewmnum": 0,
  "ggg": 0,
  "livepass": null,
  "liveuser": null,
  "lookQR": 1,
  "money": null,
  "moneyType": null,
  "pic": "/taojin/qrcode/20191024/1,571,927,844,008.png",
  "reqKey": "RK_3b83d24484415",
  "type": null,
  "typeId": null,
  "userLevel": null,
  "userRichname": "曾亚玲",
  "www": null
};
localStorage.setItem("userInfo", JSON.stringify(user));
window.userInfo = JSON.parse(localStorage.getItem("userInfo"));
Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}); 