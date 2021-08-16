// 项目核心文件：进行全局配置
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// // 引入Element-Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式文件需单独引入
// 引入iconfont
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false

// Vue.use(Antd)

Vue.use(ElementUI)

// 创建一个实例
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
