// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './views/App'
import index from './views/index'
import router from './router'
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



new Vue({
  el: '#app',
  router,
  render: h => h(index)
}); 