<template>
  <h1>App.vue 根组件 --- {{ count }}</h1>
  <button @click="count += 1">+1</button>
  <hr />
  <!-- 自定义事件 子组件向父组件传递数据 -->
  <!-- <my-son :num="count" @numChange="getNum"></my-son> -->
  <!-- 数据同步 接收子组件数据 -->
  <my-son v-model:num="count"></my-son>
</template>
<script>
import MySon from "./Son.vue";

export default {
  name: "MyApp",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    MySon,
  },
/*   methods: {
    //  接收 自定义事件 子组件向父组件传递数据
    getNum(num) {
      this.count = num;
    },
  }, */
};
</script>
<style>
</style>