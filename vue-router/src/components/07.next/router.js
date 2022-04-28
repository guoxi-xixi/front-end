import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './Home.vue'
import Main from './Main.vue'
import Login from './Login.vue'

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/main', component: Main },
    { path: '/login', component: Login },
  ],
})

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // 获取token
  const token = localStorage.getItem('token')
  if (to.path === '/main' && !token) {  // 访问后台主页且 token 值不存在
    // 用户访问后台主页
    // next()  // 直接放行
    // next(false) // 强制停留在当前页面
    next('/login')  // 强制跳转到登录页面
  } else {
    next()  // 直接放行
  }
})

export default router
