<template>
  <!-- 组件访问 State 中数据的第一种方式：this.$store.state.全局数据名称 -->
  <!-- <h3>最新的counter值:{{this.$store.state.count}}</h3> -->
  <!-- 插值表达式中的 this 可以省略 -->
  <h3>最新的store中state中的counter值:{{ $store.state.count }}</h3>
  <h3>最新的store中getters中的counter值:{{ $store.getters.showNum }}</h3>
  <button @click="btnHandler1">+1</button>&nbsp;
  <button @click="btnHandler2(2)">+N</button>&nbsp;
  <button @click="btnHandler3">+1 Async</button>&nbsp;
  <button @click="btnHandler4(2)">+N Async</button>&nbsp;
</template>

<script>
export default {
  name: "Addition",
  //   触发 mutation
  methods: {
    btnHandler1() {
      //   触发 mutations 的第一种方式
      this.$store.commit("add");
    },
    btnHandler2(n) {
      // this.$store.commit() 是触发 mutations 时携带参数
      this.$store.commit("addN", n);
    },
    btnHandler3() {
        // this.$store.dispatch() 是触发 actions 的第一种方式
      this.$store.dispatch("addAsync");
    },
    btnHandler4(n) {
        // this.$store.dispatch() 是触发 actions 的第一种方式
      this.$store.dispatch("addNAsync", n);
    },
  },
};
</script>

<style>
</style>