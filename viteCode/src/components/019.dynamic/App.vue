<template>
  <h1>App.vue 根组件</h1>
  <button @click="comName = 'MyHome'">首页</button>
  <button @click="comName = 'MyMovie'">电影</button>
  <hr />
  <!-- 引用组件 -->
  <!-- <my-home></my-home>
  <my-movie></my-movie> -->

  <!-- 没被keep-alive标签包裹的 component标签切换后 被销毁 -->
  <!-- 通过is属性，动态指定要渲染的组件名称 -->
  <!-- <component :is="comName"></component> -->

  <!-- 使用 vue 内置的 <keep-alive> 组件保持动态组 件的状态 -->
  <keep-alive>
    <component :is="comName"></component>
  </keep-alive>
</template>

<script>
import MyHome from "./Home.vue";
import MyMovie from "./Movie.vue";

export default {
  name: "MyApp",
  components: {
    MyHome,
    MyMovie,
  },
  data() {
    return {
      comName: "MyHome",    //当前要渲染组件的名称
    };
  },
};
</script>

<style>
</style>