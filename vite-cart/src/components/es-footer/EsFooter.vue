<template>
  <div class="footer-container">
      <!-- 全选区域 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isFull" @change="onCheckBoxChange">
        <label class="custom-control-label" for="fullCheck">全选</label>
      </div>
      <!-- 合计区域 -->
      <div>
          <span>合计：</span>
          <span class="amount">¥{{amount.toFixed(2)}}</span>
      </div>
      <!-- 结算区域 -->
      <button type="button" class="btn btn-primary btn-settle" :disabled="total === 0">结算（{{total}}）</button>
  </div>
</template>

<script>
export default {
    name: 'Esfooter',
    emits:['fullChange'],
    props:{
        // 已勾选商品的总价格
        amount:{
            type: Number,
            default: 0,
        },
        // 已勾选商品的总数量
        total:{
            type: Number,
            default: 0,
        },
        // 全选按钮的选中状态
        isFull:{
            type: Boolean,
            default: false,
        },
    },
    methods:{
        // 监听复选框选中的状态
        onCheckBoxChange(e){
            // e.target.checked 是复选框最新选中的状态
            // console.log(e.target.checked)
            this.$emit('fullChange',e.target.checked)
        }
    }
}
</script>

<style lang="less" scoped>
.footer-container{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #efefef;
    z-index: 999;
    // 内部元素对齐方式
    display: flex;
    justify-content: space-between;
    align-items: center;    // 垂直居中
    // 设置左右padding
    padding: 0 10px;
    
}
.amount{
    color: red;
    // 加粗
    font-weight: bold;
}
.btn-settle{
    min-width: 90px;
    height: 38px;
    border-radius: 19px;
}
</style>