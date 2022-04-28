<template>
  <h1>App.vue 根组件</h1>
  
  <!-- 声明路由链接 -->
  <router-link to="/home">首页</router-link>&nbsp;
  <router-link to="/movie">电影</router-link>&nbsp;
  <router-link to="/about">关于</router-link>&nbsp;
  <hr>

  <!-- 声明路由占位符 -->
  <router-view></router-view>
</template>

<script>
export default {
    name: 'MyApp'
}
</script>

<style>

</style>