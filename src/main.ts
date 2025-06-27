import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入百度地图
import BaiduMap from 'vue-baidu-map-3x'

import '@/style.css'

createApp(App)
  .use(router)
  .use(BaiduMap, {
    ak: 'oDVte9aJhWIBh0S8I0Njz9xVQi13xAfl',
    v: '3.0',
    type: 'webgl'
  })
  .mount('#app')