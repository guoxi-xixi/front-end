/* import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
 */

/* 
    1.从 Vue 中按需导入 createApp 函数
    createApp 函数的作用：创建 Vue 的”单页面应用程序实例“
*/
import { createApp } from 'vue'

import './assets/css/bootstrap.css'
import './index.css'
// 2.导入待渲染的 App 组件
// import App from './App.vue'
// import App from './components/03.style/App.vue'
// import App from './components/04.props/App.vue'
// import App from './components/05.class&style/App.vue'
// import App from './components/App.vue'
// import App from './components/07.Count/App.vue'
// import App from './components/08.Computed/App.vue'
// import App from './components/09.customEvent/App.vue'
// import App from './components/010.v-model/App.vue'
// import App from './components/011.watch/App.vue'
// import App from './components/012.life-cycle/App.vue'
// import App from './components/013.father-son/App.vue'
// import App from './components/014.brother/App.vue'
// import App from './components/015.provide&inject/App.vue'
// import App from './components/016.network/App.vue'
// import App from './components/017.ref/App.vue'
// import App from './components/018.$nextTick/App.vue'
// import App from './components/019.dynamic/App.vue'
// import App from './components/020.base-slot/App.vue'
// import App from './components/021.named-slot/App.vue'
// import App from './components/022.scoped-slot/App.vue'
import App from './components/023.directive/App.vue'

// 导入需要被全局注册的组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'

// 导入 axios
import axios from 'axios'

/* 
    3.调用 createApp 函数，创建 SPA 应用的实例
    用常量spa_app接收，同时把 App 组件作为参数传给 createApp 函数，表示要把 App 组件渲染到 index.html 页面上
 */
const app = createApp(App)

// 使用 app.component() 方法注册的全局组件，直接以标签的形式进行使用即可
/* 
// 短横线命名法,例如 my-swiper 和 my-search
app.component('my-swiper', Swiper)
app.component('my-test', Test) */

/* // 大驼峰命名法，例如 MySwiper 和 MySearch
app.component('MySwiper', Swiper)
app.component('MyTest', Test) */

// 通过 name 属性注册组件
app.component(Swiper.name, Swiper)
app.component(Test.name, Test)

// 全局配置 axios
// 为 axios 配置全局访问的根路径
axios.defaults.baseURL = 'https://www.escook.cn'
// 将 axios 挂载为 app 的全局自定义属性
// 每个组件通过 this 直接访问全局挂载的自定义属性
app.config.globalProperties.$http = axios

/* // 声明全局指令
// 注册一个全局自定义指令 v-focus 
app.directive('focus',{
    // 当绑定的元素在 DOM 中渲染出来，自动触发mounted函数
    mounted(el){    // 第一次插入 DOM 时触发这个函数
        el.focus()  //被绑定的元素自动获得焦点
    },
    updated(el){    //每次 DOM 更新时都会触发这个函数
        el.focus()
    },
}) */

// v-focus 自定义指令简写
app.directive('focus', (el) => {
    // 在 mounted 和 updated 时都会触发
    el.focus()
})
// 自定义 v-color 指令
app.directive('color', (el, binding) => {
    // binding.value 就是通过 等号 为指令绑定的值
    el.style.color = binding.value
})


// 4.调用 mount() 把 App 组件到模板结构，渲染 vue 实际控制的 指定的 el 区域中
app.mount('#app')