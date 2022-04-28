import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// 导入 ant-design-vue 组件库
import AntD from 'ant-design-vue'
// 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(store)
app.use(AntD)

app.mount('#app')