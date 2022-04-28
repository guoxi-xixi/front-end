<template>
  <h1>App.vue 根组件</h1>
  <hr />
  <my-com>
    <p>自定义内容</p>
  </my-com>
</template>

<script>
import MyCom from './MyCom.vue'

export default {
  name: "MyApp",
  components:{
      MyCom,
  }
};
</script>

<style>
</style>