<template>
  <h1>App.vue 根组件 --- {{ color }}</h1>
  <button @click="color = 'blue'">toggle blue</button>
  <hr />
  <level-two></level-two>
</template>

<script>
import LevelTwo from "./LevelTwo.vue";
import { computed } from "vue";

export default {
  name: "MyApp",
  data() {
    return {
      color: "red",
    };
  },
  components: {
    LevelTwo,
  },
  provide() {
    //provide 函数 return 对象中，包含了 向子孙共享的数据
    // 返回要共享的数据对象
    return {
      // color: this.color,  // 只能传递静态数据
      color: computed(() => this.color), // 传递响应式数据
      count: 1,
    };
  },
};
</script>

<style>
</style>