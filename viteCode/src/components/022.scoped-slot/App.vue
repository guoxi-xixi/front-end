<template>
  <h1>App.vue 根组件</h1>
  <hr />
  <my-test>
    <!-- 默认使用方法，scope 输出值为一个对象 -->
    <!-- <template #default="scope">
      {{ scope }}
    </template> -->
    <!-- 解构赋值简化数据的接收过程 -->
    <template #default="{ info, msg }">
      <!-- 使用作用域插槽的数据 -->
      <p>{{ info }}</p>
      <p>{{ info.address }}</p>
      <p>{{ msg }}</p>
    </template>
  </my-test>
  <hr />
  <my-table>
    <template #default="{ user }">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>
        <input type="checkbox" name="" id="" :checked="user.state" />
      </td>
    </template>
  </my-table>
</template>

<script>
import MyTest from "./MyTest.vue";
import MyTable from "./MyTable.vue";

export default {
  name: "MyApp",
  components: {
    MyTest,
    MyTable,
  },
};
</script>

<style>
</style>