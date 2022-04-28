// 按需导入对应的函数
import { createRouter, createWebHashHistory } from "vue-router";

// 导入需要路由的组件
import Login from "./components/MyLogin.vue";
import Home from "./components/MyHome.vue";

import Users from "./components/menus/MyUsers.vue";
import Rights from "./components/menus/MyRights.vue";
import Goods from "./components/menus/MyGoods.vue";
import Orders from "./components/menus/MyOrders.vue";
import Settings from "./components/menus/MySettings.vue";
import UserDetail from "./components/user/MyUserDetail.vue";

// 创建路由对象
const router = createRouter({
  // 通过history指定路由的工作模式
  history: createWebHashHistory(),
  // 通过routes数组，指定路由规则
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login, name: "login" },
    {
      path: "/home",
      component: Home,
      name: "home",
      //   用户访问 home 页面，重定向到 /home/users
      redirect: "/home/users",
      //   子路由规则
      children: [
        { path: "users", component: Users },
        { path: "rights", component: Rights },
        { path: "goods", component: Goods },
        { path: "orders", component: Orders },
        { path: "settings", component: Settings },
        // 用户详情页路由规则
        { path: "users/:id", component: UserDetail, props: true },
      ],
    },
  ],
});

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问登录页面，直接放行
  if (to.path === "/login") return next();
  // 获取token值
  const tokenStr = localStorage.getItem("token");
  if (!tokenStr) {
    // token值不存在，强制跳转登录页
    return next("/login");
  } else {
    // 存在token值，直接放行
    return next();
  }
});

// 向外共享 router 模块
export default router;
