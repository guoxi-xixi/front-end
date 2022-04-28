<template>
    <!-- 手动分配 写死唯一自定义属性 -->
    <!-- <div data-v-002>
        <h3 class="title" data-v-002>这是 List.vue 的组件</h3>
        <p data-v-002>这是 List.vue 中的 p 标签</p>
        <p data-v-002>这是 List.vue 中的 p 标签</p>
    </div> -->

    <!-- style scoped自动生成 唯一自定义属性 -->
    <div>
        <h3 class="title">这是 List.vue 的组件</h3>
        <p>这是 List.vue 中的 p 标签</p>
        <p>这是 List.vue 中的 p 标签</p>
    </div>
</template>
<script>
export default {
    name: 'MyList'
}
</script>
<style lang="less" scoped>

</style>