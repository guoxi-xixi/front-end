<template>
  <h1>这是 App.vue 根组件</h1>
  <hr />
  <my-count :count="100" :state="false" :info="'abc'" type="a"></my-count>
</template>
<script>
import MyCount from "./Count.vue";

export default {
  name: "MyApp",
  components: {
    MyCount,
  },
};
</script>