<template>
    <div class="app_container">
        <h1>这是 App.vue 根组件</h1>
        <hr>
        <my-header title="Vue测试组件" bgcolor="blue" color="#fff"></my-header>
    </div>
</template>
<script>
import MyHeader from './06.MyHeader/MyHeader.vue'

export default {
    name: 'MyApp',
    components: {
        MyHeader
    }
}
</script>
<style lang="less" scoped>
.app_container{
    margin-top: 45px;
}
</style>