<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- 当前组件的 DOM 结构，需定义到 template 标签内部 -->
  <h1>这是 <i>App.vue</i> 根组件</h1>
  <!-- 使用插值表达式：{{}} -->
  <p>生成一个随机数字：{{(Math.random()*10).toFixed(1)}}</p>
  <hr>
  <p>count值是：{{count}}</p>
  <button @click="addCount">+1</button>
  <hr>
  -----------------
  <my-swiper></my-swiper>
  <MySwiper></MySwiper>
  <my-test></my-test>
  <MyTest></MyTest>
  <my-search></my-search>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

// 导入局部注册的组件
import Search from './components/02.privateReg/Search.vue'

// 组件相关的 data数据，methods 方法等都要定义到export default{}的对象中
export default{
  // name 属性指向的是当前组件的名称
  name: 'MyApp',
  // 组件的数据
  data(){
    // return出去的对象，就是当前组件渲染期间需要用到的数据对象
    return{
      count: 0
    }
  },
  methods: {  // 处理函数
    addCount(){
      this.count++
    }
  },
  components: {
    'my-search': Search,
  }
}
</script>

<style lang="less">
h1{
  color: red;
  i {
    color: green;
  }
}
</style>