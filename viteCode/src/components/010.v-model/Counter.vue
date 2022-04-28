<template>
  <p>counter 组件 counter值为：{{ number }}</p>
  <button @click="add">+1</button>
</template>
<script>
export default {
  name: "MyCounter",
//   父组件向子组件 同步数据，需要子组件 自定义属性提供给 父组件 同步数据
// 通过 props 接收父组件传递过来的数据
  props:['number'],
//   子组件向父组件同步数据，需要子组件自定义事件提供给父组件
// 在子组件中声明 emits 自定义事件，格式为 update:xxx
  emits:['update:number'],
  methods:{
      add(){
        //   调用 $emit() 触发自定义事件，更新父组件中的数据
          this.$emit('update:number',this.number + 1)
      }
  }
};
</script>