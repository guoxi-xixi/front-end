<template>
  <h1>App.vue 根组件</h1>
  <hr />

  <div class="brother-box">
      <my-left></my-left>
      <my-right></my-right>
  </div>
</template>

<script>
import MyLeft from "./Left.vue";
import MyRight from "./Right.vue";

export default {
  name: "MyApp",
  components: {
    MyLeft,
    MyRight,
  },
};
</script>

<style lang="less" scoped>
.brother-box {
  display: flex;
  > div {
    border: 1px solid #ccc;
    flex: 1;
    margin: 10px;
    padding: 10px;
    height: 300px;
  }
}
</style>