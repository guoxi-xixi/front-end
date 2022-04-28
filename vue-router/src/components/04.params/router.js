/* 
从 vue-router中按需导入两种方法：
    1. createRouter 方法用于创建路由的实例对象
    2. createWebHashHistory 用于指定路由的工作模式 (hash模式)
 */
import { createRouter, createWebHashHistory } from "vue-router";

// 导入需要路由的组件
import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'

import MyTab1 from './tabs/MyTab1.vue'
import MyTab2 from './tabs/MyTab2.vue'

// 创建路由实例对象
const router = createRouter({
    // 通过history指定路由的工作模式
    history: createWebHashHistory(),
    // 指定被激活路由链接的类名
    linkActiveClass: 'router-active',
    // 通过routes数组，指定路由规则
    routes: [
        // path 是 hash 地址，redirect是重定向地址，component 是 需要展示的组件
        { path: '/', redirect: '/home' },
        { path: '/home', component: MyHome },
        {
            // 路由中的动态参数以 : 进行声明，冒号后面是动态参数传参的名称
            path: '/movie/:id',
            component: MyMovie,
            // 定义路由规则，声明props：true选项，即可在movie 组件中，以props 的形式接收到路由匹配规则匹配到的参数 
            props: true
        },
        {   // about 父页面路由规则
            path: '/about',
            component: MyAbout,
            redirect: '/about/tab1',
            children: [ // 通过 children 属性嵌套子级路由规则
                { path: 'tab1', component: MyTab1 },
                { path: 'tab2', component: MyTab2 }
            ]
        }
    ]
})

export default router