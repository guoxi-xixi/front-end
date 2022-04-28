<template>
  <div>
    <h3>MyMovie 组件 --- $route.params.id:{{ $route.params.id }}</h3>
    <h3>MyMovie 组件 --- props.id:{{ id }}</h3>
    <button class="btn btn-danger btn-sm" @click="goBack">返回上一页</button>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  props: ["id"],
  methods: {
    goBack() {
      // 返回到之前的组件页面
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped></style>
