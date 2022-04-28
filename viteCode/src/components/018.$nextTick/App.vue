<template>
  <h1>App.vue 根组件</h1>
  <hr>
  <input type="text" class="form-control" v-if="inputVisible" ref="ipt"/>
  <button type="button" class="btn btn-primary" v-else @click="showInput">展示 input 输入框</button>
</template>

<script>
export default {
    name: 'MyApp',
    data(){
        return{
            // 控制文本框和按钮的按需切换
            inputVisible: false,
        }
    },
    methods:{
        // 切换 布尔值，显示文本框
        showInput(){
            // 要展示文本框 
            this.inputVisible = true
            /* console.log(this.$refs.ipt) // undefined
            // 元素变更是异步操作，直接 操作 DOM 元素会报错未定义
            this.$refs.ipt.focus() */
            this.$nextTick(()=>{
                console.log(this.$refs.ipt)
                // 获取到文本框的引用对象，然后调用focus()方法
                this.$refs.ipt.focus()
            })
        },
    },
}
</script>

<style lang="less" scoped>
input.form-control {
  width: 280px;
  display: inline;
  vertical-align: bottom;
}
</style>