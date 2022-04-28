<template>
  <h3>LifeCycle组件 --- {{ count }}</h3>
  <button @click="count++">+1</button>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      count: 0,
    };
  },
  //   在内存中开始创建组件之前
  beforeCreate() {
    console.log("beforeCreate 发起 count 请求" + this.count);
  },
  //  组件在内存中被创建完毕了
  created() {
    console.log("created:组件在内存中被创建完毕了!");
    console.log("created 发起 count 请求" + this.count);
  },
  //   组件初次在页面中渲染完毕
  mounted() {
    console.log("mounted:组件初次在页面中渲染完毕!");
  },
  // 组件在页面中被重新渲染完毕
  updated() {
    console.log("updated:组件在页面中被重新渲染完毕!");
  },
  // 组件销毁完毕(页面和内存)
  unmounted() {
    console.log("unmounted:组件销毁完毕(页面和内存)!");
  },
};
</script>

<style>
</style>