import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// 导入独立封装的 element-ui 组件
import "./element-ui";
import { Loading } from "element-ui";

// 导入 axios
import axios from "axios";
// 配置请求根路径
// axios.defaults.baseURL = "https://www.escook.cn";
axios.defaults.baseURL = 'http://localhost:8080'
// 配置请求拦截器
let loadingInstance = null;
axios.interceptors.request.use((config) => {
  // 展示loading 效果
  loadingInstance = Loading.service({ fullscreen: true });
  // 配置 token 认证
  config.headers.Authorization = "Bearer xxx";
  console.log(config);
  // 固定写法，ruturn 参数 config
  return config;
});
// 配置响应拦截器
axios.interceptors.response.use((response) => {
  // 关闭loading 效果
  loadingInstance.close();
  return response;
});

// 通过Vue 构造函数的原型对象，全局配置axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
  // 挂载路由模块
  // router: router
  router,
});

app.$mount("#app");
