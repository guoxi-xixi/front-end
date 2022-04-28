<template>
  <!-- 组件访问 State 中数据的第二种方式:通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性 -->
  <h3>最新的store中state中的counter值:{{ count }}</h3>
  <h3>最新的store中getters中的counter值:{{ showNum }}</h3>
  <button @click="btnHandler1">-1</button>&nbsp;
  <button @click="btnHandler2(3)">-N</button>&nbsp;
  <button @click="subAsync">-1 Async</button>&nbsp;
  <button @click="subNAsync(3)">-N Async</button>&nbsp;
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Subtraction",
  //   将全局数据，映射为当前组件的计算属性
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync", "subNAsync"]),
    btnHandler1() {
      this.sub();
    },
    btnHandler2(n) {
      this.subN(n);
    },
  },
};
</script>

<style>
</style>