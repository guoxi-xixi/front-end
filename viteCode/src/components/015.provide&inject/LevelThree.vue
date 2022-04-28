<template>
  <!-- 响应式数据 必须以 .value 的形式进行使用 -->
  <h3>Level Three 三级组件 --- {{ color.value }} --- {{ count }}</h3>
  <hr />
</template>

<script>
export default {
  name: "LevelThree",
  // 子孙节点，使用 inject 接收父节点向下共享的 color 数据
  inject: ['color','count'],
};
</script>

<style>
</style>