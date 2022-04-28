<template>
  <div>
    <h3>MyHome 组件</h3>
    <router-link :to="{ name: 'mov', params: { id: 1 } }">导航到Movie页面1</router-link>
    <br>
    <button class="btn btn-primary btn-sm" @click="goToMovie(3)">导航到Movie页面3</button>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  methods: {
    goToMovie(id) {
      this.$router.push({ name: "mov", params: { id: id } });
    },
  },
};
</script>

<style lang="less" scoped></style>
