<template>
    <div>
        <h3>标题：{{title}}</h3>
        <h4>作者：{{author}}</h4>
        <h5>发布时间：{{pubTime}}</h5>
    </div>
</template>

<script>
export default {
    name: 'MyArticle',
    // 父组件中传递给 my-article 组件的数据，必须在 props 节点中声明
    props: ['title','author','pubTime']
}
</script>