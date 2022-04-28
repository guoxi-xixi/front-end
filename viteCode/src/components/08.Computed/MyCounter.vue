<template>
  <input type="text" v-model.number="count" />
  <p>计算属性计算：{{ count }} * 2 = {{ plus }}</p>
  <p>计算属性计算：{{ count }} * 2 = {{ plus }}</p>
  <p>计算属性计算：{{ count }} * 2 = {{ plus }}</p>
  <hr />
  <p>计算方法计算：{{ count }} * 2 = {{ plus1() }}</p>
  <p>计算方法计算：{{ count }} * 2 = {{ plus1() }}</p>
  <p>计算方法计算：{{ count }} * 2 = {{ plus1() }}</p>
</template>
<script>
export default {
  name: "MyCounter",
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    plus() {
      // 计算属性的结果会被缓存，性能更好
      // 计算属性，监听 data 中 count 值的变化，自动计算出 count*2 的新值
      console.log("计算属性被执行了");
      return this.count * 2;
    },
  },
  methods: {
    plus1() {
      // 方法的计算结果无法缓存，性能低
      console.log("计算方法被执行了");
      return this.count * 2;
    },
  },
};
</script>