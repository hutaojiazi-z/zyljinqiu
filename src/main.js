// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './views/App'
import index from './views/index'
import router from './router'
import textIndex from './views/index/index'
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

Vue.use(ElementUI);
Vue.use(MintUI)



new Vue({
  el: '#app',
  router,
  render: h => h(index)
}); 