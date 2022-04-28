<template>
  <h3>Counter 组件 --- {{ count }}</h3>
  <hr />
  <!-- <button @click="count += 1">+1</button> -->
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
  methods:{
      add(){
          this.count++
      }
  }
};
</script>

<style>
</style>