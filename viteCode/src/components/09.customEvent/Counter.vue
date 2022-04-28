<template>
  <p>count值为：{{ count }}</p>
  <button @click="add">+1</button>
</template>
<script>
export default {
  name: "MyCounter",
  data() {
    return {
      count: 0,
    };
  },
  //   my-counter 组件的自定义事件，必须先在 emits 节点声明
  emits: ["addChange"],
  methods: {
    add() {
      this.count++;
      this.$emit("addChange", this.count); //当点击 +1 button时，调用 this.$emit() 方法，触发自定义的 addChange 事件
    },
  },
};
</script>