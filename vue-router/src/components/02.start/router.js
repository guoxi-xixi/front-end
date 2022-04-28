/* 
从 vue-router中按需导入两种方法：
    1. createRouter 方法用于创建路由的实例对象
    2. createWebHashHistory 用于指定路由的工作模式 (hash模式)
 */
import { createRouter, createWebHashHistory } from "vue-router";

// 导入 需要路由的组件
import MyHome from './Home.vue'
import MyMovie from './Movie.vue'
import MyAbout from './About.vue'

// 创建路由实例对象
const router = createRouter({
    // 通过history指定路由的工作模式
    history: createWebHashHistory(),
    // 指定被激活的路由链接，会应用 linkActiveClass 配置的类名
    // 默认的 router-link-active 会被覆盖
    linkActiveClass: 'router-active',
    // 通过routes数组，指定路由规则
    routes: [
        // path指向 重定向的原地址，redirect 指向 重定向的新地址
        { path: '/', redirect: '/home' },
        // path 是 hash 地址， component 是要展示的组件
        { path: '/home', component: MyHome },
        { path: '/movie', component: MyMovie },
        { path: '/about', component: MyAbout },
    ]
})

// 向外导出路由实例对象
export default router