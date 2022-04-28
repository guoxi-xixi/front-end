<template>
  <h1>这是 App.vue 根组件</h1>
  <hr />
  <my-counter @addChange="getCount"></my-counter>
</template>
<script>
import MyCounter from "./Counter.vue";

export default {
  name: "MyApp",
  components: {
    MyCounter,
  },
  methods: {
    getCount(val) {
      console.log("获取 MyCouter 自定义监听事件 addChange!", val);
    },
  },
};
</script>