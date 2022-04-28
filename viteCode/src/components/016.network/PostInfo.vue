<template>
  <div>
    <h3>Post Info 组件</h3>
    <hr />
    <button @click="postInfo">发起 POST 请求</button>
  </div>
</template>

<script>
export default {
  name: "PostInfo",
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post("/api/post", {
        name: "zs",
        age: 22,
      });
      console.log(res);
    },
  },
};
</script>

<style>
</style>