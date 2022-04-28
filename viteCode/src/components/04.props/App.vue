<template>
    <div>
        <h1>这是 App.vue 根组件</h1>
        <hr>

        <!-- 通过自定义的props 把文章的标题，作者，发布时间 传递到 my-article 组件中 -->
        <!-- <my-article title="面朝大海，春暖花开" author="海子" pubTime="1998"></my-article> -->

        <!-- 动态绑定 props 的值，通过 v-bind 属性绑定，为这些参数动态传递数据 -->
        <my-article :title="info.title" :author="'post by ' + info.author" :pubTime="info.pubTime"></my-article>
    </div>
</template>

<script>
import MyArticle from './Article.vue'
export default {
    name: 'MyApp',
    data(){
        return{
            info:{
                title: 'aaabbbccc',
                author: '111222333',
                pubTime: '1998'
            }
        }
    },
    components: {
        MyArticle
    }
}
</script>