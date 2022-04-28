<template>
  <h1>App.vue 根组件</h1>
  <a href="#/home">Home</a>&nbsp; <a href="#/movie">Movie</a>&nbsp;
  <a href="#/about">About</a>&nbsp;
  <hr />
  <component :is="comName"></component>
</template>

<script>
import MyHome from "./Home.vue";
import MyAbout from "./About.vue";
import MyMovie from "./Movie.vue";

export default {
  name: "MyApp",
  components: {
    MyHome,
    MyAbout,
    MyMovie,
  },
  data() {
    return {
      comName: "MyHome",
    };
  },
  created() {
    // 监听 hash 值变化的事件
    window.onhashchange = () => {
      // 通过 location.hash 获取到最新的 hash 值，并进行匹配
      switch (location.hash) {
        case "#/home":
          this.comName = "MyHome";
          break;
        case "#/movie":
          this.comName = "MyMovie";
          break;
        case "#/about":
          this.comName = "MyAbout";
          break;
        default:
          this.comName = "MyHome";
          break;
      }
    };
  },
};
</script>

<style>
</style>