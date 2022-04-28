<template>
  <table class="table table-bordered table-striped">
    <!-- 标题区域 -->
    <thead>
      <tr>
        <!-- 为使表单更通用，使用具名插槽的方式 让组件的使用者自定义表单 -->
        <!-- <td></td>
        <td></td>
        <td></td>
        <td></td> -->
        <slot name="head"></slot>
      </tr>
    </thead>
    <!-- 内容主题区域 -->
    <tbody>
      <!-- 循环渲染表单内容 -->
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
</style>