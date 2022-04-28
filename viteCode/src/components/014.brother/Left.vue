<template>
  <div>
    <h3>数据发送方 --- count 的值为：{{ count }}</h3>
    <button @click="add">+1</button>
  </div>
</template>

<script>
import bus from "./eventBus";
export default {
  name: "MyLeft",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      bus.emit("getCount", this.count);
    },
  },
};
</script>

<style lang="less" scoped>
</style>