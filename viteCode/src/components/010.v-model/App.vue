<template>
    <h1>App.vue 根组件 count值：{{count}}</h1>
    <button @click="count+=1">+1</button>
    <hr />
    <!-- 父组件通过 v-bind: 属性绑定的形式，把数据传递给子组件 -->
    <!-- 子组件向父组件同步数据，在 v-bind: 指令之前添加 v-model 指令 -->
    <my-counter v-model:number="count"></my-counter>
</template>
<script>
import MyCounter from './Counter.vue'

export default {
    name: 'MyApp',
    data(){
        return {
            count: 0,
        }
    },
    components:{
        MyCounter
    },
}
</script>