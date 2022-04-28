import Vue from "vue";
import VueRouter from "vue-router";

// Vue挂载 VueRouter
Vue.use(VueRouter);

import UserList from "@/components/UserList.vue";
import UserDetail from "@/components/UserDetail.vue";

// 创建路由实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: "/", redirect: "/users" },
    { path: "/users", component: UserList },
    { path: "/users/:id", component: UserDetail, props: true },
  ],
});

// 向外共享
export default router;
