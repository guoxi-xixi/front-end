<template>
  <h1>App.vue 根组件</h1>
  <hr />

  <!-- 使用对应的组件 -->
  <div class="box">
      <get-info></get-info>
      <post-info></post-info>
  </div>
</template>

<script>
import GetInfo from './GetInfo.vue'
import PostInfo from './PostInfo.vue'

export default {
  name: "MyApp",
  components:{
      GetInfo,
      PostInfo,
  },
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  > div {
    flex: 1;
    border: 1px solid #eee;
    margin: 15px;
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0px 1px 4px #ccc;
    min-height: 200px;
  }
}
</style>