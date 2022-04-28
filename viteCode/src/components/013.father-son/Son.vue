<template>
  <h3>Son 子组件 --- {{ num }}</h3>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name: "MySon",
  props: ["num"],
// 自定义事件向父组件传递数据
//   emits: ["numChange"],
// 数据同步 子组件向父组件传递数据
  emits:['update:num'],
  methods: {
    add() {
        // 自定义事件向父组件传递数据
    //   this.$emit("numChange", this.num + 1);
    // 数据同步，更新子组件数据同步到父组件
      this.$emit("update:num", this.num + 1);
    },
  },
};
</script>

<style>
</style>