<template>
  <div class="mt-3 btn-container">
    <button type="button" class="btn" :class="active === 0 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(0)">全部</button>
    <button type="button" class="btn" :class="active === 1 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(1)">已完成</button>
    <button type="button" class="btn" :class="active === 2 ? 'btn-primary' : 'btn-secondary'" @click="onBtnClick(2)">未完成</button>
  </div>
</template>

<script>
export default {
    name: 'TodoButton',
    // 子组件同步事件给父组件
    emits:['update:active'],
    props:{
        active:{
            type: Number,
            required: true,
            default: 0,
        },
    },
    methods:{
        // 点击button时，判断当前button的状态，并同步数据给根组件
        onBtnClick(index){
            if (index === this.active) return
            this.$emit('update:active', index)
        },
    },
}
</script>

<style lang="less" scoped>
.btn-container{
    width: 400px;
    text-align: center;
}
</style>