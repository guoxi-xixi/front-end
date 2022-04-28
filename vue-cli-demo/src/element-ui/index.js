import Vue from "vue";

// // 导入并注册 element-ui 组件
// import ElementUI from 'element-ui';
// // 导入 element ui 样式的组件
// import 'element-ui/lib/theme-chalk/index.css';
// 按需导入 element-ui 组件
import { Button, Input } from "element-ui";

// 完整 element ui 组件
// Vue.use(ElementUI)
// 按需导入

/* // 注册 element-ui 组件
Vue.component(Button.name, Button); */
// 或写为 挂载在vue上
Vue.use(Button);
Vue.use(Input);
