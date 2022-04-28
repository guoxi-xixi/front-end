<template>
  <h1>App.vue 根组件</h1>
  <hr />
  <my-home></my-home>
</template>

<script>
import MyHome from "./Home.vue";
export default {
  name: "MyApp",
  components: {
    MyHome,
  },
};
</script>

<style>
</style>