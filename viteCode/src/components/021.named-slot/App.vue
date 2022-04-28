<template>
  <h1>App.vue 根组件</h1>
  <hr>
  <my-article>
      <!-- 在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的 形式提供其名称 -->
      <!-- <template v-slot:header> -->
      <!-- v-slot 简写 # ，例如 v-slot:header 可以被重写为 #header-->
      <template #header>
          <h1>滕王阁序</h1>
      </template>
    <!-- <template v-slot:default> -->
    <template #default>
        <p>豫章故郡，洪都新府。</p>
        <p>星分翼轸，地接衡庐</p>
        <p>襟三江而带五湖，控蛮荆而引瓯越。</p>
    </template>
    <!-- <template v-slot:footer> -->
    <template #footer>
        <p>落款：王勃</p>
    </template>
  </my-article>
</template>

<script>
import MyArticle from './/MyArticle.vue'

export default {
    name: 'MyApp',
    components:{
        MyArticle,
    },
}
</script>

<style>

</style>