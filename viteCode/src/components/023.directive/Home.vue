<template>
  <div class="home-container">
    <h3 v-color="'green'">MyHome 组件 --- {{ count }}</h3>
    <hr />

    <!-- 使用自定义指令，需要加上 v- 前缀 -->
    <input type="text" class="form-control" v-focus v-color="'cyan'" />
    <button type="button" class="btn btn-primary" @click="count += 1">
      +1
    </button>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  data() {
    return {
      count: 0,
    };
  },
  //   自定义私有属性
  // 声明自定义属性 不需要加 v- ，直接声明指令名称 focus
  directives: {
    //   当绑定的元素在 DOM 中渲染出来，自动触发mounted函数
      focus:{
          mounted(el){
              el.focus()    //被绑定的元素自动获得焦点
          },
      },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  border: 1px solid #efefef;
  box-shadow: 0px 1px 10px #efefef;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
}

input.form-control {
  width: 280px;
}
</style>
