<template>
  <h1 ref="myh1">App.vue 根组件</h1>
  <hr />
  <button @click="getRefs">获取 $refs 引用</button>
  <my-counter ref="counterRef"></my-counter>
</template>

<script>
import MyCounter from "./MyCounter.vue";

export default {
  name: "MyApp",
  methods: {
    getRefs() {
      // this 表示当前组件的实例对象 this.$refs默认指向空对象
      // 通过 this.$refs.引用名称 可以获取到 DOM 元素的引用
      console.log(this.$refs.myh1);
      // 操作 DOM 元素，把字体变为红色
      this.$refs.myh1.style.color = "red";
      this.$refs.counterRef.add()
    },
  },
  components: {
    MyCounter,
  },
};
</script>

<style lang="less" scoped>
</style>