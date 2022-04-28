<template>
  <h1>这是 App.vue 根组件</h1>
  <hr>
  <my-watch></my-watch>
</template>

<script>
import MyWatch from "./MyWatch.vue";
export default {
  name: "MyApp",
  components: {
    MyWatch,
  },
};
</script>

<style lang="less" scoped>
</style>