<template>
  <h1>这是 App.vue 根组件</h1>
  <hr />
  <!-- 使用 TodoInput 组件 -->
  <todo-input @add="onAddNewTask"></todo-input>
  <!-- 使用TodoList 组件 -->
  <!-- 渲染出所有任务列表 -->
  <!-- <todo-list :list="todoList"></todo-list> -->
  <!-- 动态渲染出 对应状态的任务列表 -->
  <todo-list :list="taskList"></todo-list>
  <!-- 使用TodoButton 组件 -->
  <todo-button v-model:active="activeBtnIndex"></todo-button>
</template>

<script>
// 导入 TodoList 组件
import TodoList from "./components/todo-list/TodoList.vue";
// 导入 TodoInput 组件
import TodoInput from "./components/todo-input/TodoInput.vue";
// 导入 TodoButton 组件
import TodoButton from "./components/todo-button/TodoButton.vue";

export default {
  name: "MyApp",
  data() {
    return {
      // 任务列表数据
      todoList: [
        { id: 1, task: "周一早晨9点开会", done: false },
        { id: 2, task: "周一晚上8点聚餐", done: false },
        { id: 3, task: "准备周三上午的演讲稿", done: true },
      ],
      // 下一个可用的id
      nextId: 4,
      activeBtnIndex: 0,
    };
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  methods: {
    // 添加任务
    onAddNewTask(taskName) {
      this.todoList.push({
        id: this.nextId,
        task: taskName,
        done: false,
      });
      this.nextId++;
    },
  },
  computed: {
    // 根据button 状态计算并 同步过滤任务列表并渲染
    taskList() {
      switch (this.activeBtnIndex) {
        case 0:
          return this.todoList;
        case 1:
          return this.todoList.filter((x) => x.done === true);
        case 2:
          return this.todoList.filter((x) => x.done !== true);
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>