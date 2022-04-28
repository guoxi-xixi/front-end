<template>
    <!-- 手动分配 写死唯一自定义属性 -->
   <!-- <div data-v-001>
        <h1 data-v-001>这是 App.vue 根组件</h1>
        <p data-v-001>App 中的 p 标签</p>
        <p data-v-001>App 中的 p 标签</p>
        <hr data-v-001>
        <my-list data-v-001></my-list>
   </div> -->

   <!-- style scoped自动生成 唯一自定义属性 -->
   <div>
        <h1>这是 App.vue 根组件</h1>
        <p>App 中的 p 标签</p>
        <p>App 中的 p 标签</p>
        <hr>
        <my-list></my-list>
   </div>
</template>
<script>
import MyList from './List.vue'

export default {
    name: 'MyApp',
    components: {
        MyList
    }
}
</script>
<style lang="less" scoped>
// // 使用每个vue组件中手动分配的 唯一自定义属性，不推荐
// p[data-v-001]{
//     color: red;
// }

// 使用每个vue组件中scoped自动生成的 唯一自定义属性
p{
    color: red;
}

// 给当前组件的 style 节点添加了 scoped 属性，则当前组件的样式对其子组件是不生效的。如果想让某些样 式对子组件生效，可以使用 /deep/ 深度选择器。
/* // vue2.x 写法，vue3.x不推荐使用
/deep/ .title{
    color: green;
} */

// vue3.x写法
:deep(.title){
    color: greenyellow;
}
</style>