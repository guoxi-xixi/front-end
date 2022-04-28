import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/01.easy-router/App.vue'
// import App from './components/02.start/App.vue'
// import App from './components/03.plus/App.vue'
// import App from './components/04.params/App.vue'
// import App from './components/05.named/App.vue'
// import App from './components/06.guards/App.vue'
import App from './components/07.next/App.vue'

import './assets/css/bootstrap.css'
import './index.css'
// 导入路由模块
// import router from './components/02.start/router'
// import router from './components/03.plus/router'
// import router from './components/04.params/router'
// import router from './components/05.named/router'
// import router from './components/06.guards/router'
import router from './components/07.next/router'

const app = createApp(App)

// 挂载路由模块，
// app.use() 方法用挂载第三方插件模块
app.use(router)

app.mount('#app')