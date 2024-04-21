import App from './App'
//导入第三方组件库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// #ifndef VUE3
import'@/static/css/global.css'
import Vue from 'vue'
import './uni.promisify.adaptor'
import request from '@/utils/request.js'
Vue.prototype.$request = request

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif