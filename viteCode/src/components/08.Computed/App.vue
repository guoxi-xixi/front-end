<template>
    <h1>这是 App.vue 根组件</h1>
    <hr>
    <my-counter></my-counter>
</template>
<script>
import MyCounter from './MyCounter.vue'

export default {
    name: 'MyApp',
    components:{
        MyCounter
    },
}
</script>